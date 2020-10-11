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
}

const FlagsComponent : FC<InitPropsComponent> = (props) => {
  const [countries] = useState([
    { code: 'us', title: 'UNITED STATE'},
    { code: 'gb', title: 'UNITED KINGDOM'},
    { code: 'de', title: 'GERMANY'},
    { code: 'fr', title: 'FRANCE'},
    { code: 'ng', title: 'NIGERIA'},
    { code: 'it', title: 'ITALY'},
  ]);

  const [toggleContents, setToggleContents] = useState<any>("Select a country");

  return (
    <>
    <div style={styles.Wrap}>
        <div className="form-group form-control-lg" >
            <label style={styles.inputLabel}>{props.label}</label>

              <Dropdown
                  onSelect={eventKey => {
                    const { code, title }:any = countries.find(({ code }) => eventKey === code);
                    
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
                    {countries.map(({ code, title }) => (
                      <Dropdown.Item key={code} eventKey={code}><FlagIcon code={code}/>{title}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
              </Dropdown>
              
            </div>
        </div>
    </>
  );
}

export default FlagsComponent;
