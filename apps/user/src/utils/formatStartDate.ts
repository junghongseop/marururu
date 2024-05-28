const formatStartDate = (startDate: string): string => {
  const date = new Date(startDate);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeekString = daysOfWeek[dayOfWeek];

  return `${month}월 ${day}일(${dayOfWeekString}) ${hour}:${minute}`;
};

export default formatStartDate;
