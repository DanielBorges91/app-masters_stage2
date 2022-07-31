import { Router } from "express";
import { donationsRoutes } from "./donations.routes";

const router = Router();

router.use('/donation', donationsRoutes);

export { router }