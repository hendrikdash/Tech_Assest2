import React, {FC, useState, useRef} from 'react';
import PaginateTabs from '../../component/PaginateTabComponent';
import HeaderForm from '../layouts/HeaderForm';
import {TABS} from './InitFormInput';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import FormPage4 from './FormPage4';

interface InitProps {
    Component?: React.ReactNode;
}

const styles = {
  TitlePage: {
    fontSize: '30px'
  },
  cardCarousel : {minHeight: '500px', borderRadius: '25px'},
  boxShadow: {
    boxShadow: '5px 10px gray'
  },
  Wrapper : {
    maxWidth: '500px', margin: "auto"
  }
}

interface RefObject {
  clickSubmitForm: (params:any) => void;
}

const FormInputContainer: FC<InitProps> = (props) =>  {
  const formPage1 = useRef<RefObject>(null);
  const formPage2 = useRef<RefObject>(null);
  const formPage3 = useRef<RefObject>(null);

  const [activeTab, handleTab] = useState(0);


  const HandleChangeTab = (v: any, eventsButton: any) => {
    
    if (v < activeTab) {
      handleTab(v);
      eventsButton.click();
    } else {
      if(activeTab === 0) {
          formPage1.current?.clickSubmitForm(eventsButton);
      }
      if(activeTab === 1) {
          formPage2.current?.clickSubmitForm(eventsButton);
      }
      if(activeTab === 2) {
          formPage3.current?.clickSubmitForm(eventsButton);
      }
    }
  }
  return (
    <>
    <HeaderForm/>
        <main>
          <section id="content" className="content-form-input" >
            <div className="container" style={{marginTop: '100px'}}>
            <div className="row" >
                    <div className="col-md-12 message_header" >
                        <p style={styles.TitlePage}>Please Fill The Field require for Send Money</p> 
                    </div>
              </div>
              
                <PaginateTabs TABS={TABS} activeTab={activeTab} handleTab={HandleChangeTab}>

                    <div className="carousel-item active"  >
                        <div className="card" style={styles.cardCarousel}>
                            <div className="card-body">
                              <FormPage1 ref={formPage1} handleTab={handleTab} tabNum={activeTab}/>
                            </div>
                        </div>
                    </div>
                
                   <div className="carousel-item">
                        <div className="card" style={styles.cardCarousel}>
                            <div className="card-body">
                              <FormPage2 ref={formPage2} handleTab={handleTab} tabNum={activeTab}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card"  style={styles.cardCarousel}>
                            <div className="card-body">
                              <FormPage3 ref={formPage3} handleTab={handleTab} tabNum={activeTab}/>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card"  style={styles.cardCarousel}>
                            <div className="card-body">
                              <FormPage4 handleTab={handleTab} tabNum={activeTab}/>
                            </div>
                        </div>
                    </div>


                </PaginateTabs>
                
              <div style={{height: "100px", width: '100vh', margin:"auto"}}>

              </div>
        
            </div>
              
          </section>
        </main>
    </>
  );
}

export default FormInputContainer;



