import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Header
  "header.title": {
    en: "Pacific Congress 2026",
    es: "Congreso del Pacífico 2026",
  },
  "header.subtitle": {
    en: "Archaeology & Changing Environment",
    es: "Arqueología y Medio Ambiente Cambiante",
  },
  "header.callForPapers": {
    en: "Call for Papers",
    es: "Convocatoria de ponencías",
  },
  "header.areas": {
    en: "Areas",
    es: "Áreas",
  },
  "header.registration": {
    en: "Registration",
    es: "Registro",
  },
  "header.venue": {
    en: "Venue",
    es: "Sede",
  },
  "header.registerNow": {
    en: "Register Now",
    es: "Regístrate Ahora",
  },

  // Congress Hero
  "congressHero.badge": {
    en: "First International Congress",
    es: "Primer Congreso Internacional",
  },
  "congressHero.title1": {
    en: "ARCHEOLOGY CONGRESS:",
    es: "CONGRESO DE ARQUEOLOGÍA:",
  },
  "congressHero.title2": {
    en: "CHANGING ENVIRONMENT",
    es: "MEDIO AMBIENTE CAMBIANTE",
  },
  "congressHero.title3": {
    en: "IN THE PACIFIC",
    es: "EN EL PACÍFICO",
  },
  "congressHero.description": {
    en: "Exploring the dynamic relationship between archaeological heritage and environmental transformations across Pacific regions.",
    es: "Explorando la relación dinámica entre el patrimonio arqueológico y las transformaciones ambientales en las regiones del Pacífico.",
  },
  "congressHero.eventDetails": {
    en: "Join leading researchers in Chile's wine country, on the 18th, 19th, 20th and 21st of November 2026, Santa Cruz, Chile.",
    es: "Únete a investigadores líderes en la región vitivinícola de Chile, el 18, 19, 20 y 21 de noviembre de 2026, Santa Cruz, Chile.",
  },
  "congressHero.submitAbstract": {
    en: "Submit Your Abstract",
    es: "Envía tu Resumen",
  },
  "congressHero.registerNow": {
    en: "Register Now",
    es: "Regístrate Ahora",
  },
  "congressHero.callForPapers": {
    en: "Call for Papers",
    es: "Convocatoria de ponencías",
  },
  "congressHero.iframeTitle": {
    en: "Dryfta Submission Form",
    es: "Formulario de Envío Dryfta",
  },
  "congressHero.closeButton": {
    en: "Close",
    es: "Cerrar",
  },

  // Call for Papers
  "callForPapers.title": {
    en: "Call for Papers",
    es: "Convocatoria de ponencías",
  },
  "callForPapers.description": {
    en: "The First International Congress on Archaeology and Changing Environment in the Pacific invites researchers, scholars, and practitioners to submit their contributions exploring the dynamic relationship between archaeological heritage and environmental transformations across Pacific regions.",
    es: "El Primer Congreso Internacional sobre Arqueología y Medio Ambiente Cambiante en el Pacífico invita a investigadores, académicos y profesionales a enviar sus contribuciones explorando la relación dinámica entre el patrimonio arqueológico y las transformaciones ambientales en las regiones del Pacífico.",
  },
  "callForPapers.importantDates": {
    en: "Important Dates",
    es: "Fechas Importantes",
  },
  "callForPapers.abstractDeadline": {
    en: "Abstract Submission Deadline",
    es: "Fecha Límite de Envío de Resúmenes",
  },
  "callForPapers.abstractDeadlineDate": {
    en: "February 2026",
    es: "Febrero 2026",
  },
  "callForPapers.abstractDeadlineDesc": {
    en: "Submit your 300-word abstract with preliminary findings",
    es: "Envía tu resumen de 300 palabras con hallazgos preliminares",
  },
  "callForPapers.acceptanceNotification": {
    en: "Acceptance Notification",
    es: "Notificación de Aceptación",
  },
  "callForPapers.acceptanceDate": {
    en: "April 2026",
    es: "Abril 2026",
  },
  "callForPapers.acceptanceDesc": {
    en: "Scientific committee will notify acceptance decisions",
    es: "El comité científico notificará las decisiones de aceptación",
  },
  "callForPapers.fullPaperSubmission": {
    en: "Full Paper Submission",
    es: "Envío de Artículo Completo",
  },
  "callForPapers.fullPaperDate": {
    en: "June 2026",
    es: "Junio 2026",
  },
  "callForPapers.fullPaperDesc": {
    en: "Complete manuscripts for publication consideration",
    es: "Manuscritos completos para consideración de publicación",
  },
  "callForPapers.awards": {
    en: "Awards & Recognition",
    es: "Premios y Reconocimientos",
  },
  "callForPapers.bestProfessional": {
    en: "Best Professional Paper",
    es: "Mejor Artículo Profesional",
  },
  "callForPapers.professionalDesc": {
    en: "Outstanding research contribution",
    es: "Contribución de investigación destacada",
  },
  "callForPapers.bestStudent": {
    en: "Best Student Paper",
    es: "Mejor Artículo de Estudiante",
  },
  "callForPapers.studentDesc": {
    en: "Excellence in student research",
    es: "Excelencia en investigación estudiantil",
  },
  "callForPapers.bestRetired": {
    en: "Best Retired Scholar Paper",
    es: "Mejor Artículo de Académico Retirado",
  },
  "callForPapers.retiredDesc": {
    en: "Lifetime achievement recognition",
    es: "Reconocimiento por trayectoria",
  },
  "callForPapers.readyToSubmit": {
    en: "Ready to Submit?",
    es: "¿Listo para Enviar?",
  },
  "callForPapers.submitDescription": {
    en: "Join leading researchers from around the Pacific in this groundbreaking congress. Submit your abstract and be part of shaping the future of Pacific archaeology.",
    es: "Únete a investigadores líderes de todo el Pacífico en este congreso innovador. Envía tu resumen y forma parte del futuro de la arqueología del Pacífico.",
  },
  "callForPapers.submitAbstract": {
    en: "Submit Abstract",
    es: "Enviar Resumen",
  },
  "callForPapers.downloadGuidelines": {
    en: "Download Guidelines",
    es: "Descargar Directrices",
  },
  "callForPapers.interdisciplinary": {
    en: "Interdisciplinary Studies",
    es: "Estudios Interdisciplinarios",
  },
  "callForPapers.interdisciplinaryDesc": {
    en: "We encourage submissions that bridge multiple areas of reflection and scales of analysis. The most innovative research often emerges at the intersection of archaeological evidence, environmental data, and cultural interpretation. Consider how your work contributes to our broader understanding of human-environment interactions in the pacific region.",
    es: "Alentamos presentaciones que bridgen múltiples áreas de reflexión y escalas de análisis. La investigación más innovadora a menudo surge en la intersección de evidencia arqueológica, datos ambientales e interpretación cultural. Considera cómo tu trabajo contribuye a nuestra comprensión más amplia de las interacciones humano-ambiente en la región del Pacífico.",
  },

  // Areas of Reflection
  "areas.title": {
    en: "Areas of Reflection",
    es: "Áreas de Reflexión",
  },
  "areas.description": {
    en: "Our congress welcomes diverse perspectives across multiple scales of archaeological inquiry, from local site studies to trans-Pacific comparative analyses.",
    es: "Nuestro congreso da la bienvenida a diversas perspectivas a través de múltiples escalas de investigación arqueológica, desde estudios de sitios locales hasta análisis comparativos trans-Pacífico.",
  },
  "areas.regionalScale": {
    en: "Regional Scale",
    es: "Escala Regional",
  },
  "areas.temporalScale": {
    en: "Temporal Scale",
    es: "Escala Temporal",
  },
  "areas.socialScale": {
    en: "Social Scale",
    es: "Escala Social",
  },
  "areas.environmentalScale": {
    en: "Environmental Scale",
    es: "Escala Ambiental",
  },
  "areas.globalScale": {
    en: "Global Scale",
    es: "Escala Global",
  },
  "areas.conservationScale": {
    en: "Conservation Scale",
    es: "Escala de Conservación",
  },
  "areas.islands.title": {
    en: "Archaeology of Islands",
    es: "Arqueología de Islas",
  },
  "areas.islands.desc": {
    en: "Investigating island societies, maritime adaptations, and cultural evolution in Pacific archipelagos. Focus on settlement patterns, resource management, and inter-island connections.",
    es: "Investigando sociedades insulares, adaptaciones marítimas y evolución cultural en archipiélagos del Pacífico. Enfoque en patrones de asentamiento, gestión de recursos y conexiones entre islas.",
  },
  "areas.cultural.title": {
    en: "Cultural Changes",
    es: "Cambios Culturales",
  },
  "areas.cultural.desc": {
    en: "Examining cultural transformations across different time periods, including pre-contact, colonial, and modern eras. Analysis of social structures, technological innovations, and belief systems.",
    es: "Examinando transformaciones culturales a través de diferentes períodos de tiempo, incluyendo eras precontacto, colonial y moderna. Análisis de estructuras sociales, innovaciones tecnológicas y sistemas de creencias.",
  },
  "areas.diseases.title": {
    en: "Colonial Diseases & Impact",
    es: "Enfermedades Coloniales e Impacto",
  },
  "areas.diseases.desc": {
    en: "Bioarchaeological studies of disease patterns, demographic changes, and health impacts during colonial periods. Understanding population dynamics and cultural responses.",
    es: "Estudios bioarqueológicos de patrones de enfermedades, cambios demográficos e impactos en la salud durante períodos coloniales. Comprendiendo dinámicas poblacionales y respuestas culturales.",
  },
  "areas.climate.title": {
    en: "Climate & Environmental Change",
    es: "Cambio Climático y Ambiental",
  },
  "areas.climate.desc": {
    en: "Studying past climate variations, sea-level changes, and environmental adaptations. Paleoenvironmental reconstruction and human-environment interactions.",
    es: "Estudiando variaciones climáticas pasadas, cambios del nivel del mar y adaptaciones ambientales. Reconstrucción paleoambiental e interacciones humano-ambiente.",
  },
  "areas.transpacific.title": {
    en: "Trans-Pacific Connections",
    es: "Conexiones Trans-Pacífico",
  },
  "areas.transpacific.desc": {
    en: "Exploring long-distance trade networks, migration patterns, and cultural exchanges across the Pacific Ocean. Evidence for pre-Columbian contact and interaction.",
    es: "Explorando redes comerciales de larga distancia, patrones migratorios e intercambios culturales a través del Océano Pacífico. Evidencia de contacto e interacción precolombina.",
  },
  "areas.preservation.title": {
    en: "Site Preservation & Heritage",
    es: "Preservación de Sitios y Patrimonio",
  },
  "areas.preservation.desc": {
    en: "Addressing contemporary challenges in archaeological site preservation, heritage management, and community engagement in the face of environmental threats.",
    es: "Abordando desafíos contemporáneos en la preservación de sitios arqueológicos, gestión del patrimonio y participación comunitaria ante amenazas ambientales.",
  },
  "areas.multiScale.title": {
    en: "Multi-Scale Integration",
    es: "Integración Multi-Escala",
  },
  "areas.multiScale.desc": {
    en: "We especially encourage submissions that integrate multiple scales of analysis, combining local archaeological evidence with regional patterns and global contexts. Interdisciplinary approaches connecting archaeology with climatology, oceanography, and cultural anthropology are particularly welcome.",
    es: "Especialmente alentamos presentaciones que integren múltiples escalas de análisis, combinando evidencia arqueológica local con patrones regionales y contextos globales. Los enfoques interdisciplinarios que conectan la arqueología con la climatología, oceanografía y antropología cultural son particularmente bienvenidos.",
  },

  // Registration Fees
  "registration.title": {
    en: "Registration Fees",
    es: "Tarifas de Registro",
  },
  "registration.description": {
    en: "Choose your registration category and secure your place at this groundbreaking congress. All fees include full access to sessions, materials, and networking events.",
    es: "Elige tu categoría de registro y asegura tu lugar en este congreso innovador. Todas las tarifas incluyen acceso completo a sesiones, materiales y eventos de networking.",
  },
  "registration.generalPublic": {
    en: "General Public",
    es: "Público General",
  },
  "registration.generalPublic.desc": {
    en: "International participants and professionals",
    es: "Participantes internacionales y profesionales",
  },
  "registration.chilean": {
    en: "Chilean Participants",
    es: "Participantes Chilenos",
  },
  "registration.chilean.desc": {
    en: "Special rate for Chilean residents",
    es: "Tarifa especial para residentes chilenos",
  },
  "registration.chileanRate": {
    en: "Chilean Rate",
    es: "Tarifa Chilena",
  },
  "registration.students": {
    en: "Students",
    es: "Estudiantes",
  },
  "registration.students.desc": {
    en: "Valid student ID required",
    es: "Se requiere identificación de estudiante válida",
  },
  "registration.retired": {
    en: "Retired Participants",
    es: "Participantes Retirados",
  },
  "registration.retired.desc": {
    en: "Retired academics and professionals",
    es: "Académicos y profesionales retirados",
  },
  "registration.fullAccess": {
    en: "Full congress access",
    es: "Acceso completo al congreso",
  },
  "registration.welcomeReception": {
    en: "Welcome reception",
    es: "Recepción de bienvenida",
  },
  "registration.materials": {
    en: "Conference materials",
    es: "Materiales de conferencia",
  },
  "registration.coffeeBreaks": {
    en: "Coffee breaks",
    es: "Coffee breaks",
  },
  "registration.closingCeremony": {
    en: "Closing ceremony",
    es: "Ceremonia de clausura",
  },
  "registration.studentNetworking": {
    en: "Student networking session",
    es: "Sesión de networking estudiantil",
  },
  "registration.mentorship": {
    en: "Mentorship opportunities",
    es: "Oportunidades de mentoría",
  },
  "registration.seniorReception": {
    en: "Senior scholars reception",
    es: "Recepción para académicos senior",
  },
  "registration.legacyPresentation": {
    en: "Legacy presentation session",
    es: "Sesión de presentación de legado",
  },
  "registration.registerNow": {
    en: "Register Now",
    es: "Regístrate Ahora",
  },
  "registration.paymentInfo": {
    en: "Payment Information",
    es: "Información de Pago",
  },
  "registration.paymentMethods": {
    en: "Accepted Payment Methods",
    es: "Métodos de Pago Aceptados",
  },
  "registration.paymentMethods.desc": {
    en: "Credit cards, bank transfers, and PayPal",
    es: "Tarjetas de crédito, transferencias bancarias y PayPal",
  },
  "registration.earlyBird": {
    en: "Early Bird Discount",
    es: "Descuento por Reserva Anticipada",
  },
  "registration.earlyBird.desc": {
    en: "10% off for registrations before January 2026",
    es: "10% de descuento para registros antes de enero 2026",
  },
  "registration.groupDiscount": {
    en: "Group Discounts",
    es: "Descuentos Grupales",
  },
  "registration.groupDiscount.desc": {
    en: "5% off for groups of 5+ participants",
    es: "5% de descuento para grupos de 5+ participantes",
  },
  "registration.whatsIncluded": {
    en: "What's Included",
    es: "Qué Está Incluido",
  },
  "registration.scientificSessions": {
    en: "Access to all scientific sessions",
    es: "Acceso a todas las sesiones científicas",
  },
  "registration.ceremonies": {
    en: "Welcome and closing ceremonies",
    es: "Ceremonias de bienvenida y clausura",
  },
  "registration.materialsAbstracts": {
    en: "All conference materials and abstracts",
    es: "Todos los materiales y resúmenes de la conferencia",
  },
  "registration.networking": {
    en: "Coffee breaks and networking sessions",
    es: "Coffee breaks y sesiones de networking",
  },
  "registration.certificate": {
    en: "Certificate of participation",
    es: "Certificado de participación",
  },
  "registration.virtualPlatform": {
    en: "Access to virtual platform (post-congress)",
    es: "Acceso a plataforma virtual (post-congreso)",
  },

  // Venue & Location
  "venue.title": {
    en: "Venue & Location",
    es: "Sede y Ubicación",
  },
  "venue.description": {
    en: "Join us at the prestigious Hotel Santa Cruz in Chile's renowned Colchagua Valley, a perfect setting that combines academic excellence with cultural heritage.",
    es: "Únete a nosotros en el prestigioso Hotel Santa Cruz en el renombrado Valle de Colchagua de Chile, un escenario perfecto que combina excelencia académica con patrimonio cultural.",
  },
  "venue.hotelName": {
    en: "Hotel Santa Cruz",
    es: "Hotel Santa Cruz",
  },
  "venue.address": {
    en: "Address",
    es: "Dirección",
  },
  "venue.addressText": {
    en: "Plaza de Armas s/n, Santa Cruz",
    es: "Plaza de Armas s/n, Santa Cruz",
  },
  "venue.addressText2": {
    en: "Colchagua Valley, Sixth Region of Chile",
    es: "Valle de Colchagua, Sexta Región de Chile",
  },
  "venue.facilities": {
    en: "World-Class Facilities",
    es: "Instalaciones de Clase Mundial",
  },
  "venue.facilities.desc": {
    en: "State-of-the-art conference rooms, high-speed internet, simultaneous translation capabilities, and audio-visual equipment",
    es: "Salas de conferencias de última generación, internet de alta velocidad, capacidades de traducción simultánea y equipo audiovisual",
  },
  "venue.accommodation": {
    en: "Accommodation",
    es: "Alojamiento",
  },
  "venue.accommodation.desc": {
    en: "Luxury rooms with valley views, spa services, and fine dining options. Special congress rates available for attendees.",
    es: "Habitaciones de lujo con vistas al valle, servicios de spa y opciones gastronómicas. Tarifas especiales del congreso disponibles para asistentes.",
  },
  "venue.gettingThere": {
    en: "Getting There",
    es: "Cómo Llegar",
  },
  "venue.fromSantiago": {
    en: "From Santiago",
    es: "Desde Santiago",
  },
  "venue.fromSantiago.desc": {
    en: "2 hours drive via Ruta 5 Sur. Shuttle service available from Santiago airport.",
    es: "2 horas en auto por Ruta 5 Sur. Servicio de transporte disponible desde el aeropuerto de Santiago.",
  },
  "venue.internationalFlights": {
    en: "International Flights",
    es: "Vuelos Internacionales",
  },
  "venue.internationalFlights.desc": {
    en: "Fly to Santiago (SCL), then ground transport to venue.",
    es: "Vuelo a Santiago (SCL), luego transporte terrestre a la sede.",
  },
  "venue.colchaguaValley": {
    en: "Colchagua Valley",
    es: "Valle de Colchagua",
  },
  "venue.unescoBadge": {
    en: "A UNESCO World Heritage wine region. Located in Chile's 6th Region, it is the vibrant heart of the famous Wine Route.",
    es: "Región vitivinícola Patrimonio Mundial de la UNESCO. Ubicada en la sexta región de Chile, es el corazón vibrante de la famosa Ruta del Vino.",
  },
  "venue.santaCruzMap.title": {
    en: "Santa Cruz, Colchagua",
    es: "Santa Cruz, Colchagua",
  },
  "venue.santaCruzMap.description": {
    en: "Discover Santa Cruz, a charming locality in Chile's 6th Region. Situated in the heart of the Wine Route, it blends colonial heritage with modern viticulture.",
    es: "Descubre Santa Cruz, una encantadora localidad en la sexta región de Chile. Situada en el corazón de la Ruta del Vino, combina herencia colonial con viticultura moderna.",
  },
  "venue.wineHeritage": {
    en: "Wine Heritage",
    es: "Patrimonio Vinícola",
  },
  "venue.wineHeritage.desc": {
    en: "World-renowned vineyards and wine tastings",
    es: "Viñedos de renombre mundial y degustaciones de vino",
  },
  "venue.scenicBeauty": {
    en: "Scenic Beauty",
    es: "Belleza Escénica",
  },
  "venue.scenicBeauty.desc": {
    en: "Andean foothills and rolling vineyard landscapes",
    es: "Estribaciones andinas y paisajes de viñedos ondulantes",
  },
  "venue.culturalImmersion": {
    en: "Cultural Immersion",
    es: "Inmersión Cultural",
  },
  "venue.culturalImmersion.desc": {
    en: "Beyond the academic sessions, immerse yourself in Chilean culture and heritage. The Colchagua Valley offers unique opportunities to explore local archaeology, colonial history, and indigenous traditions, making it an ideal setting for our Pacific congress.",
    es: "Más allá de las sesiones académicas, sumérgete en la cultura y el patrimonio chileno. El Valle de Colchagua ofrece oportunidades únicas para explorar la arqueología local, la historia colonial y las tradiciones indígenas, convirtiéndolo en un escenario ideal para nuestro congreso del Pacífico.",
  },
  "venue.bookAccommodation": {
    en: "Book Accommodation",
    es: "Reservar Alojamiento",
  },
  "venue.downloadGuide": {
    en: "Download Travel Guide",
    es: "Descargar Guía de Viaje",
  },

  // Pacific Gallery
  "gallery.title": {
    en: "Pacific Archaeological Heritage",
    es: "Patrimonio Arqueológico del Pacífico",
  },
  "gallery.description": {
    en: "Discover the remarkable archaeological sites across the Pacific that showcase humanity's adaptation to island environments and changing climates through millennia.",
    es: "Descubre los notables sitios arqueológicos a través del Pacífico que muestran la adaptación de la humanidad a los entornos insulares y climas cambiantes a través de milenios.",
  },
  "gallery.rapaNui.name": {
    en: "Rapa Nui (Easter Island)",
    es: "Rapa Nui (Isla de Pascua)",
  },
  "gallery.rapaNui.location": {
    en: "Chile",
    es: "Chile",
  },
  "gallery.rapaNui.desc": {
    en: "Iconic moai statues and ceremonial platforms representing Polynesian megalithic culture",
    es: "Icónicas estatuas moai y plataformas ceremoniales que representan la cultura megalítica polinesia",
  },
  "gallery.rapaNui.highlight1": {
    en: "Moai Statues",
    es: "Estatuas Moai",
  },
  "gallery.rapaNui.highlight2": {
    en: "Ceremonial Platforms",
    es: "Plataformas Ceremoniales",
  },
  "gallery.rapaNui.highlight3": {
    en: "Polynesian Heritage",
    es: "Patrimonio Polinesio",
  },
  "gallery.hawaii.name": {
    en: "Hawaiian Heiau",
    es: "Heiau Hawaiano",
  },
  "gallery.hawaii.location": {
    en: "Hawaii, USA",
    es: "Hawaii, EE.UU.",
  },
  "gallery.hawaii.desc": {
    en: "Ancient temple complexes showcasing sophisticated Polynesian religious architecture",
    es: "Antiguos complejos de templos que muestran la sofisticada arquitectura religiosa polinesia",
  },
  "gallery.hawaii.highlight1": {
    en: "Temple Complexes",
    es: "Complejos de Templos",
  },
  "gallery.hawaii.highlight2": {
    en: "Sacred Spaces",
    es: "Espacios Sagrados",
  },
  "gallery.hawaii.highlight3": {
    en: "Stone Architecture",
    es: "Arquitectura de Piedra",
  },
  "gallery.tahiti.name": {
    en: "Tahitian Marae",
    es: "Marae Tahitiano",
  },
  "gallery.tahiti.location": {
    en: "French Polynesia",
    es: "Polinesia Francesa",
  },
  "gallery.tahiti.desc": {
    en: "Stone temple platforms revealing complex social and religious hierarchies",
    es: "Plataformas de templos de piedra que revelan complejas jerarquías sociales y religiosas",
  },
  "gallery.tahiti.highlight1": {
    en: "Stone Platforms",
    es: "Plataformas de Piedra",
  },
  "gallery.tahiti.highlight2": {
    en: "Religious Centers",
    es: "Centros Religiosos",
  },
  "gallery.tahiti.highlight3": {
    en: "Social Complexity",
    es: "Complejidad Social",
  },
  "gallery.keyFeatures": {
    en: "Key Features",
    es: "Características Clave",
  },
  "gallery.connecting.title": {
    en: "Connecting Pacific Cultures",
    es: "Conectando Culturas del Pacífico",
  },
  "gallery.connecting.desc": {
    en: "These iconic sites represent just a fraction of the rich archaeological heritage spanning the Pacific. Our congress will explore how environmental changes have shaped these cultures and how they, in turn, have adapted their environments across thousands of years.",
    es: "Estos sitios icónicos representan solo una fracción del rico patrimonio arqueológico que abarca el Pacífico. Nuestro congreso explorará cómo los cambios ambientales han moldeado estas culturas y cómo ellas, a su vez, han adaptado sus entornos a lo largo de miles de años.",
  },
  "gallery.stats.sites": {
    en: "Archaeological Sites",
    es: "Sitios Arqueológicos",
  },
  "gallery.stats.islands": {
    en: "Pacific Islands",
    es: "Islas del Pacífico",
  },
  "gallery.stats.history": {
    en: "Years of History",
    es: "Años de Historia",
  },

  // Areas of Reflection Gallery
  "areasGallery.islands.title": {
    en: "Archaeology of Islands",
    es: "Arqueología de Islas",
  },
  "areasGallery.islands.desc": {
    en: "Exploring the unique archaeological record of Pacific islands and their environmental contexts.",
    es: "Explorando el registro arqueológico único de las islas del Pacífico y sus contextos ambientales.",
  },
  "areasGallery.islands.scale": {
    en: "Regional Scale",
    es: "Escala Regional",
  },
  "areasGallery.islands.topic1": {
    en: "Island colonization patterns",
    es: "Patrones de colonización insular",
  },
  "areasGallery.islands.topic2": {
    en: "Maritime archaeology",
    es: "Arqueología marítima",
  },
  "areasGallery.islands.topic3": {
    en: "Settlement evolution",
    es: "Evolución de asentamientos",
  },
  "areasGallery.islands.topic4": {
    en: "Resource management strategies",
    es: "Estrategias de gestión de recursos",
  },
  "areasGallery.cultural.title": {
    en: "Cultural Changes",
    es: "Cambios Culturales",
  },
  "areasGallery.cultural.desc": {
    en: "Investigating how Pacific cultures adapted to environmental and social transformations.",
    es: "Investigando cómo las culturas del Pacífico se adaptaron a las transformaciones ambientales y sociales.",
  },
  "areasGallery.cultural.scale": {
    en: "Cultural Scale",
    es: "Escala Cultural",
  },
  "areasGallery.cultural.topic1": {
    en: "Technological innovation",
    es: "Innovación tecnológica",
  },
  "areasGallery.cultural.topic2": {
    en: "Social organization changes",
    es: "Cambios en la organización social",
  },
  "areasGallery.cultural.topic3": {
    en: "Religious and ritual evolution",
    es: "Evolución religiosa y ritual",
  },
  "areasGallery.cultural.topic4": {
    en: "Trade network development",
    es: "Desarrollo de redes comerciales",
  },
  "areasGallery.diseases.title": {
    en: "Colonial Diseases",
    es: "Enfermedades Coloniales",
  },
  "areasGallery.diseases.desc": {
    en: "Examining the impact of introduced diseases on Pacific populations and their archaeological signatures.",
    es: "Examinando el impacto de las enfermedades introducidas en las poblaciones del Pacífico y sus firmas arqueológicas.",
  },
  "areasGallery.diseases.scale": {
    en: "Temporal Scale",
    es: "Escala Temporal",
  },
  "areasGallery.diseases.topic1": {
    en: "Population decline indicators",
    es: "Indicadores de declive poblacional",
  },
  "areasGallery.diseases.topic2": {
    en: "Cemetery and burial changes",
    es: "Cambios en cementerios y entierros",
  },
  "areasGallery.diseases.topic3": {
    en: "Settlement abandonment",
    es: "Abandono de asentamientos",
  },
  "areasGallery.diseases.topic4": {
    en: "Health and nutrition markers",
    es: "Marcadores de salud y nutrición",
  },
  "areasGallery.climate.title": {
    en: "Climate and Environment",
    es: "Clima y Medio Ambiente",
  },
  "areasGallery.climate.desc": {
    en: "Understanding the relationship between climate change and archaeological evidence.",
    es: "Comprendiendo la relación entre el cambio climático y la evidencia arqueológica.",
  },
  "areasGallery.climate.scale": {
    en: "Environmental Scale",
    es: "Escala Ambiental",
  },
  "areasGallery.climate.topic1": {
    en: "Sea level fluctuations",
    es: "Fluctuaciones del nivel del mar",
  },
  "areasGallery.climate.topic2": {
    en: "Agricultural adaptations",
    es: "Adaptaciones agrícolas",
  },
  "areasGallery.climate.topic3": {
    en: "Extreme weather events",
    es: "Eventos climáticos extremos",
  },
  "areasGallery.climate.topic4": {
    en: "Ecosystem transformations",
    es: "Transformaciones del ecosistema",
  },
  "areasGallery.coastal.title": {
    en: "Coastal Archaeology",
    es: "Arqueología Costera",
  },
  "areasGallery.coastal.desc": {
    en: "Investigating coastal sites and their vulnerability to environmental change.",
    es: "Investigando sitios costeros y su vulnerabilidad al cambio ambiental.",
  },
  "areasGallery.coastal.scale": {
    en: "Spatial Scale",
    es: "Escala Espacial",
  },
  "areasGallery.coastal.topic1": {
    en: "Shoreline migration",
    es: "Migración de la línea costera",
  },
  "areasGallery.coastal.topic2": {
    en: "Marine resource exploitation",
    es: "Explotación de recursos marinos",
  },
  "areasGallery.coastal.topic3": {
    en: "Coastal fortifications",
    es: "Fortificaciones costeras",
  },
  "areasGallery.coastal.topic4": {
    en: "Harbor and port development",
    es: "Desarrollo de puertos y bahías",
  },
  "areasGallery.paleo.title": {
    en: "Paleoenvironmental Reconstruction",
    es: "Reconstrucción Paleoambiental",
  },
  "areasGallery.paleo.desc": {
    en: "Combining archaeological and environmental data to understand past landscapes.",
    es: "Combinando datos arqueológicos y ambientales para comprender paisajes pasados.",
  },
  "areasGallery.paleo.scale": {
    en: "Methodological Scale",
    es: "Escala Metodológica",
  },
  "areasGallery.paleo.topic1": {
    en: "Palynological studies",
    es: "Estudios palinológicos",
  },
  "areasGallery.paleo.topic2": {
    en: "Sediment analysis",
    es: "Análisis de sedimentos",
  },
  "areasGallery.paleo.topic3": {
    en: "Carbon dating applications",
    es: "Aplicaciones de datación por carbono",
  },
  "areasGallery.paleo.topic4": {
    en: "GIS and spatial analysis",
    es: "SIG y análisis espacial",
  },
  "areasGallery.areasOf": {
    en: "I_ Areas",
    es: "I_ Áreas",
  },
  "areasGallery.ofReflection": {
    en: "Of Reflection",
    es: "De Reflexión",
  },
  "areasGallery.galleryDesc": {
    en: "Our congress explores multiple scales of analysis, from local site studies to regional environmental patterns, fostering interdisciplinary dialogue.",
    es: "Nuestro congreso explora múltiples escalas de análisis, desde estudios de sitios locales hasta patrones ambientales regionales, fomentando el diálogo interdisciplinario.",
  },
  "areasGallery.keyTopics": {
    en: "Key Topics:",
    es: "Temas Clave:",
  },
  "areasGallery.interdisciplinary.title": {
    en: "Interdisciplinary Studies",
    es: "Estudios Interdisciplinarios",
  },
  "areasGallery.interdisciplinary.desc": {
    en: "We encourage submissions that bridge multiple areas of reflection and scales of analysis. The most innovative research often emerges at the intersection of archaeological evidence, environmental data, and cultural interpretation. Consider how your work contributes to our broader understanding of human-environment interactions in the Pacific region",
    es: "Alentamos presentaciones que conecten múltiples áreas de reflexión y escalas de análisis. La investigación más innovadora a menudo emerge en la intersección de evidencia arqueológica, datos ambientales e interpretación cultural. Considere cómo su trabajo contribuye a nuestra comprensión más amplia de las interacciones humano-ambiente en la región del Pacífico",
  },

  // Committee Wheel
  "committeeWheel.congress": {
    en: "Congress",
    es: "Congreso",
  },
  "committeeWheel.hoverOverName": {
    en: "Hover over a name",
    es: "Pasa el ratón sobre un nombre",
  },

  // Scientific Committee
  "committee.title": {
    en: "International Scientific Committee",
    es: "Comité Científico Internacional",
  },
  "committee.description": {
    en: "Our distinguished panel of experts represents the finest minds in Pacific archaeology, bringing together diverse perspectives from across the Pacific rim and beyond.",
    es: "Nuestro distinguido panel de expertos representa las mentes más brillantes en arqueología del Pacífico, reuniendo diversas perspectivas de todo el borde del Pacífico y más allá.",
  },
  "committee.globalExpertise": {
    en: "Global Expertise",
    es: "Experiencia Global",
  },
  "committee.globalExpertise.desc": {
    en: "Representatives from leading institutions across the Pacific region, ensuring diverse perspectives and comprehensive review standards.",
    es: "Representantes de instituciones líderes en la región del Pacífico, asegurando perspectivas diversas y estándares de revisión exhaustivos.",
  },
  "committee.rigorousReview": {
    en: "Rigorous Review",
    es: "Revisión Rigurosa",
  },
  "committee.rigorousReview.desc": {
    en: "Double-blind peer review process ensuring the highest academic standards and fair evaluation of all submissions.",
    es: "Proceso de revisión por pares doble ciego que garantiza los más altos estándares académicos y una evaluación justa de todas las presentaciones.",
  },
  "committee.publicationSupport": {
    en: "Publication Support",
    es: "Apoyo a Publicación",
  },
  "committee.publicationSupport.desc": {
    en: "Selected papers will be considered for publication in leading archaeological journals and special congress proceedings.",
    es: "Los artículos seleccionados serán considerados para publicación en revistas arqueológicas líderes y actas especiales del congreso.",
  },
  "committee.chair": {
    en: "Chair, International Scientific Committee",
    es: "Presidente, Comité Científico Internacional",
  },
  "committee.viceChair": {
    en: "Vice-Chair",
    es: "Vicepresidente",
  },
  "committee.member": {
    en: "Committee Member",
    es: "Miembro del Comité",
  },
  "committee.responsibilities": {
    en: "Committee Responsibilities",
    es: "Responsabilidades del Comité",
  },
  "committee.abstractReview": {
    en: "Abstract Review",
    es: "Revisión de Resúmenes",
  },
  "committee.abstractReview.desc": {
    en: "Evaluate submissions for scientific merit, relevance, and innovation",
    es: "Evaluar presentaciones por mérito científico, relevancia e innovación",
  },
  "committee.programDevelopment": {
    en: "Program Development",
    es: "Desarrollo del Programa",
  },
  "committee.programDevelopment.desc": {
    en: "Design thematic sessions and facilitate interdisciplinary dialogue",
    es: "Diseñar sesiones temáticas y facilitar el diálogo interdisciplinario",
  },
  "committee.qualityAssurance": {
    en: "Quality Assurance",
    es: "Aseguramiento de Calidad",
  },
  "committee.qualityAssurance.desc": {
    en: "Maintain high academic standards and promote best practices",
    es: "Mantener altos estándares académicos y promover mejores prácticas",
  },

  // Additional Areas of Reflection (New Research Topics)
  "areas.culturalScale": {
    en: "Cultural Scale",
    es: "Escala Cultural",
  },
  "areas.linguisticScale": {
    en: "Linguistic Scale",
    es: "Escala Lingüística",
  },
  "areas.navigationScale": {
    en: "Navigation Scale",
    es: "Escala de Navegación",
  },
  "areas.architecturalScale": {
    en: "Architectural Scale",
    es: "Escala Arquitectónica",
  },
  "areas.arts.title": {
    en: "Arts & Cultural Artifacts",
    es: "Artes y Artefactos Culturales",
  },
  "areas.arts.desc": {
    en: "Studying traditional art forms, petroglyphs, wood carving, stone sculpture, and cultural motifs that reflect Pacific societies' artistic expressions and symbolic systems.",
    es: "Estudiando formas de arte tradicional, petroglifos, talla en madera, escultura en piedra y motivos culturales que reflejan las expresiones artísticas y sistemas simbólicos de las sociedades del Pacífico.",
  },
  "areas.languages.title": {
    en: "Polynesian Languages",
    es: "Lenguas Polinesias",
  },
  "areas.languages.desc": {
    en: "Examining language families, linguistic evolution, and Proto-Polynesian connections. Understanding how language preservation and comparative linguistics inform cultural relationships.",
    es: "Examinando familias lingüísticas, evolución lingüística y conexiones proto-polinesias. Comprendiendo cómo la preservación del lenguaje y la lingüística comparada informan las relaciones culturales.",
  },
  "areas.wayfinding.title": {
    en: "Traditional Wayfinding & Navigation",
    es: "Navegación y Orientación Tradicional",
  },
  "areas.wayfinding.desc": {
    en: "Investigating traditional navigation techniques including star navigation, ocean currents, wave patterns, and celestial navigation that enabled trans-Pacific voyaging.",
    es: "Investigando técnicas de navegación tradicional incluyendo navegación estelar, corrientes oceánicas, patrones de olas y navegación celeste que permitieron viajes trans-Pacífico.",
  },
  "areas.megalithic.title": {
    en: "Megalithic Architecture",
    es: "Arquitectura Megalítica",
  },
  "areas.megalithic.desc": {
    en: "Exploring stone platforms (ahu, heiau, marae), megalithic construction techniques, engineering innovations, and ceremonial structures across the Pacific.",
    es: "Explorando plataformas de piedra (ahu, heiau, marae), técnicas de construcción megalítica, innovaciones de ingeniería y estructuras ceremoniales a través del Pacífico.",
  },

  // Conference Schedule
  "schedule.title": {
    en: "Conference Schedule",
    es: "Programa del Congreso",
  },
  "schedule.description": {
    en: "Explore our comprehensive seven-day program featuring keynote presentations, concurrent sessions, workshops, and field trips across Pacific archaeology and environmental change themes.",
    es: "Explora nuestro programa integral de siete días que incluye presentaciones magistrales, sesiones concurrentes, talleres y excursiones sobre temas de arqueología del Pacífico y cambio ambiental.",
  },
  "schedule.downloadProgram": {
    en: "Download Full Program (PDF)",
    es: "Descargar Programa Completo (PDF)",
  },
  "schedule.headers.event": {
    en: "Event",
    es: "Evento",
  },
  "schedule.headers.time": {
    en: "Time",
    es: "Hora",
  },
  "schedule.headers.type": {
    en: "Type",
    es: "Tipo",
  },
  "schedule.headers.location": {
    en: "Location",
    es: "Ubicación",
  },
  "schedule.sessionTypes": {
    en: "Session Types",
    es: "Tipos de Sesión",
  },
  "schedule.type.keynote": {
    en: "Keynote",
    es: "Magistral",
  },
  "schedule.type.plenary": {
    en: "Plenary",
    es: "Plenaria",
  },
  "schedule.type.concurrent": {
    en: "Concurrent",
    es: "Concurrente",
  },
  "schedule.type.workshop": {
    en: "Workshop",
    es: "Taller",
  },
  "schedule.type.panel": {
    en: "Panel",
    es: "Panel",
  },
  "schedule.type.poster": {
    en: "Poster Session",
    es: "Sesión de Pósters",
  },
  "schedule.type.fieldtrip": {
    en: "Field Trip",
    es: "Excursión",
  },
  "schedule.type.social": {
    en: "Social Event",
    es: "Evento Social",
  },
  "schedule.coffeeBreak": {
    en: "Coffee Break & Networking",
    es: "Coffee Break y Networking",
  },
  "schedule.lunchBreak": {
    en: "Lunch Break",
    es: "Almuerzo",
  },
  "schedule.location.lobby": {
    en: "Main Lobby",
    es: "Lobby Principal",
  },
  "schedule.location.grandHall": {
    en: "Grand Hall",
    es: "Salón Principal",
  },
  "schedule.location.terrace": {
    en: "Garden Terrace",
    es: "Terraza Jardín",
  },
  "schedule.location.multiple": {
    en: "Multiple Rooms (A, B, C)",
    es: "Salones Múltiples (A, B, C)",
  },
  "schedule.location.dining": {
    en: "Dining Hall",
    es: "Comedor",
  },
  "schedule.location.exhibitHall": {
    en: "Exhibition Hall",
    es: "Sala de Exhibición",
  },
  "schedule.location.ballroom": {
    en: "Grand Ballroom",
    es: "Salón de Baile",
  },
  "schedule.location.roomA": {
    en: "Conference Room A",
    es: "Sala de Conferencias A",
  },
  "schedule.location.roomB": {
    en: "Conference Room B",
    es: "Sala de Conferencias B",
  },
  "schedule.location.vineyard": {
    en: "Vineyard Terrace",
    es: "Terraza del Viñedo",
  },

  // Day 1
  "schedule.day1.name": {
    en: "Day 1",
    es: "Día 1",
  },
  "schedule.day1.session1.title": {
    en: "Registration & Welcome Coffee",
    es: "Registro y Café de Bienvenida",
  },
  "schedule.day1.session2.title": {
    en: "Opening Ceremony",
    es: "Ceremonia de Apertura",
  },
  "schedule.day1.session2.speakers": {
    en: "Dr. Maria Rodriguez, Congress Chair",
    es: "Dra. Maria Rodriguez, Presidenta del Congreso",
  },
  "schedule.day1.session2.desc": {
    en: "Welcome address, congress overview, and introduction to Pacific archaeology themes",
    es: "Discurso de bienvenida, descripción general del congreso e introducción a los temas de arqueología del Pacífico",
  },
  "schedule.day1.session3.title": {
    en: "Keynote: Climate Change & Pacific Archaeological Heritage",
    es: "Magistral: Cambio Climático y Patrimonio Arqueológico del Pacífico",
  },
  "schedule.day1.session3.speakers": {
    en: "Dr. James Tanaka, University of Hawaii",
    es: "Dr. James Tanaka, Universidad de Hawaii",
  },
  "schedule.day1.session3.desc": {
    en: "Examining the impacts of rising sea levels and climate change on Pacific archaeological sites",
    es: "Examinando los impactos del aumento del nivel del mar y el cambio climático en los sitios arqueológicos del Pacífico",
  },
  "schedule.day1.session4.title": {
    en: "Concurrent Sessions: Island Settlement Patterns",
    es: "Sesiones Concurrentes: Patrones de Asentamiento Insular",
  },
  "schedule.day1.session4.desc": {
    en: "Parallel sessions exploring colonization patterns, maritime adaptations, and early settlement archaeology",
    es: "Sesiones paralelas explorando patrones de colonización, adaptaciones marítimas y arqueología de asentamiento temprano",
  },
  "schedule.day1.session5.title": {
    en: "Concurrent Sessions: Cultural Change & Adaptation",
    es: "Sesiones Concurrentes: Cambio Cultural y Adaptación",
  },
  "schedule.day1.session5.desc": {
    en: "Papers on technological innovation, social organization, and cultural evolution",
    es: "Artículos sobre innovación tecnológica, organización social y evolución cultural",
  },
  "schedule.day1.session6.title": {
    en: "Poster Session I: Regional Studies",
    es: "Sesión de Pósters I: Estudios Regionales",
  },
  "schedule.day1.session6.desc": {
    en: "Interactive poster presentations on regional archaeological projects",
    es: "Presentaciones interactivas de pósters sobre proyectos arqueológicos regionales",
  },
  "schedule.day1.session7.title": {
    en: "Welcome Reception & Cultural Performance",
    es: "Recepción de Bienvenida y Presentación Cultural",
  },
  "schedule.day1.session7.desc": {
    en: "Evening reception with Chilean wine tasting and traditional Pacific cultural performances",
    es: "Recepción vespertina con degustación de vinos chilenos y presentaciones culturales tradicionales del Pacífico",
  },

  // Day 2
  "schedule.day2.name": {
    en: "Day 2",
    es: "Día 2",
  },
  "schedule.day2.session1.title": {
    en: "Keynote: Trans-Pacific Connections in Prehistory",
    es: "Magistral: Conexiones Trans-Pacífico en la Prehistoria",
  },
  "schedule.day2.session1.speakers": {
    en: "Dr. Patricia Chen, National Taiwan University",
    es: "Dra. Patricia Chen, Universidad Nacional de Taiwán",
  },
  "schedule.day2.session1.desc": {
    en: "New evidence for long-distance trade and cultural exchange across the Pacific Ocean",
    es: "Nueva evidencia de comercio de larga distancia e intercambio cultural a través del Océano Pacífico",
  },
  "schedule.day2.session2.title": {
    en: "Concurrent Sessions: Environmental Archaeology",
    es: "Sesiones Concurrentes: Arqueología Ambiental",
  },
  "schedule.day2.session2.desc": {
    en: "Paleoenvironmental reconstruction, climate data, and human-environment interactions",
    es: "Reconstrucción paleoambiental, datos climáticos e interacciones humano-ambiente",
  },
  "schedule.day2.session3.title": {
    en: "Concurrent Sessions: Colonial Impact Studies",
    es: "Sesiones Concurrentes: Estudios de Impacto Colonial",
  },
  "schedule.day2.session3.desc": {
    en: "Bioarchaeology, disease patterns, and demographic changes during colonial periods",
    es: "Bioarqueología, patrones de enfermedades y cambios demográficos durante períodos coloniales",
  },
  "schedule.day2.session4.title": {
    en: "Workshop: GIS and Spatial Analysis in Pacific Archaeology",
    es: "Taller: SIG y Análisis Espacial en Arqueología del Pacífico",
  },
  "schedule.day2.session4.desc": {
    en: "Hands-on workshop on digital mapping and spatial analysis techniques",
    es: "Taller práctico sobre mapeo digital y técnicas de análisis espacial",
  },

  // Day 3
  "schedule.day3.name": {
    en: "Day 3",
    es: "Día 3",
  },
  "schedule.day3.session1.title": {
    en: "Keynote: Megalithic Architecture Across the Pacific",
    es: "Magistral: Arquitectura Megalítica a Través del Pacífico",
  },
  "schedule.day3.session1.speakers": {
    en: "Dr. Rodrigo Valenzuela, University of Chile",
    es: "Dr. Rodrigo Valenzuela, Universidad de Chile",
  },
  "schedule.day3.session1.desc": {
    en: "Comparative analysis of stone platform construction from Rapa Nui to Hawaii",
    es: "Análisis comparativo de construcción de plataformas de piedra desde Rapa Nui hasta Hawaii",
  },
  "schedule.day3.session2.title": {
    en: "Concurrent Sessions: Traditional Navigation & Wayfinding",
    es: "Sesiones Concurrentes: Navegación Tradicional y Orientación",
  },
  "schedule.day3.session2.desc": {
    en: "Papers on celestial navigation, ocean currents, and traditional seafaring knowledge",
    es: "Artículos sobre navegación celeste, corrientes oceánicas y conocimiento tradicional de navegación marítima",
  },
  "schedule.day3.session3.title": {
    en: "Panel Discussion: Heritage Management in the 21st Century",
    es: "Panel de Discusión: Gestión del Patrimonio en el Siglo XXI",
  },
  "schedule.day3.session3.desc": {
    en: "Expert panel on contemporary challenges in site preservation and community archaeology",
    es: "Panel de expertos sobre desafíos contemporáneos en preservación de sitios y arqueología comunitaria",
  },
  "schedule.day3.session4.title": {
    en: "Poster Session II: Methodological Innovations",
    es: "Sesión de Pósters II: Innovaciones Metodológicas",
  },
  "schedule.day3.session4.desc": {
    en: "New techniques in dating, remote sensing, and archaeological analysis",
    es: "Nuevas técnicas en datación, teledetección y análisis arqueológico",
  },

  // Day 4
  "schedule.day4.name": {
    en: "Day 4",
    es: "Día 4",
  },
  "schedule.day4.session1.title": {
    en: "Field Trip: Colchagua Valley Archaeological Sites",
    es: "Excursión: Sitios Arqueológicos del Valle de Colchagua",
  },
  "schedule.day4.session1.location": {
    en: "Various archaeological sites in Colchagua Valley",
    es: "Varios sitios arqueológicos en el Valle de Colchagua",
  },
  "schedule.day4.session1.desc": {
    en: "Guided tours of local pre-Columbian sites and colonial archaeological remains",
    es: "Tours guiados de sitios precolombinos locales y restos arqueológicos coloniales",
  },
  "schedule.day4.session2.title": {
    en: "Vineyard Dinner & Networking Event",
    es: "Cena en Viñedo y Evento de Networking",
  },
  "schedule.day4.session2.desc": {
    en: "Evening event at a local vineyard with wine pairing dinner and informal networking",
    es: "Evento nocturno en viñedo local con cena de maridaje de vinos y networking informal",
  },

  // Day 5
  "schedule.day5.name": {
    en: "Day 5",
    es: "Día 5",
  },
  "schedule.day5.session1.title": {
    en: "Keynote: Arts and Cultural Expression in Pacific Societies",
    es: "Magistral: Artes y Expresión Cultural en Sociedades del Pacífico",
  },
  "schedule.day5.session1.speakers": {
    en: "Dr. Aroha Williams, Auckland University",
    es: "Dra. Aroha Williams, Universidad de Auckland",
  },
  "schedule.day5.session1.desc": {
    en: "Examining petroglyphs, wood carving, and artistic traditions across the Pacific",
    es: "Examinando petroglifos, talla en madera y tradiciones artísticas a través del Pacífico",
  },
  "schedule.day5.session2.title": {
    en: "Concurrent Sessions: Language and Archaeology",
    es: "Sesiones Concurrentes: Lenguaje y Arqueología",
  },
  "schedule.day5.session2.desc": {
    en: "Linguistic evidence for migration patterns and cultural connections",
    es: "Evidencia lingüística para patrones migratorios y conexiones culturales",
  },
  "schedule.day5.session3.title": {
    en: "Concurrent Sessions: Coastal Archaeology",
    es: "Sesiones Concurrentes: Arqueología Costera",
  },
  "schedule.day5.session3.desc": {
    en: "Marine resource exploitation, shoreline changes, and coastal adaptations",
    es: "Explotación de recursos marinos, cambios costeros y adaptaciones costeras",
  },
  "schedule.day5.session4.title": {
    en: "Workshop: Community Engagement in Archaeological Projects",
    es: "Taller: Participación Comunitaria en Proyectos Arqueológicos",
  },
  "schedule.day5.session4.desc": {
    en: "Best practices for collaborative archaeology and indigenous partnerships",
    es: "Mejores prácticas para arqueología colaborativa y asociaciones indígenas",
  },

  // Day 6
  "schedule.day6.name": {
    en: "Day 6",
    es: "Día 6",
  },
  "schedule.day6.session1.title": {
    en: "Panel: Future Directions in Pacific Archaeology",
    es: "Panel: Direcciones Futuras en Arqueología del Pacífico",
  },
  "schedule.day6.session1.desc": {
    en: "Leading researchers discuss emerging trends and research priorities",
    es: "Investigadores líderes discuten tendencias emergentes y prioridades de investigación",
  },
  "schedule.day6.session2.title": {
    en: "Concurrent Sessions: Student Research Presentations",
    es: "Sesiones Concurrentes: Presentaciones de Investigación Estudiantil",
  },
  "schedule.day6.session2.desc": {
    en: "Graduate student papers on diverse Pacific archaeology topics",
    es: "Artículos de estudiantes de posgrado sobre diversos temas de arqueología del Pacífico",
  },
  "schedule.day6.session3.title": {
    en: "Concurrent Sessions: Interdisciplinary Approaches",
    es: "Sesiones Concurrentes: Enfoques Interdisciplinarios",
  },
  "schedule.day6.session3.desc": {
    en: "Papers integrating archaeology with oceanography, climatology, and anthropology",
    es: "Artículos que integran arqueología con oceanografía, climatología y antropología",
  },
  "schedule.day6.session4.title": {
    en: "Plenary: Synthesis and Integration",
    es: "Plenaria: Síntesis e Integración",
  },
  "schedule.day6.session4.desc": {
    en: "Summary of congress themes and emerging research directions",
    es: "Resumen de temas del congreso y direcciones de investigación emergentes",
  },

  // Day 7
  "schedule.day7.name": {
    en: "Day 7",
    es: "Día 7",
  },
  "schedule.day7.session1.title": {
    en: "Final Plenary: Roundtable Discussion",
    es: "Plenaria Final: Mesa Redonda",
  },
  "schedule.day7.session1.desc": {
    en: "Open discussion on congress outcomes and future collaborations",
    es: "Discusión abierta sobre resultados del congreso y colaboraciones futuras",
  },
  "schedule.day7.session2.title": {
    en: "Awards Ceremony & Closing Remarks",
    es: "Ceremonia de Premios y Clausura",
  },
  "schedule.day7.session2.speakers": {
    en: "Scientific Committee & Congress Organizers",
    es: "Comité Científico y Organizadores del Congreso",
  },
  "schedule.day7.session2.desc": {
    en: "Presentation of best paper awards and closing addresses",
    es: "Presentación de premios a mejores artículos y discursos de clausura",
  },
  "schedule.day7.session3.title": {
    en: "Farewell Lunch",
    es: "Almuerzo de Despedida",
  },
  "schedule.day7.session3.desc": {
    en: "Final networking opportunity and congress conclusion",
    es: "Última oportunidad de networking y conclusión del congreso",
  },

  // Sponsors & Partners
  "sponsors.title": {
    en: "Sponsors & Partners",
    es: "Patrocinadores y Socios",
  },
  "sponsors.description": {
    en: "This congress is made possible through the generous support of institutions, foundations, and organizations committed to advancing Pacific archaeology research.",
    es: "Este congreso es posible gracias al generoso apoyo de instituciones, fundaciones y organizaciones comprometidas con el avance de la investigación en arqueología del Pacífico.",
  },
  "sponsors.platinum": {
    en: "Platinum Sponsors",
    es: "Patrocinadores Platino",
  },
  "sponsors.gold": {
    en: "Gold Sponsors",
    es: "Patrocinadores Oro",
  },
  "sponsors.silver": {
    en: "Silver Sponsors",
    es: "Patrocinadores Plata",
  },
  "sponsors.institutionalPartners": {
    en: "Institutional Partners",
    es: "Socios Institucionales",
  },
  "sponsors.becomeASponsor": {
    en: "Become a Sponsor",
    es: "Conviértete en Patrocinador",
  },
  "sponsors.sponsorshipBenefits": {
    en: "Support groundbreaking research in Pacific archaeology while gaining visibility among international scholars and institutions. Multiple sponsorship levels available with tailored benefits.",
    es: "Apoya investigación innovadora en arqueología del Pacífico mientras ganas visibilidad entre académicos e instituciones internacionales. Múltiples niveles de patrocinio disponibles con beneficios personalizados.",
  },
  "sponsors.viewPackages": {
    en: "View Sponsorship Packages",
    es: "Ver Paquetes de Patrocinio",
  },
  "sponsors.contactUs": {
    en: "Contact Us",
    es: "Contáctanos",
  },
  "sponsors.partnerType.academic": {
    en: "Academic Partner",
    es: "Socio Académico",
  },
  "sponsors.partnerType.cultural": {
    en: "Cultural Partner",
    es: "Socio Cultural",
  },
  "sponsors.partnerType.community": {
    en: "Community Partner",
    es: "Socio Comunitario",
  },
  "sponsors.partnerType.research": {
    en: "Research Partner",
    es: "Socio de Investigación",
  },
  "sponsors.mataKiTeRangi.name": {
    en: "Mata Ki Te Rangi Rapa Nui Foundation",
    es: "Fundación Mata Ki Te Rangi Rapa Nui",
  },
  "sponsors.mataKiTeRangi.desc": {
    en: "Host organization and primary sponsor dedicated to Rapa Nui cultural preservation and Pacific research",
    es: "Organización anfitriona y patrocinador principal dedicado a la preservación cultural de Rapa Nui y la investigación del Pacífico",
  },
  "sponsors.nationalGeographic.name": {
    en: "National Geographic Society",
    es: "National Geographic Society",
  },
  "sponsors.nsf.name": {
    en: "National Science Foundation",
    es: "Fundación Nacional de Ciencias",
  },
  "sponsors.chileMinistry.name": {
    en: "Chilean Ministry of Culture",
    es: "Ministerio de Cultura de Chile",
  },
  "sponsors.smithsonian.name": {
    en: "Smithsonian Institution",
    es: "Institución Smithsonian",
  },
  "sponsors.bishopMuseum.name": {
    en: "Bishop Museum, Hawaii",
    es: "Museo Bishop, Hawaii",
  },
  "sponsors.archaeologicalInstitute.name": {
    en: "Archaeological Institute of America",
    es: "Instituto Arqueológico de América",
  },
  "sponsors.pacificArchaeology.name": {
    en: "Society for Pacific Archaeology",
    es: "Sociedad de Arqueología del Pacífico",
  },
  "sponsors.universityHawaii.name": {
    en: "University of Hawaii",
    es: "Universidad de Hawaii",
  },
  "sponsors.universityChile.name": {
    en: "University of Chile",
    es: "Universidad de Chile",
  },
  "sponsors.australianNationalUniversity.name": {
    en: "Australian National University",
    es: "Universidad Nacional Australiana",
  },
  "sponsors.museumSantiago.name": {
    en: "National Museum of Natural History, Santiago",
    es: "Museo Nacional de Historia Natural, Santiago",
  },
  "sponsors.bernicePauahi.name": {
    en: "Bernice Pauahi Bishop Museum",
    es: "Museo Bernice Pauahi Bishop",
  },
  "sponsors.aucklandMuseum.name": {
    en: "Auckland War Memorial Museum",
    es: "Museo Conmemorativo de Guerra de Auckland",
  },
  "sponsors.rapaNuiCommunity.name": {
    en: "Rapa Nui Indigenous Community",
    es: "Comunidad Indígena Rapa Nui",
  },
  "sponsors.polynesiaSociety.name": {
    en: "The Polynesian Society",
    es: "La Sociedad Polinesia",
  },

  // Cultural Artifacts Gallery
  "artifacts.title": {
    en: "Cultural Artifacts & Traditional Arts",
    es: "Artefactos Culturales y Artes Tradicionales",
  },
  "artifacts.description": {
    en: "Explore remarkable examples of Pacific artistic expression through carved artifacts that showcase the sophisticated craftsmanship and symbolic systems of Polynesian cultures.",
    es: "Explora ejemplos notables de expresión artística del Pacífico a través de artefactos tallados que muestran la sofisticada artesanía y sistemas simbólicos de las culturas polinesias.",
  },
  "artifacts.woodenBowl.name": {
    en: "Carved Wooden Ceremonial Bowl",
    es: "Tazón Ceremonial de Madera Tallado",
  },
  "artifacts.woodenBowl.type": {
    en: "Ceremonial Vessel",
    es: "Vasija Ceremonial",
  },
  "artifacts.woodenBowl.origin": {
    en: "Marquesas Islands",
    es: "Islas Marquesas",
  },
  "artifacts.woodenBowl.desc": {
    en: "Traditional ceremonial bowl featuring intricate geometric patterns used in important social and religious gatherings.",
    es: "Tazón ceremonial tradicional con patrones geométricos intrincados usado en reuniones sociales y religiosas importantes.",
  },
  "artifacts.woodenBowl.pattern1": {
    en: "Geometric Patterns",
    es: "Patrones Geométricos",
  },
  "artifacts.woodenBowl.pattern2": {
    en: "Ceremonial Use",
    es: "Uso Ceremonial",
  },
  "artifacts.spiralArt.name": {
    en: "Spiral Motif Carving",
    es: "Talla con Motivo Espiral",
  },
  "artifacts.spiralArt.type": {
    en: "Traditional Carving",
    es: "Talla Tradicional",
  },
  "artifacts.spiralArt.origin": {
    en: "New Zealand (Māori)",
    es: "Nueva Zelanda (Māori)",
  },
  "artifacts.spiralArt.desc": {
    en: "Intricate spiral and circular patterns representing growth, life, and connection in Māori cosmology.",
    es: "Patrones espirales y circulares intrincados que representan crecimiento, vida y conexión en la cosmología māori.",
  },
  "artifacts.spiralArt.pattern1": {
    en: "Koru Spirals",
    es: "Espirales Koru",
  },
  "artifacts.spiralArt.pattern2": {
    en: "Circular Motifs",
    es: "Motivos Circulares",
  },
  "artifacts.stoneRelief.name": {
    en: "Stone Relief Petroglyph",
    es: "Petroglifo en Relieve de Piedra",
  },
  "artifacts.stoneRelief.type": {
    en: "Petroglyph",
    es: "Petroglifo",
  },
  "artifacts.stoneRelief.origin": {
    en: "Easter Island (Rapa Nui)",
    es: "Isla de Pascua (Rapa Nui)",
  },
  "artifacts.stoneRelief.desc": {
    en: "Detailed stone carving with relief patterns depicting ancestral figures and symbolic representations.",
    es: "Talla en piedra detallada con patrones en relieve que representan figuras ancestrales y representaciones simbólicas.",
  },
  "artifacts.stoneRelief.pattern1": {
    en: "Relief Patterns",
    es: "Patrones en Relieve",
  },
  "artifacts.stoneRelief.pattern2": {
    en: "Symbolic Icons",
    es: "Iconos Simbólicos",
  },
  "artifacts.portrait.name": {
    en: "Polynesian Portrait Sculpture",
    es: "Escultura de Retrato Polinesio",
  },
  "artifacts.portrait.type": {
    en: "Sculpture",
    es: "Escultura",
  },
  "artifacts.portrait.origin": {
    en: "Hawaiian Islands",
    es: "Islas Hawaianas",
  },
  "artifacts.portrait.desc": {
    en: "Traditional portrait sculpture depicting cultural identity and ancestral connections through artistic representation.",
    es: "Escultura de retrato tradicional que representa identidad cultural y conexiones ancestrales a través de representación artística.",
  },
  "artifacts.portrait.pattern1": {
    en: "Human Form",
    es: "Forma Humana",
  },
  "artifacts.portrait.pattern2": {
    en: "Cultural Identity",
    es: "Identidad Cultural",
  },
  "artifacts.culturalSignificance.title": {
    en: "Cultural Significance of Pacific Arts",
    es: "Significado Cultural de las Artes del Pacífico",
  },
  "artifacts.culturalSignificance.desc": {
    en: "These artifacts represent more than artistic expression—they embody cultural knowledge, social hierarchies, spiritual beliefs, and historical narratives passed down through generations across the Pacific.",
    es: "Estos artefactos representan más que expresión artística: encarnan conocimiento cultural, jerarquías sociales, creencias espirituales y narrativas históricas transmitidas a través de generaciones en todo el Pacífico.",
  },
  "artifacts.stats.artifacts": {
    en: "Documented Artifacts",
    es: "Artefactos Documentados",
  },
  "artifacts.stats.cultures": {
    en: "Pacific Cultures",
    es: "Culturas del Pacífico",
  },
  "artifacts.stats.years": {
    en: "Years of Tradition",
    es: "Años de Tradición",
  },

  // Payment Information
  "artifacts.payment.title": {
    en: "Payment Information",
    es: "Información de Pago",
  },
  "artifacts.payment.generalPublic.title": {
    en: "General Public",
    es: "Público General",
  },
  "artifacts.payment.generalPublic.price": {
    en: "$300 USD",
    es: "$300 USD",
  },
  "artifacts.payment.generalPublic.international": {
    en: "International participants and specialists",
    es: "Participantes internacionales y especialistas",
  },
  "artifacts.payment.generalPublic.fullAccess": {
    en: "Full congress access",
    es: "Acceso completo al congreso",
  },
  "artifacts.payment.generalPublic.welcome": {
    en: "Welcome reception",
    es: "Recepción de bienvenida",
  },
  "artifacts.payment.generalPublic.conference": {
    en: "Conference materials",
    es: "Materiales de conferencia",
  },
  "artifacts.payment.generalPublic.coffee": {
    en: "Coffee breaks",
    es: "Pausas para café",
  },
  "artifacts.payment.generalPublic.lunch": {
    en: "Lunch ceremony",
    es: "Ceremonia de almuerzo",
  },
  "artifacts.payment.chilean.title": {
    en: "Chilean Participants",
    es: "Participantes Chilenos",
  },
  "artifacts.payment.chilean.price": {
    en: "$250 USD",
    es: "$250 USD",
  },
  "artifacts.payment.chilean.specialRate": {
    en: "Special rate for Chilean residents",
    es: "Tarifa especial para residentes chilenos",
  },
  "artifacts.payment.chilean.fullAccess": {
    en: "Full congress access",
    es: "Acceso completo al congreso",
  },
  "artifacts.payment.chilean.welcome": {
    en: "Welcome reception",
    es: "Recepción de bienvenida",
  },
  "artifacts.payment.chilean.conference": {
    en: "Conference materials",
    es: "Materiales de conferencia",
  },
  "artifacts.payment.chilean.coffee": {
    en: "Coffee breaks",
    es: "Pausas para café",
  },
  "artifacts.payment.chilean.lunch": {
    en: "Lunch ceremony",
    es: "Ceremonia de almuerzo",
  },
  "artifacts.payment.students.title": {
    en: "Students",
    es: "Estudiantes",
  },
  "artifacts.payment.students.price": {
    en: "$150 USD",
    es: "$150 USD",
  },
  "artifacts.payment.students.specialRate": {
    en: "Special rate for Chilean residents",
    es: "Tarifa especial para residentes chilenos",
  },
  "artifacts.payment.students.fullAccess": {
    en: "Full congress access",
    es: "Acceso completo al congreso",
  },
  "artifacts.payment.students.welcome": {
    en: "Welcome reception",
    es: "Recepción de bienvenida",
  },
  "artifacts.payment.students.conference": {
    en: "Conference materials",
    es: "Materiales de conferencia",
  },
  "artifacts.payment.students.coffee": {
    en: "Coffee breaks",
    es: "Pausas para café",
  },
  "artifacts.payment.students.lunch": {
    en: "Lunch ceremony",
    es: "Ceremonia de almuerzo",
  },
  "artifacts.payment.retired.title": {
    en: "Retired participants",
    es: "Participantes Jubilados",
  },
  "artifacts.payment.retired.price": {
    en: "$100 USD",
    es: "$100 USD",
  },
  "artifacts.payment.retired.specialRate": {
    en: "Special rate for Chilean residents",
    es: "Tarifa especial para residentes chilenos",
  },
  "artifacts.payment.retired.fullAccess": {
    en: "Full congress access",
    es: "Acceso completo al congreso",
  },
  "artifacts.payment.retired.welcome": {
    en: "Welcome reception",
    es: "Recepción de bienvenida",
  },
  "artifacts.payment.retired.conference": {
    en: "Conference materials",
    es: "Materiales de conferencia",
  },
  "artifacts.payment.retired.coffee": {
    en: "Coffee breaks",
    es: "Pausas para café",
  },
  "artifacts.payment.retired.lunch": {
    en: "Lunch ceremony",
    es: "Ceremonia de almuerzo",
  },
  "artifacts.payment.methods.title": {
    en: "Accepted Payment Methods:",
    es: "Métodos de Pago Aceptados:",
  },
  "artifacts.payment.methods.subtitle": {
    en: "Credit card, bank transfer, and Paypal",
    es: "Tarjeta de crédito, transferencia bancaria y Paypal",
  },
  "artifacts.payment.discounts.earlyBird": {
    en: "Early Bird Discount",
    es: "Descuento Madrugador",
  },
  "artifacts.payment.discounts.earlyBirdDesc": {
    en: "10% off for registrations before January 2026",
    es: "10% de descuento para registros antes de enero 2026",
  },
  "artifacts.payment.discounts.group": {
    en: "Group Discount",
    es: "Descuento Grupal",
  },
  "artifacts.payment.discounts.groupDesc": {
    en: "5% off for groups of 3+ participants",
    es: "5% de descuento para grupos de 3+ participantes",
  },

  // Pacific Migration Timeline
  "timeline.timelineOf": {
    en: "TIMELINE OF",
    es: "CRONOLOGÍA DE",
  },
  "timeline.pacificMigration": {
    en: "PACIFIC MIGRATION",
    es: "MIGRACIÓN DEL PACÍFICO",
  },
  "timeline.title": {
    en: "Timeline of Pacific Migration",
    es: "Línea de Tiempo de Migración del Pacífico",
  },
  "timeline.description": {
    en: "Trace the remarkable journey of Polynesian peoples across the vast Pacific Ocean, one of humanity's greatest feats of exploration and navigation.",
    es: "Rastrea el notable viaje de los pueblos polinesios a través del vasto Océano Pacífico, una de las mayores hazañas de exploración y navegación de la humanidad.",
  },
  "timeline.event1.year": {
    en: "1500-1300 BCE",
    es: "1500-1300 a.C.",
  },
  "timeline.event1.title": {
    en: "LAPITA CULTURE EXPANSION",
    es: "EXPANSIÓN DE LA CULTURA LAPITA",
  },
  "timeline.event1.period": {
    en: "1500-1300 BCE / Bismarck Archipelago, Fiji, Tonga, Samoa",
    es: "1500-1300 a.C. / Archipiélago de Bismarck, Fiji, Tonga, Samoa",
  },
  "timeline.event1.event": {
    en: "Lapita Culture Expansion",
    es: "Expansión de la Cultura Lapita",
  },
  "timeline.event1.location": {
    en: "Bismarck Archipelago → Fiji, Tonga, Samoa",
    es: "Archipiélago de Bismarck → Fiji, Tonga, Samoa",
  },
  "timeline.event1.desc": {
    en: "First major eastward migration into Remote Oceania, marked by distinctive pottery styles and advanced seafaring capabilities.",
    es: "Primera gran migración hacia el este en Oceanía Remota, marcada por estilos de cerámica distintivos y capacidades avanzadas de navegación marítima.",
  },
  "timeline.event2.year": {
    en: "200 BCE - 300 CE",
    es: "200 a.C. - 300 d.C.",
  },
  "timeline.event2.title": {
    en: "SETTLEMENT OF EASTERN POLYNESIA",
    es: "ASENTAMIENTO DE POLINESIA ORIENTAL",
  },
  "timeline.event2.period": {
    en: "200 BCE-300 CE / Society Islands, Cook Islands",
    es: "200 a.C.-300 d.C. / Islas de la Sociedad, Islas Cook",
  },
  "timeline.event2.event": {
    en: "Settlement of Eastern Polynesia",
    es: "Asentamiento de Polinesia Oriental",
  },
  "timeline.event2.location": {
    en: "Society Islands, Cook Islands",
    es: "Islas de la Sociedad, Islas Cook",
  },
  "timeline.event2.desc": {
    en: "Polynesians establish settlements in Eastern Polynesia, developing distinct cultural traditions and seafaring technologies.",
    es: "Los polinesios establecen asentamientos en Polinesia Oriental, desarrollando tradiciones culturales distintivas y tecnologías de navegación marítima.",
  },
  "timeline.event3.year": {
    en: "300-500 CE",
    es: "300-500 d.C.",
  },
  "timeline.event3.title": {
    en: "MARQUESA ISLANDS SETTLEMENTS",
    es: "ASENTAMIENTO DE LAS ISLAS MARQUESAS",
  },
  "timeline.event3.period": {
    en: "300-500 BCE / Marquesas Islands",
    es: "300-500 a.C. / Islas Marquesas",
  },
  "timeline.event3.event": {
    en: "Marquesas Islands Settlement",
    es: "Asentamiento de las Islas Marquesas",
  },
  "timeline.event3.location": {
    en: "Marquesas Islands",
    es: "Islas Marquesas",
  },
  "timeline.event3.desc": {
    en: "Polynesians reach the Marquesas Islands, establishing a cultural hub that would launch further eastern migrations.",
    es: "Los polinesios alcanzan las Islas Marquesas, estableciendo un centro cultural que lanzaría más migraciones hacia el este.",
  },
  "timeline.event4.year": {
    en: "500-700 CE",
    es: "500-700 d.C.",
  },
  "timeline.event4.title": {
    en: "HAWAII COLONIZATION",
    es: "COLONIZACIÓN DE HAWAII",
  },
  "timeline.event4.period": {
    en: "500-700 CE / Hawaiian Islands",
    es: "500-700 d.C. / Islas Hawaianas",
  },
  "timeline.event4.event": {
    en: "Hawaii Colonization",
    es: "Colonización de Hawaii",
  },
  "timeline.event4.location": {
    en: "Hawaiian Islands",
    es: "Islas Hawaianas",
  },
  "timeline.event4.desc": {
    en: "First Polynesian settlers reach Hawaii via long-distance voyaging, beginning a unique cultural development in isolation.",
    es: "Primeros colonos polinesios alcanzan Hawaii mediante viajes de larga distancia, comenzando un desarrollo cultural único en aislamiento.",
  },
  "timeline.event5.year": {
    en: "800-1000 CE",
    es: "800-1000 d.C.",
  },
  "timeline.event5.title": {
    en: "RAPANUI EASTER ISLAND SETTLEMENT",
    es: "ASENTAMIENTO DE RAPA NUI ISLA DE PASCUA",
  },
  "timeline.event5.period": {
    en: "800-1000CE / Easter Island ( Rapa Nui)",
    es: "800-1000 d.C. / Isla de Pascua (Rapa Nui)",
  },
  "timeline.event5.event": {
    en: "Rapa Nui (Easter Island) Settlement",
    es: "Asentamiento de Rapa Nui (Isla de Pascua)",
  },
  "timeline.event5.location": {
    en: "Easter Island (Rapa Nui)",
    es: "Isla de Pascua (Rapa Nui)",
  },
  "timeline.event5.desc": {
    en: "Polynesians reach the most remote inhabited island on Earth, developing the iconic moai statue culture.",
    es: "Los polinesios alcanzan la isla habitada más remota de la Tierra, desarrollando la icónica cultura de las estatuas moai.",
  },
  "timeline.event6.year": {
    en: "1200-1300 CE",
    es: "1200-1300 d.C.",
  },
  "timeline.event6.title": {
    en: "NEW ZEALAND AOTEAROA SETTLEMENT",
    es: "ASENTAMIENTO DE NUEVA ZELANDA AOTEAROA",
  },
  "timeline.event6.period": {
    en: "1200-1300 CE / Aotearoa ( New Zealand)",
    es: "1200-1300 d.C. / Aotearoa (Nueva Zelanda)",
  },
  "timeline.event6.event": {
    en: "New Zealand (Aotearoa) Settlement",
    es: "Asentamiento de Nueva Zelanda (Aotearoa)",
  },
  "timeline.event6.location": {
    en: "Aotearoa (New Zealand)",
    es: "Aotearoa (Nueva Zelanda)",
  },
  "timeline.event6.desc": {
    en: "Last major Polynesian migration reaches New Zealand, where Māori culture develops unique adaptations to temperate environment.",
    es: "Última gran migración polinesia alcanza Nueva Zelanda, donde la cultura māori desarrolla adaptaciones únicas al ambiente templado.",
  },
  "timeline.seafaring.title": {
    en: "The Art of Polynesian Navigation",
    es: "El Arte de la Navegación Polinesia",
  },
  "timeline.seafaring.desc": {
    en: "These migrations represent extraordinary achievements in seafaring, navigation, and human adaptation. Using star paths, ocean swells, bird migrations, and ancestral knowledge, Polynesian navigators crossed thousands of miles of open ocean without modern instruments, settling the vast Pacific triangle.",
    es: "Estas migraciones representan logros extraordinarios en navegación marítima, navegación y adaptación humana. Usando caminos estelares, oleajes oceánicos, migraciones de aves y conocimiento ancestral, los navegantes polinesios cruzaron miles de millas de océano abierto sin instrumentos modernos, poblando el vasto triángulo del Pacífico.",
  },

  // Video Section
  "video.title": {
    en: "Meet the Organizing Team",
    es: "Conoce al Equipo Organizador",
  },
  "video.description": {
    en: "Hear directly from our international organizing committee about the vision, goals, and exciting opportunities at the Pacific Archaeology Congress.",
    es: "Escucha directamente de nuestro comité organizador internacional sobre la visión, objetivos y emocionantes oportunidades en el Congreso de Arqueología del Pacífico.",
  },
  "video.welcomeMessage": {
    en: "Welcome Message",
    es: "Mensaje de Bienvenida",
  },
  "video.welcomeMessage.desc": {
    en: "In this exclusive video, our organizing committee shares insights about the congress themes, the significance of the Pacific region in archaeology, and what participants can expect from this groundbreaking event.",
    es: "En este video exclusivo, nuestro comité organizador comparte perspectivas sobre los temas del congreso, la importancia de la región del Pacífico en arqueología y qué pueden esperar los participantes de este evento innovador.",
  },
  "video.meetCommittee": {
    en: "Meet the international organizing committee",
    es: "Conoce al comité organizador internacional",
  },
  "video.learnThemes": {
    en: "Learn about congress themes and objectives",
    es: "Aprende sobre los temas y objetivos del congreso",
  },
  "video.discoverOpportunities": {
    en: "Discover networking and collaboration opportunities",
    es: "Descubre oportunidades de networking y colaboración",
  },
  "video.watchVideo": {
    en: "Watch Welcome Video",
    es: "Ver Video de Bienvenida",
  },
  "video.whatYouLearn": {
    en: "What You'll Learn",
    es: "Lo Que Aprenderás",
  },
  "video.congressVision": {
    en: "Congress Vision",
    es: "Visión del Congreso",
  },
  "video.congressVision.desc": {
    en: "Our commitment to advancing Pacific archaeology research",
    es: "Nuestro compromiso con el avance de la investigación arqueológica del Pacífico",
  },
  "video.researchPriorities": {
    en: "Research Priorities",
    es: "Prioridades de Investigación",
  },
  "video.researchPriorities.desc": {
    en: "Key areas of focus for environmental archaeology",
    es: "Áreas clave de enfoque para la arqueología ambiental",
  },
  "video.collaborationGoals": {
    en: "Collaboration Goals",
    es: "Objetivos de Colaboración",
  },
  "video.collaborationGoals.desc": {
    en: "Building lasting international research partnerships",
    es: "Construyendo asociaciones de investigación internacional duraderas",
  },
  "video.congressIntro": {
    en: "Congress Introduction",
    es: "Introducción al Congreso",
  },
  "video.duration": {
    en: "Duration: 8 minutes",
    es: "Duración: 8 minutos",
  },
  "video.playVideo": {
    en: "Play Video",
    es: "Reproducir Video",
  },
  "video.teamExpertise": {
    en: "Team Expertise",
    es: "Experiencia del Equipo",
  },
  "video.teamExpertise.desc": {
    en: "50+ years combined experience",
    es: "50+ años de experiencia combinada",
  },
  "video.recognition": {
    en: "Recognition",
    es: "Reconocimiento",
  },
  "video.recognition.desc": {
    en: "International awards received",
    es: "Premios internacionales recibidos",
  },

  // Footer
  "footer.title": {
    en: "Mata Ki Te Rangi Foundation",
    es: "Fundación Mata Ki Te Rangi",
  },
  "footer.description": {
    en: "Dedicated to preserving and sharing the cultural heritage of Rapa Nui and the Pacific region through research, education, and international collaboration.",
    es: "Dedicada a preservar y compartir el patrimonio cultural de Rapa Nui y la región del Pacífico a través de investigación, educación y colaboración internacional.",
  },
  "footer.followingFrom": {
    en: "Following from:",
    es: "Siguiendo a:",
  },
  "footer.previous2016Congress": {
    en: "2016 International Conference on Early Pacific Migration",
    es: "Conferencia Internacional 2016 sobre Migración Temprana del Pacífico",
  },
  "footer.ubudBali": {
    en: "Ubud, Bali, Indonesia",
    es: "Ubud, Bali, Indonesia",
  },
  "footer.congressLinks": {
    en: "Congress Links",
    es: "Enlaces del Congreso",
  },
  "footer.callForPapers": {
    en: "Call for Papers",
    es: "Convocatoria de Artículos",
  },
  "footer.researchAreas": {
    en: "Research Areas",
    es: "Áreas de Investigación",
  },
  "footer.registration": {
    en: "Registration",
    es: "Registro",
  },
  "footer.venueTravel": {
    en: "Venue & Travel",
    es: "Sede y Viaje",
  },
  "footer.schedule": {
    en: "Schedule",
    es: "Programa",
  },
  "footer.committee": {
    en: "Scientific Committee",
    es: "Comité Científico",
  },
  "footer.contactInfo": {
    en: "Contact Information",
    es: "Información de Contacto",
  },
  "footer.foundation": {
    en: "Mata Ki Te Rangi Rapa Nui Foundation",
    es: "Fundación Mata Ki Te Rangi Rapa Nui",
  },
  "footer.location": {
    en: "Hanga Roa, Rapa Nui, Chile",
    es: "Hanga Roa, Rapa Nui, Chile",
  },
  "footer.phone": {
    en: "Phone: +56 32 2100 236",
    es: "Teléfono: +56 32 2100 236",
  },
  "footer.email": {
    en: "Email: info@earlypacificmigration.org",
    es: "Email: info@earlypacificmigration.org",
  },
  "footer.website": {
    en: "earlypacificmigration.org",
    es: "earlypacificmigration.org",
  },
  "footer.followUs": {
    en: "Follow Us",
    es: "Síguenos",
  },
  "footer.facebook": {
    en: "Facebook",
    es: "Facebook",
  },
  "footer.twitter": {
    en: "Twitter",
    es: "Twitter",
  },
  "footer.instagram": {
    en: "Instagram",
    es: "Instagram",
  },
  "footer.linkedin": {
    en: "LinkedIn",
    es: "LinkedIn",
  },
  "footer.copyright": {
    en: "© 2025 Pacific Congress on Archaeology & Changing Environment. All rights reserved.",
    es: "© 2025 Congreso del Pacífico sobre Arqueología y Medio Ambiente Cambiante. Todos los derechos reservados.",
  },

  // Committee Wheel
  "committeeWheel.congress": {
    en: "Congress",
    es: "Congreso",
  },
  "committeeWheel.hoverOverName": {
    en: "Hover over an animal to reveal the committee member",
    es: "Pasa el ratón sobre un animal para revelar el miembro del comité",
  },

  // Committee
  "committee.title": {
    en: "Scientific Committee",
    es: "Comité Científico",
  },
  "committee.description": {
    en: "Our distinguished international committee brings together leading experts in Pacific archaeology, environmental studies, and cultural heritage preservation.",
    es: "Nuestro distinguido comité internacional reúne a expertos líderes en arqueología del Pacífico, estudios ambientales y preservación del patrimonio cultural.",
  },
  "committee.chair": {
    en: "Chair",
    es: "Presidenta",
  },
  "committee.viceChair": {
    en: "Vice-Chair",
    es: "Vicepresidente",
  },
  "committee.member": {
    en: "Member",
    es: "Miembro",
  },
  "committee.globalExpertise": {
    en: "Global Expertise",
    es: "Experiencia Global",
  },
  "committee.globalExpertise.desc": {
    en: "International committee representing diverse Pacific regions and research specializations.",
    es: "Comité internacional que representa diversas regiones del Pacífico y especializaciones de investigación.",
  },
  "committee.rigorousReview": {
    en: "Rigorous Review",
    es: "Revisión Rigurosa",
  },
  "committee.rigorousReview.desc": {
    en: "Thorough peer review process ensuring the highest standards of archaeological scholarship.",
    es: "Proceso de revisión por pares exhaustivo que asegura los más altos estándares de beca arqueológica.",
  },
  "committee.publicationSupport": {
    en: "Publication Support",
    es: "Apoyo a la Publicación",
  },
  "committee.publicationSupport.desc": {
    en: "Guidance and support for researchers seeking to publish their findings in leading journals.",
    es: "Orientación y apoyo para investigadores que buscan publicar sus hallazgos en revistas líderes.",
  },
  "committee.responsibilities": {
    en: "Committee Responsibilities",
    es: "Responsabilidades del Comité",
  },
  "committee.abstractReview": {
    en: "Abstract Review",
    es: "Revisión de Resúmenes",
  },
  "committee.abstractReview.desc": {
    en: "Comprehensive evaluation of all submitted abstracts for scientific quality and relevance.",
    es: "Evaluación integral de todos los resúmenes enviados por calidad científica y relevancia.",
  },
  "committee.programDevelopment": {
    en: "Program Development",
    es: "Desarrollo del Programa",
  },
  "committee.programDevelopment.desc": {
    en: "Designing the congress program to maximize learning opportunities and scholarly exchange.",
    es: "Diseñando el programa del congreso para maximizar las oportunidades de aprendizaje e intercambio académico.",
  },
  "committee.qualityAssurance": {
    en: "Quality Assurance",
    es: "Aseguramiento de Calidad",
  },
  "committee.qualityAssurance.desc": {
    en: "Ensuring all presentations meet the highest standards of archaeological research and methodology.",
    es: "Asegurando que todas las presentaciones cumplan con los más altos estándares de investigación arqueológica y metodología.",
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
