import { Flex, Box, Heading, Button, Text } from "rimble-ui";
import Link from "next/link";
import Container from "../../../components/Container/Container";
import Row from "../../../components/Row/Row";
import Column from "../../../components/Column/Column";
import { useRouter } from "next/router";

const HeroArea = () => {
  const router = useRouter();

  const dashboardClickHandler = () => {
    const { onConnect } = require("../../../api/web3Modal");
    if (onConnect) {
      onConnect(router);
    }
  };

  return (
    <Box as="section">
      <Container>
        <Row justifyContent="center">
          <Column
            width={[1, 1, 4 / 5, 3 / 4]}
            py={["50px", "50px", "80px", "100px", "120px"]}
            textAlign="center"
          >
            {/* Hero text */}

            <Heading
              as="h2"
              fontSize={["40px", "40px", "50px", "80px", "65px"]}
              fontWeight="800"
              fontFamily="forma-djr-banner, sans-serif"
              color="black"
            >
              <strong>
                Welcome to Hungry Kitty - <br /> Community focused <br /> meme
                token.⚡{" "}
              </strong>
            </Heading>
            <Text
              mb={["20px", "20px", "25px", "60px"]}
              mt={["20px", "20px", "25px", "30px"]}
              fontSize={["13px", "13px", "15px", "20px", "20px"]}
            >
              Hold Hungry Kitty in your wallet to receive rewards.
            </Text>
            {/* Hero area buttons */}
            <Flex justifyContent="center">
              <Button.Outline
                as="a"
                mainColor="#0d0d0d"
                size="small"
                border="none"
                href="https://discord.com/invite/vFHU9wu"
                boxShadow="5px 5px 10px #f0f0f0, 
                -5px -5px 10px #ffffff"
                marginRight={[2, 2, 3, 4]}
                fontWeight="700"
                fontSize={["12px", "12px", "12px", "22px"]}
                height={["2.5rem", "2.5rem", "2.5rem", "3rem"]}
                px={["20px", "20px", "50px", "62px"]}
                icon={typeof window !== "undefined" ? "NearMe" : ""}
                borderRadius={15}
              >
                Join Community
              </Button.Outline>
              <Button
                as="a"
                mainColor="#7433ff"
                size="small"
                border="none"
                href="https://discord.com/invite/vFHU9wu"
                boxShadow="5px 5px 10px #f0f0f0, 
                -5px -5px 10px #ffffff"
                marginRight={[2, 2, 3, 4]}
                fontWeight="700"
                fontSize={["12px", "12px", "12px", "22px"]}
                height={["2.5rem", "2.5rem", "2.5rem", "3rem"]}
                px={["20px", "20px", "50px", "62px"]}
                borderRadius={15}
              >
                ⚡Apply to WL presale
              </Button>
            </Flex>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default HeroArea;
