





export default function CreateAudit(props) {
    return (
        <div>

        <div className="audit">


            <div className="topBar">
                <p className="auditName">{props.name}</p>
                <p className="auditData">{props.date}</p>
            </div>

            {/* <div className="auditSelection">

                <div className="info">
                    <p className="errors">3</p>
                </div>

            </div> */}


            <div className="auditOutcome">

                <div className="outcome">
                    <div className="error"><span className="errorTag">Error:</span> In this example, there's a missing semicolon after uint256 public myNumber, 
                        which will result in a compilation error.</div>

                    <div className="suggestion"><span className="suggestionTag">Suggestion:</span> Add a semicolon at the end of the line to fix the syntax error</div>
                </div>

                <div className="outcome">
                    <div className="error"><span className="errorTag">Error:</span> The if statement lacks curly braces, causing only the next line to be 
                        conditionally executed.</div>

                    <div className="suggestion"><span className="suggestionTag">Suggestion:</span> Add curly braces to enclose the block of code to be executed</div>
                </div>

                <div className="outcome">
                    <div className="error"><span className="errorTag">Error:</span> Missing semi colong on line 76</div>
                    <div className="suggestion"><span className="suggestionTag">Suggestion:</span> Add semi colon on line 76</div>
                </div>

            </div>

        </div>

            
        </div>
    )
}