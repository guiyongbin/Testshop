/**
 * Created by Administrator on 2018/7/7.
 */

'use strict';
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    RefreshControl,
    ListView,
    Image,
} from 'react-native';
let page = 1;
let data = [];
var REQUEST_URL = 'http://gank.io/api/data/福利/10/';
export default class ListPage extends Component<Props> {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            //  page: 1,
            //  data: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL + this.state.page)
            .then((response) => response.json())
            .then((responseData) => {

                data = responseData.results;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    loaded: true,
                });

            })
            .done();
    }

    reloadWordData() {

        new Promise((resolve) => {
            setTimeout(()=> {
                resolve()
            }, 2000)
        });
    }


    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }


        return (
            <ListView
                refreshControl={<RefreshControl
                                  refreshing={false}
                                  onRefresh={this.reloadWordData.bind(this)}/>
                                   }
                dataSource={this.state.dataSource}
                renderRow={this.renderItems}
                style={styles.listView}
                onEndReached={this.onEndReached.bind(this)}
                onEndReachedThreshold={ 100 }
            />
        )
    }

    onEndReached() {


        this.loadMore();

    }


    loadMore() {

        page = page + 1;
        fetch(REQUEST_URL + page)
            .then((response) => response.json())

            .then((responseData) => {

                data = data.slice().concat(responseData);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    loaded: true,
                });
            })
            .done();
    }


    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>Loading ......</Text>
            </View>

        );
    }


    renderItems(date) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: date.url}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{date.who}</Text>
                    <Text style={styles._create_time}>{date.createdAt}</Text>
                </View>
            </View>
        );
    }
}
// 样式文件
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginBottom: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    thumbnail: {
        width: 81,
        height: 53,
        marginLeft: 30,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    _create_time: {
        textAlign: 'center',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },

});
