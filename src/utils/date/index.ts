const getChatTime = (date: Date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${hour} ${minutes}`;
};
const setDateChat = (oldDate: Date) => {
  const year = oldDate.getFullYear();
  const month = oldDate.getMonth() + 1;
  const date = oldDate.getDate();
  return `${year}-${month}-${date}`;
};

export {getChatTime, setDateChat};
