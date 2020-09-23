import React from 'react';

const FeaturesList = () => {

return (
    updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
      };
    
      render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = this.props.features[feature].map(item => {
            
          });
    
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        });
)
}
  