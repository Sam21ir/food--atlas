import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router';
import axios from 'axios';

export default function Card({ plat, isAdmin = false }) {
  const navigate=useNavigate();

  const [popUp,setPopUp]=useState(false)
  const [recipeToDelete, setRecipeToDelete] = useState(null);

  const Supprimer = ()=>{
      axios
        .delete(`http://localhost:3001/recipes/${recipeToDelete}`)
        .then(()=>{
           console.log("plat deleted")
           setPopUp(false)
           setRecipeToDelete(null)
        })     
        .catch((err)=>console.log("error in deleting",err))                  
            
    }
 
  return (
     <div className="plat-card">
      <Link to={`/details/${plat.id}`}>
        <img src={plat.image} alt={plat.nom} />
        <div className='titleCatg'>
          <h3>{plat.nom}</h3>
          <p>{plat.pays}</p>
        </div>
        </Link>
        <div>
                {isAdmin && (
            <div className="admin-buttons">
              <button className="delete-btn" onClick={()=>{
                setRecipeToDelete(plat.id);
                setPopUp(true);}
              }>Delete
              </button>

              <button className="update-btn" onClick={() => navigate(`/EditRec/${plat.id}`)}>
                  Modifier
              </button>
            </div>
                  
            )}
          </div>

        
         {popUp && (
          <div className='popUpOverlay'>
              <div className="popUpContainer">
                <h1>Voulez-vous vraiment supprimer cette recette ?</h1>
                <div className='popUpButtons'>
                <button className="popUpBtn-yes" onClick={Supprimer}>Oui</button>
                <button className="popUpBtn-no" 
                  onClick={() => {
                    setPopUp(false);         
                    setRecipeToDelete(null); 
                  }}
                >Non</button>
                </div>
              </div>
          </div>    
          )}
  
       </div>
  )
}
