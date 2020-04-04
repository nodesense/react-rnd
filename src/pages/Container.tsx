import React from 'react';

class Container extends React.Component {
    render() {
        return (
            <div>
            <svg data-component="ia.display.cylindrical-tank" data-component-path="C$0:1:1:1:1$0:0.0:2" preserveAspectRatio="none" viewBox="0 0 350 450" style={ {flex: "0 0 60px" }}>
                <path d="M 10 430
                        L 10 20
                        A 135 16 0 0 0 340 20
                        M 10 20
                        A 135 16 0 0 1 340 20
                        L 340 430
                        A 135 16 0 0 1 10 430" 
                        stroke="black" 
                        fill="#B2B2B2" 
                        stroke-width="2">
                </path>
                <path d="M 10 430 A 135 16 0 0 1 340 430" 
                      stroke="black" 
                      stroke-width="1" 
                      fill="#B2B2B2" 
                      stroke-dasharray="10">
                </path>
                <path d="M 10 430
                         L 10 270.1
                         A 135 16 0 0 0 340 270.1
                         L 340 430
                        A 135 16 0 0 1 10 430" 
                        stroke="black" 
                        fill="#0051DE" 
                        fill-opacity="0.6">

                </path>
                <path d="M 10 270.1 A 135 16 0 0 0 340 270.1" 
                      stroke="black" 
                      stroke-width="1" 
                      fill="#0051DE" 
                      fill-opacity="0.3">
                    </path>
                 {/* dotted squre on top */}   
                <path d="M 10 100.1 A 70 30 0 0 1 340 100.1" 
                      stroke="black" 
                      stroke-width="2" 
                      fill="#0051DE" 
                      fill-opacity="0.3" 
                      stroke-dasharray="10">
                </path>
                <text text-anchor="middle" 
                      x="175" y="225" 
                      dy="0.3em" 
                      style= {{ fill: "currentcolor"}}>45%</text></svg>
            </div>
        )
    }
}

export default Container;