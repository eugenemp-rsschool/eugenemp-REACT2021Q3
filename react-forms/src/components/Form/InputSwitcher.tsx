import React, { FC, ChangeEventHandler } from 'react';
import './Form.scss';

type SwitcherProps = {
  id: string;
  checked?: boolean;
  onChange?: ChangeEventHandler;
  label?: string;
};

export const Switcher: FC<SwitcherProps> = ({
  id,
  checked,
  onChange,
  label,
}): JSX.Element => (
  <label className="form__label" htmlFor={id}>
    <div className="form__switcher__wrapper">
      <input
        id={id}
        className="form__switcher"
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
      <span className="form__switcher__box" />
    </div>
    {label}
  </label>
);

Switcher.defaultProps = {
  checked: false,
  onChange: undefined,
  label: '',
};
