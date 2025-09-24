import mongoose from "mongoose";

let isConnected = false; // connection state

export async function dbConnect() {
  if (isConnected) {
    return; // use existing connection
  }

  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      bufferCommands: false,
    });
    isConnected = true;
    console.log("✅ DB Connected Successfully");
  } catch (err:any) {
    console.error("DB Connection Error:", err.message);
  }
}
