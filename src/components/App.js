import { useState } from "react";

// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: true },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({ handleAddItems }) {
  const [description, setDesc] = useState('');/* Activity 4 */
  const [quantity, setQty] = useState(1);
  
  /* Activity 3 */
  function handleSubmit(e){
    e.preventDefault();

    /* Activity 8c */
    const newItem ={
      id: Date.now(),
      description,
      quantity,
      packed: false
    };

    handleAddItems(newItem);
    setDesc('');
    setQty(1);
  }

  /* Activity 4 */
  function handleDescChange(e){
    setDesc(e.target.value);
  }

  /* Activity 5 */
  function handleQtyChange(e){
    setQty(+e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>{/* Activity 3 */}
      <h3>What do you need to pack?</h3>

      {/* Activity 2, 5 */}
      <select value={quantity} onChange={handleQtyChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>

      <input type='text' placeholder='Item...' value={description} onChange={handleDescChange} />{/* Activity 2, 4 */}
      <button type='submit'>ADD</button>{/* Activity 2 */}
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          // <li>{item.description}</li>
          /* Activity 6, 9b */
          <Item key={item.id} item={item}/>
        ))}
      </ul>
    </div>
  );
}

function Item({item}) {
  /* Activity 7 */
  const itemPacked = {textDecoration: item.packed ? 'line-through' : 'none'};

  return (
    /* Activity 6, 7 */
    <div style={itemPacked}>
      <li>{item.description} ({item.quantity})</li>
    </div>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);/* Activity 8a, 9a */

  /* Activity 8b, 9c */
  function handleAddItems(items){
    setItems(lastItem => [...lastItem, items]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>{/* Activity 9d */}
      <PackingList items={items}/>{/* Activity 9b */}
      <Stats />
    </div>
  );
}

export default App;
