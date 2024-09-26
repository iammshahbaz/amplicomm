import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import block from "../assets/block.jpg";

const Body = () => {
    return (
        <Box p={8} w="90vw" mx="auto" mt={4}>
            <Box
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}  
                alignItems={{ base: 'center', md: 'flex-start' }}  
                justifyContent="space-between"  
                gap={4}  
                mb={{ base: 4, md: 0 }}  
                flexWrap="wrap"  
            >
                <Image
                    src={block}
                    alt="Description of the image"
                    boxSize={{ base: '100%', md: 'auto' }} 
                    objectFit="contain"  
                    mb={{ base: 4, md: 0 }} 
                    h={{ base: "250px", md: "80vh" }}
                    borderRadius="10%"
                />
                <Box
                    display="flex"
                    flexDirection="column"  
                    justifyContent="center"  
                    maxWidth={{ base: '100%', md: '50%' }} 
                >
                    <Text
                        fontSize={{ base: 'sm', md: 'lg' }}  
                        textAlign={{ base: 'center', md: 'left' }} 
                        mb={4}  
                    >
                        <span style={{ fontSize: "25px", fontWeight: "bold" }}>Lorem ipsum heading main patterns</span> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus officia natus sint eveniet aliquid nemo optio, ea, odit itaque quae labore expedita? Soluta, porro laboriosam aperiam molestiae officia corporis. Eaque vero, eius autem soluta nesciunt debitis possimus odio fuga porro animi repudiandae magni? Quisquam eaque perspiciatis vel at ex dicta alias culpa beatae libero ipsam aut odio, natus eligendi blanditiis fugiat enim, temporibus fuga ut quasi eos in consequuntur! Adipisci, placeat sunt! Nemo voluptate soluta est quos dolor voluptatum nostrum quia quae earum dicta aliquid, dignissimos quod tenetur ipsum optio tempore obcaecati. Sed, sit et enim non alias culpa.oluptatem voluptatibus officia natus sint eveniet aliquid nemo optio, ea, odit itaque quae labore expedita? Soluta, porro laboriosam aperiam molestiae officia corporis. Eaque vero, eius autem soluta nesciunt debitis possimus odio fuga porro animi repudiandae magni
                    </Text>
                    <Button bg="purple.800" color="white" size="md" w="250px" mt={4}>Lorem Ipsum</Button>
                </Box>
            </Box>
            <Box mt={8} position="relative" height="70vh" width="100%" overflow="hidden" borderRadius="10px" >
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Q1sT3sbVcQw"
                    title="Spiritual - 10 Ways to improve your mental health | Best Video on Mental Health"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            </Box>

        </Box>
    );
};

export default Body;
