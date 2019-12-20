import React, { Component } from 'react'
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import styles from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Inputs from '../components/Inputs'



export default class Login extends Component {
    state = {
        inputEmail: '',
        inputPassword: '',
        show: 0
    }
    /* isEmailValid = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    } */
    showButton = (inputEmail, inputPassword) => {
        if (inputEmail === '' && inputPassword === '') {
            this.setState({ show: 0 })
        } else {
            this.setState({ show: 1 })
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
                {/*  <Inputs
                    content={'ADRESSE E-MAIL'}
                    bisContent={''}
                    marginBottom={15}
                />
                <Inputs
                    content={'MOT DE PASSE'}
                    bisContent={'Afficher'}
                /> */}
                <View style={styles.containerInputLogin}>
                    <View style={styles.containerInputTitleLogin}>
                        <Text style={styles.inputTitleLogin}>ADRESSE E-MAIL</Text>
                        <Text style={styles.inputTitleLogin}></Text>
                    </View>

                    <TextInput
                        style={styles.textInputContainerLogin}
                        onChangeText={(text) => {
                            this.setState({ inputEmail: text }, this.showButton(this.state.inputEmail, this.state.inputPassword)
                            ) /* ,console.log("email:", this.inputEmail) */
                        }}
                        value={this.state.inputEmail}
                    />
                </View>

                <View style={styles.containerInputLogin}>
                    <View style={styles.containerInputTitleLogin}>
                        <Text style={styles.inputTitleLogin}>MOT DE PASSE</Text>
                        <Text style={styles.inputTitleLogin}>Afficher</Text>
                    </View>

                    <TextInput
                        style={styles.textInputContainerLogin}
                        onChangeText={(text) => {
                            this.setState({ inputPassword: text }, this.showButton(this.state.inputEmail, this.state.inputPassword)
                            ) /* ,console.log("psw:", this.inputPassword) */
                        }}
                        value={this.state.inputPassword}
                    />
                </View>


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
