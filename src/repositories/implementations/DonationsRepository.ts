import { Donation } from "../../model/Donation";
import { ICreateDonationDTO, IDonationsRepository } from "../IDonationsRepository";


class DonationsRepository implements IDonationsRepository {
  private donations: Donation[];

  private static INSTANCE: DonationsRepository;

  private constructor() {
    this.donations = [];
  }

  public static getInstance(): DonationsRepository {
    if(!DonationsRepository.INSTANCE) {
      DonationsRepository.INSTANCE = new DonationsRepository();
    }

    return DonationsRepository.INSTANCE;
  }

  create(data: ICreateDonationDTO): void {
    const donation = new Donation();

    Object.assign(donation, data);

    this.donations.push(donation);
  }

  list(): Donation[] {
    return this.donations;
  }
}

export { DonationsRepository };