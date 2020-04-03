import React from 'react';

import {Field, ErrorMessage} from 'formik';
import { TextField, Box,  } from '@material-ui/core';

// Rule 1: ComponentName+Props
interface TextInputProps{
    name: string;
    label: string;
   // value: any;
    type?: string; 
    placeHolder?: string;
}

const TextInput = (props: TextInputProps) => {
    return (
        <React.Fragment>
            <Box>
            <Field name= {props.name} >
            {({
                          field, // { name, value, onChange, onBlur }
                          form // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          
                      }: any) => (
                         <React.Fragment>
                            <TextField  name= {props.name} {...field}
                                        label= {props.label}   />
                            
                            <ErrorMessage name={props.name} component="span" />
                         </React.Fragment>
                    )}
            </Field>
            </Box>
        </React.Fragment>
    )
}

export default TextInput;