import { useState, useEffect } from "react";
import Header from "./Components/Header";
import "./App.css";

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

  console.log("News:" + news);

  //console.log("Search Word" + searchWord);

  	function checkUserInput(e){
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

	// function showAllMessages(n){
	// 	//console.log(n);
	// 	let news = [];
	
	// 	for (let item in n) {
	// 		news.push(` ${n[item]}`); // ${item}
	// 	}
	// 	return news;
	// }

	function calculateDateDiff(createdDate){
		const d = new Date(createdDate);
		const year = d.getFullYear();
		const month = d.getMonth();
		const day = d.getDate();
		const hour = d.getHours();
		const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

		console.log("created at:" + createdDate);
		const datum = new Date();
		const heuteY = datum.getFullYear();
		const heuteM = datum.getMonth();
		const heuteD = datum.getDate();
		const heuteH = datum.getHours();

		let yearDiff = heuteY - year;
		let monthDiff = 0;
		if(heuteM > month){
			monthDiff = heuteM - month;	
		}else if(heuteM < month){
			yearDiff -= 1;
			monthDiff = (12 + heuteM) - month;
		}
		
		let dayDiff = 0; 
		if(heuteD > day){
			dayDiff = heuteD - day;
		}else if(heuteD < day){
			monthDiff -= 1;
			dayDiff = (monthDays[heuteD] + heuteD) - day;
		}

		let hourDiff = 0;
		if(heuteH > hour){
			hourDiff = heuteH - hour;
		}else if(heuteH < hour){
			dayDiff -= 1;
			hourDiff = (24 + heuteH) - hour;
		}
		return `${yearDiff} years, ${monthDiff} months, ${dayDiff} days, ${hourDiff} hours ago`;
	}

    //const messages = news.map((nachricht) => showAllMessages(nachricht));
	//console.log("Messages: " + messages);

  	return (
    	<div className="App">
			<div className="flex-row">	
      			<Header />
				<input name="input" id="input" type="text" />
            	<button onClick={checkUserInput}>Search</button>
	  		</div>
			<hr/>
			<ol className="table-row">
      			{news.map((nachricht) => ( 
        
					<>					
						<p>{nachricht[searchWord]?nachricht[searchWord]: ''}</p>
						{nachricht["title"]&&nachricht["created_at"]?
						<li><a href={nachricht["url"]}>{nachricht["title"]}</a> (<a href={nachricht["url"]}>{shortUrl(nachricht["url"])}</a>)
						<br /><span className="small">{nachricht["points"]} points {nachricht["author"]} {calculateDateDiff(nachricht["created_at"])} | hide | {nachricht["num_comments"]}  Comments</span></li>:''}	
					</>
			))}			
			</ol>
    	</div>
  	);
}