import { Provider } from 'react-redux';
import store from './redux/Store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import BeerContainer from './components/BeerContainer';
import NewIcecreamContainer from './components/NewIcecreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer/>
     <HookCakeContainer/>
     <IcecreamContainer/>
     <BeerContainer/>
     <NewIcecreamContainer/>
     <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
