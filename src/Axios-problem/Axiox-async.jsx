import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosProblem() {
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=6');
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        loadPhotos();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Photos</h1>
            {photos.map(photo => (
                <div key={photo.id} style={{ marginBottom: "20px" }}>
                    <p>By: {photo.author}</p>
                    <img src={photo.download_url} alt={photo.author} width="400" />
                </div>
            ))}
        </div>
    );
} 