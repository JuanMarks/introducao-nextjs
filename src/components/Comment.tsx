

type CommentProps = {
    author: string;
    content: string;
    date: string;
}

export default function Comment({ author, content, date }: CommentProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <p className="text-gray-700">{content}</p>
            <span className="text-sm text-gray-500 block mt-2">{author} - {date}</span>
        </div>
    );
}