import React, { FC, ChangeEventHandler } from 'react';

type InputDateProps = {
  id: string;
  value: string | undefined;
  onChange: ChangeEventHandler;
  isError?: boolean;
  errorMsg: string | undefined;
};

export const InputDate: FC<InputDateProps> = ({
  id,
  value,
  onChange,
  isError,
  errorMsg,
}: InputDateProps): JSX.Element => (
  <label className="form__label" htmlFor={id}>
    <input
      value={value}
      onChange={onChange}
      id={id}
      className="form__input"
      type="date"
    />
    <span
      className="form__error"
      style={isError ? { visibility: 'visible', opacity: '1' } : {}}
    >
      {errorMsg}
    </span>
  </label>
);

InputDate.defaultProps = {
  isError: false,
};