import { useState } from 'react'
import {Email, Name, Message} from '../utils/validate'
 
function Contact() {
    return (
    <div class="main contact">
        <div class="conTitle"><u><strong>Contact</strong></u></div>
        <div class="form">
            <form class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name:</label>
                <input type="name" class="form-control" id="conName" placeholder="John Smith" onBlur={Name}></input>
            </form>
            <form class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="conEmail" placeholder="name@example.com" onBlur={Email} required></input>
            </form>
            <form class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
            <textarea class="form-control" id="conText" rows="3" placeholder="I look forward to hearing from you!" onBlur={Message}></textarea>
            </form>   
            <button type="button" class="btn btn-info">Submit</button>
        </div>
    </div>
    ) 
}

export default Contact