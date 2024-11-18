import { Outlet } from "react-router";
import styles from "../../styles/home/root.module.css";

const PrivateRoot = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateRoot;
