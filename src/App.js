import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

export default function App() {
  const [news, setNews] = useState([]);
  const [searchWord, setSearchWord] = useState([]);
  

  

  useEffect(() => {
	const URI = `https://hn.algolia.com/api/v1/search?query=${searchWord}`;
    fetch(URI)
      .then((res) => res.json())
      .then((data) => setNews(data.hits))
      .catch((err) => console.log(err));
  }, [searchWord]);

  console.log("News:" + news);

  //console.log("Search Word" + searchWord);

  	function checkUserInput(e){
		e.preventDefault();
		setSearchWord(document.getElementById("input").value);
  	}

	
  	return (
    	<div className="App">
			<div className="flex-row">	
      			<Header />
				<input name="input" id="input" type="text" />
            	<button onClick={checkUserInput}>Search</button>
	  		</div>
			<Main key={crypto.randomUUID()} news={news} />
			<hr/>
			
    	</div>
  	);
}