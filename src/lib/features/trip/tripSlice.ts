import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as initTripMockData from "./initTripMock.json"

export interface LandmarkObject {
    name: string
    description: string
    content: string
    city: string
    location?: string
    url?: string
    imageUrl?: string[]
    type?: string[]
}

export interface DayPlan {
    [day:number] : LandmarkObject[]
}

export interface TripState {
    city: string
    startDate?: Date
    endDate?: Date
    numberOfDay: number
    tripPlan: DayPlan
}

const initialState:TripState = {
    city: '',
    startDate: undefined,
    endDate: undefined,
    numberOfDay: 0,
    tripPlan: {},
}

const tripSlice = createSlice({
    name: 'trip',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
          initTripAsync.fulfilled,
          (state, action: PayloadAction<TripState>) => {
            console.log('init trip api called', action.payload)
            state = action.payload
          }
        )
    }
})

export const initTripAsync = createAsyncThunk(
    "trip/initTripAsync",
    async ({ city, numberOfDay, startDate, endDate }: { city: string; numberOfDay: number; startDate: Date, endDate:Date }) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const tripPlan: DayPlan = initTripMockData
        return {tripPlan, numberOfDay, startDate, endDate, city};
    }
);

export default tripSlice.reducer