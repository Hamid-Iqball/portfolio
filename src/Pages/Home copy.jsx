import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="border-b border-neutral-900 my-4 mx-auto py-auto flex justify-between items-center  lg:mb-35 ">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-6xl  tracking-tight lg:mt-16 lg:text-8xl font-thin ">
              Hamid Iqbal
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Front End Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Freelancer providing services for programming and design cotent
              needs.Join me down and let's get cracking!
            </p>
            <Link to="contact">Let's Collaborate</Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2  lg:p-10 max-w-2xl">
          <div className="flex justify-center ">
            <div>
              <img
                src="/Images/Hamid.jpg"
                alt="Hamid Iqbal "
                className=" h-[14rem] w-[14rem] rounded-md  border-neutral-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
