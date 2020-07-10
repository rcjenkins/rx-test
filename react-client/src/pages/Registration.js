import React, { useState } from 'react';
import { Button, FormGroup, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import CounrtyDropdown from '../components/CountryDropdown';
import axios from 'axios';

function updateFormData(obj, is, value) {
  if (typeof is == 'string') return updateFormData(obj, is.split('.'), value);
  else if (is.length === 1 && value !== undefined) return (obj[is[0]] = value);
  else if (is.length === 0) return obj;
  else return updateFormData(obj[is[0]], is.slice(1), value);
}

const marshalFormValues = (obj) => {
  const newObj = { ...obj };
  const keys = Object.keys(newObj);
  keys.forEach((key) => {
    if (
      typeof newObj[key] == 'object' &&
      typeof newObj[key]['value'] == 'undefined'
    ) {
      newObj[key] = marshalFormValues(newObj[key]);
      return;
    }
    newObj[key] = newObj[key]['value'] || '';
  });
  return newObj;
};

const lowerPath = (s) => {
  if (typeof s !== 'string') return '';
  const parts = s.split('.');
  for (let index = 0; index < parts.length; index++) {
    parts[index] = parts[index].charAt(0).toLowerCase() + parts[index].slice(1);
  }
  return parts.join('.');
};

const Registration = () => {
  const initialFormData = {
    locale: { value: null },
    person: {
      firstName: { value: null },
      lastName: { value: null },
      email: { value: null },
      address: {
        locale: { value: null },
        addressLine1: { value: null },
        addressLine2: { value: null },
        addressLine3: { value: null },
        city: { value: null },
        state: { value: null },
        postcode: { value: null },
        countryIsoCode: { value: null },
      },
    },
    organisation: {
      name: { value: null },
      address: {
        locale: { value: null },
        addressLine1: { value: null },
        addressLine2: { value: null },
        addressLine3: { value: null },
        city: { value: null },
        state: { value: null },
        postcode: { value: null },
        countryIsoCode: { value: null },
      },
    },
  };

  const [networkError, setNetworkError] = useState();
  const [registration, setRegistration] = useState();
  const [errors, setErrors] = useState(initialFormData);
  const [formData, setFormData] = useState(initialFormData);

  const onChange = ({ target: { name, value } }) => {
    let newState = JSON.parse(JSON.stringify(formData));
    updateFormData(newState, `${name}.value`, value);
    setFormData({ ...newState });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setNetworkError('');
    try {
      const postObject = marshalFormValues(
        JSON.parse(JSON.stringify(formData)),
      );
      postObject.registrationDate = new Date().toISOString();
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/registrations',
        postObject,
      );
      setFormData(JSON.parse(JSON.stringify(initialFormData)));
      setErrors(JSON.parse(JSON.stringify(initialFormData)));
      setRegistration(data.registrationId);
      return data;
    } catch (err) {
      if (err.response) {
        // client received a response
        if (err.response.status === 400) {
          // get the returned errors from the call and
          const keys = Object.keys(err.response.data.errors);
          const newErrors = JSON.parse(JSON.stringify(initialFormData));
          keys.forEach((key) => {
            updateFormData(
              newErrors,
              `${lowerPath(key)}.value`,
              err.response.data.errors[key],
            );
          });
          setErrors(newErrors);
          setNetworkError(err.response.data.title);
        } else {
          setNetworkError(
            `${err.response.status}: ${err.response.statusText}` ||
              'Server Error',
          );
        }
      } else if (err.request) {
        // client never received a response, or request never left
        setNetworkError(
          `${err.request.status}: ${err.request.statusText}` || 'Server Error',
        );
      } else {
        setNetworkError('Fatal Error');
        // anything else
      }
    }
  };

  return (
    <div id="registration">
      <h2>Register</h2>
      <Row>
        <Col lg={6} md={8} sm={12}>
          {networkError && (
            <div id="network-error">
              <div className="alert alert-danger">{networkError}</div>
            </div>
          )}
          <form onSubmit={onSubmit}>
            <fieldset>
              <legend>Enter Your details</legend>
              <TextInput
                label="First Name"
                name="person.firstName"
                itemData={formData.person.firstName}
                itemErrors={errors.person.firstName}
                onChange={onChange}
              />
              <TextInput
                label="Last Name"
                name="person.lastName"
                itemData={formData.person.lastName}
                itemErrors={errors.person.lastName}
                onChange={onChange}
              />
              <TextInput
                label="Email"
                name="person.email"
                itemData={formData.person.email}
                itemErrors={errors.person.email}
                onChange={onChange}
              />
              <TextInput
                label="Address Line 1"
                name="person.address.addressLine1"
                itemData={formData.person.address.addressLine1}
                itemErrors={errors.person.address.addressLine1}
                onChange={onChange}
              />
              <TextInput
                label="Address Line 2"
                name="person.address.addressLine2"
                itemData={formData.person.address.addressLine2}
                itemErrors={errors.person.address.addressLine2}
                onChange={onChange}
              />
              <TextInput
                label="Address Line 3"
                name="person.address.addressLine3"
                itemData={formData.person.address.addressLine3}
                itemErrors={errors.person.address.addressLine3}
                onChange={onChange}
              />
              <TextInput
                label="City"
                name="person.address.city"
                itemData={formData.person.address.city}
                itemErrors={errors.person.address.city}
                onChange={onChange}
              />
              <TextInput
                label="State"
                name="person.address.state"
                itemData={formData.person.address.state}
                itemErrors={errors.person.address.state}
                onChange={onChange}
              />
              <TextInput
                label="Postcode"
                name="person.address.postcode"
                itemData={formData.person.address.postcode}
                itemErrors={errors.person.address.postcode}
                onChange={onChange}
                className="w-50"
              />
              <CounrtyDropdown
                label="Country"
                name="person.address.countryIsoCode"
                itemData={formData.person.address.countryIsoCode}
                itemErrors={errors.person.address.countryIsoCode}
                onChange={onChange}
                className="w-50"
              />
            </fieldset>
            <fieldset>
              <legend>Enter Your Organisations Details</legend>
              <TextInput
                label="Name"
                name="organisation.name"
                itemData={formData.organisation.name}
                itemErrors={errors.organisation.name}
                onChange={onChange}
              />
              <TextInput
                label="Address Line 1"
                name="organisation.address.addressLine1"
                itemData={formData.organisation.address.addressLine1}
                itemErrors={errors.organisation.address.addressLine1}
                onChange={onChange}
              />
              <TextInput
                label="Address Line 2"
                name="organisation.address.addressLine2"
                itemData={formData.organisation.address.addressLine2}
                itemErrors={errors.organisation.address.addressLine2}
                onChange={onChange}
              />
              <TextInput
                label="Address Line 3"
                name="organisation.address.addressLine3"
                itemData={formData.organisation.address.addressLine3}
                itemErrors={errors.organisation.address.addressLine3}
                onChange={onChange}
              />
              <TextInput
                label="City"
                name="organisation.address.city"
                itemData={formData.organisation.address.city}
                itemErrors={errors.organisation.address.city}
                onChange={onChange}
              />
              <TextInput
                label="State"
                name="organisation.address.state"
                itemData={formData.organisation.address.state}
                itemErrors={errors.organisation.address.state}
                onChange={onChange}
              />
              <TextInput
                label="Postcode"
                name="organisation.address.postcode"
                itemData={formData.organisation.address.postcode}
                itemErrors={errors.organisation.address.postcode}
                onChange={onChange}
                className="w-50"
              />
              <CounrtyDropdown
                label="Country"
                name="organisation.address.countryIsoCode"
                itemData={formData.organisation.address.countryIsoCode}
                itemErrors={errors.organisation.address.countryIsoCode}
                onChange={onChange}
                className="w-50"
              />
            </fieldset>
            <FormGroup>
              <Button id="submit-registration" color="primary" type="submit">
                Submit
              </Button>
              <Link
                id="navigate-back"
                className="btn btn-secondary ml-2"
                to="/"
              >
                Back
              </Link>
            </FormGroup>
          </form>
        </Col>
      </Row>
      {registration && (
        <div id="successful-registration">
          <div className="alert alert-info">
            <p>Registration Number: {registration}</p>
            Check registration at{' '}
            <a
              rel="noreferrer"
              target="_blank"
              href={`http://localhost:5000/api/v1/registrations/${registration}`}
            >
              http://localhost:5000/api/v1/registrations/{registration}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
