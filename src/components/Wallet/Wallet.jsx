import Transfer from "./components/Transfer";
import ERC20Tranfers from "components/ERC20Transfers";
import Progress from "components/Progress/ProgressBar";
import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Blockie from "../Blockie";
import { Card, Space } from "antd";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
  },
};

function Wallet() {
  return (
    <Space
      direction="vertical"
      size="large"
      align="center"
      style={{ display: "flex" }}
    >
      <Progress />
      <Card
        style={styles.card}
        title={
          <div style={styles.header}>
            <Blockie scale={5} avatar currentWallet style />
            <Address size="6" copyable />
            <NativeBalance />
          </div>
        }
      >
        <Transfer />
      </Card>
      <ERC20Tranfers />
    </Space>
  );
}

export default Wallet;
