import React from 'react';
import PropTypes from 'prop-types';

class CreateList extends React.Component {
  render() {
    const { name, id, funcClick } = this.props;
    return (
      <label htmlFor="category">
        <input
          style={ { display: 'block' } }
          name="category"
          type="radio"
          data-testid="category"
          value={ id }
          onClick={ funcClick }
        />
        {name}
      </label>
    );
  }
}

CreateList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  funcClick: PropTypes.func.isRequired,
};

export default CreateList;
