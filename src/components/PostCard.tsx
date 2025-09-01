import { number } from "zod/v4-mini";



type Feed = {
    id: number;
    title: string;
    content: string;
    imageUrl?: string;
    numberOfLikes: number;
    isLiked: boolean;
}

type props = {
    feed: Feed
    NumberOfLikes: () => void
}

export default function PostCard({ feed, NumberOfLikes }: props) {
    

    return (
        // Card dos Posts em uma rede social 
        <div className="bg-white shadow-md rounded-lg p-6">
            {feed.imageUrl && <img src={feed.imageUrl} alt={feed.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />}
            <h3 className="text-xl font-semibold mb-2">{feed.title}</h3>
            <p className="text-gray-700">{feed.content}</p>
            <div className="flex items-center mt-4">
                <button onClick={NumberOfLikes} className={`px-4 py-2 rounded cursor-pointer ${feed.isLiked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {feed.isLiked ? 'Liked' : 'Like'}
                </button>
                <span className="text-gray-600 ml-2">{feed.numberOfLikes} Likes</span>
            </div>
        </div>
    )
}