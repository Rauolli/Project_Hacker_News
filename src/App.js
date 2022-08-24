import { useState, useEffect } from "react";

export default function App() {
  const [news, setNews] = useState([]);
  const [searchWord, setSearchWord] = useState([]);

  const URI = `https://hn.algolia.com/api/v1/search?query=${searchWord}`;

  useEffect(() => {
    fetch(URI)
      .then((res) => res.json())
      .then((data) => setNews(data.hits))
      .catch((err) => console.log(err));
  }, []);

  console.log(news);

  console.log(searchWord);

  function checkUserInput(e) {
    e.preventDefault();
    setSearchWord(document.getElementById("input").value);
	}
	function shortUrl (url) {
		if (url) {
			let parts = url.split("//");
			let subpart = parts[1].split("/");
			return subpart[0].replace("www.", "");

		}
	}
	function showAllMessages(n){
		//console.log(n);
		let news = [];
	
		for (let item in n) {
			news.push(` ${n[item]}`); // ${item}
		}
		return news;
	}

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input name="input" id="input" type="text" />
      <button onClick={checkUserInput}>Search</button>
			<hr/>
			<ol className="table-row">
      {news.map((nachricht) => ( 
        
				<>					
				<p>{nachricht[searchWord]}</p>

				<li><a href={nachricht["url"]}>{nachricht["title"]}</a> (<a href={nachricht["url"]}>{shortUrl(nachricht["url"])}</a>)
				<br/>{nachricht["points"]} points {nachricht["author"]} {nachricht["created_at"]} {nachricht["num_comments"]}</li>	
				</>
			))}
			{/* {news.map((nachricht) => <p>{showAllMessages(nachricht)}</p>)} */}
			</ol>
    </div>
  );
}