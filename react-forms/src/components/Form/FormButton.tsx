import React, { FC, MouseEventHandler } from 'react';

type FormButtonProps = {
  type: 'submit' | 'reset';
  active?: boolean;
  onClick?: MouseEventHandler;
};

export const FormButton: FC<FormButtonProps> = ({
  type,
  active,
  onClick,
}: FormButtonProps): JSX.Element => {
  const className = active ? `btn-${type}_active` : '';

  return (
    <button
      className={`form__btn btn-${type} ${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      title={type === 'submit' ? 'Submit' : 'Reset form'}
      disabled={!active}
      onClick={onClick}
    >
      {type === 'submit' ? 'Submit' : 'Reset'}
    </button>
  )
};

FormButton.defaultProps = {
  active: false,
  onClick: undefined,
};