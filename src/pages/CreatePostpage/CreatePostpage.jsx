import axios from "axios";
import React, { useState } from "react";

export default function CreatePostpage() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const createPost = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:3002/api/posts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            setMessage(response.data.message || 'Post created successfully')
            setTitle('')
            setContent('')
            setImage(null)
            setError('')
        }catch(e){
            setError('Failed to create post.')
        }
    }

    return(
    <div className="flex flex-col gap-6 max-w-xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Создать пост</h2>
        <form onSubmit={createPost} className="flex flex-col gap-4">
            <div>
                <label className="block mb-1 font-medium">Заголовок</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>
            <div>
                <label className="block mb-1 font-medium">Содержание</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows={6}
                    className="w-full border rounded px-3 py-2"
                />
            </div>
            <div>
                <label className="block mb-1 font-medium">Изображение</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0])}
                    className="block mb-1 font-medium bg-black text-amber-50 border rounded px-3 py-2 rounded-2xl"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
            >
                Создать
            </button>
        </form>
        {error && <div className="text-red-600">{error}</div>}
        {message && <div className="text-green-600">{message}</div>}
    </div>
);
}