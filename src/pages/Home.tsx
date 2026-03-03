import { 
  BookOpen, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  X, 
  Heart, 
  ShieldCheck, 
  Zap, 
  Users, 
  Lightbulb
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const tutors = [
  {
    name: "Nguyễn Lan Anh",
    price: "200k/h",
    subject: "Chuyên Toán - Lý cấp 3",
    school: "ĐH Ngoại Thương",
    exp: "3 năm KN",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Trần Văn Hùng",
    price: "350k/h",
    subject: "Tiếng Anh Giao Tiếp & IELTS",
    school: "IELTS 8.5",
    exp: "Tesol",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Phạm Minh Tú",
    price: "180k/h",
    subject: "Ngữ Văn - Lịch Sử",
    school: "ĐH Sư Phạm",
    exp: "Tận tâm",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Lê Quang Đạt",
    price: "250k/h",
    subject: "Lập trình Python & Web",
    school: "Fullstack Dev",
    exp: "Thực chiến",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
            Nền tảng gia sư 4.0
          </span>
          <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] text-text-main">
            <span className="text-primary">StudyMatchVN</span><br />
            Kết nối tri thức,<br />
            Chạm tới tương lai
          </h2>
          <p className="text-text-sub text-lg lg:text-xl leading-relaxed max-w-xl">
            Tìm kiếm gia sư hoàn hảo cho bạn chỉ với vài thao tác đơn giản. Trải nghiệm học tập được cá nhân hóa, hiệu quả và đầy cảm hứng.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="h-14 px-10 rounded-full bg-gradient-to-r from-primary to-rose-500 text-white font-bold shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-1 transition-all duration-300">
              Khám phá gia sư
            </button>
            <button className="h-14 px-10 rounded-full bg-white border border-gray-200 text-text-main font-bold hover:border-primary hover:text-primary transition-all duration-300">
              Tìm hiểu thêm
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="absolute -inset-4 bg-orange-100/50 rounded-full blur-3xl -z-10"></div>
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800" 
              alt="Student" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-[10px] text-text-sub font-bold uppercase tracking-wider">Đã xác thực</p>
              <p className="text-sm font-bold text-text-main">5000+ Gia sư</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Swipe Section */}
      <section className="bg-white py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative order-2 lg:order-1 flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-50 rounded-full -z-10"></div>
            
            <div className="relative w-[320px] h-[480px]">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg border border-gray-100 scale-90 translate-y-8 opacity-40 z-10"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg border border-gray-100 scale-95 translate-y-4 opacity-70 z-20"></div>
              
              <motion.div 
                whileHover={{ rotate: 0 }}
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-gray-100 rotate-[-2deg] z-30 flex flex-col overflow-hidden"
              >
                <div className="h-3/5 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" 
                    alt="Tutor" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">Trần Minh Thư, 24</h3>
                    <p className="text-white/90 text-sm flex items-center gap-1">
                      <BookOpen size={14} /> Tiếng Anh IELTS 8.0
                    </p>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <p className="text-text-sub text-sm leading-relaxed line-clamp-3">
                    Chào mọi người! Mình là Thư, mình có kinh nghiệm dạy IELTS 3 năm. Phương pháp của mình tập trung vào Speaking và Writing tự nhiên...
                  </p>
                  <div className="flex justify-center gap-6 mt-4">
                    <button className="w-14 h-14 rounded-full border-2 border-red-100 text-red-500 flex items-center justify-center hover:bg-red-50 transition-colors">
                      <X size={28} />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-rose-500 text-white shadow-lg shadow-orange-200 flex items-center justify-center hover:scale-110 transition-transform">
                      <Heart size={28} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 space-y-6">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Trải nghiệm độc đáo</span>
            <h2 className="text-3xl lg:text-5xl font-black text-text-main leading-tight">
              Vuốt để tìm người thầy <br />
              <span className="text-primary">lý tưởng</span>
            </h2>
            <p className="text-text-sub text-lg leading-relaxed">
              Không còn những danh sách nhàm chán. Với StudyMatchVN, việc tìm gia sư trở nên thú vị như tìm một người bạn đồng hành. Vuốt phải nếu bạn thấy phù hợp, vuốt trái để xem thêm lựa chọn.
            </p>
            <ul className="space-y-4">
              {[
                "Hồ sơ trực quan, sinh động",
                "Thuật toán gợi ý thông minh",
                "Kết nối ngay lập tức khi 'Match'"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-medium text-text-main">{item}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-2 text-primary font-bold text-lg group">
              Thử ngay bây giờ 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-orange-50/50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-main">Tại sao chọn StudyMatchVN?</h2>
            <p className="text-text-sub">Chúng tôi không chỉ kết nối, chúng tôi kiến tạo môi trường giáo dục văn minh.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Tin cậy", desc: "Thông tin gia sư được xác thực 100% qua CMND/CCCD và bằng cấp chuyên môn.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Lightbulb, title: "Sáng tạo", desc: "Cách tiếp cận mới mẻ, ứng dụng công nghệ để tối ưu hóa trải nghiệm người dùng.", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Zap, title: "Hiệu quả", desc: "Tiết kiệm thời gian tìm kiếm, tập trung tối đa vào chất lượng dạy và học.", color: "text-green-500", bg: "bg-green-50" },
              { icon: Users, title: "Cộng đồng", desc: "Xây dựng mạng lưới hỗ trợ học tập bền vững, chia sẻ kiến thức không giới hạn.", color: "text-red-500", bg: "bg-red-50" }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 text-center flex flex-col items-center gap-4">
                <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-text-main">{feature.title}</h3>
                <p className="text-sm text-text-sub leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-main">Gia sư tiêu biểu</h2>
              <p className="text-text-sub">Những gương mặt xuất sắc được cộng đồng đánh giá cao</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1 text-primary font-bold hover:underline">
              Xem tất cả <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutors.map((tutor, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={tutor.image} 
                    alt={tutor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-xl flex items-center gap-1 shadow-sm">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-xs">{tutor.rating}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-text-main">{tutor.name}</h3>
                    <span className="text-primary font-bold">{tutor.price}</span>
                  </div>
                  <p className="text-text-sub text-sm">{tutor.subject}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-600 rounded-full uppercase tracking-wider">{tutor.school}</span>
                    <span className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-600 rounded-full uppercase tracking-wider">{tutor.exp}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-1 text-primary font-bold hover:underline">
              Xem tất cả <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-black text-primary">10.000+</p>
              <p className="text-gray-400 font-medium">Gia sư chất lượng</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0">
              <p className="text-5xl font-black text-primary">50.000+</p>
              <p className="text-gray-400 font-medium">Học viên tin dùng</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-primary">1M+</p>
              <p className="text-gray-400 font-medium">Giờ học thành công</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-white border border-orange-100 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center py-24 px-8 text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black text-text-main tracking-tight">
              Sẵn sàng bứt phá điểm số?
            </h2>
            <p className="text-text-sub text-lg lg:text-xl max-w-2xl leading-relaxed">
              Tham gia cộng đồng StudyMatchVN ngay hôm nay để trải nghiệm cách học tập hoàn toàn mới.
            </p>
            <button className="h-16 px-12 rounded-full bg-gradient-to-r from-primary to-rose-500 text-white font-bold text-lg shadow-xl shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-1 transition-all duration-300">
              Đăng ký ngay - Miễn phí
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
