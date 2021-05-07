import ReactDOM from 'react-dom';

import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import React from 'react';

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return <React.Fragment>
    {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>,document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<ModalOverlay title={props.title} content={props.content} onClick={props.onClick}/>,document.getElementById("modal-root"))}
  </React.Fragment>;
};

export default ErrorModal;
