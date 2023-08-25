export default function MenuItem(props) {
  return (
    <span className={`menu-item ${props.active ? 'active' : ''}`}>
      {props.children}
    </span>
  );
}