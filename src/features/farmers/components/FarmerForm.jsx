import { TextField, Button , Stack } from "@mui/material"
import { useEffect } from "react";
import { useForm } from "react-hook-form"

export default function FarmerForm({defaultValues, onSubmit}){
    const { register, handleSubmit , reset} = useForm({ defaultValues});

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues); // ensures form gets updated values
        }
    }, [defaultValues, reset]);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <TextField
                    label="Customer Number"
                    variant="outlined"
                    {...register("customerNumber", { required: true })}
                />
                <TextField
                    label="Name"
                    variant="outlined"
                    {...register("name", { required: true })}
                />
                <TextField
                    label="Mobile"
                    variant="outlined"
                    type="tel"
                    {...register("mobile", { required: true })}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    {...register("address", { required: true })}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Stack>
        </form>
    )
}