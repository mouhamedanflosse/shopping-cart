import ProductItem from "./ProductItem";
import Search from "./Search";
const ProductItemList = () => {
  return (
    <>
    <Search />
    <div className="product">
        <ProductItem />
    </div>
    </>
  );
};

export default ProductItemList;
