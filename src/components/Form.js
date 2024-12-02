import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [description, setDesc] = useState('');/* Activity 4 */
  const [quantity, setQty] = useState(1);

  /* Activity 3 */
  function handleSubmit(e) {
    e.preventDefault();

    /* Activity 8c */
    const newItem = {
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
  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  /* Activity 5 */
  function handleQtyChange(e) {
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