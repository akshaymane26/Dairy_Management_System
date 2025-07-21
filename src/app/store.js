import { configureStore } from "@reduxjs/toolkit";
import farmerReducer from "../features/farmers/farmerSlice";
// Add more reducers as you create more features

const store = configureStore({
    reducer: {
        farmer: farmerReducer,
        // other reducers go here

    },
   
//       // Optional middleware customization
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // helpful when working with dates/files
//     }),
});

export default store;
