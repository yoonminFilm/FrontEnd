// 현재 사용안함
// import React from "react";
// import "./image-page.css";

// const ProjectInfoComponent = ({ title, description, images, onButtonClick }) => {
//     return (
//         <div className="content-container">
//             {/* 상단 제목 */}
//             <div className="content-header">
//                 <h1 className="content-title">{title}</h1>
//                 <p className="content-description">{description}</p>
//             </div>

//             {/* 이미지 섹션 */}
//             <div className="content-images">
//                 {images.map((img, index) => (
//                     <div className="image-wrapper" key={index}>
//                         <img src={img} alt={`Content ${index}`} className="content-image" />
//                     </div>
//                 ))}
//             </div>

//             {/* 버튼 섹션 */}
//             <div className="content-footer">
//                 <button className="content-button" onClick={onButtonClick}>
//                     Check Info
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProjectInfoComponent;