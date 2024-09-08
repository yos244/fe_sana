import React, { useState } from 'react';

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', imageFile);

        try {
            setLoading(true); // Start loading indicator

            const response = await fetch('http://localhost:5038/api/store_db/cards', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log(data);

            // Handle success (e.g., display success message)
        } catch (error) {
            console.error('Error:', error);

            // Handle error (e.g., display error message)
        } finally {
            setLoading(false); // Stop loading indicator
            window.location.reload(); // Refresh the page after submission
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="file"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Uploading...' : 'Submit'}
            </button>
        </form>
    );
};

export default Form;
