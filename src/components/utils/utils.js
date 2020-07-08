import { TIMEZONE_OPTIONS } from '../../constants/global';

export const initOptions = () => {
  const dataString = localStorage.timezonesOption;
  let options;
  if (dataString) {
    options = JSON.parse(localStorage.timezonesOption);
  } else {
    options = TIMEZONE_OPTIONS;
  }
  return options;
};

export const initClocks = () => {
  const dataString = localStorage.clocks;
  let clocks;
  if (dataString) {
    clocks = JSON.parse(localStorage.clocks);
  } else {
    clocks = [];
  }
  return clocks;
};
