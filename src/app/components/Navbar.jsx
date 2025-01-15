"use client"

import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const currentPath = usePathname();
    return (
        <nav className="fixed top-0 w-screen bg-gray-100 flex items-center justify-between p-4 shadow-md">
            {/* <h1 className="text-5xl font-bold text-green-700">RTO</h1> */}
            <ul className="flex gap-7 items-center m-auto p-4 text-2xl">
                <li>
                    <Link id="logo" className="font-bold text-3xl pr-10"
                    href="/"
                    >
                    When Robots Take Over
                    </Link>                              
                </li>
                <li className={currentPath === "/" ? "active": "inactive" }>
                    <Link
                    href="/"
                    >
                    Home
                    </Link>
                </li>
                <li className={currentPath === "/about" ? "active": "inactive" }>
                    <Link
                    href="/about"
                    >
                    About Us
                    </Link>
                </li>
                <li className={currentPath === "/tributes" ? "active": "inactive" }>
                    <Link
                    href="/tributes"
                    >
                    Tributes
                    </Link>
                </li>
                <li className={currentPath === "/join" ? "active": "inactive" }>
                    <Link id="join"
                    href="/join"
                    >
                    Join
                    </Link>
                </li>
                <li className="pl-7">
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