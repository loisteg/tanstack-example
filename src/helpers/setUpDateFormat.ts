import moment from 'moment';

export default function () {
  moment.updateLocale('en', {
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD.MM.YYYY HH:mm',
      l: 'DD.MM.YYYY',
      LL: 'MMMM Do YYYY',
      ll: 'MMM D YYYY',
      LLL: 'MMMM Do YYYY LT',
      lll: 'MMM D YYYY LT',
      LLLL: 'dddd, MMMM Do YYYY LT',
      llll: 'ddd, MMM D YYYY LT',
    },
  });
  moment.updateLocale('es', {
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD.MM.YYYY HH:mm',
      l: 'DD.MM.YYYY',
      LL: 'MMMM Do YYYY',
      ll: 'MMM D YYYY',
      LLL: 'MMMM Do YYYY LT',
      lll: 'MMM D YYYY LT',
      LLLL: 'dddd, MMMM Do YYYY LT',
      llll: 'ddd, MMM D YYYY LT',
    },
  });
  moment.updateLocale('it', {
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD.MM.YYYY HH:mm',
      l: 'DD.MM.YYYY',
      LL: 'MMMM Do YYYY',
      ll: 'MMM D YYYY',
      LLL: 'MMMM Do YYYY LT',
      lll: 'MMM D YYYY LT',
      LLLL: 'dddd, MMMM Do YYYY LT',
      llll: 'ddd, MMM D YYYY LT',
    },
  });
}
