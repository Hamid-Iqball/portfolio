function Contact() {
  return (
    <div className=" py-10 text-stone-700 ">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row w-11/12  bg-neutral-800 rounded-xl mx-auto shadow-lg overflow-hidden text-neutral-50 ">
          <div className=" lg:w-1/2 w-full">
            <div className="h-full p-">
              <img src="/Images/react.jpg" alt="reactjs pic" />
            </div>
          </div>
          <form className="lg:w-1/2 w-full py-4 px-8">
            <h1 className="text-3xl  my-5 ">Contact Me</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent text-center lg:text-left ">
              Let's build something together!
            </span>
            <div className="flex flex-col gap-3 mt-4 mb-2">
              <input
                placeholder="Enter Your Email"
                className="bg-neutral-300 py-2 px-2 text-neutral-800 bg-transparent rounded-lg"
              />
              <input
                placeholder="Enter Your Subject"
                className="bg-neutral-300 py-2 px-2 text-neutral-800 bg-transparent rounded-lg"
              />
              <input
                placeholder="Enter Your Message"
                className="bg-neutral-300 py-2 px-2 text-neutral-800 bg-transparent rounded-lg"
              />
            </div>
            <button className="px-4 py-1 bg-neutral-300 text-neutral-700 rounded-lg font-semibold  hover:text-neutral-900 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
