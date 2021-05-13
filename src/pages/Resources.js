import { useState, useEffect} from "react";
import Survey from '../components/Questions';

export default function Resources() {
  let [resources, setResources] = useState([])

  useEffect(() => {
    fetch("/api/resources")
      .then(res => res.json())
      .then(json => {
        setResources(json.resources)
      })
  }, [])

  return (
      <div id="main_panel">   
          
      <div className='inner-pannel'>
       
        <div >
         {resources.map(resource => (
            <tbody>
              <tr>
                <td><a href={resource.website}><img alt='Resosurce Logo' src={resource.logo} width='200' height='80'/></a></td>
                <td>{resource.name}</td>
                <td>{resource.location}</td>
                <td>{resource.address}</td>
                <td><a href={resource.website}>{resource.website}</a></td>
                <td><a href={`mailto:${resource.email}`}>{resource.email}</a></td>
                <td><a href={`${resource.linkedIn}`}>LinkedIn</a></td>
                <td><a href={`${resource.facebook}`}>Facebook</a></td>
                <td><a href={`${resource.instagram}`}>Instagram</a></td>
                <td><a href={`${resource.twitter}`}>Twitter</a></td>
              </tr>        
            </tbody>
          ))}
        </div>
    </div>
      <Survey/>   
    </div>
  )
}