import dayjs from "dayjs";

export const dateFromNowFormat = (date) => {

  const nowTime = dayjs();
  const timeFormatNow = dayjs(nowTime).format('MM/DD/YYYY HH:mm:ss');
  const timeData =  dayjs(date, 'MM/DD/YYYY HH:mm:ss', true).format('MM/DD/YYYY HH:mm:ss');
  const checkTime = dayjs(timeFormatNow).valueOf() - dayjs(timeData).valueOf();
  const data = checkTime / 86400000;
  if (data >= 1) {
    return  dayjs(date).format('DD/MM/YYYY HH:mm:ss')
  }
  let checkTimeHH = checkTime / 3600000;
  checkTimeHH = checkTimeHH.toFixed(2);
  if (checkTimeHH > 1) {
    return `Khoảng ${Math.floor(checkTimeHH)} giờ trước`;
  }
  let checkTimeMM = checkTime / 60000;
  checkTimeMM = checkTimeMM.toFixed(2);
  return `Khoảng ${Math.ceil(checkTimeMM)} phút trước`;
};

export const handleCopy = (originText) => {
  const textArea = document.createElement('textarea');
  textArea.value = originText;
  textArea.style.position = 'fixed'; // avoid scrolling to bottom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
};