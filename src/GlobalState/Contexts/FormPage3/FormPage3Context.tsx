
import {  ActionMapping } from '../../AppContext'

export enum Types {
    SetAccountName = "SET_ACCOUNT_NAME_FORM3_DATA",
    SetAccountNumber = "SET_ACCOUNT_NUMBER_FORM3_DATA",
    SetAccountBank = "SET_ACCOUNT_BANK_FORM3_DATA",
}

export type FormPage3Type = {
    account_name?: string;
    account_number?: string;
    account_bank?: string;
};

type FormPage3Payload = {
    [Types.SetAccountName]: {
        account_name?: string;
        account_number?: string;
        account_bank?: string
    };
    [Types.SetAccountNumber]: {
        account_name?: string;
        account_number?: string;
        account_bank?: string
    };
    [Types.SetAccountBank]: {
        account_name?: string;
        account_number?: string;
        account_bank?: string
    };
};

export type FormPage3Actions = ActionMapping<FormPage3Payload>[keyof ActionMapping<FormPage3Payload>];

