import React from 'react';

function Header(){
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="navbar-brand" id="title-name">Cameron Findlay</div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="/about">About Me <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/resume">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header