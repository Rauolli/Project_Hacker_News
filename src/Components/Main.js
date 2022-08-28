import Line from "./Line";

const Main = (props) =>{
    const nachrichten = props.news;
	const word = props.word;
    return (
        <main className="main">
            <ol className="table-row">
      			{nachrichten.map((nachricht) => ( 
        
					<>					
						<Line key={crypto.randomUUID()} {...nachricht} word={word}/>	
					</>
			))}			
			</ol>
			<a href="news?p=2" className="morelink" rel="next">More</a>
        </main>
    );
}

export default Main;