import Link from "next/link";

const Footer = () => {
    return (
        <footer className="h-36 bg-gradient-to-br from-fuchsia-950/95 to-purple-800/20 flex justify-between py-4 px-2 md:px-[10vw] items-center">
            <Link href={"/"} className="text-2xl md:text-3xl font-bold font-montserrat text-pink-600/80 border-r-2 border-l-2 rounded-lg px-4 hover:scale-75 transition-all cursor-pointer">
                SHOPPER
            </Link>
            <div className="flex flex-col gap-2">
                <Link href={"/contact-us"} className=" text-base md:text-lg font-medium tracking-wide md:tracking-widest hover:text-gray-300 text-green-200 cursor-pointer active:text-white">Contact-us</Link>
                <Link href={"/about-us"} className=" text-base md:text-lg font-medium tracking-wide md:tracking-widest hover:text-gray-300 text-green-200 cursor-pointer active:text-white">About-us</Link>
            </div>
        </footer>
    );
}

export default Footer;