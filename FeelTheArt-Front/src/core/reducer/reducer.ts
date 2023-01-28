import { createReducer } from "@reduxjs/toolkit";
import { User } from "../types/user";

const initialState: { user: User | null; artist: User[] } = {
  user: null,
  artist: [],
};
const userReducer = createReducer(initialState, (build) => {});
