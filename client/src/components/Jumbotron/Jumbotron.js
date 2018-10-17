

import React from "react";
import Particles from 'react-particles-js';
 


const styles = {
  jumbotron: {
    height:300,
    clear: "both",
    paddingTop: 120,
    textAlign: "center",
    background: `linear-gradient(to right bottom, #790970, #00d4ff)`,
    color: "#e5eae8"
  }

}

  


const Jumbotron = ({ children }) => (
  <div
    style={styles.jumbotron}
    className="jumbotron"
  >
  {children}
    </div>
  
);

export default Jumbotron;