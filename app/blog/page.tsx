import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "1",
      title: "Nghệ Thuật Dệt Lụa Truyền Thống Tại Làng Hoa Nhuận",
      excerpt:
        "Khám phá quy trình dệt lụa phức tạp và tinh xảo được truyền từ đời này sang đời khác tại làng Hoa Nhuận...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Nguyễn Văn Minh",
      date: "2024-01-15",
      category: "Nghề Thủ Công",
      readTime: "5 phút đọc",
      views: 1250,
    },
    {
      id: "2",
      title: "Bí Mật Của Nghề Gốm Sứ Thanh Hà",
      excerpt: "Tìm hiểu về kỹ thuật làm gốm độc đáo và những câu chuyện thú vị về các nghệ nhân gốm sứ...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Trần Thị Lan",
      date: "2024-01-10",
      category: "Văn Hóa",
      readTime: "7 phút đọc",
      views: 980,
    },
    {
      id: "3",
      title: "Làng Trà Quế - Thiên Đường Rau Thơm Organic",
      excerpt:
        "Hành trình khám phá làng Trà Quế với những vườn rau thơm xanh mướt và phương pháp canh tác truyền thống...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Phạm Thị Hương",
      date: "2024-01-05",
      category: "Nông Nghiệp",
      readTime: "6 phút đọc",
      views: 1100,
    },
    {
      id: "4",
      title: "Nghệ Thuật Chạm Khắc Gỗ Làng Kim Bồng",
      excerpt: "Những tác phẩm nghệ thuật từ gỗ được tạo ra bởi bàn tay khéo léo của các nghệ nhân làng Kim Bồng...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Lê Hoàng Nam",
      date: "2023-12-28",
      category: "Nghề Thủ Công",
      readTime: "8 phút đọc",
      views: 850,
    },
    {
      id: "5",
      title: "Tranh Dân Gian Đông Hồ - Nét Đẹp Văn Hóa Dân Tộc",
      excerpt: "Khám phá nghệ thuật làm tranh dân gian với những màu sắc rực rỡ và ý nghĩa văn hóa sâu sắc...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Nguyễn Văn Minh",
      date: "2023-12-20",
      category: "Nghệ Thuật",
      readTime: "6 phút đọc",
      views: 720,
    },
    {
      id: "6",
      title: "Bánh Tráng Phước Tích - Hương Vị Truyền Thống",
      excerpt: "Công thức làm bánh tráng gia truyền và những câu chuyện về nghề làm bánh tráng tại làng Phước Tích...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Trần Thị Lan",
      date: "2023-12-15",
      category: "Ẩm Thực",
      readTime: "4 phút đọc",
      views: 650,
    },
  ]

  const categories = ["Tất Cả", "Nghề Thủ Công", "Văn Hóa", "Nông Nghiệp", "Nghệ Thuật", "Ẩm Thực"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">Blog Làng Nghề</h1>
          <p className="text-xl text-blue-700 leading-relaxed">
            Những câu chuyện, kiến thức và cập nhật mới nhất về các làng nghề truyền thống Đà Nẵng
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Tất Cả" ? "default" : "outline"}
              className={
                category === "Tất Cả"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-blue-300 text-blue-700 hover:bg-blue-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Bài Viết Nổi Bật</h2>
        </div>

        <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white border-blue-200">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">{blogPosts[0].category}</Badge>
              </div>
            </div>

            <CardContent className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight">{blogPosts[0].title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">{blogPosts[0].excerpt}</p>

              <div className="flex items-center gap-6 text-sm text-blue-700 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString("vi-VN")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{blogPosts[0].views} lượt xem</span>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                <Link href={`/blog/${blogPosts[0].id}`} className="flex items-center gap-2">
                  Đọc Tiếp
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Tất Cả Bài Viết</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-blue-200"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white text-xs">{post.category}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3 leading-tight line-clamp-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-blue-700 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>

                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                      Đọc
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Đăng Ký Nhận Tin</h2>
          <p className="text-xl text-blue-700 mb-8 leading-relaxed">
            Nhận những bài viết mới nhất về làng nghề truyền thống qua email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Đăng Ký</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
