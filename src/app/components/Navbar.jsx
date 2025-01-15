import { FaInstagram } from "react-icons/fa";



export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-100">
            <h1 className="text-5xl font-bold text-green-700">RTO</h1>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#tribute">Tribute</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
            </ul>

            <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500"
            >
                <FaInstagram />
            </a>
            
        </nav>
    )
}