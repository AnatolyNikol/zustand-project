import { create, StateCreator } from 'zustand';
import { CoffeType } from '../types/coffeTypes';
import { devtools } from 'zustand/middleware';
import axios from 'axios';

const BASE_URL = 'https://purpleschool.ru/coffe-api/';

type CoffeeState = {
    coffeeList?: CoffeType[];
};

type CoffeeActions = {
    getCoffeeList: () => void;
};

const coffeeSlice: StateCreator<
    CoffeeActions & CoffeeState,
    [['zustand/devtools', never]]
> = (set) => ({
    coffeeList: undefined,
    getCoffeeList: async () => {
        try {
            const { data } = await axios.get(BASE_URL);
            set({ coffeeList: data });
        } catch (error) {
            console.error(error);
        }
    },
});

export const useCoffeeStore = create<CoffeeActions & CoffeeState>()(
    devtools(coffeeSlice)
);
