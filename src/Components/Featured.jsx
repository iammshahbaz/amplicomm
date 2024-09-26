import React from 'react';
import { Box, Image, Text, Button, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import Bottle from "../assets/Bottle.jpg";
import man from "../assets/man.jpg";

const featuredProducts = [
    {
        name: "Arterosil HP by Calroy",
        price: "Rs. 99.00",
        image: Bottle,
        oldPrice: null,
    },
    {
        name: "Allergy Research Group Nattokinase",
        price: "Rs. 84.00",
        oldPrice: "Rs. 115.99",
        image: Bottle, 
    },
    {
        name: "Nordic Naturals ProOmega 2000",
        price: "Rs. 62.44 - Rs. 112.99",
        oldPrice: null,
        image: Bottle, 
    },
    {
        name: "Pure Encapsulations Magnesium",
        price: "Rs. 30.36 - Rs. 97.44",
        oldPrice: null,
        image: Bottle,
    },
    {
        name: "Pure Encapsulations O.N.E Multivitamin",
        price: "Rs. 26.76",
        oldPrice: null,
        image: Bottle, 
    },
];

const Featured = () => {
   
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 5 });
    const imageSize = useBreakpointValue({ base: '100px', md: '150px' });

    return (
        
        <Box pl={8} w="90vw" mx="auto">
           
            <SimpleGrid columns={columns} spacing={10} justifyItems="center" alignItems="stretch">
                {featuredProducts.map((product, index) => (
                    <Box
                        key={index}
                        borderWidth="2px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={4}
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            boxSize={imageSize}
                            objectFit="contain"
                            mx="auto"
                            mb={4}
                        />
                        <Text fontWeight="bold" fontSize="sm" mb={2} textAlign="left" px={2}>
                            {product.name}
                        </Text>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            {product.oldPrice && (
                                <Text as="s" color="blue.900" fontWeight="bold" fontSize="sm">
                                    {product.oldPrice}
                                </Text>
                            )}
                            <Text fontSize="sm" color="red.500" fontWeight="bold" mb={4}>
                                {product.price}
                            </Text>
                        </Box>
                        <Button bg="purple.900" color="white" size="md" mt="auto">
                            Add to Cart
                        </Button>
                    </Box>
                ))}
            </SimpleGrid>

           
        </Box>
    );
};

export default Featured;
