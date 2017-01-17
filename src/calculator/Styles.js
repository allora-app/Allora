import { StyleSheet } from 'react-native';
import { sizes } from '../constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizes.statusBar,
    paddingBottom: sizes.tabBar
  },
  display: {
    flex: 2,
    backgroundColor: '#193441',
    justifyContent: 'center'
  },
  displayText: {
    color: 'white',
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  },
  buttons: {
    flex: 8,
    backgroundColor: '#3E606F'
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },
  inputButtonHighlight: {
    backgroundColor: '#193441'
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Styles;
