import PropTypes from 'prop-types';
import React from "react";
import { FilterBox, Input, Text } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
     <FilterBox>
             <Text >Find contacts by name</Text>
          <Input
            type="text"
            value={value}
            onChange={onChange}
          />
     </FilterBox>   
)
 
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};