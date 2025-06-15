import React from "react";
import ProjectImageComponent from "../components/ProjectImageComponent";

const EUMonthTravelPage = () =>{
    const imageUrls = [
        // paris
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/paris1.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/paris2.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/paris3.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/paris4.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/paris5.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/paris6.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/paris7.jpg",
        // Italy
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Italy1.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Italy2.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Italy3.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Italy4.jpg",        
        // Chamonix
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Chamonix1.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Chamonix2.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Chamonix3.jpg",
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Chamonix4.jpg",
        // monaco
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/monaco1.jpg",
        //Swiss
            "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/EU25/Swiss1.jpg",

        ];

    return (
        <div className="project-container">
            {/* 이미지 배열을 props로 전달 */}
            <ProjectImageComponent 
                title="유럽 28일간의 기록" 
                description="청춘의 한달 배낭 여행기" 
                images={imageUrls} />
        </div>
    );
}

export default EUMonthTravelPage;