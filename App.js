/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator

} from 'react-navigation';


//页面切换动画插入器
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import Counter1 from "./src/component/Counter1"
import Counter from "./src/component/Counter"
import MyPage from "./src/pages/MyPage"
import Splash from "./src/pages/SplashPage"
import Index from "./src/pages/IndexPage"
import theme from "./src/config/theme"
import list from "./src/pages/ListPage"
// 矢量图
import Icon from 'react-native-vector-icons/Ionicons';
type
    Props = {};

const MyTab = createBottomTabNavigator({
        Index: {
            screen: Index,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        },

        list: {
            screen: list,
            navigationOptions: {
                tabBarLabel: '列表',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        },

        MyPage: {
            screen: MyPage,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-person${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        }
    }, {
        tabBarOptions: {
            // label和icon的前景色 活跃状态下（选中）
            activeTintColor: theme.primaryColor,
            // label和icon的背景色 不活跃状态下
            inactiveBackgroundColor: theme.lightGray,
            // label和icon的前景色 不活跃状态下(未选中)
            inactiveTintColor: theme.lightBlack,
        }
    }
);
const App = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            gesturesEnabled: true,
            header: null  //去掉 react-navigation 提供的标题
        }
    },

    Index: {
        screen: Index,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <Icon name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
            )
        }
    },


    MyTab: {
        screen: MyTab,
        navigationOptions: {
            gesturesEnabled: true,
            header: null
        }
    }
}, {
    mode: 'card',// 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none',//// 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    transitionConfig: () => ({ //切换动画
        screenInterpolator: CardStackStyleInterpolator.forHorizontal //水平动画
    })
});

export default App
