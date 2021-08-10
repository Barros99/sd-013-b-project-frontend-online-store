import React from 'react';
import '../App.css';
import CardLibrary from '../components/CardLibrary';

export default class Homepage extends React.Component {
  render() {
    return (
      <section>
        <CardLibrary />
      </section>
    );
  }
}
