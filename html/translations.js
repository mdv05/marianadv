const translations = {
    en: {
        // Navigation
        nav: {
            about: "About",
            education: "Education",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            leadership: "Leadership",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            subtitle: "Actuarial Science & Data Analytics",
            description: "Passionate actuarial science student at UConn combining analytical expertise with innovative technology. Currently an Actuarial Intern at MassMutual preparing for Exam 2/FM (August 2026) while transforming risk assessment and retirement planning.",
            stats: {
                gpa: "GPA",
                experience: "Years Experience",
                graduation: "Graduation"
            },
            cta: {
                contact: "Get In Touch",
                projects: "View Projects"
            }
        },
        // About Section
        about: {
            label: "About Me",
            title: "Bridging Mathematics & Innovation",
            subtitle: "Combining actuarial expertise with cutting-edge technology to create impactful solutions",
            text1: "I'm a dedicated Mathematics and Actuarial Science student at the University of Connecticut, passionate about leveraging data analytics and emerging technologies to transform the insurance and retirement planning industry.",
            highlight: "Currently interning at MassMutual in Product Pricing while preparing for Exam 2/FM (August 2026) — building solutions that bridge traditional actuarial science with cutting-edge AI and web technologies.",
            text2: "My journey combines rigorous academic training — including a semester abroad at the National University of Singapore — with hands-on actuarial experience at MassMutual and Segal, where I developed AI-powered retirement solutions. I balance technical expertise with creative pursuits through professional modeling, demonstrating versatility and exceptional time management across diverse fields.",
            cards: {
                data: {
                    title: "Data Analytics",
                    desc: "Advanced modeling and analysis using Python, R, and Excel"
                },
                ai: {
                    title: "AI Innovation",
                    desc: "Expertise in Claude, ChatGPT, and generative AI development"
                },
                actuarial: {
                    title: "Actuarial Science",
                    desc: "Preparing for Exam 2/FM, with product pricing, valuation, and risk assessment experience"
                },
                leadership: {
                    title: "Leadership",
                    desc: "Officer and committee roles across OLA, UConn Actuarial Society, and VSA"
                }
            }
        },
        // Education Section
        education: {
            label: "Education",
            title: "Academic Journey",
            degree: {
                date: "Class of 2027",
                title: "Bachelor of Arts",
                subtitle: "Mathematics/Actuarial Science",
                description: "University of Connecticut, Storrs",
                gpa: "GPA: 3.53/4.0",
                badges: {
                    exam: "Exam 2/FM (Aug 2026)",
                    veeEcon: "VEE Economics",
                    veeAcct: "VEE Accounting",
                    honors: "Honors Program"
                }
            },
            singapore: {
                date: "January - May 2026",
                title: "Study Abroad",
                subtitle: "National University of Singapore",
                description: "Semester-long exchange at Asia's top-ranked university, continuing mathematics and actuarial coursework while gaining a global perspective on finance and risk.",
                badges: {
                    exchange: "Semester Exchange",
                    global: "Global Perspective",
                    math: "Mathematics Coursework"
                }
            },
            abroad: {
                date: "July 2024",
                title: "Field School",
                subtitle: "University of Connecticut, Greece",
                description: "Intensive archaeological and cultural field study program collecting and analyzing data on local populations, policies, and historical structures through hands-on research and excavation.",
                badges: {
                    field: "Field Research",
                    cultural: "Cultural Studies",
                    intl: "International Experience"
                }
            }
        },
        // Experience Section
        experience: {
            label: "Experience",
            title: "Professional Journey",
            massmutual: {
                role: "Actuarial Intern | Product Pricing & Assumption Oversight",
                date: "May 2026 - Present | Boston, MA",
                desc: "Enhancing the core Excel/VBA tool behind MassMutual's Value of New Business (VNB) planning process — automating data intake, 2027 Plan calculations, and visuals into a repeatable workflow built to scale for a future Power BI migration. Collaborating with pricing teams to map the end-to-end VNB process and independently rebuilding the quarterly VNB reporting deck to eliminate manual re-entry.",
                skills: ["Excel", "VBA", "Product Pricing", "Automation", "Data Visualization"]
            },
            segal: {
                role: "Actuarial Intern",
                date: "May 2025 - August 2025 | Farmington, CT",
                desc: "Led development of the winning group intern project — an actuarially driven retirement dashboard (RetireHub) paired with a generative-AI chatbot (RetireChat) — while supporting complex valuation projects, gain/loss analysis, benefit calculations, and government filings alongside experienced actuaries.",
                skills: ["Python", "React", "Google Cloud", "AI Development", "Data Analysis"]
            },
            model: {
                role: "Professional Model",
                date: "September 2021 - Present | Rocky Hill, CT",
                desc: "Successfully balance professional modeling career with academic excellence. Collaborate with photographers and agencies while maintaining leadership roles and a strong GPA. Demonstrate exceptional time management, professionalism, and adaptability across diverse projects.",
                skills: ["Project Management", "Communication", "Time Management", "Professionalism"]
            },
            pizza: {
                role: "Customer Service",
                date: "August 2022 - August 2023 | Part-time",
                desc: "Provided exceptional customer service in a fast-paced environment, managing dining areas for 90+ guests daily. Developed strong multitasking abilities and interpersonal skills while maintaining high service standards.",
                skills: ["Customer Service", "Multitasking", "Team Collaboration"]
            }
        },
        // Skills Section
        skills: {
            label: "Skills",
            title: "Technical Expertise",
            categories: {
                programming: "Programming & Development",
                ai: "AI & Cloud Technologies",
                actuarial: "Actuarial & Analytics",
                professional: "Professional Skills"
            }
        },
        // Projects Section
        projects: {
            label: "Projects",
            title: "Featured Work",
            chatbot: {
                title: "RetireChat - AI Retirement Chatbot",
                desc: "Developed an innovative conversational AI solution for early-career retirement engagement as part of Segal's winning intern project. Built a functional web platform that provides personalized retirement planning guidance through natural language processing.",
                link: "View Live Demo →",
                tech: ["Python", "React", "Google Cloud", "Gen AI"]
            },
            goldenson: {
                title: "Goldenson Case Study Competition",
                desc: "Conducted market research on lower-income segments and developed a flexible insurance policy model with adjustable contributions and AI-driven underwriting foundations for customized coverage plans — presented to industry professionals.",
                link: "View Details →",
                tech: ["Market Research", "Insurance Modeling", "AI Underwriting", "Presentation"]
            },
            platform: {
                title: "RetireHub - Retirement Planning Platform",
                desc: "Built the centerpiece of Segal's winning group intern project — a proof-of-concept platform blending actuarial expertise with emerging technologies through an interactive dashboard for retirement planning calculations and visualizations.",
                link: "View Live Platform →",
                tech: ["React", "Firebase", "JavaScript", "Actuarial Models"]
            },
            futurescope: {
                title: "FutureScope - Financial Projection Calculator",
                desc: "Engineered a retirement projection calculator built on Monte Carlo simulation, compound interest modeling, and inflation-adjusted present value analysis to deliver probabilistic long-term financial forecasts.",
                link: "View Live Calculator →",
                tech: ["Python", "Flask", "Google Cloud Run", "Monte Carlo Simulation"]
            }
        },
        // Leadership Section
        leadership: {
            label: "Leadership",
            title: "Leadership & Involvement",
            ola: {
                role: "Outreach Committee & Rising Leaders Program",
                date: "September 2024 - Present | Remote",
                desc: "Ambassador for actuarial career awareness — panelist at OLA's first national high school case competition and led outreach to 8,500 school counselors nationwide promoting Desafiando el Riesgo and OLA scholarship opportunities.",
                skills: ["Outreach", "Public Speaking", "Mentorship"]
            },
            uas: {
                role: "Incoming VP of Member Development · Director of Fundraising",
                date: "September 2024 - Present | Storrs, CT",
                desc: "Spearheaded fundraising strategies across campus initiatives, analyzing member engagement and contribution patterns in Excel to maximize proceeds. Previously Director of DEI, organizing UAS's first DEI event with six affinity organizations.",
                skills: ["Fundraising", "Excel Analytics", "DEI", "Strategy"]
            },
            vsa: {
                role: "Co-Chief Financial Officer",
                date: "September 2024 - Present | Storrs, CT",
                desc: "Conducted pricing analysis for 240+ units of nationally sold merchandise and fundraising initiatives, evaluating cost structures to maximize revenue while maintaining affordability. Previously Co-Events Coordinator, running bi-weekly events for 60-70 participants.",
                skills: ["Pricing Analysis", "Budgeting", "Event Planning"]
            },
            associations: {
                label: "Also active in:",
                items: ["ALPFA Member · Since 2024", "UConn Honors Program · Since 2023"]
            }
        },
        // Achievements Section
        achievements: {
            title: "Achievements & Impact",
            items: {
                gpa: "GPA while balancing multiple roles",
                internship: "Actuarial internships — MassMutual & Segal",
                experience: "Years of professional experience",
                languages: "Languages spoken fluently"
            }
        },
        // Contact Section
        contact: {
            title: "Let's Connect!",
            description: "I'm always excited to discuss actuarial science, data analytics, and innovative technology solutions.",
            labels: {
                email: "Email",
                phone: "Phone",
                linkedin: "LinkedIn",
                location: "Location"
            },
            connect: "Connect"
        },
        // Footer
        footer: "All rights reserved"
    },
    es: {
        // Navigation
        nav: {
            about: "Acerca de",
            education: "Educación",
            experience: "Experiencia",
            skills: "Habilidades",
            projects: "Proyectos",
            leadership: "Liderazgo",
            contact: "Contacto"
        },
        // Hero Section
        hero: {
            subtitle: "Ciencias Actuariales y Análisis de Datos",
            description: "Estudiante apasionada de ciencias actuariales en UConn combinando experiencia analítica con tecnología innovadora. Ahora mismo soy interna actuarial en MassMutual y me estoy preparando para el Examen 2/FM (Agosto 2026) mientras transformo la evaluación de riesgos y la planificación de retiro.",
            stats: {
                gpa: "Promedio",
                experience: "Años de Experiencia",
                graduation: "Graduación"
            },
            cta: {
                contact: "Hablemos",
                projects: "Mira Mis Proyectos"
            }
        },
        // About Section
        about: {
            label: "Sobre Mí",
            title: "Uniendo Matemáticas e Innovación",
            subtitle: "Combinando experiencia actuarial con tecnología de punta para crear soluciones que impactan",
            text1: "Soy estudiante dedicada de Matemáticas y Ciencias Actuariales en la Universidad de Connecticut, bien apasionada por usar el análisis de datos y las tecnologías nuevas para transformar la industria de seguros y planificación de retiro.",
            highlight: "Ahora mismo estoy de interna en MassMutual en pricing de productos mientras me preparo para el Examen 2/FM (Agosto 2026), creando soluciones que conectan la ciencia actuarial tradicional con tecnologías de IA y web súper modernas.",
            text2: "Mi trayectoria combina una formación académica bien sólida — incluyendo un semestre de intercambio en la Universidad Nacional de Singapur — con experiencia actuarial práctica en MassMutual y Segal, donde desarrollé soluciones de retiro con IA. Balanceo mi experiencia técnica con el modelaje profesional, demostrando versatilidad y manejo del tiempo excepcional en diferentes campos.",
            cards: {
                data: {
                    title: "Análisis de Datos",
                    desc: "Modelado y análisis avanzado con Python, R y Excel"
                },
                ai: {
                    title: "Innovación con IA",
                    desc: "Experiencia en Claude, ChatGPT y desarrollo de IA generativa"
                },
                actuarial: {
                    title: "Ciencias Actuariales",
                    desc: "Preparándome para el Examen 2/FM, con experiencia en pricing de productos, valuación y evaluación de riesgos"
                },
                leadership: {
                    title: "Liderazgo",
                    desc: "Roles de oficial y comités en OLA, la Sociedad Actuarial de UConn y VSA"
                }
            }
        },
        // Education Section
        education: {
            label: "Educación",
            title: "Trayectoria Académica",
            degree: {
                date: "Clase de 2027",
                title: "Bachillerato en Artes",
                subtitle: "Matemáticas/Ciencias Actuariales",
                description: "Universidad de Connecticut, Storrs",
                gpa: "GPA: 3.53/4.0",
                badges: {
                    exam: "Examen 2/FM (Ago 2026)",
                    veeEcon: "VEE Economía",
                    veeAcct: "VEE Contabilidad",
                    honors: "Programa de Honores"
                }
            },
            singapore: {
                date: "Enero - Mayo 2026",
                title: "Intercambio Académico",
                subtitle: "Universidad Nacional de Singapur",
                description: "Semestre de intercambio en la universidad #1 de Asia, continuando cursos de matemáticas y ciencias actuariales mientras gano una perspectiva global sobre finanzas y riesgo.",
                badges: {
                    exchange: "Intercambio Semestral",
                    global: "Perspectiva Global",
                    math: "Cursos de Matemáticas"
                }
            },
            abroad: {
                date: "Julio 2024",
                title: "Programa de Campo",
                subtitle: "Universidad de Connecticut, Grecia",
                description: "Programa intensivo de estudio arqueológico y cultural recopilando y analizando datos sobre poblaciones locales, políticas y estructuras históricas a través de investigación práctica y excavación.",
                badges: {
                    field: "Investigación de Campo",
                    cultural: "Estudios Culturales",
                    intl: "Experiencia Internacional"
                }
            }
        },
        // Experience Section
        experience: {
            label: "Experiencia",
            title: "Trayectoria Profesional",
            massmutual: {
                role: "Internado Actuarial | Pricing de Productos y Supervisión de Supuestos",
                date: "Mayo 2026 - Presente | Boston, MA",
                desc: "Estoy mejorando la herramienta principal de Excel/VBA del proceso de planificación del Valor de Nuevos Negocios (VNB) de MassMutual — automatizando la entrada de datos, los cálculos del Plan 2027 y los visuales en un flujo repetible, listo para escalar a una futura migración a Power BI. Colaboro con equipos de pricing para mapear el proceso VNB completo y reconstruyo el deck trimestral de reportes VNB para eliminar la entrada manual de datos.",
                skills: ["Excel", "VBA", "Pricing de Productos", "Automatización", "Visualización de Datos"]
            },
            segal: {
                role: "Internado Actuarial",
                date: "Mayo 2025 - Agosto 2025 | Farmington, CT",
                desc: "Lideré el desarrollo del proyecto ganador de los internos — un dashboard de retiro actuarial (RetireHub) junto a un chatbot de IA generativa (RetireChat) — mientras apoyaba proyectos complejos de valuación, análisis de ganancias/pérdidas, cálculos de beneficios y radicaciones gubernamentales junto a actuarios con experiencia.",
                skills: ["Python", "React", "Google Cloud", "Desarrollo IA", "Análisis de Datos"]
            },
            model: {
                role: "Modelo Profesional",
                date: "Septiembre 2021 - Presente | Rocky Hill, CT",
                desc: "Balanceo exitosamente mi carrera de modelaje profesional con la excelencia académica. Trabajo con fotógrafos y agencias mientras mantengo roles de liderazgo y un GPA alto. Demuestro manejo del tiempo excepcional, profesionalismo y adaptabilidad en proyectos diversos.",
                skills: ["Manejo de Proyectos", "Comunicación", "Manejo del Tiempo", "Profesionalismo"]
            },
            pizza: {
                role: "Servicio al Cliente",
                date: "Agosto 2022 - Agosto 2023 | Part-time",
                desc: "Di servicio al cliente excepcional en un ambiente bien movido, manejando áreas del comedor para más de 90 clientes diarios. Desarrollé destrezas fuertes de multitasking e interpersonales mientras mantenía estándares de servicio altos.",
                skills: ["Servicio al Cliente", "Multitasking", "Colaboración en Equipo"]
            }
        },
        // Skills Section
        skills: {
            label: "Habilidades",
            title: "Experiencia Técnica",
            categories: {
                programming: "Programación y Desarrollo",
                ai: "IA y Tecnologías Cloud",
                actuarial: "Actuarial y Análisis",
                professional: "Destrezas Profesionales"
            }
        },
        // Projects Section
        projects: {
            label: "Proyectos",
            title: "Trabajo Destacado",
            chatbot: {
                title: "RetireChat - Chatbot de Retiro con IA",
                desc: "Desarrollé una solución innovadora de IA conversacional para ayudar con la planificación temprana del retiro, como parte del proyecto ganador de los internos de Segal. Construí una plataforma web funcional que da orientación personalizada usando procesamiento del lenguaje natural.",
                link: "Mira el Demo →",
                tech: ["Python", "React", "Google Cloud", "IA Generativa"]
            },
            goldenson: {
                title: "Competencia de Caso Goldenson",
                desc: "Hice investigación de mercado sobre segmentos de bajos ingresos y desarrollé un modelo flexible de póliza de seguros con contribuciones ajustables y bases de suscripción con IA para planes de cobertura personalizados — presentado a profesionales de la industria.",
                link: "Mira los Detalles →",
                tech: ["Investigación de Mercado", "Modelado de Seguros", "Suscripción con IA", "Presentación"]
            },
            platform: {
                title: "RetireHub - Plataforma de Planificación de Retiro",
                desc: "Construí la pieza central del proyecto ganador de los internos de Segal — una plataforma funcional que combina experiencia actuarial con tecnologías nuevas a través de un dashboard interactivo para cálculos y visualizaciones de planificación de retiro.",
                link: "Mira la Plataforma →",
                tech: ["React", "Firebase", "JavaScript", "Modelos Actuariales"]
            },
            futurescope: {
                title: "FutureScope - Calculadora de Proyección Financiera",
                desc: "Diseñé una calculadora de proyección de retiro basada en simulaciones Monte Carlo, modelado de interés compuesto y análisis de valor presente ajustado por inflación para entregar pronósticos financieros probabilísticos a largo plazo.",
                link: "Ver Calculadora →",
                tech: ["Python", "Flask", "Google Cloud Run", "Simulación Monte Carlo"]
            }
        },
        // Leadership Section
        leadership: {
            label: "Liderazgo",
            title: "Liderazgo y Participación",
            ola: {
                role: "Comité de Alcance y Programa Rising Leaders",
                date: "Septiembre 2024 - Presente | Remoto",
                desc: "Embajadora promoviendo la carrera actuarial — panelista en la primera competencia nacional de casos para escuela superior de OLA y lideré el alcance a 8,500 consejeros escolares en todo el país promoviendo Desafiando el Riesgo y las becas de OLA.",
                skills: ["Alcance Comunitario", "Hablar en Público", "Mentoría"]
            },
            uas: {
                role: "Próxima VP de Desarrollo de Miembros · Directora de Recaudación",
                date: "Septiembre 2024 - Presente | Storrs, CT",
                desc: "Dirigí estrategias de recaudación de fondos en el campus, analizando la participación de miembros y patrones de contribución en Excel para maximizar las ganancias. Antes fui Directora de DEI, organizando el primer evento DEI de UAS con seis organizaciones de afinidad.",
                skills: ["Recaudación de Fondos", "Análisis en Excel", "DEI", "Estrategia"]
            },
            vsa: {
                role: "Co-Directora Financiera (CFO)",
                date: "Septiembre 2024 - Presente | Storrs, CT",
                desc: "Hice análisis de precios para más de 240 unidades de mercancía vendida a nivel nacional e iniciativas de recaudación, evaluando estructuras de costos para maximizar ingresos manteniendo la asequibilidad. Antes fui Co-Coordinadora de Eventos, organizando eventos quincenales para 60-70 participantes.",
                skills: ["Análisis de Precios", "Presupuestos", "Planificación de Eventos"]
            },
            associations: {
                label: "También activa en:",
                items: ["Miembro de ALPFA · Desde 2024", "Programa de Honores de UConn · Desde 2023"]
            }
        },
        // Achievements Section
        achievements: {
            title: "Logros e Impacto",
            items: {
                gpa: "GPA mientras balanceo múltiples roles",
                internship: "Internados actuariales — MassMutual y Segal",
                experience: "Años de experiencia profesional",
                languages: "Idiomas que hablo fluido"
            }
        },
        // Contact Section
        contact: {
            title: "¡Vamos a Hablar!",
            description: "Siempre estoy emocionada de hablar sobre ciencias actuariales, análisis de datos y soluciones tecnológicas innovadoras.",
            labels: {
                email: "Email",
                phone: "Teléfono",
                linkedin: "LinkedIn",
                location: "Ubicación"
            },
            connect: "Conectar"
        },
        // Footer
        footer: "Todos los derechos reservados"
    }
};
