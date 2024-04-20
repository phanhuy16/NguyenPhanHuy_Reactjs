import { useEffect, useState } from "react";
import apiCategory from "../../../api/apiCategory";
import apiBrand from "../../../api/apiBrand";
import axiosInstance from "../../../api/axios";
import apiProduct from "../../../api/apiProduct";

const ProductAdd = () => {
  const [productName, setProductName] = useState("");
  const [slug, setSlug] = useState("");
  const [catId, setCatId] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isOnSale, setIsOnSale] = useState(false);
  const [salePrice, setSalePrice] = useState(0);
  const [image, setImage] = useState(null);
  const [brandId, setBrandId] = useState("");

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    apiCategory.getAll().then((res) => {
      console.log("Category: ", res.data);
      try {
        const categoryData = res.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.category_name,
          };
        });
        setCategories(categoryData);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });
  }, []);

  useEffect(() => {
    apiBrand.getAll().then((res) => {
      try {
        const brandData = res.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.brand_name,
          };
        });
        setBrands(brandData);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      product_name: productName,
      slug: slug,
      cat_id: catId,
      price: price,
      description: description,
      is_on_sale: isOnSale,
      sale_price: salePrice,
      image: [],
      brand_id: brandId,
      category: catId,
    };
    // console.log("Product data: ", productData);

    let file = new FormData();
    file.append("files", image);

    await axiosInstance.enableUploadFile();
    axiosInstance
      .post("/upload", file)
      .then(async (res) => {
        const fileId = res.data[0].id;
        productData.image.push(fileId);
        // console.log("Product data: ", productData);
        axiosInstance.enableJson();
        const responseProduct = await apiProduct.createProduct({
          data: productData,
        });
        console.log("Successful", responseProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={{ width: "90%", margin: "auto" }}>
        <h1 className="fw-bold text-center">Thêm sản phẩm</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="my-3">
                <label htmlFor="product_name" className="from-label">
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product_name"
                  placeholder="Nhập tên sản  phẩm"
                  name="product_name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="slug" className="from-label">
                  Slug
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="slug"
                  placeholder="Nhập tên slug"
                  name="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="parent_id">Danh mục cha</label>
                <select
                  className="form-control"
                  name="parent_id"
                  value={catId}
                  onChange={(e) => setCatId(e.target.value)}
                >
                  <option value="">None</option>
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="parent_id" className="from-label">
                  Đơn giá
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cat_id"
                  placeholder="Nhập đơn giá"
                  name="cat_id"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="parent_id" className="from-label">
                  Mô tả sản phẩm
                </label>
                <textarea
                  className="form-control"
                  id="cat_id"
                  placeholder="Nhập mô tả sản phẩm"
                  name="cat_id"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label
                  htmlFor="sale"
                  className="from-label"
                  style={{ marginRight: "20px" }}
                >
                  Giảm giá:{" "}
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="is_on_sale"
                  name="is_on_sale"
                  value={isOnSale}
                  onChange={(e) => setIsOnSale(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sale_price" className="from-label">
                  Giá khuyến mãi
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sale_price"
                  placeholder="Nhập giá khuyến mãi "
                  name="sale_price"
                  value={salePrice}
                  onChange={(e) => setSalePrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="slug" className="from-label">
                  Hình ảnh
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="parent_id">Nhà cung cấp</label>
                <select
                  className="form-control"
                  name="parent_id"
                  value={brandId}
                  onChange={(e) => setBrandId(e.target.value)}
                >
                  {brands.map((brand, index) => {
                    return (
                      <option key={index} value={brand.id}>
                        {brand.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ProductAdd;
