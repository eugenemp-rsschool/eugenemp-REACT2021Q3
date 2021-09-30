import React, { useCallback, useEffect, useState } from 'react';
import { InputText } from './InputText';
import { InputDate } from './InputDate';
import { InputCountry } from './InputCountry';
import { InputCheckBox } from './InputCheckBox';
import { Switcher } from './InputSwitcher';
import { FormButton } from './FormButton';
import './Form.scss';

type FormData = {
  fname: string;
  lname: string;
  bdate: string;
  country: string;
  city: string;
  zip: string;
  agree: boolean;
};

type FormErrors = {
  fnameError: boolean;
  lnameError: boolean;
  bdateError: boolean;
  cityError: boolean;
  zipError: boolean;
  agreeError: boolean;
};

type FormProps = {
  onSubmit: CallableFunction;
};

export const Form: React.FC<FormProps> = ({ onSubmit }): JSX.Element => {
  const formDefs: FormData = {
    fname: '',
    lname: '',
    bdate: '',
    country: 'Belarus',
    city: '',
    zip: '',
    agree: false,
  };
  const formErrorDefs: FormErrors = {
    fnameError: false,
    lnameError: false,
    bdateError: false,
    cityError: false,
    zipError: false,
    agreeError: false,
  };
  const [formData, setFormData] = useState<FormData>(formDefs);
  const [formErrors, setFormErrors] = useState<FormErrors>(formErrorDefs);
  const [yearSwState, setYearSwState] = useState<boolean>(false);
  const [btnSubmitState, setBtnSubmitState] = useState<boolean>(false);

  /* Input validators======================================================= */
  // Validate all form inputs to activate submit button
  const validateForm = useCallback((): void => {
    if (
      Object.values(formData).every((el) => !!el) &&
      Object.values(formErrors).every((el) => !el)
    ) {
      setBtnSubmitState(true);
    } else setBtnSubmitState(false);
  }, [formData, formErrors]);

  // Validate date input
  const validateDate = (date: string): boolean => {
    const inputDate = date.split('-');
    const inputDateMillis = new Date(
      parseInt(inputDate[0], 10),
      parseInt(inputDate[1], 10) - 1,
      parseInt(inputDate[2], 10)
    ).getTime();
    const currDateMillis = new Date().getTime();

    return (
      (date === '' || currDateMillis - inputDateMillis > 567648000000) && true
    );
  };

  // Validate text inputs
  const validateText = (text: string): boolean => {
    const regex = /^[a-zA-Z]*$/;

    return (text === '' || regex.test(text)) && true;
  };

  // Validate ZIP Code input
  const validateZip = (zip: string): boolean => {
    const regex = /^[0-9]{5,6}$/;

    return (!zip || regex.test(zip)) && true;
  };

  /* Input Handlers========================================================= */
  // Handle inputs
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    let validate: CallableFunction;

    switch (target.id) {
      case 'bdate':
        validate = validateDate;
        break;
      case 'zip':
        validate = validateZip;
        break;
      default:
        validate = validateText;
    }

    setFormData({ ...formData, [target.id]: value });
    setFormErrors({ ...formErrors, [`${target.id}Error`]: !validate(value) });
  };

  // Handle checkbox inputs
  const handleCheckBox = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { checked } = target;

    if (target.id === 'agree') {
      setFormData({ ...formData, agree: checked });
      setFormErrors({ ...formErrors, agreeError: !checked });
    }
    if (target.id === 'yearsw') setYearSwState(checked);
  };

  // Handle form reset
  const handleFormReset = () => {
    setFormData({ ...formData, ...formDefs });
    setFormErrors({ ...formErrors, ...formErrorDefs });
    setYearSwState(false);
  };

  /* ======================================================================= */
  useEffect(() => {
    validateForm();
  }, [validateForm]);

  /* ======================================================================= */

  return (
    <form
      className="form"
      onSubmit={(e) => {
        onSubmit(e, { ...formData, bdate: yearSwState ? formData.bdate : '' });
        handleFormReset();
      }}
    >
      <div className="form__input-name__wrapper">
        <InputText
          id="fname"
          value={formData.fname}
          onChange={handleChange}
          isError={formErrors.fnameError}
          errorMsg="First Name entered incorrectly"
          placeholder="First Name"
        />
        <InputText
          id="lname"
          value={formData.lname}
          onChange={handleChange}
          isError={formErrors.lnameError}
          errorMsg="Last Name entered incorrectly"
          placeholder="Last Name"
        />
      </div>

      <InputDate
        id="bdate"
        value={formData.bdate}
        onChange={handleChange}
        isError={formErrors.bdateError}
        errorMsg="You must be under 18 years of age or older"
      />
      <InputCountry
        id="country"
        value={formData.country}
        onChange={handleChange}
      />
      <InputText
        id="city"
        value={formData.city}
        onChange={handleChange}
        isError={formErrors.cityError}
        errorMsg="City entered incorrectly"
        placeholder="City"
      />
      <InputText
        id="zip"
        value={formData.zip}
        onChange={handleChange}
        isError={formErrors.zipError}
        errorMsg="ZIP must consist of 5 to 6 digits only"
        placeholder="ZIP"
      />
      <Switcher
        id="yearsw"
        checked={yearSwState}
        onChange={handleCheckBox}
        label="Include date of birth?"
      />
      <InputCheckBox
        id="agree"
        checked={formData.agree}
        onChange={handleCheckBox}
        isError={formErrors.agreeError}
        label="I agree to privacy policy"
      />

      <div className="form__btn__wrapper">
        <FormButton type="reset" onClick={handleFormReset} />
        <FormButton type="submit" active={btnSubmitState} />
      </div>
    </form>
  );
};
