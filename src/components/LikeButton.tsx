import React from 'react'

export default function LikeButton() {
    const [liked, setLiked] = React.useState(0);

    return (
        <button
            onClick={() => setLiked(liked + 1)}
            className={`px-4 py-2 rounded ${liked > 0 ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
        >
            {liked > 0 ? `❤️ ${liked}` : '🤍'}
        </button>
    );
}