import React from 'react';
import Image from 'next/image';

export default function page() {
  return (
    <section className="relative w-full min-h-screen bg-[#0c1620] text-[#f9fafc] font-sans overflow-hidden py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      
      {/* 1. KHỐI ĐƯỜNG PHỐ & BACKGROUND MINH HỌA PHÍA DƯỚI (Phỏng theo nét vẽ của ảnh mẫu image_498456.jpg) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        {/* Đường thẳng hút về vô cực ở giữa */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-linear-to-t from-[#2962c1]/80 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-300 border-l-transparent border-r-300 border-r-transparent border-b-400 border-b-[#2962c1]/5" />
        
        {/* Vòng tròn trang trí góc trái dưới */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-4 border-[#2962c1]/20" />
      </div>

      {/* CONTAINER CHÍNH */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* 2. KHỐI TRÁI: BOX "GIỚI THIỆU" (Nền trắng sữa nổi bật phía trên) */}
        <div className="lg:col-span-7 bg-[#f9fafc] text-[#0c1620] rounded-2xl p-8 sm:p-10 shadow-2xl border border-[#2962c1]/20 relative">
          
          {/* Tiêu đề Giới Thiệu */}
          <div className="space-y-1 mb-6">
            <h2 className="text-3xl font-black uppercase tracking-wider text-[#0c1620]">
              Giới <span className="text-[#2962c1] font-light">Thiệu</span>
            </h2>
            <div className="w-16 h-0.75 bg-[#2962c1]" />
          </div>

          {/* Nội dung chi tiết */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#0c1620]/80 font-medium">
            <p>
              Chúng tôi cung cấp một nền tảng online với những khóa học chất lượng để hỗ trợ người học lái xe ô tô, mô tô và xe máy một cách trực quan, dễ hiểu nhất.
            </p>
            <p className="border-l-4 border-[#2962c1] pl-3 italic text-[#0c1620]/90">
              Các bài học được thiết kế chuẩn theo giáo trình của Bộ Giao thông Vận tải.
            </p>
            <p>
              Với giao diện thân thiện, dễ sử dụng sẽ giúp các học viên tiếp thu kiến thức nhanh chóng, tự tin nâng cao kỹ năng điều khiển xe và đạt kết quả cao trong kỳ thi sát hạch.
            </p>
          </div>

          {/* Icon chiếc xe mờ ẩn dưới nền box (Giống ảnh gốc) */}
          <div className="absolute bottom-4 right-6 text-[#2962c1]/10 pointer-events-none select-none hidden sm:block">
            <svg className="w-32 h-32" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2m2 0h10M7 17a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        {/* 3. KHỐI PHẢI: BOX "TIẾT KIỆM THỜI GIAN" (Xếp đè so le sang trọng) */}
        <div className="lg:col-span-5 flex flex-col space-y-4 lg:pl-4 relative">
          
          {/* Nhãn Tiêu đề màu tối đen xanh */}
          <div className="bg-[#0c1620] border border-[#2962c1]/40 shadow-xl px-6 py-3 rounded-lg inline-block w-full max-w-md self-center lg:self-start">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
              Tiết Kiệm <span className="text-[#2962c1]">Thời Gian!</span>
            </h3>
          </div>

          {/* Box nội dung chính đè lên ảnh xe phía sau */}
          <div className="bg-[#0c1620]/90 backdrop-blur-md border border-[#2962c1]/30 p-6 sm:p-8 rounded-xl shadow-2xl space-y-6 max-w-md w-full self-center lg:self-start relative">
            
            <p className="text-sm text-[#f9fafc]/80 leading-relaxed font-medium">
              Tiết kiệm tối đa chi phí và thời gian ôn luyện. Bạn có thể chủ động học tập mọi lúc mọi nơi ngay trên điện thoại, máy tính bảng hoặc laptop cá nhân mà không cần cài đặt phức tạp.
            </p>

            {/* Nút bấm hành động màu vàng cam tạo điểm nhấn mạnh mẽ như hình mẫu */}
            <button className="w-full bg-[#2962c1] hover:bg-[#082379] text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wider text-sm transition-all duration-300 shadow-md hover:shadow-[#2962c1]/50 text-center">
              Bắt đầu học miễn phí
            </button>

            {/* Mũi tên uốn cong vẽ trang trí tinh tế (SVG tái tạo lại mũi tên vàng trong ảnh mẫu) */}
            <div className="absolute -bottom-12 -left-8 text-[#2962c1] hidden lg:block animate-pulse">
              <svg className="w-20 h-20 transform -rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0l-3-3a4 4 0 010-5.656l3-3a4 4 0 015.656 0L19 7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10l-3 3 3 3" />
              </svg>
            </div>

          </div>

          {/* Xe ô tô trang trí chạy ở góc phải phía sau (Gợi nhớ hình ảnh xe màu trắng trong file gốc) */}
          <div className="absolute -bottom-16 right-0 w-64 h-36 opacity-20 pointer-events-none hidden xl:block">
            <svg className="w-full h-full text-[#2962c1]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path d="M2 10h20m-3-3l-2-3H7L5 7M3 14h18v4H3v-4zm3 4a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}