import { ReactNode, useState, useEffect, ChangeEvent} from 'react';

import { onSnapshot, orderBy, query } from 'firebase/firestore';
import { familyCollection } from '../../services/firestore';
import IFamily from '../../types/FamilyType';

import FamilyMembers from '../familyMembers/FamilyMembers';
import SearchBox from '../searchBox/SearchBox';
import './home.css';

export interface ISearchProps {
  onSearch: (e:any)=>void;
  children?: ReactNode;
}

const Home:React.FC = () => {

  //Reference aimed to cleanUp firestore data fetch
  //avoid warning: can't perform React state update on unmounted component

  //prepare data storing, filtering
  const [isLoading, setIsLoading] = useState(false);
  const [allMembers, setAllMembers]= useState<IFamily[]>([]);
  const [filteredPeople, setFilteredPeople] = useState<IFamily[]>([]);
  const [searchField, setSearchField] = useState('');
  

  //fetch data in useEffect, only on first mounting
  useEffect(()=> {
    //function aimed to cleanUp firestore data fetch
    //avoid warning: can't perform React state update on unmounted component
    let abortController = new AbortController();
    const fetchData = () => {
      setIsLoading(true);
      try {
        onSnapshot(query(familyCollection, orderBy('age', 'desc')), (snapshot) => 
          setAllMembers(snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))))        
      } catch(err) {
        console.error(err)
      }
    }
      fetchData();
      setIsLoading(false);
      return () => abortController.abort();
    }, []) 


  //function for handling user search input event - passed to SearchBox component as prop
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    window.location.pathname === '/' ? setSearchField(e.target.value) : setSearchField('');
}

useEffect(() => {
    const filteredItems = allMembers.filter((person) => {
        return person?.name?.toLowerCase().includes(searchField.toLowerCase());
    })
    setFilteredPeople(filteredItems);
},[allMembers,searchField]);

  return (
    <>
      {isLoading ? (<div>Loading...</div> ): (
        <main className='main'>
            <h1>Here's our family</h1>
            <SearchBox onSearch={onChangeHandler} />
            <FamilyMembers people={filteredPeople}/>
        </main>
        )
      }
    </>
    
  )
}

export default Home;