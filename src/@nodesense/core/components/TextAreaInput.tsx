import React from 'react'
import { Field,ErrorMessage } from 'formik'
import {TextareaAutosize,Box} from '@material-ui/core';
import { FormLabel } from '@material-ui/core';

interface TextAreaInputProps{
    name?:string;
    label?: string;
    placeHolder?: string;
}

const TextAreaInput = ({name, label, placeHolder} :TextAreaInputProps) =>{
    return (
        <React.Fragment>

           <Box p={1}>
                                
                        <FormLabel>{label}</FormLabel>  

                    <Field name={name}>

                    {({field}:any)=>(
                        <div>

                        <TextareaAutosize {...field} name={name} variant="outlined"  
                                placeholder={placeHolder}  rows={6} />

                        </div>
                     
                    )}
                    
                    </Field>      

               
           </Box>
           </React.Fragment>
    )
}

export default TextAreaInput