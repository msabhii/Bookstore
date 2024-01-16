import { FaSquareXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import classNames from "classnames";
function Footer() {
  const classes = classNames("text-white");
  const headerFoot = classNames(
    "flex place-content-center bg-red-400  w-full text-white pl-4 mt-52 "
  );
  return (
    <div className={classes}>
      <div className={headerFoot}>
        <div className="h-auto font-light">
          <div className="flex place-content-center ml-3 mb-4">
            <div className="mr-6  hover:font-bold ">
              <a href="#home">Home</a>
            </div>
            <div className="mr-6 hover:font-bold">
              <a href="#home">About</a>
            </div>
            <div className="mr-6 hover:font-bold">
              <a href="#home">Books</a>
            </div>
          </div>
          <div className="flex space-x-6 text-2xl w-full place-content-center">
            <div className="">
              <a
                href="https://twitter.com/MSAbhi7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/msabhi7777/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinFill />
              </a>
            </div>
            <div className="">
              <a
                href="https://github.com/msabhii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="flex place-content-center">
            <h1>
              © 2023 Made with Knowledge and Love By{" "}
              <span className="font-normal hover:font-bold"> MS Abhi</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
