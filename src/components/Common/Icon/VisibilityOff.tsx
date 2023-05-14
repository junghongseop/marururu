import { IconPropsInterface } from "./interface";

const VisbilityOff = ({ cursor, onClick }: IconPropsInterface) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      cursor={cursor}
    >
      <path
        d="M15.775 12.975L14.65 11.85C14.8 11.0167 14.5626 10.271 13.938 9.613C13.3126 8.95433 12.55 8.7 11.65 8.85L10.525 7.725C10.7583 7.625 10.9916 7.55 11.225 7.5C11.4583 7.45 11.7166 7.425 12 7.425C13.1333 7.425 14.0956 7.821 14.887 8.613C15.679 9.40433 16.075 10.3667 16.075 11.5C16.075 11.7833 16.05 12.0457 16 12.287C15.95 12.529 15.875 12.7583 15.775 12.975ZM18.95 16.075L17.85 15.05C18.4833 14.5667 19.0459 14.0373 19.538 13.462C20.0293 12.8873 20.4499 12.2333 20.7999 11.5C19.9666 9.81667 18.7706 8.479 17.212 7.487C15.654 6.49567 13.9166 6 12 6C11.5166 6 11.0416 6.03333 10.575 6.1C10.1083 6.16667 9.64995 6.26667 9.19995 6.4L8.02495 5.225C8.65828 4.975 9.30429 4.79167 9.96295 4.675C10.621 4.55833 11.3 4.5 12 4.5C14.2166 4.5 16.2373 5.08733 18.062 6.262C19.8873 7.43733 21.2666 8.98333 22.2 10.9C22.2333 10.9667 22.2583 11.054 22.275 11.162C22.2916 11.2707 22.2999 11.3833 22.2999 11.5C22.2999 11.6167 22.2916 11.729 22.275 11.837C22.2583 11.9457 22.2333 12.0333 22.2 12.1C21.8166 12.8833 21.354 13.6083 20.812 14.275C20.2706 14.9417 19.65 15.5417 18.95 16.075ZM19.225 21.35L15.725 17.85C15.2083 18.05 14.6376 18.2083 14.013 18.325C13.3876 18.4417 12.7166 18.5 12 18.5C9.76662 18.5 7.74162 17.9127 5.92495 16.738C4.10828 15.5627 2.73328 14.0167 1.79995 12.1C1.76662 12.0333 1.74162 11.9457 1.72495 11.837C1.70828 11.729 1.69995 11.6167 1.69995 11.5C1.69995 11.3833 1.70828 11.275 1.72495 11.175C1.74162 11.075 1.76662 10.9833 1.79995 10.9C2.18328 10.1333 2.64162 9.425 3.17495 8.775C3.70828 8.125 4.28328 7.55 4.89995 7.05L2.64995 4.775C2.49995 4.625 2.42495 4.45 2.42495 4.25C2.42495 4.05 2.49995 3.86667 2.64995 3.7C2.79995 3.56667 2.97928 3.5 3.18795 3.5C3.39595 3.5 3.56662 3.56667 3.69995 3.7L20.2999 20.3C20.4333 20.4333 20.5043 20.6 20.513 20.8C20.521 21 20.4499 21.1833 20.2999 21.35C20.15 21.4833 19.971 21.55 19.763 21.55C19.5543 21.55 19.375 21.4833 19.225 21.35ZM5.94995 8.1C5.41662 8.51667 4.90428 9.021 4.41295 9.613C3.92095 10.2043 3.51662 10.8333 3.19995 11.5C4.03328 13.1833 5.22895 14.5207 6.78695 15.512C8.34562 16.504 10.0833 17 12 17C12.45 17 12.9 16.9623 13.35 16.887C13.8 16.8123 14.1833 16.7333 14.5 16.65L13.25 15.35C13.0666 15.4167 12.8666 15.4707 12.65 15.512C12.4333 15.554 12.2166 15.575 12 15.575C10.8666 15.575 9.90428 15.179 9.11295 14.387C8.32095 13.5957 7.92495 12.6333 7.92495 11.5C7.92495 11.3 7.94595 11.0873 7.98795 10.862C8.02928 10.6373 8.08328 10.4333 8.14995 10.25L5.94995 8.1Z"
        fill="#9497A0"
      />
    </svg>
  );
};

export default VisbilityOff;
