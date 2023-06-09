import React from 'react';
import {Stack} from '@mui/material';
import {categories} from '../utils/constants';
import '../../src/index.css'


const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack 
        direction="row"
        sx={{
            overflowY: 'auto',
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'},
        }}
    >
    {categories.map((category) => (
        <button className='category-btn'
        onClick={() => setSelectedCategory(category.name)}
        style={{
            background: category.name === selectedCategory && '#ff6700', 
            color: 'white'
        }}
        key={category.name}
        >
            <span style={{color: category.name === selectedCategory ? 'white' : '#ff6700', marginRight: '15px'}}>{category.icon}</span>
            <span style={{color: category.name === selectedCategory ? 'white' : '#ff6700'}}>{category.name}</span>
        </button>
    ))}  
    </Stack>
  )
}

export default Sidebar