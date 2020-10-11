import React, {FC,  } from 'react';

interface InitProps {
    label?: string;
    id?: string;
    errMessage?: string;
    onChangeSelect?: (parms: any)=> void;
    name?: string;
    ref?: any;
    selectItem?: any;
    value?:any;
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
    Field: {
        
        fontSize: '14px',
        marginTop: '5px',
        marginBottom: '5px'
    },
    errorM: {
        fontSize: '12px',
        // marginBottom: '10px',
    },
    inputField: {
        fontSize: '16px'
    },
}



const SelectInputComponent:FC<InitProps> = (props) => {
    return(
        <> 
        <div style={styles.Wrap}>
            <div className="form-group form-control-lg" >
                <label style={styles.inputLabel}>{props.label}</label>
                <select className="form-control"
                    value={props.value}
                    id={props.id+"FormControlSelect"} 
                    style={styles.Field} 
                    onChange={props.onChangeSelect}
                >
                    {props.selectItem}
                </select>
                {props.children}
            </div>
        </div>
        </>
    );
}

export default SelectInputComponent;

