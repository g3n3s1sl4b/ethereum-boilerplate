import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/boostrap.min.css";

export default function Progress() {
  const [percentage, setPercentage] = useState(30);

  const styles = {
    progressContainer: {
      width: "65vw",
      padding: "15px",
      position: "relative",
    },
    progressBar: {
      height: "2rem",
      borderRadius: "2rem",
      background: "white",
    },
  };

  useEffect(() => {}, []);

  return (
    <div style={styles.progressContainer}>
      <Progress
        animated
        now={percentage}
        variant="info"
        style={styles.progressBar}
      />
    </div>
  );
}
