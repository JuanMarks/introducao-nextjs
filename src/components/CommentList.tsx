import Comment from "./Comment";

// Defina os tipos para os props do componente
type CommentData = {
    author: string;
    content: string;
    date: string;
}

type CommentListProps = {
    comments: CommentData[];
}

export default function CommentList({ comments }: CommentListProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Comentários</h2>
            {comments.length > 0 ? (
                <ul className="space-y-4">
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <Comment
                                author={comment.author}
                                content={comment.content}
                                date={comment.date}
                            />
                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">Ainda não há comentários. Seja o primeiro a comentar!</p>
            )}
        </div>
    );
}