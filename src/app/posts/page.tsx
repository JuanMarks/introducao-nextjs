'use client';
import React, { useState, useEffect } from 'react';

type Post = {
    message:string
}

export default function PostsPage() {
    const [posts, setPosts] = useState<Post | null>(null);
    const fetchPosts = async () => {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        console.log('Posts carregados:', data);
        setPosts(data);
    };

    const reloadButton = () =>{
        fetchPosts()
        // window.location.reload()
    }

    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div>
            <h1 className='text-3xl text-center mb-6 font-bold'>Dogs</h1>
                <div className='flex justify-center'>
                    <img className='w-100 h-100 rounded' src={posts?.message} alt="" />
                    
                </div>
                <div className='flex justify-center'>
                    <button className=' bg-amber-800 rounded p-4 mt-2' onClick={reloadButton}>RELOAD</button>
                </div>
                
                
        </div>
    );
}