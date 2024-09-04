
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { movieInfo } from '../types'

//https://www.omdbapi.com/?i=tt0068646&apikey=775f2ad8
export default function EachMovieCard(props:movieInfo) {
    const [imageUrl, setImageUrl] = useState('');
    const findImageUrl = props.imageLink?.split('/');

    
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
    <div className=' flex justify-center items-center'>
        <Card 
            className=' shadow-2xl bg-[#343a40]'
            width='1100px'
            border='1px solid white'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            padding={10}
            borderRadius='10px'
            >
            <Image
                borderRadius='9px'
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={imageUrl}
                alt='Caffe Latte'
                width='300px'
                height='450px'
            />
            <Stack justifyContent={'center'}>
                <CardBody ml={14} mt={20}>
                <Heading size='md' className={`text-white font-bold`} fontWeight='extrabold'>{props.name}</Heading>

                <Text className='text-white opacity-90'>
                <span className='text-white font-bold text-opacity-60'>Release:</span> {props.releaseYear}
                </Text>
                <Text className='text-white opacity-90'>
                    <span className='text-white font-bold text-opacity-60'>IMDB rating:</span> {props.imdbRating}
                </Text>
                <Text className='text-white opacity-90'>
                    <span className='text-white font-bold text-opacity-60'>IMDB votes:</span> {props.imdbVotes}
                </Text>
                <Text className='text-white opacity-90'>
                    <span className='text-white font-bold text-opacity-60'>Language:</span> {props.language}
                </Text>
                <Text className='text-white opacity-90'>
                    <span className='text-white font-bold text-opacity-60'>Genre:</span> {props.genre}
                </Text>
                {/* <Text>
                    <span className='font-bold'>Cast:</span> {props.caste}
                </Text> */}
                <Text className='text-white opacity-90'>
                    <span className='text-white font-bold text-opacity-60'>Duration:</span> {props.duration}
                </Text>
                <Text className='text-white opacity-90'>
                    <span className='text-white font-bold text-opacity-60'>Director:</span> {props.director}
                </Text>
                <Text className='text-white opacity-90'>
                    <span className='text-white font-bold text-opacity-60'>Ott platform:</span> {props.ott}
                </Text>
                <Text className='text-white opacity-90'>
                    <span className='text-white font-bold text-opacity-60'>Discription:</span> {props.description}
                </Text>
                </CardBody>
            </Stack>
        </Card>
    </div>
  )
}
