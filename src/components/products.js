import Footer from "./Footer/footer";
import Header from "./Header/header"
import ProductsList from "./ProductList/productList";

const ProductsPage = () => {
    return (
        <>
            <Header h2="Product List" btn1="ADD" btn2="MASS DELETE"/>
            <ProductsList />
            <Footer />
        </>
    )
}

export default ProductsPage;