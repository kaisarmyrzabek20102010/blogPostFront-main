import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const sendData = async (e) => {
        e.preventDefault()
        setError('')
        setMessage('')

        try {
            const response = await axios.post('http://localhost:3002/api/login', {
                username,
                password
            })

            localStorage.setItem('token', response.data.token)
            setMessage('Сен сәтті кірдің!')
            setUsername('')
            setPassword('')
            navigate('/')
        } catch (e) {
            setError('Қате шықты: Пайдаланушы аты немесе құпия сөз дұрыс емес')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-500">login</h1>
                {message && (
                    <div className="mb-4 text-center text-green-600 font-semibold">{message}</div>
                )}
                {error && (
                    <div className="mb-4 text-center text-red-600 font-semibold">{error}</div>
                )}
                <form onSubmit={sendData} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        login
                    </button>
                </form>
            </div>
        </div>
    )
}
