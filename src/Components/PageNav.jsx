import Logo from "../ui/Logo";
import NavBar from "../ui/NavBar";

function PageNav() {
  return (
    <nav className=" container relative mx-auto p-6">
      <div className="flex items-center justify-between  space-x-20 my-4">
        <Logo />
        <NavBar />
      </div>
    </nav>
  );
}

export default PageNav;
