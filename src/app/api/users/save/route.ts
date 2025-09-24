import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { dbConnect } from "@/db/db";
import User from "@/models/userModel";



const defaultTechBios = [
  "Tech enthusiast passionate about coding, gadgets, and new technologies.",
  "Exploring the world of software, hardware, and everything in between.",
  "Lover of programming, AI, and all things tech.",
  "Always learning and building cool things in tech.",
  "Tech geek sharing ideas and projects with the community.",
];


function getRandomBio() {
  const randomIndex = Math.floor(Math.random() * defaultTechBios.length);
  return defaultTechBios[randomIndex];
}


export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const clerkUser=await currentUser()

    if (!clerkUser)
      return NextResponse.json(
        {
          message: "Not Authenticated",
        },
        { status: 401 }
      );

      let user = await User.findOne({ clerkId: clerkUser.id });

  if (!user) {
    user = await User.create({
      clerkId: clerkUser.id,
      username: clerkUser.username || clerkUser.firstName,
      email: clerkUser.emailAddresses[0]?.emailAddress,
      age: null,
      collegeOrSchool: "",
      bio:getRandomBio()
    });
  }

  return NextResponse.json({
   message:'User Registered successfully',
   user
  },{status:200})
  } catch (err: any) {
    return NextResponse.json(
      {
        message: err.message,
      },
      { status: 500 }
    );
  }
}
