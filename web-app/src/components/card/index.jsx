import React, {Component} from 'react';
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="o-card">
                    <h4 className="o-card-title">{this.props.children}
                    <span className="o-card-indicator"></span></h4>
                <span></span>
            </div>
        );
    }
}

export default Card;