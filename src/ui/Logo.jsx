import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="z-30 font-semibold mt-[-1rem] text-xl  md:text-1.5xl lg:text-4xl tracking-widest">
      <Link to="/"> {"<HAMID/>"}</Link>
    </div>
  );
}

export default Logo;
