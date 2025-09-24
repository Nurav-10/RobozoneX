import { NextResponse } from "next/server";
import User from "@/models/userModel";
import Post from "@/models/postModel";
import Comment from "@/models/commentModel";
import { currentUser } from "@clerk/nextjs/server";
import { dbConnect } from "@/db/db";

interface Params {
  params: { userId: string };
}

export async function PATCH(req: Request, { params }: Params) {
  await dbConnect();

  try {
    const loggedInUser = await currentUser();
    if (!loggedInUser || loggedInUser.id !== params.userId) {
      return NextResponse.json({ message: "Not authorized" }, { status: 403 });
    }

    const updates = await req.json();
    // Only allow certain fields to be updated
    const allowedFields = ["username", "age", "collegeOrSchool", "bio"];
    const filteredUpdates: any = {};
    for (const key of allowedFields) {
      if (updates[key] !== undefined) filteredUpdates[key] = updates[key];
    }

    const user = await User.findByIdAndUpdate(params.userId, filteredUpdates, { new: true });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: Params) {
  await dbConnect();

  try {
    const loggedInUser = await currentUser();
    if (!loggedInUser || loggedInUser.id !== params.userId) {
      return NextResponse.json({ message: "Not authorized" }, { status: 403 });
    }

    const user = await User.findByIdAndDelete(params.userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Optionally, delete all posts and comments by this user
    await Post.deleteMany({ author: params.userId });
    await Comment.deleteMany({ author: params.userId });

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

