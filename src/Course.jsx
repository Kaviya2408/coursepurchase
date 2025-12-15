import html from "./assets/html.png";
const course1="HTML";
function Course(){
    return(
        <div className="card">
            <img src={html}alt="" />
            <h3>{course1}</h3>
            <p>This is craziee code's HTML course</p>
        </div>
    );
}
export default Course;