import React from 'react'
import { Link , useNavigate} from 'react-router';

export default function Card({plat}) {
  return (
     <div className="plat-card">
      <Link to={`/details/${plat.id}`}>
        <img src={plat.image} alt={plat.name} />

        <h3>{plat.name}</h3>
        <p>{plat.category}</p>
      </Link>
    </div>
  )
}
