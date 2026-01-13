import express from "express";
import {
  createGig,
  getGigs,
} from "../controllers/gig.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Get all open gigs (with search)
router.get("/", getGigs);

// Create a new gig (logged-in user)
router.post("/", protect, createGig);

export default router;
