import "./Header.css";
import logo from "../img/hacker-newsY.png";

export default function Header(){
    

    return(
        <section className="header">
            <div className="left">
             <div className="logo">
                <a href="https://news.ycombinator.com">
                    <img src={logo} width="20" height="21" alt="Y" />
                </a>
                </div>
                <h2>Hacker News</h2>
                <ul className="center">
                    <li><a href="https://news.ycombinator.com/newest">new</a></li>
                    <li>|</li>
                    <li><a href="https://news.ycombinator.com/front">past</a></li>
                    <li>|</li>
                    <li><a href="https://news.ycombinator.com/newcomments">comments</a></li>
                    <li>|</li>
                    <li><a href="https://news.ycombinator.com/ask">ask</a></li>
                    <li>|</li>
                 <li><a href="https://news.ycombinator.com/show">show</a></li>
                    <li>|</li>
                    <li><a href="https://news.ycombinator.com/jobs">jobs</a></li>
                    <li>|</li>
                    <li><a href="https://news.ycombinator.com/submit">submit</a></li>
             </ul>
            </div>
           
            <ul className="right">
                <li><a href="https://news.ycombinator.com/login?goto=news">login</a></li>
            </ul>
                
        </section>   
    );
}