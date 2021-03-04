import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../styles/loader.css";

const Loader = ()=> {
    return (
        <div className="loader-container">
            <Spinner  animation="border" variant="warning" />
            <span><h3>Loading recipes...</h3></span>
        </div>
    );
};
export default Loader;