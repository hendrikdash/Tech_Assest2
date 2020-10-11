import React, { createContext, useReducer, Dispatch } from "react";



import {FormPage1Type, FormPage1Actions   } from './Contexts/FormPage1/FormPage1Context'
import {  formPage1Reducer } from './Reducers/FormPage1/FormPage1Reducer'

import {FormPage2Type, FormPage2Actions   } from './Contexts/FormPage2/FormPage2Context'
import {  formPage2Reducer } from './Reducers/FormPage2/FormPage2Reducer'

import {FormPage3Type, FormPage3Actions   } from './Contexts/FormPage3/FormPage3Context'
import {  formPage3Reducer } from './Reducers/FormPage3/FormPage3Reducer'


export type ActionMapping<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};


type InitialStateType = {
  form_page1: FormPage1Type;
  form_page2: FormPage2Type;
  form_page3: FormPage3Type;
};

const initialState = {
  form_page1: {
    country: '',
    service: ''
  },
  form_page2: {
    send_amount: '',
    receive_amount: ''
  },
  form_page3: {
    account_name: '',
    account_number: '',
    account_bank: ''
  },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<
  FormPage1Actions | FormPage2Actions | FormPage3Actions
   >;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
    { form_page1, form_page2, form_page3 }: InitialStateType,
  action: FormPage1Actions | FormPage2Actions | FormPage3Actions
) => ({
  form_page1: formPage1Reducer(form_page1, action),
  form_page2: formPage2Reducer(form_page2, action),
  form_page3: formPage3Reducer(form_page3, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };