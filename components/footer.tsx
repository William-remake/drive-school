import { FacebookFilled, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0c1620] text-[#f9fafc] py-16 px-6 lg:px-20 font-sans border-t border-[#f9fafc]/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Cột 1: Thông tin trường lái */}
                <div className="space-y-4">
                    <h2 className="font-black text-2xl tracking-tight uppercase italic text-[#f9fafc] flex items-center gap-3">
                        Trung tâm Đào tạo lái xe Đồng Nai
                    </h2>

                    <p className="text-gray-400 text-xs leading-relaxed max-w-xs uppercase font-medium tracking-wider">
                        Trung tâm đào tạo và sát hạch lái xe hàng đầu.
                        Cam kết chất lượng, uy tín và tỉ lệ đậu cao nhất cho mọi học viên.
                    </p>
                </div>

                {/* Cột 2: Liên hệ (Contact) */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg uppercase tracking-wide text-[#f9fafc]">Liên hệ</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {/* Hỗ trợ tuyển sinh */}
                        <li>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=queanh.daothi@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#2962c1] transition-colors flex items-center gap-2"
                            >
                                <MailOutlined className="text-xs" /> Hỗ trợ tuyển sinh
                            </a>
                        </li>

                        {/* Số điện thoại */}
                        <li>
                            <a
                                href="tel:0339867945"
                                className="hover:text-[#2962c1] transition-colors flex items-center gap-2"
                            >
                                <PhoneOutlined className="text-xs" /> Hotline: 0339.867.945
                            </a>
                        </li>

                        {/* Địa chỉ */}
                        <li className="hover:text-[#f9fafc] transition-colors cursor-default">
                            Đường Huỳnh Văn Nghệ, Khu phố Bửu Long, Phường Trấn Biên, Tp. Đồng Nai
                        </li>
                    </ul>
                </div>

                {/* Cột 3: Kết nối mạng xã hội */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg uppercase tracking-wide text-[#f9fafc]">Kết nối</h3>
                    <div className="flex gap-4 text-2xl items-center">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/p/Trung-t%C3%A2m-%C4%90%C3%A0o-t%E1%BA%A1o-l%C3%A1i-xe-%C4%90%E1%BB%93ng-Nai-100057378553272/?locale=vi_VN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9fafc] hover:text-[#2962c1] transition-all duration-300 hover:scale-110"
                        >
                            <FacebookFilled />
                        </a>

                        {/* Zalo (Đã sửa từ chữ thành Icon Hình ảnh) */}
                        <a
                            href="https://zalo.me/339867945" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 hover:scale-110 flex items-center justify-center w-[1.15em] h-[1.15em]"
                        >
                            <Image 
                                src="/Zalo.svg"
                                alt="Zalo"
                                width={24}
                                height={24}
                                className="w-full h-full object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Dòng bản quyền phía dưới */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#f9fafc]/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    <span className="hover:text-[#2962c1] cursor-pointer transition-colors">Điều khoản dịch vụ</span>
                    <span className="hover:text-[#2962c1] cursor-pointer transition-colors">Chính sách bảo mật</span>
                </div>
                <p className="text-[12px] text-gray-400 uppercase tracking-widest">
                    Copyright © 2026 William. All rights reserved.
                </p>
            </div>
        </footer>
    );
}