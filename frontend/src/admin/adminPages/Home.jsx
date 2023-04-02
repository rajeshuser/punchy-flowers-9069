// import Cardcomponent from "../adminComponents/card/Cardcomponent";
import Header from "../adminComponents/Header/Header";
import Navbar from "../adminComponents/Header/Navbar";
import styles from "./home.module.css"
import axios from "axios";
import PieChart from 'react-pie-graph-chart';
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

export const data = [
  ["Element", "Amount", { role: "style" }],
  ["Products", 8.94, "#ed0331"], // RGB value
  ["Users", 10.49, "#ed0331"], // English color name
  ["Orders", 19.3, "#ed0331"],
  // ["Platinum", 21.45, "color: #ed0331"], // CSS-style declaration
];


const Home = () => {
  const [products, setProducts] = useState([]);
  // const [query, setQuery] = useState("");

  const getProducts = async ()=>{
      try {
          return await axios.get(`../product/get`)
            // headers: {
            //   Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
            // },
      // });
        } catch (err) {
          console.log(err);
        }
  }
 
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data.products);
      console.log(res.data.products);
    });
  }, []);
 return (
    <>
    <div className={styles.home}>
      <div className={styles.header}>
        <Header/>
      </div>
    <div className={styles.right}>
    <div className={styles.cardMain}>
    <div className={styles.card}>
        <div className={styles.poster}>
            <img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" alt="" />
        </div>
        <div className={styles.info}>
            <h3>777</h3>
            <p>TOTAL USERS</p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.poster}>
            <img src="https://cdn-icons-png.flaticon.com/128/3703/3703259.png" alt="" />
        </div>
        <div className={styles.info}>
            <h3>3000</h3>
            <p>TOTAL PRODUCTS</p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.poster}>
            <img src="https://cdn-icons-png.flaticon.com/128/6815/6815043.png" alt="" />
        </div>
        <div className={styles.info}>
            <h3>120</h3>
            <p>TOTAL ORDERS</p>
        </div>
    </div>
      </div>
    </div>
      
    </div>
    <div>
    <Chart className={styles.chartGoogleColumn} chartType="ColumnChart" width="90%" height="400px" data={data} />
    </div>
    <div className={styles.graphs}>
    <PieChart data={[
    {
      type: "Products",
      value: 235,
      color: "#ed0331"
    },
    {
      type: "Bicycle",
      value: 165,
      color: "#131921"
    }
  ]} />
  <PieChart className={styles.pieone} data={[
    {
      type: "Products",
      value: 235,
      color: "#ed0331"
    },
    {
      type: "Bicycle",
      value: 165,
      color: "#131921"
    }
  ]} />
    </div>
    </>
  );
};

export default Home;