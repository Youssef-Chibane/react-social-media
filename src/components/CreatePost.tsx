const CreatePost = () => {
  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" id="title" required />
      </div>
      <div>
        <label>Content</label>
        <textarea id="content" required rows={5} />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
