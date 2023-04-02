import React from 'react'
import styles from "./AdminUserCard.module.css"
import axios from 'axios';

const AdminUserCard = ({
  id,image,username
}) => {

 const handleDeleteUser = (id) => {
    axios.delete(`https://dummyjson.com/users/${id}'`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    alert("user deleted")
  };
  return (
    <div className={styles.usercard}>
      <div className={styles.left}>
      <img src={image} alt="" />
      </div>
      <div className={styles.right}>
      <div className={styles.title}>
        <h3>username : {username}</h3>
        <h3>userid :{id}</h3>
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
         <button onClick={()=>handleDeleteUser(id)}>DELETE</button>
      </div>
      </div>
    </div>
  )
}

export default AdminUserCard