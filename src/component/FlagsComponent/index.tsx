import React, {useState,FC} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import FlagIcon from './FlagIcon'


const styles = {
  Wrap: {
      border: "2px solid #e0e0e0",
      borderRadius: "5px",
      padding: '5px',
      margin: '10px'
  },
  inputLabel: {
      fontSize: '14px',
     
  },
  errorM: {
      fontSize: '12px',
  },
};


interface InitPropsComponent {
  onClickCountry:any;
  label?: string;
  countriesList: object[];
}

const FlagsComponent : FC<InitPropsComponent> = (props) => {
  const [toggleContents, setToggleContents] = useState<any>("Select a country");

  return (
    <>
    <div style={styles.Wrap}>
        <div className="form-group form-control-lg" >
            <label style={styles.inputLabel}>{props.label}</label>

              <Dropdown
                  onSelect={eventKey => {
                    const { code, title }:any = props.countriesList.find(({ code }:any) => eventKey === code);
                    
                    props.onClickCountry(eventKey?.toUpperCase());
                    setToggleContents(
                    <>
                      <FlagIcon code={code}/> 
                      {title}
                    </>);
                  }}
                >
                  <Dropdown.Toggle variant="primary" id="dropdown-flags" className="text-left btn-lg" style={{ margin: 'auto' }}>
                    {toggleContents}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right ">
                    {props.countriesList.map(({ code, title }:any) => (
                      <Dropdown.Item key={code} eventKey={code}>
                        {/* <FlagIcon code={code}/> */}
                          <span className={'flag-icon flag-icon-'+code}></span>
                          {title}
                        </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
              </Dropdown>
              
            </div>
        </div>
    </>
  );
}

export default FlagsComponent;
