import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Target, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nguyễn Văn Minh",
      role: "Founder & Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Chuyên gia về văn hóa dân gian với hơn 15 năm kinh nghiệm nghiên cứu và bảo tồn các làng nghề truyền thống.",
      expertise: ["Văn hóa dân gian", "Nghiên cứu lịch sử", "Bảo tồn di sản"],
    },
    {
      name: "Trần Thị Lan",
      role: "UX/UI Designer",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Nhà thiết kế với đam mê tạo ra những trải nghiệm người dùng tuyệt vời, kết hợp giữa hiện đại và truyền thống.",
      expertise: ["UI/UX Design", "Web Design", "Branding"],
    },
    {
      name: "Lê Hoàng Nam",
      role: "Full-stack Developer",
      image: "/placeholder.svg?height=300&width=300",
      description: "Lập trình viên tài năng với kinh nghiệm phát triển các ứng dụng web hiện đại và tối ưu hiệu suất.",
      expertise: ["React/Next.js", "Node.js", "Database Design"],
    },
    {
      name: "Phạm Thị Hương",
      role: "Content Strategist",
      image: "/placeholder.svg?height=300&width=300",
      description: "Chuyên gia nội dung với khả năng kể chuyện hấp dẫn về văn hóa và truyền thống Việt Nam.",
      expertise: ["Content Writing", "Storytelling", "Cultural Research"],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Đam Mê Văn Hóa",
      description: "Chúng tôi yêu thích và tôn trọng sâu sắc những giá trị văn hóa truyền thống của dân tộc.",
    },
    {
      icon: Target,
      title: "Sứ Mệnh Bảo Tồn",
      description: "Cam kết bảo tồn và truyền bá những nghề thủ công truyền thống cho thế hệ tương lai.",
    },
    {
      icon: Users,
      title: "Cộng Đồng",
      description: "Xây dựng cầu nối giữa nghệ nhân truyền thống và công chúng hiện đại.",
    },
    {
      icon: Award,
      title: "Chất Lượng",
      description: "Đảm bảo chất lượng cao trong mọi sản phẩm và dịch vụ chúng tôi cung cấp.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">Về Chúng Tôi</h1>
          <p className="text-xl text-blue-700 leading-relaxed">
            Đội ngũ đam mê văn hóa, tận tâm bảo tồn và phát huy giá trị của các làng nghề truyền thống Đà Nẵng
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Sứ Mệnh Của Chúng Tôi</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Chúng tôi tin rằng những làng nghề truyền thống không chỉ là nơi sản xuất các sản phẩm thủ công, mà còn là
              kho tàng văn hóa vô giá cần được bảo tồn và truyền bá.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Website này được tạo ra với mục đích kết nối thế hệ trẻ với những giá trị truyền thống, đồng thời giúp các
              nghệ nhân tiếp cận với thị trường rộng lớn hơn.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chúng tôi hy vọng rằng thông qua công nghệ hiện đại, những nghề thủ công truyền thống sẽ được nhiều người
              biết đến và yêu thích hơn.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Traditional Craft"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Giá Trị Cốt Lõi</h2>
            <p className="text-xl text-blue-700">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white border-blue-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Đội Ngũ Của Chúng Tôi</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Những con người tài năng và đam mê, cùng nhau tạo nên website này
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-blue-200"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{member.description}</p>

                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-blue-700 border-blue-300 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Mục Tiêu Của Chúng Tôi</h2>
          <p className="text-xl text-blue-700 mb-8 leading-relaxed">
            Website này được thiết kế với mục tiêu tham gia các cuộc thi thiết kế web, đồng thời tạo ra một nền tảng ý
            nghĩa để bảo tồn văn hóa truyền thống.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">2024</div>
              <p className="text-blue-700">Năm thành lập dự án</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">12+</div>
              <p className="text-blue-700">Làng nghề được giới thiệu</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <p className="text-blue-700">Tình yêu văn hóa Việt Nam</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
