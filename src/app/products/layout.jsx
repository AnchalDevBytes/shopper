import { LeftMenu, RightMenu } from "@/components";

const ProductLayout = ({children}) => {
    return (
        <div className="flex items-center px-20 w-screen h-screen gap-2 bg-purple-800/60">
            <LeftMenu/>
            <div className="min-w-[60vw] border-s-2 border-e-2 border-purple-950/50">{children}</div>
            <RightMenu/>
        </div>
    );
}

export default ProductLayout;