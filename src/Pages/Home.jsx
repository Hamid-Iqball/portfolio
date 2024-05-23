import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

function Home() {
  return (
    <section className="container flex flex-col-reverse mx-auto p-6 lg:flex-row mb-0">
      <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
        <h1 className="text-3xl mt-[-1rem] font-semibold  text-center lg:text-6xl lg:text-left">
          {" "}
          Hamid Iqbal
        </h1>
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center lg:text-left mt-[-1rem]">
          Front End Web Developer
        </span>
        <p className="max-w-md mx-auto text-md font-thin text-center lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
          Freelancer! Providing services for programming and design content.
          Join me down below and lets get cracking.
        </p>
        <div className="flex items-center justify-center gap-16 w-full space-x-4 lg:justify-start">
          <p className=" text-5xl">
            <a
              href="https://github.com/Hamid-Iqball"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </p>
          <p className=" text-5xl">
            <a
              href="https://www.linkedin.com/in/hamid-iqbal1/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </p>
          <p className=" text-5xl">
            <a
              href="https://www.facebook.com/hamid.iqbal.56829446"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
          </p>
        </div>
      </div>

      <div className="relative mx-auto mb-[4rem] lg:mx-0 lg:mb-0 lg:w-1/2 ">
        <div className="bg-hero">
          <img
            src="/Images/Hamid.jpg"
            alt="Hamid Iqbal border-4 rounded-full"
            className="border-2 rounded-md relative h-[18rem] w-[18rem] lg:h-[20rem] lg:w-[20rem] z-10 lg:top-24 xl:top-0   overflow-x-visible"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
