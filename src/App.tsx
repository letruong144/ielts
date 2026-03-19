import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Target, 
  ShieldAlert, 
  Users, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Flame, 
  BookOpen, 
  Mic, 
  PenTool, 
  Headphones,
  AlertCircle
} from 'lucide-react';
import { ROADMAP_DATA, Phase } from './constants';

const Header = () => (
  <header className="relative overflow-hidden bg-zinc-950 text-white py-16 px-6 border-b border-zinc-800">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#dc2626_0%,transparent_50%)]" />
    </div>
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-6"
      >
        <Flame size={14} />
        Kỷ luật thép
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none"
      >
        [QUAN TRỌNG] <br />
        LỘ TRÌNH TỔNG LỰC IELTS <br />
        <span className="text-red-600">MAI HƯƠNG & TỐ UYÊN</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
      >
        Chiến dịch Bootcamp 8 tuần bứt tốc band điểm giai đoạn nước rút (19/03 - 15/05). 
        Đòi hỏi sự tập trung 200% và kỷ luật tuyệt đối.
      </motion.p>
    </div>
  </header>
);

const MessageSection = () => (
  <section className="py-12 px-6 bg-white border-b border-zinc-100">
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2 space-y-6 text-zinc-700 leading-relaxed">
        <p className="font-medium text-zinc-900">Chào cô Tuyết Anna,</p>
        <p>
          Để giải quyết triệt để bài toán bứt tốc band điểm cho hai em Mai Hương và Tố Uyên trong giai đoạn nước rút, 
          tôi đã đích thân thiết kế một <strong>"Chiến dịch Tổng lực" (Bootcamp)</strong> với cường độ cao nhất.
        </p>
        <p>
          Đây không phải là một khóa học thông thường, mà là một chiến dịch đòi hỏi sự tập trung cao độ. 
          Tôi đã hệ thống hóa toàn bộ giáo án và đưa lên ứng dụng quản lý độc quyền.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="https://camket.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-colors font-medium shadow-lg shadow-zinc-200"
          >
            Theo dõi tiến độ trực tiếp
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Thông số chiến dịch</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                <Calendar size={18} className="text-red-600" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-bold">Thời gian</p>
                <p className="font-bold text-zinc-900">8 Tuần (19/03 - 15/05)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                <Clock size={18} className="text-red-600" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-bold">Cường độ</p>
                <p className="font-bold text-zinc-900">40 Buổi (104 Giờ)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                <Target size={18} className="text-red-600" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-bold">Mục tiêu</p>
                <p className="font-bold text-zinc-900">Bứt tốc Band điểm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-200">
          <p className="text-sm font-serif italic text-zinc-500">
            "Kỷ luật là cầu nối giữa mục tiêu và thành tựu."
          </p>
        </div>
      </div>
    </div>
  </section>
);

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="py-20 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-2 uppercase">Kế hoạch tác chiến</h2>
            <p className="text-zinc-500">Lịch học 5 buổi/tuần: T2, T5, T6 (3h) | T7, CN (2h)</p>
          </div>
          <div className="flex gap-2 p-1 bg-zinc-200/50 rounded-2xl overflow-x-auto no-scrollbar">
            {ROADMAP_DATA.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activePhase === idx 
                    ? 'bg-white text-red-600 shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                Giai đoạn {idx + 1}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid gap-6"
          >
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black text-xl">
                  {activePhase + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-zinc-900 leading-none mb-1">
                    {ROADMAP_DATA[activePhase].subtitle}
                  </h3>
                  <p className="text-zinc-400 font-bold uppercase text-xs tracking-widest">
                    {ROADMAP_DATA[activePhase].weeks}
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {ROADMAP_DATA[activePhase].sessions.map((session) => (
                  <div 
                    key={session.id} 
                    className="group grid md:grid-cols-[80px_1fr_1.5fr] items-center p-4 rounded-2xl border border-zinc-100 hover:border-red-200 hover:bg-red-50/30 transition-all"
                  >
                    <div className="flex flex-col items-center justify-center border-r border-zinc-100 md:pr-4">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter">Buổi</span>
                      <span className="text-xl font-black text-zinc-900">{session.id}</span>
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 rounded-full">{session.day}</span>
                    </div>
                    <div className="md:px-6 py-2">
                      <p className="font-bold text-zinc-900 leading-tight">{session.title}</p>
                    </div>
                    <div className="md:pl-6 py-2 border-t md:border-t-0 md:border-l border-zinc-100">
                      <div className="flex items-start gap-2">
                        <PenTool size={14} className="text-zinc-400 mt-1 shrink-0" />
                        <p className="text-sm text-zinc-600">
                          <span className="font-bold text-zinc-400 uppercase text-[10px] block mb-0.5">BTVN</span>
                          {session.homework}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const RequirementsSection = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-4 uppercase">Yêu cầu từ chuyên gia</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">Để chiến dịch thành công, sự phối hợp giữa thầy, trò và gia đình là yếu tố tiên quyết.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-zinc-950 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
            <ShieldAlert size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center mb-6">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Hoàn thành 100% BTVN</h3>
            <p className="text-zinc-400 leading-relaxed">
              Các em phải làm bài tập đầy đủ. Tôi sẽ áp dụng hình phạt khắt khe đối với bất kỳ sự lười biếng nào. 
              Không có ngoại lệ trong 8 tuần này.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
            <Users size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Sự đồng hành của gia đình</h3>
            <p className="text-zinc-500 leading-relaxed">
              Giai đoạn này rất áp lực. Đề nghị cô Anna và gia đình quán triệt tinh thần với hai em: 
              Phải ưu tiên IELTS lên vị trí số 1 trong 8 tuần tới.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-red-50 border border-red-100 flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-200">
          <AlertCircle size={32} className="text-white" />
        </div>
        <div>
          <p className="text-red-900 font-medium leading-relaxed">
            Ngay khi gia đình xác nhận cam kết tuân thủ "Luật chơi" này, chúng ta sẽ lập tức bấm nút khởi động chiến dịch. 
            Mọi sự chậm trễ sẽ ảnh hưởng trực tiếp đến kết quả cuối cùng.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 bg-zinc-50 border-t border-zinc-200">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
      <div>
        <p className="text-zinc-400 font-bold uppercase text-xs tracking-widest mb-4">Người thiết kế lộ trình</p>
        <h4 className="text-2xl font-black text-zinc-900 mb-1">Thầy Trường</h4>
        <p className="text-zinc-500 font-medium">Chuyên gia Luyện thi IELTS - Honor Class 1A</p>
      </div>
      <div className="text-right">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-xl text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          System Active
        </div>
        <p className="mt-4 text-zinc-400 text-sm">© 2026 Honor Class 1A. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-red-100 selection:text-red-900">
      <Header />
      <MessageSection />
      <RoadmapSection />
      <RequirementsSection />
      <Footer />
      
      {/* Floating Action Bar for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <a 
          href="https://camket.vercel.app/" 
          className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 text-white rounded-2xl font-bold shadow-2xl shadow-red-200"
        >
          Theo dõi tiến độ
          <ChevronRight size={18} />
        </a>
      </div>
    </div>
  );
}
