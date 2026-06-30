import Link from "next/link";

export default function NotFound() {
    return (
        // Đã đổi min-h-[calc(100vh-80px)] thành min-h-screen để màu nền phủ full toàn bộ màn hình
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 font-sans overflow-hidden bg-[#0c1620] text-[#f9fafc]">
            
            {/* Hiệu ứng đèn sương mù / Gradient mờ phía sau làm điểm nhấn */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-125 h-75 sm:h-125 bg-[#2962c1]/10 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="max-w-md w-full text-center space-y-6">
                
                {/* Mã lỗi 404 lớn mang phong cách thể thao/tốc độ */}
                <h1 className="text-7xl sm:text-8xl font-black uppercase italic tracking-tighter text-[#2962c1] select-none drop-shadow-[0_4px_12px_rgba(41,98,193,0.3)]">
                    404
                </h1>

                {/* Tiêu đề thông báo lỗi mang tính định hướng */}
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    Chệch Hướng Hành Trình!
                </h2>

                {/* Đoạn mô tả lý do (được ví von theo chủ đề trường lái xe) */}
                <p className="text-[#f9fafc]/70 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                    Trang bạn đang tìm kiếm không tồn tại hoặc đã thay đổi lộ trình. Hãy quay lại tuyến đường chính để tiếp tục.
                </p>

                {/* Nút hành động quay lại trang chủ bằng màu xanh chủ đạo #2962c1 */}
                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-block bg-[#2962c1] text-[#f9fafc] px-8 py-3.5 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-[#082379] transition-all duration-300 shadow-lg hover:shadow-[#2962c1]/20 active:scale-95"
                    >
                        Quay lại trang chủ
                    </Link>
                </div>
            </div>
        </section>
    );
}