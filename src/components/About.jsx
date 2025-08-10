import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Target, CheckCircle, Star } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Utilizamos os melhores materiais e técnicas mais avançadas do mercado para garantir a durabilidade e excelência de cada projeto.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes, sempre atualizados com as últimas tendências e tecnologias da construção civil.'
    },
    {
      icon: Clock,
      title: 'Prazo Garantido',
      description: 'Comprometimento com cronogramas estabelecidos, entregando seus projetos sempre dentro do prazo acordado.'
    },
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Cada projeto é único e personalizado, atendendo às necessidades específicas e superando as expectativas de nossos clientes.'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Projetos Concluídos' },
    { number: '15+', label: 'Anos de Experiência' },
    { number: '100%', label: 'Clientes Satisfeitos' },
    { number: '50+', label: 'Prêmios Recebidos' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Sobre Nós
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-primary-900 mb-6"
          >
            Construindo{' '}
            <span className="text-gradient">Sonhos</span>{' '}
            há mais de 15 anos
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Somos uma empresa especializada em construção civil, comprometida em 
            transformar ideias em realidade através de projetos inovadores, 
            sustentáveis e de alta qualidade.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-gradient-brand rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa Missão é Sua Satisfação
              </h3>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                Acreditamos que cada projeto é uma oportunidade de criar algo extraordinário. 
                Nossa paixão pela construção civil nos motiva a buscar sempre a excelência, 
                utilizando tecnologias avançadas e materiais de primeira qualidade.
              </p>
              
              <div className="space-y-4">
                {[
                  'Planejamento detalhado e personalizado',
                  'Execução com técnicas modernas',
                  'Acompanhamento em todas as etapas',
                  'Garantia de qualidade e durabilidade'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0" />
                    <span className="text-primary-100">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-primary-100 text-sm">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}