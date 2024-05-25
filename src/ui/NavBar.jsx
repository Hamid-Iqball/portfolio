import { HiMenu } from "react-icons/hi";
import NavLinks from "../Components/NavLinks";
import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen((open) => !open);
  }
  return (
    <div>
      <nav>
        <div className="hidden  md:flex justify-between gap-4 items-center font-thin uppercase">
          <NavLinks />
        </div>
        <div>
          <button
            onClick={() => onToggle()}
            className="block md:hidden text-2xl z-[999999]"
          >
            {isOpen ? <HiMenu /> : <HiOutlineXMark />}
          </button>
        </div>
      </nav>

      {!isOpen && (
        <nav className="fixed z-[20] top-[6rem] left-0 flex flex-col w-full h-full max-h-screen px-6 py-1 pt-24 pb-4 tracking-widest item-center md:hidden divide-y divide-gray-500  text-center bg-neutral-900">
          {<NavLinks />}
        </nav>
      )}
    </div>
  );
}

export default NavBar;
