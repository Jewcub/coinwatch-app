import { writable } from  "svelte/store";


export const items = writable([
    {
        id: 1, 
        text: "Throw away $100000"
        completed: false
    },
    {
        id: 2,
        text: "50% bitcoin target"
        completed: true
    },
    {
        id: 3,
        text: "20% Ethereum target"
        completed: false
    }
]);