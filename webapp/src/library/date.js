import moment from 'moment';

export const getFormattedDate = date => moment(date).format('L');
export const getFormattedDateTime = date => moment(date).format('LLL');

export const getHumanReadableDiff = date => moment(date).fromNow();

