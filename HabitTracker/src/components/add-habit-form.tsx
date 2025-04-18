import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react"
import useHabitStore from "../store/store";

const AddHabitForm = () => {
    const [name,setName] = useState("");
    const [frequency, setFrequency] = useState<"daily"|"weekly">("daily")
    const{habits, addHabit} = useHabitStore();
    console.log(habits);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(name.trim()){
            addHabit(name,frequency);
            setName("");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:2 ,
            }}>
                <TextField 
                label="Habit Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Habit Name"
                fullWidth />
   
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
                <Select
                value={frequency}
                label="Frequency"
                onChange={(e) => setFrequency(e.target.value as "daily"|"weekly")}
                >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">Add Habit</Button>
            </Box>
        </form>
    )
}   

export default AddHabitForm;