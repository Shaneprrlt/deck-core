import Ember from 'ember';

export function occurenceMessage(params/*, hash*/) {
  let occurences = params[0];
  if (occurences > 1) {
    return occurences + " users affected";
  } else {
    return occurences + " user affected";
  }
}

export default Ember.Helper.helper(occurenceMessage);
