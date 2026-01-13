import express from "express";
import {
  placeBid,
  getBidsByGig,
  hireBid,
} from "../controllers/bid.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, placeBid);
router.get("/:gigId", protect, getBidsByGig);

// 🔥 HIRING ROUTE
router.patch("/:bidId/hire", protect, hireBid);

export default router;
