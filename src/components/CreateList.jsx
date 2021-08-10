import React from 'react';
import PropTypes from 'prop-types';

class CreateList extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <label htmlFor="category">
        <input
          style={ { display: 'block' } }
          name="category"
          type="radio"
          data-testid="category"
        />
        {name}
      </label>
    );
  }
}

CreateList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CreateList;
