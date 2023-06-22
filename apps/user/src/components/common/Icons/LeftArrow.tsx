import { IconPropsType } from '@maru/ui';

const LeftArrowIcon = ({ color, size }: IconPropsType) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M25.0125 31.8874C25.3125 31.6124 25.4625 31.2684 25.4625 30.8554C25.4625 30.4434 25.3125 30.0874 25.0125 29.7874L13.7625 18.4999L25.05 7.17488C25.35 6.89988 25.5 6.55588 25.5 6.14288C25.5 5.73088 25.3375 5.37488 25.0125 5.07488C24.7375 4.77488 24.3935 4.62488 23.9805 4.62488C23.5685 4.62488 23.2125 4.77488 22.9125 5.07488L10.4625 17.5624C10.3125 17.6874 10.206 17.8309 10.143 17.9929C10.081 18.1559 10.05 18.3249 10.05 18.4999C10.05 18.6749 10.081 18.8434 10.143 19.0054C10.206 19.1684 10.3125 19.3124 10.4625 19.4374L22.95 31.9249C23.225 32.2249 23.5625 32.3749 23.9625 32.3749C24.3625 32.3749 24.7125 32.2124 25.0125 31.8874Z"
                fill={color}
            />
        </svg>
    );
};

export default LeftArrowIcon;
