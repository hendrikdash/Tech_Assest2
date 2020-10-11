import React, {FC } from 'react';
import Tabs from './Tabs';

interface InitProps {
    TABS?: any[];
    activeTab: number;
    handleTab: any;
    submitButton?:any;
}   


const styles = {
    caourselSlide: {
        minHeight: '500px', padding: '2px 20px 20px 20px',height: "500px", borderRadius: '25px',marginBottom: '25px',
    },
    carouselInner : {
      borderRadius: "25px",overflow: "hidden",boxShadow: '5px 10px #bdbdbd ', 
    },
    controlPrev : {
      width: '3.5%', height: '12%', borderRadius: '70px',backgroundColor: "#1976d2", margin: 'auto', marginLeft: '20px'
    },
    controlNext: {
      width: '3.5%', height: '12%', borderRadius: '70px',backgroundColor: "#1976d2", margin: 'auto',  marginRight: '20px'
    },
    TitlePage: {
      fontSize: '30px'
    }
  }
  

const PaginateTabs:FC<InitProps> = (props) => {
    const { TABS, activeTab, handleTab } = props;

    let clickPage0:any;
    let clickPage1:any;
    let clickPage2:any;
    let clickPage3:any;

    const handleClickButton = (index: any) => {

       
        if(index === 0 ){
            handleTab(index, clickPage0);
        } 

        if(index === 1 ){
            handleTab(index, clickPage1);
        }

        if(index === 2 ){
            handleTab(index, clickPage2);
        } 
        
        if(index === 3) {
            handleTab(index, clickPage3);
        }        
    }

    return(
        <>
            <div className="row" >
                    <div className="col-md-12">
                        <Tabs tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
                    </div>
                </div>

                <div id="carouselExampleControls"  className="carousel slide" data-interval="false" data-ride="carousel" style={styles.caourselSlide}>
                    

                    <ol className="carousel-indicators" id="carousel-indicators" style={{display: "none"}}>
                        <li data-target="#carouselExampleControls" data-slide-to="0" className="active" ref={input => clickPage0 = input}></li>
                        <li data-target="#carouselExampleControls" data-slide-to="1" ref={input => clickPage1 = input}></li>
                        <li data-target="#carouselExampleControls" data-slide-to="2" ref={input => clickPage2 = input}></li>
                        <li data-target="#carouselExampleControls" data-slide-to="3" ref={input => clickPage3 = input}></li>
                    </ol>

                    <div className="carousel-inner" style={styles.carouselInner}>
                        {props.children}
                    </div>
                    
                    {
                    activeTab === 0 ? 
                    ""
                    :
                    <a className="carousel-control-prev"  role="button" data-slide="prev" style={styles.controlPrev} onClick={() => handleClickButton(activeTab-1)}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    }

                    {
                    activeTab === 3 ? 
                        ""
                    :
                    <a className="carousel-control-next" role="button" data-slide="next" style={styles.controlNext} onClick={() => handleClickButton(activeTab+1)}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    }
                    
                </div>
        </>
    );
}

export default PaginateTabs;