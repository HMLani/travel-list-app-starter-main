export default /* Activity 12a, 12b */
function Stats({ totalItems }) {
  const numItems = totalItems.length;
  const packedItems = totalItems.filter((item) => item.packed).length;
  const percentageItems = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentageItems === 100 ? <em>You're all set and packed for your trip!</em> : `You have ${numItems} items in the list. You already packed ${packedItems} (${percentageItems}%).`}
    </footer>
  );
}