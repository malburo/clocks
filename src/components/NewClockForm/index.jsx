import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../custom-field/InputField';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import SelectField from '../../custom-field/SelectField';
import { TIMEZONE_OPTIONS } from '../../constant/global';
import Button from 'reactstrap/lib/Button';
NewClockForm.propTypes = {};

function NewClockForm(props) {
  const { toggle, onSubmit } = props;
  const initialValues = {
    clockName: '',
    timezone: null,
  };
  const validationSchema = Yup.object().shape({
    clockName: Yup.string().required(),
    timezone: Yup.number().required('This field is required.').nullable(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {formik => (
        <Form className={styles['login-form']}>
          <FastField
            type="text"
            name="clockName"
            component={InputField}
            label="Clock's name"
            placeholder="Eg: My clock ..."
          />
          <FastField
            name="timezone"
            component={SelectField}
            label="Timezone"
            placeholder="What's your photo category?"
            options={TIMEZONE_OPTIONS}
          />
          <Button color="primary" type="submit">
            Do Something
          </Button>
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default NewClockForm;
