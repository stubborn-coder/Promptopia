import PromptCard from "./PromptCard"

export default function PromptCardList({ data , handleTagClick }) {
        console.log(data);
    return (
    <div className='mt-16 prompt_layout'>
                  
        {data.map((post) => (
            <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
            />
      ))}
    </div> )
}