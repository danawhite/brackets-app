import React from 'react';

import { regionals } from '../../models/rounds';
import Matchup from '../matchup/matchup';
import RegionalStyles from './stylesheet';

export default class Regional extends React.Component {
    constructor(props) {
        super(props);

        this.style = RegionalStyles;
    }

    render() {
        return (
            <div>
                <div ref={ ref => this.firstLane = ref }
                     style={this.style.firstLane}>
                        {this.matchups.map(matchup => {
                        return(
                            <Matchup key={uuid.v4()}
                                     selected={null}
                                     matchup={matchup}
                            />
                        )
                    })}
                </div>
                <div ref={ ref => this.secondLane = ref }
                     style={this.style.secondLane}>
                    {regionals.map(round => {
                        return (
                            <Matchup key={uuid.v4()}
                                     name="default"
                                     selected={null}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}