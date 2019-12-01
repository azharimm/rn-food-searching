import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen'
import ResultsScreen from './src/screens/ResultsScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultsScreen
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Food Search'
    }
  }
)

export default createAppContainer(navigator)