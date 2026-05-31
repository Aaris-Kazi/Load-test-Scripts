import { SharedArray } from 'k6/data';

const dataUsers = new SharedArray('dataUsers', function() {
    return JSON.parse(open('./data/users.json'));
});

const dataUsers1 = new SharedArray('dataUsers1', function() {
    return JSON.parse(open('./data/users.json'));
});

export { dataUsers, dataUsers1 };