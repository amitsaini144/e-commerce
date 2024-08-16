import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm backdrop-blur-xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href='/' className="flex items-center">
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
                            E-commerce
                        </span>
                    </Link>
                    <Link href='/cart' className="flex items-center">
                        <span className="font-semibold text-gray-600 hover:text-gray-800 transition-colors duration-300">
                            Cart
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}