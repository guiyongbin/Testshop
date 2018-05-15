/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {

    StyleSheet,
    Text,
    View
} from 'react-native';
import Counter1 from "./src/component/Counter1"
import Counter from "./src/component/Counter"
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.initValues = [1, 2, 3];
        const initSum = this.initValues.reduce((a, b) => a + b, 0);
        this.state = {
            sum: initSum
        };
        this.onUpdate = this.onUpdate.bind(this)
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={{margin: 10, fontSize: 20, color: 'black'}}>总计 {this.state.sum}</Text>
                <Counter style={{margin: 10}} onUpdate={this.onUpdate} initValue={this.initValues[0]}/>
                <Counter style={{margin: 10}} onUpdate={this.onUpdate} initValue={this.initValues[1]}/>
            </View>
        );
    }

    onUpdate(oldValue, newValue) {
        const valueChange = newValue - oldValue;
        this.setState({sum: this.state.sum + valueChange})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }

});
