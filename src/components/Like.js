import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


import styles from '../../styles'
export default class Like extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity style= {[styles.dd, {position: "absolute", top: 10, right: 30}]} >
                <Icon name={this.props.iconName}
                    size={20}
                    style={styles.hearthIconExploreContainer, [{}]}>

                </Icon>
            </TouchableOpacity>
        )
    }
}