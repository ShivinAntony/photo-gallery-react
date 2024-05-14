 import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
     <nav className="bg-transparent fixed w-full z-10">
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center">
              <div className="text-white  text-5xl font-extralight">
                <Link to="/">My Gallery</Link>
              </div>

              <ul className="flex space-x-6 justify-items-center">
                <li>
                  <Link
                    to="/"
                    className="text-white text-xl font-extralight hover:text-gray-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-white text-xl font-extralight hover:text-gray-200"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white text-xl font-extralight hover:text-gray-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white text-xl font-extralight hover:text-gray-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default NavBar