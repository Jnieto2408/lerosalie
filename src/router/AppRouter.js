import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter