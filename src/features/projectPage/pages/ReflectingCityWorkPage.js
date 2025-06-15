import React from "react";
import ProjectImageComponent from "../components/ProjectImageComponent";

const ReflectingCityWorkPage = () =>{
    const imageUrls = [
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_1_2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_4.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_5.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_6.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_7.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_8.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_9.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_10.jpg",
        ];

    const projectInfoImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_3.jpg";

    return (
        <div className="project-container">
            {/* 이미지 배열을 props로 전달 */}
            <ProjectImageComponent 
                title="Reflecting City"
                description="도시의 이면 안에 비춰지는"
                images={imageUrls} 
            />
        </div>
    );
}

export default ReflectingCityWorkPage;