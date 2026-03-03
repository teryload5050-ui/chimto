import { 
  CheckCircle, 
  Lightbulb, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  Facebook, 
  Linkedin, 
  Instagram,
  Rocket,
  Map,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';

const team = [
  {
    name: "Trần Thị B",
    role: "CTO",
    desc: "Chuyên gia công nghệ, xử lý hệ thống vuốt Tinder.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Nguyễn Văn A",
    role: "CEO & FOUNDER",
    desc: "Người dẫn dắt tầm nhìn và chiến lược phát triển.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    featured: true
  },
  {
    name: "Lê Văn C",
    role: "PRODUCT DESIGNER",
    desc: "Người thiết kế giao diện StudyMatchVN.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Phạm Thị D",
    role: "HEAD OF MARKETING",
    desc: "Phụ trách truyền thông và cộng đồng.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Hoàng Văn E",
    role: "HEAD OF OPERATIONS",
    desc: "Quản lý vận hành và mạng lưới gia sư.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400"
  }
];

const timeline = [
  { year: "2020", title: "Ý tưởng khởi nguồn", desc: "Ý tưởng về một 'Tinder cho gia sư' ra đời khi chúng tôi nhận thấy khó khăn trong việc tìm kiếm người dạy phù hợp.", icon: Lightbulb },
  { year: "2021", title: "Ra mắt bản thử nghiệm", desc: "Phiên bản MVP đầu tiên được ra mắt tại TP.HCM và nhận được sự ủng hộ của 500 gia sư đầu tiên.", icon: Rocket },
  { year: "2022", title: "Cột mốc 10.000 người dùng", desc: "Cộng đồng lớn mạnh nhanh chóng nhờ sự tin tưởng và giới thiệu từ chính người dùng.", icon: Users },
  { year: "2023 - Nay", title: "Mở rộng quy mô toàn quốc", desc: "StudyMatchVN chính thức có mặt tại 63 tỉnh thành, kết nối tri thức không giới hạn địa lý.", icon: Map }
];

export default function About() {
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
          <span className="inline-block px-4 py-1 bg-orange-100 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
            Câu chuyện của chúng tôi
          </span>
          <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] text-text-main">
            <span className="text-primary">StudyMatchVN</span> - <br />
            Hành trình Kết nối <br />
            Tri thức
          </h2>
          <p className="text-text-sub text-lg lg:text-xl leading-relaxed max-w-xl">
            Chúng tôi là cầu nối vững chắc giữa người học và người dạy, mang đến trải nghiệm tìm kiếm gia sư dễ dàng như một cái chạm tay.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="h-14 px-10 rounded-full bg-primary text-white font-bold shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-1 transition-all duration-300">
              Tìm hiểu thêm
            </button>
            <button className="h-14 px-10 rounded-full bg-white border border-gray-200 text-text-main font-bold hover:border-primary hover:text-primary transition-all duration-300">
              Xem video giới thiệu
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
              alt="About Us" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-main">Sứ mệnh & Tầm nhìn</h2>
            <p className="text-text-sub">Kiến tạo một cộng đồng học tập văn minh, nơi tri thức được chia sẻ không giới hạn và tiếp cận dễ dàng.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background-light p-10 rounded-3xl border border-orange-100 space-y-6">
              <div className="w-14 h-14 bg-orange-100 text-primary rounded-2xl flex items-center justify-center">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-main">Sứ mệnh</h3>
              <p className="text-text-sub leading-relaxed">
                Giúp mọi học sinh tìm được người thầy phù hợp nhất để phát huy tối đa tiềm năng bản thân. Chúng tôi tin rằng mỗi người học đều xứng đáng có một lộ trình riêng biệt.
              </p>
            </div>
            <div className="bg-background-light p-10 rounded-3xl border border-orange-100 space-y-6">
              <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-main">Tầm nhìn</h3>
              <p className="text-text-sub leading-relaxed">
                Trở thành nền tảng kết nối giáo dục hàng đầu Việt Nam và khu vực, ứng dụng công nghệ AI để đơn giản hóa và cá nhân hóa việc dạy và học.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Timeline */}
      <section className="py-24 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-16 text-text-main">Câu chuyện thương hiệu</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-primary to-orange-200 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full md:text-right text-left pl-16 md:pl-0 md:pr-12">
                  <div className={i % 2 === 0 ? 'md:text-left' : 'md:text-right'}>
                    <h3 className="text-xl font-bold text-text-main">{item.title}</h3>
                    <span className="text-primary font-bold block mb-2">{item.year}</span>
                    <p className="text-text-sub text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-lg">
                  <item.icon className="text-primary" size={24} />
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-orange-50/50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-text-main">Giá trị cốt lõi</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Tin cậy", desc: "Thông tin gia sư luôn được xác thực kỹ càng.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Lightbulb, title: "Sáng tạo", desc: "Luôn đổi mới phương pháp kết nối hiệu quả.", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Zap, title: "Hiệu quả", desc: "Tối ưu hóa thời gian và kết quả học tập.", color: "text-green-500", bg: "bg-green-50" },
              { icon: Users, title: "Cộng đồng", desc: "Xây dựng mạng lưới hỗ trợ lẫn nhau bền vững.", color: "text-red-500", bg: "bg-red-50" }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center gap-4">
                <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-full flex items-center justify-center`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-text-main">{feature.title}</h3>
                <p className="text-sm text-text-sub leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-main">Đội ngũ nòng cốt</h2>
          <p className="text-text-sub">Những con người đầy nhiệt huyết đứng sau sự thành công của StudyMatchVN.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {team.slice(0, 3).map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`flex flex-col items-center text-center space-y-6 ${member.featured ? 'md:-mt-8' : ''}`}
            >
              <div className={`relative aspect-[3/4] w-full max-w-[300px] rounded-3xl overflow-hidden shadow-xl ${member.featured ? 'ring-4 ring-orange-400/30 ring-offset-4' : ''}`}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="space-y-2">
                <h3 className={`text-xl font-bold ${member.featured ? 'text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600' : 'text-text-main'}`}>
                  {member.name}
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest">{member.role}</p>
                <p className="text-text-sub text-sm max-w-[250px]">{member.desc}</p>
                <div className="flex justify-center gap-4 pt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Facebook size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Linkedin size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Instagram size={14} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.slice(3).map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-text-main">{member.name}</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest">{member.role}</p>
                <p className="text-text-sub text-sm max-w-[250px]">{member.desc}</p>
                <div className="flex justify-center gap-4 pt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Facebook size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Linkedin size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Instagram size={14} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-white border border-orange-100 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center py-24 px-8 text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black text-text-main tracking-tight">
              Sẵn sàng gia nhập đội ngũ?
            </h2>
            <p className="text-text-sub text-lg lg:text-xl max-w-2xl leading-relaxed">
              Chúng tôi luôn tìm kiếm những tài năng đam mê giáo dục để cùng nhau viết tiếp câu chuyện StudyMatchVN.
            </p>
            <button className="h-16 px-12 rounded-full bg-gradient-to-r from-primary to-rose-500 text-white font-bold text-lg shadow-xl shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-1 transition-all duration-300">
              Tham gia cùng chúng tôi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
