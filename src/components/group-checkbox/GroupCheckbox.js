import React from 'react';

import style from './styles';

export default class GroupCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({
            isChecked: !this.state.isChecked
        })

    }

    render() {
        return (
            <input type="checkbox"
                   checked={this.state.isChecked}
                   onChange={this.onChange}
                   style={style.checkbox}
            />
        )
    }
}
