function About() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pl-0 ">
      <h1 className="my-5 text-center text-4xl tracking-wider">
        About <span className="text-slate-400"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex items-center justify-center">
            <img
              src="Images/About3.jpg"
              alt="About Hamid Iqbal"
              className="h-[18rem] w-[15rem] lg:h-[23rem] lg:w-[19rem] lg:border-[1px] lg:rounded-md rounded-3xl border-slate-100 border-1 lg:pr-0 "
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8 lg:pt-2 lg:pl-0">
          <div className="flex  justify-center  lg flex-col lg:justify-start lg:w-[70%] font-thin">
            <p>
              I am dedicated and versatile Front end developer with a passion of
              crafting efficient and user-friendy web application.I believe in
              the power of collaboration and continuous learning.My skill set
              encompasses a wide range of front-end technologies and toolssuch
              as i am proficient in sematic HTML markup and CSS3 styling.
              Experienced in leveraging JavaScript and modern ES6+ features to
              develop dynamic and interactive web applications.Familiar with
              popular front-end frameworks and libraries like React js ,
              Redux-toolkit , React-Router, React-Query ,React-Hook-Form and
              TailwindCSS which enables rapid development and seamless
              integration of complex features.
            </p>
            <a
              href="https://github.com/Hamid-Iqball"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-slate-600  px-3 py-1 lg:py2 lg:px-4 text-stone-900 bg-slate-50 border-2 border-stone-400 rounded-lg shadow-md font-semibold tracking-tight w-[20%] mt-5  "
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
