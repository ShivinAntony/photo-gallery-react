
const AboutUs = () => {
  return (
    <>
     <div className="p-20 w-auto flex px-24 justify-center py-56 relative ">
          <div className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col  md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
            <div className="mr-10 ">
              <img 
               className="rounded-lg   h-auto md:w-auto  md:h-auto"
              src="https://t3.ftcdn.net/jpg/02/83/61/66/360_F_283616657_kFKb0t58mk7NXktYjXUZZqypFhm8QRb1.jpg" 
               alt="photo grapher" />
            </div>
             <div className="w-full  sm:w-[70%] md:w-[60%] lg:w-[50%]">
              <h1 className="text-white font-bold text-3xl mt-6 ">
                Hey its me, Shivin Antony 
                </h1> <br />
                <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
        Im Aydin, a 18-year-old high schooler with a passion for web
        development. My tech journey started with HTML, CSS, and JavaScript,
        and I was hooked by the thrill of crafting dynamic, interactive
        websites. As I grew, Node.js and ReactJS became my go-to tools for
        building scalable applications. Feel free
        to connect if you have questions, collaboration ideas, or just want to
        discuss the latest in web development!
      </p>
             </div>

          </div>
       </div>
    </>
  )
}

export default AboutUs