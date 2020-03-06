import React, { Component } from 'react';
import styles from '../../styles'
import { Text, TextInput, View } from 'react-native';

export default class RoundedButtons extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { marginBottom } = this.props
        return (
            <View style={styles.containerInputLogin}>
                <View style={styles.containerInputTitleLogin}>
                    <Text style={styles.inputTitleLogin}>{this.props.content}</Text>
                    <Text style={styles.inputTitleLogin}>{this.props.bisContent}</Text>
                </View>

                <TextInput
                    style={[styles.textInputContainerLogin, , { marginBottom }]}
                />
            </View>

        );
    }
}