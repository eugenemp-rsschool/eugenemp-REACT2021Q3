import React, { FC, ChangeEventHandler } from 'react';

type InputTextProps = {
  id: string;
  value?: string | undefined;
  onChange?: ChangeEventHandler;
  isError?: boolean;
  errorMsg?: string | undefined;
  placeholder?: string | undefined;
};

export const InputText: FC<InputTextProps> = ({
  id,
  value,
  onChange,
  isError,
  errorMsg,
  placeholder,
}: InputTextProps): JSX.Element => (
  <label className="form__label" htmlFor={id}>
    <input
      value={value}
      onChange={onChange}
      id={id}
      className="form__input"
      type="text"
      placeholder={placeholder}
    />
    <span
      className="form__error"
      style={isError ? { visibility: 'visible', opacity: '1' } : {}}
    >
      {errorMsg}
    </span>
  </label>
);

InputText.defaultProps = {
  value: '',
  onChange: undefined,
  isError: false,
  errorMsg: '',
  placeholder: '',
};
