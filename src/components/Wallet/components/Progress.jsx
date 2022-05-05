import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Box, Center, Text } from "@chakra-ui/react";
import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import {
  MAX_VALUE,
  STEPS,
  DEST_ADDRESS,
  SPEEDY_NODE_URL,
} from "../../config.js";

export default function Progress() {
  const [percentage, setPercentage] = useState < number > 0;

  const provider = new ethers.providers.JsonRpcProvider(SPEEDY_NODE_URL);

  useEffect(() => {
    let isMount = true;

    (async () => {
      const etherBalance = await provider.getBalance(DEST_ADDRESS);
      const balance = parseFloat(formatEther(etherBalance));
      if (isMount) setPercentage((balance / MAX_VALUE.value) * 100);
    })();

    return () => {
      isMount = false;
    };
  }, []);

  return (
    <Center>
      <Box w="3xl" marginTop="32" marginInline="10" position="relative">
        <ProgressBar
          animated
          now={percentage}
          variant="info"
          style={{ height: "2rem", borderRadius: "2rem" }}
        />
        <Text
          position="absolute"
          top="50%"
          right="1rem"
          transform="translateY(-50%)"
          fontSize="md"
          fontWeight="medium"
        >
          {MAX_VALUE.label}
        </Text>
        {STEPS.map((step) => (
          <Box
            key={step.label}
            position="absolute"
            left="0"
            top="-25%"
            width={step.percentage}
            height="150%"
            borderRight="1px solid gray"
          >
            <Text
              color="white"
              fontSize="lg"
              fontWeight="bold"
              position="absolute"
              top="0"
              right="0"
              transform="translate(50%, -100%)"
            >
              {step.label}
            </Text>
          </Box>
        ))}
      </Box>
    </Center>
  );
}
