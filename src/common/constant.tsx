import moment from 'moment';

export const Ratings: object[] = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
];

export const SortField: object[] = [
    { label: 'Name', value: 1 },
    { label: 'Time', value: 2 },
    { label: 'Rating', value: 3 },
];

export const SortType: object[] = [
    { label: 'Tang dan', value: 'asc' },
    { label: 'Giam dan', value: 'desc' },
];

export const Months: object[] = [
    { label: 'Thang 1', value: '01' },
    { label: 'Thang 2', value: '02' },
    { label: 'Thang 3', value: '03' },
    { label: 'Thang 4', value: '04' },
    { label: 'Thang 5', value: '05' },
    { label: 'Thang 6', value: '06' },
    { label: 'Thang 7', value: '07' },
    { label: 'Thang 8', value: '08' },
    { label: 'Thang 9', value: '09' },
    { label: 'Thang 10', value: '10' },
    { label: 'Thang 11', value: '11' },
    { label: 'Thang 12', value: '12' },
];

export const CurrentDate = moment().format('YYYY-MM-DD');  