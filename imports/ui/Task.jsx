import React, {Component} from 'react';
import PropTypes from 'prop-types';


//Classes are used when state needs to be held, otherwise you should use functional components
//This tutorial will
class Task extends Component {

  constructor(...args){
      super(...args);
  }

  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}
 
Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default Task;