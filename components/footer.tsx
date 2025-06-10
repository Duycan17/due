import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, TreePine, Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white relative overflow-hidden">
      {/* Bamboo decorations */}
      <div className="absolute inset-0 opacity-10">
        <TreePine className="absolute top-10 left-10 w-32 h-32 text-emerald-300" />
        <TreePine className="absolute bottom-20 right-20 w-28 h-28 text-emerald-400" />
        <Leaf className="absolute top-1/2 left-1/3 w-16 h-16 text-emerald-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <TreePine className="w-7 h-7 text-emerald-900" />
                </div>
                <Leaf className="absolute -top-1 -right-1 w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-bold text-xl">Làng Nghề Đà Nẵng</span>
            </div>
            <p className="text-emerald-100 leading-relaxed mb-4">
              Bảo tồn và phát huy giá trị văn hóa của các làng nghề truyền thống Đà Nẵng như những cây tre xanh mãi với
              thời gian.
            </p>
            <div className="flex items-center text-emerald-200">
              <TreePine className="w-4 h-4 mr-2" />
              <span className="text-sm">Bền vững - Truyền thống - Hiện đại</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/villages"
                  className="text-emerald-100 hover:text-white transition-colors flex items-center"
                >
                  <TreePine className="w-3 h-3 mr-2" />
                  Làng Nghề
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                  <TreePine className="w-3 h-3 mr-2" />
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                  <TreePine className="w-3 h-3 mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                  <TreePine className="w-3 h-3 mr-2" />
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Thông Tin Liên Hệ
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-100">Đà Nẵng, Việt Nam</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-100">+84 236 xxx xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-100">info@langnhedanang.vn</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Theo Dõi Chúng Tôi
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-emerald-200 text-sm">Kết nối với cộng đồng yêu thích văn hóa truyền thống</p>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <TreePine className="w-6 h-6 text-emerald-400 mr-2" />
            <p className="text-emerald-200">© 2024 Làng Nghề Truyền Thống Đà Nẵng. Tất cả quyền được bảo lưu.</p>
            <TreePine className="w-6 h-6 text-emerald-400 ml-2" />
          </div>
          <p className="text-emerald-300 text-sm">"Như cây tre Việt Nam - bền bỉ, mềm mại nhưng không gãy"</p>
        </div>
      </div>
    </footer>
  )
}
