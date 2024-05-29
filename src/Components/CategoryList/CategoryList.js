import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
export default function CategoryList() {
  const { categories } = useContext(AppContext);
  console.log('------------- ' + categories)
  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name}
      </NavLink>

    </li>
  ))
  return (
      <ul className="menu_list flex">
        {output}
        <AddCategory />
      </ul>
  )
}