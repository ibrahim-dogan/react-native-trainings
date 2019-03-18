import React from "react";
import {AsyncStorage, Button, StatusBar, StyleSheet, View} from "react-native";

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync}/>
                <Button title="Go to Tabbed Page" onPress={this._goTabbedPage}/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    _goTabbedPage = async () => {
        this.props.navigation.navigate('Main');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});