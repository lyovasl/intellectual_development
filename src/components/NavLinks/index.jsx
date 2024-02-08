import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/search",
      name: "Search",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/trainers",
      name: "Trainers",
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <NavLink to={link.path} key={`${link.name}-${index}`}>
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
