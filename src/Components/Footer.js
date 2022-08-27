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
                    <li><a href="newsguidelines.html">Guidelines</a></li>
                    <li>|</li>
                    <li><a href="newsfaq.html">FAQ</a></li>
                    <li>|</li>
                    <li><a href="lists">Lists</a></li>
                    <li>|</li>
                    <li><a href="https://github.com/HackerNews/API">API</a></li>
                    <li>|</li>
                    <li><a href="security.html">Security</a></li>
                    <li>|</li>
                    <li><a href="http://www.ycombinator.com/legal/">Legal</a></li>
                    <li>|</li>
                    <li><a href="http://www.ycombinator.com/apply/">Apply to YC</a></li>
                    <li>|</li>
                    <li><a href="mailto:hn@ycombinator.com">Contact</a></li>
                </ul>
            	{/* <button onClick={checkUserInput}>Search</button> */}
                <label className="gray smaller">Search: </label>
                <input name="input" id="input" type="text" />
            </nav>   
        </footer>
    );
}

export default Footer;