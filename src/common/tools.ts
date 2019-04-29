import * as moment from 'moment'

moment.locale('zh-cn')

export function formatDate (date: Date, friendly: boolean) {
  let d = moment(date);

  if (friendly) {
    return d.fromNow();
  } else {
    return d.format('YYYY-MM-DD HH:mm');
  }
}