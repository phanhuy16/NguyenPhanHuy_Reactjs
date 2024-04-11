import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiCategory from "../../../api/apiCategory";
import "../../index.css";
const CategoryEdit = () => {
  const { id } = useParams();

  const [catName, setCatName] = useState("");
  const [parentId, setPrarentId] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("0");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiCategory.getCategoryById(id).then((res) => {
      try {
        const categoryData = res.data.data.attributes;
        setCatName(categoryData.category_name);
        setPrarentId(categoryData.parent_id);
        setSlug(categoryData.slug);
        setStatus(categoryData.status);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });
  }, [id]);

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
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = {
      category_name: catName,
      parent_id: parseInt(parentId),
      slug: slug,
      status: status,
    };
    try {
      const response = await apiCategory.editCategory(id, { data: category });
      console.log(response);
      alert("Sửa thành công");
      navigate("/admin/category");
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
  return (
    <>
      <h1>Sửa danh mục</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug:</label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentCategory">Parent Category:</label>
          <select
            id="parentCategory"
            name="parentCategory"
            value={parentId}
            onChange={(e) => setPrarentId(e.target.value)}
          >
            <option value="">None</option>
            {categories.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="parentCategory">Status:</label>
          <select
            id="parentCategory"
            name="parentCategory"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="0">Không hiển thị</option>
            <option value="1">Hiển thị</option>
          </select>
        </div>
        <button type="submit">Edit Category</button>
      </form>
    </>
  );
};

export default CategoryEdit;
