const formatApplicationAt = (applicationAt: string) => {
  const date = new Date(applicationAt);

  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

  return `${year}.${month}.${day}`;
};

export default formatApplicationAt;
