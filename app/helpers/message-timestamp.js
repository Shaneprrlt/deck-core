import Ember from 'ember';
import moment from 'moment';

export function messageTimestamp(params/*, hash*/) {
  let timestamp = moment(params[0]),
    now = moment(),
    sameDay = now.isSame(timestamp, 'day'),
    sameWeek = now.isSame(timestamp, 'week');

  if(sameDay) {
    return timestamp.format('h:mm a');
  } else if(sameWeek) {
    return timestamp.fromNow();
  } else {
    return timestamp.calendar();
  }
}

export default Ember.Helper.helper(messageTimestamp);
