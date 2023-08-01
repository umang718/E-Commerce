
import ProductForm from "../features/admin/components/ProductFrom";
import NavBar from "../features/navbar/Navbar";
function AdminProductFormPage() {
    return ( 
        <div>
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
        </div>
     );
}

export default AdminProductFormPage;