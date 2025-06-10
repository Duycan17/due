"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa Chỉ",
      content: "Đà Nẵng, Việt Nam",
      description: "Thành phố của những làng nghề truyền thống",
    },
    {
      icon: Phone,
      title: "Điện Thoại",
      content: "+84 236 xxx xxxx",
      description: "Liên hệ trực tiếp với chúng tôi",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@langnhedanang.vn",
      description: "Gửi email cho chúng tôi bất cứ lúc nào",
    },
    {
      icon: Clock,
      title: "Giờ Làm Việc",
      content: "8:00 - 17:00",
      description: "Thứ 2 - Thứ 6 (Giờ Việt Nam)",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-xl text-blue-700 leading-relaxed">
            Hãy chia sẻ ý kiến, đóng góp hoặc hợp tác cùng chúng tôi trong việc bảo tồn văn hóa truyền thống
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center p-6 bg-white border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{info.title}</h3>
                <p className="text-blue-700 font-semibold mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chúng tôi rất mong nhận được phản hồi từ bạn. Hãy chia sẻ ý kiến, đề xuất hợp tác, hoặc bất kỳ câu hỏi nào
              về các làng nghề truyền thống.
            </p>

            <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Tại Sao Nên Liên Hệ?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hợp tác trong các dự án bảo tồn văn hóa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Chia sẻ thông tin về làng nghề truyền thống</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-blue-900 font-bold mb-2">
                  Tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-blue-900 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-blue-900 font-bold mb-2">
                  Chủ Đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-blue-900 font-bold mb-2">
                  Tin Nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
