import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Calendar, Star, Play, Award, Heart, Leaf, TreePine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredVillages = [
    {
      id: "hoa-nhuan",
      name: "Làng Hoa Nhuận",
      craft: "Nghề dệt lụa truyền thống",
      image: "/placeholder.svg?height=300&width=400",
      description: "Nổi tiếng với nghề dệt lụa có từ hơn 300 năm, tạo ra những sản phẩm lụa tơ tằm cao cấp.",
      artisans: 45,
      established: "1720",
    },
    {
      id: "thanh-ha",
      name: "Làng Thanh Hà",
      craft: "Nghề gốm sứ",
      image: "/placeholder.svg?height=300&width=400",
      description: "Làng gốm cổ với kỹ thuật làm gốm độc đáo, sản xuất các sản phẩm gốm mỹ nghệ tinh xảo.",
      artisans: 62,
      established: "1650",
    },
    {
      id: "tra-que",
      name: "Làng Trà Quế",
      craft: "Nghề trồng rau thơm",
      image: "/placeholder.svg?height=300&width=400",
      description: "Chuyên canh tác rau thơm organic theo phương pháp truyền thống, cung cấp cho các nhà hàng cao cấp.",
      artisans: 38,
      established: "1800",
    },
  ]

  const testimonials = [
    {
      name: "Nguyễn Thị Mai",
      role: "Du khách quốc tế",
      content:
        "Tôi đã có trải nghiệm tuyệt vời khi tham quan các làng nghề. Văn hóa truyền thống được bảo tồn rất tốt!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "John Smith",
      role: "Photographer",
      content: "The traditional craft villages are absolutely stunning. Perfect blend of culture and artistry.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Trần Văn Hùng",
      role: "Nghệ nhân gốm sứ",
      content: "Website này giúp chúng tôi kết nối với nhiều khách hàng hơn. Rất hữu ích cho nghề truyền thống.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const upcomingEvents = [
    {
      title: "Lễ Hội Làng Nghề Truyền Thống",
      date: "15/03/2024",
      location: "Làng Hoa Nhuận",
      description: "Trình diễn các kỹ thuật dệt lụa truyền thống",
    },
    {
      title: "Workshop Làm Gốm Sứ",
      date: "22/03/2024",
      location: "Làng Thanh Hà",
      description: "Học cách tạo hình và nung gốm cùng nghệ nhân",
    },
    {
      title: "Tour Khám Phá Làng Trà Quế",
      date: "30/03/2024",
      location: "Làng Trà Quế",
      description: "Tham quan vườn rau và học cách trồng rau hữu cơ",
    },
  ]

  const partners = [
    { name: "UNESCO", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Bộ Văn Hóa", logo: "/placeholder.svg?height=60&width=120" },
    { name: "UBND Đà Nẵng", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Hiệp Hội Thủ Công", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Da Nang Traditional Crafts"
            fill
            className="object-cover opacity-10"
            priority
          />
          {/* Bamboo decoration */}
          <div className="absolute top-10 left-10 opacity-20">
            <TreePine className="w-32 h-32 text-emerald-600 transform rotate-12" />
          </div>
          <div className="absolute bottom-20 right-20 opacity-20">
            <TreePine className="w-24 h-24 text-emerald-500 transform -rotate-12" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <TreePine className="w-16 h-16 text-emerald-600 mr-4" />
            <div className="h-16 w-1 bg-emerald-600 mx-2"></div>
            <Leaf className="w-12 h-12 text-emerald-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6 animate-fade-in">
            Làng Nghề Truyền Thống
            <span className="block text-3xl md:text-5xl text-emerald-700 mt-2">Đà Nẵng</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800 mb-8 leading-relaxed max-w-4xl mx-auto">
            Khám phá vẻ đẹp và giá trị văn hóa của các làng nghề truyền thống
            <br />
            nơi lưu giữ tinh hoa nghề thủ công Việt Nam như những cây tre xanh mướt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg shadow-lg">
              <Link href="/villages" className="flex items-center gap-2">
                Khám Phá Làng Nghề
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg"
            >
              <Link href="/about">Về Chúng Tôi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Villages */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <TreePine className="w-8 h-8 text-emerald-600 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900">Làng Nghề Nổi Bật</h2>
            <TreePine className="w-8 h-8 text-emerald-600 ml-2" />
          </div>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Những làng nghề tiêu biểu với lịch sử lâu đời và kỹ thuật chế tác độc đáo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVillages.map((village, index) => (
            <Card
              key={village.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-emerald-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={village.image || "/placeholder.svg"}
                  alt={village.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <TreePine className="w-6 h-6 text-white opacity-80" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">{village.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{village.craft}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{village.description}</p>

                <div className="flex items-center justify-between text-sm text-emerald-700 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{village.artisans} nghệ nhân</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Từ {village.established}</span>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
                  <Link href={`/villages/${village.id}`} className="flex items-center justify-center gap-2">
                    Tìm Hiểu Thêm
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 relative">
        <div className="absolute inset-0 opacity-5">
          <TreePine className="absolute top-10 left-20 w-32 h-32 text-emerald-600" />
          <TreePine className="absolute bottom-10 right-20 w-28 h-28 text-emerald-500" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Con Số Ấn Tượng</h2>
            <p className="text-emerald-700">Thành tựu trong việc bảo tồn văn hóa truyền thống</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                12+
              </div>
              <p className="text-emerald-700 font-semibold">Làng Nghề</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                300+
              </div>
              <p className="text-emerald-700 font-semibold">Nghệ Nhân</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <p className="text-emerald-700 font-semibold">Năm Lịch Sử</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <p className="text-emerald-700 font-semibold">Nghề Thủ Công</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Video Giới Thiệu</h2>
          <p className="text-xl text-emerald-700">Khám phá làng nghề qua những thước phim sinh động</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Video Preview"
            width={800}
            height={400}
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-emerald-900/30 group-hover:bg-emerald-900/20 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-emerald-600 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Cảm Nhận Từ Du Khách</h2>
            <p className="text-xl text-emerald-700">Những trải nghiệm đáng nhớ tại các làng nghề</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-emerald-900">{testimonial.name}</p>
                      <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Sự Kiện Sắp Tới</h2>
          <p className="text-xl text-emerald-700">Tham gia các hoạt động văn hóa thú vị</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="bg-white border-emerald-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-emerald-700 font-semibold">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{event.title}</h3>
                <p className="text-emerald-600 mb-3">{event.location}</p>
                <p className="text-gray-700">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Di Sản Văn Hóa</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Các làng nghề truyền thống Đà Nẵng không chỉ là nơi sản xuất các sản phẩm thủ công mà còn là kho tàng
                văn hóa vô giá được UNESCO công nhận và bảo tồn.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <TreePine className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Kỹ thuật truyền thống được bảo tồn nguyên vẹn</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Truyền từ thế hệ này sang thế hệ khác</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Sử dụng nguyên liệu tự nhiên, thân thiện môi trường</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Cultural Heritage"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <TreePine className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Đối Tác & Tài Trợ</h2>
          <p className="text-xl text-emerald-700">Những tổ chức uy tín đồng hành cùng chúng tôi</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <TreePine className="w-12 h-12 text-emerald-600 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Đăng Ký Nhận Tin</h2>
            <TreePine className="w-12 h-12 text-emerald-600 ml-4" />
          </div>
          <p className="text-xl text-emerald-700 mb-8 leading-relaxed">
            Nhận thông tin mới nhất về các làng nghề và sự kiện văn hóa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 shadow-lg">Đăng Ký</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Hành Trình Khám Phá Văn Hóa</h2>
          <p className="text-xl text-emerald-700 mb-8 leading-relaxed">
            Cùng chúng tôi bảo tồn và phát huy giá trị của các làng nghề truyền thống Đà Nẵng
            <br />
            như những cây tre xanh mãi với thời gian
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 shadow-lg">
              <Link href="/blog">Đọc Blog</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-3"
            >
              <Link href="/contact">Liên Hệ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
