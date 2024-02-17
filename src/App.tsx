import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './pages';
import FindId from './pages/Signup/FindId';
import FindPassword from './pages/Signup/FindPassword';
import CheckPermission from './pages/Signup/CheckPermission';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupForm from './pages/Signup/SignupForm';

let queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="/user2/help/idInquiry" element={<FindId />} />
          <Route path="/user2/help/pwInquiry" element={<FindPassword />} />
          <Route path="/user2/join/agree" element={<CheckPermission />} />
          <Route path="/user2/join/begin" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
