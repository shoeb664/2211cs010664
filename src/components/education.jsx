import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Education() {
 const [students, setStudents] = useState([]);
 useEffect(() => {
 const qualification = async () => {
 try {
 const response = await
axios.get('https://shoeb664.github.io/2211cs010664/2211cs010664.json');
 if (response.status < 200 || response.status >= 300) {
 throw new Error('Failed to fetch students');
 }
 setStudents(response.data);
 } catch (error) {
 console.error('Error fetching students:', error);
 }
 };
 qualification();
 }, []);
 return (
 <div>
<br></br>
 <ol>
 {students.map((student, index) => (
 <li key={index}>{student.qualification}</li>
 ))}
 </ol>
 </div>
 );
}
export default Education; 