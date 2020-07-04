import { FastField, Form, Formik } from 'formik';
import React from 'react';
import Button from 'reactstrap/lib/Button';
import * as Yup from 'yup';
import { TIMEZONE_OPTIONS } from '../../constant/global';
import InputField from '../../custom-field/InputField';
import SelectField from '../../custom-field/SelectField';
import styles from './style.module.scss';
NewClockForm.propTypes = {};

function NewClockForm(props) {
  const { toggle, onSubmit } = props;
  const initialValues = {
    clockName: '',
    timezone: null,
  };
  const validationSchema = Yup.object().shape({
    clockName: Yup.string().required(),
    timezone: Yup.string().required('This field is required.').nullable(),
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
            label="Tên đồng hồ"
            placeholder="Eg: Việt nam ..."
          />
          <FastField
            name="timezone"
            component={SelectField}
            label="Timezone"
            placeholder="Timezone..."
            options={TIMEZONE_OPTIONS}
          />
          <div className={styles.button}>
            <Button
              color="primary"
              type="submit"
              className={styles['submit-button']}>
              Save
            </Button>
            <Button
              color="secondary"
              onClick={toggle}
              className={styles['cancel-button']}>
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default NewClockForm;
