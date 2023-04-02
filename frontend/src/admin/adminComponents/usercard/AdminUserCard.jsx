import React from "react";
import styles from "./AdminUserCard.module.css";
import axios from "axios";

const AdminUserCard = ({ _id, first_name }) => {
  const handleDeleteUser = (_id) => {
    axios
      .delete(`https://dark-jade-swallow-robe.cyclic.app/users/${_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("user deleted");
  };
  return (
    <div className={styles.usercard}>
      <div className={styles.left}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt="userimg"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h3>username : {first_name}</h3>
          <h3>userid :{_id}</h3>
        </div>
        <div className={styles.numbers}>
          <div>
            <p>12</p>
            <p>orders</p>
          </div>
          <div>
            <p>4</p>
            <p>cart items</p>
          </div>
        </div>
        <div className={styles.status}>
          <p>status:active</p>
        </div>
        <div className={styles.btn}>
          <button onClick={() => handleDeleteUser(_id)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default AdminUserCard;
