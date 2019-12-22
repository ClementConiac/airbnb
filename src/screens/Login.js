import React, { Component } from 'react'
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import styles from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'



export default class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={styles.forgotPasswordContainerLogin}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.forgotPasswordIconLogin}>
                            <Icon
                                name="arrow-left"
                                size={20}
                                style={styles.buttonBackIconLogin}
                            />
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.forgotPasswordTextLogin}>Mot de passe oublié ?</Text>
                </View>
            )
        }
    };
    state = {
        inputEmail: '',
        inputPassword: '',
        secureTextEntry: true
    }

    toggleSecureTextEntry = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }
    /* isEmailValid = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    } */

    render() {
        // Show n'a pas besoin de faire partie du state car il peut être finalement
        // déduit de inputEmail et inputPassword
        const show = this.state.inputEmail && this.state.inputPassword
        return (
            <View style={styles.containerLogin}>

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
                            this.setState({
                                inputEmail: text,
                            })
                        }}
                        value={this.state.inputEmail}
                    />
                </View>

                <View style={styles.containerInputLogin}>
                    <View style={styles.containerInputTitleLogin}>
                        <Text style={styles.inputTitleLogin}>MOT DE PASSE</Text>
                        <TouchableOpacity onPress={this.toggleSecureTextEntry}>
                            <Text style={styles.inputTitleLogin}>Afficher</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.textInputContainerLogin}
                        onChangeText={(text) => {
                            this.setState({
                                inputPassword: text,
                            })
                        }}
                        value={this.state.inputPassword}
                        secureTextEntry={this.state.secureTextEntry}
                    />
                </View>


                <View style={styles.roundedOpacityLogin} opacity={show ? 1 : 0}>
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
