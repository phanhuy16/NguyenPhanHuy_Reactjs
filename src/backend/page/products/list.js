import { useEffect, useState } from "react";
import apiProduct from "../../../api/apiProduct";
import { Link, useParams } from "react-router-dom";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { imageURL } from "../../../api/config";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [delProductItem, setDelProductItem] = useState(0);
  const [pages, setPages] = useState(1);
  const page = parseInt(useParams().page);
  const limit = 5;

  useEffect(() => {
    apiProduct.getProductPagination(page, limit).then((res) => {
      try {
        const numberOfPages = Math.ceil(
          res.meta.pagination.total / res.meta.pagination.pageSize
        );
        setPages(numberOfPages);

        const productsData = res.data.map((item) => {
          return {
            id: item.id,
            product_name: item.attributes.product_name,
            slug: item.attributes.slug,
            cat_name: item.attributes.category.data.attributes.category_name,
            description: item.attributes.description,
            is_on_sale: item.attributes.is_on_sale,
            price: item.attributes.price,
            sale_price: item.attributes.sale_price,
            image: item.attributes.image.data.attributes.url,
          };
        });
        setProducts(productsData);
        // console.log("Products List: ", productsData);
      } catch (error) {
        console.log("Failed to fetch product list: ", error.message);
      }
    });
  }, [page, delProductItem]);

  const delProduct = (id) => {
    apiProduct.delProductById(id).then((res) => {
      try {
        alert("Xoá sản phẩm thành công!");
        setDelProductItem(id);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });
  };

  return (
    <>
      <h1>ProductList</h1>
      <button style={{ border: "none" }}>
        <Link className="btn btn-primary mb-2" to="/admin/addProduct">
          Thêm sản phẩm
        </Link>
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Đơn giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img
                    src={imageURL + product.image}
                    alt={product.product_name}
                    width="100px"
                  />
                </td>
                <td>{product.product_name}</td>
                <td>{product.cat_name}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/products/${product.slug}`} className="btn ">
                    <BsEmojiHeartEyesFill />
                  </Link>
                  <Link
                    to={`/admin/editproduct/${product.slug}`}
                    className="btn "
                  >
                    <LuClipboardEdit />
                  </Link>
                  <Link
                    onClick={(e) => delProduct(product.id)}
                    className="btn "
                  >
                    <MdDeleteSweep />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to={`/admin/products/${page - 1}`}>
            Previous
          </Link>
        </li>
        {Array.from(Array(pages).keys()).map((index) => {
          return (
            <li
              key={index}
              className={`page-item ${index + 1 === page ? "active" : ""}`}
            >
              <Link className="page-link" to={`/admin/products/${index + 1}`}>
                {index + 1}
              </Link>
            </li>
          );
        })}
        <li className="page-item">
          <Link className="page-link" to={`/admin/products/${page + 1}`}>
            Next
          </Link>
        </li>
      </ul>
    </>
  );
};
export default ProductList;
