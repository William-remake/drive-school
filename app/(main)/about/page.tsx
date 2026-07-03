import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <>
      {/* SECTION 1: GIỚI THIỆU & TIẾT KIỆM THỜI GIAN (GIỮ NGUYÊN VẸN CODE CỦA BẠN) */}
      <section className="relative w-full bg-[#0c1620] text-[#f9fafc] font-sans overflow-hidden py-10 px-4 sm:px-6 lg:px-8 flex items-center">

        {/* Box bọc ảnh nền tự động fit 100% theo chiều cao nội dung thực tế */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/aboutpage.jpg"
            alt="Học lái xe tại Đồng Nai"
            fill
            priority
            className="object-cover object-center w-full h-full scale-105 transition-transform duration-700"
          />
        </div>
        
        {/* CONTAINER CHÍNH */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 2. KHỐI TRÁI: BOX "GIỚI THIỆU" (Giữ nguyên) */}
          <div className="lg:col-span-7 bg-[#f9fafc] text-[#0c1620] rounded-2xl p-8 sm:p-10 shadow-2xl border border-[#2962c1]/20 relative lg:-translate-y-6">
            
            {/* Tiêu đề Giới Thiệu */}
            <div className="space-y-1 mb-6">
              <h2 className="text-3xl font-black uppercase tracking-wider text-[#0c1620]">
                Giới Thiệu
              </h2>
              <div className="w-16 h-1 bg-[#2962c1]" />
            </div>

            {/* Nội dung chi tiết */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#0c1620]/80 font-medium">
              <p className="border-l-4 border-[#2962c1] pl-3 italic text-[#0c1620]/90">
                Trung tâm Đào tạo lái xe Đồng Nai
              </p>
              <p>
                Chuyên đào tạo và sát hạch lái xe với chương trình học bài bản, đội ngũ giáo viên giàu kinh nghiệm cùng hệ thống phương tiện hiện đại. Trung tâm đào tạo các hạng giấy phép lái xe A1, A, A3, A4, B số tự động, B số cơ khí, C1, C, D1, D2, D và đào tạo lái xe nâng hàng, đáp ứng nhu cầu học tập, nâng hạng và phát triển nghề nghiệp của học viên. Với phương châm đào tạo chất lượng, tận tâm và chuyên nghiệp, chúng tôi cam kết mang đến môi trường học tập an toàn, hiệu quả, giúp học viên tự tin chinh phục kỳ thi sát hạch và vững vàng trên mọi hành trình.
              </p>
            </div>

            {/* Icon chiếc xe mờ ẩn dưới nền box (Giống ảnh gốc) */}
            <div className="absolute bottom-4 right-6 text-[#2962c1]/10 pointer-events-none select-none hidden sm:block">
              <svg className="w-32 h-32" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2m2 0h10M7 17a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* 3. KHỐI PHẢI: BOX "TIẾT KIỆM THỜI GIAN" (Giữ nguyên vị trí xích xuống phía dưới) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 lg:pl-4 lg:pt-52 relative">
            
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

              {/* Nút bấm hành động */}
              <Link href="study">
                <button className="w-full bg-[#2962c1] hover:bg-[#082379] text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wider text-sm transition-all duration-300 shadow-md hover:shadow-[#2962c1]/50 text-center cursor-pointer">
                  Bắt đầu luyện thi
                </button>
              </Link>

              {/* Mũi tên uốn cong vẽ trang trí tinh tế */}
              <div className="absolute -bottom-12 -left-8 text-[#2962c1] hidden lg:block animate-pulse">
                <svg className="w-20 h-20 transform -rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0l-3-3a4 4 0 010-5.656l3-3a4 4 0 015.656 0L19 7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 10l-3 3 3 3" />
                </svg>
              </div>

            </div>

            {/* Xe ô tô trang trí chạy ở góc phải phía sau */}
            <div className="absolute -bottom-16 right-0 w-64 h-36 opacity-10 pointer-events-none hidden xl:block">
              <svg className="w-full h-full text-[#2962c1]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M2 10h20m-3-3l-2-3H7L5 7M3 14h18v4H3v-4zm3 4a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: GIỚI THIỆU VỀ 3 CƠ SỞ ĐÀO TẠO CỦA TRƯỜNG */}
      <section className="w-full bg-[#2962c1] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          {/* Khối danh sách 3 Cơ sở đào tạo chính */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            
            {/* Cơ sở 1 */}
            <div className="bg-[#f9fafc] text-[#0c1620] rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-center text-center space-y-4 border border-white/20 transform hover:-translate-y-1 transition-transform duration-300">
              {/* Vòng bọc Icon định vị */}
              <div className="w-14 h-14 rounded-full bg-[#2962c1]/10 text-[#2962c1] flex items-center justify-center shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#0c1620]">
                  Cơ Sở 1
                </h4>
                <p className="text-xs sm:text-sm text-[#0c1620]/70 font-medium">
                  Đường Huỳnh Văn Nghệ, p.Trấn Biên (P. Bửu Long cũ), Thành phố Đồng Nai.
                </p>
              </div>
            </div>

            {/* Cơ sở 2 */}
            <div className="bg-[#f9fafc] text-[#0c1620] rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-center text-center space-y-4 border border-white/20 transform hover:-translate-y-1 transition-transform duration-300">
              {/* Dùng chung Icon định vị */}
              <div className="w-14 h-14 rounded-full bg-[#2962c1]/10 text-[#2962c1] flex items-center justify-center shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#0c1620]">
                  Cơ Sở 2
                </h4>
                <p className="text-xs sm:text-sm text-[#0c1620]/70 font-medium">
                  Ấp Bàu Cá, xã Hưng Thịnh (huyện Trảng Bom cũ), Thành phố Đồng Nai.
                </p>
              </div>
            </div>

            {/* Cơ sở 3 */}
            <div className="bg-[#f9fafc] text-[#0c1620] rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-center text-center space-y-4 border border-white/20 transform hover:-translate-y-1 transition-transform duration-300">
              {/* Dùng chung Icon định vị */}
              <div className="w-14 h-14 rounded-full bg-[#2962c1]/10 text-[#2962c1] flex items-center justify-center shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#0c1620]">
                  Cơ Sở 3
                </h4>
                <p className="text-xs sm:text-sm text-[#0c1620]/70 font-medium">
                   Ấp Suối Cả, Xã Cẩm Mỹ, Tp. Đồng Nai
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}