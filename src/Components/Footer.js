import { useState } from "react";
const Footer = ()=>{
    const [searchWord, setSearchWord] = useState('');

    function checkUserInput(e){
		e.preventDefault();
		setSearchWord(document.getElementById("input").value);
  	}

    return(
        <footer className="footer">
            <h3><a href="https://www.ycombinator.com/apply/">Applications are open for YC Winter 2023</a></h3>
            <nav>
                <ul>
                    <li>Guidelines</li>
                    <li>|</li>
                    <li>FAQ</li>
                    <li>|</li>
                    <li>Lists</li>
                    <li>|</li>
                    <li>API</li>
                    <li>|</li>
                    <li>Security</li>
                    <li>|</li>
                    <li>Legal</li>
                    <li>|</li>
                    <li>Apply to YC</li>
                    <li>|</li>
                    <li>Contact</li>
                </ul>
            	<button onClick={checkUserInput}>Search</button>
                <input name="input" id="input" type="text" />
            </nav>   
        </footer>
    );
}

export default Footer;