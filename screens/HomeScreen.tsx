import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.itemButton}>
                <Icon style={styles.icon} name="create-outline" />
                <Text style={styles.headerTitle}>Utwórz Nową Notatkę</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton}>
                <Icon style={styles.icon} name="document-outline" />
                <Text style={styles.headerTitle}>Twoje Notatki</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
    },
    itemButton: {
        width: Dimensions.get("window").width - 40,
        height: 100,
        margin: 20,
        backgroundColor: "#333",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    icon: {
        fontSize: 30,
        color: "#0070E0",
    },
});
