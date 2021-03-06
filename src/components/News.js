import React from 'react'
import '../style/news.css'


class News extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            news: [
                {
                    heading: "Now we have Qyrandar website! 🥳",
                    text: "Check out our new website on github!",
                    color: "slideshow-orange",
                    click: "https://github.com/EraOfCoding/Qyrandar-website.git",
                },
                {
                    heading: "VEX worlds is being cancelled and it will be in online format",
                    text: "But we won't give up! We will try our best to get VEX Worlds spot!",
                    color: "slideshow-lime",
                    click: 0,
                },
            ],
            slide_number: 0
        }
    }

    nextSlide = () => {
        if(this.state.slide_number + 1 > this.state.news.length - 1) this.setState({slide_number: 0})
        else this.setState({slide_number: this.state.slide_number + 1})
        console.log(this.state.slide_number)
    }
    prevSlide = () => {
        if(this.state.slide_number - 1 < 0) this.setState({slide_number: this.state.news.length - 1})
        else this.setState({slide_number: this.state.slide_number - 1})
        console.log(this.state.slide_number)
    }

    /* add extra functions whenever you add news or events to state "I know, it's a bad system but I'll try to fix it" */
    setSlide0 = () => {
        this.setState({slide_number: 0})
    }
    setSlide1 = () => {
        this.setState({slide_number: 1})
    }

    render() {

        return(
            <div className="news">
                <h2 id="news">News</h2>
                <div className={this.state.news[this.state.slide_number].color}>
                    <a onClick={this.prevSlide} className="prev">❮</a>

                    <div className="sw-child">
                        <h3 className="slideshow-h3">{this.state.news[this.state.slide_number].heading}</h3>
                        <p style={{cursor: 'pointer'}} onClick={this.state.news[this.state.slide_number].click != 0 ? () => window.open(this.state.news[this.state.slide_number].click) : () => {""}}>{this.state.news[this.state.slide_number].text}</p>
                    </div>
                    
                    <a onClick={this.nextSlide} className="next">❯</a>
                    
                </div>
                <div className="slide-num">
                    {/* add extra span tag whenever you add news or events to state "I know, it's a bad system but I'll try to fix it" */}
                    <span onClick={this.setSlide0} className={this.state.slide_number == 0 ? "dot-pointer" : "dot-nonpointer"}></span>
                    <span onClick={this.setSlide1} className={this.state.slide_number == 1 ? "dot-pointer" : "dot-nonpointer"}></span>
                </div>
    
                
            </div>
        )
    }
}

export default News