"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Hàm tạo style cho Link tối ưu theo bảng màu từ ảnh 1000026450.jpg
    const getLinkStyle = (href: string) => {
        const isActive = pathname === href;
        return `px-4 py-1.5 text-[14px] font-semibold uppercase transition-all duration-200 ${
            isActive 
            ? "bg-[#2962c1] text-[#f9fafc] rounded-sm" 
            : "text-[#f9fafc]/90 hover:text-[#2962c1]"
        }`;
    };

    return (
        // Nền Xanh đen đậm #0c1620 từ bảng màu uy tín
        <nav className="bg-[#0c1620] text-[#f9fafc] sticky top-0 z-50 px-6 lg:px-10 py-4 font-sans border-b border-[#f9fafc]/10">
            <div className="flex items-center justify-between max-w-full mx-auto">

                <Link href="/" className="group">
                    <span className="font-black text-2xl tracking-tight uppercase italic hover:text-[#2962c1] transition-colors duration-300 flex items-center gap-3">

                        {/* Khối chứa ảnh Logo hình tròn có Border */}
                        <div className="relative w-10 h-10 rounded-full border-2 border-[#2962c1] overflow-hidden bg-white flex items-center justify-center shrink-0 shadow-sm">
                            <Image
                                src="/logo.jpg"
                                alt="Logo Trung tâm"
                                width={40}
                                height={40}
                                priority
                                className="object-cover"
                            />
                        </div>

                        {/* Tên trung tâm */}
                        <span>Trung tâm Đào tạo lái xe Đồng Nai</span>
                    </span>
                </Link>

                {/* Menu desktop - Đã cập nhật theo danh sách link mới */}
                <div className="hidden md:flex gap-1 items-center">
                    <Link href="/" className={getLinkStyle("/")}>Trang chủ</Link>
                    <Link href="/about" className={getLinkStyle("/about")}>Giới thiệu</Link>
                    <Link href="/rank" className={getLinkStyle("/rank")}>Hạng đào tạo</Link>
                    <Link href="/study" className={getLinkStyle("/study")}>Luyện thi</Link>
                    <Link href="/contact" className={getLinkStyle("/contact")}>Liên hệ</Link>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl text-[#f9fafc]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>
             
            {/* Menu mobile - Đã đồng bộ chuẩn theo link mới */}
            {open && (
                <div className="flex flex-col mt-4 pb-6 gap-2 md:hidden border-t border-[#f9fafc]/10 pt-6 animate-in slide-in-from-top">
                    <Link href="/" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-[#f9fafc] hover:text-[#2962c1]">Trang chủ</Link>
                    <Link href="/about" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-[#f9fafc] hover:text-[#2962c1]">Giới thiệu</Link>
                    <Link href="/rank" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-[#f9fafc] hover:text-[#2962c1]">Hạng đào tạo</Link>
                    <Link href="/study" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-[#f9fafc] hover:text-[#2962c1]">Luyện thi</Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-[#f9fafc] hover:text-[#2962c1]">Liên hệ</Link>
                </div>
            )}
        </nav>
    );
}