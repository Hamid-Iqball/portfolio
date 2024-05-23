import {
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
function Stack() {
  return (
    <div className=" text-neutral-100 pb-24 ">
      <h1 className="my-20 text-center lg:my-10  lg:text-4xl text-2xl ">
        Technologies I've <span className="text-slate-400">Worked With</span>{" "}
      </h1>
      <p className="m-20 lg:mx-20 lg:my-10 text-center text-xl font-thin ">
        {" "}
        The follwing stack allows me to develop scalable, efficient and user
        friendly web applications that meet modern standards.Chnage is
        inevitable so i keep on exploring new technologies.
      </p>
      <div className="flex flex-wrap lg:gap-5 items-center justify-center gap-16 lg:pt-12">
        <div className="rounded-2xl order-4 border-2 border-neutral-400 lg:p-3 p-2 ">
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl order-4 border-2 border-neutral-400 lg:p-3 p-2 ">
          <RiJavascriptLine className="text-7xl text-yellow-400 " />
        </div>
        <div className="rounded-2xl order-4 border-2 border-neutral-400 lg:p-3 p-2 ">
          <RiTailwindCssFill className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl order-4 border-2 border-neutral-400 lg:p-3 p-2 ">
          <TbBrandRedux className="text-7xl text-purple-400 " />
        </div>
        <div className="rounded-2xl order-4 border-2 border-neutral-400 lg:p-3 p-2 ">
          <RiCss3Line className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl order-4 border-2 border-neutral-400 lg:p-3 p-2 ">
          <SiReactquery className="text-7xl text-red-700 " />
        </div>
      </div>
    </div>
  );
}

export default Stack;
