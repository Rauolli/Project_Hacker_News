

const Line = ({ title, created_at, url, points, author, num_comments}) =>{
    function shortUrl (url) {
		if (url) {
			let parts = url.split("//");
			let subpart = parts[1].split("/");
			return subpart[0].replace("www.", "");

		}
	}

    function calculateDateDiff(createdDate){
		const d = new Date(createdDate);
		const year = d.getFullYear();
		const month = d.getMonth();
		const day = d.getDate();
		const hour = d.getHours();
		const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

		//console.log("created at:" + createdDate);
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

    return(
        <>
            {title && created_at?
            <li><a href={url}>{title}</a> <a href={url}>{shortUrl(url)}</a>
            <br /><span className="small">{points} points {author} {calculateDateDiff(created_at)} | hide | {num_comments}  Comments</span></li>:''}
        </>
    ); 
};

export default Line;