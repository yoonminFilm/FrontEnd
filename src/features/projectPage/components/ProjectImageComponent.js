import React from "react";
import "./image-page.css";
import ColumnImageComponent from "./ColumnImageComponents";

const ProjectImageComponent = ({ title, description, images }) => {
    // 이미지를 두 열로 분할
    const column1Images = images.filter((_, index) => index % 2 === 0);
    const column2Images = images.filter((_, index) => index % 2 !== 0);

    return (
        <>
            <div className="content-header">
                    <h1 className="content-title">{title}</h1>
                    <p className="content-description">{description}</p>
            </div>
            <div className="row-container">
                <ColumnImageComponent images={column1Images} />
                <ColumnImageComponent images={column2Images} />
            </div>
        </>
    );
};

export default ProjectImageComponent;