import React from "react";
import { CloseButton } from "react-bootstrap";
import "./styles/overlay.css";

const OverlayViewPage = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null; // 오버레이가 보이지 않을 때 아무것도 렌더링하지 않음

    return (
        <div className="overlay">
            <div className="overlay-content">
                <CloseButton className="close-icon" onClick={onClose} />
                <div className="overlay-scrollable">
                {children}
                </div>
            </div>
        </div>
    );
};

export default OverlayViewPage;