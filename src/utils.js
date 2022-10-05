import dayjs from 'dayjs';

const getRandomInt = (min, max)=>{
  const diff = max - min;
  return min + Math.round(Math.random() * diff);
};


const getYearFromDate = (date) => dayjs(date).format('YYYY');
const humanizeDate = (date) => dayjs(date).format('MMM DD');
const humanizeTime = (date) => dayjs(date).format('HH:mm');

class DateTimeFormat{
  #dateTime;
  constructor (dateTime){
    this.#dateTime = dateTime;
  }

  get date(){
    return dayjs(this.#dateTime).format('MMM DD');
  }

  get time(){
    return dayjs(this.#dateTime).format('HH:mm');
  }

  get longDate(){
    return dayjs(this.#dateTime).format('YYYY-MM-DD');
  }

  get longDateTime(){
    return dayjs(this.#dateTime).format('YYYY-MM-DDTHH:mm');
  }

}


const convertMinutesToHours = (minutes) => {
  const restMinutes = (minutes % 60);
  return `${(minutes - restMinutes) / 60}h ${restMinutes}m`;
};

const getAuthorizationString = ()=>{
  const alphabet = '1234567890absdefghijklmnopqrstuvwxyzABSDIFGHIJKLMNOPQRSTUVWZYZ';
  const lettersMaxIndex = alphabet.length - 1;
  let stringLength = getRandomInt(10,30);
  let randomString = '';
  while(stringLength > 0)
  {
    randomString += alphabet[getRandomInt(0,lettersMaxIndex)];
    stringLength--;
  }
  return `Basic ${randomString}`;
};

export {
  getRandomInt,
  getYearFromDate,
  convertMinutesToHours,
  humanizeDate,
  humanizeTime,
  getAuthorizationString,
  DateTimeFormat
};
