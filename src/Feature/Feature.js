import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

const Feature = (props) => {
console.log(this)
const itemHash = slugify(JSON.stringify(props.item));
console.log("feature LOWER CASED is " + JSON.stringify(props.feature));
console.log("Also, selectedItemName is " + JSON.stringify(props.selectedItemName));
console.log("");
console.log(props.updateFeature)

let item = props.item;
let feature = props.feature;
let selectedItemName = props.selectedItemName;
return (
  <div key={itemHash} className="feature__item">
    <input
      type="radio"
      id={itemHash}
      className="feature__option"
      name={slugify(feature.toString())}
      checked={item.name === selectedItemName}
      onChange={e => props.updateFeature(feature, item)}
    />
    <label htmlFor={itemHash} className="feature__label">
      {item.name} ({USCurrencyFormat.format(item.cost)})
    </label>
  </div>
);

}

export default Feature