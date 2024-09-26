import { Box, Heading, Image,Text } from '@chakra-ui/react';
import React from 'react';
import cellcore from '../assets/cellcore.png'; 
import micro from '../assets/micro.png'
import research from '../assets/research.jpeg';
import pure from'../assets/pure.png';
import pendulum from '../assets/pendulum.png'

const Section = () => {
    return (
        <Box>
        <Box p={8} w="90vw" mx="auto" >
            <Heading
                size="md"
                mb={4}
                textAlign={{ base: 'center', sm: 'center', md: 'left' }}  
            >Top Brands</Heading>
            <Box
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}  
                alignItems="center"  
                justifyContent="space-between"  
                gap={4}
                mb={{ base: 4, md: 0 }}
                flexWrap="wrap"  
            >
                <Image src={cellcore} w={{ base: '150px', md: '200px' }} alt="Cellcore" />
                <Image src={micro} w={{ base: '150px', md: '200px' }} alt="Cellcore" />
                <Image src={pendulum} w={{ base: '150px', md: '200px' }} alt="Cellcore" />
                <Image src={pure} w={{ base: '150px', md: '200px' }} alt="Cellcore" />
                <Image src={research} w={{ base: '150px', md: '200px' }} alt="Cellcore" />
            </Box>
            
        </Box>
         <Box p={8} w="90vw" mx="auto">
         <Text fontSize="2xl" fontWeight="bold" mb={4}>
             Featured Products
         </Text>
         </Box>
         </Box>
    );
};

export default Section;
