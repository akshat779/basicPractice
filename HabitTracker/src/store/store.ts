 import {create} from "zustand"

export interface Habit{
    id: string;
    name: string;
    frequency: "daily"|"weekly";
    completedDates : string[];
    createdAt: string;
}

interface HabitState{
    habits: Habit[];
    addHabit: (name:string, frequency:"daily"|"weekly") => void;
    removeHabit: (id:string) => void;
    toggleHabit: (id:string) => void;

}

const useHabitStore = create<HabitState>()((set) => {
    return{
        habits:[],
        addHabit: (name,frequency) => set((state) => {
            return{
                habits: [...state.habits,{
                    id: Date.now().toString(),
                    name,
                    frequency,
                    completedDates:[],
                    createdAt: new Date().toISOString(),
                }]
            };
        }),

        removeHabit:(id) => set((state)=>({
            habits: state.habits.filter(habit => habit.id !== id)
        })),
        toggleHabit:(id,date) => set((state) => ({
            
        }))
    }
})

export default useHabitStore;