import { useNavigate } from "react-router-dom";
import { deleteMember } from "../../services/FamilyService";
import IFamily from "../../types/FamilyType";
import './familyMembers.css';

interface IPeople {
  people: any[] | IFamily[]
}

const FamilyMembers = ({ people }:IPeople) => {

  // use url to pass data to update page
  const navigate = useNavigate();
  const passData = (entry:any) => {
    navigate("/edit", { state: { data: entry } });
  }; 

  return (
    <section>
      {
        people && people.map((person:IFamily, idx:number) => (
          <article key={person.id}>
            <div className={`ribbon ribbon-${person?.type}`}>{person?.type}</div>
            <h2 className="title"><span>They call me<br/></span>{` ${person?.name}`}</h2>
            <h3>{`I'm #${idx+1} ${people.length>1 ? 'of '+ people.length + '+ Family members': ''}`}</h3>
            <h3>{`Age: ${person?.age} years `}<span>{person?.type==='4' ? `and ${person.age*7} years in human age` : ''}</span></h3>
            <h3>About me: {person?.description}</h3>
            <div>
              <button onClick={() => { passData(person) } }>Edit</button>
              <button className="deleteBtn" onClick={e => deleteMember(person.id)}>Delete</button>
            </div>
          </article>
        ))
      }
    </section>
  )
}
  
export default FamilyMembers;