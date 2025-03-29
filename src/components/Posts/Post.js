import SinglePost from "../Post/SinglePost";
import styles from "./Posts.module.css";
const getPosts = async () => {
  const posts = await fetch("http://localhost:3000/api/posts");
  return posts.json();
};
const Posts = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.listcontainer}>
      {posts &&
        posts.map((item, i) => {
          return (
            <div key={i} className={styles.postContainer}>
              <SinglePost post={item} />
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
