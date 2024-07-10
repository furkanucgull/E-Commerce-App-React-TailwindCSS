import './App.css';
import './index.css';

import Header from './components/Header';
import PageContainer from './container/PageContainer';

import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
      </PageContainer>
    </>
  );
}

export default App;
