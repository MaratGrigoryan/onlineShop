import React from 'react';
import Select from "@material-ui/core/Select";

import useStyles from 'core/SelectBox/styles';

const SelectBox = ({ value, onChange, data = [], valueLabel }) => {
  const classes = useStyles();

  return (
    <div className={classes.selectDiv}>
      <Select
        native
        className={classes.selectBoxStyle}
        value={value}
        onChange={onChange}
      >
        {
          data.map((item, i) => (
            <option key={i} value={item[valueLabel]}>
              { item[valueLabel] }
            </option>
          ))
        }
      </Select>
    </div>
  )
};

export default SelectBox;