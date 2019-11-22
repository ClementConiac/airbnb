import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Modal, TouchableHighlight, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../../styles'
import RoundedButtons from '../components/RoundedButtons'
import ModalMoreInformation from '../components/Modals'


export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.containerLoginScreen}>

                <View style={styles.connexionNavLoginScreen}>
                    <Text style={styles.connexionNavTextLoginScreen}>Connexion</Text>
                </View>
                <View style={styles.imageContainerLoginScreen}>
                    <Image
                        style={styles.imageLoginScreen}
                        source={require('../assets/img/airbnb-logo.png')}
                    />
                </View>
                <View style={styles.buttonContainerLoginScreen}>
                    <Text style={styles.buttonTitleLoginScreen}>
                        Bienvenue sur Airbnb.
                    </Text>
                    <RoundedButtons
                        content={'Continuer avec Facebook'}
                        backgroundColor={'white'}
                        marginBottom={16}
                        textColor={'#02656B'}
                        marginRight={15}
                        icon={<Icon
                            name="facebook"
                            size={20}
                            style={styles.buttonFacebookIconLoginScreen}
                        />}
                    />
                    <RoundedButtons
                        content={'Créer un compte'}
                        backgroundColor={'#02656B'}
                        borderColor={'white'}
                        borderWidth={1}
                        textColor={'white'}
                        color={'white'}
                    />

                </View>

                <ModalMoreInformation
                />

                <View style={styles.descriptionContainerLoginScreen}>


                    <Text style={styles.descriptionLoginScreen}>
                        En appuyant sut Continuer, Créer un compte ou Plus d'option, j'accepte les <Text style={styles.descriptionSpanLoginScreen}>Conditions générales</Text>, les <Text style={styles.descriptionSpanLoginScreen}>Conditions de service relatives aux paiements</Text>, la <Text style={styles.descriptionSpanLoginScreen}>Politique de confidentialités</Text> et la <Text style={styles.descriptionSpanLoginScreen}>Politique de non-discrimination</Text> d'Airbnb.
                    </Text>
                </View>
            </View>
        )
    }
}
