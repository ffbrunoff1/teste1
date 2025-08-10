import React from 'react'
import { motion } from 'framer-motion'
import { Home, Building2, Wrench, Paintbrush, Zap, TreePine, ArrowRight, Star } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Construção Residencial',
      description: 'Casas personalizadas com arquitetura moderna e funcional, desde o projeto até a entrega das chaves.',
      features: ['Projetos arquitetônicos', 'Acompanhamento técnico', 'Materiais de qualidade', 'Prazo garantido'],
      highlight: 'Mais Popular'
    },
    {
      icon: Building2,
      title: 'Construção Comercial',
      description: 'Edifícios comerciais e empresariais que combinam funcionalidade, sustentabilidade e design moderno.',
      features: ['Plantas comerciais', 'Estruturas modernas', 'Sistemas inteligentes', 'Certificações ambientais'],
      highlight: false
    },
    {
      icon: Wrench,
      title: 'Reformas e Renovações',
      description: 'Transformamos espaços existentes em ambientes modernos e funcionais, preservando a estrutura original.',
      features: ['Reforma completa', 'Modernização', 'Ampliação', 'Restauração'],
      highlight: false
    },
    {
      icon: Paintbrush,
      title: 'Acabamentos Premium',
      description: 'Serviços especializados em acabamentos de alta qualidade para valorizar seu investimento.',
      features: ['Pintura especializada', 'Revestimentos nobres', 'Paisagismo', 'Decoração'],
      highlight: false
    },
    {
      icon: Zap,
      title: 'Instalações Elétricas',
      description: 'Sistemas elétricos modernos e seguros, incluindo automação residencial e energia solar.',
      features: ['Projeto elétrico', 'Automação', 'Energia solar', 'Manutenção'],
      highlight: false
    },
    {
      icon: TreePine,
      title: 'Construção Sustentável',
      description: 'Projetos eco-friendly que respeitam o meio ambiente e promovem eficiência energética.',
      features: ['Materiais sustentáveis', 'Eficiência energética', 'Captação de água', 'Certificação verde'],
      highlight: 'Eco-Friendly'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
              Nossos Serviços
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-primary-900 mb-6"
          >
            Soluções Completas em{' '}
            <span className="text-gradient">Construção Civil</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Oferecemos uma ampla gama de serviços especializados para atender 
            todas as suas necessidades de construção e reforma.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    service.highlight === 'Mais Popular' 
                      ? 'bg-accent-100 text-accent-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    <Star className="w-3 h-3" />
                    {service.highlight}
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="group/btn w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center bg-gradient-brand rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar Seu Projeto?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e receba um orçamento personalizado 
            para o seu projeto dos sonhos.
          </p>
          <motion.button
            onClick={scrollToContact}
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conecte-se aos Nossos Especialistas
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}