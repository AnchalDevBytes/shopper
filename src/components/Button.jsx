const Button = ({text, clicFun, type="button", bgClass="bg-green-800", className}) => {
    return (
        <button type={type} onClick={clicFun} className={`${bgClass} ${className} hover:${bgClass}/50 active:bg-white active:text-black text-white rounded-lg px-5 py-3 transition-all duration-200`}>
            {text}
        </button>
    );
}

export default Button;