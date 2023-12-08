import { useParams } from 'react-router-dom';
import Videos from './videos';

const VirtualHaven = () => {
    const params = useParams();
    const { videoId } = params;
    const video = Videos.find(video => Videos.name === videoId);

    return (
        <>  
        <h1>{Videos.title}</h1>
        {video.content.map(paragraph => (
            <p>{paragraph}</p>
        ))}
        </>
       
    );
};

export default VirtualHaven;