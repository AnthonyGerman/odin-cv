import React, { useState } from "react";
import App from "./App";

export default function Greeting() {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        schoolName: '',
        title: '',
        date: '',
        companyName: '',
        positionTitle: ''
    });

    function handleInfoChange(e) {
        setInfo({ ...info, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return <>
        <div>Name: {info.name}</div>
        <div>Email: {info.email}</div>
        <div>Phone Number: {info.phoneNumber}</div>
        <div>School Name: {info.schoolName}</div>
        <div>Title: {info.title}</div>
        <div>Company Name: {info.companyName}</div>
        <div>Position Title: {info.positionTitle}</div>
        <App submit={handleSubmit} infoChange={handleInfoChange}/> 
    </>
    
}
