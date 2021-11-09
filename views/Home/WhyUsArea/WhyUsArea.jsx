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
    color: #FFFCEE;
  }
  div {
    transition: 0.3s;
  }
  :hover div {
    color: #FFFCEE;
  }
`;

const WhyUsArea = () => {
  return (
    <Box
      as="section"
      backgroundColor="#3d405b"
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

              <Image src="./hkittylogo_whyus.png" />
          </Column>
          <Column width={[1, 1, 1, 3 / 5]}>
            {/* Right side contents */}
            <Box py="30px" pl={[0, 0, 0, "50px"]}>
              <Heading
                color="#fff"
                fontSize={["20px", "20px", "30px", "50px", "60px"]}
                fontFamily="variex, sans-serif"
                fontWeight="400"
                as="h5"
                mb="15px"
              >
                Hungry Kitty's story
              </Heading>
              <Text
                color="#fff"
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
              <Text
                marginTop={[2, 2, 3, 2]}
                color="#fff"
                fontWeight="500"
                fontSize="16px"
                fontFamily="forma-djr-banner, sans-serif"
              >Hosted on the Binance Smart Chain network at its core, the decentralised token called HKITTY. HKITTY is a community focussed mew-ow coin which will provide its holders a chance to earn hefty rewards. Envisaged as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core meme coin investors, HKITTY plans to have its own merchandise marketplace. The earnings from the marketplace will be utilised to fund cat shelters across ____.</Text>
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
            <Image src={require("./pancakeswap-cake-logo.svg")} width="40%" mb="5px" />
            <Heading color="white" fontSize="18px" as="h3" mt="30px" mb="15px">
              Liquidity locked with PancakSwap
            </Heading>
            <Text color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint facere accusamus, soluta dolor ducimus dolores ea quo placeat voluptates debitis. 
            </Text>
          </FeatureBox>
          <FeatureBox
            width={[1, 1, 1 / 2, 1 / 3]}
            px={["30px", "30px", "30px", "70px", "80px"]}
            py={["15px", "30px", "30px", "40px", "60px"]}
          >
            <Image src={require("./lp.svg")} width="40%" mb="5px" />
            <Heading color="white" fontSize="18px" as="h3" mt="30px" mb="15px">
              Automatic Liquidity Generation
            </Heading>
            <Text color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint facere accusamus, soluta dolor ducimus dolores ea quo placeat voluptates debitis. 
            </Text>
          </FeatureBox>
          <FeatureBox
            width={[1, 1, 1 / 2, 1 / 3]}
            px={["30px", "30px", "30px", "70px", "80px"]}
            py={["15px", "30px", "30px", "40px", "60px"]}
          >
            <Image src={require("./antibot.svg")} width="40%" mb="5px" />
            <Heading color="white" fontSize="18px" as="h3" mt="30px" mb="15px">
              Anti bot mechanism
            </Heading>
            <Text color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint facere accusamus, soluta dolor ducimus dolores ea quo placeat voluptates debitis. 
            </Text>
          </FeatureBox>
        </Row>
      </Container>
    </Box>
  );
};

export default WhyUsArea;
