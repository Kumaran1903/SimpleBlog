"use client";
import { addPost } from "@/lib/action";
import styles from "./AdminForm.module.css";
const AdminForm = () => {
  // const [data, setData] = useState({
  //   title: "",
  //   description: "",
  //   image: "",
  //   role: "",
  // });
  // const handleSubmit = async (e) => {
  // e.preventDefault();
  // try {
  //   await fetch("http://localhost:3000/api/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  // } catch (error) {
  //   console.error("Error:", error);
  // }
  // setData({ title: "", description: "", image: "", url: "" });
  // };
  /* <form onSubmit={handleSubmit}> */
  return (
    <form action={addPost} className={styles.formcontainer}>
      <input
        type="text"
        placeholder="Enter Title"
        name="title"
        required
        // value={data.title}
        // onChange={(e) => {
        //   setData({ ...data, title: e.target.value });
        // }}
      />
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        required
        // value={data.description}
        // onChange={(e) => {
        //   setData({ ...data, description: e.target.value });
        // }}
      />
      <input
        type="text"
        placeholder="Enter Image URL"
        name="image"
        required
        // value={data.image}
        // onChange={(e) => {
        //   setData({ ...data, image: e.target.value });
        // }}
      />
      <div >
        <label htmlFor="role">role</label>
        <select
          name="role"
          id="role"
          required
          // value={data.role}
          // onChange={(e) => {
          //   setData({ ...data, role: e.target.value });
          // }}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default AdminForm;
