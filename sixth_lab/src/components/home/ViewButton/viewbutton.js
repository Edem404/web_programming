import React from "react";
import { ViewWrapper } from "./viewbutton.styled";

const ViewButton = ({ onClick }) => {
    return (
        <ViewWrapper>
            <a href='/' onClick={(e) => { e.preventDefault(); onClick(); }}>
                View More
            </a>
        </ViewWrapper>
    );
}

export default ViewButton