import React from "react";
import ProjectImageComponent from "../components/ProjectImageComponent";

const FilmDigitalWorkPage = () =>{
    const imageUrls = [
        // snow
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/snow1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/snow2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/snow3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/snow4.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/snow5.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/snow6.jpg",
        // green 
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/green.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/green2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/green3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/green4.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/green5.jpg",
        // sky
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/sky1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/sky2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/sky3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/sky4.jpg",
        //square
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/square1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/square2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/suqare2.jpg",
        // reflecting 
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/reflecting1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectDigitalWork/reflecting2.jpg",
        

        ];

    return (
        <div className="project-container">
            {/* 이미지 배열을 props로 전달 */}
            <ProjectImageComponent 
                title="Original Film work"
                description="사랑으로"
                images={imageUrls} 
            />
        </div>
    );
}

export default FilmDigitalWorkPage;