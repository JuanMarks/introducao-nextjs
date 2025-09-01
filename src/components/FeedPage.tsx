'use client'
import { use, useState } from "react"
import PostCard from "./PostCard"
type Feed = {
    id: number;
    title: string;
    content: string;
    imageUrl?: string;
    numberOfLikes: number;
    isLiked: boolean;
}

const feedsOriginais: Feed[] = [
    {
        id: 1,
        title: "Feed 1",
        content: "Conteúdo do Feed 1",
        numberOfLikes: 0,
        isLiked: false
    },
    {
        id: 2,
        title: "Feed 2",
        content: "Conteúdo do Feed 2",
        numberOfLikes: 0,
        isLiked: false
    },
    {
        id: 3,
        title: "Feed 3",
        content: "Conteúdo do Feed 3",
        numberOfLikes: 0,
        isLiked: false
    }
]

export default function FeedPage(){
    const [dadosFeeds, setDadosFeeds] = useState<Feed[]>(feedsOriginais)

    const [searchId, setSearchId] = useState<string>("")

    const handleSearch = (value: string) => {
        setSearchId(value)
        if (value === "") {
            setDadosFeeds(feedsOriginais)
        } else {
            const id = Number(value)
            if (!isNaN(id)) {
                const post = feedsOriginais.find(feed => feed.id === id)
                console.log(post)
                setDadosFeeds(post ? [post] : [])
            }
        }
    }

    const incrementLike = (id: number) => {
        const post = feedsOriginais.find(feed => feed.id === id)
        if (post) {
            post.numberOfLikes += 1;
            post.isLiked = true;
            setDadosFeeds([...dadosFeeds]);
        }
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Feed Page</h1>
            <input
                type="number"
                placeholder="Buscar post por ID"
                className="border border-gray-300 p-2 rounded"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="space-y-4">
                {dadosFeeds.map(feed => (
                    <PostCard key={feed.id} feed={feed} NumberOfLikes={() => incrementLike(feed.id)} />
                ))}
            </div>
        </div>
    )
}