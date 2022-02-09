import React from 'react'
import ModifyEntry from '../Components/ModifyEntry'
import NewEntry from '../Components/NewEntry'

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <NewEntry />
                    </div>
                    <div className="col-md-6 mx-auto">
                        <ModifyEntry />
                    </div>
                </div>    
            </div>  
        </>
    )
}
