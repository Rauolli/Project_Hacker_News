import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
	const URI = `https://hn.algolia.com/api/v1/search?query`; // =${searchWord}
    fetch(URI)
      .then((res) => res.json())
      .then((data) => setNews(data.hits))
      .catch((err) => console.log(err));
  }, []);

  console.log("News:" + news);

  //console.log("Search Word" + searchWord);
	
  	return (
    	<div className="App">
			<div className="flex-row">	
      			<Header />
	  		</div>
			<Main key={crypto.randomUUID()} news={news} />
			<Footer />			
    	</div>
  	);
}