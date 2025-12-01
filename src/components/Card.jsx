import React from 'react'
import { Link , useNavigate} from 'react-router';
import axios from 'axios';

export default function Card({ plat, isAdmin = false }) {
  return (
     <div className="plat-card">
      <Link to={`/details/${plat.id}`}>
        <img src={plat.image} alt={plat.name} />

        <h3>{plat.name}</h3>
        <p>{plat.category}</p>

        {isAdmin && (
        <div className="admin-buttons">
          <button className="delete-btn" onClick={() => 
            axios
             .delete(`http://localhost:3001/plats/${plat.id}`)
             .then(()=>console.log("plat deleted"))
             .catch((err)=>console.log("error in deleting",err))

          }>
            Delete
          </button>

          <button className="update-btn" >
            Update
          </button>
        </div>
        )}
      </Link>
    
 
       </div>
  )
}
