import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`} style={styles.container}
  >
    {children}
  </div>
);



const styles = {
  container: {
background: "#bdc1c0"
    
  }

}

  


