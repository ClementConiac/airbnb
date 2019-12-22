
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoggedOut from "./src/screens/LoggedOut"
import Login from "./src/screens/Login"

const MainStackNavigator = createStackNavigator({

  LoggedOut: { screen: LoggedOut },
  Login: { screen: Login },

},
  {
    // Un headerMode de type 'screen'  signifie qu'on va gérer directement le header
    // dans chaque écran grâce à la variable statique navigationOptions
    headerMode: 'screen'
  }
)

const App = createAppContainer(MainStackNavigator);



export default App;
