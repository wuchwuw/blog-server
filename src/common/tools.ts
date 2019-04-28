import moment from 'moment'

moment.locale('zh-cn')

export function formatDate (date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }
}