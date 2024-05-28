const statusMap: { [key: string]: string } = {
  APPLICATION_ENDED: '신청 종료',
  CLOSED: '마감',
  APPLICATION_IN_PROGRESS: '신청 가능',
  APPLICATION_NOT_STARTED: '신청 전',
  APPLICATION_EARLY_CLOSED: '조기 마감',
};

export const formatStatus = (status: string | null): string => {
  if (status === null) {
    return '신청 가능';
  }
  return statusMap[status] || status;
};
