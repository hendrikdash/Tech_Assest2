import React, {useContext,useRef,Ref, useImperativeHandle,useState, forwardRef, useEffect} from 'react';
import {Types} from '../../../GlobalState/Contexts/FormPage3/FormPage3Context'
import {AppContext} from '../../../GlobalState/AppContext'
import ErrorMessage from '../../../component/ErrorMessage';
import SelectInputComponent from '../../../component/SelectInputComponent';
import SimpleReactValidator from 'simple-react-validator';
import TextInputComponent from '../../../component/TextInputComponent';
import CurrencyComponent from '../../../component/CurrencyComponent'
import {defineBankList} from '../InitFormInput';

interface InitProps {
    Component?: React.ReactNode;
    setClickForm?: any;
    stateErrorForm1?: any;
    setFormErrors?: any;
    ref?: any;
    tabNum?: any;
    handleTab?:any;
}

interface RefObject {
  clickSubmitForm: (params:any) => void;
}

const styles = {
  Wrapper : {
    maxWidth: '500px', margin: "auto"
  }
}

const FormPage3 = forwardRef((props: InitProps, ref: Ref<RefObject>) =>  {
  const {  dispatch } = useContext(AppContext);
  const [eventNext, setEventNext] = useState<{click:any}>();
  const [account_name, setAccountName] = useState('')
  const [account_number, setAccountNumber] = useState('')
  const [account_bank, setAccountBank] = useState('')
  const [success, setSuccess] = useState(false)
  let submitButton : any;

  const simpleValidator = useRef(new SimpleReactValidator({
      element:(message:any) => <ErrorMessage>{message}</ErrorMessage>,
      messages:{
          account_name: 'Field Account Name is Required',
          account_number: 'Field Account Number is Required',
          account_bank: 'Field Account Bank is Required'
      }
  }))

  useImperativeHandle(ref, () => ({ 
    clickSubmitForm: (eventNext:any) => {
      submitButton.click()
      setEventNext(eventNext);
    }
  }));

  const submitForm = () => {
    if (simpleValidator.current.allValid()) {
        dispatch({type: Types.SetAccountName,payload: {account_name}});
        dispatch({type: Types.SetAccountNumber,payload: {account_number}});
        dispatch({type: Types.SetAccountBank,payload: {account_bank}});
        props.handleTab(props.tabNum+1);
        setSuccess(true)
      } else {
        console.log(simpleValidator.current.showMessages());
      }
  }

  useEffect(() => {
    eventNext?.click();
    setSuccess(false);
  },[success])
  
  return (
      <>     
        <div style={styles.Wrapper}>
            
              <TextInputComponent 
                name="account_name"  
                type="text" 
                id="account_name" 
                label="Account Name" 
                placeholder="Name" 
                value={account_name}
                onChange={(v:any) => setAccountName(v.target.value)}
              />
              {simpleValidator.current.message('account_name', account_name, 'required|alpha|min:5|max:30')}


              <CurrencyComponent 
                format="#### #### #### ####" 
                id="account_no" 
                label="Account Number" 
                placeholder="Number" 
                onChangeValueCurrency={(v:any) => setAccountNumber(v.formattedValue)} 
              >
                <input name="account_number" value={account_number} type="hidden"/>
              </CurrencyComponent>
              {simpleValidator.current.message('account_number', account_number, 'required')}



              <input name="account_bank" value={account_bank} type="hidden"/>
              <SelectInputComponent 
                id={'account_bank'} label={'Select Bank'} 
                onChangeSelect={(e) => setAccountBank(e.target.value === 'null' ? '' : "Bank "+e.target.value)}
                selectItem={defineBankList()}
              />
               {simpleValidator.current.message('account_bank', account_bank, 'required')}
             
            <button className="btn btn-primary" ref={input => submitButton = input} style={{display: "none"}} onClick={submitForm}/>
        </div>
    </>
  );
});

export default FormPage3;



