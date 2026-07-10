export default function ContactPage() {
  return (
    <section className="w-full bg-white text-[#0c1620] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ CHI TIẾT */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-[#0c1620] mb-4 uppercase">Liên hệ</h2>
            <p className="text-gray-600 leading-relaxed">
              Trung tâm Đào tạo và Sát hạch lái xe Đồng Nai luôn sẵn sàng đồng hành cùng bạn trên mọi hành trình. 
              Liên hệ ngay với chúng tôi để được tư vấn lộ trình học lái xe tốt nhất.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-[#2962c1] text-xl">📍</div>
              <div>
                <h4 className="font-bold text-[#0c1620] uppercase text-sm">Địa chỉ</h4>
                <p className="text-sm text-gray-700">Đường Huỳnh Văn Nghệ, Khu phố Bửu Long, Phường Trấn Biên, Tp. Đồng Nai</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-[#2962c1] text-xl">📞</div>
              <div>
                <h4 className="font-bold text-[#0c1620] uppercase text-sm">Điện thoại & Zalo</h4>
                <p className="text-sm text-gray-700 font-semibold">0339 867 945</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-[#2962c1] text-xl">✉️</div>
              <div>
                <h4 className="font-bold text-[#0c1620] uppercase text-sm">Email</h4>
                <p className="text-sm text-gray-700">queanh.daothi@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: BẢN ĐỒ MAPS */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-[#2962c1]/20 rounded-2xl overflow-hidden shadow-lg h-112.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9646590548477!2d106.7917311407867!3d10.966040169225874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c20212990c3bf%3A0x9baeb392c95421e6!2zVHJ1bmcgdMOibSDEkMOgbyB04bqhbyB2w6AgU8OhdCBo4bqhY2ggbMOhaSB4ZSBsb-G6oWkgSSDEkOG7k25nIE5haQ!5e0!3m2!1svi!2s!4v1783047162883!5m2!1svi!2s"
              className="w-full h-full border-0" 
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}