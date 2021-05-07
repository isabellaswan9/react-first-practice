import { useState , useRef} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserInfoInput.module.css";
import ErrorModal from "../UI/ErrorModal";
const UserInfoInput = (props) => {

  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    
    const userName = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userAge < 1) {
        setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0).",
          });
      return;
    }
    const userInfo = {
      name: userName,
      age: userAge,
      id: Math.random.toString(),
    };
    props.getUserInfo(userInfo);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const setValidHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.message}
          onClick={setValidHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="text"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInfoInput;
