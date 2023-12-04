import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";

function ClientNav() {
  const [togglerNav, setTogglerNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  const logOutHandler = () => {
    logout();
    navigate("/");
  };
  const logOutHandler2 = () => {
    logout();
    setTogglerNav(!togglerNav);
    navigate("/");
  };
  const links = [
	{
	  id: 0,
	  link: "/About",
	  name: "About"
	},
    {
      id: 1,
      link: "/Home",
      name: "Feed",
    },
    {
      id: 2,
      link: "/Account",
      name: "Profile"
    },
  
    {
      id: 6,
      link: "/",
      name: "Logout",
    },
  ];

  const linksLogOut = [
   

    {
      id: 1,
      link: "/Signup",
      name: "Join Us",
    },
   

  ];

  return (
    <div className="flex justify-between items-center w-full h-20 bg-sky-500 px-4 text-white fixed font-bold" style={{ boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)" }}>
      <Link to="/">
        <h1 className="text-5xl ml-2"> Packet Pirate</h1>
      </Link>
      <ul className="hidden md:flex">
        {user
          ? links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
              >
                {name !== "Logout" ? (
                  <Link to={link}>{name}</Link>
                ) : (
                  <p onClick={logOutHandler}>logout</p>
                )}
              </li>
            ))
          : linksLogOut.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
              >
                {name !== "logout" ? (
                  <Link to={link}>{name}</Link>
                ) : (
                  <li onClick={logOutHandler}>logout</li>
                )}
              </li>
            ))}
      </ul>
    
      <div onClick={()=> clickHandler()} className="cursor-pointer pr-4 z-10 text-sky-400 md:hidden">
            {togglerNav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {togglerNav &&(

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen fill-sky-500 bg-sky-500 bg-gradient-to-b from-sky-500 to-sky-200 text-white">
        {user
                ? links.map(({ id, link, name }) => (
                    <li
                      key={id}
                      className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                      {name !== "Logout" ? (
                        <Link to={link} onClick={()=> clickHandler()}>{name}</Link>
                      ) : (
                        <p onClick={logOutHandler2}>logout</p>
                      )}
                    </li>
                  ))
                : linksLogOut.map(({ id, link, name }) => (
                    <li
                      key={id}
                      className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                      {name !== "logout" ? (
                        <Link to={link} onClick={()=> clickHandler()}>{name}</Link>
                      ) : (
                        <li onClick={logOutHandler }>logout</li>
                      )}
                    </li>
            ))}
        </ul>
        )}
    </div>
    );
};
export default ClientNav;
