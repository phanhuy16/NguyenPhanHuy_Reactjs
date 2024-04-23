import React, { useState, useEffect } from "react";
import "../../index.css";
import apiCategory from "../../../api/apiCategory";
import { useNavigate } from "react-router-dom";

const CategoryAdd = () => {
  const [catName, setCatName] = useState("");
  const [parentId, setPrarentId] = useState("");
  const [slug, setSlug] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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
    };
    try {
      const response = await apiCategory.createCategory({ data: category });
      console.log(response);
      alert("Thêm thành công");
      navigate("/admin/category");
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <div className="container py-3" style={{ width: "50%" }}>
      <h2 className="fw-bold text-center">Thêm danh mục</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name:</label>
          <input
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default CategoryAdd;
