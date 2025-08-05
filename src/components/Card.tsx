
interface cardPorps {
    title: string,
    description: string,
    imageUrl?: string,
}

export function Card({ title, description, imageUrl }: cardPorps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
        
    )
}