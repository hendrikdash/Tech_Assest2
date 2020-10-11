import React, {FC,  } from 'react';

interface InitProps {
   id: string;
   label: string;
   placeholder: string;
   errMessage?: string;
   onChange?: any;
   type?: string
   disable?: boolean;
   value?: string;
   name?: string;
}   


const styles = {
    Wrap: {
        border: "2px solid #e0e0e0",
        borderRadius: "5px",
        padding: '5px 15px 25px 15px',
        margin: '10px'
    },
    inputLabel: {
        fontSize: '14px',
    },
    Field: {
        maxWidth: '100%',
        height: '60px',
        margin: 'auto',
        marginTop: '10px'
    },
    errorM: {
        fontSize: '12px',
    },
    inputField: {
        
        borderRadius: "5px",
        fontSize: '16px',
        marginTop: '10px',
    },
}


const TextInputComponent:FC<InitProps> = (props) => {
    return(
        <> 
         <div style={styles.Wrap}>
            <div className="form-group" style={styles.Field}>
                <label style={styles.inputLabel}>{props.label}</label>
                
                {
                    props.disable? 
                    <input className="form-control form-control-lg" type={props.type}placeholder={props.placeholder} style={styles.inputField} onChange={props.onChange} value={props.value} name={props.name} disabled/>
                    :
                    <input className="form-control form-control-lg" type={props.type}placeholder={props.placeholder} style={styles.inputField} onChange={props.onChange} value={props.value} name={props.name}/>
                }
                {props.children}
            </div>
        </div>
        </>
    );
}

export default TextInputComponent;

