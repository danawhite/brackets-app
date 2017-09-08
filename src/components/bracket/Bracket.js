import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Region from './../region/Region';
import {regions} from '../../models/data-models';
import Groups from '../../models/Groups';

//const {createStore} = Redux;

class Bracket extends Component {
    constructor(props){
        super(props);
        this.getGroupsForRegion = this.getGroupsForRegion.bind(this);
        console.log(this);
        console.log(this.__proto__.constructor.name);


        this.style = {
            bracket: {
                display: 'flex'
            },
            container: {
                display: 'inline-block'
            },
            region: {
                flex: .5
            }
        }
    }

    getGroupsForRegion(groups, region) {
        return groups
            .filter(group => group.region === region)
            .map( group => group );
    }

    render() {
        return (
            <div style={this.style.bracket}>
                <div style={this.style.container}>
                    {regions.map(region => {
                        return (
                            <Region
                                key={region.name}
                                region={region.name}
                                groups={this.getGroupsForRegion(Groups, region.name)}
                                style={this.style.region}
                            />
                        )
                    })}
                </div>
                <div>
                </div>
            </div>
        )
    }
}

Bracket.propTypes = {
    field: PropTypes.array
};

export default Bracket;