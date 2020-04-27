import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/actions'
 

const AddedFeature = props => {
  const removeItem = e => {
    e.preventDefault();
    props.removeFeature(props.features[props.index]);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeItem}>X</button>
      {props.features[props.index].name}
    </li>
  );
};
const mapStoreToProps = state => {
  return{
    features: state.car.features
  }
}
export default connect(
  mapStoreToProps,
 {removeFeature}
 )(AddedFeature);
