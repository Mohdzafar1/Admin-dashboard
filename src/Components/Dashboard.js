import {useEffect,useState} from 'react';
import Graph from './Graph';


 
 
 
const Dashboard = () => {
   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },)
    
 
    return (
    <div class="col main  mt-3 ">
         
        <nav aria-label="breadcrumb"style={{backgroundColor:"#e9ecef",height:"7vh"}}>
        <ol class="breadcrumb pt-2 ms-5">
            <li className="nav-item"><a href="#" className='nav-link ms-3'>Home</a></li>
            <li className="nav-item"><a href="#"className= "nav-link ms-3">Library</a></li>
            <li className="nav-item"><a href="#"className='nav-link ms-3'>Data</a></li>
        </ol>
        </nav>
        <div className="row pt-3 pb-3">
            <div className="col-lg-12 col-sm-12">
                <h4 className='text-secondary'>Add empolyee Details Records</h4>
            </div>
           </div>
           <div className="row text-center">
           <div className="col-lg-3">
                <div className="card bg-success pt-3 pb-3">
                <i class="fas fa-user fa-3x"></i>
                <h4>USER</h4>
                <h1>1000+</h1>
                </div>
                </div>
                <div className="col-lg-3">
                    <div className="card bg-danger pt-3 pb-3">
                    <i class="fab fa-instagram fa-3x"></i>
                    <h4>POSTS</h4>
                    <h1>100+</h1>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card bg-primary pt-3 pb-3">
                    <i class="fab fa-twitter fa-3x"></i>
                    <h4>TWITTER</h4>
                    <h1>200+</h1>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card bg-warning pt-3 pb-3">
                    <i class="fas fa-share fa-3x"></i>
                    <h4>SHARES</h4>
                    <h1>500+</h1>
                    </div>
                </div>
            </div>
       <hr className='pt-3'></hr>
            <div className="row">
                <div className="col-lg-7">
     <h5 className='text-secondary'> Check More Records of Employees & Data Chart</h5>
                </div>
                <div className="col-lg-7">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Record Data</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(3, 10).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
                </div>
                <div className="col-lg-5">
                
                   <Graph/>
                </div>
            </div>
 



           </div>    
 

       
    
    )
}
 
export default Dashboard