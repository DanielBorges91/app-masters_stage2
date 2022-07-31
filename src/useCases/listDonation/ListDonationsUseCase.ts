import { Donation } from "../../model/Donation";
import { DonationsRepository } from "../../repositories/implementations/DonationsRepository";


class ListDonationsUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  execute(): Donation[] {
    const donations = this.donationsRepository.list();

    return donations;
  }
}

export { ListDonationsUseCase }