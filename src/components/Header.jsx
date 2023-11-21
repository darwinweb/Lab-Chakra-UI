import React from 'react'
import { Box, Button, Heading, Flex, Stack } from '@chakra-ui/react'
import bgImage from '../images/banner-desktop.jpg'

export const Header = () => {
  return (
    <Box
        h='40vh'
        bg='gray'
        w='100vw'
        bgImage={`url(${bgImage})`}
        bgRepeat='no-repeat'
        bgSize='cover'
    >
        <Flex
            direction='column'
            alignItems='center'
            justify='center'
            h='100%'
            bg='rgb(0 0 0 / 50%)'
            p={['0 10%', null, '0 20%']}
        >
            <Heading
                color='white'
                textTransform='uppercase'
                textAlign='center'
                fontWeight='light'
                letterSpacing='5px'
            >
                Domina el terreno
            </Heading>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing='40px'
                mt='30px'
                w={['100%', null, 'auto']}
            >
                <Button
                    variant='outline'
                    size='lg'
                    borderRadius='0'
                    fontWeight='light'
                    color='white'
                    letterSpacing='1px'
                    _hover={{
                        color:'black',
                        bg: 'white'
                    }}

                >
                    VER DETALLES
                </Button>
                <Button
                    variant='outline'
                    size='lg'
                    borderRadius='0'
                    fontWeight='light'
                    color='white'
                    letterSpacing='1px'
                    _hover={{
                        color:'black',
                        bg: 'white'
                    }}
                >
                    VER VIDEOS
                </Button>
            </Stack>
        </Flex>

    </Box>
  )
}
