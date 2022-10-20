import CategoryItem from "./category-item/category-item.component";

import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://ia802506.us.archive.org/16/items/free-course-site.com-udemy-complete-react-developer-in-2022-w-redux-hooks-graph-ql_202207/04%20Capstone%20Project_%20Intro%20%2B%20Setup/074%20categories.json"
    )
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
