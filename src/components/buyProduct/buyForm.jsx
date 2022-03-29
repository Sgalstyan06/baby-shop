import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Form, Input, TextArea, Button, Select,Radio } from 'semantic-ui-react'

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const FormFieldError = ({userName,id}) => {
  
  return (
    <Form >
    {/* <Form.Group widths='equal'> */}
      <Form.Field
        id='form-input-control-full-name'
        control={Input}
        label='Full name'
        placeholder='Full name'
        value = {userName}
        readonly
      />
      <Form.Field
        id='form-input-control-address'
        control={Input}
        label='Address'
        placeholder='Address'
      />
      <Form.Field
        id='form-input-control-phone-number'
        control={Input}
        label='Phone number'
        placeholder='Phone number'
      />
       
        <Form.Field>
          <Radio
            label='Pay Buy Cash'
            name='cash'
            value='cash'
            checked={true}
            
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Pay Buy Card'
            name='card'
            value='card'
            readOnly
          />
        </Form.Field>
    {/* </Form.Group> */}
    
    
  </Form>
  )
}

export default FormFieldError;
