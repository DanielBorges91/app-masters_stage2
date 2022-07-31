import { DonationsRepository } from "../../repositories/implementations/DonationsRepository";
import { CreateDonationController } from "./CreateDonationController";
import { CreateDonationUseCase } from "./CreateDonationUseCase";

const donationsRepository = DonationsRepository.getInstance();

const createDonationUseCase = new CreateDonationUseCase(donationsRepository);

const createDonationController = new CreateDonationController(createDonationUseCase);

export { createDonationController };