import React from 'react'
import styles from "./AdminUserCard.module.css"

const AdminUserCard = () => {
  return (
    <div className={styles.usercard}>
      <div className={styles.left}>
      <img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" alt="" />
      </div>
      <div className={styles.right}>
      <div className={styles.title}>
        <h3>username : Asif Shaikh</h3>
        <h3>userid :  124578963254789</h3>
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
         <button>DELETE</button>
      </div>
      </div>
    </div>
  )
}

export default AdminUserCard