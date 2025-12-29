import Course from "./course";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.jpeg";

function Courselist(){
    const courses=[
        {name:"HTML FULL COURSE",price:200,image:html,ratings:4.5},
        {name:"CSS FULL COURSE",price:199,image:css,ratings:5},
        {name:"JS FULL COURSE",price:200,image:js,ratings:4.9}
    ];

    // sort based on price iin decending
    courses.sort((x,y)=> y.price-x.price);
//  courses la iruka oru oru obj eduthu adhula iruka values ah curr obj mari intialize pndro. 
// <course/> idhukula tha all card detials kuduthuruo idhu props will get nd create cart. 
// tgis us parent nd course is child.parent send data to child
    const courseslist=courses.map((course,ind)=>
        <Course key={ind}
            name={course.name}
            image={course.image}
            price={course.price}
            ratings={course.ratings}
            show={true}
        />
    );

    return(
        <>
        {courseslist}
        </>
    );
}
export default Courselist;
