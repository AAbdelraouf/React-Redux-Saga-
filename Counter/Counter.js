import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, TouchableHighlight, ListView } from 'react-native';
import Store from '../Redux/Store/Store';
import { connect } from 'react-redux';
import { addNumber, subtractNumber, getData } from '../Redux/Actions/Actions';

import { payLoadOne, payLoadSubtract } from '../Redux/Payloads/PayloadsOne';
import { bindActionCreators } from 'redux';

export class Counter extends Component {
    dispatch_AddNumber = () => {
        Store.dispatch(addNumber())
    }

    dispatch_SubtractNumber = () => {
        Store.dispatch(subtractNumber())
    }
    render() {
        return (
            <View>
                {/* <TouchableOpacity>
                    <Text onPress={this.dispatch_AddNumber} >+</Text>
                </TouchableOpacity> */}

                {this.props.count.map((article, index) => (
                    <Text key={article.id}>
                        {article.title}
                    </Text>
                ))
                }

                {/* <TouchableOpacity>
                    <Text onPress={this.dispatch_SubtractNumber}> - </Text>
                </TouchableOpacity> */}

                <TouchableHighlight>
                    <Text onPress={this.props.fetchDataProps} >Fetch remote APIs</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
var mapInfoToProps = (state) => {
    return { count: state.remoteArticles }
};

const mapDispatchToProps = {
    fetchDataProps: getData
};

export default connect(mapInfoToProps, mapDispatchToProps)(Counter);