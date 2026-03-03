import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Search, 
  ShieldCheck, 
  GraduationCap, 
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import { motion } from 'motion/react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email hỗ trợ",
    value: "support@studymatch.vn",
    desc: "Phản hồi trong vòng 2 giờ",
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    icon: Phone,
    title: "Hotline tư vấn",
    value: "1900 1234",
    desc: "8:00 - 22:00, Thứ 2 - Chủ Nhật",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: MapPin,
    title: "Văn phòng Hà Nội",
    value: "Tầng 12, Tòa nhà TechHub, Cầu Giấy",
    desc: "Số 88, Phố Công Nghệ, Hà Nội",
    color: "text-green-500",
    bg: "bg-green-50"
  }
];

const faqs = [
  {
    icon: Search,
    title: "Làm sao để tìm gia sư?",
    desc: "Hướng dẫn chi tiết quy trình tìm kiếm và kết nối."
  },
  {
    icon: ShieldCheck,
    title: "Chính sách hoàn tiền",
    desc: "Cam kết bảo vệ quyền lợi học viên 100%."
  },
  {
    icon: GraduationCap,
    title: "Đăng ký làm gia sư",
    desc: "Quy trình xét duyệt hồ sơ và phỏng vấn."
  }
];

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-orange-50/30 pt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto mb-16 text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1 bg-orange-100 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest"
          >
            Hỗ trợ 24/7
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-text-main"
          >
            Kết nối với <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">chúng tôi</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-sub text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Đừng ngần ngại liên hệ với StudyMatchVN bất cứ lúc nào.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-text-main">Thông tin liên hệ</h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${info.bg} ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <info.icon size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-sub mb-1 uppercase tracking-wider">{info.title}</p>
                      <p className="text-xl font-black text-text-main group-hover:text-primary transition-colors">{info.value}</p>
                      <p className="text-sm text-gray-500 mt-1">{info.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                alt="Map" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <MapPin className="text-primary" size={48} fill="currentColor" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-3 bg-black/30 rounded-full blur-sm"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-text-main shadow-lg">
                Xem bản đồ lớn
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-orange-100/50 border border-orange-50"
          >
            <h3 className="text-2xl font-bold text-text-main mb-8">Gửi tin nhắn trực tiếp</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main ml-1 uppercase tracking-wider" htmlFor="name">Họ và tên</label>
                  <input 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    id="name" 
                    placeholder="Nhập họ tên của bạn" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main ml-1 uppercase tracking-wider" htmlFor="email">Email liên hệ</label>
                  <input 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    id="email" 
                    placeholder="example@email.com" 
                    type="email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main ml-1 uppercase tracking-wider" htmlFor="subject">Chủ đề cần hỗ trợ</label>
                <div className="relative">
                  <select 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer" 
                    id="subject"
                  >
                    <option disabled selected value="">Chọn chủ đề</option>
                    <option value="tuvan">Tư vấn tìm gia sư</option>
                    <option value="dangky">Hỗ trợ đăng ký tài khoản</option>
                    <option value="hoptac">Hợp tác giảng dạy</option>
                    <option value="khac">Vấn đề khác</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main ml-1 uppercase tracking-wider" htmlFor="message">Nội dung lời nhắn</label>
                <textarea 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" 
                  id="message" 
                  placeholder="Hãy mô tả chi tiết vấn đề bạn đang gặp phải..." 
                  rows={5}
                ></textarea>
              </div>

              <button className="w-full flex items-center justify-center gap-3 rounded-2xl h-16 bg-gradient-to-r from-primary to-rose-500 text-white text-lg font-bold shadow-xl shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-1 transition-all duration-300">
                <span>Gửi lời nhắn</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 px-4 border-t border-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-main mb-16">Câu hỏi thường gặp</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqs.map((faq, i) => (
              <motion.a 
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-background-light hover:bg-orange-50 transition-all duration-300 border border-transparent hover:border-orange-100 group flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <faq.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-text-main">{faq.title}</h4>
                <p className="text-sm text-text-sub leading-relaxed">{faq.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
