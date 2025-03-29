import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { title, description, image, role } = await req.json();
    await connectToDb();
    await Post.create({
      title,
      description,
      image,
      role,
    });
    console.log("Post created successfully");
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ status: 500 });
  }
};

export const GET = async (req) => {
  try {
    await connectToDb();
    const posts = await Post.find(); // Directly fetch the posts
    return NextResponse.json(posts); // Return the posts as JSON
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
