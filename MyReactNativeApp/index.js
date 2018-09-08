import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { NativeModules, NativeEventEmitter, requireNativeComponent,UIManager, findNodeHandle } from 'react-native'

import Counter from "./Counter"

const CounterView = requireNativeComponent("CounterView")

class RNHighScores extends React.Component {

  state = {
    count: 1
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  update = e => {
    this.setState({
      count: e.nativeEvent.count
    })
  }

  updateNative = () => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.counterRef),                     // 1
      UIManager["CounterView"].Commands.updateFromManager, // 2
      [this.state.count]                                   // 3
    );
  }

  render() {

    // instantiate the event emitter
//    const CounterEvents = new NativeEventEmitter(NativeModules.Counter)
//    // subscribe to event
//    CounterEvents.addListener(
//      "onIncrement",
//      res => console.log("onIncrement event", res)
//    )
//
//    NativeModules.Counter.increment()
//    NativeModules.Counter.getCount((first, ...others) => {
//      console.log("count is " + first)
//      console.log("other arguments " + others)
//    })

    // create a function that wraps the Promise
//    function decrement() {
//      NativeModules.Counter.decrement()
//        .then(res => console.log(res))
//        .catch(e => console.log(e.message, e.code))
//    }

    // create an async function that wraps the Promise
//    async function decrement() {
//      try {
//        const res = await NativeModules.Counter.decrement()
//        console.log(res)
//      } catch(e) {
//        console.log(e.message, e.code)
//      }
//    }

//    Counter.addListener(
//      "onIncrement",
//      res => console.log("event onIncrement   ", res)
//    )
//
//    Counter.getCount((first, ...others) => {
//      console.log("count is " + first)
//      console.log("other arguments  " + others)
//    })
//    Counter.increment()
//    Counter.decrement()
//    Counter.decrement()
//
//    var contents = this.props['scores'].map((score) => (
//      <Text key={score.name}>
//        {score.name}:{score.value}
//        {'\n'}
//      </Text>
//    ));


    return (
//      <View style={styles.container}>
////        <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
////        <Text style={styles.scores}>{contents}</Text>
//        <TouchableOpacity
//          style={[styles.wrapper, styles.border]}
//          onPress={this.increment}
//        >
//          <Text style={styles.button}>
//            {this.state.count}
//          </Text>
//        </TouchableOpacity>
//      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.wrapper, styles.border]}
          onPress={this.increment}
          onLongPress={this.updateNative}
        >
          <Text style={styles.button}>
            {this.state.count}
          </Text>
        </TouchableOpacity>
        <CounterView style={ styles.wrapper }
                     count={2}
                     onUpdate={this.update}
                     ref={e => this.counterRef = e}
        />
      </View>
    );
  }
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#FFFFFF',
//  },
//  highScoresTitle: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  scores: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "stretch"
  },
  wrapper: {
    flex: 1, alignItems: "center", justifyContent: "center"
  },
  border: {
    borderColor: "#eee", borderBottomWidth: 1
  },
  button: {
    fontSize: 50, color: "orange"
  }
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
