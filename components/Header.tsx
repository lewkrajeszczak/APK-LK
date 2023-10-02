import {Text, View, StyleSheet} from "react-native";

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
        height: "12%",
        backgroundColor: "black",
        alignItems: "center",
    },
    headerTitle: {
        display: "flex",
         color: "purple",
        fontSize: 30,
        fontWeight: "bold",
        padding: 20,
        marginTop: 20,
    }
});