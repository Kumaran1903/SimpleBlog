"use client";
import { deletePost, editPost } from "@/lib/action";
import styles from "./SinglePost.module.css";
import { useState } from "react";

const SinglePost = ({ post }) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className={styles.container}>
      {!edit && <h4>{post.title}</h4>}
      {edit && (
        <form
          action={editPost}
          onSubmit={() => setEdit((prev) => !prev)}
          className={styles.updateContainer}
        >
          <input type="text" name="title" />
          <input type="hidden" name="id" value={post._id} />
          <button onClick={() => setEdit((prev) => !prev)}>Cancel</button>
          <button type="submit">Update</button>
        </form>
      )}
      {!edit && (
        <div className={styles.editcontainer}>
          <button onClick={() => setEdit((prev) => !prev)}>Edit</button>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post._id} />
            <button type="submit">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
