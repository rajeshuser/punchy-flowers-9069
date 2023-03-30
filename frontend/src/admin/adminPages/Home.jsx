// import Cardcomponent from "../adminComponents/card/Cardcomponent";
import Header from "../adminComponents/Header/Header";
import Navbar from "../adminComponents/Header/Navbar";
import styles from "./home.module.css"
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];


const Home = () => {
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
    <Chart className="chartGoogleColumn" chartType="ColumnChart" width="100%" height="400px" data={data} />
    </div>
    </>
  );
};

export default Home;