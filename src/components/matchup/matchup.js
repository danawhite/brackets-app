import React from 'react';
import PropTypes from 'prop-types';

import Group from '../group/Group';

export default class Matchup extends React.Component {
    constructor(props) {
        super(props);
        console.log('Matchup', props);

        this.state = {
            selected: null

        };
        this.styles = {
            container: {
                paddingTop: 5,
                paddingBottom: 5
            },
            firstRound: {
                width: 300,
                backgroundColor: 'cornsilk'
            },
            secondRound: {
                width: 500,
                backgroundColor: 'purple'
            }
        };


        this.renderMatchupWithGroups = this.renderMatchupWithGroups.bind(this);
        this.renderDefaultMatchup = this.renderDefaultMatchup.bind(this);
        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(group) {
        console.log('onSelected: ${props}', group);
        this.setState({
            selected: group
        });
    }

    renderMatchupWithGroups(matchup) {
        return matchup.map(group => {
            console.log('group', group);
            return (
                <Group  key={group.name}
                        name={group.name}
                        seed={group.seed}
                        style={this.styles.firstRound}
                        onSelected={this.onSelected}
                />
            )
        })
    };

    renderDefaultMatchup() {
        return (
            <div>
                <Group style={this.styles.secondRound}/>
                <Group style={this.styles.secondRound}/>
            </div>
        )
    }

    render() {
        return (
            <div style={this.styles.container}>
                {this.props.matchup
                    ? this.renderMatchupWithGroups(this.props.matchup)
                    : this.renderDefaultMatchup()
                }
            </div>
        )
    }
}

Matchup.propTypes = {
    matchup: PropTypes.array,
    round: PropTypes.string
};

Matchup.defaultProps = {};



