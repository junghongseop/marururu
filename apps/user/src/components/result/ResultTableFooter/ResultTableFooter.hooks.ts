import { ROUTES } from '@/constants/common/constant';
import { usePrintAdmissionTicket } from '@/services/result/mutations';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
  const router = useRouter();

  const handleMoveMainPage = () => {
    router.push(ROUTES.MAIN);
  };

  return { handleMoveMainPage };
};

export const usePrintAdmissionTicketURLAction = () => {
  const { PrintAdmissionTicket } = usePrintAdmissionTicket();

  const handlePrintAdmissionTicketUrlButtonClick = (id: number) => {
    PrintAdmissionTicket(id);
  };

  return { handlePrintAdmissionTicketUrlButtonClick };
};
