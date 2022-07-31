import { ICreateDonationDTO, IDonationsRepository } from "../../repositories/IDonationsRepository";

class CreateDonationUseCase {
  constructor(private donationsRepository: IDonationsRepository) {}

  execute(data: ICreateDonationDTO): void {
    this.donationsRepository.create(data);
  }
}

export { CreateDonationUseCase };