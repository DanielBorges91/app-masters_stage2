import { Request, Response } from "express";
import { AppError } from "../../AppError";
import { ICreateDonationDTO } from "../../repositories/IDonationsRepository";
import { CreateDonationUseCase } from "./CreateDonationUseCase";

import * as EmailValidator from 'email-validator';
import { Devices } from "../../model/Donation";

class CreateDonationController {
  constructor(private createDonationUseCase: CreateDonationUseCase) {}

  handle(request: Request, response: Response): Response {
    const data: ICreateDonationDTO = request.body;
    const requiredFields = [];

    if(!data.name) {requiredFields.push('name')}
    if(!data.email) {requiredFields.push('email')}
    if(!data.phone) {requiredFields.push('phone')}
    if(!data.zip) {requiredFields.push('zip')}
    if(!data.city) {requiredFields.push('city')}
    if(!data.state) {requiredFields.push('state')}
    if(!data.streetAddress) {requiredFields.push('streetAddress')}
    if(!data.number) {requiredFields.push('number')}
    if(!data.complement) {requiredFields.push('complement')}
    if(!data.neighborhood) {requiredFields.push('neighborhood')}
    if(!data.deviceCount) {requiredFields.push('deviceCount')}
    if(!data.devices || data.devices.length === 0) {requiredFields.push('devices')}
    // if(data.devices.length < 1) {requiredFields.push('devices')}


    if(requiredFields.length > 0) {
      throw new AppError("Todos os campos obrigatórios devem ser informados", 400, requiredFields)
    }

    if(!EmailValidator.validate(data.email)) {throw new AppError("E-mail invalido!", 400)}

    if(data.devices.length !== data.deviceCount) {throw new AppError(`A quantidade de equipamentos ${data.deviceCount} não está de acordo com as informações de equipamentos enviados ${data.devices.length}`)}

    const devices: Devices[] = data.devices;

    const typesError = devices.map(device => device.type !== 'desktop' && device.type !== 'notebook' && device.type !== 'netbook'&& device.type !== 'screen'&& device.type !== 'printer'&& device.type !== 'scanner')

    const res = typesError.filter(types => types === true)

    if(res.includes(true)) {
      throw new AppError("Não podemos continuar com devices com types incorretos!")
    }

    this.createDonationUseCase.execute(data);

    return response.json({success:true});
  }
}

export { CreateDonationController }