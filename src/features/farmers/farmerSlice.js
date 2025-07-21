import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/axiosInstance';

// FETCH ALL FARMERS
export const fetchFarmers = createAsyncThunk("farmers/fetch", async () => {
    const response = await axios.get('/getAllFarmers');
    console.log("==============");
    console.log("Farmers fetched:", response.data);
    console.log("==============");
    
    return response.data;
});

// ADD FARMER
export const addFarmer = createAsyncThunk("farmers/add", async (farmerData) => {
    const response = await axios.post('/farmers', farmerData);
    return response.data;
});

// UPDATE FARMER
export const updateFarmer = createAsyncThunk("farmers/update", async ({ id, farmerData }) => {
    const response = await axios.put(`/farmers/${id}`, farmerData);
    return response.data;
});

// DELETE FARMER
export const deleteFarmer = createAsyncThunk("farmers/delete", async (id) => {
    const response = await axios.delete(`/farmers/${id}`);
    return { _id: id }; // Assuming your backend just returns success, not the deleted object
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
            // Fetch
            .addCase(fetchFarmers.pending, (state) => {
                console.log("Fetching farmers...");
                
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFarmers.fulfilled, (state, action) => {
                console.log("Farmers fetched successfully:", action.payload);
                state.list = action.payload;
                state.loading = false;
                state.error = null;
                console.log("Farmers state updated:", state.list);
                console.log("Farmers loading state:", state.loading);
                console.log("Farmers error state:", state.error);
                console.log("Action payload:", action.payload);
                console.log("Action error info:", action.error);
                console.log("Action type:", action.type);
                console.log("Action meta:", action.meta);
                console.log("Farmers slice state after fetch:", state);
                console.log("==============");
                console.log("Farmers slice state after fetch:", {
                    list: state.list,
                    loading: state.loading,
                    error: state.error
                });
                console.log("==============");
                console.log("Farmers slice state after fetch:", {
                    list: state.list,
                    loading: state.loading,
                    error: state.error
                });
                console.log("==============");
                
            })
            .addCase(fetchFarmers.rejected, (state, action) => {
                console.error("Error fetching farmers:", action.error.message);
                console.error("Action payload:", action.payload);
                console.error("Action error info:", action.error);
                console.error("Action type:", action.type);
                console.error("Action meta:", action.meta);
                state.loading = false;
                state.error = action.error.message;
            })

            // Add
            .addCase(addFarmer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addFarmer.fulfilled, (state, action) => {
                state.list.push(action.payload);
                state.loading = false;
            })
            .addCase(addFarmer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Update
            .addCase(updateFarmer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateFarmer.fulfilled, (state, action) => {
                const index = state.list.findIndex(f => f._id === action.payload._id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
                state.loading = false;
            })
            .addCase(updateFarmer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Delete
            .addCase(deleteFarmer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteFarmer.fulfilled, (state, action) => {
                state.list = state.list.filter(f => f._id !== action.payload._id);
                state.loading = false;
            })
            .addCase(deleteFarmer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default farmerSlice.reducer;
