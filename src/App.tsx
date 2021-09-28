import { ToastContainer } from 'react-toastify';
import { Header } from './components/Header';
import SearchZipCode from './pages/SearchZipCode';

import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <SearchZipCode />
      <ToastContainer limit={3} autoClose={5000} />
      <GlobalStyle />
    </>
  );
}

export default App;
