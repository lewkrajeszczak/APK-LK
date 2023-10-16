import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Niger</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 80,
        backgroundColor: "#222",
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 30,
    },
});
