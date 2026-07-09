"use client";

import { FileTextOutlined } from "@ant-design/icons";

interface Chapter {
  title: string;
  description: string;
  totalQuestions: number;
  icon: React.ReactNode;
}

export default function QuizPage() {
  // 1. Dữ liệu các chương lý thuyết luật GTĐB (Bỏ thi mô phỏng) - Đã thay toàn bộ bằng FileTextOutlined
  const chapters: Chapter[] = [
    {
      title: "Chương 1 - Khái niệm và quy tắc giao thông đường bộ",
      description: "Học hiểu các khái niệm cơ bản, hệ thống biển báo và quy tắc nhường đường, tốc độ khi tham gia giao thông.",
      totalQuestions: 166,
      icon: <FileTextOutlined className="text-2xl text-[#2962c1]" />,
    },
    {
      title: "Chương 2 - Nghiệp vụ vận tải & Văn hóa giao thông",
      description: "Các quy định về trách nhiệm vận tải hàng hóa, hành khách và đạo đức, văn hóa ứng xử của người lái xe.",
      totalQuestions: 46,
      icon: <FileTextOutlined className="text-2xl text-[#2962c1]" />,
    },
    {
      title: "Chương 3 - Kỹ thuật lái xe & Cấu tạo sửa chữa ô tô",
      description: "Phương pháp điều khiển xe trên các loại địa hình và nguyên lý cấu tạo, xử lý hỏng hóc cơ bản của xe.",
      totalQuestions: 91,
      icon: <FileTextOutlined className="text-2xl text-[#2962c1]" />,
    },
    {
      title: "Chương 4 - Hệ thống biển báo hiệu đường bộ",
      description: "Trọn bộ nhận diện biển báo cấm, biển nguy hiểm, biển hiệu lệnh, biển chỉ dẫn và biển phụ.",
      totalQuestions: 182,
      icon: <FileTextOutlined className="text-2xl text-[#2962c1]" />,
    },
    {
      title: "Chương 5 - Giải các thế sa hình và tình huống",
      description: "Quy tắc và thứ tự ưu tiên giải sa hình, giúp xử lý chính xác các tình huống thực tế khi lái xe.",
      totalQuestions: 115,
      icon: <FileTextOutlined className="text-2xl text-[#2962c1]" />,
    },
    {
      title: "Câu hỏi điểm liệt (Bắt buộc đúng)",
      description: "Tập hợp các câu hỏi tình huống mất an toàn giao thông nghiêm trọng. Sai 1 câu này sẽ bị truất quyền sát hạch.",
      totalQuestions: 60,
      icon: <FileTextOutlined className="text-2xl text-red-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0c1620] font-sans selection:bg-[#2962c1] selection:text-white">
      
      {/* HEADER SECTION (Phỏng theo phong cách tiêu đề lớn của bạn) */}
      <div className="py-16 px-6 md:px-20 lg:px-32 bg-white flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3 mb-2">
          <FileTextOutlined className="text-4xl text-[#2962c1]" />
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Trắc Nghiệm Lý Thuyết</h1>
        </div>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mt-2">
          Hệ thống tổng hợp bộ câu hỏi sát hạch lái xe ôtô chuẩn từ Cục Đường bộ Việt Nam. Học trực tuyến dễ dàng, chấm điểm khách quan.
        </p>
        <div className="h-1.5 w-20 bg-[#2962c1] mt-5 rounded-full"></div>
      </div>

      {/* BỐ CỤC CHÍNH (Tham khảo trực tiếp từ hình 3 bạn gửi) */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Thanh mô tả tổng quan thông số */}
        <div className="bg-[#f9fafc] border border-gray-100 rounded-lg p-4 mb-10 text-sm text-gray-600 flex flex-wrap gap-6 items-center">
          <div>📌 <span className="font-bold text-[#0c1620]">Tổng số:</span> 600 Câu hỏi bộ GTVT</div>
          <div>📝 <span className="font-bold text-[#0c1620]">Hình thức:</span> Ôn tập theo từng chương và làm đề thi thử</div>
          <div>🎯 <span className="font-bold text-[#0c1620]">Yêu cầu:</span> Đạt điểm tối thiểu tùy theo từng hạng xe (A1, A, B, C, D)</div>
        </div>

        {/* TIÊU ĐỀ KHỐI ÔN TẬP */}
        <div className="flex items-end gap-4 mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#0c1620] border-l-4 border-[#2962c1] pl-3 leading-none">
            Ôn tập theo chương
          </h2>
          <div className="h-0.5 grow bg-gray-200 mb-0.5"></div>
        </div>

        {/* LƯỚI DANH SÁCH CÁC CHƯƠNG (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200 hover:border-[#2962c1] transition-all duration-300 bg-white rounded-xl shadow-sm flex flex-col justify-between overflow-hidden"
            >
              {/* Phần thông tin thẻ */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#f9fafc] rounded-lg border border-gray-100 shrink-0">
                    {chapter.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0c1620] line-clamp-2 leading-tight group-hover:text-[#2962c1]">
                      {chapter.title}
                    </h3>
                    <span className="inline-block text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded mt-1.5">
                      {chapter.totalQuestions} câu hỏi
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                  {chapter.description}
                </p>
              </div>

              {/* Nút hành động ở dưới đáy thẻ giống nút "Ôn Tập Chương" màu xanh lá của bạn, đổi sang xanh dương thương hiệu */}
              <div className="p-4 bg-[#f9fafc] border-t border-gray-100">
                <button className="w-full bg-[#2962c1] hover:bg-[#082379] text-white font-bold py-2.5 px-4 rounded-lg text-sm tracking-wide transition-colors cursor-pointer text-center block">
                  Ôn Tập Chương
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* KHỐI TÍNH NĂNG THI THỬ (Bổ sung thêm dựa theo Hình 1 của bạn) */}
        <section className="mt-20 bg-[#f9fafc] border border-gray-200 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#0c1620] mb-3">Tạo đề thi thử ngẫu nhiên</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
            Đề thi được cấu trúc tự động đầy đủ các phần: câu hỏi luật, biển báo, sa hình và lồng ghép câu hỏi điểm liệt giống như khi đi thi thật tại trung tâm sát hạch.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white hover:bg-gray-50 border border-gray-300 text-[#0c1620] font-bold py-3 px-6 rounded-lg text-sm transition-colors cursor-pointer shadow-sm">
              Xem bộ đề thi mẫu
            </button>
            <button className="bg-[#2962c1] hover:bg-[#082379] text-white font-bold py-3 px-6 rounded-lg text-sm tracking-wide transition-colors cursor-pointer shadow-sm">
              Bắt đầu thi thử ngay
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}