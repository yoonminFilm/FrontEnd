import React from "react";
import ProjectImageComponent from "../components/ProjectImageComponent";
import ProjectInfoComponent from "../components/ProjectInfoComponent";

const PortraitSnapWorkPage = () =>{
    const imageUrls = [
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/sunmin_hapjung_0.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/sumin_hapjung_1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/sumin_hapjung_2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/sumin_hapjung_3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/sumin_hapjung_4.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/sumin_olympic_1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/sumin_olympic_2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/sumin_olympic_3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/wedding_1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/wedding_2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/wedding_3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/wedding_4.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/wedding_5.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/zaosun_1.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/zaosun_2.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/zaosun_3.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/zaosun_4.jpg",
        "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectSnapWork/zaosun_5.jpg",
        
        ];

    const projectInfoImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/ProjectReflectingCityWork/reflecting_3.jpg";

    return (
        <div className="project-container">
            {/* 이미지 배열을 props로 전달 */}
            <ProjectImageComponent images={imageUrls} />
            {/* <ProjectInfoComponent title="Reflecting City" description="example" images={projectInfoImg}  onButtonClick="example" /> */}
        </div>
    );
}

export default PortraitSnapWorkPage;