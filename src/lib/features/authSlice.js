import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
    loader:false,
    userData: null,
    authStatus : false,
}


export const initializeStates = createAsyncThunk(
    "auth/initializeAuthStatus", async () => {
        const token = Cookies.get('login-token')
        const isAuthenticated = !!token;

        try {
            const response = await axios.get(
                'https://dummyjson.com/auth/me',
                {
                    headers : {
                        Authorization : token
                    },
                }
            )
            const getCurrentUser = response.data;
            return {isAuthenticated : isAuthenticated, data : getCurrentUser};
        } catch (error) {
            console.error("Error in getCurrentUser : " +error.message);   
            throw error;
        }
    }
)


export const login = createAsyncThunk("login", async ({ username, password }) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });
      return response.data;
    } catch (error) {
      console.error("Login error:" +error.message);
      throw error; 
    }
  });

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout : (state) => {
            state.userData = null,
            state.authStatus = false
            Cookies.remove('login-token')
        }
    },
    extraReducers: (builder) => {
        builder
        //addcase for authStatus
        .addCase(initializeStates.fulfilled, (state, action) => {
            const {isAuthenticated, data} = action.payload
            state.authStatus = isAuthenticated;
            state.userData = data;
        })


        //addcases for login data
        .addCase(login.pending, (state) => {
            state.loader = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            const data = action.payload;
            const token = data?.token;
            Cookies.set("login-token", token)

            state.userData = data;
            state.authStatus = true;
            state.loader = false;
        })
        .addCase(login.rejected, (state) => {
            state.loader = false;
        })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;