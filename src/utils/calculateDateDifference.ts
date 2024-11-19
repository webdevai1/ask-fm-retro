import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

export const calculateDateDifference = (date1: Date, date2: Date) => {
  const minutesDifference = differenceInMinutes(date1, date2);
  if (minutesDifference < 60) {
    return `${minutesDifference} minutes`;
  }

  const hoursDifference = differenceInHours(date1, date2);
  if (hoursDifference < 24) {
    return `${hoursDifference} hours`;
  }

  const daysDifference = differenceInDays(date1, date2);
  if (daysDifference < 30) {
    return `${daysDifference} days`;
  }

  const monthsDifference = differenceInMonths(date1, date2);
  if (monthsDifference < 12) {
    return `${monthsDifference} months`;
  }

  const yearsDifference = differenceInYears(date1, date2);
  return `${yearsDifference} years`;
};
