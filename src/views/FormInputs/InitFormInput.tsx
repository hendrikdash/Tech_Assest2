import React from 'react';


export const CountryList: object[] = [
  { code: 'us', title: 'UNITED STATE'},
  { code: 'gb', title: 'UNITED KINGDOM'},
  { code: 'sg', title: 'SINGAPORE'},
  { code: 'fr', title: 'FRANCE'},
  { code: 'my', title: 'MALAYSIA'},
  { code: 'it', title: 'ITALY'},
];

export  const ServicesAndCurrency : any = [
  {type: [1,2,3], value: "US", rate: 'USD', state: 'UNITED STATES OF AMERICA'},
  {type: [1,2], value: "GB", rate: 'GBP', state: 'UNITED KINGDOM OF GREAT BRITAIN'},
  {type: [2,3], value: "FR", rate: 'EUR', state: 'FRANCE'},
  {type: [1,2], value: "SG", rate: 'SGD', state: 'SINGAPORE'},
  {type: [3], value: "IT", rate: 'EUR', state: 'ITALY'},
  {type: [2], value: "MY", rate: 'MYR', state: 'MALAYSIA'},
];



export const Services = [
  {
    id: 1,
    name: "Bank Transfer",
  },
  {
    id: 2,
    name: "Cash Pick Up",
  },
  {
    id: 3,
    name: "E-Wallet",
  }
]


export type FormData = {
  country: string;
  service: string;
  receive: string;
  sendAmount: string;
  account_name: string;
  account_no: string;
  last_page: string;
  account_bank: string;
};


export const TABS = [
  { label: "Choose Country", value: 0 },
  { label: "Amount", value: 1 },
  { label: "Recipient details", value: 2 },
  { label: "Recheck", value: 3 }
];



export const defineTypeService = (typeService: number) => {
  if(typeService === 0){
    return (
      <>
          <option value="null" selected>Choose...</option>
          <option value="1">Send Money 1</option>
          <option value="2" >Send Money 2</option>
          <option value="3">Send Money 3</option>
      </>
      
    )
  } else {
    return (
      <>
        <option value="null" selected>Choose...</option>
        <option value="4">Mobile Top Up 1</option>
        <option value="5">Mobile Top Up 2</option>
        <option value="6">Mobile Top Up 3</option> 
      </>
    )
  } 
}



export const defineBankList = () => {
  return (
    <>
        <option value="null">Choose...</option>
        <option value="1">Bank 1</option>
        <option value="2">Bank 2</option>
        <option value="3">Bank 3</option>
        <option value="4">Bank 4</option>
        <option value="5">Bank 5</option>
    </>
    
  )
}
