import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <NavLink to="/" className="tracking-tighter hover:text-slate-500 py-3">
        {" "}
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="tracking-tighter hover:text-slate-500 py-3"
      >
        About
      </NavLink>

      <NavLink
        to="/stack"
        className="tracking-tighter hover:text-slate-500 py-3"
      >
        Stack{" "}
      </NavLink>

      <NavLink
        to="/project"
        className="tracking-tighter hover:text-slate-500 py-3"
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        className=" hover:text-slate-600 px-3  lg:py2 lg:px-4 text-stone-900 bg-slate-50 border-2 border-stone-400 rounded-lg shadow-md font-semibold tracking-tight py-3 "
      >
        Contacts{" "}
      </NavLink>
    </>
  );
}

export default NavLinks;
