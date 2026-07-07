export default function ContactPage() {
  return (
    <section className="w-full bg-white text-[#0c1620] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* CỘT TRÁI: FORM LIÊN HỆ */}
        {/* Đổi nền thành bg-white và thêm viền border-[#2962c1] */}
        <div className="lg:col-span-8 bg-white text-[#0c1620] rounded-xl p-6 shadow-sm border border-[#2962c1]">
          <h2 className="text-2xl font-bold mb-2 text-[#0c1620]">Liên hệ với chúng tôi</h2>
          <p className="text-sm text-gray-600 mb-6">
            Trung tâm Đào tạo và Sát hạch lái xe Đồng Nai luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Họ và tên*"
              required
              className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#2962c1]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#2962c1]"
              />
              <input
                type="tel"
                placeholder="Số điện thoại*"
                required
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#2962c1]"
              />
            </div>

            <input
              type="url"
              placeholder="Hạng đăng ký"
              className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#2962c1]"
            />

            <input
              type="text"
              placeholder="Tiêu đề*"
              required
              className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#2962c1]"
            />

            <textarea
              rows={5}
              placeholder="Nội dung liên hệ*"
              required
              className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#2962c1] resize-none"
            />

            <button
              type="submit"
              className="bg-[#2962c1] hover:bg-[#082379] text-white font-semibold py-2.5 px-5 rounded-md text-sm transition-colors cursor-pointer"
            >
              Gửi thông tin liên hệ
            </button>
          </form>
        </div>

        {/* CỘT PHẢI: THÔNG TIN & MAPS */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Thông tin liên hệ */}
          <div>
            <div className="bg-[#2962c1] text-white px-4 py-1.5 text-sm font-bold uppercase inline-block rounded-t-md">
              Thông tin liên hệ
            </div>
            {/* Đổi nền thành bg-white và thêm viền border-[#2962c1] */}
            <div className="bg-white border border-[#2962c1] rounded-b-md rounded-tr-md p-4 space-y-3 shadow-sm">
              <div>
                <span className="block text-xs font-semibold text-[#2962c1] uppercase">Địa chỉ:</span>
                <p className="text-sm text-gray-700">Đường Huỳnh Văn Nghệ, Khu phố Bửu Long, Phường Trấn Biên, Tp. Đồng Nai</p>
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#2962c1] uppercase">Thông tin liên hệ:</span>
                <div className="text-sm text-gray-700 space-y-0.5">
                  <p>Phone: 0339 867 945</p>
                  <p>Zalo: 0339 867 945</p>
                  <p>Email: queanh.daothi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bản đồ Maps */}
          <div>
            <div className="bg-[#2962c1] text-white px-4 py-1.5 text-sm font-bold uppercase inline-block rounded-t-md">
              Maps
            </div>
            {/* Khung chứa bản đồ */}
            <div className="bg-white border border-gray-200 rounded-b-md rounded-tr-md overflow-hidden h-62.5 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9646590548477!2d106.7917311407867!3d10.966040169225874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c20212990c3bf%3A0x9baeb392c95421e6!2zVHJ1bmcgdMOibSDEkMOgbyB04bqhbyB2w6AgU8OhdCBo4bqhY2ggbMOhaSB4ZSBsb-G6oWkgSSDEkOG7k25nIE5haQ!5e0!3m2!1svi!2s!4v1783047162883!5m2!1svi!2s"
                className="w-full h-full border-0" 
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}