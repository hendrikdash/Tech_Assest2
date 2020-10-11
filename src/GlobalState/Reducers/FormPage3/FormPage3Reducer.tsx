import {Types,FormPage3Type,FormPage3Actions  } from '../../Contexts/FormPage3/FormPage3Context'
import {  FormPage1Actions } from '../../Contexts/FormPage1/FormPage1Context'
import {  FormPage2Actions } from '../../Contexts/FormPage2/FormPage2Context'
export const formPage3Reducer = (
    state: FormPage3Type,
    action: FormPage1Actions | FormPage2Actions | FormPage3Actions 
) => {
    switch (action.type) {
        case Types.SetAccountName:
            return {
                ...state,
                account_name: action.payload.account_name,
            };
        case Types.SetAccountNumber:
            return {
                ...state,
                account_number: action.payload.account_number,
            };
        case Types.SetAccountBank:
            return {
                ...state,
                account_bank: action.payload.account_bank,
            };
        default:
            return state;
    }
};