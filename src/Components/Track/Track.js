import React from "react";
import styles from "./Track.module.css";
function Track () {
  function renderAction (props) {
    if (props.isRemoval) {
      return <button className="Track-action">-</button>
    } else {
      return <button className="Track-action">+</button>
      }
    }
  
    return (
      <div className={styles.Track}>
        <div className={styles["Track-information"]}>
          {/* <h3><!-- track name will go here --></h3> */}
          
          {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );

  }
export default Track;