import { Devices, Donation } from "../model/Donation"

interface ICreateDonationDTO {
  name: string;
  email: string;
  phone: string;
  zip: string;
  city: string;
  state: string;
  streetAddress: string;
  number: number;
  complement: string;
  neighborhood: string;
  deviceCount: number;
  devices: Devices[];
}

interface IDonationsRepository {
  create(data: ICreateDonationDTO): void;
  list(): Donation[];
}

export { IDonationsRepository, ICreateDonationDTO }