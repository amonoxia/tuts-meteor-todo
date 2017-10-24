import React, {Component} from 'react'; import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';

// Task component - represents a single Do/Due item
export default class Task extends Component {
  toggleChecked () {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask() {
  Meteor.call('tasks.remove', this.props.task._id);
  }

  render () {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in className
    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
            { this.props.task.private ? 'Private' : 'Public' }
          </button>
        ) : ''}

        <span className="text">
          {this.props.task.text} <em>- {this.props.task.username}</em>
        </span>
      </li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop. Deprecated?
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
  showPrivateButton: PropTypes.bool.isRequired,
};
