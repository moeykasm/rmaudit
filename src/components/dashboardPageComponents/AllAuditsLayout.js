


import DashboardBar from "./Sidebar"

import audits from '../../data/audits'
import CreateAudit from "./CreateAudit"
export default function AllAuditsLayout({setNewAudit}) {



    const renderAudits = audits.map(eachAudit => {
        return (
           <CreateAudit
                key = {eachAudit.id}
                name = {eachAudit.name}
                date = {eachAudit.date}
           /> 
        )
    })
    

    return (
        <>
        
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
            

            <div className="main-dashboard">
                   

                   <DashboardBar
                        key={1}
                        currentPage={"All Audits"}
                        setNewAudit={setNewAudit}
                   />

                <div className="screen-dashboard">


                <div className="inner-dashboard">

                    <div className="sectionHeader">
                        <h4>Manage Audits</h4>
                        <span className="material-symbols-rounded">team_dashboard</span>
                    </div>

                    <hr></hr>

                    <div className="dashboardContentWrapper">
                    

                        <div className="auditsWrapper">

                            {renderAudits}

                        </div>
            
         
                                    
                    </div>  

                </div>        

                </div>


            </div>

            
      
            

        </>
    )
}