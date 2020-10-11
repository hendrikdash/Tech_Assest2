
import {  ActionMapping } from '../../AppContext'


export enum Types {
    SetSendAmount = "SET_SENDAMOUNT_FORM2_DATA",
    SetReceiveAmount = "SET_RECEIVEAMOUNT_FORM2_DATA",
}

export type FormPage2Type = {
    send_amount?: string;
    receive_amount?: string;
};


type FormPage2Payload = {
    [Types.SetSendAmount]: {
        send_amount?: string;
        receive_amount?: string;
    };
    [Types.SetReceiveAmount]: {
        send_amount?: string;
        receive_amount?: string;
    };
};

export type FormPage2Actions = ActionMapping<FormPage2Payload>[keyof ActionMapping<FormPage2Payload>];

