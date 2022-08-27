import Line from "./Line";

const Main = (news) =>{
    
    return (
        <main>
            <ol className="table-row">
      			{Object.getOwnPropertyNames(news).map((nachricht) => ( 
        
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