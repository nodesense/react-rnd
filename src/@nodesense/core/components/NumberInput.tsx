import React from 'react'
import {Field, ErrorMessage} from 'formik';
import { TextField, Box,  } from '@material-ui/core';

interface NumberInputProps{
    name: string;
    label: string;
    type?: string; 
    placeHolder?: string;
}

const NumberInput = (props:NumberInputProps) => {
    return (
        <React.Fragment>
            <Box p={1}>
                <Field name={props.name}>
                    {({field}:any)=>(

                    <TextField  {...field}  name={props.name} variant="outlined" label={props.label} type='number'/>

                    )}
                </Field>
            </Box>
        </React.Fragment>
    )
}


export default NumberInput