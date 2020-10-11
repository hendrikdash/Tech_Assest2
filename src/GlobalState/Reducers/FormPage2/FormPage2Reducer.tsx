import {Types,FormPage2Type,FormPage2Actions  } from '../../Contexts/FormPage2/FormPage2Context'
import {  FormPage1Actions } from '../../Contexts/FormPage1/FormPage1Context'
import {  FormPage3Actions } from '../../Contexts/FormPage3/FormPage3Context'
export const formPage2Reducer = (
    state: FormPage2Type,
    action: FormPage1Actions | FormPage2Actions | FormPage3Actions 
) => {
    switch (action.type) {
        case Types.SetSendAmount:
            return {
                ...state,
                send_amount: action.payload.send_amount,
            };
        case Types.SetReceiveAmount:
            return {
                ...state,
                receive_amount: action.payload.receive_amount,
            };
        default:
            return state;
    }
};