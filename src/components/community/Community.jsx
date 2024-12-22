import { useState } from 'react';
import TopicList from './TopicList';
import TopicForm from './TopicForm';
import TopicDetail from './TopicDetail';

function Community() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "What's your favorite classic novel?",
      preview: "Let's discuss timeless literature and share our favorite classic novels...",
      author: "Jane Smith",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      createdAt: new Date('2024-02-20'),
      commentCount: 15,
      likeCount: 23,
      content: "I've been diving into classic literature lately and would love to hear everyone's favorite classic novels. Mine is Pride and Prejudice by Jane Austen. The way she captures social dynamics and human nature is incredible. What's yours?",
      comments: [
        {
          id: 1,
          author: "John Doe",
          authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
          content: "Great topic! My favorite is 1984 by George Orwell.",
          createdAt: new Date('2024-02-21'),
          likeCount: 5,
          isLiked: false
        }
      ],
      isLiked: false
    }
  ]);

  const handleNewTopic = (topicData) => {
    const newTopic = {
      id: topics.length + 1,
      ...topicData,
      author: "Current User",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
      createdAt: new Date(),
      commentCount: 0,
      likeCount: 0,
      comments: [],
      isLiked: false
    };
    setTopics([newTopic, ...topics]);
  };

  const handleTopicLike = (topicId) => {
    setTopics(topics.map(topic => {
      if (topic.id === topicId) {
        return {
          ...topic,
          likeCount: topic.isLiked ? topic.likeCount - 1 : topic.likeCount + 1,
          isLiked: !topic.isLiked
        };
      }
      return topic;
    }));
  };

  const handleComment = (topicId, content) => {
    setTopics(topics.map(topic => {
      if (topic.id === topicId) {
        const newComment = {
          id: topic.comments.length + 1,
          author: "Current User",
          authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
          content,
          createdAt: new Date(),
          likeCount: 0,
          isLiked: false
        };
        return {
          ...topic,
          comments: [...topic.comments, newComment],
          commentCount: topic.commentCount + 1
        };
      }
      return topic;
    }));
  };

  return (
    <div id="community" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          Community Discussions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {selectedTopic ? (
              <div>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="mb-4 text-primary hover:underline"
                >
                  ← Back to Discussions
                </button>
                <TopicDetail
                  topic={selectedTopic}
                  onLike={() => handleTopicLike(selectedTopic.id)}
                  onComment={(content) => handleComment(selectedTopic.id, content)}
                />
              </div>
            ) : (
              <TopicList
                topics={topics}
                onTopicClick={(id) => setSelectedTopic(topics.find(t => t.id === id))}
              />
            )}
          </div>

          <div>
            <TopicForm onSubmit={handleNewTopic} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
