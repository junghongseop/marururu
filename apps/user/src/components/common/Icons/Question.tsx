import { IconPropsType } from '@maru/ui';

const QuestionIcon = ({ color }: IconPropsType) => {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.0956 14.357H13.4846L14.7192 15.9831C15.5523 15.1198 16.0442 13.7748 16.0341 11.968C16.0442 8.64555 14.3779 6.84881 11.999 6.84881C9.63012 6.84881 7.95384 8.64555 7.96387 11.968C7.95384 15.2905 9.63012 17.0872 11.999 17.0872C12.3804 17.0872 12.7418 17.037 13.0831 16.9467L11.0956 14.357ZM5.33401 11.968C5.32397 7.27039 8.17466 4.5 11.999 4.5C15.8033 4.5 18.674 7.27039 18.664 11.968C18.674 14.6079 17.7706 16.6355 16.3052 17.9103L18.3227 20.5H15.7732L14.5586 18.9642C13.7757 19.2754 12.9124 19.436 11.999 19.436C8.17466 19.436 5.32397 16.6556 5.33401 11.968Z"
                fill={color}
            />
        </svg>
    );
};

export default QuestionIcon;
