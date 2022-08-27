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
        </main>
    );
}

export default Main;