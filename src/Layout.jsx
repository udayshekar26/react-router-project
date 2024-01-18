import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";

export default function() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}