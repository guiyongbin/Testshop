/**
 * Created by Administrator on 2018/6/7.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';

export default class Counter2 extends Component {


    constructor(props) {
        super(props)
        this.state = {
            value: this.props.initValue || 1,
        };
        this.update = this.update.bind(this)
    }


    render() {
        return (
            <View style={[this.props.style,styles.containerBox]}>
                <TouchableOpacity onPress={this.reduce.bind(this)}>
                    <View style={styles.reduceStyle}>
                        <Text style={styles.btn}>-</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.input}>
                    <TextInput style={styles.inputTextStyle}
                               maxLength={3}
                               underlineColorAndroid="transparent"
                               onChangeText={(txt)=> this.update.bind(this)}>


                    </TextInput>
                </View>

                <TouchableOpacity onPress={this.add.bind(this)}>
                    <View style={styles.addStyle}>
                        <Text style={styles.btn}>+ </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    reduce() {

    }


    add() {

    }

    update(value) {
        this.props.onUpdate(this.state.value, value)
        this.setState({value: value})//setState 是自带的？
    }

}

const styles = StyleSheet.create({
    containerBox: {

        width:120,
        height:35,
        borderColor: '#ddd', // 边框颜色
        backgroundColor:'#ffffff',
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden',
        borderWidth:2,
        borderRadius:4,

    },
//盒子里的 控件都是 flex : 1   控件会评分盒子空间
    input:{
        flex:1,
        textAlign:'center',
        fontSize:16,
        backgroundColor: 'transparent',
        padding:0,
    },
    inputTextStyle:{
        flex:1,//

    },


    addStyle: {
        width:34,
        height:34,
        alignItems: 'center',
        justifyContent: 'center',//在弹性盒对象的 <div> 元素中的各项周围留有空白：
        borderLeftColor: '#ddd',
        borderLeftWidth:2,
    },
    reduceStyle: {
        borderRightColor: '#ddd',
        width:34,
        height:34,
        alignItems: 'center',
        justifyContent: 'center',//在弹性盒对象的 <div> 元素中的各项周围留有空白：
        borderRightWidth:2,
    },


    btn:{
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'transparent'
    },




})

Counter2.propTypes = {
    initValue: PropTypes.number,
    style: PropTypes.object,
    onUpdate: PropTypes.func
}