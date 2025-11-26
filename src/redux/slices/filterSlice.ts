import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API} from "../../Dal/api";
import {MenuType, UseGetMenuProps} from "../../hooks/useGetMenu";

type InitTypes = {
    menu: MenuType[]
    categories: { id: number, title: string }[]
    selectedSlice: number
    preloader: boolean
}

const initialState: InitTypes = {
    menu: [],
    categories: [
        {id: 0, title: "Все"},
        {id: 1, title: "Мясные"},
        {id: 2, title: "Вегетарианская"},
        {id: 3, title: "Острые"},
        {id: 4, title: "Додстеры"},
        {id: 5, title: "Напитки"},
    ],
    selectedSlice: 0,
    preloader: true,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(menuThunk.fulfilled, (state, action) => {
                state.menu = action.payload
                state.preloader = false
            })
            .addCase(menuThunk.pending, (state, action) => {
                state.preloader = true
            })
            .addCase(menuThunk.rejected, (state, action) => {
                console.log('error')
            })
    }
})

export const menuThunk = createAsyncThunk(
    'menuThunk',
    async ({activeCategory, selectedSort, search, curPage}:UseGetMenuProps) => {
        const res = await API.getMenu(activeCategory, selectedSort, search, curPage)
        return res
    }
)