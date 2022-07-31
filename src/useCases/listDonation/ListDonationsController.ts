import { Request, Response } from "express";
import { ListDonationsUseCase } from "./ListDonationsUseCase";


class ListDonationsController {
  constructor(private listDonationsUseCase: ListDonationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listDonationsUseCase.execute();

    return response.json(all);
  }
}

export {ListDonationsController}