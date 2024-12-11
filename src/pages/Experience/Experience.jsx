import React from 'react'

function Experience() {
    var experience = [
        {
            company: "Flipkart",
            role: "Software Developer Intern",
            year: '2023'
        },
    ]
    return (
        <div id="experience" className=' d-flex align-items-center justify-content-center'>
            <div>

                <div>
                    {
                        experience.map(e => {
                            return (
                                <div className='exp-card'>
                                    <h3 className='bigText'>{e.year}</h3>

                                    <div>
                                        <h5>{e.role}</h5>
                                        <p className='smallText'>{e.company}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="contentChips my-3 mx-auto" >
                    <p>Debian</p>
                    <p>Linux</p>
                    <p>Operating System</p>
                    <p>Redis</p>
                </div>

            </div>
        </div>
    )
}

export default Experience