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
        flex: 0.5,
        alignItems: 'flex-end',
        justifyContent: 'center'
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
});

export default styles;