'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/geek.png";
import cart from "../../public/images/cart.png";
import styles from "../../styles/Header.module.css";
import NavbarMenu from "./NavbarMenu";
import { useDrawerStore } from "@/state/store";
import ButtonTag from "./TagButton";

export default function Header() {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const setOpen = useDrawerStore((state) => state.setOpen);

  const handleTogleDrawer = () => {
    setOpen(!isOpen);
  }

  return (
    <header className="flex flex-col bg-white ">
      <div className="flex w-full justify-center items-center py-2 md:px-40 px-2">
        <div className="flex w-full justify-start content-center">
          <button
            onClick={handleTogleDrawer}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden md:block flex-col">
            <Image src={logo} alt="" height={100} />
          </div>
          <div className="block md:hidden ml-4">
            <Image src={logo} alt="" height={50} />
          </div>
          <div className="flex flex-col w-full text-center md:text-left ">
            <h1 className="my-auto px-5 md:text-xl text-lg font-bold">
            Tecno Book Store
            </h1>
          </div>
          <NavbarMenu />
        </div>
        <a
          className="font-bold flex justify-center items-center ml-auto"
          href="#"
          style={{ textDecoration: "none" }}
        >
          <Image src={cart} alt="" width="38" height="38" />
        </a>
      </div>
      <div className="flex w-full justify-center items-center py-2 md:px-40 px-2  bg-indigo-700">
        <ButtonTag tag="fiction" />
        <ButtonTag tag="non-fiction" />
        <ButtonTag tag="science" />
        <ButtonTag tag="essay" />
      </div>
      
    </header>
  );
}
