import AdminForm from "@/components/AdminForm/AdminForm";
import styles from "./dashboard.module.css";
import Posts from "@/components/Posts/Post";
const Dashboard = () => {
  return (
    <div>
      <div className={styles.container}>
        <AdminForm />
        <Posts className={styles.listcontainer} />
      </div>
    </div>
  );
};

export default Dashboard;
