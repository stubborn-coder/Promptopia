'use clients';

import { useStage } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';


export default function PromptCard({ post, handleTagClick, handEdit, handleDellete }) {
    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 justifiy-start items-center gap-3 cursor pointer">
                    <Image 
                        src={post.creator.image}
                        alt="user_image"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />
                    <div className='flex flex-col'>
                        <h3>{post.creator.username}</h3>
                        <p>{post.creator.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}