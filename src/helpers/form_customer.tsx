import React from 'react';
import {map} from 'lodash'
import "react-widgets/styles.css";
import DatePicker from "react-widgets/DatePicker";
import { FormGroup, Input, Label } from 'reactstrap';

export const FieldTime = ({ ...field }) => {
  return (
    <React.Fragment>
      <DatePicker
        {...field}
        name={field.input.name}
        value={field.input.value ? new Date(field.input.value) : null}
        onChange={field.input.onChange}
        // onChange={(value) => field.onChange(value)}
        placeholder={field.placeholder || null}
        className={field.className || null}
        disabled={field.disabled || false}
        readOnly={field.readOnly || false}
        inputProps={{ component: props => <input {...props} readOnly /> }}
        min={field.min || new Date()}
        max={field.max || new Date(2025, 11, 30)}
        dropUp={field.dropUp || false}
        step={field.step || 60}
      />
      {field.meta.touched && field.meta.error && <span className="help-block"><small className="text-danger">{field.meta.error}</small></span>}
    </React.Fragment>
  )
}

export const ReduxFormInput: React.FC = (field: any) => (
  <FormGroup row={true}>
    <Label>{field.label}</Label>
    <Input
      {...field.input}
      type={field.type}
      placeholder={field.placeHolder}
      max={field.maxDate}
      min={field.minDate}
      step={field.step}
      disabled={field.disabled}
    />
    {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
  </FormGroup>
);

export const ReduxFormSelect: React.FC = (field: any) => (
  <FormGroup row={true}>
    <Label>{field.label}</Label>
    <select {...field.input} disabled={field.disabled} className="form-control">
      <option value="" disabled={true}>
        {field.placeHolder}
      </option>
      {map(field.datas, (data: any, i: number) => {
        return (
          <option key={i} value={data.value}>
            {data.label}
          </option>
        );
      })}
    </select>
    {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
  </FormGroup>
);
