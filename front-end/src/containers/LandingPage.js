import React, {Component} from "react"

class LandingPage extends Component{
    render(){
        return(
            <div className="landing-page-wrapper">
                <h2 className="featured-title">
                    Featured
                </h2>
                <div className="listing-image-wrapper">
                    <div className="listing1">
                        <img className="listing1-image" src="http://placehold.it/100x100"></img>
                        <div className="listing1-text">Item 1 name</div>
                    </div>
                    <div className="listing2">
                        <img className="listing2-image" src="http://placehold.it/100x100"></img>
                        <div className="listing2-text">Item 2 name</div>
                    </div>
                    <div className="listing3">
                        <img className="listing3-image" src="http://placehold.it/100x100"></img>
                        <div className="listing3-text">Item 3 name</div>
                    </div>


                </div>
            </div>
        )
    }

}

export default LandingPage;
