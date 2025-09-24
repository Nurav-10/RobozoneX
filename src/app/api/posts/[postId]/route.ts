import { dbConnect } from "@/db/db";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  await dbConnect();
  try {
    const post = await Post.findById(params.postId).populate("comments");
    return NextResponse.json(
      {
        post,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
}
