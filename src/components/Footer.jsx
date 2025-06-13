import { Facebook, Rss, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

                    <div className="flex flex-col items-center md:items-start md:col-span-1">
                        <div className="text-white text-4xl mb-4">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f0/NBC_News_%282023%29.svg' alt='NBC News Logo' className='h-10 w-auto' />
                        </div>
                        <p className="text-sm">copyright &copy; {new Date().getFullYear()} | NBC NEWS</p>
                    </div>

                    <div className="md:col-span-1 flex text-white flex-col items-center md:items-start text-sm space-y-2"> {/* Changed text-white-900 to text-white */}
                        <Link to="/" style={{ color: "white" }} className="hover:text-gray-400 transition-colors duration-200">Privacy Policy</Link> {/* Changed hover:text-white to hover:text-gray-400 */}
                        <Link to="/" style={{ color: "white" }} className="hover:text-gray-400 transition-colors duration-200">Do not sell my personal info</Link>
                        <Link to="/" style={{ color: "white" }} className="hover:text-gray-400 transition-colors duration-200">Terms of Service</Link>
                        <Link to="/" style={{ color: "white" }} className="hover:text-gray-400 transition-colors duration-200">nbcnews.com Site Map</Link>
                    </div>

                    <div className="md:col-span-1 flex flex-col items-center md:items-start text-sm space-y-4">
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
                            <Link to="/" style={{ color: "white" }} className="hover:text-gray-400 transition-colors duration-200">About</Link>
                            <Link to="/" style={{ color: "white" }} className="hover:text-gray-400 transition-colors duration-200">Contact</Link>
                            <Link to="/" style={{ color: "white" }} className="hover:text-gray-400 transition-colors duration-200">Careers</Link>
                            <Link to="/" style={{ color: "white" }} className="hover:text-gray-400 transition-colors duration-200">Coupons</Link>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <Link to="/" style={{ color: "white" }} className="transition-colors duration-200">
                                <Rss className="w-6 h-6" />
                            </Link>
                            <Link to="/" style={{ color: "white" }} className="transition-colors duration-200">
                                <Twitter className="w-6 h-6" />
                            </Link>
                            <Link to="/" style={{ color: "white" }} className="transition-colors duration-200">
                                <Facebook className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};