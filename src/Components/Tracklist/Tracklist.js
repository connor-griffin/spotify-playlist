import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
    return (
        <div className={styles.TrackList}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {props.userSearchResults.map((track) => (
          
            <Track />
        
        ))}
        </div>
     
      );
}

export default Tracklist;