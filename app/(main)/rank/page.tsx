"use client";

import Image from "next/image";

interface Course {
  name: string;
  description: string;
  image: string;
}

export default function CoursesPage() {
  // 1. Dữ liệu các hạng đào tạo chia theo 3 nhóm

  // Nhóm xe máy (Mới bổ sung)
  const motorbikeCourses: Course[] = [
    { name: "Hạng A1", description: "Điều khiển xe mô tô hai bánh có dung tích xi-lanh đến 125 cm³ hoặc có công suất động cơ điện đến 11 kW.", image: "/xe_so.png" },
    { name: "Hạng A", description: "Điều khiển xe mô tô hai bánh có dung tích xi-lanh trên 125 cm³ và các loại xe quy định cho hạng A1.", image: "/xe_con.png" },
  ];

  // Nhóm ô tô con
  const carCourses: Course[] = [
    { name: "Hạng B1 (Số tự động)", description: "Lái xe số tự động đến 9 chỗ ngồi, không hành nghề lái xe.", image: "/oto_so_tu_dong.png" },
    { name: "Hạng B2 (Số sàn)", description: "Lái xe số sàn & số tự động đến 9 chỗ, được phép hành nghề lái xe.", image: "/oto_so_san.png" },
  ];

  // Nhóm xe tải và nâng hạng
  const truckAndHeavyCourses: Course[] = [
    { name: "Hạng C (Xe tải)", description: "Lái xe tải, ô tô chuyên dùng có trọng tải từ 3.500 kg trở lên.", image: "/xe_tai_1.png" },
    { name: "Hạng D (Dưới 30 chỗ)", description: "Chở người từ 10 đến 30 chỗ ngồi. Yêu cầu đủ tuổi và kinh nghiệm nâng hạng.", image: "/xe_16_cho.png" },
    { name: "Hạng E (Trên 30 chỗ)", description: "Chở người trên 30 chỗ ngồi. Bản nâng cấp cao cấp cho tài xế chuyên nghiệp.", image: "/xe_30_cho.png" },
    { name: "Hạng F (Container/Rơ-moóc)", description: "Điều khiển các loại xe kéo rơ-moóc, sơ-mi rơ-moóc, container.", image: "/xe_tai.png" },
  ];

  // Reusable Component cho từng Card Hạng Đào Tạo
  const CourseCard = ({ course }: { course: Course }) => (
    <div className="group border border-gray-200 hover:border-[#2962c1] transition-all duration-300 bg-white overflow-hidden rounded-lg shadow-sm">
      {/* Thay đổi aspect-3/4 sang aspect-video (16:9) để khung ảnh rộng theo chiều ngang */}
      <div className="relative aspect-video overflow-hidden bg-gray-50 p-2">
        <Image
          src={course.image}
          alt={course.name}
          fill
          className="object-contain opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-5 text-center space-y-2">
        <h3 className="text-[#0c1620] text-xl font-black uppercase tracking-tight group-hover:text-[#2962c1] transition-colors">
          {course.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {course.description}
        </p>
        <div className="pt-2">
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white text-[#0c1620] font-sans selection:bg-[#2962c1] selection:text-white">
      {/* Header Section */}
      <div className="py-20 px-6 md:px-20 lg:px-32 bg-white flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Hạng Đào Tạo</h2>
          <div className="h-1.5 w-20 bg-[#2962c1] mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-24">
        
        {/* SECTION 1: HẠNG XE MÁY (A1, A) */}
        <section>
          <div className="flex items-end gap-4 mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-none text-[#0c1620]">Hạng Xe Máy</h2>
            <div className="h-1 grow bg-[#2962c1]/20 mb-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {motorbikeCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
          </div>
        </section>

        {/* SECTION 2: Ô TÔ DƯỚI 9 CHỖ (B1, B2) */}
        <section>
          <div className="flex items-end gap-4 mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-none text-[#0c1620]">Hạng Ô Tô Con</h2>
            <div className="h-1 grow bg-[#2962c1]/20 mb-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {carCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
          </div>
        </section>

        {/* SECTION 3: XE TẢI & NÂNG HẠNG CHUYÊN NGHIỆP (C, D, E, F) */}
        <section>
          <div className="flex items-end gap-4 mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-none text-[#0c1620]">Xe Tải & Nâng Hạng</h2>
            <div className="h-1 grow bg-[#2962c1] mb-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {truckAndHeavyCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}