import { createSlice } from "@reduxjs/toolkit";

type LikeArticleState = {
    [id:number] : boolean
}

const initialState: LikeArticleState = {}

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        removeLike: (state, action) => ({
            ...state,
            [action.payload]: false,
        })
    }
})

export const { addLike, removeLike } = likeSlice.actions

export default likeSlice.reducer