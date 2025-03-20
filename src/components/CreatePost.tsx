import { useState } from "react";
import { supabase } from "../supabase-client";
import { useMutation } from "@tanstack/react-query";

interface PostInput {
  title: string;
  content: string;
}

const createPost = async (post: PostInput) => {
  const { data, error } = await supabase.from("posts").insert(post);

  if (error) throw new Error(error.message);

  return data;
};

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { mutate } = useMutation({ mutationFn: createPost });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate({ title, content });
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <div>
        <label htmlFor="title" className="block mb-2 font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-white/10 bg-transparent p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block mb-2 font-medium">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-white/10 bg-transparent p-2 rounded"
          rows={5}
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block mb-2 font-medium">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="w-full text-gray-200"
        />
      </div>
      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
