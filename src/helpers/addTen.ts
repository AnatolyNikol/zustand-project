import { changeByAmound, getCounter } from '../model/counter.store';

export const addTen = () => {
    const counter = getCounter();
    if (counter < 0) {
        changeByAmound(-10);
    } else {
        changeByAmound(10);
    }
};
