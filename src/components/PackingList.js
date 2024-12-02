import Item from "./Item.js";

export default /* Activity 10b(onDelItem), 11b(onUpdateItem) */
function PackingList({ items, onDelItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          // <li>{item.description}</li>
          /* Activity 6, 9b, 10b */
          <Item key={item.id} item={item} onDelItem={onDelItem} onUpdateItem={onUpdateItem}/>
        ))}
      </ul>
    </div>
  );
}