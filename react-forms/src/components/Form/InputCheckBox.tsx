import React, { FC, ChangeEventHandler } from 'react';

type InputCheckBoxProps = {
  id: string;
  checked?: boolean;
  onChange?: ChangeEventHandler;
  isError?: boolean;
  label?: string;
};

export const InputCheckBox: FC<InputCheckBoxProps> = ({
  id,
  checked,
  onChange,
  isError,
  label,
}: InputCheckBoxProps): JSX.Element => (
  <label className="form__label" htmlFor={id}>
    <input
      id={id}
      className="form__checkbox"
      checked={checked}
      onChange={onChange}
      type="checkbox"
    />
    {label}
    <span
      className="form__error"
      style={isError ? { visibility: 'visible', opacity: '1' } : {}}
    >
      You must agree with data usage rules
    </span>
  </label>
);

InputCheckBox.defaultProps = {
  checked: false,
  onChange: undefined,
  isError: false,
  label: '',
};
