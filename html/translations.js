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
            description: "I'm an actuarial science student at UConn who likes working where math and technology meet. I just finished a 2026 actuarial internship at MassMutual on the Product Pricing team, and I'm now looking for full-time actuarial roles starting in 2027.",
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
            title: "Math, Insurance, and the Tools I Build",
            subtitle: "Actuarial work, data, and the tools I like to build.",
            text1: "I'm a Math and Actuarial Science student at the University of Connecticut. I'm open to any actuarial track because I genuinely love learning, and what I value most is being somewhere that invests in my growth and gives me a lot to learn.",
            highlight: "This past summer I interned at MassMutual on the Product Pricing team, where I got my first real look at the life insurance business. I'm now studying for my actuarial exams and looking for full-time actuarial roles starting in 2027.",
            text2: "Along the way I spent a semester abroad at the National University of Singapore and interned at MassMutual and Segal. Outside of class and work, I model professionally, which has taught me a lot about managing my time and staying calm under pressure.",
            cards: {
                data: {
                    title: "Data Analytics",
                    desc: "Modeling and analysis in Python, R, and Excel"
                },
                ai: {
                    title: "AI Innovation",
                    desc: "Comfortable building with Claude, ChatGPT, and other generative AI tools"
                },
                actuarial: {
                    title: "Actuarial Science",
                    desc: "Studying for my actuarial exams, with experience in product pricing, valuation, and risk"
                },
                leadership: {
                    title: "Leadership",
                    desc: "Officer and committee roles with OLA, the UConn Actuarial Society, and VSA"
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
                    exam: "Actuarial Exam Track",
                    veeEcon: "VEE Economics",
                    veeAcct: "VEE Accounting",
                    honors: "Honors Program"
                }
            },
            singapore: {
                date: "January - May 2026",
                title: "Study Abroad",
                subtitle: "National University of Singapore",
                description: "A semester exchange at the National University of Singapore, where I got to see finance and risk from a different part of the world.",
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
                description: "A summer field school in Greece where I collected and analyzed data on local populations, policies, and historical sites through hands-on research and excavation.",
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
                date: "May 2026 - August 2026 | Boston, MA",
                desc: "I rebuilt the Excel/VBA tool behind MassMutual's Value of New Business (VNB) planning process so it could pull in the data, run the 2027 Plan calculations, and generate the visuals in one repeatable workflow, with a future move to Power BI in mind. I also worked with the pricing teams to map out the full VNB process and rebuilt the quarterly reporting deck so the team no longer had to re-enter everything by hand.",
                skills: ["Excel", "VBA", "Product Pricing", "Automation", "Data Visualization"]
            },
            segal: {
                role: "Actuarial Intern",
                date: "May 2025 - August 2025 | Farmington, CT",
                desc: "I helped lead our intern group project, which ended up winning that summer: a retirement dashboard (RetireHub) paired with a generative-AI chatbot (RetireChat). Alongside that, I supported the actuaries on valuation work, gain/loss analysis, benefit calculations, and government filings.",
                skills: ["Python", "React", "Google Cloud", "AI Development", "Data Analysis"]
            },
            model: {
                role: "Professional Model",
                date: "September 2021 - Present | Rocky Hill, CT",
                desc: "I model professionally alongside school, working with photographers and agencies on shoots. Balancing it with my coursework and other roles has made me better at managing my time and adjusting quickly in new settings.",
                skills: ["Project Management", "Communication", "Time Management", "Professionalism"]
            },
            pizza: {
                role: "Customer Service",
                date: "August 2022 - August 2023 | Part-time",
                desc: "I handled customer service at a busy restaurant, keeping the dining area running for 90 or more guests a day. It taught me how to juggle a lot at once and stay friendly when things got hectic.",
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
                title: "RetireChat: AI Retirement Chatbot",
                desc: "A conversational AI tool I built for our Segal intern project to help people early in their careers start thinking about retirement. It answers planning questions in plain language through a simple web app.",
                link: "View Live Demo →",
                tech: ["Python", "React", "Google Cloud", "Gen AI"]
            },
            goldenson: {
                title: "Goldenson Case Study Competition",
                desc: "For this case competition, I researched lower-income market segments and designed a flexible insurance policy with adjustable contributions and the start of an AI-based underwriting approach. We presented it to industry professionals.",
                link: "View Details →",
                tech: ["Market Research", "Insurance Modeling", "AI Underwriting", "Presentation"]
            },
            platform: {
                title: "RetireHub: Retirement Planning Platform",
                desc: "The main piece of our Segal intern project: an interactive dashboard that runs retirement planning calculations and shows the results visually. It was a proof of concept for pairing actuarial work with newer tools.",
                link: "View Live Platform →",
                tech: ["React", "Firebase", "JavaScript", "Actuarial Models"]
            },
            futurescope: {
                title: "FutureScope: Financial Projection Calculator",
                desc: "A retirement projection calculator I built using Monte Carlo simulation, compound interest, and inflation-adjusted present value, so people can see a realistic range of long-term outcomes instead of a single guess.",
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
                desc: "I help get the word out about actuarial careers. I was a panelist at OLA's first national high school case competition and led outreach to 8,500 school counselors across the country about Desafiando el Riesgo and OLA's scholarships.",
                skills: ["Outreach", "Public Speaking", "Mentorship"]
            },
            uas: {
                role: "Incoming VP of Member Development · Director of Fundraising",
                date: "September 2024 - Present | Storrs, CT",
                desc: "I ran fundraising for the society, using Excel to track member engagement and see what brought in the most profit. Before that I was Director of DEI and put together UAS's first DEI event with six affinity organizations.",
                skills: ["Fundraising", "Excel Analytics", "DEI", "Strategy"]
            },
            vsa: {
                role: "Co-Chief Financial Officer",
                date: "September 2024 - Present | Storrs, CT",
                desc: "I set pricing for 240 or more units of merchandise we sold nationally, looking at our costs to land on prices that struck a middle ground: enough to help fund the organization while still staying student-friendly. Before that I was Co-Events Coordinator, running events every two weeks for 60 to 70 people.",
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
                internship: "Actuarial internships at MassMutual & Segal",
                experience: "Years of professional experience",
                languages: "Languages spoken fluently"
            }
        },
        // Contact Section
        contact: {
            title: "Let's Connect!",
            description: "I'm always happy to talk about actuarial science, data, or anything I'm building. Feel free to reach out.",
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
            description: "Soy estudiante de ciencias actuariales en UConn y me gusta trabajar donde se encuentran las matemáticas y la tecnología. Acabo de terminar un internado actuarial en MassMutual en el equipo de Product Pricing (2026), y ahora estoy buscando trabajo a tiempo completo como actuaria para 2027.",
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
            title: "Matemáticas, Seguros y las Herramientas que Construyo",
            subtitle: "Trabajo actuarial, datos y las herramientas que me gusta construir.",
            text1: "Soy estudiante de Matemáticas y Ciencias Actuariales en la Universidad de Connecticut. Estoy abierta a cualquier área actuarial porque de verdad me encanta aprender, y lo que más valoro es estar en un lugar que invierta en mi crecimiento y donde tenga mucho que aprender.",
            highlight: "Este verano hice mi internado en MassMutual en el equipo de Product Pricing, donde vi por primera vez de cerca el negocio de los seguros de vida. Ahora estoy estudiando para mis exámenes actuariales y buscando trabajo a tiempo completo como actuaria para 2027.",
            text2: "Antes de eso hice un semestre de intercambio en la Universidad Nacional de Singapur y trabajé en MassMutual y Segal. Fuera de la escuela y el trabajo, modelo profesionalmente, lo cual me ha enseñado bastante sobre manejar mi tiempo y mantener la calma bajo presión.",
            cards: {
                data: {
                    title: "Análisis de Datos",
                    desc: "Modelado y análisis en Python, R y Excel"
                },
                ai: {
                    title: "Innovación con IA",
                    desc: "Cómoda construyendo con Claude, ChatGPT y otras herramientas de IA generativa"
                },
                actuarial: {
                    title: "Ciencias Actuariales",
                    desc: "Estudiando para mis exámenes actuariales, con experiencia en pricing de productos, valuación y riesgo"
                },
                leadership: {
                    title: "Liderazgo",
                    desc: "Roles de oficial y comités con OLA, la Sociedad Actuarial de UConn y VSA"
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
                    exam: "Exámenes Actuariales",
                    veeEcon: "VEE Economía",
                    veeAcct: "VEE Contabilidad",
                    honors: "Programa de Honores"
                }
            },
            singapore: {
                date: "Enero - Mayo 2026",
                title: "Intercambio Académico",
                subtitle: "Universidad Nacional de Singapur",
                description: "Un semestre de intercambio en la Universidad Nacional de Singapur, donde pude ver las finanzas y el riesgo desde otra parte del mundo.",
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
                description: "Una escuela de campo de verano en Grecia donde recopilé y analicé datos sobre las poblaciones locales, las políticas y los sitios históricos a través de investigación y excavación práctica.",
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
                date: "Mayo 2026 - Agosto 2026 | Boston, MA",
                desc: "Reconstruí la herramienta de Excel/VBA detrás del proceso de planificación del Valor de Nuevos Negocios (VNB) de MassMutual para que pudiera traer los datos, correr los cálculos del Plan 2027 y generar los visuales en un solo flujo repetible, pensando en una futura migración a Power BI. También trabajé con los equipos de pricing para mapear el proceso VNB completo y reconstruí el deck trimestral de reportes para que el equipo ya no tuviera que volver a entrar todo a mano.",
                skills: ["Excel", "VBA", "Pricing de Productos", "Automatización", "Visualización de Datos"]
            },
            segal: {
                role: "Internado Actuarial",
                date: "Mayo 2025 - Agosto 2025 | Farmington, CT",
                desc: "Ayudé a liderar el proyecto de grupo de los internos, que terminó ganando ese verano: un dashboard de retiro (RetireHub) junto a un chatbot de IA generativa (RetireChat). Además de eso, apoyé a los actuarios en trabajo de valuación, análisis de ganancias y pérdidas, cálculos de beneficios y radicaciones gubernamentales.",
                skills: ["Python", "React", "Google Cloud", "Desarrollo IA", "Análisis de Datos"]
            },
            model: {
                role: "Modelo Profesional",
                date: "Septiembre 2021 - Presente | Rocky Hill, CT",
                desc: "Modelo profesionalmente junto con la escuela, trabajando con fotógrafos y agencias en sesiones. Balancearlo con mis cursos y mis otros roles me ha hecho mejor manejando mi tiempo y adaptándome rápido a ambientes nuevos.",
                skills: ["Manejo de Proyectos", "Comunicación", "Manejo del Tiempo", "Profesionalismo"]
            },
            pizza: {
                role: "Servicio al Cliente",
                date: "Agosto 2022 - Agosto 2023 | Part-time",
                desc: "Di servicio al cliente en un restaurante bien movido, manteniendo el área del comedor funcionando para 90 clientes o más al día. Aprendí a hacer muchas cosas a la vez y a mantenerme amable cuando la cosa se ponía intensa.",
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
                title: "RetireChat: Chatbot de Retiro con IA",
                desc: "Una herramienta de IA conversacional que construí para nuestro proyecto de internos en Segal, para ayudar a la gente joven a empezar a pensar en el retiro. Contesta preguntas de planificación en lenguaje sencillo a través de una app web simple.",
                link: "Mira el Demo →",
                tech: ["Python", "React", "Google Cloud", "IA Generativa"]
            },
            goldenson: {
                title: "Competencia de Caso Goldenson",
                desc: "Para esta competencia de caso, investigué segmentos de mercado de bajos ingresos y diseñé una póliza de seguros flexible con contribuciones ajustables y el comienzo de un enfoque de suscripción basado en IA. La presentamos a profesionales de la industria.",
                link: "Mira los Detalles →",
                tech: ["Investigación de Mercado", "Modelado de Seguros", "Suscripción con IA", "Presentación"]
            },
            platform: {
                title: "RetireHub: Plataforma de Planificación de Retiro",
                desc: "La pieza principal de nuestro proyecto de internos en Segal: un dashboard interactivo que corre cálculos de planificación de retiro y muestra los resultados de forma visual. Fue una prueba de concepto para combinar el trabajo actuarial con herramientas más nuevas.",
                link: "Mira la Plataforma →",
                tech: ["React", "Firebase", "JavaScript", "Modelos Actuariales"]
            },
            futurescope: {
                title: "FutureScope: Calculadora de Proyección Financiera",
                desc: "Una calculadora de proyección de retiro que construí usando simulaciones Monte Carlo, interés compuesto y valor presente ajustado por inflación, para que la gente pueda ver un rango realista de resultados a largo plazo en vez de un solo número.",
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
                desc: "Ayudo a correr la voz sobre las carreras actuariales. Fui panelista en la primera competencia nacional de casos para escuela superior de OLA y lideré el alcance a 8,500 consejeros escolares por todo el país sobre Desafiando el Riesgo y las becas de OLA.",
                skills: ["Alcance Comunitario", "Hablar en Público", "Mentoría"]
            },
            uas: {
                role: "Próxima VP de Desarrollo de Miembros · Directora de Recaudación",
                date: "Septiembre 2024 - Presente | Storrs, CT",
                desc: "Dirigí la recaudación de fondos de la sociedad, usando Excel para seguir la participación de los miembros y ver qué era lo que generaba más ganancia. Antes de eso fui Directora de DEI y organicé el primer evento de DEI de UAS con seis organizaciones de afinidad.",
                skills: ["Recaudación de Fondos", "Análisis en Excel", "DEI", "Estrategia"]
            },
            vsa: {
                role: "Co-Directora Financiera (CFO)",
                date: "Septiembre 2024 - Presente | Storrs, CT",
                desc: "Puse los precios de 240 unidades o más de mercancía que vendimos a nivel nacional, mirando nuestros costos para llegar a precios que dieran con el punto medio: suficiente para ayudar a financiar la organización y a la vez precios amigables para los estudiantes. Antes fui Co-Coordinadora de Eventos, organizando eventos cada dos semanas para 60 a 70 personas.",
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
                internship: "Internados actuariales en MassMutual y Segal",
                experience: "Años de experiencia profesional",
                languages: "Idiomas que hablo fluido"
            }
        },
        // Contact Section
        contact: {
            title: "¡Vamos a Hablar!",
            description: "Siempre estoy contenta de hablar sobre ciencias actuariales, datos o cualquier cosa que esté construyendo. No dudes en escribirme.",
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
