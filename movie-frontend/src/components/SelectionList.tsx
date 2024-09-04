import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SelectionList() {
  const history= useNavigate();
  const [option, setoption] = useState('')

  return (
    <div> 
      <Select 
      onChange={(e)=>{
        setoption(e.target.value);
        history(`?option=${e.target.value}`);
        // router.push(`?option=${e.target.value}`);
      }} 
      // border='1px solid white' 
      height='30px' 
      borderRadius='7px' 
      padding='7px' 
      placeholder='Select option' 
      backgroundColor={'#495057'}
      color={'white'}
      icon={'none'}
      className='active:ring-1 active:ring-black-500 px-2'
      _focus={{
        // color: 'white',
        outline:'4px solid rgba(0, 125, 250, 0.6)',
        outlineOffset: '1px',
      }}
      >
        <option value='movieName'>Movie name</option>
        <option value='imdbRating'>Imdb Rating</option>
        <option value='genre'>Gener</option>
        <option value='director'>Director Name</option>
        <option value='ottPlatform'>Ott Platform</option>
      </Select>
    </div>
  )
}
