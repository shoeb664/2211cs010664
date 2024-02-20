import Image from "./components/image";
import Header from "./components/Header";
import Box from "./components/Box"
import Skills from "./components/skills";
import CarrerObjective from "./components/CarrerObjectives";
import Education from "./components/education";
import Projects from "./components/Projects"
import Certificates from "./components/Certificates";
import Students from "./components/education";
import Box1 from "./components/box1";
import "./App.css"

const Personal_Information = {
    name:"Shoeb Ahmed khan",
    email:"shoebahmedkhan010@gmail.com",
    phoneNo:"+91 9XXXXXXXXX",
    location: "Hyderabad,India"
};

function App() {
 return (
 <div className="App">
 <div className="container mt-3" >
 <Box heading="Resume"></Box>
 <br></br>
 <br></br>
 <Header p_info={Personal_Information}/>
 <br></br>
 <Box1 heading="Carrer Objective"></Box1>
 <br></br>
 <CarrerObjective para="As a highly motivated and detail-oriented B.Tech student pursuing Computer Science and Engineering. 
I have strong foundation in Python, Java, Database and my proactive approach to learning allows me to adapt swiftly to new technologies. I have good knowledge in Data Structures and Algorithms. I am seeking an internship opportunity in Data Science or Artificial Intelligence domains to apply my theoretical and some practical knowledge in a practical setting, collaborate with industry professionals, and further enhance my skills."/>
<br></br>
<Box1 heading="Education"></Box1>
<br></br>
<Students/>
{/* <Box heading="Skills"></Box>
<br></br> */}
{/* <Skills/>
<br></br>
<Box heading="Projects"></Box>
<br></br>
<Projects/>
<br></br>
<Box heading="Certificates"></Box>
<br></br>
<Certificates/>
<br></br> */}
<Box1 heading="Declaration"></Box1>
<br></br>
<p class='Declaration'>I hereby declare that all the details provided above are true to the best of my knowledge.</p>
<div class='last'>
    <p class='place'>Place: <span>Hyderabad</span><span class='sign'>(Shoeb Ahmed Khan)</span></p>
</div>
<div class='empty'></div>
 </div>
 </div>
 );
} 

export default App;