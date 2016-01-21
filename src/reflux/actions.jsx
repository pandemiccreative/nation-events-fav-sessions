import Reflux from 'reflux';

let Actions = Reflux.createActions([
  'createCookie',
  'getCookie',
  'announceCookie',
  'addToCookie',
  'delFromCookie',
  'filterSessions',
  'getSessions',
  'addToFilter',
  'delFromFilter',
  'clearFilter'
]);

export default Actions;
