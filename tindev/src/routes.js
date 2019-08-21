import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './pages/login';
import Main from './pages/Main';

export default createAppContainer( //precisa ficar por volta de toda a navegação
    createSwitchNavigator({ // cria uma navegação entre duas telas sem qualquer feedback/animação
        Login,
        Main,
    })
);
