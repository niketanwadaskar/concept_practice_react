import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// async thunk 

 const fetchDataAsync = createAsyncThunk(
    "data/fetchData", async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        return data
    }
)

const dataSlice = createSlice({
    name: "data",
    initialState: {
        status: "idle", // idle loading succeeded or failed 
        data: null,
        error: null,
    },
    reducers: {
        // Additional synchronous actions can be defined here if needed
    },
    extraReducers: (builder) => {
        // Handling the async action
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.data = action.payload
            })
            .addCase(fetchDataAsync.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
});


export { fetchDataAsync };
export default dataSlice.reducer