"use client";  // Ensuring that this is a client-side component

import React, { useState } from 'react';
import axios from 'axios';

// Define the Paper type
interface Paper {
    title: string;
    summary: string;
    link: string;
}

const Page: React.FC = () => {
    const [query, setQuery] = useState('');
    const [summarizedPapers, setSummarizedPapers] = useState<Paper[]>([]);
    const [error, setError] = useState<string | null>(null);  // State for error handling
    const [loading, setLoading] = useState(false);  // State for loading indicator

    // Function to handle the form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);  // Reset previous errors
        setLoading(true);  // Show loading indicator
        try {
            const response = await axios.post("http://localhost:8000/api/summarize/", { query });
            setSummarizedPapers(response.data.summaries);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Check if it's an Axios error and show the message
                setError(error.response?.data.detail || "An unknown error occurred");
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);  // Hide loading indicator
        }
    };

    return (
        <div style={{ 
            backgroundImage: 'url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXh5MDd4cjY2ODZ3MWp0ZTZ6ZmtnZzc1NHI3MjQ2ZzdnY3pocXI3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/doXBzUFJRxpaUbuaqz/giphy.gif)', // Add the GIF as background
            backgroundSize: 'cover', // Cover the entire area
            backgroundPosition: 'center', // Center the background image
            color: '#E0FFFF', 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontFamily: 'Arial, sans-serif' 
        }}>
            {/* Header */}
            <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1 style={{ 
                    fontSize: '3rem', 
                    textShadow: '0 0 5px cyan, 0 0 10px cyan', 
                    margin: '0' 
                }}>Ragarxiv</h1>
                <p style={{ fontSize: '1.2rem' }}>Enter a research topic, and get a summary of related academic papers!</p>
            </header>

            {/* Form Section */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter research topic"
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid cyan',
                        marginBottom: '10px',
                        width: '300px',
                        backgroundColor: '#1E1E1E',
                        color: '#E0FFFF',
                        transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'cyan'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'cyan'}
                />
                <button type="submit" style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: 'cyan',
                    color: '#121212',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, transform 0.3s',
                    fontSize: '1rem',
                }} 
                disabled={loading}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00FFFF'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'cyan'}
                onClick={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onAnimationEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    {loading ? "Summarizing ..." : "Get Summary"}
                </button>
            </form>

            {/* Error Message */}
            {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

            {/* Summarized Papers Section */}
            <div style={{ marginTop: '20px', width: '80%', maxWidth: '600px' }}>
                {summarizedPapers.map((paper, index) => (
                    <div key={index} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#2E2E2E', borderRadius: '5px' }}>
                        <h2 style={{ fontSize: '1.5rem', margin: '0' }}>{paper.title}</h2>
                        <p>{paper.summary}</p>
                        <a href={paper.link} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;