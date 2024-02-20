import React from "react";
import "./style.css"
const Certificates = (props) =>{
    return(
        <div class='Certificates'>
            <ul>
                <li>
                <span>Python</span><span class="ProjectTitles"> : </span> <a class='CerticateLink' href="https://www.udemy.com/certificate/UC-26c1dcb8-656c-4e54-87c1-19bba86d30f3/" target="_blank">https://www.udemy.com/certificate/UC-26c1dcb8-656c-4e54-87c1-19bba86d30f3/</a>
                </li>
                <li>
                <span>HTML & CSS </span><span class="ProjectTitles"> : </span> <a class='CerticateLink' href="https://coursera.org/share/ca71c1697adbe5fdd2eff8276b00918b" target="_blank">https://coursera.org/share/ca71c1697adbe5fdd2eff8276b00918b</a>
                </li>
            </ul>
        </div>
    )
}

export default Certificates;