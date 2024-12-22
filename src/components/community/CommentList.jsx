import { formatDate } from '../../utils/dateFormatter';
import { FaHeart } from 'react-icons/fa';

function CommentList({ comments, onLikeComment }) {
  return (
    <div className="space-y-4 mt-4">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <img
                src={comment.authorAvatar}
                alt={comment.author}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">{comment.author}</span>
            </div>
            <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
          </div>
          <p className="mt-2 text-gray-700">{comment.content}</p>
          <button
            onClick={() => onLikeComment(comment.id)}
            className="flex items-center gap-1 mt-2 text-sm text-gray-600 hover:text-secondary"
          >
            <FaHeart className={comment.isLiked ? 'text-secondary' : ''} />
            <span>{comment.likeCount}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
