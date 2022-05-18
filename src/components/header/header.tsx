import React from "react";
import './style.css';


export const Header = ({ message }: { message: string }) => <header className="App-header">
    <div>Hello Django: {message}</div>
</header>;