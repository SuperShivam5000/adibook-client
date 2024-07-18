import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {"_id":"666ff468eb43bd6e47af14c4","username":"hey","email":"hey@gmail.com","password":"$2b$10$1hiV1pamg/ZN25SNpyoGH.EX1wQ9l1W4qS1Zc9Bd7laLbKJvRBk3S","profilePicture":"person/3.jpeg","coverPicture":"","followers":[],"isAdmin":false,"createdAt":{"$date":{"$numberLong":"1718613096434"}},"updatedAt":{"$date":{"$numberLong":"1718732213374"}},"__v":{"$numberInt":"0"},"followings":["666ff8949f5794d81fdab338"]},
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export function AuthContextProvider({children}){
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return(
        <AuthContext.Provider value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
            }}
        >{children}</AuthContext.Provider>
    )
}