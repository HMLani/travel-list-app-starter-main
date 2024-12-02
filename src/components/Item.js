export default function Item({ item, onDelItem, onUpdateItem }) {
    /* Activity 7 */
    const itemPacked = { textDecoration: item.packed ? 'line-through' : 'none' };

    return (
        /* Activity 6, 7, 10c(button), 11c(checkbox) */
        <div>
            <li>
                <input type='checkbox' checked={item.packed} onChange={() => onUpdateItem(item.id)} />
                <span style={itemPacked}>
                    {item.description}
                    ({item.quantity})
                </span>
                <button onClick={() => onDelItem(item.id)}>❌</button>
            </li>
        </div>
    )
}