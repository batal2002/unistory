import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";


const initialState: IUser = {
    address: '',
    email: '',
    id: null,
    username: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser(state, action: PayloadAction<IUser>) {
            state.address = action.payload.address
            state.email = action.payload.email
            state.id = action.payload.id
            state.username = action.payload.username
        },
        deleteUser(state) {
            state.address = ''
            state.email = ''
            state.id = null
            state.username = ''
        },
    }
})

export const {createUser, deleteUser} = userSlice.actions
export default userSlice.reducer