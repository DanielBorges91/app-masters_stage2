import { AppError } from '../../AppError'
import { DonationsRepositoryInMemory } from '../../repositories/in-memory-tests/DonationsRepositoryInMemory'
import { CreateDonationUseCase } from "./CreateDonationUseCase";

let createDonationUseCase: CreateDonationUseCase;
let donationsRepositoryInMemory: DonationsRepositoryInMemory;

describe("Teste para cadastro de doações", () => {

  beforeEach(() => {
    donationsRepositoryInMemory = new DonationsRepositoryInMemory();
    createDonationUseCase = new CreateDonationUseCase(donationsRepositoryInMemory);
  })

  it("Deve ser possível criar uma nova doação", async () => {
    createDonationUseCase.execute({
      "name": "Daniel Borges",
      "email": "danielborgesbr@gmail.com",
      "phone": "32987120314",
      "zip": "36000-000",
      "city": "Juiz de Fora",
      "state": "Minas Gerais",
      "streetAddress": "Rua Jose das Couves",
      "number": 1,
      "complement": "Casa",
      "neighborhood": "Santo Antônio",
      "deviceCount": 3,
      "devices": [
          {"type": "notebook", "condition": "Boa"},
          {"type": "notebook", "condition": "Precisa de reparo na placa"},
          {"type": "screen", "condition": "Bom pra caramba"}
      ]
    })

    const donationCreated = await donationsRepositoryInMemory.findByName("Daniel Borges")

    expect(donationCreated).toHaveProperty("id");

  });

  // it("Não deve ser possível criar uma doação com campos faltando", async () => {

  //   expect(async () => {
  //     await createDonationUseCase.execute({
  //       "name": "Daniel Borges",
  //       "email": "danielborgesbr@gmail.com",
  //       "deviceCount": 3,
  //       "devices": [
  //           {"type": "notebook", "condition": "Boa"},
  //           {"type": "notebook", "condition": "Precisa de reparo na placa"},
  //           {"type": "screen", "condition": "Bom pra caramba"}
  //       ]
  //     })
  //   }).rejects.toBeInstanceOf(AppError)
  // })
})