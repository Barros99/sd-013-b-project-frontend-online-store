import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, Radio, Stack } from '@chakra-ui/react';

export default class CategoriesList extends React.Component {
  onTrigger(e) {
    this.setValue(e);
  }

  setValue = (event) => {
    const { handleChangeCategory } = this.props;
    console.log(event);
    handleChangeCategory(event);
  }

  render() {
    const { categories, catId } = this.props;
    return (
      <RadioGroup
        value={ catId }
        onChange={ this.setValue }
        maxWidth={ 250 }
      >
        <Stack direction="column">
          {categories.map((categorie) => (
            <Radio
              key={ categorie.id }
              value={ categorie.id }
              data-testid="category"
              onClick={ (e) => this.onTrigger(e) }
            >
              {categorie.name}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
  catId: PropTypes.string.isRequired,
};
