import React, { useState, useCallback } from 'react';

import SelectBox from 'core/SelectBox';

import './index.scss';

const Currency = () => {
  const [currency, setCurrency] = useState('USD');

  const handleChange = useCallback(e => {
    setCurrency(e.target.value);
  }, [])

    return (
      <div className="currencyContainer">
        <span className="currencyName">currency:</span>
        <SelectBox
          value={currency}
          onChange={handleChange}
          valueLabel="item"
          data={[
            {id: 1, item: 'USD'},
            {id: 2, item: 'EUR'},
            {id: 3, item: 'GBR'},
          ]}
        />
      </div>
    )
};

export default Currency;