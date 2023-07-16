'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


import Form from '@/components/Form';

export default function UpdatePrompt() {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost ] = useState({
        prompt: '',
        tag:'',

    });
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');

    useEffect(()=>{
        const getPromptDetails = async () =>{ 
            console.log("editing the posts")
            const response = await fetch(`api/prompt/${promptId}`)
            const data = await response.json();
            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }

        if(promptId) getPromptDetails();
    },[promptId])

    

    // const createThePrompt = async (e) => {
    //     console.log("prompt edited");
    //     console.log(post);
    //     //save the post to db
    //     e.preventDefault();
    //     setSubmitting(true);

    //     try {
    //         const response = await fetch('api/prompt/new',
    //         {
    //             method:'POST',
    //             body: JSON.stringify({
    //                 prompt: post.prompt,
    //                 userId: session?.user.id,
    //                 tag: post.tag
    //             })
    //         })

    //         if(response.ok){
    //             router.push('/');

    //         }
    //     } catch (error) {
    //         console.log( error);

    //     } finally {
    //         setSubmitting(false);
    //     }

    // }

    return (
        <Form
            type="Edit "
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={()=>{}}
        />
    )
}