import React, { useState } from 'react'
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SelectionList from './SelectionList';
import {BsSearch} from 'react-icons/bs'

export default function SearchBar() {

  const history= useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [seacrchType, setseacrchType] = useState('');
  const option = searchParams.get('option');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    history(`/search?query=${seacrchType}&option=${option ?? 'movieName'}`);
    setseacrchType('');
  }

  
  return (
      <form onSubmit={handleSubmit}>
        <div  className='flex flex-row justify-center items-center mt-[100px]'>
          <div className='flex justify-center  h-30px w-[130px] p-[2.2px] rounded-[7px] bg-[#495057] border-solid border-white border-[0px]'>
            <p className='text-white'>Search by</p>
          </div>
            <SelectionList/>
            <div>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<BsSearch color='white'/>}
                  padding={7}
                  paddingLeft={9}
                />
                <Input 
                  onChange={(e)=>{
                    setseacrchType(e.target.value)
                  }} 
                  value={seacrchType} 
                  name='inputType' 
                  border='0px solid white' 
                  placeholder='Search..' 
                  color={'white'}
                  width='220px' 
                  height='30px' 
                  backgroundColor={'#495057'}
                  borderRadius='7px' 
                  padding='7px' 
                  paddingLeft={35}
                  mr='7px'
                  _focus={{
                    outline:'4px solid rgba(0, 125, 250, 0.6)',
                    outlineOffset: '1px',
                  }}/>
              </InputGroup>
            </div>
            <Button className='bg-[#495057] border-solid border-white border-[0px] hover:bg-[#7a7f84] text-white' type='submit'  height='30px' borderRadius='7px' padding='14px' paddingX={19}>Search</Button>
        </div>
      </form>
  )
}
