import React, {FC,  } from 'react';
import NumberFormat from 'react-number-format';


interface InitProps {
   id: string;
   label: string;
   placeholder: string;
   errMessage?: string;
   onChangeValueCurrency?: any;
   disable?: boolean;
   value?: string;
   format?: string;
}   


const styles = {
    Wrap: {
        border: "2px solid #e0e0e0",
        borderRadius: "5px",
        padding: '0px 15px 25px 15px',
        margin: '10px',
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
        marginTop: '10px'
    },
}



const CurrencyComponent:FC<InitProps> = (props) => {
    return(
        <> 
        <div style={styles.Wrap}>
            <div className="form-group" style={styles.Field}>
                <label style={styles.inputLabel}>{props.label}</label>

                {
                    props.disable === true 
                    ? 
                    <NumberFormat disabled format={props.format} className="form-control form-control-lg" thousandSeparator={true} placeholder={props.placeholder} style={styles.inputField} onValueChange={props.onChangeValueCurrency} value={props.value} />
                    :
                    <NumberFormat format={props.format}  className="form-control form-control-lg" thousandSeparator={true} placeholder={props.placeholder} style={styles.inputField} onValueChange={props.onChangeValueCurrency} value={props.value} />

                }
                {/* <input className="form-control form-control-lg" type="text" value={props.value} placeholder={props.placeholder} style={styles.inputField} onChange={props.onChange} /> */}
                {props.children}
            </div>
        </div>
        </>
    );
}

export default CurrencyComponent;

