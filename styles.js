import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
    containerLoginScreen: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#02656B'
    },
    connexionNavLoginScreen: {
        backgroundColor: '#02656B',
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
    connexionNavTextLoginScreen: {
        color: 'white',
        fontSize: 15
    },
    imageContainerLoginScreen: {
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    imageLoginScreen: {
        width: 60,
        height: 60
    },
    buttonContainerLoginScreen: {
        flex: 2,
        justifyContent: 'flex-start'
    },
    buttonTitleLoginScreen: {
        color: 'white',
        fontSize: 30,
        paddingTop: 15,
        paddingBottom: 40
    },
    buttonLoginScreen: {
        borderRadius: 40,
        overflow: 'hidden',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttonTextLoginScreen: {
        textAlign: 'center',
        fontSize: 20,
    },
    buttonFacebookIconLoginScreen: {
        color: '#02656B',
        padding: 0,
        margin: 0
    },
    descriptionContainerLoginScreen: {
        flex: 2
    },
    descriptionTitleLoginScreen: {
        color: 'white',
        fontSize: 20,
        marginBottom: 30
    },
    descriptionLoginScreen: {
        color: 'white',
        fontSize: 17
    },
    descriptionSpanLoginScreen: {
        textDecorationLine: 'underline'
    },
    containerModalLoginScreen: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#02656B',
        justifyContent: 'space-between'
    },
    buttonCLoseModalLoginScreen: {
        color: 'white',
        fontSize: 20
    },


    containerLogin: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#02656B'
    },

    forgotPasswordContainerLogin: {
        height: 30,
        backgroundColor: '#02656B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    forgotPasswordIconLogin: {
        color: 'white',
        fontSize: 15
    },
    forgotPasswordTextLogin: {
        color: 'white',
        fontSize: 15,
    },
    connexionContainerLogin: {
        flexDirection: 'row',
        flex: 0.2,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 35
    },
    connewionTitleLogin: {
        color: 'white',
        fontSize: 30
    },
    containerInputLogin: {
        flex: 0.3
    },
    containerInputTitleLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputTitleLogin: {
        color: 'white',
        fontSize: 15
    },
    textInputContainerLogin: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: 'white',
        fontSize: 15
    },
    buttonBackIconLogin: {
        color: '#ffffff',
    },
    roundedOpacityLogin: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    roundedOpacityButtonLogin: {
        backgroundColor: '#008188',
        borderRadius: 40,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 15
    },
});

export default styles;