import React from 'react';
import { map } from 'lodash'
import "react-widgets/styles.css";
import { DateTimePicker } from 'react-widgets/cjs';
import moment from 'moment';

export const FieldTime = (field: any, props: any) => {
  return (
    <React.Fragment>
      <DateTimePicker
        {...props}
        onChange={field.input.onChange}
        defaultValue={field.input.value}
        placeholder={field.placeholder}
        formats={moment(field.input.value).format('dd/MM/YYYY')}
        // min={field.min || new Date()}
        max={field.max || new Date(2025, 11, 30)}
        value={field.input.value ? new Date(field.input.value) : null}
        dropUp={field.dropUp || false}
      />
      {field.meta.touched && field.meta.error && <span className="help-block"><small className="text-danger">{field.meta.error}</small></span>}
    </React.Fragment>
  )
}

export const ReduxFormInput: React.FC = (field: any,) => {
  return (
    <React.Fragment>
      <input
        {...field}
        name={field.input.name}
        id={field.id}
        value={field.input.value}
        disabled={field.disabled || false}
        onChange={field.input.onChange}
        placeholder={field.placeholder || null}
        autoComplete={field.autoComplete || 'off'}
        className="form-control"
        type={field.type ? field.type : 'input'}
        ref={field.innerRef}
        hidden={field.hidden || null}
        min={field.min ? field.min : null}
        max={field.max ? field.max : null}
        onKeyPress={field.onKeyPress || null}
        format={field.format}
        onFocus={field.input.onFocus}
        onBlur={field.input.onBlur}
      />
      {field.meta.touched && field.meta.error && <span className="help-block"><small className="text-danger">{field.meta.error}</small></span>}
    </React.Fragment>
  )
};

export const ReduxFormSelect: React.FC = (field: any,) => {
  return (
    <React.Fragment>
      <select {...field.input} disabled={field.disabled} className="form-control">
        <option value="" disabled={true}>
          {field.placeholder}
        </option>
        {map(field.datas, (data: any, i: any) => {
          return (
            <option key={i} value={data.value}>
              {data.label}
            </option>
          );
        })}
      </select>
      {field.meta.touched && field.meta.error && <span className="help-block"><small className="text-danger">{field.meta.error}</small></span>}
    </React.Fragment>
  );
};