import Bid from "../models/Bid.js";
import Gig from "../models/Gig.js";

export const placeBid = async (req, res) => {
  try {
    const { gigId, message, price } = req.body;

    const bid = await Bid.create({
      gigId,
      freelancerId: req.userId,
      message,
      price,
    });

    res.status(201).json(bid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBidsByGig = async (req, res) => {
  try {
    const { gigId } = req.params;
    const bids = await Bid.find({ gigId });
    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const hireBid = async (req, res) => {
  try {
    const { bidId } = req.params;

    // 1️⃣ Find the bid
    const bid = await Bid.findById(bidId);
    if (!bid) {
      return res.status(404).json({ message: "Bid not found" });
    }

    // 2️⃣ Find the gig
    const gig = await Gig.findById(bid.gigId);
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    // 3️⃣ Only owner can hire
    if (gig.ownerId.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized to hire" });
    }

    // 4️⃣ Prevent double hiring
    if (gig.status === "assigned") {
      return res.status(400).json({ message: "Gig already assigned" });
    }

    // 5️⃣ Update gig status
    gig.status = "assigned";
    await gig.save();

    // 6️⃣ Mark selected bid as hired
    bid.status = "hired";
    await bid.save();

    // 7️⃣ Reject all other bids
    await Bid.updateMany(
      { gigId: gig._id, _id: { $ne: bid._id } },
      { status: "rejected" }
    );

    res.json({ message: "Freelancer hired successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

