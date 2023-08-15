
import React from "react";
import styles from "../../styles/Home.module.css"

function Leftnavbar()
    {
      return (
      <div className={styles.navcontainer}>
        <div className={styles.logo}>
          <h2>WanderSub</h2>

        </div>
        <div className={styles.wrapper}>
          <ul>
            <li>
            
            <a href="#" >Dashboard</a>
            
            
            </li>
            <li>
            
              <a href="#">All parameters</a></li>

            <li> 
            
              <a href="#">pH</a></li>
            <li>
            
              <a href="#">TDS</a></li>
            <li>
            
              <a href="#">Turbidity</a></li>
            <li>
            
              <a href="#">Temperature</a></li>
            <li>
            
              <a href="#">Depth</a></li>
            <li>
            
              <a href="#">Settings</a></li>
            <li>
            
              <a href="#">Profile</a></li>
            <li>
            
              <a href="#">Logout</a></li>

          </ul>

        </div>
  
      </div>
      );
    }
export default Leftnavbar;