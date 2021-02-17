import { useState } from 'react';
import HeadLine from './HeadLine';
import ShoppingList from './ShoppingList';
import Form from './Form';
import styled from 'styled-components'





function App() {

  const [shoppingItems, setShoppingItems] = useState([])

  function addShoppingItem(title) {
    const newShoppingItem = { title, isDone: false }
    setShoppingItems([...shoppingItems, newShoppingItem])
  }

  function toggleCheckbox(indexToToggle) {
    const itemToToggle = shoppingItems.find((item, index) => index === indexToToggle);
    itemToToggle.isDone = !itemToToggle.isDone;

    const firstHalf = shoppingItems.slice(0, indexToToggle);
    const secondHalf = shoppingItems.slice(indexToToggle + 1);
    setShoppingItems([...firstHalf, itemToToggle, ...secondHalf])
  }

  return (
    <MyBody className="App">
      <HeadLine name="Harry" />

      <Form headline="Your Personal ShoppingList" onCreateShoppingItem={addShoppingItem} />

      {shoppingItems.map((item, index) => (
        <ShoppingList
          title={item.title}
          isDone={item.isDone}
          onToggleItem={() => toggleCheckbox(index)}
        />
      ))}
    </MyBody>
  );
}

const MyBody = styled.div`
  margin: 0;
  display: grid;
  justify-content: center;
  font-family: sans-serif;
`


export default App;


