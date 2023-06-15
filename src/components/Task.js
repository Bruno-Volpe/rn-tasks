import React from "react";
import { View, StyleSheet, Text } from "react-native"; 'react-native'
import { Icon } from "react-native-vector-icons/FontAwesome";

import commonStyles from '../commonStyles'

export default (props) => {
    const getCheckView = (doneAt) => {
        if (doneAt !== null) return (
            <View style={styles.done} >
                <Icon name="check" size={20} color={commonStyles.color.secudary} />
            </View>
        )

        return (
            <View style={styles.pending} ></View>
        )
    }

    return (
        <View style={styles.container} >
            <View style={styles.checkContainer} >
                {getCheckView(props.doneAt)}
            </View>

            <View>
                <Text>{props.desc}</Text>
                <Text>{props.estimateAt + ""}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },

    checkContainer: {
        width: "20%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',
    },

    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent:
    }
})