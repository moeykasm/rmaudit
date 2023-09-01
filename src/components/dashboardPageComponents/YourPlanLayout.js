


import { useState } from "react"
import menus from "../../data/menus"
import CreateMenu from "./CreateMenu"


export default function YourPlanLayout() {




    const SelectedMenuStyle = {
        backgroundColor: "",
        color: ""
    }



    const renderMenus = menus.map(eachMenu => {

        return (

            <CreateMenu
                name = {eachMenu.name}
                emoji = {eachMenu.emoji}
                page = {eachMenu.page}
                currentPage = {"Your Plan"}
            />

        )

    })

    return (
        <>
        
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
            

            <div className="main-dashboard">
                    <div className="sideBar">

                    <div className="logoWrapper">
                        <div className="logo">
                            <span class="material-symbols-rounded">
                                vpn_key
                            </span>
                            <p>RMAUDIT</p>
                        </div>
                    </div>

                    <div className="menuBarsWrapper">


                        {renderMenus}


                         <div className="menuBar createAudit">
                                <span class="material-symbols-rounded">dashboard_customize</span>
                                    <p>New Audit</p>                
                            </div>


                    </div>
                    </div>


                    <div className="screen-dashboard">

                        <div className="userWrapper">
                            
                        <span class="material-symbols-rounded">account_circle</span>
                            <div className="userInfo">
                                <p>Mohammad</p>
                                <p>Swinburne Student</p>
                            </div>
                        </div>


                        <div className="dashboardContentWrapper">
                            <div className="boardMenu"></div>
                            <div className="dashboardContent"></div>

                        </div>

                        

                    </div>

            </div>

            
      
            

        </>
    )
}