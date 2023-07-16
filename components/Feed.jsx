'use client';

import { useState, useEffect } from 'react';

import PromptCardList from './PromptCardList';


export default function Feed() {
    const [searchText, setSearchText ] = useState('');
    const [posts, setPosts] = useState([])
    const handleSearchChange = (e) =>{
        
    }
    useEffect(() =>{
        const fetchPosts = async () => {
            const response = await fetch('api/prompt');
            const data = await response.json();

            setPosts(data);

        }
        fetchPosts();
    },[])


    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input 
                    type='text'
                    placeholder='Search a tag or a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required 
                    className='search_input peer'
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={()=>{}}
            />
        </section>
    )
}