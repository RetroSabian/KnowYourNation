import {ANIMATIONINFO, ANIMATIONCLEAR} from ".././constants/animation-constants";

export const logAnimation = function logAnimation(animation)
{
 return   dispatch => dispatch({type:ANIMATIONINFO,animation}); 
}
export const clearAnimation = function clearAnimation(animation)
{
 return   dispatch => dispatch({type:ANIMATIONCLEAR,animation}); 
}
