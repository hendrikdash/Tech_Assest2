import React, {FC } from 'react';

interface InitProps {
}   


const styles = {
    erroMessage : {
        fontSize: '12px',
        color: 'red'
    }
  }
  

const ErrorMessage:FC<InitProps> = (props) => {
    
    return(
        <>
            <small className="form-text text-muted" ><p style={styles.erroMessage}>{props.children}</p></small>
        </>
    );
}

export default ErrorMessage;