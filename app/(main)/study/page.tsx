"use client";

import { ArrowRightOutlined } from "@ant-design/icons";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0c1620] overflow-hidden relative font-sans">
      
      {/* Background Shapes - Tạo độ chiều sâu */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#2962c1] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Content Card */}
      <div className="relative z-10 p-10 md:p-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-4xl text-center shadow-2xl max-w-lg mx-6">
        <div className="mb-8">
          <span className="px-4 py-1.5 bg-[#2962c1]/20 text-[#2962c1] rounded-full text-xs font-bold uppercase tracking-widest border border-[#2962c1]/30">
            Sẵn sàng sát hạch
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
          ÔN THI <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2962c1] to-blue-400">GPLX</span>
        </h1>
        
        <p className="text-gray-400 mb-12 text-lg">
          Hệ thống luyện thi lý thuyết 600 câu hỏi. <br />
          Đơn giản, nhanh chóng và hiệu quả.
        </p>

        <a 
          href="https://onthigplx.com.vn/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-white text-[#0c1620] text-lg font-bold py-5 px-10 rounded-2xl transition-all hover:bg-[#2962c1] hover:text-white shadow-xl"
        >
          Bắt đầu luyện thi
          <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </main>
  );
}