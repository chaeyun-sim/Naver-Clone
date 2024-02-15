import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './pages';
import FindId from './pages/Signup/FindId';
import FindPassword from './pages/Signup/FindPassword';
import SignupForm from './pages/Signup/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/user2/help/idInquiry" element={<FindId />} />
        <Route path="/user2/help/pwInquiry" element={<FindPassword />} />
        <Route path="/user2/join/agree" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
