import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

const Feature = (item, feature, selectedItemName) => {

const itemHash = slugify(JSON.stringify(item));
console.log("feature LOWER CASED is " + JSON.stringify(feature));
console.log("Also, selectedItemName is " + JSON.stringify(selectedItemName));
console.log("");
return (
  <div key={itemHash} className="feature__item">
    <input
      type="radio"
      id={itemHash}
      className="feature__option"
      name={slugify(feature.toString())}
      checked={item.name === selectedItemName}
      onChange={e => this.updateFeature(feature, item)}
    />
    <label htmlFor={itemHash} className="feature__label">
      {item.name} ({USCurrencyFormat.format(item.cost)})
    </label>
  </div>
);

}

export default Feature