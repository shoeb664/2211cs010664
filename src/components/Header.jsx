import React from 'react';
import "./style.css";
const Header = (props) => {
    const {p_info }=props;
 return (
    <>
        <div class="final">
            <div class='info'>
                <h3 style={{ fontSize: 40 }}>{p_info.name}</h3>
                <p style={{ fontSize: 16 }}><img class='header' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075clftr.png&f=1&nofb=1&ipt=938d58f21fbb7b098ace1349a648590bdf2b30725cf8f027d5dcc15284d592f4&ipo=images'></img> {p_info.email}</p>
                <p style={{ fontSize: 16 }}><img class='header' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-phone-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596098aomr5.png&f=1&nofb=1&ipt=19b17432e9b15491c7b7f88df99299fb6ff5da7b3988718ed7cdf46481d952a9&ipo=images'></img> {p_info.phoneNo}</p>
                <p style={{ fontSize: 16 }}><img class='header' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconpacks.net%2Ficons%2F2%2Ffree-location-icon-2955-thumb.png&f=1&nofb=1&ipt=2bdbc1c6969e1599beb65763b02cb475a129496d3c201e1faba56d4b6ec87e82&ipo=images'></img>  {p_info.location}</p>
            </div>
        </div>
        </>
 );
} 
export default Header;