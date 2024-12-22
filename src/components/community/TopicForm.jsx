import { useState } from 'react';

function TopicForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Start a New Discussion</h3>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Discussion title"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary min-h-[120px]"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
        >
          Post Discussion
        </button>
      </div>
    </form>
  );
}

export default TopicForm;
