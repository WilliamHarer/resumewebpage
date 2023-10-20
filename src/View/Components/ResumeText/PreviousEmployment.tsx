
export default function PreviousEmployment() {
    return (
        <div style={{
            marginTop: '60px',
            marginLeft: '40px',
            marginRight: '40px',
            marginBottom: '20px',}}>
            <span className="c6 c12" style={{fontSize:'26pt', fontWeight:'bold'}}>Previous Employment</span>
            <p className="c4" style={{marginTop:5}}><span className="c9 c6" style={{fontSize:'14pt'}}>Extensis, SDET, August 2021 to September 2023:</span></p>
            <p className="c4" style={{marginTop:50}}><span className="c9 c6" style={{fontSize:'14pt'}}>SDET Aligned Responsibilities:</span></p>
            <p className="c7" style={{lineHeight:1.5, marginLeft:20, marginRight:20, marginTop: 20, marginBottom: 20,maxWidth:'90%', fontSize:'11pt'}}>
                Monitor Jenkins builds to track End to End testing failures, or other failures within the CI/CD and automated testing systems.<br/>
                Fixing flaky/failing End to End tests which were built with Typescript/Cypress.<br/>
                Implementing the first PACT tests that actually utilized API requests between our microservices as a proof of concept.<br/>
                Occasionally Maintaining unit tests.<br/>
                Writing entire new End to End Cypress tests, as well as writing entire new End to End Cypress spec files including initial hook and routing functions.<br/>
                Maintaining and updating End to End Cypress tests as SWE’s make adjustments to the codebase, or help alongside SWE’s to make sure their new features are adequately tested as previously tested code is modified.<br/>
                Routinely assisted with, or ran my departments weekly releases to production.<br/>
                Adjusting our Jenkins files to allow our CI/CD machines to utilize a separate NVM instance when needed, as well as adding new dockerfiles to be ran in our jenkins build occasionally.<br/>
                Ensuring our sonarQube code coverage was within tolerance, occasionally improving older tests to keep well within our acceptable coverage.<br/>
            </p>
            <p className="c4" style={{marginTop:50}}><span className="c9 c6" style={{fontSize:'14pt'}}>SWE Aligned Responsibilities:</span></p>
            <p className="c7" style={{lineHeight:1.5, marginLeft:20, marginRight:20, marginTop: 20, paddingBottom:60,maxWidth:'90%', fontSize:'11pt'}}>
                Attended daily standup Agile development meetings.<br/>
                Understanding our codebase across multiple microservices.<br/>
                Tracking down bugs within our stack and microservices, and implementing solutions.<br/>
                Assisting with migrating legacy software to a modern TS based SaaS website.<br/>
                Taking designs and turning them into interactable front end components.<br/>
                Fixing inconsistencies within our UI.<br/>
                Creating functions for our product and writing unit tests for new functions/functionality.<br/>
                Reviewing other team members pull requests.<br/>
                Researching possible libraries for future features or refactors.<br/>
                Fostering communication between SWE’s and SDET’s.<br/>
                Keeping up to date with new libraries and technologies as the team adds them to the product.<br/>
            </p>
        </div>
    )
}
