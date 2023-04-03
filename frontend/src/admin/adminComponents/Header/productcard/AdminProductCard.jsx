import React from "react";
import axios from "axios";
import styles from "./adminProductCard.module.css";
const AdminProductCard = ({ category, image, price, rating, name, _id }) => {
  const handleDelete = (_id) => {
    axios
      .delete(
        `https://dark-jade-swallow-robe.cyclic.app/products/delete/${_id}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("product deleted");
  };

  return (
    <div className={styles.productcard}>
      <div className={styles.left}>
        <img src={image} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h3>{name}</h3>
        </div>
        <div className={styles.id}>
          <p>product id : </p>
          <p>{_id}</p>
        </div>
        <div className={styles.numbers}>
          <p>category : {category}</p>
          {/* <div>
            <p>{price}</p>
            <p>price</p>
          </div> */}
        </div>
        <div className={styles.btn}>
          <button onClick={() => handleDelete(_id)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
