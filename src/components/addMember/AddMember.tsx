import { addMember } from "../../services/FamilyService";
import IFamily from "../../types/FamilyType";
import { useLocalStorage } from "../../services/useLocalStorage";
import { Link } from "react-router-dom";
import '../commonStyles/formPages.css';


const AddMember:React.FC = () => {

  //const [values, setValues] = useState<IFamily>();
  const [name, setName] = useLocalStorage('name','');
  const [age, setAge] = useLocalStorage('age','');
  const [description, setDescription] = useLocalStorage('description','');
  const [type, setType] = useLocalStorage('type','');

  const successMessage = document.getElementById('success_add');
  const linkText = document.getElementById('updated_link_add');

  const handleSubmitAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const newMember:IFamily = {
      name: name,
      age: age,
      description: description,
      type: type
    };
    addMember(newMember);
    setName('');
    setAge('');
    setDescription('');
    setType('');

    if (successMessage!==null) successMessage.style.visibility = 'visible';
    if (linkText!==null) {
      linkText.style.visibility = 'visible';
      linkText.style.backgroundColor = 'white';
      linkText.style.color = 'black';
      linkText.style.backgroundColor = 'white';
      linkText.textContent = 'BACK TO SEE CHANGES';
    }
  };

  return (
    <div className="form_page">
      <h2>Add another relative</h2>
      <form name='addMemberForm' onSubmit={handleSubmitAdd}>
        <div>
          <label htmlFor="addNameInput">Add name</label>
          <input
            id="addNameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Cool kiddo"
            required
          />
        </div>
        <div>
          <label htmlFor="addAgeInput">Add age</label>
          <input
            id="addAgeInput"
            type="number"
            min="0"
            max="117"
            step="1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="10"
            required
          />
        </div>

        <div>
          <label htmlFor="addDescInput">Add description</label>
          <input
            id="addDescInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Best at giving orders"
            required
          />
        </div>

        <div>
          <label htmlFor="addTypeInput">Add type</label>
          <input
            id="addTypeInput"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="1, 2, 3 or 4"
            pattern="[1-4]{1}"
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="success_message" id='success_add'>Changes submitted</div>
      <Link className="link_back" to='/'><span className="link_back_text" id='updated_link_add' >BACK</span></Link>
    </div>
  )
}

export default AddMember