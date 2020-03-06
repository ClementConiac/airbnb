import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


import styles from '../../styles'
export default class Stars extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        nbStars = [1, 2, 3, 4, 5]
        return (
            nbStars.map((valeur, index) => (
                <View style={styles.rr} key={`stars-numbers-${index}`}>
                    <Icon name={this.props.iconName}
                        size={13}
                        style={styles.hearthIconExploreContainer, [{}]}>
                    </Icon>
                </View>

            ))
        )
    }
}