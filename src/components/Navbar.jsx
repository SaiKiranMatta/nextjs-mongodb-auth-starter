"use client";

import React from "react";
import { ModeToggle } from "./themeToggle";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session, status } = useSession();
    return (
        <div className=" z-50 fixed flex justify-between items-center w-screen h-20 px-4 border-b-[0.1px] border-opacity-25 border-slate-600 bg-white backdrop-blur-sm dark:bg-zinc-900 dark:bg-opacity-50 bg-opacity-75">
            <div className=" flex flex-row gap-4 dark:text-slate-300 text-slate-900 font-medium items-center justify-normal">
                <div className=" text-3xl dark:font-thin font-normal mr-4">
                    LOGO
                </div>
                <Link className=" hover:text-blue-500" href={"/"}>
                    Home
                </Link>
                <Link className=" hover:text-blue-500" href={"/"}>
                    Link1
                </Link>
                <Link className=" hover:text-blue-500" href={"/"}>
                    Link2
                </Link>
            </div>
            <div className=" flex flex-row items-center gap-4">
                <ModeToggle />
                {session ? (
                    <div className=" font-light cursor-pointer rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-400 text-white">
                        Log Out
                    </div>
                ) : (
                    <Link
                        href={"/register"}
                        className=" font-light cursor-pointer rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-400 text-white"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
