import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Signin from '../views/Signin';
import Recover from '../views/Recover';
import RecoverPassword from '../views/RecoverPassword';
import Create from '../views/Create';
import Home from '../views/Home';
import Funcionarios from '../views/Funcionarios';
/*import Adms from '../views/Adms';
import Imoves from '../views/Imoves';
import Func from '../views/Func';
import FuncEfetivo from '../views/FuncEfetivos';
import FuncContrato from '../views/FuncContrato';
import FuncTercerizado from '../views/FuncTercerizado';
import Estagiario from '../views/Estagiario';
import EstagioRemunerado from '../views/EstagioRemunerado';
import EstagioObrigatorio from '../views/EstagioObrigatorio';*/

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Signin/>
  },
  {
    path: '/recover.code',
    element: <Recover/>
  },
  {
    path: '/recover.code-password',
    element: <RecoverPassword/>
  },
  {
    path: '/create.adm',
    element: <Create/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/funcionarios',
    element: <Funcionarios/>
  },
])

export default function Routes(){
    return(
        <RouterProvider router={routes}/>
    )
}