import { Element, Link } from "react-scroll";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <Element name="home">
      <nav className="fixed top-0 left-0 w-full bg-black pt-4 md:pt-10 pb-4 z-50 ">
        <div className="md:container flex-center flex-col md:flex-row md:justify-between  ">
          <Link to="home">
            <span className="text-4xl uppercase font-bold text-white cursor-pointer">
              point-x
            </span>
          </Link>

          <div className="flex gap-4 mt-6 items-center">
            <Link to="home">
              <CustomButton
                style="  rounded-md font-semibold px-2 py-1 text-white border-dark-green border-2 px-8 py-[7px] "
                text="Home"
              />
            </Link>
            <Link to="contact">
              <CustomButton
                style="   rounded-md font-semibold px-2 py-1 bg-green px-8 py-[7px]  "
                text="Contacto"
              />
            </Link>
          </div>
        </div>
      </nav>
    </Element>
  );
};

export default Navbar;
