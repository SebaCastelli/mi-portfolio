import { motion } from "framer-motion";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Dashboard de Gastos",
      description:
        "Aplicación para analizar gastos personales usando Python, pandas y gráficos.",
      tech: ["Python", "Pandas", "Streamlit"],
      github: "https://github.com/SebaCastelli/dashboard-gastos",
      demo: "https://dashboard-gastos-sebastiancastelli.streamlit.app",
      image: "/dashboard.png",
    },
    {
      title: "Bot de Automatización",
      description:
        "Bot que automatiza tareas repetitivas y envía alertas por Telegram.",
      tech: ["Python", "Telegram API", "Automation"],
      image: "/bot-automatizacion.png",
    },
    {
      title: "Scraper de Precios",
      description:
        "Herramienta para monitorear precios y generar reportes automáticos.",
      tech: ["BeautifulSoup", "FastAPI", "PostgreSQL"],
      image: "/scraper.png",
    },
  ];

  const skills = [
    "Python",
    "JavaScript",
    "React",
    "FastAPI",
    "Pandas",
    "SQL",
    "Git",
    "Docker",
    "APIs",
    "Automatización",
  ];

  return (
    <div
      className="
        min-h-screen
        text-stone-100
        font-sans
        bg-cover
        bg-center
        bg-fixed
      "
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
    <div className="min-h-screen bg-black/40">
        
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-zinc-400 mb-3 tracking-widest uppercase text-sm">
            Portfolio Personal
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hola, soy <span className="text-amber-400">Sebastián Castelli</span>
          </h1>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
            Estoy aprendiendo programación, automatización y análisis de datos.
            Me interesa crear herramientas útiles, dashboards y aplicaciones web.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/SebaCastelli"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-amber-400 text-black font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sebastian-castelli/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-zinc-700 hover:scale-105 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            className="
              w-80 h-80
              rounded-3xl
              overflow-hidden
              border-2 border-amber-300/40
              shadow-[0_0_40px_rgba(251,191,36,0.35)]
              cursor-pointer
              transition-all
            "
          >
            <img
              src="/foto.jpg"
              alt="foto"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>

          <p className="text-zinc-300 leading-relaxed text-lg">
            Actualmente estoy desarrollando proyectos personales para aprender
            automatización, desarrollo web y análisis de datos. Mi objetivo es
            construir herramientas reales mientras mejoro mis habilidades en
            programación.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Tecnologías</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-2xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 hover:border-amber-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Proyectos</h2>

          <p className="text-zinc-400">Más próximamente...</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-amber-400 hover:-translate-y-1 transition-all"
            >
              <div className="h-40 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-5 flex items-center justify-center text-5xl">
                <img src={project.image} alt="🎬" />
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-zinc-900/70 backdrop-blur-xl text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex py-3 gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-amber-300 text-black font-medium"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 rounded-xl border border-zinc-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-amber-700/10 to-orange-500/10 border border-amber-500/20 p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Trabajamos juntos?</h2>

          <p className="text-zinc-300 max-w-2xl mx-auto mb-8 text-lg">
            Estoy abierto a colaborar en proyectos, aprender nuevas tecnologías
            y desarrollar herramientas útiles.
          </p>

          <a
            href="mailto:cristhiancastelli2012@gmail.com"
            className="inline-block px-8 py-4 rounded-2xl bg-amber-400 text-black font-bold hover:scale-105 transition"
          >
            Contactarme
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 px-6 text-center text-zinc-400">
        © 2026 — Sebastián Castelli
      </footer>
    </div>
    </div>
  );
}
