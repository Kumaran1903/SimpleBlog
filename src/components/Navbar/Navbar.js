import { handleLogin, handleLogout } from "@/lib/action";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { auth } from "@/lib/auth";
const Navbar = async () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  const session = await auth();
  console.log(session);
  let user = session?.user;
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div>
        {links.map((item, i) => {
          return (
            <Link href={item.path} key={i}>
              {item.name}
            </Link>
          );
        })}
        {user ? (
          <form action={handleLogout}>
            <button type="submit">Log out</button>
          </form>
        ) : (
          <form action={handleLogin}>
            <button type="submit">Log in</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
