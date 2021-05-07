import './UserInfoItem.css';
const UserInfoItem = (props) => {
  return(
  <li>
    {props.name} ({props.age} years old)
  </li>)
};

export default UserInfoItem;
