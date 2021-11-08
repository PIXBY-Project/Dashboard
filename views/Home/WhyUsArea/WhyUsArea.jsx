import React from "react";
import { Box, Heading, Text, Image } from "rimble-ui";
import styled from "styled-components";
import Container from "../../../components/Container/Container";
import Row from "../../../components/Row/Row";
import Column from "../../../components/Column/Column";

const FeatureBox = styled(Box)`
  position: relative;
  text-align: center;
  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) translateX(50%);
    width: 1px;
    height: 80%;
    background-color: #2d3142;
    display: none;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    ::after {
      display: block;
    }

    :nth-child(2n + 0)::after {
      display: none;
    }
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[2]}) {
    :nth-child(2n + 0)::after {
      display: block;
    }

    :nth-child(3n + 0)::after {
      display: none;
    }
  }

  i {
    font-size: 50px;
    color: #624cf0;
    transition: 0.3s;
  }
  :hover i,
  :hover h3 {
    color: #10002b;
  }
  div {
    transition: 0.3s;
  }
  :hover div {
    color: #10002b;
  }
`;

const WhyUsArea = () => {
  return (
    <Box
      as="section"
      backgroundColor="#ffb4a2"
      pt={["50px", "50px", "100px"]}
      pb={["270px", "270px", "177px"]}
    >
      <Container>
        <Row>
          <Column
            width={[1, 1, 1, 2 / 5]}
            display={["flex", "flex", "block"]}
            justifyContent="center"
          >
            {/* Logo Image */}
            <Box
              backgroundColor="#ffb4a2"
              boxShadow="5px 5px 10px #de9d8d,
              -5px -5px 10px #ffcbb7"
              borderRadius="40px"
              p={["10px", "10px", "40px"]}
              width={[1]}
              mb={["30px", "30px", "30px", 0]}
            >
              <Image src="./hkittylogo_whyus.svg" />
            </Box>
          </Column>
          <Column width={[1, 1, 1, 3 / 5]}>
            {/* Right side contents */}
            <Box py="30px" pl={[0, 0, 0, "50px"]}>
              <Heading
                color="#2d3142"
                fontSize={["20px", "20px", "30px", "50px", "60px"]}
                fontFamily="forma-djr-banner, sans-serif"
                as="h4"
                mb="15px"
              >
                Hungry Kitty's story
              </Heading>
              <Text
                color="#2d3142"
                fontWeight="500"
                fontSize="16px"
                fontFamily="forma-djr-banner, sans-serif"
              >
                Hungry Kitty is not just a dog coin. IT’S A PAW-SIBILE UPRISING.
                It is a cryptocurrency developed by the paw-some community of
                cat lovers. With the a-paw-ling phenomenon of some dog breeds
                going wild, one fur-midable opposition is standing ground to
                reclaim the throne of meme world. Ignited by the elixir of an
                amorphous plutonic crystal, this kitty’s hunger for justice goes
                far beyond kicking some dog(e)’s a**. It is intended to bring a
                revolutionary social and charitable movement.
              </Text>
            </Box>
          </Column>
        </Row>
        <Row
          pt={["10px", "10px", "80px"]}
          mx={["-15px", "-15px", "15px", "-85px", "-95px"]}
        >
          <FeatureBox
            width={[1, 1, 1 / 2, 1 / 3]}
            px={["30px", "30px", "30px", "70px", "80px"]}
            py={["15px", "30px", "30px", "40px", "60px"]}
          >
            <Image src={require("./chat.svg")} width="25%" mb="5px" />
            <Heading color="black" fontSize="18px" as="h3" mt="30px" mb="15px">
              24/7 Community Support
            </Heading>
            <Text color="dark-gray">
              Want help from the community or team? Join our Telegram community
              to get a prompt guidance!
            </Text>
          </FeatureBox>
          <FeatureBox
            width={[1, 1, 1 / 2, 1 / 3]}
            px={["30px", "30px", "30px", "70px", "80px"]}
            py={["15px", "30px", "30px", "40px", "60px"]}
          >
            <Image src={require("./rewards.svg")} width="25%" mb="5px" />
            <Heading color="black" fontSize="18px" as="h3" mt="30px" mb="15px">
              Anti-bot mechanism
            </Heading>
            <Text color="dark-gray">
              30 seconds cool downs and tax on every transaction will discourage
              bots to swing trading. Apart from that we can permanently
              blacklists bots from trading $HKITTY.
            </Text>
          </FeatureBox>
          <FeatureBox
            width={[1, 1, 1 / 2, 1 / 3]}
            px={["30px", "30px", "30px", "70px", "80px"]}
            py={["15px", "30px", "30px", "40px", "60px"]}
          >
            <Image src={require("./decentralized.svg")} width="25%" mb="5px" />
            <Heading color="black" fontSize="18px" as="h3" mt="30px" mb="15px">
              Decentralized
            </Heading>
            <Text color="dark-gray">
              PIXBY is a decentralized asset, and that means that no government
              or authority has control over it.
            </Text>
          </FeatureBox>
        </Row>
      </Container>
    </Box>
  );
};

export default WhyUsArea;
