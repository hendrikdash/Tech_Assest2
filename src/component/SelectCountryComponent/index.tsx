import React, {FC,  } from 'react';
import ReactFlagsSelect from 'react-flags-select';


interface InitProps {
    Country: string[];
    onChange: (parms: any) => void;
    defaultCountry?: string;
    ref?: any;
    id?: string;
    label?: string;
    value?: string;
    name?: string;

}   

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
        // marginBottom: '10px',
    },
}


const SelectCountryComponent:FC<InitProps> = (props) => {
    const handleChange = (value: any) => {
        
        // var selected: any;
        // props.Country.find((elem,ind) => {
        //     if (elem === value) { 
        //         selected = {index: ind, value: elem};
        //     }
        // })

        props.onChange(value);
    }
    return(
        <>
            <div style={styles.Wrap}>
                <div className="form-group form-control-lg" >
                    <label style={styles.inputLabel}>{props.label}</label>
                    <ReactFlagsSelect defaultCountry={props.defaultCountry} className="menu-flags" 
                        countries={props.Country} onSelect={
                    (item) => handleChange(item)}/>
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default SelectCountryComponent;

