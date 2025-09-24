import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  permissions: [{ type: String }],  // e.g. ["DELETE_POST", "BAN_USER"]
}, { timestamps: true });

const Admin=mongoose.model('Admin',adminSchema)

export default Admin;