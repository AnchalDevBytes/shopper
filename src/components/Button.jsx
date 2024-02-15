const Button = ({text, clicFun, type="button", bgClass="bg-green-800"}) => {
    return (
        <button type={type} onClick={clicFun} className={`${bgClass} text-white rounded-lg px-5 py-3`}>
            {text}
        </button>
    );
}

export default Button;