import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles/dashboard.css";
import Notification from "./Notifications";

const Dashboard  = () => {
    return ( 
            <>
                <Sidebar />

                <section className="main-dashboard-content">
                     <Header />
                     <Notification />    
                </section>
            </>
     );
}
 
export default Dashboard ;