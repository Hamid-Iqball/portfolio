import { Outlet } from "react-router-dom";
import Header from "../Components/PageNav";

function AppLayout() {
  return (
    <div className="overflow-x-hidden text-slate-100 antialiased selection:bg-cyan-300 selection:text-cyan-900 h-screen ">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
