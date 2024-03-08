import { LeftMenu, RightMenu } from "@/components";

const ProductLayout = ({children}) => {
    return (
        <div className="flex flex-col md:flex-row items-start px-14 md:items-center md:px-10 lg:px-20 min-h-screen md:gap-5 lg:gap-10 bg-purple-800/60">
            <LeftMenu/>
            <div className=" w-full md:w-[60vw] border-s-2 border-e-2 border-purple-950/50">{children}</div>
            <RightMenu/>
        </div>
    );
}

export default ProductLayout;