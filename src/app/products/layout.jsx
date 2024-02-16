import { LeftMenu, RightMenu } from "@/components";

const ProductLayout = ({children}) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:px-10 lg:px-20 min-w-screen min-h-screen gap-2 bg-purple-800/60">
            <LeftMenu/>
            <div className="w-screen md:min-w-[60vw] border-s-2 border-e-2 border-purple-950/50">{children}</div>
            <RightMenu/>
        </div>
    );
}

export default ProductLayout;