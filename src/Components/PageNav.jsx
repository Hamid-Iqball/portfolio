import Logo from "../ui/Logo";
import NavBar from "../ui/NavBar";

function PageNav() {
  return (
    <header className=" sticky top-0 z-[20] mx-auto w-full flex items-center justify-between p-8 h-[6rem]  gap-[2rem] bg-black md:bg-transparent border-b-1">
      <Logo />
      <NavBar />
    </header>
  );
}

export default PageNav;
