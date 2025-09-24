import { NextResponse } from "next/server";
import Comment from "@/models/commentModel";
import { dbConnect } from "@/db/db";
import { currentUser } from "@clerk/nextjs/server";

interface Params {
  params: { commentId: string };
}

export async function PATCH(req: Request, { params }: Params) {
  await dbConnect();

  try {
    const loggedInUser = await currentUser();
    if (!loggedInUser) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 403 }
      );
    }

    const updates = await req.json();
    const allowedFields = ["content"]; // Only content can be updated
    const filteredUpdates: any = {};
    for (const key of allowedFields) {
      if (updates[key] !== undefined) filteredUpdates[key] = updates[key];
    }

    const comment = await Comment.findOneAndUpdate(
      { _id: params.commentId, author: loggedInUser.id },
      filteredUpdates,
      { new: true }
    );

    if (!comment) {
      return NextResponse.json(
        { message: "Comment not found or not authorized" },
        { status: 404 }
      );
    }

    return NextResponse.json({ comment }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: Params) {
  await dbConnect();

  try {
    const loggedInUser = await currentUser();
    if (!loggedInUser) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 403 }
      );
    }

    const comment = await Comment.findOneAndDelete({
      _id: params.commentId,
      author: loggedInUser.id,
    });

    if (!comment) {
      return NextResponse.json(
        { message: "Comment not found or not authorized" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Comment deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
