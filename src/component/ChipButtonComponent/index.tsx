import React, {FC } from 'react';

interface InitProps {
    label?: string;
    onClick?: any;
}   


const styles = {
    Badge : {
        fontSize: '14px',
        color: 'green',
        border: '2px solid #e0e0e0'
    }
  }
  

const ChipButtonComponent:FC<InitProps> = (props) => {
    
    return(
        <>
            <button type="button" className="btn btn-success" onClick={props.onClick} style={styles.Badge}>{props.label}</button>
        </>
    );
}

export default ChipButtonComponent;