import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Hammer, Shield, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="absolute inset-0">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 text-primary-300 opacity-30"
        >
          <Building2 size={60} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-40 right-20 text-primary-300 opacity-30"
          style={{ animationDelay: '1s' }}
        >
          <Hammer size={45} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-40 left-20 text-primary-300 opacity-30"
          style={{ animationDelay: '2s' }}
        >
          <Shield size={50} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 right-10 text-primary-300 opacity-30"
          style={{ animationDelay: '0.5s' }}
        >
          <Sparkles size={40} />
        </motion.div>
      </div>

      <div className="relative z-10 container-custom section-padding">
        <div className="flex items-center min-h-screen">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-accent-500 text-white rounded-full text-sm font-semibold mb-4">
                ✨ Construção Civil de Excelência
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Construindo o{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Futuro
              </span>
              <br />
              com Solidez e{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Confiança
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Transformamos sonhos em realidade através de projetos de construção civil 
              inovadores, sustentáveis e de alta qualidade. Sua obra nas mãos de especialistas.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.button
                onClick={scrollToContact}
                className="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Entre em Contato
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">500+</div>
                <div className="text-primary-200">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">15+</div>
                <div className="text-primary-200">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">100%</div>
                <div className="text-primary-200">Satisfação dos Clientes</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}