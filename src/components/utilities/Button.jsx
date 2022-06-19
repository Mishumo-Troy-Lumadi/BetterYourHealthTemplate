function Button({ icon = '', label = '', className = '', onClick = () => { } }) {

    const padding = ((icon && label) || label) ? "px-4 py-2" : icon ? "p-2" : "hidden"
    const spacing = (icon && label) ? "space-x-2" : "space-x-0"

    return (
        <button className={`flex items-center text-sm font-light h-fit rounded transition-colors duration-300 text-white bg-violet-500 hover:bg-violet-400 active:bg-violet-300 ${spacing} ${padding} ${className}`} {...{onClick}}>
            <span className={`stroke-2 ${icon && 'w-5 h-5'}`}>{icon}</span>
            <span>{label}</span>
        </button>
    );
}

export default Button;