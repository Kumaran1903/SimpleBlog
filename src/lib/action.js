"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const handleLogin = async () => {};
export const handleLogout = async () => {};

export const addPost = async (formData) => {
  const { title, description, image, role } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.create({
      title,
      description,
      image,
      role,
    });
    console.log("Post created successfully");
    revalidatePath("/");
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find(); // Directly fetch the posts
    return posts; // Return the posts as JSON
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteOne({ _id: id });
    console.log("deleted sucessfully");
    revalidatePath("/");
  } catch (err) {
    console.log(err);
  }
};
export const editPost = async (formData) => {
  const { title, id } = Object.fromEntries(formData); // Corrected "object" to "Object"
  try {
    connectToDb();
    await Post.updateOne(
      { _id: id }, // Find the post by its ID
      { $set: { title } } // Update the title field
    );
    console.log("Post updated successfully");
    revalidatePath("/");
    return { success: true };
  } catch (err) {
    console.log("Error updating post:", err);
    return { success: false };
  }
};
