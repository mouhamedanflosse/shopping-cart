import { useContext,useRef } from "react";
import { productContext } from "./Context";
const Search = () => {
    const val = useRef()
    const  {filterBysearch}  = useContext(productContext)
    function onsubmit(e) {
        e.preventDefault()
        filterBysearch(val.current.value)
        val.current.value = ""
    }
  return <form action="post" onSubmit={onsubmit}>
  <input type="search" placeholder="product" ref={val}/>
  <input type="submit" value="search" />
</form>;
};

export default Search;
