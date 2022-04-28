import React from "react";
import {Spinner} from 'reactstrap';
import Button from '@mui/material/Button';

const MyButton = ({
                      loading,
                      text,
                      type = 'button',
                      Icon,
                      extraClasses = '',
                      onClick = () => {
                      },
                      variant = 'primary',
                      rightIcon = false,
                      disabled = false,
                      size=''
                  }) => {
    if (rightIcon) {
        extraClasses = extraClasses + ' icon-right'
    }

    return <Button type={type} className={extraClasses + ' ' + (variant ?? ' ') + ' ' + size} onClick={onClick} disabled={disabled}>
        {Icon && !rightIcon && <Icon size={24}/>}
        {text}
        {Icon && rightIcon && <Icon size={24}/>}
        {loading && <Spinner size='sm' className='loader'/>}
    </Button>

}

export default MyButton;