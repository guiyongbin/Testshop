
'use strict';
import React, {Component} from 'react'
import Counter2 from '../component/Counter2';
import Counter from '../component/Counter';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';

type
Props = {};
export default class IndexPage extends Component<Props> {

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
                <Text style={{margin:10,fontSize:20,color:'black'}}>首页</Text>
                <Counter2></Counter2>
                <Counter></Counter>
                <TouchableWithoutFeedback
                    onPress={() => this._JumpToList()}>
                    <View>
                        <Text style={styles.welcome}>
                            跳到list
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }


    _JumpToList() {
        this.props.navigation.navigate("list")
    }
}
// 样式文件
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btnStyle: {
        width:200,
        height:100,
        backgroundColor:'#d51730',
    }
});
