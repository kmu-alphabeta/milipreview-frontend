import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './AppRoutes';
import './App.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
