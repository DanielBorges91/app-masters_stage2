import { Router } from "express";
import { createDonationController } from "../useCases/createDonation";
import { listDonationsController } from "../useCases/listDonation";

const donationsRoutes = Router();

donationsRoutes.post('/', (request, response) => {
  return createDonationController.handle(request, response);
});

donationsRoutes.get('/', (request, response) => {
  return listDonationsController.handle(request, response);
})

export { donationsRoutes };