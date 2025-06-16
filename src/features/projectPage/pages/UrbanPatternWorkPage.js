import React,{useEffect,useState} from "react";
import ProjectImageComponent from "../components/ProjectImageComponent";

const UrbanpatternWorkPage = () =>{
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        fetch("/imageJson/urbanpattern.json")
            .then((res) => res.json())
            .then((data) => setImageData(data))
            .catch((err) => console.error("JSON 로딩 실패:", err));
    }, []);

    if (!imageData) return <div>Loading...</div>;

    // 모든 이미지를 하나의 배열로 합치기
    const allImages = Object.values(imageData.images).flat();

    return (
        <div className="project-container">
            <ProjectImageComponent 
                title={imageData.title} 
                description={imageData.description} 
                images={allImages} 
            />
        </div>
    );
}

export default UrbanpatternWorkPage;