import Line from "./Line";

const Main = (props) =>{
    const nachrichten = props.news;
    return (
        <main className="main">
            <ol className="table-row">
      			{nachrichten.map((nachricht) => ( 
        
					<>					
						{/* {<p>{nachricht[searchWord]?nachricht[searchWord]: ''}</p>} */}
						<Line key={crypto.randomUUID()} {...nachricht} />	
					</>
			))}			
			</ol>
			<a href="news?p=2" className="morelink" rel="next">More</a>
        </main>
    );
}

export default Main;