import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { editMember } from "../../services/FamilyService";
import IFamily from "../../types/FamilyType";
import '../commonStyles/formPages.css';


const MemberUpdate:React.FC = () => {
  
  const { data }:any = useLocation().state;

  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [description, setDescription] = useState(data.description);
  const [type, setType] = useState(data.type);

  const successMessage = document.getElementById('success');
  const linkText = document.getElementById('updated__link');
  
  const handleSubmitEdit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const newMember:IFamily = {
      id: data.id,
      name: name,
      age: age,
      description: description,
      type: type
    };

    editMember(newMember);
    setName('');
    setDescription('');
    setType('');
    setAge(0);

    if (successMessage!==null) successMessage.style.visibility = 'visible';
    if (linkText!==null) {
      linkText.style.visibility = 'visible';
      linkText.style.backgroundColor = 'white';
      linkText.style.color = 'black';
      linkText.style.border = '0.5px solid #bbb';
      linkText.textContent = 'BACK TO SEE CHANGES';
    } 
  };


  return (
    <div className="form_page">
      <h2>Revise {name}'s info</h2>
      <form name='editMemberForm' onSubmit={handleSubmitEdit}>
        <div>
          <label htmlFor="editNameInput">Edit name</label>
          <input
            id="editNameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="editAgeInput">Edit age</label>
          <input
            id="editAgeInput"
            min="0"
            max="117"
            step="1"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="editDescInput">Edit description</label>
          <input
            id="editDescInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="editTypeInput">Edit Type</label>
          <input
            id="editTypeInput"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <button type="submit">UPDATE</button>
      </form>
      <div className="success_message" id='success' >Changes submitted</div>
      <Link className="link_back" to='/'><span className="link_back_text" id='updated__link' >BACK</span></Link>
    </div>
  )
  
  }
  
  export default MemberUpdate;