import React, { Component } from 'react';
import styles from '../../styles'
import { Text, TouchableOpacity } from 'react-native';

export default class RoundedButtons extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { backgroundColor, marginBottom, borderWidth, textColor, borderColor, marginRight, icon } = this.props
        return (
            <TouchableOpacity style={[styles.buttonLoginScreen, { backgroundColor, marginBottom, borderWidth, borderColor }]}>
                {icon}
                <Text style={[styles.buttonTextLoginScreen, { color: textColor, marginRight }]}>
                    {this.props.content}
                </Text>
            </TouchableOpacity>
        );
    }
}