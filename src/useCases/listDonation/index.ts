import { DonationsRepository } from "../../repositories/implementations/DonationsRepository";
import { ListDonationsController } from "./ListDonationsController";
import { ListDonationsUseCase } from "./ListDonationsUseCase";


const donationsRepository = DonationsRepository.getInstance();

const listDonationsUseCase = new ListDonationsUseCase(donationsRepository);

const listDonationsController = new ListDonationsController(listDonationsUseCase);

export {listDonationsController}