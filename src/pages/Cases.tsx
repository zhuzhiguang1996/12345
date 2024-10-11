import React, { useState } from 'react'

export const Cases: React.FC = () => {
  const [activeTab, setActiveTab] = useState('model')

  const singleStoreModel = {
    title: "单店模型案例",
    description: "这是一个成功的单店模型案例，展示了我们的AI智习室如何在单一位置取得成功。",
    details: [
      "位置：上海市徐汇区",
      "开业时间：2022年3月",
      "月营收：约50万元",
      "学生数量：200+",
      "客户满意度：98%"
    ]
  }

  const successStories = [
    {
      title: "张小明的学习进步",
      description: "张小明通过我们的AI智习室，在3个月内数学成绩提升了30分。",
    },
    {
      title: "李华的英语突破",
      description: "李华在我们的AI智习室学习6个月后，英语口语流利度显著提高。",
    },
    {
      title: "王芳的全面进步",
      description: "王芳在我们的AI智习室学习一年后，各科成绩都有显著提升，尤其是理科方面。",
    }
  ]

  const tabContent = {
    model: (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">{singleStoreModel.title}</h3>
        <p className="mb-4">{singleStoreModel.description}</p>
        <ul className="list-disc list-inside">
          {singleStoreModel.details.map((detail, index) => (
            <li key={index} className="mb-2">{detail}</li>
          ))}
        </ul>
      </div>
    ),
    success: (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {successStories.map((story, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="cases" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">案例分享</h2>
        
        <div className="mb-8 flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeTab === 'model' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('model')}
          >
            单店模型
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeTab === 'success' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('success')}
          >
            成功案例
          </button>
        </div>

        <div className="mt-8 animate-fadeIn">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>
      </div>
    </section>
  )
}