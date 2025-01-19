"use client"

import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "../stylesheets/navbar.css";

export default function Navbar() {
    const currentPath = usePathname();
    return (
        <nav className="fixed top-0 w-screen bg-white flex items-center justify-between p-4 shadow-md">
            <ul className="flex gap-7 items-center m-auto p-4 text-2xl">
                <li>
                    <Link id="logo" className="font-bold text-3xl pr-10"
                    href="/"
                    >
                    RTO
                    </Link>                              
                </li>
                <li className={currentPath === "/" ? "active p-3": "inactive p-3" }>
                    <Link
                    href="/"
                    >
                    Home
                    </Link>
                </li>
                <li className={currentPath === "/about" ? "active p-3": "inactive p-3" }>
                    <Link
                    href="/about"
                    >
                    About Us
                    </Link>
                </li>
                <li className={currentPath === "/tributes" ? "active p-3": "inactive p-3" }>
                    <Link
                    href="/tributes"
                    >
                    Tributes
                    </Link>
                </li>
                <li className={currentPath === "/join" ? "active p-3": "inactive p-3" }>
                    <Link id="join"
                    href="/join"
                    >
                    Join
                    </Link>
                </li>
                <li className="inactive ml-7 p-4">
                    <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaInstagram />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}