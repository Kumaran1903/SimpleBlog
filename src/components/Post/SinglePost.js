// "use client";
// import { deletePost, editPost } from "@/lib/action";
// import styles from "./SinglePost.module.css";
// import { useState } from "react";

// const SinglePost = ({ post }) => {
//   const [edit, setEdit] = useState(false);
//   return (
//     <div className={styles.container}>
//       {!edit && <h4>{post.title}</h4>}
//       {edit && (
//         <form
//           action={editPost}
//           onSubmit={() => setEdit((prev) => !prev)}
//           className={styles.updateContainer}
//         >
//           <input type="text" name="title" />
//           <input type="hidden" name="id" value={post._id} />
//           <button onClick={() => setEdit((prev) => !prev)}>Cancel</button>
//           <button type="submit">Update</button>
//         </form>
//       )}
//       {!edit && (
//         <div className={styles.editcontainer}>
//           <button onClick={() => setEdit((prev) => !prev)}>Edit</button>
//           <form action={deletePost}>
//             <input type="hidden" name="id" value={post._id} />
//             <button type="submit">Delete</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SinglePost;


"use client";
import styles from "./SinglePost.module.css";
import { useState } from "react";

const SinglePost = ({ post }) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(post.title);

  // Function to handle post update
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "PUT", // Assuming PUT method for updates
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: post._id, title }),
      });

      if (!response.ok) throw new Error("Failed to update post");
      
      setEdit(false); // Close edit mode after successful update
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Function to handle post deletion
  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: post._id }),
      });

      if (!response.ok) throw new Error("Failed to delete post");

      alert("Post deleted successfully"); // Notify user (or refresh UI)
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Display title when not editing */}
      {!edit && <h4>{title}</h4>}

      {/* Edit post form */}
      {edit && (
        <form onSubmit={handleEdit} className={styles.updateContainer}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="button" onClick={() => setEdit(false)}>Cancel</button>
          <button type="submit">Update</button>
        </form>
      )}

      {/* Edit and Delete buttons */}
      {!edit && (
        <div className={styles.editcontainer}>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
