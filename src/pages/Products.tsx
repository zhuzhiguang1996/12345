import React from 'react'
import { ShoppingBag, Cpu, BookOpen, Users, Target } from 'lucide-react'

export const Products: React.FC = () => {
  const products = [
    {
      icon: ShoppingBag,
      title: "智能硬件",
      description: "包括学习机、智能笔、词典笔、掌上打印机等智能教育设备。",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: Cpu,
      title: "AI学习系统",
      description: "基于人工智能的个性化学习系统，为学生提供定制化的学习方案。",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: BookOpen,
      title: "智能教辅",
      description: "结合AI技术的智能教辅系列产品，提升学习效率。",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      icon: Users,
      title: "智习室服务",
      description: "线上及线下的智能化学习空间，提供全方位的学习支持。",
      image: "https://images2.imgbox.com/8b/9e/5KVkYOtw_o.jpg"
    },
    {
      icon: Target,
      title: "家庭教育服务",
      description: "为家长提供科学的家庭教育指导，举办亲子营等活动。",
      image: "https://images2.imgbox.com/0f/9d/mQTjvZHw_o.jpg"
    }
  ]

  return (
    <section id="products" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">产品与服务</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <product.icon className="w-10 h-10 mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}