import React from 'react';
import PropTypes from 'prop-types';

class CreateList extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <li data-testid="category">{name}</li>
    );
  }
}

CreateList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CreateList;
