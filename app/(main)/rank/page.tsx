"use client";

import Image from "next/image";

interface Course {
  name: string;
  description: string;
  image: string;
}

export default function CoursesPage() {
  // 1. Dữ liệu các hạng đào tạo chia theo các nhóm phù hợp

  // Nhóm xe máy
  const motorbikeCourses: Course[] = [
    { name: "Hạng A1", description: "Điều khiển xe mô tô hai bánh có dung tích xi-lanh đến 125 cm³ hoặc có công suất động cơ điện đến 11 kW.", image: "/xe_so.png" },
    { name: "Hạng A", description: "Điều khiển xe mô tô hai bánh có dung tích xi-lanh trên 125 cm³ và các loại xe quy định cho hạng A1.", image: "/xe_con.png" },
  ];

  // Nhóm ô tô con
  const carCourses: Course[] = [
    { name: "Hạng B (Số tự động)", description: "Lái xe số tự động đến 9 chỗ ngồi, xe tải số tự động dưới 3.500 kg, không hành nghề lái xe.", image: "/oto_so_tu_dong.png" },
    { name: "Hạng B (Số sàn)", description: "Lái xe số sàn & số tự động đến 9 chỗ, xe tải dưới 3.500 kg, được phép hành nghề lái xe.", image: "/oto_so_san.png" },
  ];

  // Nhóm xe tải & xe khách hành khách (Đã tách xe nâng ra khỏi mảng này)
  const truckAndHeavyCourses: Course[] = [
    { name: "Hạng C1", description: "Điều khiển ô tô tải có trọng tải thiết kế từ 3.500 kg đến dưới 7.500 kg.", image: "/xe_tai_1.png" },
    { name: "Hạng C", description: "Điều khiển ô tô tải, ô tô chuyên dùng có trọng tải thiết kế từ 7.500 kg trở lên.", image: "/xe_tai.png" },
    { name: "Hạng D1", description: "Điều khiển ô tô chở người từ 10 chỗ đến 16 chỗ ngồi.", image: "/xe_16_cho.png" },
    { name: "Hạng D2", description: "Điều khiển ô tô chở người trên 16 chỗ đến 30 chỗ ngồi.", image: "/xe_30_cho.png" },
    { name: "Hạng D", description: "Điều khiển ô tô chở người trên 30 chỗ ngồi.", image: "/tren_30_cho_ngoi.png" }, 
  ];

  // Nhóm đào tạo nghề riêng biệt
  const forkliftCourses: Course[] = [
    { name: "Xe nâng hàng", description: "Khóa học vận hành xe nâng hàng chuyên nghiệp, cấp chứng chỉ nghề có giá trị toàn quốc.", image: "/xe-nâng.png" }, 
  ];

  // Reusable Component cho từng Card Hạng Đào Tạo
  const CourseCard = ({ course }: { course: Course }) => (
    <div className="group border border-gray-200 hover:border-[#2962c1] transition-all duration-300 bg-white overflow-hidden rounded-lg shadow-sm">
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

        {/* SECTION 2: Ô TÔ CON */}
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

        {/* SECTION 3: XE TẢI & XE KHÁCH */}
        <section>
          <div className="flex items-end gap-4 mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-none text-[#0c1620]">Xe Tải & Xe Khách</h2>
            <div className="h-1 grow bg-[#2962c1]/20 mb-1"></div>
          </div>
          {/* Đổi sang 3 cột hiển thị cho cân đối khi có 5 phần tử */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {truckAndHeavyCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
          </div>
        </section>

        {/* SECTION 4: ĐÀO TẠO LÁI XE NÂNG (Hạng riêng biệt) */}
        <section>
          <div className="flex items-end gap-4 mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-none text-[#0c1620]">Đào tạo lái xe nâng hàng</h2>
            <div className="h-1 grow bg-[#2962c1] mb-1"></div>
          </div>
          <div className="grid grid-cols-1 max-w-md mx-auto">
            {forkliftCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}