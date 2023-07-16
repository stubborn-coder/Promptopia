"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from '@/components/profile';

export default function myProfile() {

    const { data:session } = useSession();
    const [posts, setPosts] = useState([]);

    const handleEdit = () =>{
        console.log("handle Edit");
    }

    const handleDelete = async () =>{
        console.log("handle delete");
    }

    useEffect(()=>{
        
        const fetchPosts = async ()=>{

            console.log("fetch post called");
            const response = await fetch(`/api/users/${session?.user?.id}/posts`);
            const data = await response.json();

            setPosts(data);
            console.log(posts);

        }
        
        
        if(session?.user?.id){
            fetchPosts();
        }

    },[session]);

    

   
    
    
    return (
        <Profile
            name={session?.user.name}
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}

        />
    )
}