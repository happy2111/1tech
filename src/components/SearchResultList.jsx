import { Link } from "react-router-dom";
import "./Search.css";

function SearchResultList({ searchData, isTableVisible }) {
  return (
    <div style={{ display: isTableVisible ? "block" : "none" }} className="bg-white p-2 shadow lg:w-[450px] md:w-[250px] w-[230px] absolute overflow-y-scroll max-h-[400px] mt-[13px] rounded-[10px]">
      <table id="search_list" className="w-full">
        <tbody>
          {searchData.length > 0 ? (
            searchData.map((item) => (
              <tr key={item.id} classNam="">
                <td className="p-2">
                  <Link className="" to={`../card/${item.id}`}>
                    {item.title}
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <p></p>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResultList;
