import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { Typography } from "antd";
import { useNativeBalance } from "react-moralis";
import "bootstrap/dist/css/bootstrap.min.css";
import { MAX_VALUE, STEPS } from "./config";

const { Text } = Typography;

export default function Progress() {
  const [percentage, setPercentage] = useState(0);
  const { data: balance } = useNativeBalance({
    address: process.env.REACT_APP_CONTRACT_ADDRESS,
  });

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
    progressTitle: {
      position: "absolute",
      right: "2rem",
      top: "50%",
      transform: "translateY(-50%)",
    },
    progressText: {
      position: "absolute",
      top: "0",
      right: "0",
      transform: "translate(50%, -100%)",
    },
  };

  useEffect(() => {
    console.log(balance);
    const bal = parseFloat(balance.balance || "0");
    console.log(bal);
    setPercentage((parseFloat(balance || "0") / MAX_VALUE.value) * 100);
  }, [balance]);

  return (
    <div style={styles.progressContainer}>
      <ProgressBar
        animated
        now={percentage}
        variant="info"
        style={styles.progressBar}
      />
      <Text style={styles.progressTitle}>{MAX_VALUE.label}</Text>
      {STEPS.map((step) => (
        <div
          key={step.label}
          style={{
            position: "absolute",
            top: "0",
            left: 0,
            borderRight: "1px solid gray",
            width: step.percentage,
            height: "100%",
          }}
        >
          <Text style={styles.progressText}>{step.label}</Text>
        </div>
      ))}
    </div>
  );
}
