import { AspectRatio, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { movieCardData } from '../types'
import { motion } from 'framer-motion';

//https://www.omdbapi.com/?i=tt0068646&apikey=775f2ad8

export default function  MovieCard(props:movieCardData) {
    const [imageUrl, setImageUrl] = useState('');
    const findImageUrl = props.imageLink.split('/');

    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };

    const forImage = async () => {
        const resForImage = await fetch(`https://www.omdbapi.com/?i=${findImageUrl[4]}&apikey=775f2ad8`);
        const dataForImage = await resForImage.json();
        return dataForImage;
    }

    useEffect(() => {
        forImage().then((data) => {
            setImageUrl(data.Poster);
        })
    }, []);
    
  return (
    //use framer motion for animation
    <>
        <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        style={{ width: "300px", margin: "20px" ,zIndex:'10'}}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}>
            <Card position={'relative'} maxW='sm' m={10} className='shadow-2xl border-opacity-60 bg-[#40454b]' width='300px' border='1px solid #40454b' _hover={{border:'1px solid white'}} padding={14} borderRadius='7px'>
                <CardBody marginBottom={50} >
                <AspectRatio maxW='400px' ratio={2 / 3} maxH='350px' >
                    <Image style={{
                        filter: isHovered ? 'brightness(0.6)' : 'brightness(1)',
                        transition: 'filter 0.2s ease-in-out',
                    }}  borderRadius='5px' src={imageUrl} alt={props.name} objectFit='cover' />
                </AspectRatio>
                    <Stack alignContent={'center'} textAlign={'center'} mt='6' spacing='3'>
                    <Heading className='font-[700] text-white ' fontSize='17px' >{props.name}</Heading>
                    {isHovered && (
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                            <Text className='text-white font-bold text-opacity-90'>
                                <span className='text-white font-bold text-opacity-60'>Release:</span> {props.releaseYear}
                            </Text>
                            <Text className='text-white font-bold text-opacity-90'>
                                <span className='text-white font-bold text-opacity-60'>IMDB rating:</span> {props.imdbRating}
                            </Text>
                            <Text className='text-white font-bold text-opacity-90'>
                                <span className='text-white font-bold text-opacity-60'>IMDB votes:</span> {props.imdbVotes}
                            </Text >
                            <Text className='text-white font-bold text-opacity-90'>
                                <span className='text-white font-bold text-opacity-60'>Language:</span> {props.language}
                            </Text>
                            <Text className='text-white font-bold text-opacity-90'>
                                <span className='text-white font-bold text-opacity-60'>Genre:</span> {props.genre}
                            </Text>
                        </motion.div>
                    )}
                    
                    </Stack>
                </CardBody>
                <Divider />

                {isHovered && (
                    <CardFooter  mt='6px' display={'flex'} className='text-white' justifyContent={'center'} >
                        <ButtonGroup position={'absolute'} bottom={10} alignContent={'flex-end'} spacing='2'>
                            <Link to={`/movie/${props.movieId}`}>
                                <Button   alignSelf={'center'}  variant='solid' width='280px' className='hover:bg-[#6a7ae3] hover:border-[#6a7ae3] bg-[#212529]' colorScheme='blue' padding='5px' borderRadius='7px'>
                                    Get more details
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                )}
            </Card>
        </motion.div>
    </>
  )
}
