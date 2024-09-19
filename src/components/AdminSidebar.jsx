import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            location={location}
            text={"Dashboard"}
            Icon={<RiDashboardFill />}
          />
          <Li
            url={"/admin/product"}
            location={location}
            text={"Product"}
            Icon={<RiShoppingBag3Fill />}
          />
          <Li
            url={"/admin/customers"}
            location={location}
            text={"Customers"}
            Icon={<IoIosPeople />}
          />
          <Li
            url={"/admin/transaction"}
            location={location}
            text={"Transaction"}
            Icon={<AiFillFileText />}
          />
        </ul>
      </div>
    </aside>
  );
};

const Li = ({ url, location, Icon, text }) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link to={url}>
      {Icon}
      {text}
    </Link>
  </li>
);
Li.propTypes = {
    url: PropTypes.string.isRequired, // URL must be a string
    location: PropTypes.object.isRequired, // Location should be an object
    Icon: PropTypes.node.isRequired, // Icon must be a valid React node (element)
    text: PropTypes.string.isRequired, // Text must be a string
  };


export default AdminSidebar;
