import express from "express";
import { createRoom } from "../Controllers/room";
import { verifyAdmin } from "../utils/VerifyToken";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
// ===============================================

export default router;
