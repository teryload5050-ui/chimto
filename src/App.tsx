/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Facebook,
  Youtube,
  Mail,
  Menu
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Tutors from './pages/Tutors';
import Contact from './pages/Contact';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const location = useLocation();
  const isAbout = location.pathname === '/about';
  const isBlog = location.pathname === '/blog';
  const isTutors = location.pathname === '/tutors';
  const isContact = location.pathname === '/contact';
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-orange-100 px-4 sm:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-text-main">StudyMatchVN</h1>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isHome ? 'text-primary font-bold' : 'text-text-main hover:text-primary'}`}>Trang chủ</Link>
          <Link to="/tutors" className={`text-sm font-medium transition-colors ${isTutors ? 'text-primary font-bold' : 'text-text-main hover:text-primary'}`}>Gia sư</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isAbout ? 'text-primary font-bold' : 'text-text-main hover:text-primary'}`}>Về chúng tôi</Link>
          <Link to="/blog" className={`text-sm font-medium transition-colors ${isBlog ? 'text-primary font-bold' : 'text-text-main hover:text-primary'}`}>Blog</Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${isContact ? 'text-primary font-bold' : 'text-text-main hover:text-primary'}`}>Liên hệ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex h-10 px-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
            Đăng nhập
          </button>
          <button className="hidden sm:flex h-10 px-6 items-center justify-center rounded-full bg-orange-100 text-text-main text-sm font-bold hover:bg-orange-200 transition-colors">
            Đăng ký
          </button>
          <button className="lg:hidden p-2 text-text-main">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-background-light border-t border-orange-100 px-4 py-16 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-main">StudyMatchVN</h3>
          </div>
          <p className="text-sm text-text-sub leading-relaxed">
            Kết nối tri thức, kiến tạo tương lai. Nền tảng gia sư công nghệ hàng đầu Việt Nam.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-text-main">Về chúng tôi</h4>
          <ul className="space-y-3 text-sm text-text-sub">
            <li><Link to="/about" className="hover:text-primary transition-colors">Câu chuyện</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Đội ngũ</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Tuyển dụng</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Tin tức</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-text-main">Hỗ trợ</h4>
          <ul className="space-y-3 text-sm text-text-sub">
            <li><a href="#" className="hover:text-primary transition-colors">Trung tâm trợ giúp</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Quy định bảo mật</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Điều khoản sử dụng</a></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Liên hệ</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-text-main">Kết nối</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-all shadow-sm">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-all shadow-sm">
              <Youtube size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-all shadow-sm">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-orange-100 text-center text-sm text-text-sub">
        © 2024 StudyMatchVN. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
