import { CreditCardOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, notification } from "antd";
import Text from "antd/lib/typography/Text";
import { useEffect, useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { ContractABI } from "components/Abi/abi";
// import AddressInput from "../../AddressInput";
// import AssetSelector from "./AssetSelector";

const styles = {
  card: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    textAlign: "center",
  },
  input: {
    width: "100%",
    outline: "none",
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    appearance: "textfield",
    color: "#041836",
    fontWeight: "700",
    border: "none",
    backgroundColor: "transparent",
  },
  select: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  textWrapper: { maxWidth: "80px", width: "100%" },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: "row",
  },
};

function Transfer() {
  const { Moralis } = useMoralis();
  const [receiver, setReceiver] = useState(
    process.env.REACT_APP_CONTRACT_ADDRESS,
  );
  // const [asset, setAsset] = useState();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();
  const { data, error, fetch, isFetching, isLoading } =
    useWeb3ExecuteFunction();

  useEffect(() => {
    console.log(amount, receiver);
    amount && receiver ? setTx({ amount, receiver }) : setTx();
  }, [amount, receiver]);

  const openNotification = ({ message, description }) => {
    notification.open({
      placement: "bottomRight",
      message,
      description,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  useEffect(() => {
    if (error)
      openNotification({
        message: "Error",
        description: error.toString(),
      });
  }, [error, data]);

  async function transfer() {
    const { amount, receiver } = tx;

    let params = {
      abi: ContractABI,
      contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
      functionName: "DonateNow",
      params: {
        from: receiver,
        value: Moralis.Units.Token(amount, 18),
      },
    };
    console.log(params);
    await fetch({ params });
    // switch (asset.token_address) {
    //   case "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":
    //     options = {
    //       native: "native",
    //       amount: Moralis.Units.ETH(amount),
    //       receiver,
    //       awaitReceipt: false,
    //     };
    //     break;
    //   default:
    //     options = {
    //       type: "erc20",
    //       amount: Moralis.Units.Token(amount, asset.decimals),
    //       receiver,
    //       contractAddress: asset.token_address,
    //       awaitReceipt: false,
    //     };
    // }

    // setIsPending(true);
    // const txStatus = await Moralis.transfer(options);

    // txStatus
    //   .on("transactionHash", (hash) => {
    //     openNotification({
    //       message: "🔊 New Transaction",
    //       description: `${hash}`,
    //     });
    //     console.log("🔊 New Transaction", hash);
    //   })
    //   .on("receipt", (receipt) => {
    //     openNotification({
    //       message: "📃 New Receipt",
    //       description: `${receipt.transactionHash}`,
    //     });
    //     console.log("🔊 New Receipt: ", receipt);
    //     setIsPending(false);
    //   })
    //   .on("error", (error) => {
    //     openNotification({
    //       message: "📃 Error",
    //       description: `${error.message}`,
    //     });
    //     console.error(error);
    //     setIsPending(false);
    //   });
  }

  return (
    <div style={styles.card}>
      <div style={styles.tranfer}>
        <div style={styles.header}>
          <h5>Donate Now</h5>
        </div>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>To:</Text>
          </div>
          <Input
            size="large"
            prefix={<SearchOutlined />}
            autoFocus
            onChange={(e) => setReceiver(e.target.value)}
            value={receiver}
          />
          {/* <AddressInput autoFocus onChange={setReceiver} /> */}
        </div>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Amount:</Text>
          </div>
          <Input
            size="large"
            prefix={<CreditCardOutlined />}
            onChange={(e) => {
              setAmount(`${e.target.value}`);
            }}
          />
        </div>
        {/* <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Asset:</Text>
          </div>
          <AssetSelector setAsset={setAsset} style={{ width: "100%" }} />
        </div> */}
        {error && <>{error.toString()}</>}
        <Button
          type="primary"
          size="large"
          loading={isLoading}
          style={{ width: "100%", marginTop: "25px" }}
          onClick={() => transfer()}
          disabled={!tx || isFetching}
        >
          Transfer💸
        </Button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default Transfer;
