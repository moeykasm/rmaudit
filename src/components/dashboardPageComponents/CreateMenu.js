



// import { useState } from "react"



export default function CreateMenu(props) {





    return (


        <a className="menuBarHref" href={`/user/name/${props.page}`}>

            <div className="menuBar">
                <span class="material-symbols-rounded">{props.emoji}</span>
                    <p>{props.name}</p>
                <div className="activeColorWrapper">
                {
                    props.currentPage === props.name
                    &&
                    <div className="activeColor"></div>
                }

                </div>                 
            </div>

        </a>

    )
}