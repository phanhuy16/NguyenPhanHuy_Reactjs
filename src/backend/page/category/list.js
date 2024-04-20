import { useEffect, useState } from "react";
import apiCategory from "../../../api/apiCategory";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryNamesMap, setCategoryNamesMap] = useState({});
  const [delCategoryItem, setDelCategoryItem] = useState(false);

  useEffect(() => {
    apiCategory.getAll().then((res) => {
      try {
        const categoryData = res.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.category_name,
            parent_id: item.attributes.parent_id,
            slug: item.attributes.slug,
          };
        });
        setCategories(categoryData);

        const namesMap = {};
        categoryData.forEach((category) => {
          namesMap[category.id] = category.name;
        });
        setCategoryNamesMap(namesMap);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });
  }, [delCategoryItem]);

  const delCategory = async (id) => {
    apiCategory.delCategory(id).then((res) => {
      try {
        alert("Xoá thành công");
        setDelCategoryItem(id);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });
  };

  return (
    <>
      <h1>Danh sách danh mục</h1>
      <button style={{ border: "none" }}>
        <Link className="btn btn-primary mb-2" to="/admin/addCategory">
          Thêm danh mục
        </Link>
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Danh mục</th>
            <th>Danh mục cha</th>
            <th>Slug</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{categoryNamesMap[item.parent_id]}</td>
                <td>{item.slug}</td>
                <td>
                  <button style={{ border: "none" }}>
                    <Link
                      className="btn btn-succcess"
                      to={`/admin/editCategory/${item.id}`}
                    >
                      Sửa
                    </Link>
                  </button>
                  <button style={{ border: "none" }}>
                    <Link
                      className="btn btn-info"
                      onClick={() => delCategory(item.id)}
                    >
                      Xoá
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CategoryList;
