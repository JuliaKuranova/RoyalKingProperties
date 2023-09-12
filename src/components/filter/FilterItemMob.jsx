export default function FilterItemMob(props) {
  return (
    <div 
        className={`mobile-filter__item main-text ${props.isActive ? 'active' : ''}`}
        onClick={props.onClick}
    >
        {props.children}
    </div>
  )
}
