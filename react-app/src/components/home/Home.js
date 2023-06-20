import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
 
function apiCall(){
    return axios.get('https://jsonplaceholder.typicode.com/todos');
}



  function Home(props){
    const [data,setData] = useState([])
    let li = [];
    useEffect(()=>{
       apiCall().then((res)=>{
        setData(res.data);
       });
 
       return undefined;
    },[])

    return (
            <div className='home'>
            <table>
              <thead>
                <tr>
                  <th>userId</th>
                  <th>id</th>
                  <th>title</th>
                  <th>completed</th>
                </tr>
              </thead>
              <tbody>
              
                {/* <td>{data.map(x=>{x.userId})}</td>
                <td>{data.map(x=>{x.id})}</td>
                <td>{data.map(x=>{x.title})}</td>
                <td>{data.map(x=>{x.completed})}</td> */}
                
                
                

             
              </tbody>
            </table>
                 
                    
            </div>
        )     
    
    
}



 
export default Home;