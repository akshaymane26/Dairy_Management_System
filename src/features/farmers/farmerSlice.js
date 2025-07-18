import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/axiosInstance';

export const fetchFarmers = createAsyncThunk("farmers/fetch", async () => {
    try {
        const response = await axios.get('/farmers');
        return response.data;
    } catch (error) {
        console.error("Error fetching farmers:", error);
        throw error;
    }
});

export const addFarmer = createAsyncThunk("farmers/add", async (farmerData) => {
    try {
        const response = await axios.post('/farmers', farmerData);
        return response.data;
    } catch (error) {
        console.error("Error adding farmer:", error);
        throw error;
    }
});

export const updateFarmer = createAsyncThunk("farmers/update", async ({ id, farmerData }) => {
    try {
        const response = await axios.put(`/farmers/${id}`, farmerData);
        return response.data;
    } catch (error) {
        console.error("Error updating farmer:", error);
        throw error;
    }
});

export const deleteFarmer = createAsyncThunk("farmers/delete", async (id) => {
    try {
        const response = await axios.delete(`/farmers/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting farmer:", error);
        throw error;
    }
});

const farmerSlice = createSlice({
    name: "farmers",
    initialState: {
        list: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFarmers.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(addFarmer.fulfilled, (state, action) => {
                state.list.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(updateFarmer.fulfilled, (state, action) => {
                const index = state.list.findIndex(f => f._id === action.payload._id);
                if (index !== -1) state.list[index] = action.payload;
            })
            .addCase(deleteFarmer.fulfilled, (state, action) => {
                state.list = state.list.filter(f => f._id !== action.payload._id);
                state.loading = false;
                state.error = null;
            });
    }
});

export default farmerSlice.reducer;
