"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@/components/profile';

export default function myProfile() {

    const { data:session } = useSession();
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    const handleEdit = (post) =>{
        console.log("handle Edit");
       if(post._id){
        router.push(`/update-prompt?id=${post._id}`);
       }

    }

    const handleDelete = async (post) =>{
        console.log("handle delete");
        const hasConfirmed = confirm("Are you sure you want to delete this prompt");

        if(hasConfirmed){
            try {
                await fetch(`api/prompt/${post._id.toString().trim()}`, {
                    method:'DELETE'
                })
                const filteredPosts = posts.filter((p)=> 
                    p._id !== post._id
                )

                setPosts(filteredPosts);
            } catch (error) {
                console.log(error);
            }
        }
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

    },[session?.user.id]);

    

   
    
    
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