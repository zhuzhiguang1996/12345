import React from 'react'
import { Calendar, Zap, TrendingUp, Award, Star, Target, Users, Rocket, Cpu, BookOpen } from 'lucide-react'

export const History: React.FC = () => {
  const timelineEvents = [
    { year: 2013, title: "赶考网成立", description: "开启互联网+教育的新模式探索。", icon: Calendar },
    { year: 2014, title: "开启与电视台合作之路", description: "扩大品牌影响力。", icon: Zap },
    { year: 2015, title: "上海亿山睦成立", description: "强化平台的综合实力。", icon: TrendingUp },
    { year: 2016, title: "开启非凡之路", description: "完成全球顶级教育资源众筹项目。", icon: Rocket },
    { year: 2017, title: "亿山睦获得高新技术企业资格", description: "技术实力得到认可。", icon: Award },
    { year: 2018, title: "品牌升级", description: "\"赶考网\"变更为\"赶考状元\"，注册用户突破500万。", icon: Star },
    { year: 2019, title: "赶考状元AI智慧课堂上线", description: "推出智慧课堂APP，融合智能硬件与AI教育。", icon: Cpu },
    { year: 2020, title: "注册用户突破1000万", description: "全面推广智慧学习模式。", icon: Users },
    { year: 2021, title: "赶考小状元助力九千家学校疫情复学", description: "发挥AI+K12学习系统优势。", icon: BookOpen },
    { year: 2022, title: "启动\"赶考小状元AI智习室千城万店\"计划", description: "及发布\"3451工程\"和全国\"AI8C\"行动计划。", icon: Target },
    { year: 2023, title: "品牌升级", description: "推出大发展主题、十大服务计划、六大公益平台。", icon: Rocket },
    { year: 2024, title: "集团化运作战略启动", description: "启动八大发展主题、十大服务计划、六大公益平台。", icon: Target }
  ]

  return (
    <section id="history" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">公司发展历程</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                <div className="w-full md:w-5/12 mb-4 md:mb-0">
                  <div className="p-4 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <event.icon className="w-10 h-10 mb-3 text-blue-600 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{event.year}: {event.title}</h3>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="flex md:flex-grow justify-center items-center relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full border-4 border-white shadow flex items-center justify-center">
                    <span className="text-sm md:text-base text-white font-bold">{event.year}</span>
                  </div>
                </div>
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}