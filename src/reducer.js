
export const initialState = {
    user: null,
    role: "U",
    
};


const reducer = (state,action) => {
    switch(action.type) {
        
        case "SET_USER":
            return {
                ...state,
                user: action.user,
                role: action.role,
            }
        
        
        default: 
        return state;
            
        
    }
}

export default reducer;