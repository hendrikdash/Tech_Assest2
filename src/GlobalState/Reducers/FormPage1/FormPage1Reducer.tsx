import {Types,FormPage1Type,FormPage1Actions  } from '../../Contexts/FormPage1/FormPage1Context'
import {  FormPage2Actions } from '../../Contexts/FormPage2/FormPage2Context'
import {  FormPage3Actions } from '../../Contexts/FormPage3/FormPage3Context'
export const formPage1Reducer = (
    state: FormPage1Type,
    action: FormPage1Actions | FormPage2Actions | FormPage3Actions 
) => {
    switch (action.type) {
        case Types.SetCountry:
            return {
                ...state,
                country: action.payload.country
            };
        case Types.SetService:
            return {
                ...state,
                service: action.payload.service
            };
        default:
            return state;
    }
};