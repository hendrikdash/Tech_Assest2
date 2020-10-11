import React, { useContext,useRef,Ref, useImperativeHandle,useState, forwardRef, useEffect} from 'react';
import {Types} from '../../../GlobalState/Contexts/FormPage1/FormPage1Context'
import {AppContext} from '../../../GlobalState/AppContext'
import ErrorMessage from '../../../component/ErrorMessage';
import SelectCountryComponent from '../../../component/SelectCountryComponent';
import {CountryList, Services,
        ServicesAndCurrency, 
} from '.././InitFormInput';
import SimpleReactValidator from 'simple-react-validator';
import ChipButtonComponent from '../../../component/ChipButtonComponent';
import FlagsComponent from '../../../component/FlagsComponent'

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


const FormPage1 = forwardRef((props: InitProps, ref: Ref<RefObject>) =>  {

  const {  dispatch } = useContext(AppContext);
  const [eventNext, setEventNext] = useState<{click:any}>();
  const [serviceType, setServiceType] = useState([])
  const [country, setCountry] = useState('')
  const [service, setService] = useState('')
  const [success, setSuccess] = useState(false)
  let submitButton : any;

  const simpleValidator = useRef(new SimpleReactValidator({
      element:(message:any) => <ErrorMessage>{message}</ErrorMessage>,
      messages:{
          country: 'Field Country is Required'
      }
  }))

  useImperativeHandle(ref, () => ({ 
    clickSubmitForm: (eventNext:any) => {
      submitButton.click();
      setEventNext(eventNext);
    }
  }));

  const submitForm = () => {
    if (simpleValidator.current.allValid()) {
        dispatch({type: Types.SetCountry,payload: {country}});
        dispatch({type: Types.SetService,payload: {service}});
        props.handleTab(props.tabNum+1);
        setSuccess(true)
      } else {
        console.log(simpleValidator.current.showMessages());
      }
  }
  
  const handleSelectCountry = (v:any) => {
      const findServiceType = ServicesAndCurrency.find((elem:any) => elem.value === v);
      setServiceType(findServiceType.type);
      setCountry(v);
  }

  useEffect(() => {
    eventNext?.click();
    setSuccess(false);
  },[success])
  
  return (
      <>     
        <div style={styles.Wrapper}>
            
    
            <FlagsComponent onClickCountry={(v:any) => handleSelectCountry(v)}>
              <input name="country" value={country} type="hidden"/>  
            </FlagsComponent>  
            {simpleValidator.current.message('country', country, 'required')}
         
            {
              serviceType?
              (
                <>
                <div className="row justify-content-md-center">
                    {
                      serviceType.map((elem:any, ind) => {
                        const servi:any = Services.find((elemf: any) => elemf.id === elem);
                        return (
                          <div className="col-md-auto" key={ind} >
                              <input name="service" value={service}  type="hidden"/> 
                              <ChipButtonComponent label={servi?.name} onClick={(e:any) => setService(servi?.name)}/>
                          </div>
                        )
                      })
                    }
                </div>
                <div className="row justify-content-md-center">
                  {serviceType ? simpleValidator.current.message('service', service, 'required') : undefined}
                </div>
              </>)
              :
              undefined
            }
             
          <button className="btn btn-primary" ref={input => submitButton = input} style={{display: "none"}} onClick={submitForm}/>
        </div>
    </>
  );
});

export default FormPage1;



