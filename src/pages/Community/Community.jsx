import React from 'react'
import community from '../../assets/community.jpg'
function Community() {
  return (
    <div class="contentDiv " id="content3">


                <div class="content-inner" style={{
                    display:'flex',
                    alignItems:'center'
                }}>

                    <div class="contain" style={{
                        width:'50%'
                    }}>
                        <p>
                            I love participating and organizing events,
                            I am the President of Technovation Club - CSE Department Club,
                            ABESEC. I am the Graphic Designing lead of Codechef Chapter ABESEC and also I am one of the 
                            active member of our college tech community that is "Elixir Community".
                        </p>
                        <p>Do you have an opportunity? Lets talk</p>
                        <a href="mailto:goelmolly83@gmail.com"><button id="cta-btn">
                            MAIL ME
                        </button></a>


                    </div>
                    <div class="contain-right">
                        {/* <img src={community} width="40%" alt=""/> */}
                    </div>
                </div>
            </div>
  )
}

export default Community