import _ from 'lodash';
import moment from 'moment';

export function getMonthArray(date){
    const monthsString=_.times(moment(date).daysInMonth(), (n)=> moment([moment(date).year(), moment(date).month(), n+1]).format() );
    return _.map(monthsString,(dateStr)=>new Date(dateStr) );
}