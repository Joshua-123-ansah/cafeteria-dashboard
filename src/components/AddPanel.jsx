import Sidebar from "./Sidebar";
import Form from "./Form";

const AddPanel = () => {
    return (  
        <>
        <Sidebar />

        <section className="main-dashboard-content">
            <header>
                <div className="dash-header">
                        <h3 className="dash-name">Add New Dish</h3>
                </div>
             </header>
             <Form />
        </section>
    </>
    );
}
 
export default AddPanel;