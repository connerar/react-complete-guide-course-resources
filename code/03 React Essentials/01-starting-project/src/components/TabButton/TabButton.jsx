export default function TabButton({children, onSelect, isSelected}) {
    return (<li>
        <button className={isSelected ? "active" : ""} onClick={onSelect/*This must not have parantheses*/}>{children}</button>
    </li>)
}