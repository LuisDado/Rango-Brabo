import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './components/img1';
 import Descricao from './components/Descricao';
 import Cardapio from './components/cardapio';
import Navbar2 from './components/NavBar';
import './App.css';
import Titulo from './components/Titulo';
import Image2 from './components/img2';

function App() {
  return (
    <>
      {/*Parte 1*/}
      <div>
          <Navbar2 />
      </div>
      <div className='image1'>
        <Image/>
      </div>
      <div className='caixa'>
        <Titulo/>
        <Descricao/>
      </div>
      {/*Parte 2*/}
      <div className='caixa'>
        <Cardapio/>
      </div>
      <div className='image2'>
        <Image2/>
      </div>
    </>
  );
}

export default App;