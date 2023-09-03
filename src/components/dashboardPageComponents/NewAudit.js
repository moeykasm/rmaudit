



export default function NewAudit(props) {



    function propsFunction() {
        props.setNewAudit(false)
    }



    return (

        <div className="newAuditPopupWrapper">

        <div className="newAuditPopup">
            <h1>Audit Setup</h1>

            <div className="inputWrapper">
                <div className="iWrapper">
                    <i className="fa-solid fa-file-circle-question"></i>
                </div>
                <input type="text" className="fileName" placeholder="Name your audit"/>
            </div> 

            <div className="fileInput">

         

                <i className="fa-solid fa-cloud-arrow-up"></i>

                
                <p>Upload your solidity files</p>

                <input className="fileType" type="file" accept=".sol" name="myfile" />

                {/* <i className="fa-solid fa-file-code"></i>
                <p>File added: Stake.sol</p> */}

            </div>

            <div className="btnsHolder">
                <button onClick={propsFunction}>Cancel <i className="fa-regular fa-circle-xmark"></i></button>
                <button>Continue <i className="fa-regular fa-circle-right"></i></button>
            </div>

        </div>
    </div>

    )
}