import React, { Component } from 'react'
import styles from '../../styles'
import { Text, TouchableOpacity, Image, Modal, View, ScrollView } from 'react-native'
import Like from './Like'
import Stars from './Stars'



export default class Experiences extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.card}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        this.props.experiences.map((experience, index) => (

                            <View key={`experience-item-${index}`}>
                                <Image style={[styles.experiencesCard, { width: 150, height: 100, marginRight: 20, position: "relative" }]} source={experience.photo} />
                                <Like iconName='heart-o' style={styles.ff}></Like>
                                <Text style={styles.experienceCardType}>{experience.type}</Text>
                                <Text numberOfLines={2} style={[styles.experienceCardTitle, { width: 150 }]}>{experience.title}</Text>
                                <Text style={[styles.experienceCardPrice]}>${experience.price} {experience.priceType}</Text>
                                <View style={styles.starsIconContainer}>
                                    <Stars iconName='star-o' style={styles.starsIcon}></Stars>
                                    <Text style={styles.starsIconText}>sqsz</Text>
                                </View>
                            </View>

                        ))

                    }
                </ScrollView>
            </View>






        )
    }
}