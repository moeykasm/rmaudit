



import DashboardLayout from '../components/dashboardPageComponents/DashboardLayout'
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

            <DashboardLayout
            
            />

            <div className='wrapperDemo'>
                {renderAudits}
            </div>
         

        </>
    )
}