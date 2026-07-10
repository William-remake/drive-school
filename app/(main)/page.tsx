import Image from "next/image";
import { CarOutlined, TeamOutlined, DollarCircleOutlined, SmileOutlined } from '@ant-design/icons';

export default function page() {
  return (
    // Bọc toàn bộ nội dung trang chủ trong thẻ <main> để tối ưu cấu trúc DOM
    <main className="w-full bg-[#0c1620]">

      {/* SECTION HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-end px-6 lg:px-20 font-sans overflow-hidden bg-[#0c1620]">

        {/* 1. KHỐI ẢNH NỀN (BACKGROUND IMAGE) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Homepage.jpg"
            alt="Học lái xe tại Đồng Nai"
            fill
            priority
            className="object-cover object-center w-full h-full scale-105 transition-transform duration-700"
          />

          {/* Thay đổi hướng đổ bóng đậm dần về phía bên phải để làm chữ cực kỳ rõ nét */}
          <div className="absolute inset-0 bg-linear-to-l from-[#0c1620]/95 via-[#0c1620]/75 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0c1620]/60 via-transparent to-transparent opacity-50" />
        </div>

        {/* 2. KHỐI CHỮ NẰM BÊN PHẢI (CONTENT RIGHT) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-end">
          <div className="w-full lg:max-w-2xl space-y-6 text-center lg:text-right">

            {/* Câu Slogan lớn nằm bên phải - Đã tăng size chữ (text-4xl sm:text-5xl lg:text-6xl) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tight leading-tight text-[#f9fafc] drop-shadow-md">
              Vững Tay Lái <br />
              <span className="text-[#2962c1] not-italic">Trọn Hành Trình</span>
            </h1>

            {/* Tên trường nhỏ nằm ngay phía dưới câu Slogan - Đã tăng size chữ (text-base sm:text-lg) */}
            <div className="flex justify-center lg:justify-end">
              <p className="text-[#f9fafc]/90 text-base sm:text-lg font-medium tracking-wide max-w-lg uppercase border-b-2 lg:border-b-0 lg:border-r-2 border-[#2962c1] pb-2 lg:pb-0 lg:pr-4 italic drop-shadow-sm">
                — Trung tâm Đào tạo lái xe Đồng Nai
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ĐÀO TẠO & ĐĂNG KÝ HỌC LÁI XE */}
      <section className="w-full py-14 bg-[#f9fafc] text-[#0c1620] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Bố cục chia 2 khối lớn cân bằng theo hàng ngang */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* KHỐI TRÁI: HIỂN THỊ MÃ QR ĐĂNG KÝ */}
            <div className="lg:col-span-5 border border-[#2962c1]/30 rounded-2xl p-6 bg-[#f9fafc] flex flex-col items-center justify-center shadow-xs">

              {/* Tiêu đề */}
              <div className="relative flex justify-center mb-8 w-full">
                <span className="bg-[#f9fafc] px-4 font-bold text-lg text-[#0c1620] relative z-10 text-center">
                  Quét mã để đăng ký
                </span>
                <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#2962c1]/20 z-0" />
              </div>

              {/* Khối chứa ảnh QR */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 border-4 border-white shadow-lg rounded-xl overflow-hidden mb-6">
                <Image
                  src="/qrcode.png" 
                  alt="Quét mã QR đăng ký học lái xe"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Lời nhắn phụ */}
              <p className="text-center text-sm text-gray-600 font-medium px-4">
                Dùng camera điện thoại quét mã để truy cập form đăng ký nhanh.
              </p>

              {/* Link dự phòng nếu quét không được */}
              <a
                href="https://forms.gle/5hys7DCDEbLP5Es86"
                target="_blank"
                className="mt-4 text-[#2962c1] font-bold text-sm hover:underline"
              >
                Hoặc nhấn vào đây
              </a>
            </div>

            {/* KHỐI PHẢI: TIÊU ĐỀ XANH DƯƠNG + HÀNG NGANG 4 Ô XE HẠNG ĐÀO TẠO */}
            <div className="lg:col-span-7 flex flex-col p-5 space-y-6">

              <div className="space-y-5 w-full">
                {/* Thanh tiêu đề màu xanh dương có mũi tên trỏ xuống dưới */}
                <div className="relative w-full bg-[#2962c1] text-center py-3 px-4 rounded-sm font-semibold text-white text-sm sm:text-base tracking-wide">
                  Bạn đang quan tâm đến hạng đào tạo lái xe nào?
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8der-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#2962c1]" />
                </div>

                {/* Grid 4 ô xếp ngang hàng với viền nét đứt màu xanh dương */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">

                  {/* Ô xe hạng A1 */}
                  <div className="border-2 border-dashed border-[#2962c1]/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-3 bg-[#f9fafc] hover:shadow-md transition-shadow duration-300 aspect-4/5 sm:aspect-auto sm:py-8">
                    <svg className="w-12 h-12 text-[#0c1620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="5" cy="18" r="3" />
                      <circle cx="19" cy="18" r="3" />
                      <path d="M12 18V13l-3-3h3l2-3h4" />
                      <path d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                    </svg>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#0c1620] uppercase">Hạng A1</h3>
                      <p className="text-[#0c1620]/70 text-xs mt-0.5 font-bold">(Xe máy)</p>
                    </div>
                  </div>

                  {/* Ô xe hạng A2 */}
                  <div className="border-2 border-dashed border-[#2962c1]/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-3 bg-[#f9fafc] hover:shadow-md transition-shadow duration-300 aspect-4/5 sm:aspect-auto sm:py-8">
                    <svg className="w-12 h-12 text-[#0c1620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="18" r="3" />
                      <path d="M6 18h12M9 10h4l3 5H8z" />
                      <path d="m14 10 2-4h3" />
                    </svg>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#0c1620] uppercase">Hạng A2</h3>
                      <p className="text-[#0c1620]/70 text-xs mt-0.5 font-bold">(Xe mô tô)</p>
                    </div>
                  </div>

                  {/* Ô xe hạng B */}
                  <div className="border-2 border-dashed border-[#2962c1]/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-3 bg-[#f9fafc] hover:shadow-md transition-shadow duration-300 aspect-4/5 sm:aspect-auto sm:py-8">
                    <svg className="w-12 h-12 text-[#0c1620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <path d="M9 17h6" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#0c1620] uppercase">Hạng B</h3>
                      <p className="text-[#0c1620]/70 text-xs mt-0.5 font-bold">(Số sàn, Tự động)</p>
                    </div>
                  </div>

                  {/* Ô xe hạng C1 */}
                  <div className="border-2 border-dashed border-[#2962c1]/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-3 bg-[#f9fafc] hover:shadow-md transition-shadow duration-300 aspect-4/5 sm:aspect-auto sm:py-8">
                    <svg className="w-12 h-12 text-[#0c1620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 18H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8v16Z" />
                      <path d="M14 6h4l4 4v6a2 2 0 0 1-2 2h-6V6Z" />
                      <circle cx="7.5" cy="18.5" r="2.5" />
                      <circle cx="16.5" cy="18.5" r="2.5" />
                    </svg>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#0c1620] uppercase">Hạng C1</h3>
                      <p className="text-[#0c1620]/70 text-xs mt-0.5 font-bold">(Xe tải)</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* KHỐI TIÊU CHÍ HOẠT ĐỘNG: Nền vàng nhạt nguyên bản, viền trái đổi sang màu xanh dương tạo điểm nhấn hài hòa */}
              <div className="w-full bg-[#fdf5d6] border-l-[5px] border-[#2962c1] p-4 rounded-r text-xs sm:text-sm leading-relaxed text-[#0c1620]/90">
                Với tiêu chí <strong className="text-black italic">VỮNG TAY LÁI – TRỌN NIỀM TIN</strong>, chúng tôi không ngừng nâng cấp cơ sở vật chất and nâng cao chất lượng đội ngũ giáo viên, qua đó giúp học viên củng cố kiến thức, rèn luyện kỹ năng điều khiển ô tô và tự tin đạt kết quả cao trong kỳ thi sát hạch năm 2026.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT / TIÊU CHÍ TRUNG TÂM */}
      <section className="relative w-full bg-[#2962c1] text-[#f9fafc] font-sans overflow-hidden p-16">

        {/* Khối ảnh phía trên - Đã thu hẹp lại vừa vặn và sửa lỗi class chiều cao */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/adshome.jpg"
              alt="Background Đào tạo lái xe"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Khối 4 ô phía dưới - Đã chỉnh lại pt-10 để khoảng cách trên dưới đều nhau */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

          {/* Grid chia 4 khối tính năng tương ứng với ảnh mẫu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Khối 1: Chất lượng hàng đầu */}
            <div className="bg-[#f9fafc] rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-[#2962c1]/10 flex items-center justify-center text-[#2962c1] text-3xl">
                <CarOutlined />
              </div>
              <h3 className="font-extrabold text-base text-[#0c1620] uppercase tracking-wide">
                Chất lượng hàng đầu
              </h3>
            </div>

            {/* Khối 2: Giảng viên tận tâm */}
            <div className="bg-[#f9fafc] rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-[#2962c1]/10 flex items-center justify-center text-[#2962c1] text-3xl">
                <TeamOutlined />
              </div>
              <h3 className="font-extrabold text-base text-[#0c1620] uppercase tracking-wide">
                Giảng viên tận tâm
              </h3>
            </div>

            {/* Khối 3: Chi phí minh bạch */}
            <div className="bg-[#f9fafc] rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-[#2962c1]/10 flex items-center justify-center text-[#2962c1] text-3xl">
                <DollarCircleOutlined />
              </div>
              <h3 className="font-extrabold text-base text-[#0c1620] uppercase tracking-wide">
                Chi phí minh bạch
              </h3>
            </div>

            {/* Khối 4: Tỷ lệ đậu cao */}
            <div className="bg-[#f9fafc] rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-[#2962c1]/10 flex items-center justify-center text-[#2962c1] text-3xl">
                <SmileOutlined />
              </div>
              <h3 className="font-extrabold text-base text-[#0c1620] uppercase tracking-wide">
                Tỷ lệ đậu cao
              </h3>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}