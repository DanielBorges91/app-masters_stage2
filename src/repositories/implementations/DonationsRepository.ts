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

  async create(data: ICreateDonationDTO): Promise<void> {
    const donation = new Donation();

    Object.assign(donation, data);

    this.donations.push(donation);
  }

  async list(): Promise<Donation[]> {
    return await this.donations;
  }

  async findByName(name: string): Promise<Donation> {
    return this.donations.find((donation) => donation.name === name)
  }
}

export { DonationsRepository };