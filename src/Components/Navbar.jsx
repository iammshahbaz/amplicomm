import { Box, Heading, Icon, Select, Text, Image, Button } from '@chakra-ui/react';
import { CiUser, CiBag1, CiSearch } from "react-icons/ci";
import backgroundImage from '../assets/background.jpg';
import hebron from '../assets/hebronN.png'
import React from 'react';

const Navbar = () => {
    return (
        <Box>

            <Box bg="purple.800" py={4} textAlign="center">
                <Heading as="h6" size="sm" color="white">
                    Worldwide Shipping - Duties and Taxes Prepaid
                </Heading>
            </Box>


            <Box
                display={{ base: 'block', md: 'flex' }} 
                flexDirection={{ base: 'column', lg: 'row' }}
                alignItems="center"
                justifyContent="space-between"
                py={4}
                px={6}
                bg="gray.100"
            >
                {/* Logo Section */}
                <Box textAlign={{ base: 'center', lg: 'left' }} mb={{ base: 4, lg: 0 }}>
                    <Image
                        src={hebron}
                        alt="Logo"
                        w={{ base: "150px", lg: "200px" }}
                        h="auto"
                        mx={{ base: 'auto', lg: '0' }}
                    />
                </Box>

                {/* Navigation Section */}
                <Box
                    display="flex"
                    flexDirection={{ base: 'column', lg: 'row' }} 
                    alignItems="center"
                    gap={4}
                    mb={{ base: 4, lg: 0 }}
                >
                    <Text fontWeight="semibold">Home</Text>
                    <Text fontWeight="semibold">Shop By Brand</Text>
                    <Select fontWeight="semibold" placeholder="Shop By Category" w="auto">
                        <option value="generic">Generic</option>
                        <option value="supplements">Supplements</option>
                    </Select>
                    <Text fontWeight="semibold">Meet Us CMO</Text>
                    <Text fontWeight="semibold">Contact Us</Text>
                </Box>

                {/* Icons Section */}
                <Box
                    display="flex"
                    justifyContent={{ base: 'center', lg: 'flex-end' }} 
                    gap={4}
                >
                    <Icon as={CiSearch} boxSize={6} />
                    <Icon as={CiUser} boxSize={6} />
                    <Icon as={CiBag1} boxSize={6} />
                </Box>
            </Box>
            <Box
                bgImage={`url(${backgroundImage})`}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                textAlign="center"
                py={20}
                h={{ base: "80vh", md: "80vh", sm: "40vh" }}
            >
                <Heading mt={20} color="white" mb={4}>Immune Support</Heading>
                <Button bg="purple.900" color="white" size="lg">Shop Now</Button>
            </Box>
        </Box>

    );
};

export default Navbar;
