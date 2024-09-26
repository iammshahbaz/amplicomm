import { Box, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import omega from "../assets/omega3.jpeg"
import medicine from "../assets/medicine.jpg"
import heart from "../assets/heart.jpg"
import stomach from "../assets/stomach.jpg"
import liver from "../assets/liver.jpeg"
import kidney from "../assets/kidney.jpg"
import bone from "../assets/bone.jpg"
import diabetes from "../assets/diabetes.jpg"
import joint from "../assets/joint.jpg"
import nervous from "../assets/nervous.jpg"
import pureM from "../assets/pureM.png"
import health from "../assets/health.jpg"
import Featured from './Featured'


const Middle = () => {
    return (
        <Box>
            <Box bg="purple.300" p={4} mt={4} borderRadius="20px"pl={8} w="90vw" mx="auto">
                <Box display="flex" gap={2} mb={2} alignItems="center">
                    
                    {/* <Image src={man} w="auto" h="100px" /> */}
                    <Text bg="purple.900" color="white" px={2}>Care Plan</Text>
                    <Text fontWeight="semibold">Now starting at Rs. 165 for 3 months</Text>
                </Box>

                <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between">
                    <Text fontWeight="bold" textAlign={{ base: 'center', md: 'left' }} mb={{ base: 4, md: 0 }}>
                        Get extra 5% saving on your orders. Free shipping, same-day delivery and more.
                        <br />
                        Become a member today!
                    </Text>
                    <Button bg="purple.900" color="white" size="md" w={{ base: 'full', md: '20%' }}>
                        Know More
                    </Button>
                </Box>
            </Box>
            <Box pl={8} w="90vw" mx="auto" mt={4}>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                    Proven BestSellers
                </Text>
                <Box
                    display="flex"
                    flexDirection={{ base: 'column', md: 'row' }}  
                    alignItems="center"  
                    justifyContent="space-between" 
                    gap={2}
                    mb={{ base: 4, md: 0 }}
                    flexWrap="wrap" 
                >
                    <Box>
                        <Image src={pureM} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '170px' }} alt="Cellcore" borderRadius="50%" />
                        <Text fontWeight="Bold" textAlign="center">Multivitamins</Text>
                    </Box>
                    <Box>
                        <Image src={omega} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '170px' }} alt="Cellcore" borderRadius="50%" />
                        <Text fontWeight="Bold" textAlign="center">Omega3</Text>
                    </Box>
                    <Box>
                        <Image src={nervous} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '170px' }} alt="Cellcore" borderRadius="50%" />
                        <Text fontWeight="Bold" textAlign="center">Nervous System <br />Support</Text>
                    </Box>
                    <Box>
                        <Image src={health} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '170px' }} alt="Cellcore" borderRadius="50%" />
                        <Text fontWeight="Bold" textAlign="center">GastroIntestinal <br />health</Text>
                    </Box>
                    <Box>
                        <Image src={joint} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '170px' }} alt="Cellcore" borderRadius="50%" />
                        <Text fontWeight="Bold" textAlign="center">Joint Health</Text>
                    </Box>
                    <Box>
                        <Image src={omega} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '170px' }} alt="Cellcore" borderRadius="50%" />
                        <Text fontWeight="Bold" textAlign="center">HouseHold <br />Essentials</Text>
                    </Box>


                </Box>
            </Box>

            {/* health concern */}

            <Box p={8} w="90vw" mx="auto">
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                    Shop By Health Concerns
                </Text>
                <Box
                    display="flex"
                    flexDirection={{ base: 'column', md: 'row' }}  
                    alignItems="center"  
                    justifyContent="space-between" 
                    gap={2}
                    mb={{ base: 4, md: 0 }}
                    flexWrap="wrap"  
                >
                    <Box>
                        <Image src={diabetes} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '200px' }} alt="Cellcore"  borderRadius="10%" />
                        <Text fontWeight="Bold" textAlign="center" pt={4}>Diabetes</Text>
                    </Box>
                    <Box>
                        <Image src={heart} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '200px' }} alt="Cellcore"  borderRadius="10%"/>
                        <Text fontWeight="Bold" textAlign="center" pt={4}>HeartCare</Text>
                    </Box>
                    <Box>
                        <Image src={stomach} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '200px' }} alt="Cellcore" borderRadius="10%" />
                        <Text fontWeight="Bold" textAlign="center" pt={4}>Stomach Care</Text>
                    </Box>
                    <Box>
                        <Image src={liver} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '200px' }} alt="Cellcore" borderRadius="10%" />
                        <Text fontWeight="Bold" textAlign="center" pt={4}>Liver Care</Text>
                    </Box>
                    <Box>
                        <Image src={bone} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '200px' }} alt="Cellcore" borderRadius="10%" />
                        <Text fontWeight="Bold" textAlign="center" pt={4}>Bone & Joint Care</Text>
                    </Box>
                    <Box>
                        <Image src={kidney} w={{ base: '100px', md: '170px' }} h={{ base: '100px', md: '200px' }} alt="Cellcore" borderRadius="10%" />
                        <Text fontWeight="Bold" textAlign="center" pt={4}>Kidney Care</Text>
                    </Box>


                </Box>
            </Box>
            <Box pl={8} w="90vw" mx="auto">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                    Deal of the Day
                </Text>
            
            </Box>
            <Featured/>

            

        </Box>

    )
}

export default Middle
