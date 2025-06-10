import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, ArrowRight, TreePine, Leaf, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VillagesPage() {
  const villages = [
    {
      id: "hoa-nhuan",
      name: "Làng Hoa Nhuận",
      craft: "Nghề dệt lụa truyền thống",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Nổi tiếng với nghề dệt lụa có từ hơn 300 năm, tạo ra những sản phẩm lụa tơ tằm cao cấp với kỹ thuật truyền thống được truyền từ đời này sang đời khác.",
      location: "Hòa Vang, Đà Nẵng",
      artisans: 45,
      established: "1720",
      specialties: ["Lụa tơ tằm", "Thổ cẩm", "Khăn lụa"],
      rating: 4.8,
    },
    {
      id: "thanh-ha",
      name: "Làng Thanh Hà",
      craft: "Nghề gốm sứ",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Làng gốm cổ với kỹ thuật làm gốm độc đáo, sản xuất các sản phẩm gốm mỹ nghệ tinh xảo phục vụ nhu cầu trong nước và xuất khẩu.",
      location: "Hòa Phước, Hòa Vang",
      artisans: 62,
      established: "1650",
      specialties: ["Gốm trang trí", "Chậu cây cảnh", "Đồ thờ cúng"],
      rating: 4.9,
    },
    {
      id: "tra-que",
      name: "Làng Trà Quế",
      craft: "Nghề trồng rau thơm",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Chuyên canh tác rau thơm organic theo phương pháp truyền thống, cung cấp cho các nhà hàng cao cấp và xuất khẩu ra nước ngoài.",
      location: "Cẩm Hà, Hội An",
      artisans: 38,
      established: "1800",
      specialties: ["Rau thơm", "Gia vị", "Sản phẩm organic"],
      rating: 4.7,
    },
    {
      id: "kim-bong",
      name: "Làng Kim Bồng",
      craft: "Nghề mộc",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Làng nghề mộc truyền thống với kỹ thuật chạm khắc gỗ tinh xảo, tạo ra những sản phẩm nội thất và mỹ nghệ cao cấp.",
      location: "Cẩm Kim, Hội An",
      artisans: 55,
      established: "1700",
      specialties: ["Đồ nội thất", "Tượng gỗ", "Đồ thờ"],
      rating: 4.6,
    },
    {
      id: "dong-ho",
      name: "Làng Đông Hồ",
      craft: "Nghề làm tranh dân gian",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Nổi tiếng với nghề làm tranh dân gian truyền thống, sử dụng màu tự nhiên và kỹ thuật in khắc gỗ độc đáo.",
      location: "Hòa Nhơn, Hòa Vang",
      artisans: 28,
      established: "1750",
      specialties: ["Tranh Tết", "Tranh dân gian", "Khắc gỗ"],
      rating: 4.5,
    },
    {
      id: "phuoc-tich",
      name: "Làng Phước Tích",
      craft: "Nghề làm bánh tráng",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Làng nghề làm bánh tráng truyền thống với công thức gia truyền, tạo ra những chiếc bánh tráng mỏng, dai và thơm ngon.",
      location: "Phong Điền, Thừa Thiên Huế",
      artisans: 42,
      established: "1680",
      specialties: ["Bánh tráng", "Bánh phồng", "Đặc sản miền Trung"],
      rating: 4.4,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <TreePine className="absolute top-10 left-20 w-32 h-32 text-emerald-600" />
          <TreePine className="absolute bottom-10 right-20 w-28 h-28 text-emerald-500" />
          <Leaf className="absolute top-1/2 left-1/2 w-20 h-20 text-emerald-400" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-6">
            <TreePine className="w-12 h-12 text-emerald-600 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-900">Các Làng Nghề Truyền Thống</h1>
            <TreePine className="w-12 h-12 text-emerald-600 ml-4" />
          </div>
          <p className="text-xl text-emerald-700 leading-relaxed">
            Khám phá những làng nghề với lịch sử lâu đời và kỹ thuật chế tác độc đáo,
            <br />
            nơi lưu giữ tinh hoa văn hóa dân tộc như những cây tre xanh mướt
          </p>
        </div>
      </section>

      {/* Villages Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villages.map((village, index) => (
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
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600 text-white">Từ {village.established}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <TreePine className="w-6 h-6 text-white opacity-80" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-semibold text-emerald-900">{village.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">{village.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{village.craft}</p>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{village.location}</span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{village.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {village.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-emerald-700 border-emerald-300">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-emerald-700 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{village.artisans} nghệ nhân</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date().getFullYear() - Number.parseInt(village.established)} năm</span>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
                  <Link href={`/villages/${village.id}`} className="flex items-center justify-center gap-2">
                    Khám Phá Chi Tiết
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <TreePine className="absolute top-10 left-10 w-40 h-40 text-emerald-600" />
          <TreePine className="absolute bottom-10 right-10 w-32 h-32 text-emerald-500" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-8 h-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Tham Gia Bảo Tồn Văn Hóa</h2>
            <Leaf className="w-8 h-8 text-emerald-600 ml-3" />
          </div>
          <p className="text-xl text-emerald-700 mb-8 leading-relaxed">
            Hãy cùng chúng tôi gìn giữ và phát huy những giá trị văn hóa quý báu này
            <br />
            như những cây tre xanh mãi với thời gian
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 shadow-lg">
              <Link href="/contact">Liên Hệ Hợp Tác</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-3"
            >
              <Link href="/blog">Đọc Thêm Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
