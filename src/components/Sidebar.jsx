import { Link } from "react-router-dom";
import "./styles/dashboard.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <section id="sidebar">
        <section className="title-container">
          <img
            alt="logo"
            className="dash-icon"
            src="https://img.icons8.com/doodle/48/000000/taco.png"
          />
          <h1>Cafeteria Admin</h1>
        </section>

        <section className="links-container">
          <a href="/dashboard" className="links">
            <span
              className="iconify"
              data-icon="codicon:home"
              data-width="25"
              data-height="25"
            ></span>
            <span>Dashboard</span>
          </a>

          <a href="/add-food" className="links">
            <span
              class="iconify"
              data-icon="carbon:add-alt"
              data-width="25"
              data-height="25"
            ></span>
            <span>Add Food</span>
          </a>

          <a onClick={handleClick} className="links">
            <span
              class="iconify"
              data-icon="tabler:logout"
              data-width="25"
              data-height="25"
            ></span>
            <span>Logout</span>
          </a>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
