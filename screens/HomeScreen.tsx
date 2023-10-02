import {Text, View, StyleSheet} from "react-native";
import React from "react";
import {Dimensions} from "react-native";
    export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemButton}>
                <Text style={styles.headerTitle}>Utwórz Nową Notatkę</Text>
            </View>
            <View style={styles.itemButton}>
                <Text style={styles.headerTitle}>Twoje Notatki</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginTop: 50,
    },
    itemButton: {
        width: Dimensions.get("window").width = 400,
        height: "10%",
        margin: 6,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        display: "flex",
        color: "purple",
        fontSize: 10,
        fontWeight: "bold",
        padding: 20,
    }
});