import React, { useState, useEffect } from "react";
import apiBrand from "../../../api/apiBrand";
import { useParams, useNavigate } from "react-router-dom";

function EditBrand() {
  const { id } = useParams();
  const [brandName, setBrandName] = useState("");
  const [slug, setSlug] = useState("");
  const [address, setAddress] = useState("");
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    apiBrand.getBrandById(id).then((res) => {
      try {
        const brandData = res.data.attributes;
        setBrandName(brandData.category_name);
        setSlug(brandData.slug);
        setAddress(brandData.status);
      } catch (e) {
        console.log(e);
      }
    });
  }, [id]);

  useEffect(() => {
    apiBrand.getAll().then((res) => {
      try {
        const brandData = res.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.brand_name,
            address: item.attributes.address,
            slug: item.attributes.slug,
          };
        });
        setBrands(brandData);
      } catch (e) {
        console.log(e);
      }
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const brand = {
      brand_name: brandName,
      address: address,
      slug: slug,
    };
    console.log(brand);
    try {
      const response = await apiBrand.editBrand(id, { data: brand });
      console.log(response);
      alert("Sửa thành công");
      navigate("/admin/brands");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>Sửa Nhà cung cấp</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brand_name">Tên thương hiệu</label>
          <input
            type="text"
            className="form-control"
            required
            name="brand_name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            className="form-control"
            required
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            className="form-control"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default EditBrand;
