/**
 * Created by Administrator on 2018/6/3.
 */
'use strict';
import React,{Component} from 'react';

import{
    Text,
    View,
    StyleSheet,

} from 'react-native';

type
Props = {};
export default class MyPage extends Component<Props>{

    render(){
        return(
            <View style={styles.container}>
                <Text style={{margin:10,fontSize:20,color:'black'}}>MyPage</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',//用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
        alignItems:'center',//align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。
        backgroundColor:'#f5f5f5'
    }
})