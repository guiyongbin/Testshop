/**
 * Created by Administrator on 2018/6/3.
 */
import React,{Component} from 'react';
import{
    Image,StatusBar,
    View
} from 'react-native';
import theme from '../config/theme';
export default class SplashPage extends Component {

    componentDidMount(){
        //定时任务
        this.timer=setTimeout(()=>{
            this.props.navigation.replace("MyTab");
            this.timer&&clearTimeout(this.timer);
        },1000);
    }



    render() {
        return (
         <View>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
            <Image style={{width:theme.screenWidth,height:theme.screenHeight}}
                   resizeMode="cover"
                   source={require("../images/launch.png")}/>
         </View>
        );
    }
}
