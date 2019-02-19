import {VOLUNTEERINFO} from "../constants/volunteer-constants";

const initialState = {
    volunteers: []
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case VOLUNTEERINFO:
        return{
            ...state,
            volunteers: action.volunteer
        };
        default:
        return state
    }
}

export default rootReducer;