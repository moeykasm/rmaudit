


import DashboardBar from "./Sidebar"

export default function YourPlanLayout({setNewAudit}) {



    return (
        <>
        
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
            

            <div className="main-dashboard">
                
                 <DashboardBar
                    key={1}
                    currentPage = {"Your Plan"}
                    setNewAudit={setNewAudit}
                 />
                 
                <div className="screen-dashboard">


                    <div className="inner-dashboard">

                        <div className="sectionHeader">
                            <h4>Choose your plan</h4>
                            <span className="material-symbols-rounded">how_to_reg</span>
                        </div>

                        <hr></hr>

                        <div className="dashboardContentWrapper">
                        
                                
                                <div className="subscriptionBox">

                                <div className="boxInfo">
    
                                    <div className="subsBoxTop">

                                        <p className="textBlue">STANDARD</p>

                                    </div>

                                    <div className="SubPrice">

                                    <p className="Price">$19</p>
                                    <p>/Month</p>

                                    </div>

                                    <div className="subsBoxCenter">
                                        <ul>
                                            <li><p><i className="fa-solid fa-star"></i> 100 Audits</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> Access to Support</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> 10 Saved Audits</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> 10 Suggestions</p></li>
                                        </ul>
                                            
                                        
                                    </div>
                                </div>

                                    <div className="subsBoxBottom">
                                        <button className="soonButton">COMING SOON</button>

                                    </div>
                                
                                

                                </div>


                                <div className="subscriptionBox">

                                <div className="boxInfo">

                                    <div className="subsBoxTop">

                                        <p className="textBlue">PRO</p>

                                    </div>

                                    <div className="SubPrice">
                                    <p className="Price">$39</p>
                                    <p>/Month</p>

                                    </div>

                                    <div className="subsBoxCenter">
                                        <ul>
                                            <li><p><i className="fa-solid fa-star"></i> 1000 Audits</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> Access to Support</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> 100 Saved Audits</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> 100 Suggestions</p></li>
                                        </ul>
                                            
                                        
                                    </div>
                                </div>

                                    <div className="subsBoxBottom">
                                        <button className="soonButton">COMING SOON</button>

                                    </div>



                                </div>

                                  <div className="subscriptionBox">

                                <div className="boxInfo">
    
                                    <div className="subsBoxTop">

                                        <p className="textBlue">SWIN TUTOR</p>

                                    </div>

                                    <div className="SubPrice">

                                    <p className="Price">$19</p>
                                    <p>/Month</p>

                                    </div>

                                    <div className="subsBoxCenter">
                                        <ul>
                                            <li><p><i className="fa-solid fa-star"></i> Infinite Audits</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> Access to Support</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> Infinite Saved Audits</p></li>
                                            <li><p><i className="fa-solid fa-star"></i> Infinite Suggestions</p></li>
                                        </ul>
                                            
                                        
                                    </div>
                                </div>

                                    <div className="subsBoxBottom">
                                        <button className="currentButton">CURRENT PLAN</button>

                                    </div>
                                
                                

                                </div>

                            
                        </div>  

                     </div>        

                </div>

            </div>

            
      
            

        </>
    )
}