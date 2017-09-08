import React from 'react';

import Pairings from '../../models/pairings';
import Matchup from '../matchup/matchup';
import Regions from '../../models/Regions';
import FinalFour from '../final-four/final-four';
import * as Rounds from '../../models/Rounds';
import { styles } from './Stylesheet.js'

const style = {
    flex: 1
};

export default class Region extends React.Component {
    constructor(props) {
        super(props);
        console.log('Region ', props);
        console.log('Region ', Rounds.firstRound);
        //this.style = RegionStyles;

        this.state = {
            groups: props.groups,
            matchups: [],
            regionals: []
        };

        this.matchups = [];
        this.regionals = [];

        this.getMatchupsFromPairings = this.getMatchupsFromPairings.bind(this);
        this.getMatchupFromMatchups = this.getMatchupFromMatchups.bind(this);
        this.createFirstRoundMatchups = this.createFirstRoundMatchups.bind(this);
        this.createRegionalMatchups = this.createRegionalMatchups.bind(this);
        this.setSelectedGroup = this.setSelectedGroup.bind(this);
        this.renderRegions = this.renderRegions.bind(this);
        this.renderFinalFour = this.renderFinalFour.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getKeyForMatchup = this.getKeyForMatchup.bind(this);

        this.getMatchupsFromPairings(Pairings);

        this.getRegionalMatchupsFromRounds(Rounds.regionals);
    }

    componentDidMount() {
        //this.r.style.backgroundColor = 'indianred';
    }

    getMatchupsFromPairings(pairings) {
        return pairings.reduce(this.createFirstRoundMatchups, []);
    }

    createFirstRoundMatchups(matchups, pairing) {
        let matchup = [];

        pairing.forEach(seed => {
            this.state.groups
                .filter(group => {
                    return group.seed == seed;
                })
                .map(group => {
                    matchup.push(group);
                });
        });

        this.matchups.push(matchup);

        return matchups;
    };

    getRegionalMatchupsFromRounds(rounds) {
        return rounds.reduce(this.createRegionalMatchups, []);
    }

    createRegionalMatchups(matchups, regional) {
        regional.forEach(item => {
            this.regionals.push(item);
        });

        return matchups;
    }

    setSelectedGroup(matchup) {
        console.log('setSelectedGroup', matchup);
    }

    getKeyForMatchup(round) {
        console.log(`getKeyForMatchups, ${this.props.region}.${round}`);
        return `${this.props.region}.${round}`
    }

    getMatchupFromMatchups(matchups, region, round) {
        let matchupIndex = round.charAt(round.length -1 );
        console.log(`matchupIndex: ${matchupIndex}`);
        return matchups
            .filter((matchup, index) => matchupIndex == index )[0]
    }

    renderRegions() {
        console.log('renderRegions');
        return Regions
            .filter(region => region !== 'FinalFour' && region === this.props.region)
            .map(region => {
                //console.log(`renderRegions: region ${region}`);
                return (
                    <div style={style} key={region}>
                        <div ref={ ref => this.firstLane = ref }
                             style={styles.firstLane}>
                            {Rounds.firstRound.map(round => {
                                return(
                                    <Matchup key={this.getKeyForMatchup(round)}
                                             selected={null}
                                             round={round}
                                             matchup={this.getMatchupFromMatchups(this.matchups, region, round)}
                                    />
                                )
                            })}
                        </div>
                        <div ref={ ref => this.secondLane = ref }
                             style={styles.secondLane}>
                            {this.regionals.map((round) => {
                                return (
                                    <Matchup key={this.getKeyForMatchup(round)}
                                             selected={null}
                                             round={round}
                                             matchup={null}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )
            });

    }

    renderFinalFour() {
        console.log('renderFinalFour');
        return (
            <div>
                <FinalFour/>
            </div>
        )
    }

    handleClick(event) {
        console.log(event);
    }

    render() {
        const {groups} = this.props;
        return (
            <div style={styles.container}>
                {groups.length
                    ? this.renderRegions()
                    : this.renderFinalFour()
                }
            </div>
        )
    }
}

