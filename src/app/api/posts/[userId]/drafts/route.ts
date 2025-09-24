import Post from "@/models/postModel";
import { dbConnect } from "@/db/db";
import { NextResponse } from "next/server";

interface Params{
   params:{userId:String}
}
export async function GET(req: Request, { params }: Params) {
  await dbConnect();

  try {
    const drafts = await Post.find({ author: params.userId, isDraft: true })
      .sort({ updatedAt: -1 });

    return NextResponse.json({ drafts }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
