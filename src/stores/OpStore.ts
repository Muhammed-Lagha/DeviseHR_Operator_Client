import { defineStore } from "pinia";


const useOpStore = defineStore('op', {
    state: () => {
        return {
            operators: [],
        }
    },
    actions: {
        async getOperators(token: string) {
            const response = await fetch(`${opApiConnection}/api/admin-operators/operators`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            this.operators = data.data;
        },
    },
});