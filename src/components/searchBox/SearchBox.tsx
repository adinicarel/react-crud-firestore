import './searchBox.css';

interface ISearchProps {
    onSearch: (e:any)=>void;
}

const SearchBox = ({ onSearch }:ISearchProps) => {

    return (
        <div>
            <input className="search_field" name='search' data-testid='search-input' placeholder='Search relatives' type='text' onChange={onSearch} />
        </div>
    )
};

export default SearchBox;