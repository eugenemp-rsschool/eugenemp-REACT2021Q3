import React, { FC, ChangeEventHandler } from 'react';

type InputCountryProps = {
  id: string;
  value: string | undefined;
  onChange: ChangeEventHandler;
};

export const InputCountry: FC<InputCountryProps> = ({
  id,
  value,
  onChange,
}: InputCountryProps): JSX.Element => (
  <label className="form__label" htmlFor={id}>
    <select value={value} onChange={onChange} id={id} className="form__input input-country">
      <option value="Belarus">Belarus</option>
      <option value="Ukraine">Ukraine</option>
      <option value="Russia">Russia</option>
    </select>
  </label>
);
