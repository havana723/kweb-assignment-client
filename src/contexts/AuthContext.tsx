import React from "react";
import UserResponse from "../types/UserResponse";

interface AuthContextType {
  currentUser: UserResponse | null;
  refetchProfile: () => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  currentUser: null,
  refetchProfile: () => {
    /* to be filled in _app */
  },
  logout: () => {
    /* to be filled in _app */
  },
});
