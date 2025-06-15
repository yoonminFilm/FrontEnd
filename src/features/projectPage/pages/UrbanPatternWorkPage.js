import React from "react";
import ProjectImageComponent from "../components/ProjectImageComponent";

const UrbanpatternWorkPage = () =>{
    const imageUrls = [
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_4.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_5.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_6.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_7.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_8.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_9.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_10.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_11.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_12.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_13.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_14.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_15.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_16.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_17.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_18.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_19.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_20.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_21.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_22.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_23.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_24.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectUrbanPatternWork/urbanpattern_25.jpg",
        ];

    return (
        <div className="project-container">
            {/* 이미지 배열을 props로 전달 */}
            <ProjectImageComponent 
                title="UrbanPattern"
                description="도시의 숨은 패턴들"
                images={imageUrls} 
            />
        </div>
    );
}

export default UrbanpatternWorkPage;