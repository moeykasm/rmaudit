



import AllAuditsLayout from '../components/dashboardPageComponents/AllAuditsLayout'
import audits from '../data/audits'
import CreateAudit from '../components/dashboardPageComponents/CreateAudit'

export default function DashboardPage() {


    console.log(audits[0].errors[0].error)




    const renderAudits = audits.map(eachAudit => {
        return (
           <CreateAudit
                name = {eachAudit.name}
                date = {eachAudit.date}

              
           /> 
        )
    })
    
    return (
        <>

            <AllAuditsLayout
            
            />
            <p>all audits</p>

        </>
    )
}