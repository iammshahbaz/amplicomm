import React from 'react';
import { Box, Grid, Text, Input, Button, Link } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" bg="purple.900" color="white" py={12} px={16} h={{base:"100vh" ,md:"60vh"}}>
            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
                gap={4}
            >
                {/* Company Section */}
                <Box>
                    <Text fontWeight="bold" mb={2}>Company</Text>
                    <Link href="#" mb={1} display="block">Why shop with us?</Link>
                    <Link href="#" mb={1} display="block">Shipping</Link>
                    <Link href="#" mb={1} display="block">Returns</Link>
                    <Link href="#" mb={1} display="block">About us</Link>
                </Box>

                {/* Security & Privacy Section */}
                <Box>
                    <Text fontWeight="bold" mb={2}>Security & Privacy</Text>
                    <Link href="#" mb={1} display="block">Secure Website</Link>
                    <Link href="#" mb={1} display="block">PCI Compliance</Link>
                    <Link href="#" mb={1} display="block">Privacy Policy</Link>
                    <Link href="#" mb={1} display="block">Terms of service</Link>
                </Box>

                {/* Subscribe Section */}
                <Box>
                    <Text fontWeight="bold" mb={2}>Subscribe</Text>
                    <Text mb={2}>Invite customers to join your <br /> mailing list.</Text>
                    <Input w="80%" placeholder="Email address" bg="white" color="black" mb={2} />
                    <Button colorScheme="whiteAlpha" variant="outline">Sign up</Button>
                </Box>

                {/* Disclaimer Section */}
                <Box>
                    <Text fontSize="md" lineHeight="tall">
                        *Statements made on this website have not been evaluated by the U.S. Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease. Information provided by this website or this company is not a substitute for individual medical advice.
                    </Text>
                </Box>
            </Grid>
        </Box>
    );
};

export default Footer;
