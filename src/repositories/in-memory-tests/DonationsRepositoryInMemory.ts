import { Donation } from "../../model/Donation";
import { ICreateDonationDTO, IDonationsRepository } from "../IDonationsRepository";



class DonationsRepositoryInMemory implements IDonationsRepository {

  donations: Donation[] = [];

  async create(data: ICreateDonationDTO): Promise<void> {
    const donation = new Donation();

    Object.assign(donation, data);

    this.donations.push(donation);
  }
  async list(): Promise<Donation[]> {
    const all = await this.donations;
    return all;
  }

  async findByName(name: string): Promise<Donation> {
    return this.donations.find((donation) => donation.name === name)
  }
}

export { DonationsRepositoryInMemory }