import { formatDate } from '../../utils/dateFormatter';
import { FaComment, FaHeart } from 'react-icons/fa';

function TopicList({ topics, onTopicClick }) {
  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div 
          key={topic.id}
          onClick={() => onTopicClick(topic.id)}
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-primary">{topic.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{topic.preview}</p>
            </div>
            <span className="text-sm text-gray-500">{formatDate(topic.createdAt)}</span>
          </div>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <FaComment className="text-primary" />
              <span>{topic.commentCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaHeart className="text-secondary" />
              <span>{topic.likeCount}</span>
            </div>
            <span>by {topic.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopicList;
