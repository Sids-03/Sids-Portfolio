import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  > svg {
    transition: 200ms ease;
  }
  &:hover > svg {
    transform: rotate(20deg);
  }
`
const Logo = () =>{
    return (
      <>
        <Link legacyBehavior href="/" scroll={false} >
          <a>
                <LogoBox>
                    {/* <cIcon /> */ }
                    <Text
                        as='kbd'
                        fontSize ="2xl"
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight="bold"
                        ml={3}
                    >
                        Sid.S
                    </Text>
                </LogoBox>
          </a>
        </Link>
      </>
    )
}

export default Logo