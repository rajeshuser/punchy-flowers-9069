import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./AdminNavbar.module.css"
// import { CgProfile } from "react-icons/cg";

const AdminNavbar = () => {
  return (
    <div className={styles.adminnavbar}>
      <img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" alt="" />
      <p>GadgetStore</p>
      <p>Admin Dashboard</p>
      

      
    </div>
  )
}

export default AdminNavbar