
import { StyleSheet, Text, View } from 'react-native';


import Main from './Main';

import UserContextPovider from './store/user-context';





export default function App() {



  return (
    <>
      <UserContextPovider>
        <Main/>
      </UserContextPovider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
