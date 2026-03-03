import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Grid, 
  List, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  "Tất cả",
  "Mẹo học tập",
  "Kinh nghiệm chọn gia sư",
  "Tin tức EdTech",
  "Review Khóa học"
];

const posts = [
  {
    category: "Mẹo học tập",
    date: "20 Tháng 10, 2023",
    readTime: "5 phút đọc",
    title: "Top 5 ứng dụng ghi chú cho sinh viên năm nhất",
    desc: "Từ Notion đến Obsidian, đâu là công cụ 'chân ái' giúp bạn quản lý kiến thức hiệu quả trong môi trường đại học đầy thử thách?",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Chọn gia sư",
    date: "18 Tháng 10, 2023",
    readTime: "7 phút đọc",
    title: "Làm sao để biết gia sư có phù hợp với con bạn không?",
    desc: "Những dấu hiệu nhận biết một gia sư tận tâm và phương pháp đánh giá hiệu quả sau 3 buổi học đầu tiên mà phụ huynh cần biết.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Công nghệ",
    date: "15 Tháng 10, 2023",
    readTime: "4 phút đọc",
    title: "AI trong giáo dục: Cơ hội hay thách thức?",
    desc: "Trí tuệ nhân tạo đang thay đổi cách chúng ta học tập như thế nào? Cùng StudyMatchVN phân tích xu hướng EdTech mới nhất năm 2024.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Ngoại ngữ",
    date: "10 Tháng 10, 2023",
    readTime: "6 phút đọc",
    title: "Lộ trình học IELTS 7.0 cho người mất gốc",
    desc: "Chi tiết kế hoạch học tập từng ngày, tài liệu cần thiết và những lỗi sai phổ biến cần tránh khi tự ôn luyện IELTS tại nhà.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Kỹ năng mềm",
    date: "08 Tháng 10, 2023",
    readTime: "3 phút đọc",
    title: "Quản lý thời gian: Kỹ năng sinh tồn thời 4.0",
    desc: "Cân bằng giữa việc học, làm thêm và hoạt động ngoại khóa không khó nếu bạn biết cách sắp xếp ưu tiên công việc.",
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "Gia sư",
    date: "05 Tháng 10, 2023",
    readTime: "5 phút đọc",
    title: "Chia sẻ của gia sư: 'Dạy học không chỉ là truyền đạt kiến thức'",
    desc: "Tâm sự chân thật của một gia sư 5 năm kinh nghiệm về nghề 'gõ đầu trẻ' và niềm vui khi thấy học trò tiến bộ.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background-grey py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-text-main tracking-tight"
          >
            Blog Tri Thức
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-sub text-lg max-w-2xl"
          >
            Khám phá kho tàng kiến thức, mẹo học tập đỉnh cao và những câu chuyện truyền cảm hứng từ cộng đồng StudyMatchVN.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-xl"
          >
            <input 
              className="w-full pl-6 pr-14 py-5 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary shadow-xl text-text-main placeholder:text-gray-400 outline-none transition-all" 
              placeholder="Tìm kiếm bài viết, chủ đề..." 
              type="text"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-rose-600 transition-colors">
              <Search size={20} />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-4"
          >
            {categories.map((cat, i) => (
              <button 
                key={i}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${i === 0 ? 'bg-primary text-white shadow-md shadow-orange-200' : 'bg-white text-text-sub border border-gray-100 hover:border-primary hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col gap-16">
        {/* Featured Post */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-[2.5rem] p-6 lg:p-12 border border-orange-50 shadow-2xl shadow-orange-100/50"
          >
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-rose-50 text-rose-500 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <TrendingUp size={12} /> Tiêu điểm
                </span>
                <span className="text-text-sub text-sm font-medium">12 Tháng 10, 2023</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black leading-tight text-text-main">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">
                  Phương pháp Pomodoro:
                </span> <br /> 
                Bí mật của sự tập trung
              </h2>
              <p className="text-text-sub text-lg leading-relaxed line-clamp-3">
                Bạn thường xuyên mất tập trung khi học bài? Thử ngay phương pháp quả cà chua Pomodoro để hack não bộ, tăng năng suất lên 200% chỉ sau một tuần áp dụng.
              </p>
              <div className="pt-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-text-main text-white rounded-full font-bold hover:bg-primary transition-all duration-300 group">
                  Đọc ngay
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800" 
                alt="Pomodoro" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </section>

        {/* Latest Posts */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-2xl font-bold text-text-main">Bài viết mới nhất</h3>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary bg-orange-50 border-primary/20">
                <Grid size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-text-main transition-colors">
                <List size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-rose-500/90 backdrop-blur-sm text-white text-[10px] font-bold rounded-full shadow-lg uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-text-sub font-medium mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 leading-snug group-hover:text-primary transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-text-sub text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                    {post.desc}
                  </p>
                  <a className="inline-flex items-center text-sm font-bold text-primary hover:text-rose-600 transition-colors mt-auto group/link" href="#">
                    Xem chi tiết <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors disabled:opacity-50">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg shadow-orange-200">
                1
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 text-text-main font-medium flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 text-text-main font-medium flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
              <button className="w-10 h-10 rounded-full border border-gray-200 text-text-main font-medium flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                12
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-main hover:border-primary hover:text-primary transition-colors">
                <ChevronRight size={20} />
              </button>
            </nav>
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <section className="px-4 py-24 bg-background-light">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-background-dark text-white border border-gray-800 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 lg:p-20 gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight">Đừng bỏ lỡ bài viết mới!</h2>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Nhận thông báo về các mẹo học tập mới nhất và ưu đãi gia sư độc quyền mỗi tuần.
              </p>
            </div>
            <div className="flex-1 w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="flex-1 rounded-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm" 
                  placeholder="Email của bạn" 
                  type="email"
                />
                <button className="px-8 py-4 bg-primary hover:bg-rose-600 rounded-full font-bold transition-all whitespace-nowrap shadow-lg shadow-orange-900/50 hover:-translate-y-1">
                  Đăng ký
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4 ml-4">*Chúng tôi cam kết không spam email của bạn.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
