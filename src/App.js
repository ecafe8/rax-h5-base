import {createElement, render, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Link from 'rax-link';
import styles from './App.css';

class App extends Component {

  render() {
    return <View style={styles.outBox}>
      <View>
        <Text style={styles.helloWorld}>
          Hello world,
          Rax!
        </Text>
      </View>

      <Link href="//taobao.com" style={{color: 'blue'}}>
        <Image
          source={{uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png'}}
          style={{
            width: 100,
            height: 100,
          }}
        />
        Click here.
      </Link>
    </View>;
  }
}
export default App;
