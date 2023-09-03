


import DashboardBar from "./Sidebar"

export default function DashboardLayout({setNewAudit}) {


    return (
        <>
        
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
            

            <div className="main-dashboard">


                  <DashboardBar
                    key={1}
                    currentPage ={"Dashboard"}
                    setNewAudit={setNewAudit}
                  />

                                
                <div className="screen-dashboard">


                <div className="inner-dashboard">

                    <div className="sectionHeader">
                        <h4>Your Dashboard</h4>
                        <span className="material-symbols-rounded">dashboard_customize</span>
                    </div>

                    <hr></hr>

                    <div className="dashboardContentWrapper">
                    
                        <div className="dashboardWrapper">

                            <div className="totalSessions">
                                <p><i className="fa-solid fa-border-all"></i> Total Sessions</p>
                                <p>29</p>
                            </div>
                            <div className="totalAudits">
                                <p><i className="fa-solid fa-circle-plus"></i> Total Audits</p>
                                <p>9</p>
                            </div>
                            <div className="totalSuggestions">
                                <p><i className="fa-solid fa-circle-question"></i> Total Suggestions</p>
                                <p>18</p>
                            </div>

                        </div>
                        
                    </div>  

                </div>        

                </div>



            </div>

            
      
            

        </>
    )
}