import { useState } from 'react';
import { formatDate } from '../../utils/dateFormatter';
import { FaHeart, FaReply } from 'react-icons/fa';
import CommentList from './CommentList';

function TopicDetail({ topic, onLike, onComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onComment(comment);
    setComment('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">{topic.title}</h2>
          <div className="flex items-center gap-2 mt-2">
            <img
              src={topic.authorAvatar}
              alt={topic.author}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-medium">{topic.author}</div>
              <div className="text-sm text-gray-500">{formatDate(topic.createdAt)}</div>
            </div>
          </div>
        </div>
        <button
          onClick={onLike}
          className="flex items-center gap-1 text-gray-600 hover:text-secondary"
        >
          <FaHeart className={topic.isLiked ? 'text-secondary' : ''} />
          <span>{topic.likeCount}</span>
        </button>
      </div>

      <div className="prose max-w-none mb-6">
        <p className="text-gray-700">{topic.content}</p>
      </div>

      <div className="border-t pt-6">
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary min-h-[100px]"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 flex items-center gap-2"
          >
            <FaReply /> Reply
          </button>
        </form>

        <CommentList comments={topic.comments} onLikeComment={topic.onLikeComment} />
      </div>
    </div>
  );
}

export default TopicDetail;
