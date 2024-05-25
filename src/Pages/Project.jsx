function Project() {
  return (
    <div className="container m-auto ">
      <h2 className="m-4 space-y-4  text-center text-4xl">Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-3  md:mx-[2rem] gap-5 mt-10 ">
        <div className="border rounded-md sm:mx-10 lg:mx-0 p-5">
          <img src="/Projects/omnifood.png" alt="OmniFood Project" />
          <h3 className="text-slate-100 text-2xl mt-6">OmniFood</h3>
          <p className="text-slate-400 text-sm mt-3">
            I have created this beautifull and modern website for a fictional
            startup with HTML5, CSS3 and Vanilla JavaScript .
          </p>
          <div className="flex justify-between  ">
            <a
              href="https://heroic-lolly-156b0b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="border mt-3 py-2 px-4 bg-slate-50 text-slate-950 rounded-lg hover:text-slate-800 font-semibold"
            >
              PREVIEW
            </a>
            <a
              href="https://heroic-lolly-156b0b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="border mt-3 py-2 px-4 bg-slate-50 text-slate-950 rounded-lg hover:text-slate-800 font-semibold"
            >
              CODE
            </a>
          </div>
        </div>
        <div className="border rounded-md sm:mx-10 sm:p-5  lg:mx-0 p-5">
          <img src="/Projects/FastReactPizzaApp2.png" alt="OmniFood Project" />
          <h3 className="text-slate-100 text-2xl mt-6">Fast React Pizza Co.</h3>
          <p className="text-slate-400 text-sm mt-3">
            It allows customers to order pizzas and get them delivered to their
            homes.It is a dynamic web app.For this i have used React ,React
            Router , Redux and TailwindCSS for styling
          </p>
          <div className="flex justify-between ">
            <a
              href="https://heroic-lolly-156b0b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="border mt-3 py-2 px-4 bg-slate-50 text-slate-950 rounded-lg hover:text-slate-800 font-semibold"
            >
              PREVIEW
            </a>
            <a
              href="https://github.com/Hamid-Iqball/Fast-React-Pizza"
              target="_blank"
              rel="noreferrer"
              className="border mt-3 py-2 px-4 bg-slate-50 text-slate-950 rounded-lg hover:text-slate-800 font-semibold"
            >
              CODE
            </a>
          </div>
        </div>
        <div className="border rounded-md sm:mx-10 sm:p-5  lg:mx-0 p-5">
          <img src="/Projects/Hamid2.png" alt="OmniFood Project" />
          <h3 className="text-slate-100 text-2xl mt-6">
            My Portfolio Website{" "}
          </h3>
          <p className="text-slate-400 text-sm mt-3">
            This is my personal portfolio website whixh i have created using
            React , React-Router (for SPAs) and for styling i have used
            TailwindCss.it fully responsive.
          </p>
          <div className="flex justify-between ">
            <a
              href="https://heroic-lolly-156b0b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="border mt-3 py-2 px-4 bg-slate-50 text-slate-950 rounded-lg hover:text-slate-800 font-semibold"
            >
              PREVIEW
            </a>
            <a
              href="https://heroic-lolly-156b0b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="border mt-3 py-2 px-4 bg-slate-50 text-slate-950 rounded-lg hover:text-slate-800 font-semibold"
            >
              CODE
            </a>
          </div>
        </div>
        <div className="border rounded-md sm:mx-10 sm:p-5 lg:col-span-3  lg:my-0 lg:mx-auto p-5">
          <img src="/Projects/The WildOasis.png" alt="OmniFood Project" />
          <h3 className="text-slate-100 text-2xl mt-6">The Wild Oasis</h3>
          <p className="text-slate-400 text-sm mt-3">
            The Wild oasis is a small boutique hotel with 8 luxurious
            cabins.This is the custome Application where the hotel management
            can manage everthing about hotel:booking, cabins and guests.It has
            alot of features.This is not
            <strong> Completed </strong> yet. Technologies that i have used in
            this app are React Router, Styled Components , React Query , Context
            API , React-Hook-Form, React hot toasts , React Icons and
            Supabase(database).
          </p>
          <div className="flex justify-between ">
            <a
              href="https://github.com/Hamid-Iqball/The-Wild-Oasis"
              target="_blank"
              rel="noreferrer"
              className="border mt-3 py-2 px-4 bg-slate-50 text-slate-950 rounded-lg hover:text-slate-800 font-semibold"
            >
              PREVIEW
            </a>
            <a
              href="https://github.com/Hamid-Iqball/The-Wild-Oasis"
              target="_blank"
              rel="noreferrer"
              className="border mt-3 py-2 px-4 bg-slate-50 text-slate-950 rounded-lg hover:text-slate-800 font-semibold"
            >
              CODE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
