import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Clock,
  GraduationCap
} from 'lucide-react';
import { motion } from 'motion/react';

const tutors = [
  {
    id: 1,
    name: "Hoàng Văn Nam",
    subject: "Chuyên Toán - Lớp 10, 11, 12",
    rating: 4.9,
    reviews: 128,
    price: "200.000đ",
    tags: ["ĐH Bách Khoa", "3 năm KN"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    verified: true,
    bg: "from-orange-50 to-pink-50"
  },
  {
    id: 2,
    name: "Trần Minh Thư",
    subject: "Tiếng Anh IELTS - 8.0 Overall",
    rating: 5.0,
    reviews: 85,
    price: "350.000đ",
    tags: ["IELTS 8.0", "Du học sinh"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    verified: true,
    bg: "from-blue-50 to-purple-50"
  },
  {
    id: 3,
    name: "Nguyễn Lan Anh",
    subject: "Ngữ Văn - Luyện thi ĐH",
    rating: 4.8,
    reviews: 210,
    price: "250.000đ",
    tags: ["ĐH Sư Phạm", "Giáo viên"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    verified: true,
    bg: "from-green-50 to-teal-50"
  },
  {
    id: 4,
    name: "Lê Quang Đạt",
    subject: "Lập trình Python & Web",
    rating: 5.0,
    reviews: 45,
    price: "400.000đ",
    tags: ["Senior Dev", "Thực chiến"],
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    verified: true,
    bg: "from-indigo-50 to-purple-50"
  },
  {
    id: 5,
    name: "Phạm Thị Mai",
    subject: "Hóa Học - Luyện thi HSG",
    rating: 4.7,
    reviews: 98,
    price: "300.000đ",
    tags: ["Thạc sĩ Hóa", "Tận tâm"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    verified: true,
    bg: "from-red-50 to-orange-50"
  },
  {
    id: 6,
    name: "Vũ Tuấn Anh",
    subject: "Vật Lý - Đại Cương",
    rating: 4.9,
    reviews: 156,
    price: "180.000đ",
    tags: ["ĐH KHTN", "Vui tính"],
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400",
    verified: true,
    bg: "from-yellow-50 to-orange-50"
  }
];

export default function Tutors() {
  return (
    <div className="flex flex-col">
      {/* Search Header */}
      <section className="bg-orange-50/50 pt-12 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black mb-4 tracking-tight text-text-main"
          >
            Tìm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">người thầy lý tưởng</span> của bạn
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-sub text-lg mb-8 max-w-2xl"
          >
            Kết nối với hàng ngàn gia sư tài năng, nhiệt huyết và giàu kinh nghiệm để bứt phá kiến thức ngay hôm nay.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-3xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-rose-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white rounded-full p-2 pl-6 flex items-center shadow-xl border border-orange-100">
              <Search className="text-gray-400" size={24} />
              <input 
                className="w-full border-none focus:ring-0 text-text-main placeholder-gray-400 text-lg py-3 px-4 outline-none" 
                placeholder="Nhập môn học, tên gia sư hoặc kỹ năng..." 
                type="text"
              />
              <button className="bg-gradient-to-r from-primary to-rose-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all shrink-0">
                Tìm kiếm
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 mb-20 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-[300px] shrink-0">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-orange-100/50 border border-orange-50 sticky top-24">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-lg flex items-center gap-2 text-text-main">
                  <Filter size={20} className="text-primary" />
                  Bộ lọc
                </h3>
                <button className="text-sm text-text-sub hover:text-primary underline">Đặt lại</button>
              </div>

              <div className="space-y-8">
                {/* Subject Filter */}
                <div>
                  <h4 className="font-bold text-sm mb-4 text-text-main uppercase tracking-wider">Môn học</h4>
                  <div className="space-y-3">
                    {["Toán học", "Tiếng Anh", "Vật lý", "Hóa học", "Ngữ văn"].map((sub, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/20" />
                        <span className="text-sm text-text-sub group-hover:text-primary transition-colors">{sub}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="font-bold text-sm mb-4 text-text-main uppercase tracking-wider">Khoảng giá (VND/h)</h4>
                  <input type="range" className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" min="100000" max="1000000" step="50000" />
                  <div className="flex justify-between text-xs text-text-sub mt-3 font-medium">
                    <span>100k</span>
                    <span>1M+</span>
                  </div>
                </div>

                {/* Mode Filter */}
                <div>
                  <h4 className="font-bold text-sm mb-4 text-text-main uppercase tracking-wider">Hình thức</h4>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 rounded-xl border border-primary bg-primary/5 text-primary text-sm font-bold">Online</button>
                    <button className="flex-1 py-2.5 rounded-xl border border-gray-200 text-text-sub text-sm font-bold hover:border-primary hover:text-primary transition-colors">Offline</button>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="font-bold text-sm mb-4 text-text-main uppercase tracking-wider">Đánh giá</h4>
                  <div className="space-y-3">
                    {[5, 4].map((star) => (
                      <label key={star} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="rating" className="w-5 h-5 text-primary focus:ring-primary border-gray-300" />
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < star ? "currentColor" : "none"} />
                          ))}
                        </div>
                        <span className="text-xs text-text-sub font-bold">{star}.0 {star === 4 && 'trở lên'}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Tutor Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-text-sub text-sm">Hiển thị <span className="font-bold text-text-main">1,248</span> gia sư phù hợp</p>
              <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-text-main focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                <option>Phổ biến nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
                <option>Đánh giá cao nhất</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {tutors.map((tutor, i) => (
                <motion.div 
                  key={tutor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2rem] p-6 shadow-sm border border-orange-50 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 flex flex-col relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-br ${tutor.bg} -z-0`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-primary to-rose-500">
                        <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
                          <img 
                            src={tutor.image} 
                            alt={tutor.name} 
                            className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      {tutor.verified && (
                        <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                          <CheckCircle className="text-blue-500" size={20} fill="currentColor" />
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-bold text-text-main">{tutor.name}</h3>
                      <p className="text-text-sub text-sm font-medium">{tutor.subject}</p>
                    </div>

                    <div className="flex items-center gap-1 mt-3 text-yellow-500 text-sm font-bold bg-yellow-50 px-3 py-1 rounded-full">
                      <Star size={14} fill="currentColor" />
                      <span>{tutor.rating}</span>
                      <span className="text-text-sub font-normal text-xs ml-1">({tutor.reviews} đánh giá)</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-50 flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                      {tutor.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-500 rounded-lg border border-gray-100 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-text-sub font-bold uppercase tracking-widest mb-1">Giá thuê</p>
                        <p className="text-rose-500 font-black text-xl">{tutor.price}<span className="text-xs font-normal text-text-sub">/giờ</span></p>
                      </div>
                      <button className="bg-gradient-to-r from-primary to-rose-500 text-white text-sm font-bold py-3 px-6 rounded-full shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all transform active:scale-95">
                        Xem hồ sơ
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16 gap-2">
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 text-text-sub hover:border-primary hover:text-primary transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white font-bold shadow-lg shadow-orange-200">1</button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 text-text-sub hover:border-primary hover:text-primary transition-colors">2</button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 text-text-sub hover:border-primary hover:text-primary transition-colors">3</button>
              <span className="w-12 h-12 flex items-center justify-center text-text-sub">...</span>
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 text-text-sub hover:border-primary hover:text-primary transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
