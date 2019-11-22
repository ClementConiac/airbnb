import React, { Component } from 'react'
import styles from '../../styles'
import { Text, TouchableOpacity, Modal, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import RoundedButtons from '../components/RoundedButtons'


export default class ModalMoreInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.containerModalLoginScreen}>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.buttonCLoseModalLoginScreen}>X</Text>
                            </TouchableOpacity>
                            <RoundedButtons
                                content={'Facebook'}
                                backgroundColor={'white'}
                                marginBottom={16}
                                textColor={'#02656B'}
                                icon={<Icon
                                    name="facebook"
                                    size={20}
                                    style={styles.buttonFacebookIconLoginScreen}
                                />}
                            />
                            <RoundedButtons
                                content={'Google'}
                                backgroundColor={'white'}
                                marginBottom={16}
                                textColor={'#02656B'}
                                icon={<Icon
                                    name="google"
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
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => {
                    this.setModalVisible(true);
                }}>
                    <Text style={styles.descriptionTitleLoginScreen}>
                        Plus d'options
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


