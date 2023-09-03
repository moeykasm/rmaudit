


import menus from "../../data/menus"
import CreateMenu from "./CreateMenu"

export default function DashboardBar(props) {

    const renderMenus = menus.map(eachMenu => {

        return (

            <CreateMenu
                name = {eachMenu.name}
                emoji = {eachMenu.emoji}
                page = {eachMenu.page}
                currentPage = {props.currentPage}
            />

        )

    })


    function switchClicked() {
        props.setNewAudit(prev => !prev)
    }


    return (
        <>

            <div className="sideBar">

            <div className="logoWrapper">
                <a href="/">
                    <div className="logo">
                        <span className="material-symbols-rounded">
                            vpn_key
                        </span>
                        <p>RMAUDIT</p>
                    </div>
                </a>
             
            </div>



            <div className="menuBarsWrapper">


                {renderMenus}


                <div className="userWrapper">
                    
                    <span className="material-symbols-rounded">account_circle</span>
                        <div className="userInfo">
                            <p>Username</p>
                            <p>Swinburne Student</p>
                        </div>
                </div>

                <div className="menuBar createAudit" onClick={switchClicked}>
                        <span className="material-symbols-rounded">dashboard_customize</span>
                            <p>New Audit</p>                
                </div>


            </div>
            </div>


        </>
    )
}