import moment from 'moment';

export const getDateFromTimeStamp = (timestamp: number): string =>
  moment(timestamp).format('l');

export const getTimeStamp = () => moment().unix();

export const getDate = (params?: {
  amount: number;
  unit: 'days' | 'months' | 'hours' | 'minutes';
}) => {
  if (!params) return moment().toDate();

  return moment().add(params.amount, params.unit).toDate();
};

export const getTodaysDate = () => moment().format('l');

export const getPreviousDate = () => moment().subtract(1, 'days');

export const getLimitingDate = (date?: string | Date) => {
  const dateToLimit = date ?? getTodaysDate();
  return formatDate(dateToLimit);
};

export const formatDate = (
  date: string | number | Date,
  actualFormat?: string | null,
  prefferedFormat?: string,
) => {
  const format = prefferedFormat ?? 'YYYY-MM-DD';

  if (!date) return moment().format(format);
  if (actualFormat) return moment(date, actualFormat).format(format);

  return moment(date).format(format);
};

export const getTimeStampFromDate = (date: string): number => {
  // const [day, month, year] = date.split('/').map(part => parseInt(part, 10));

  // const dateObject = new Date(year, month - 1, day + 1);

  // return dateObject.getTime();
  return moment(date).valueOf();
};
