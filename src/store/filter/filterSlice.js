import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: { year: [] },
    reducers: {
        setFilter: (state, { payload }) => {
            state.year = payload?.value
        }
    }
})

export const filterReducer = filterSlice.reducer
export const { setFilter } = filterSlice.actions
