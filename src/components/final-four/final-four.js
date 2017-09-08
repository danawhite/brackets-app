import React from 'react';
import ReactDOM from 'react-dom';

import Matchup from '../matchup/matchup';

export default class FinalFour extends React.Component {
    constructor(props) {
        super(props);

        this.style = {
            container: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center'
            }
        }
    }

    render() {
        return (
        <div style={this.style.container}>
            <Matchup/>
            <Matchup/>
            <Matchup/>
        </div>
        )
    };
}

//const FinalFour = () => {
//    return(
//        <div>
//            <Matchup/>
//            <Matchup/>
//            <Matchup/>
//        </div>
//        )
//};
//
//const render = () => {
//    ReactDOM.render(
//        <FinalFour/>
//    )
//};
//
//render();