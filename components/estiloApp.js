import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  superior: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },

  container: {
    backgroundColor: '#dfe4ccff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
  },

  item: {
    backgroundColor: '#c8aef3ff',
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginTop: 10,
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default estilo;
