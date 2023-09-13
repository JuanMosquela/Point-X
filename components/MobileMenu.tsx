"use client";

import { BiMenu } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";
import { menuLinks } from "@/constants";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Menu>
      <Menu.Button
        className="flex h-full w-full items-center flex-row-reverse pr-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        <BiMenu size={40} />
      </Menu.Button>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          static
          onMouseLeave={() => setOpen(false)}
          className="flex w-full flex-col absolute bottom-[50px]  sm:min-w-[300px] min-w-max  bg-black "
        >
          {menuLinks.map((link, i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <a
                  className={`${
                    active ? "text-green" : "text-white"
                  } text-xl border-t-2 border-green py-4 text-center  capitalize cursor-pointer duration-100 `}
                >
                  {link.text}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default MobileMenu;
