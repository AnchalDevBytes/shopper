import { LeftMenu, RightMenu } from "@/components";

const ProductLayout = ({children}) => {
    return (
        <div className="flex items-center px-20 w-screen h-screen gap-2 bg-purple-800/60">
            <LeftMenu/>
            <div>{children}</div>
            <RightMenu/>
        </div>
    );
}

export default ProductLayout;