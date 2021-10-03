import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      min: 1,
      max: 100,
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

  getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  addSomeCarrots = () => {
    this.setState({ items: [...this.state.items, {id: 5, value: "Carrots", qty: this.getRandom(100), unit: 'x'}] });
  }

  addSomeStrawberries = () => {
    this.setState({ items: [...this.state.items, {id: 6, value: "Strawberries", qty: this.getRandom(100), unit: 'pkt'}] })
  }
  
  addSomeYoghurt = () => {
    this.setState({ items: [...this.state.items, {id: 7, value: "Yoghurt", qty: this.getRandom(100), unit: 'ltr'}] })
  }

  addSomeBeer = () => {
    this.setState({ items: [...this.state.items, {id: 8, value: "Beer", qty: this.getRandom(100), unit: 'btl'}] })
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addSomeCarrots }>Add carrots</button>
      <button onClick={ this.addSomeStrawberries }>Add strawberries</button>
      <button onClick={ this.addSomeYoghurt }>Add yoghurt</button>
      <button onClick={ this.addSomeBeer }>Add beer</button>
    </div>
  }
}

export default App;