import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';

const TextInput = ({
  itemData,
  itemErrors,
  label,
  name,
  onChange,
  ...rest
}) => {
  const { value } = itemData;
  const { value: errors } = itemErrors;
  const id = name.replace(/\./g, '-');
  return (
    <FormGroup>
      <Label id={`${id}-label`}>{label}</Label>
      <Input
        id={`${id}-text-input`}
        type="text"
        name={name}
        onChange={onChange}
        value={value || ''}
        {...rest}
      />
      {errors && (
        <div className="mt-2  validation-errors">
          {errors.map((error, index) => {
            return (
              <div key={error} id={`${id}-text-input-error-${index}`}>
                {error}
              </div>
            );
          })}
        </div>
      )}
    </FormGroup>
  );
};

export default TextInput;
