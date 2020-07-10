import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';
import countrycodes from './countrycodes.json';

const TextInput = ({
  itemData,
  itemErrors,
  label,
  name,
  onChange,
  ...rest
}) => {
  function sortByValue(jsObj) {
    var sortedArray = [];
    for (var i in jsObj) {
      sortedArray.push([jsObj[i], i]);
    }
    return sortedArray.sort();
  }
  const id = name.replace(/\./g, '-');
  var countrycodesByValue = sortByValue(countrycodes);
  const { value } = itemData;
  const { value: errors } = itemErrors;
  return (
    <FormGroup>
      <Label id={`${id}-label`}>{label}</Label>
      <Input
        id={`${id}-country-dropdown`}
        type="select"
        name={name}
        onChange={onChange}
        value={value || ''}
        {...rest}
      >
        <option value="">Please select</option>
        {countrycodesByValue.map((element, index) => {
          return (
            <option
              id={`${id}-option-${index}`}
              key={element[1]}
              value={element[1]}
            >
              {element[0]}
            </option>
          );
        })}
      </Input>
      {errors && (
        <div className="mt-2  validation-errors">
          {errors.map((error, index) => {
            return (
              <div key={error} id={`${id}-text-country-dropdown-${index}`}>
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
