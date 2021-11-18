
export const initialState = {
    city: {
        title:"",
        description:"",
        imageUrl:"https://source.unsplash.com/sxiSod0tyYQ/700x433",
        time:1500,
        Des:"NN",
    },
    user:null,
}

export const actionTypes ={
    SET_CITY: "SET_CITY",
    SET_USER: "SET_USER",
}

const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){

        case "SET_CITY":
        return{
            ...state,
            city: action.city,
        }
        case "SET_USER":
        return{
            ...state,
            user: action.user,
        }
        default:
            return state;
    }
}

export default reducer 