import React from 'react';
import PropTypes from 'prop-types';

class CreateList extends React.Component {
  render() {
    const { name, onChange, id } = this.props;
    return (
      <label htmlFor="category">
        <input
          style={ { display: 'block' } }
          name="category"
          value={ id }
          type="radio"
          data-testid="category"
          onChange={ onChange }
        />
        {name}
      </label>
    );
  }
}

CreateList.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CreateList;
