export default function ShoppingList({ title, isDone, onToggleItem }) {
    return <section>
        <label>
            <input type="checkbox" checked={isDone} onChange={onToggleItem} />{title}
        </label>
    </section>
}