import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="hidden items-center space-x-10 uppercase md:flex font-thin ">
      <li className="tracking-tighter hover:text-slate-500 md:flex">
        <NavLink to="/"> Home</NavLink>
      </li>
      <li className="tracking-widest hover:text-slate-400 md:flex">
        <NavLink to="/about"> About</NavLink>
      </li>
      <li className="tracking-widest hover:text-slate-400 md:flex">
        <NavLink to="/stack">Stack </NavLink>
      </li>
      <li className="tracking-widest hover:text-slate-400 md:flex">
        <NavLink to="/project">Projects</NavLink>
      </li>
      <li className=" hover:text-slate-600 md:flex px-3 py-1 lg:py2 lg:px-4 text-stone-900 bg-slate-50 border-2 border-stone-400 rounded-lg shadow-md font-semibold tracking-tight ">
        <NavLink to="/contact">Contacts </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
