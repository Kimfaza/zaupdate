import { IoSearch } from "react-icons/io5";

const Search = ()=>{
    return(
        <div className="search position-relative d-flex align-content-center">
            <IoSearch className="mr-2"/>
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default Search;