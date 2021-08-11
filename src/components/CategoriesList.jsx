import React from 'react';
import PropTypes from 'prop-types';
import { Button, Stack } from '@chakra-ui/react';

export default class CategoriesList extends React.Component {
  render() {
    const { categories, handleChangeCategory } = this.props;
    return (
      <Stack>
        {categories.map((categorie) => (
          <Button
            key={ categorie.id }
            value={ categorie.id }
            name={ categorie.id }
            onClick={ (e) => {
              handleChangeCategory(e.target.name);
            } }
            data-testid="category"
          >
            {categorie.name}
          </Button>
        ))}
      </Stack>
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
};
