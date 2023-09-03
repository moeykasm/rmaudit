


import DashboardBar from "./Sidebar"

export default function SupportLayout({setNewAudit}) {


    return (
        <>
        
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
            

            <div className="main-dashboard">
               

                    <DashboardBar
                        key={1}
                        currentPage={"Support"}
                        setNewAudit={setNewAudit}
                    />

                    <div className="screen-dashboard">


                    <div className="inner-dashboard">

                        <div className="sectionHeader">
                            <h4>Contact us</h4>
                            <span className="material-symbols-rounded">support_agent</span>
                        </div>

                        <hr></hr>

                        <div className="dashboardContentWrapper">
                        
                            <div className="contactWrapper">
                                <input type="text" placeholder="Title of Issue"/>
                                <textarea  placeholder="How can we Help?"/>
                                <button className="submitBtn">SUBMIT</button>
                            </div>
                            
                        </div>  

                    </div>        

                    </div>


            </div>

            
      
            

        </>
    )
}