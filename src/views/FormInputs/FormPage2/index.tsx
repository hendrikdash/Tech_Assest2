import React, {useContext,useRef,Ref, useImperativeHandle,useState, forwardRef, useEffect} from 'react';
import {Types} from '../../../GlobalState/Contexts/FormPage2/FormPage2Context'
import {AppContext} from '../../../GlobalState/AppContext'
import ErrorMessage from '../../../component/ErrorMessage';
import {
        ServicesAndCurrency,
} from '.././InitFormInput';
import SimpleReactValidator from 'simple-react-validator';
import CurrencyComponent from '../../../component/CurrencyComponent'
import {RequestGetApi} from '../../../RequestAPI';


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


interface responseDataType {
  data: any; status?: number,
}

const styles = {
  Wrapper : {
    maxWidth: '500px', margin: "auto"
  }
}


const FormPage2 = forwardRef((props: InitProps, ref: Ref<RefObject>) =>  {
  const { state:{form_page1}, dispatch } = useContext(AppContext);
  const [eventNext, setEventNext] = useState<{click:any}>();
  const [send_amount, setSendAmount] = useState('')
  const [receive_amount, setReceiveAmount] = useState('')
  const [success, setSuccess] = useState(false)
  let submitButton : any;

  const simpleValidator = useRef(new SimpleReactValidator({
      element:(message:any) => <ErrorMessage>{message}</ErrorMessage>,
      messages:{
          send_amount: 'Field Send Amount is Required'
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
        dispatch({type: Types.SetSendAmount,payload: {send_amount}});
        dispatch({type: Types.SetReceiveAmount,payload: {receive_amount}});
        props.handleTab(props.tabNum+1);
        setSuccess(true)
      } else {
        console.log(simpleValidator.current.showMessages());
      }
  }
  
  const handleChangeAmount = (v:any) => {
      setSendAmount(v.formattedValue);
      CalculateSendAmountToReceive(v.value);
  }

  const CalculateSendAmountToReceive = (value:string) => {

    const floatValue = parseInt(value);
    const choosedRate = ServicesAndCurrency.find((item:any) => item.value === form_page1.country)?.rate ;
    const datas  = {base:'IDR', symbols: choosedRate};

    const ratess = async () => {
        try{
            const ratesApi = await RequestGetApi('https://api.exchangeratesapi.io/latest',datas );
            return ratesApi
        } catch(e) {
          return {status: 400, data: null};
        }
    }

    ratess().then((result) => {
      const {data,status}:any = result;
      if (status === 200) {
          setReceiveAmount((floatValue * data.rates[choosedRate]).toFixed(0).toString());
      }
    })
    
  }
  
  useEffect(() => {
    eventNext?.click();
    setSuccess(false);
  },[success])

  return (
      <>     
        <div style={styles.Wrapper}>
            
          <CurrencyComponent id="sendAmount" label="Send Amount" placeholder="You Send" onChangeValueCurrency={(e:any) => handleChangeAmount(e)}>
              <input name="send_amount" value={send_amount} type="hidden"/>
          </CurrencyComponent>
          {simpleValidator.current.message('send_amount', send_amount, 'required')}

          <CurrencyComponent disable={true} id="ReceiveAmount" label="Receive Amount" placeholder="Recipient Gets" value={receive_amount} />
            
             
          <button className="btn btn-primary" ref={input => submitButton = input} style={{display: "none"}} onClick={submitForm}/>
        </div>
    </>
  );
});

export default FormPage2;



