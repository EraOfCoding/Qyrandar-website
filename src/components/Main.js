import React from 'react'
import '../style/main.css'

function Main() {
    return(
        <div className="main">
            <div className="welcome">
                <div className="welcome-items">
                    <div className="intro">
                        <h1>1737A Qyrandar</h1>
                    </div>
                    <h3>Est. 2019</h3>
                </div>
            </div>
            <div className="team-members">
                <h2 id="about-team">About Qyrandar</h2>
                <p>We are 1737A Qyrandar VEX team from Kazakhstan. We call ourselfs Qyrandar because it means falcons in our native language. We worked on VEX in 2019, 2020 and in 2021. Earlier our team was named Double trouble and then Triple trouble. In 2020 new members, Yerassyl and Daria joined to our team. Now we are working on our robot and preparing for nationals competition!</p>
                <div className="robot-text">
                    <div>
                        <h3>Our Robot</h3>
                        <p>Our robot's name is Albina. Pronouns are she/her. It was Temirlan's idea to call robot Albina. It's a beautiful name!</p>
                    </div>
                </div>
                <h2 id="tm-text">Team members</h2>
                <h3 onClick={() => window.open('https://github.com/mrgln', 'blank')} id="margulan">Margulan</h3>
                <p>Margulan is a team captain, builder and designer. He is very good leader!</p>
                <h3 onClick={() => window.open('https://github.com/EraOfCoding', 'blank')} id="margulan" id="yerassyl">Yerassyl</h3>
                <p>Yerassyl is a builder, driver and web developer. Basicly he is just flexable guy.</p>
                <h3 onClick={() => window.open('https://github.com/Temir2005', 'blank')} id="margulan" id="temirlan">Temirlan</h3>
                <p>Temirlan is a main programer. He is bigbrain guy that uses VEX Pros</p>
                <h3 onClick={() => window.open('https://github.com/DarySayfay', 'blank')} id="margulan" id="daria">Daria</h3>
                <p>Daria is a main designer. She works on our engineering notebook</p>
            </div>
        </div>
    )
}

export default Main