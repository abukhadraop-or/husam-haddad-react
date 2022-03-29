import { HiddenDiv } from "./style";

const Select=(props)=>{

    return(
  <HiddenDiv>
  <h3>Sort result By</h3>
  <form>
  <select name="sort" onChange={props.onChange}>
                <option value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
                <option value="release_date.desc">
                  Release Date Descending
                </option>
                <option value="release_date.asc">Release Date Ascending</option>
                <option value="original_title.asc">Title (A-Z)</option>
                <option value="original_title.desc">Title (Z-A)</option>
              </select>

              </form>
        
  </HiddenDiv>



    )


}
export default Select;