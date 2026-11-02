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
            description: "I'm an actuarial science student at UConn, graduating in May 2027. This past summer I interned at MassMutual on the Product Pricing & Assumption Oversight team, and now I'm looking for full-time roles in actuarial, analytics, and product work.",
            stats: {
                gpa: "GPA",
                experience: "Internships",
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
            text1: "I study Math and Actuarial Science at the University of Connecticut. What I enjoy most is figuring out why a number changed and explaining it simply, whether it's in a pricing model, a pension valuation, or a tool I built myself.",
            highlight: "At MassMutual, I enhanced the tool that explains why each product's planned profitability changed from one plan to the next. I also traced a product that was missing from the results back to a single lookup formula.",
            travel: {
                label: "Places I've Been",
                home: "Home",
                lived: "Lived abroad",
                visited: "Visited",
                caption: "I live in Connecticut, spent a semester in Singapore, and have been to 13 countries so far, plus Hong Kong, Puerto Rico, and Hawaii.",
                places: ["Singapore", "Malaysia", "Indonesia", "Philippines", "Thailand", "Vietnam", "South Korea", "Taiwan", "Hong Kong", "Greece", "Italy", "Spain", "France", "Canada", "Puerto Rico", "Hawaii"]
            },
            text2: "Before that, I interned at Segal in retirement consulting and spent a semester at the National University of Singapore. Outside of class and work, I model professionally, which has taught me a lot about managing my time and staying calm under pressure.",
            cards: {
                data: {
                    title: "Data Analytics",
                    desc: "Excel, VBA, Python, and R, from validating data to building dashboards"
                },
                ai: {
                    title: "Building Tools",
                    desc: "Designing and shipping small apps with Python, React, and generative AI"
                },
                actuarial: {
                    title: "Actuarial Science",
                    desc: "Product pricing, pension valuation, and gain/loss analysis, with Exam FM in December 2026"
                },
                leadership: {
                    title: "Leadership",
                    desc: "Leading a 16-member committee at UAS, plus roles with OLA and VSA"
                }
            }
        },
        // Education Section
        education: {
            label: "Education",
            title: "Where I've Studied",
            degree: {
                date: "Class of 2027",
                title: "Bachelor of Arts",
                subtitle: "Mathematics/Actuarial Science",
                description: "University of Connecticut, Storrs",
                gpa: "GPA: 3.53/4.0",
                badges: {
                    exam: "Exam FM: December 2026",
                    veeEcon: "VEE Economics",
                    veeAcct: "VEE Accounting",
                    honors: "Honors Program"
                }
            },
            singapore: {
                date: "January - May 2026",
                title: "Study Abroad",
                subtitle: "National University of Singapore",
                description: "A semester exchange at the National University of Singapore. The courses I took there count toward my UConn Honors credit.",
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
                description: "A summer anthropology field school in Greece, where I collected data on the local community and visited excavation sites and major historical monuments.",
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
            title: "Where I've Worked",
            massmutual: {
                role: "Actuarial Intern | Product Pricing & Assumption Oversight",
                date: "May 2026 - August 2026 | Boston, MA",
                desc: "I enhanced the Excel/VBA tool that breaks down why each product's planned profitability (Value of New Business) changed from one plan to the next, across 17 product lines. I met with the pricing teams that submit data to it and shaped the tool around how they work, which replaced months of manual adjustment with a repeatable workflow. While testing it, I found that one product's data wasn't flowing downstream because a lookup only returned its first match, so I rebuilt the lookups and new products now flow through automatically. I presented the changes to actuaries and senior leaders and rebuilt the quarterly VNB deck for executive leadership so it populates instantly. I also won the intern case competition with a five-person team by designing an NIL annuity for student-athletes.",
                skills: ["Excel", "VBA", "Data Validation", "Automation", "Product Pricing"]
            },
            segal: {
                role: "Actuarial Intern | Retirement Consulting",
                date: "May 2025 - August 2025 | Farmington, CT",
                desc: "I ran pension valuation roll-forwards and gain/loss analysis for multiemployer clients, loading and validating plan data and explaining why actual results differed from what was expected. I also assisted credentialed actuaries on annual government filings. I led our intern group project too, setting the deadlines and the overall direction, and it won: a retirement-planning site pairing a dashboard (RetireHub) with a generative-AI chatbot (RetireChat).",
                skills: ["Pension Valuation", "Gain/Loss Analysis", "Data Validation", "Team Leadership", "Excel"]
            },
            model: {
                role: "Professional Model",
                date: "September 2021 - Present | West Hartford, CT",
                desc: "I model professionally alongside school, working with photographers and agencies on shoots. Balancing it with classes and my other roles has made me better at managing my time and adjusting quickly.",
                skills: ["Adaptability", "Communication", "Time Management", "Professionalism"]
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
            title: "Tools & Skills",
            categories: {
                programming: "Programming & Development",
                ai: "AI & Cloud Tools",
                actuarial: "Actuarial & Analytics",
                professional: "Professional Skills"
            },
            items: {
                programming: ["Python", "R", "VBA", "React", "HTML/CSS", "Streamlit"],
                ai: ["Claude Code", "Gemini API", "Copilot", "GitHub", "Google Cloud"],
                actuarial: ["Microsoft Excel", "Data Validation", "Data Analysis", "Financial Modeling", "Product Pricing", "Pension Valuation", "Gain/Loss Analysis", "Monte Carlo Simulation", "Credibility Weighting", "Government Filings"],
                professional: ["Project Management", "Team Leadership", "Public Speaking", "Event Planning", "PowerPoint", "Figma", "Spanish (Fluent)", "English (Native)"]
            }
        },
        // Projects Section
        projects: {
            label: "Projects",
            title: "Featured Work",
            latest: "Latest Addition",
            wakeNote: "Hosted on Streamlit's free tier. If it has been idle, click the wake-up button and give it about 30 seconds.",
            chatbot: {
                title: "RetireChat: AI Retirement Chatbot",
                desc: "The chatbot half of our winning Segal intern project, made to help people early in their careers start thinking about retirement. It answers planning questions in plain language.",
                link: "View Live Demo →",
                tech: ["Python", "Streamlit", "Gemini API", "Gen AI"]
            },
            goldenson: {
                title: "Goldenson Case Study Competition, 2024",
                desc: "For this case competition, I researched lower-income market segments and designed a flexible life insurance policy with adjustable contributions, plus an AI-based underwriting approach so coverage could fit each person's budget. We presented it to industry professionals.",
                link: "View Details →",
                tech: ["Market Research", "Insurance Modeling", "AI Underwriting", "Presentation"]
            },
            platform: {
                title: "RetireHub: Retirement Planning Platform",
                desc: "The dashboard half of our winning Segal intern project. It runs retirement planning calculations and shows the results visually, as a proof of concept for getting early-career employees more engaged with retirement planning.",
                link: "View Live Platform →",
                tech: ["JavaScript", "Bootstrap", "Firebase", "Actuarial Models"]
            },
            earnings: {
                title: "Earnings Outlook: Creator Income Planning Prototype",
                desc: "Using Roblox's published creator payout data, I defined a product gap for creators with uneven income: the user problem, a retention-based success metric, and a four-feature MVP. Then I built a Python/Streamlit prototype on sample data. It projects a creator's next 90 days of earnings as a Monte Carlo range and uses actuarial credibility weighting so newer creators with little history still get a stable estimate, shown as a plain confidence label.",
                link: "View Live Prototype →",
                tech: ["Python", "Streamlit", "Monte Carlo Simulation", "Credibility Weighting"]
            },
            futurescope: {
                title: "FutureScope: Retirement Planning Web App",
                desc: "A retirement projection web app I built and deployed. It uses Monte Carlo simulation, compound growth, and inflation-adjusted present values to show a realistic range of outcomes instead of a single guess. The idea came from a question people outside the field kept asking me: \"can you help me with insurance?\"",
                link: "View Live Calculator →",
                tech: ["React", "GitHub Pages", "Monte Carlo Simulation", "Present Value"]
            }
        },
        // Leadership Section
        leadership: {
            label: "Leadership",
            title: "Leadership & Involvement",
            ola: {
                role: "Pipeline Committee & Rising Leaders Program",
                date: "September 2024 - Present | Remote",
                desc: "I help get the word out about actuarial careers. I reached out to more than 8,500 high school counselors across the country about OLA's scholarships and Desafiando el Riesgo, its Spanish-language program, and I was a panelist at the program's first high school case competition.",
                skills: ["Outreach", "Public Speaking", "Email Campaigns"]
            },
            uas: {
                role: "VP of Member Development",
                date: "September 2024 - Present | Storrs, CT",
                desc: "Since September 2026, I've led a 16-member committee split into three teams: Engagement for socials, Peer Learning for workshops, and Resources for member materials. I also write our recruitment emails. Before that, I was Director of Fundraising, running fundraisers for speaker events and member programming, and Director of DEI, where I organized UAS's first DEI event with six affinity organizations.",
                skills: ["Team Leadership", "Marketing", "Fundraising", "DEI"]
            },
            vsa: {
                role: "Co-Chief Financial Officer",
                date: "September 2024 - December 2025 | Storrs, CT",
                desc: "I priced 240+ units of nationally sold merchandise, using prior sales data to reset quantities and prices, and set four-figure budgets for projects like UConn Lunar New Year and our merch launch. Before that I was Co-Events Coordinator, running events every two weeks for 60 to 70 people.",
                skills: ["Pricing Analysis", "Budgeting", "Event Planning"]
            },
            associations: {
                label: "Honors & Memberships",
                items: ["ALPFA Member · Since 2024", "UConn Honors Program · Since 2023", "Spencer Scholar · Brown & Brown Grant · 2026"]
            }
        },
        // Achievements Section
        achievements: {
            title: "By the Numbers",
            items: {
                gpa: "Members on the UAS committee I lead",
                internship: "Product lines covered by the VNB tool I enhanced at MassMutual",
                experience: "High school counselors contacted through OLA",
                languages: "Languages spoken fluently"
            }
        },
        // Contact Section
        contact: {
            title: "Get in Touch",
            description: "Email is the best way to reach me. I'm happy to talk about actuarial work, analytics, product roles, or any of the projects above.",
            labels: {
                email: "Email",
                phone: "Phone",
                linkedin: "LinkedIn",
                location: "Location"
            },
            connect: "Connect"
        },
        // Footer
        footer: "All rights reserved",
        ui: { close: "Close", menu: "Sections" }
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
            description: "Soy estudiante de ciencias actuariales en UConn y me gradúo en mayo de 2027. El verano pasado hice mi internado en MassMutual en el equipo de Product Pricing & Assumption Oversight, y ahora estoy buscando trabajo a tiempo completo en el área actuarial, de análisis de datos y de productos.",
            stats: {
                gpa: "Promedio",
                experience: "Internados",
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
            text1: "Estudio Matemáticas y Ciencias Actuariales en la Universidad de Connecticut. Lo que más disfruto es descubrir por qué cambió un número y explicarlo de forma sencilla, ya sea en un modelo de pricing, una valuación de pensiones o una herramienta que construí yo misma.",
            highlight: "En MassMutual mejoré la herramienta que explica por qué cambió la rentabilidad planificada de cada producto de un plan al siguiente. También rastreé un producto que faltaba en los resultados hasta una sola fórmula de búsqueda.",
            travel: {
                label: "Lugares Donde He Estado",
                home: "Casa",
                lived: "Viví en el extranjero",
                visited: "Visitado",
                caption: "Vivo en Connecticut, pasé un semestre en Singapur y hasta ahora he estado en 13 países, además de Hong Kong, Puerto Rico y Hawái.",
                places: ["Singapur", "Malasia", "Indonesia", "Filipinas", "Tailandia", "Vietnam", "Corea del Sur", "Taiwán", "Hong Kong", "Grecia", "Italia", "España", "Francia", "Canadá", "Puerto Rico", "Hawái"]
            },
            text2: "Antes de eso hice mi internado en Segal en consultoría de retiro y pasé un semestre en la Universidad Nacional de Singapur. Fuera de la escuela y el trabajo, modelo profesionalmente, lo cual me ha enseñado bastante sobre manejar mi tiempo y mantener la calma bajo presión.",
            cards: {
                data: {
                    title: "Análisis de Datos",
                    desc: "Excel, VBA, Python y R, desde validar datos hasta construir dashboards"
                },
                ai: {
                    title: "Construyendo Herramientas",
                    desc: "Diseño y lanzo apps pequeñas con Python, React e IA generativa"
                },
                actuarial: {
                    title: "Ciencias Actuariales",
                    desc: "Pricing de productos, valuación de pensiones y análisis de ganancias y pérdidas, con el Examen FM en diciembre de 2026"
                },
                leadership: {
                    title: "Liderazgo",
                    desc: "Lidero un comité de 16 miembros en UAS, además de roles con OLA y VSA"
                }
            }
        },
        // Education Section
        education: {
            label: "Educación",
            title: "Dónde He Estudiado",
            degree: {
                date: "Clase de 2027",
                title: "Bachillerato en Artes",
                subtitle: "Matemáticas/Ciencias Actuariales",
                description: "Universidad de Connecticut, Storrs",
                gpa: "GPA: 3.53/4.0",
                badges: {
                    exam: "Examen FM: Diciembre 2026",
                    veeEcon: "VEE Economía",
                    veeAcct: "VEE Contabilidad",
                    honors: "Programa de Honores"
                }
            },
            singapore: {
                date: "Enero - Mayo 2026",
                title: "Intercambio Académico",
                subtitle: "Universidad Nacional de Singapur",
                description: "Un semestre de intercambio en la Universidad Nacional de Singapur. Los cursos que tomé allí cuentan como créditos de Honores en UConn.",
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
                description: "Una escuela de campo de antropología en Grecia durante el verano, donde recopilé datos sobre la comunidad local y visité sitios de excavación y monumentos históricos importantes.",
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
            title: "Dónde He Trabajado",
            massmutual: {
                role: "Internado Actuarial | Pricing de Productos y Supervisión de Supuestos",
                date: "Mayo 2026 - Agosto 2026 | Boston, MA",
                desc: "Mejoré la herramienta de Excel/VBA que desglosa por qué cambió la rentabilidad planificada de cada producto (Valor de Nuevos Negocios) de un plan al siguiente, en 17 líneas de productos. Me reuní con los equipos de pricing que le envían datos y diseñé la herramienta según su forma de trabajar, lo que reemplazó meses de ajustes manuales con un proceso repetible. Mientras la probaba, encontré que los datos de un producto no llegaban a los reportes porque una búsqueda solo devolvía la primera coincidencia, así que reconstruí las búsquedas y ahora los productos nuevos fluyen automáticamente. Presenté los cambios a actuarios y líderes sénior y reconstruí el deck trimestral de VNB para el liderazgo ejecutivo para que se llene al instante. También gané la competencia de casos de los internos con un equipo de cinco personas diseñando una anualidad NIL para atletas estudiantiles.",
                skills: ["Excel", "VBA", "Validación de Datos", "Automatización", "Pricing de Productos"]
            },
            segal: {
                role: "Internado Actuarial | Consultoría de Retiro",
                date: "Mayo 2025 - Agosto 2025 | Farmington, CT",
                desc: "Hice roll-forwards de valuaciones de pensiones y análisis de ganancias y pérdidas para clientes multiempleador, cargando y validando los datos de los planes y explicando por qué los resultados reales fueron diferentes a lo esperado. También apoyé a actuarios acreditados en las radicaciones gubernamentales anuales. Además, dirigí el proyecto de grupo de los internos, poniendo las fechas límite y la dirección general, y ganó: un sitio de planificación de retiro que combinaba un dashboard (RetireHub) con un chatbot de IA generativa (RetireChat).",
                skills: ["Valuación de Pensiones", "Ganancias y Pérdidas", "Validación de Datos", "Liderazgo de Equipo", "Excel"]
            },
            model: {
                role: "Modelo Profesional",
                date: "Septiembre 2021 - Presente | West Hartford, CT",
                desc: "Modelo profesionalmente junto con la escuela, trabajando con fotógrafos y agencias en sesiones. Balancearlo con mis clases y mis otros roles me ha hecho mejor manejando mi tiempo y adaptándome rápido.",
                skills: ["Adaptabilidad", "Comunicación", "Manejo del Tiempo", "Profesionalismo"]
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
            title: "Herramientas y Habilidades",
            categories: {
                programming: "Programación y Desarrollo",
                ai: "Herramientas de IA y Cloud",
                actuarial: "Actuarial y Análisis",
                professional: "Destrezas Profesionales"
            },
            items: {
                programming: ["Python", "R", "VBA", "React", "HTML/CSS", "Streamlit"],
                ai: ["Claude Code", "Gemini API", "Copilot", "GitHub", "Google Cloud"],
                actuarial: ["Microsoft Excel", "Validación de Datos", "Análisis de Datos", "Modelado Financiero", "Pricing de Productos", "Valuación de Pensiones", "Ganancias y Pérdidas", "Simulación Monte Carlo", "Ponderación de Credibilidad", "Radicaciones Gubernamentales"],
                professional: ["Manejo de Proyectos", "Liderazgo de Equipo", "Hablar en Público", "Planificación de Eventos", "PowerPoint", "Figma", "Español (fluido)", "Inglés (nativo)"]
            }
        },
        // Projects Section
        projects: {
            label: "Proyectos",
            title: "Trabajo Destacado",
            latest: "Lo Más Reciente",
            wakeNote: "Está en el plan gratuito de Streamlit. Si ha estado inactiva, haz clic en el botón para despertarla y espera unos 30 segundos.",
            chatbot: {
                title: "RetireChat: Chatbot de Retiro con IA",
                desc: "La parte del chatbot de nuestro proyecto ganador de internos en Segal, hecho para ayudar a la gente que empieza su carrera a pensar en el retiro. Contesta preguntas de planificación en lenguaje sencillo.",
                link: "Mira el Demo →",
                tech: ["Python", "Streamlit", "Gemini API", "IA Generativa"]
            },
            goldenson: {
                title: "Competencia de Caso Goldenson, 2024",
                desc: "Para esta competencia de caso, investigué segmentos de mercado de bajos ingresos y diseñé una póliza de seguro de vida flexible con contribuciones ajustables, junto con un enfoque de suscripción basado en IA para que la cobertura se ajustara al presupuesto de cada persona. La presentamos a profesionales de la industria.",
                link: "Mira los Detalles →",
                tech: ["Investigación de Mercado", "Modelado de Seguros", "Suscripción con IA", "Presentación"]
            },
            platform: {
                title: "RetireHub: Plataforma de Planificación de Retiro",
                desc: "La parte del dashboard de nuestro proyecto ganador de internos en Segal. Corre cálculos de planificación de retiro y muestra los resultados de forma visual, como prueba de concepto para que los empleados que empiezan su carrera se interesen más en planificar su retiro.",
                link: "Mira la Plataforma →",
                tech: ["JavaScript", "Bootstrap", "Firebase", "Modelos Actuariales"]
            },
            earnings: {
                title: "Earnings Outlook: Prototipo de Planificación de Ingresos para Creadores",
                desc: "Usando los datos publicados de pagos a creadores de Roblox, definí una oportunidad de producto para creadores con ingresos irregulares: el problema del usuario, una métrica de éxito basada en la retención y un MVP de cuatro funciones. Luego construí un prototipo en Python/Streamlit con datos de muestra. Proyecta las ganancias de un creador para los próximos 90 días como un rango Monte Carlo y usa ponderación de credibilidad actuarial para que los creadores nuevos, con poco historial, igual reciban un estimado estable, mostrado como una etiqueta de confianza sencilla.",
                link: "Ver Prototipo →",
                tech: ["Python", "Streamlit", "Simulación Monte Carlo", "Ponderación de Credibilidad"]
            },
            futurescope: {
                title: "FutureScope: App Web de Planificación de Retiro",
                desc: "Una app web de proyección de retiro que construí y lancé. Usa simulación Monte Carlo, crecimiento compuesto y valor presente ajustado por inflación para mostrar un rango realista de resultados en vez de un solo número. La idea salió de una pregunta que la gente fuera del campo me hacía mucho: \"¿me puedes ayudar con mi seguro?\"",
                link: "Ver Calculadora →",
                tech: ["React", "GitHub Pages", "Simulación Monte Carlo", "Valor Presente"]
            }
        },
        // Leadership Section
        leadership: {
            label: "Liderazgo",
            title: "Liderazgo y Participación",
            ola: {
                role: "Comité de Pipeline y Programa Rising Leaders",
                date: "Septiembre 2024 - Presente | Remoto",
                desc: "Ayudo a correr la voz sobre las carreras actuariales. Contacté a más de 8,500 consejeros de escuela superior por todo el país sobre las becas de OLA y Desafiando el Riesgo, su programa en español, y fui panelista en la primera competencia de casos del programa para escuela superior.",
                skills: ["Alcance Comunitario", "Hablar en Público", "Campañas de Email"]
            },
            uas: {
                role: "VP de Desarrollo de Miembros",
                date: "Septiembre 2024 - Presente | Storrs, CT",
                desc: "Desde septiembre de 2026 dirijo un comité de 16 miembros dividido en tres equipos: Engagement para actividades sociales, Peer Learning para talleres y Resources para materiales de los miembros. También escribo nuestros emails de reclutamiento. Antes fui Directora de Recaudación de Fondos, organizando eventos que apoyaron charlas y programación para los miembros, y Directora de DEI, donde organicé el primer evento de DEI de UAS con seis organizaciones de afinidad.",
                skills: ["Liderazgo de Equipo", "Marketing", "Recaudación de Fondos", "DEI"]
            },
            vsa: {
                role: "Co-Directora Financiera (CFO)",
                date: "Septiembre 2024 - Diciembre 2025 | Storrs, CT",
                desc: "Puse los precios de más de 240 unidades de mercancía vendida a nivel nacional, usando datos de ventas anteriores para ajustar cantidades y precios, y armé presupuestos de cuatro cifras para proyectos como el Año Nuevo Lunar de UConn y el lanzamiento de nuestra mercancía. Antes fui Co-Coordinadora de Eventos, organizando eventos cada dos semanas para 60 a 70 personas.",
                skills: ["Análisis de Precios", "Presupuestos", "Planificación de Eventos"]
            },
            associations: {
                label: "Reconocimientos y Membresías",
                items: ["Miembro de ALPFA · Desde 2024", "Programa de Honores de UConn · Desde 2023", "Becaria Spencer · Beca Brown & Brown · 2026"]
            }
        },
        // Achievements Section
        achievements: {
            title: "En Números",
            items: {
                gpa: "Miembros en el comité de UAS que dirijo",
                internship: "Líneas de productos en la herramienta de VNB que mejoré en MassMutual",
                experience: "Consejeros de escuela superior contactados por OLA",
                languages: "Idiomas que hablo fluido"
            }
        },
        // Contact Section
        contact: {
            title: "Escríbeme",
            description: "La mejor forma de contactarme es por email. Me encanta hablar de trabajo actuarial, análisis de datos, roles de producto o cualquiera de los proyectos de arriba.",
            labels: {
                email: "Email",
                phone: "Teléfono",
                linkedin: "LinkedIn",
                location: "Ubicación"
            },
            connect: "Conectar"
        },
        // Footer
        footer: "Todos los derechos reservados",
        ui: { close: "Cerrar", menu: "Secciones" }
    }
};
