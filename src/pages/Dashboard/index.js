// import DashboardBox from "/src/pages/componnets/dashboardBox";
// import { DashboardBox} from "react-router-dom";

import { DashboarBox } from "@mui/icons-material";

const Dashboard = ()=>{
    return(
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">

                            <dashboardBox color={["#1da256","#48d483"]}/>
                            <dashboardBox color={["#c012e2","#eb6dfe"]}/>
                            <dashboardBox color={["#2c78e5","#60aff5"]}/>
                            <dashboardBox color={["#e1950e","#f3cd29"]}/>
                            
                        </div>
                    </div>


                    <div className="col-md-4 pl-0">
                        <div className="box"></div>
                    </div>



                    {/* <div className="dashboardBox">
                        </div>

                        <div className="dashboardBox">
                        </div>
                        
                        <div className="dashboardBox">
                        </div>

                        <div className="dashboardBox">
                        </div> */}




                </div>
            </div>
            
        </>
    )
}

export default Dashboard; 