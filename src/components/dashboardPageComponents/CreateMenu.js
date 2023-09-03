






export default function CreateMenu(props) {




    const styledMenuBar = {
        backgroundColor: "#1F2534",
        color: "#e5e7ea"
    }


    return (


        <a className="menuBarHref" href={`/${props.page}`}>

            <div
            style={props.currentPage === props.name ? styledMenuBar : null}
             className="menuBar">
                <span className="material-symbols-rounded">{props.emoji}</span>
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