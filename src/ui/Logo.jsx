import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="text-4xl font-semibold">
      <Link to="/"> {"<Hamid/>"}</Link>
    </div>
  );
}

export default Logo;

// className="z-30 font-semibold mt-[-1rem] text-xl  md:text-1.5xl lg:text-4xl tracking-widest"
