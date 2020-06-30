import React, {Component} from "react";
 
 
import './Feed.css';
import data from '../../mock/db.json';
 
export default class Feed extends Component{
   constructor(props){
       super(props);
       this.state = {
           mockData: data
       };
   }
  
   render() {
       return (
 
       
        
          <div>
               <header>
                   <div className="container1">
                   <img src="../images/instagram-logo.png"></img>
                   </div>
               </header>
               {this.state.mockData.users.map( person =>
               <div>
                   <div className="container">
               <div className="post">
                  <div className="post-header"> 
                      <h2>{person.username}</h2>
                   <span>{person.uploadtime}</span>
                   </div>
                
                  
                   <div>
                   <img className="profile-image" src={person.profileimage}></img>
                 
                   </div>
                   <div className="likes">
                   <p>{person.likes}</p>
                       <img src="../images/instagram-heart.png"></img>
                       <img src="../images/comments.png"></img>
                       <img src="../images/dms.png"></img>
                  
                   </div>
                 </div>
                   </div>
                  </div>
             
               )}
                
         </div>
 
     
   
 
 
   );
 
  
      
      
       }
       }
