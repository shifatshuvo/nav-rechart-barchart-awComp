import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [ open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  // maybe on click ul hidden

  return (
    <nav className="text-black bg-gray-300 p-4 flex items-center justify-between">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoClose className="cursor-pointer" />
        ) : (
          <HiMenuAlt1 className="cursor-pointer" />
        )}
      </div>
      <ul className={`md:flex items-center absolute md:static md:bg-gray-300 bg-gray-200 rounded-md md:space-x-5 md:text-center mt-2
      duration-700
      ${open ? 'top-14' : '-top-80'}`}>
        {routes.map((route) => (
          <Link  key={route.id} route={route} />
        ))}
      </ul>
      <div className="w-12 h-12 bg-gray-600 rounded-full border-4 border-green-600"></div>
    </nav>
  );
};

export default Navbar;




      // <ul className={`md:flex absolute bg-gray-200 mt-2 py-2 rounded-md space-y-2
      // duration-1000
      // ${open ? '' : 'hidden'}`}>
      //   {routes.map((route) => (
      //     <Link key={route.id} route={route} />
      //   ))}
      // </ul>

      // <ul className="md:flex absolute bg-yellow-200 p-4">
      //   {routes.map((route) => (
      //     <Link key={route.id} route={route} />
      //   ))}
      // </ul>
