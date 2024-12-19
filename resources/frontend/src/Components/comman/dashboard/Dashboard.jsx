import React from "react";
import MainDashboard from "./dashboardComponents/MainDashboard";
import {Route, Routes} from "react-router"
import Addincome from "./dashboardComponents/transactionManagement/Addincome";
import AddExpense from "./dashboardComponents/transactionManagement/AddExpense";


const Dashboard = () => {
 

    return (
     
        <>
<Routes>
<Route path="/" element={<MainDashboard/>}/>
<Route path="/add-income" element={<Addincome/>}/>
<Route path="/add-expense" element={<AddExpense/>}/>
</Routes>

        
        </>
          );
          };

    export default Dashboard;