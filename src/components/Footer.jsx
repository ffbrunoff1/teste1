import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre Nós', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Contato', id: 'contact' }
  ]

  const services = [
    'Construção Residencial',
    'Construção Comercial',
    'Reformas e Renovações',
    'Acabamentos Premium',
    'Instalações Elétricas',
    'Construção Sustentável'
  ]

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
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900"></div>
      
      <div className="relative z-10">
        <div className="container-custom section-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754848512558_0.png"
                  alt="Teste Construção Civil"
                  className="h-10 w-auto"
                />
              </div>
              
              <p className="text-primary-200 mb-6 leading-relaxed max-w-md">
                Há mais de 15 anos construindo sonhos e transformando vidas através 
                de projetos de construção civil de excelência, sempre com foco na 
                qualidade e satisfação dos nossos clientes.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-400" />
                  <span className="text-primary-200">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-400" />
                  <span className="text-primary-200">contato@teste.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-400" />
                  <span className="text-primary-200">São Paulo, SP</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-200 hover:text-accent-400 transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-primary-200 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="border-t border-primary-700 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-primary-300 text-sm">
                © 2024 Teste Construção Civil. Todos os direitos reservados.
              </div>
              
              <div className="text-primary-300 text-sm">
                Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors font-medium"
                >
                  Papum
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent-500 hover:bg-accent-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}