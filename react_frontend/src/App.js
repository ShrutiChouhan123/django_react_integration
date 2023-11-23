import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [students, setstudents] = useState([])
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  let baseUrl='http://127.0.0.1:5500/studentdatastudentdata/'

  useEffect(() => {
    async function getAllStudents() {
      try {
        const students = await axios.get('http://127.0.0.1:5500/studentdatastudentdata/')
        console.log(students.data)
        setstudents(students.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getAllStudents()
  }, [])

  // post data in django api

  function create_post(){
    axios.post(baseUrl,{
        name:name,
        email:email
    }).then((res)=>setstudents(res.data))
    }
    
    // delete data from django api
    let Delete=(i)=>{
      axios.delete(`http://127.0.0.1:5500/studentdatastudentdata/${i}`,i).then(() => {
          alert("Post deleted!");
        }).catch((err)=>{
          console.log(err)
        })
    }

  return (
    <>
   
    <div className="App">
      <table border="1px solid black">
      {students.map((i,index) => {
        return (
          <>
          <tr key={index}>
            <td>{index}</td>
            <td>{i.name}</td>
            <td>{i.email}</td>
            <td><button onClick={()=>Delete(index)}>Delete</button></td>
          </tr>
          </>
        )
      })}
      </table>
     
    </div>
    <div>
      Name<input type='text'  value={name} onChange={(e)=>setname(e.target.value)} /><br/>
      Email<input type='email' value={email} onChange={(e)=>setemail(e.target.value)} /><br/>
      <button onClick={create_post}>Submit</button>
    </div>
    </>
  );
}

export default App;
