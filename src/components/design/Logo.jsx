import { Row } from "@components/base";
import Image from "next/image";

function Logo({ size = 'xs',  variant='1' }) {

    let scale = 7
    let className = "text-sm"

    switch (size.toLowerCase()) {
        case 'xs':
            scale = 8
            className = "text-xs"
            break;

        case 'sm':
            scale = 7
            className = "text-sm"
            break;

        case 'md':
            scale = 7
            className = "text-md"
            break;

        case 'lg':
            scale = 6
            className = "text-lg"
            break;

        case 'xl':
            scale = 5
            className = "text-xl"
            break;

        case '2xl':
            scale = 4
            className = "text-2xl"
            break;
        
        case '3xl':
            scale = 4
            className = "text-3xl"
            break;

        case '4xl':
            scale = 3
            className = "text-4xl"
            break;
        
        case '5xl':
            scale = 3
            className = "text-5xl"
            break;

        case '6xl':
            scale = 2
            className = "text-6xl"
            break;

        case '7xl':
            scale = 1.5
            className = "text-7xl"
            break;
        
        case '8xl':
            scale = 1.2
            className = "text-8xl"
            break;

    }


    return (
        <Row className="items-center justify-center space-x-2">
            <Image src={`/SVG/Logo ${variant}.svg`} width={124 / scale} height={150 / scale} alt='logo' />
            <h1 className={`${className} tracking-wider font-Poppins capitalize`}>Better your <span className='text-rose-500'>health</span>.</h1>
        </Row>
    );
}

export default Logo;