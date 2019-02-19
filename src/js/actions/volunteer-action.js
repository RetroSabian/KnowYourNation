import {VOLUNTEERINFO} from ".././constants/volunteer-constants"

export const logVolunteer = function logVolunteer(volunteer)
{
    return dispatch => dispatch({type:VOLUNTEERINFO,volunteer});
}