import { TextField, Button , Stack } from "@mui/material"
import { useForm } from "react-hook-form"

export default function FarmerForm({defaultValues, onSubmit}){
    const { register, handleSubmit } = useForm({ defaultValues});

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <TextField
                    label="Name"
                    variant="outlined"
                    {...register("name", { required: true })}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    {...register("email", { required: true })}
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    type="tel"
                    {...register("phone", { required: true })}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Stack>
        </form>
    )
}