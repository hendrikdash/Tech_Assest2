import React, {useContext,FC,useState, useEffect} from 'react';
import {AppContext} from '../../../GlobalState/AppContext'
import { ServicesAndCurrency} from '../InitFormInput';
import { RequestPostApi } from '../../../RequestAPI';
import { AnyAaaaRecord } from 'dns';
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
    maxWidth: '500px',
    margin: "auto",
    marginTop: '30px',
    marginBottom: '30px',

  },
  UlList: {
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    margin: 'auto',
    padding:'5px',
  },
  LiList: {
    margin: '10px',
    fontSize: '16px',
    border: '2px solid #e0e0e0',
    padding: '10px',
    borderRadius: '5px',
  }
}

const FormPage4: FC<InitProps> = (props) =>  {
  const {  state : {form_page1,form_page2,form_page3} } = useContext(AppContext);
  const [stateName,setStateName] = useState('');
  const [messageShow,setMessageShow] = useState(false);
  const [message,setMessage] = useState<any>({class: '',text: ''});


  const submitForm = () => {
    setMessageShow(false);
    const datas = {
      ...form_page1, ...form_page2, ...form_page3, country: stateName
    }
    const postData = async () => {
        try{
            const ratesApi = await RequestPostApi('http://localhost:3000/test/post/data',datas );
            return ratesApi
        } catch(e) {
          return {status: 400, data: null};
        }
    }

    postData().then((result:any) => {
      if (result.status !== 400){
          setMessage({text: "Submit Success!", class: 'alert alert-success'});
      } else {
        setMessage({text: "Submit Errors!", class: 'alert alert-danger'});
      }
      setMessageShow(true);
    })

  }

  useEffect(() => {
    let temp = ServicesAndCurrency.find((elem:any) => elem.value === form_page1.country)?.state;
    setStateName(temp);
  },[form_page1]);

 
  
  return (
      <>     
        <div style={styles.Wrapper}>
            {
              messageShow === true? 
              <div className={message.class} role="alert" style={{borderRadius: '5px', fontSize: '16px'}}>
                {message.text}
              </div> 
              :
              undefined
            }

            <ul className="list-group-lg" style={styles.UlList}>
              <li className="list-group-item" style={styles.LiList}>Country : {stateName}</li>
              <li className="list-group-item" style={styles.LiList}>Service : {form_page1.service}</li>
              <br/>
              <li className="list-group-item" style={styles.LiList}>Send Amount : {form_page2.send_amount}</li>
              <li className="list-group-item" style={styles.LiList}>Receive Amount : {form_page2.receive_amount}</li>
              <br/>
              <li className="list-group-item" style={styles.LiList}>Account Bank : {form_page3.account_bank}</li>
              <li className="list-group-item" style={styles.LiList}>Account Name : {form_page3.account_name}</li>
              <li className="list-group-item" style={styles.LiList}>Account Number : {form_page3.account_number}</li>
            </ul>


            <div className="row justify-content-between" style={{marginTop: "15px"}}>
              <div className="col-4">
                
              </div>
              <div className="col-4">
                  <button type="button" className="btn btn-outline-info btn-lg" onClick={submitForm}>Submit</button>
              </div>
            </div>




            




            
        </div>
    </>
  );
};

export default FormPage4;



