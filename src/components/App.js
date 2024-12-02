import { useState } from "react";
import Logo from "./Logo.js"; /* Activity 13 */
import Form from "./Form.js"; /* Activity 13 */
import PackingList from "./PackingList.js"; /* Activity 13 */
import Stats from "./Stats.js"; /* Activity 13 */

function App() {
  const [items, setItems] = useState([]);/* Activity 8a, 9a */

  /* Activity 8b, 9c */
  function handleAddItems(items) {
    setItems(lastItem => [...lastItem, items]);
  }

  /* Activity 10a */
  function handleDelItem(id) {
    setItems((lastItem) => lastItem.filter((items) => items.id !== id));
  }

  /* Activity 11a */
  function handleUpdateItem(id){
    setItems((lastItem) => lastItem.map((items) => {
      if (items.id === id) {
        return {...items, packed: !items.packed};
      }
      return items;
    }));
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />{/* Activity 9d */}
      <PackingList items={items} onDelItem={handleDelItem} onUpdateItem={handleUpdateItem}/>{/* Activity 9b, 10a, 11b */}
      <Stats totalItems={items}/> {/* Activity 12a */}
    </div>
  );
}

export default App;
