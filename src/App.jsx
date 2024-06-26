import { useEffect, useState } from "react";
import "./App.css";

//Data
import webProjects from "./webProjects.json";

//Icon
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDropupCircle, IoMdCloseCircleOutline } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

function App() {
  //theme setting
  const [theme, setTheme] = useState(getInitialTheme());
  const [isAutoMode, setIsAutoMode] = useState(true);

  // Function to get initial theme based on time
  function getInitialTheme() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark"; // Assuming day is from 6 AM to 6 PM
  }

  const toggleTheme = () => {
    setIsAutoMode(false);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect to handle automatic theme switching
  useEffect(() => {
    if (isAutoMode) {
      const intervalId = setInterval(() => {
        setTheme(getInitialTheme()); // Update theme based on current time
      }, 60000); // Check every minute (adjust as needed)

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [isAutoMode]);

  //mobile navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //word counter for typewriter effectr
  useEffect(() => {
    const sentences = document.querySelectorAll(".typewriter-text");
    sentences.forEach((sentence) => {
      const characters = sentence.textContent.trim().length;
      sentence.style.setProperty("--typewriterCharacters", characters);
      console.log(
        `Sentence: "${sentence.textContent.trim()}" has ${characters} characters.`
      );
    });
  }, []);

  //smooth scrolling
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // This enables smooth scrolling
      });
    }
  };

  //Scroll to Top
  const [isVisible, setIsVisible] = useState(false);

  const arrowToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        // Adjust threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
        <nav
          className={`flex items-center justify-between px-5 py-3 lg:px-10 lg:py-5 lg:shadow-lg`}
        >
          <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-[#216aff] to-[#913aff] inline-block text-transparent bg-clip-text">
            ebunorun.codev
          </h3>
          <div className="hidden font-semibold text-xl space-x-7 md:flex ">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="hover:text-[#913aff]"
            >
              Home
            </a>
            <a
              href="#project"
              onClick={(e) => handleSmoothScroll(e, "project")}
              className="hover:text-[#913aff]"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="hover:text-[#913aff]"
            >
              Contact
            </a>
            <button onClick={toggleTheme}>
              {theme === "light" ? <IoSunnyOutline /> : <IoIosMoon />}
            </button>
          </div>
          <div className="md:hidden">
            {isMenuOpen ? (
              <IoMdCloseCircleOutline
                className="text-2xl cursor-pointer hover:text-[#913aff]"
                onClick={toggleMenu}
              />
            ) : (
              <GiHamburgerMenu
                className="text-2xl cursor-pointer hover:text-[#913aff]"
                onClick={toggleMenu}
              />
            )}
            {isMenuOpen && (
              <div
                className={`absolute left-0 top-12 flex flex-col justify-center font-semibold text-xl bg-white shadow-lg p-5 w-full text-right space-y-5 ${
                  theme === "dark" ? "dark:bg-[#333]" : ""
                }`}
              >
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, "home")}
                  className="hover:text-[#913aff]"
                >
                  Home
                </a>
                <a
                  href="#project"
                  onClick={(e) => handleSmoothScroll(e, "project")}
                  className="hover:text-[#913aff]"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                  className="hover:text-[#913aff]"
                >
                  Contact
                </a>
                <button className="ml-auto" onClick={toggleTheme}>
                  {theme === "light" ? <IoSunnyOutline /> : <IoIosMoon />}
                </button>
                {/* <label>
                  <input
                    type="checkbox"
                    checked={isAutoMode}
                    onChange={() => setIsAutoMode(!isAutoMode)}
                  />
                  Auto Mode
                </label> */}
              </div>
            )}
          </div>
        </nav>
        <section
          id="home"
          className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-10 space-y-[3rem] lg:space-y-0 lg:space-x-[5rem]"
        >
          <div className="md:hidden">
            <img
              src="/IMG_20230725_150908_723.jpg"
              alt="ebunorun"
              className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-[#913aff] animated-border"
            />
          </div>
          <div className="translate-x-[1rem] lg:translate-x-0">
            <h1 className="typewriter-text font-bold text-2xl lg:text-4xl">
              FRONT END DEVELOPER
            </h1>
            <p className="fade font-semibold  text-2xl w-[342px] lg:w-[500px] mt-3 lg:mt-5">
              Hi, I’m Samson Iweibo, an enthusiastic Front End Developer who’s
              always eager to embark on any project.
            </p>
            <h4 className="fade flex items-center font-bold  text-md lg:text-2xl mt-3 lg:mt-5">
              <FaLocationDot className="text-red-500" /> Lagos, Nigeria.
            </h4>
          </div>
          <div className="hidden md:block">
            <img
              src="/IMG_20230725_150908_723.jpg"
              alt="ebunorun"
              className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] border-2 border-[#913aff] animated-border"
            />
          </div>
        </section>
        <section className="mt-5 lg:mt-10 flex flex-col lg:flex-row items-center w-fit space-x-3 translate-x-[2rem] lg:translate-x-[14.5rem]">
          <h2 className="font-bold text-2xl ">Tech Stack:</h2>
          <div className="flex items-center space-x-2 space-y-5 lg:space-y-0 translate-x-[2.7rem] lg:translate-x-0">
            <img
              src="/html.svg"
              alt="html"
              className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] translate-y-[10px] lg:translate-y-0"
            />
            <img
              src="/css.svg"
              alt="css"
              className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]"
            />
            <img src="/icons8-javascript.svg" alt="javascript" />
            <img src="/react.svg" alt="react" />
            <img src="/icons8-tailwind-css.svg" alt="tailwind" />
          </div>
        </section>
        <div className="border border-b-gray-300 mt-5"></div>
        <section id="project" className="relative flex flex-col items-center">
          <h3 className="absolute left-[4.4rem] lg:left-[14.7rem] text-2xl lg:text-3xl font-semibold  mt-5 lg:mt-10">
            Projects
          </h3>
          {webProjects.map((item, index) => (
            <div key={index} className="mt-[5rem] mb-5 lg:mt-[8rem] lg:mb-5">
              <a href={item.link}>
                <h3 className="lg:text-2xl font-semibold  lg:hover:text-[#913aff]">
                  {item.title}
                </h3>
              </a>
              <div className="flex flex-col lg:flex-row lg:space-x-[5rem] lg:mt-5">
                {index === 1 && window.innerWidth >= 1024 ? (
                  <>
                    <h4 className="text-sm lg:text-lg w-[300px] lg:w-[355px] ">
                      {item.text}
                    </h4>
                    <a href={item.link}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="shadow-lg w-[350px] lg:w-[450px] lg:h-[200px] mt-5 lg:mt-0 lg:hover:scale-125 duration-500"
                      />
                    </a>
                  </>
                ) : (
                  <>
                    <a href={item.link}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="shadow-lg w-[350px] lg:w-[450px] lg:h-[200px] mt-5 lg:mt-0 lg:hover:scale-125 duration-500"
                      />
                    </a>
                    <h4 className="text-sm lg:text-lg w-[300px] lg:w-[355px]  mt-5 lg:mt-0">
                      {item.text}
                    </h4>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
        <div className="border border-b-gray-300 mt-5"></div>
        <section
          id="contact"
          className="text-white flex flex-col lg:flex-row lg:space-x-[5rem] py-3 lg:py-5 px-[4.4rem] lg:px-[14.7rem] bg-gradient-to-r from-blue-600 via-[#216aff] to-[#913aff] "
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold  mt-5 lg:mt-10">
              Contact Me:
            </h3>
            <div className="mt-[3rem]">
              <div className="flex items-center space-x-3 text-xl lg:text-2xl">
                <LuMail />
                <a href="samsoniweibo@gmail.com">
                  <p>samsoniweibo@gmail.com</p>
                </a>
              </div>
              <div className="flex items-center space-x-3 mt-5 mb-5 text-xl lg:text-2xl">
                <FaPhoneAlt />
                <p>+234-705-231-7420</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mt-5 lg:mt-10">
              Socials
            </h3>
            <ul className="flex items-center space-x-5 text-3xl lg:text-[40px]">
              <li className="mt-5 lg:mt-8 hover:scale-125 hover:text-black hover:duration-200">
                <a href="https://github.com/SamsonI95">
                  <FaGithub />
                </a>
              </li>
              <li className="mt-5 lg:mt-8 hover:scale-125 hover:text-black hover:duration-200">
                <a href="https://www.linkedin.com/in/samsoniweibo/">
                  <FaLinkedin />
                </a>
              </li>
              <li className="mt-5 lg:mt-8 hover:scale-125 hover:text-black hover:duration-200">
                <a href="https://wa.link/57cb2d">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <button
            onClick={arrowToTop}
            className={`fixed text-2xl bottom-10 right-10 z-10 rounded-full bg-[#913aff] text-white px-4 py-2 hover:bg-blue-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <IoIosArrowDropupCircle />
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
