import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from 'react-icons/fa6'
import Link from "next/link";

const RightMenu = () => {
    return (
        <div className="hidden flex-col justify-end lg:flex h-[80vh] w-[18vw] rounded-lg">
            <div className="h-fit w-full rounded-lg p-5 bg-fuchsia-900 shadow shadow-black">
                <h4 className="text-xs font-medium tracking-[3px] text-pink-200">Know more about us!</h4>
                <Link href="https://github.com/anchalraj31082004/shopper" className="flex items-center gap-3 pt-4 text-blue-300 hover:text-sky-600 transition-all duration-200">
                    <span><FaGithub /></span><span>Shopper Code</span>
                </Link>
                <Link href="https://twitter.com/AnchalTwt" className="flex items-center gap-3 pt-4 text-blue-300 hover:text-sky-600 transition-all duration-200">
                    <span><FaXTwitter /></span><span>My Twitter</span>
                </Link>
                <Link href='mailto:anchalraj20045@gmail.com' className="flex items-center gap-3 pt-4 text-blue-300 hover:text-sky-600 transition-all duration-200">
                    <span><MdEmail /></span><span>Email</span>
                </Link>
            </div>
        </div>
    );
}

export default RightMenu;