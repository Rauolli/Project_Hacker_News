import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

export default function App() {
  const [news, setNews] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  
  useEffect(() => {
	const URI = `https://hn.algolia.com/api/v1/search?query=${searchWord}`; // 
    fetch(URI)
      .then((res) => res.json())
      .then((data) => setNews(data.hits))
      .catch((err) => console.log(err));
  }, [searchWord]);


  function checkUserInput(e){
	e.preventDefault();
	setSearchWord(e.target.value);
  }
  	return (
    	<div className="App">
			<div className="flex-row">	
      			<Header />
	  		</div>
			<Main key={crypto.randomUUID()} news={news} word={searchWord} />
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
                {/* <input name="input" id="input" type="text" /> */}
                <label className="gray smaller">Search: </label>
                <select onChange={checkUserInput}>
                    <option value="title">Title</option>
                    <option selected value="author">Author</option>
                    <option value="created_at">Created At</option>
                    <option value="points">Points</option>
                    <option value="url">URL</option>
                </select>
            </nav>   
        </footer>

    	</div>
  	);
}