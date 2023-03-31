import React from "react";
import styles from "./AdminOrderCard.module.css";

const AdminOrderCard = () => {


  return (
    <div className={styles.productcard}>
      <div className={styles.left}>
        <img
          src="https://img.freepik.com/free-vector/sale-full-shopping-cart-red-pictogram_1284-8505.jpg"
          alt=""
        />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h3>Order Date : "Date"</h3>
          <p>userid:145789632587</p>
          <h3>Order Staus:pending</h3>
        </div>
        <div className={styles.id}>
          <p>Order id : </p>
          <p>123456789789</p>
        </div>
        <div className={styles.id}>
          <p>Payment : </p>
          <p> "PhonePay"</p>
        </div>
        <div className={styles.numbers}>
          <div>
            {/* <p></p> */}
            <p>Products:2</p>
          </div>
          <div>
            <p>$ 589</p>
            <p>TOTAL AMOUNT</p>
          </div>
        </div>
        <div className={styles.btn}>
          {/* <button><Link className={styles.btn} to="/adminupdate">UPDATE</Link></button> */}
          <button>
            Update Order Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderCard;