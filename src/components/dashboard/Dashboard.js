import { getOrders, authoriseUser } from "../../services/api";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();
(async function(){
    try {
        const token = await getAccessTokenSilently();
        const data = await getOrders(user.sub,token);
        if(data && Array.isArray(data)){
            
        }else if(data && data.status === 401){
            const authorised = await authoriseUser(user,token);
            
        }else {
            console.log("hajox");
        }
    } catch (error) {
      console.log("hajox");
    }
})(); 
return <div className="dashboard ui container">it's dashboard</div>
  
}
export default Dashboard;
