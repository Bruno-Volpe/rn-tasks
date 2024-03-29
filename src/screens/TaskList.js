import React from "react"
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import Task from "../components/Task"

import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from "../commonStyles"

import moment from "moment"
import 'moment/locale/pt-br'

export default (props) => {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={styles.container} >
            <ImageBackground source={todayImage} style={styles.background}>
                <View style={styles.titleBar} >
                    <Text style={styles.title} >Hoje</Text>
                    <Text style={styles.subTitle} >{today}</Text>
                </View>
            </ImageBackground>

            <View style={styles.taskList} >
                <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Data()} ></Task>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        flex: 3,
    },

    taskList: {
        flex: 7,
    },

    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.color.secudary,
        marginLeft: 20,
        marginBottom: 20,
    },

    subTitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.color.secudary,
        marginLeft: 20,
        marginBottom: 30,
    }
})