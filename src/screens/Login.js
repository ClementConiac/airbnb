import React, { Component } from 'react'
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native'
import styles from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Inputs from '../components/Inputs'



export default class Login extends Component {
    state = {
        inputEmail: null,
        inputPassword: null,
        show: 0
    }
    showButton = (inputEmail, inputPassword) => {
        if(inputEmail && inputPassword) {
            this.setState({ show: 1 })
        } else {
            this.setState({ show: 0 })
        }
    }
    render() {
        return (
            <View style={styles.containerLogin}>
                <View style={styles.forgotPasswordContainerLogin}>
                    <Text style={styles.forgotPasswordIconLogin}>
                        <Icon
                            name="arrow-left"
                            size={20}
                            style={styles.buttonBackIconLogin}
                        />
                    </Text>

                    <Text style={styles.forgotPasswordTextLogin}>Mot de passe oublié ?</Text>
                </View>
                <View style={styles.connexionContainerLogin}>
                    <Text style={styles.connewionTitleLogin}>Connexion</Text>
                </View>
                <Inputs
                    content={'ADRESSE E-MAIL'}
                    bisContent={''}
                    marginBottom={15}
                />
                <Inputs
                    content={'MOT DE PASSE'}
                    bisContent={'Afficher'}
                />
                <View style={styles.roundedOpacityLogin} opacity={this.state.show}>
                    <TouchableOpacity style={styles.roundedOpacityButtonLogin}>
                        <Text style={styles.roundedOpacityButtonContentLogin}>
                            <Icon
                                name="chevron-right"
                                size={30}
                                style={styles.buttonBackIconLogin}
                            />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
