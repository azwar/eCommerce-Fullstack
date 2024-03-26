'use client'

import { useDrawerStore } from "@/state/store";
import React, { ReactNode } from "react";
import ButtonClose from "./CloseButton";

interface DrawerProps {
    children: ReactNode;
}

export default function Drawer({ children}: DrawerProps): React.JSX.Element {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const setOpen = useDrawerStore((state) => state.setOpen);

  return (
    <main
      className={
        "fixed w-full overflow-hidden z-20 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                  ? "transition-opacity opacity-100 duration-500 translate-x-0"
                  : "transition-all delay-500 opacity-0 -translate-x-full")
      }
    >
      <section
        className={
          "w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex flex-row justify-between">
            <header className="flex flex-1 p-4 font-bold text-lg">Menu</header>
            <ButtonClose onClick={() => setOpen(false)} />
          </div>
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setOpen(false);
        }}
      ></section>
    </main>
  );
}
