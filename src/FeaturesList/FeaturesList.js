import React from 'react';
import Feature from '../Feature/Feature'

const FeaturesList = (props) => {

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map((item) => <Feature item={item} feature={feature} selectedItemName={props.selectedItemName} updateFeature={props.updateFeature} />);
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  return features;
}

export default FeaturesList;
