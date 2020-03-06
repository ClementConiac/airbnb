import React, { Component } from 'react'
import { View, Image, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../../styles'
import Expreriences from '../components/Experiences'
import categories from '../data/categories'
import {experiences} from '../data/listing'


export default class ExploreContainer extends Component {
    render() {
        return (
            <View style={styles.containerContainer}>
                <Text style={styles.titleContainer}>Explore Airbnb</Text>
                <View  style={styles.containerExploreScreen}>
                    
                    {
                        categories.map((category, index) => (
                            <View key={`category-item-${index}`}>
                                <Image source={category.photo} style={styles.imageExploreScreen} />
                            </View>
                        ))
                    }
                </View>
                <View style={styles.experiencesContainer}>
                    <Text style={styles.titleContainer}>Expreriences</Text>
                    <TouchableOpacity>
                        <Text style={styles.sellAllContainer}>See all ></Text>
                    </TouchableOpacity>
                </View>
                
                <Expreriences 
                experiences = {experiences}
                />
            </View>
        )
    }
}