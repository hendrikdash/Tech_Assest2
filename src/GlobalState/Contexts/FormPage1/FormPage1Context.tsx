
import {  ActionMapping } from '../../AppContext'


export enum Types {
    SetCountry = "SET_COUNTRY_FORM1_DATA",
    SetService = "SET_SERVICE_FORM1_DATA",
}

export type FormPage1Type = {
  country?: string;
  service?: string;
};


type FormPage1Payload = {
    [Types.SetCountry]: {
        country?: string;
        service?: string;
    };
    [Types.SetService]: {
        country?: string;
        service?: string;
    };
};

export type FormPage1Actions = ActionMapping<FormPage1Payload>[keyof ActionMapping<FormPage1Payload>];

