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
    en: "Pacific Congress 2027",
    es: "Congreso del Pacífico 2027"
  },
  "header.subtitle": {
    en: "Archaeology & Changing Environment",
    es: "Arqueología y Medio Ambiente Cambiante"
  },
  "header.callForPapers": {
    en: "Call for Papers",
    es: "Convocatoria de Artículos"
  },
  "header.areas": {
    en: "Areas",
    es: "Áreas"
  },
  "header.registration": {
    en: "Registration",
    es: "Registro"
  },
  "header.venue": {
    en: "Venue",
    es: "Sede"
  },
  "header.registerNow": {
    en: "Register Now",
    es: "Regístrate Ahora"
  },

  // Congress Hero
  "congressHero.badge": {
    en: "First International Congress",
    es: "Primer Congreso Internacional"
  },
  "congressHero.title1": {
    en: "ARCHEOLOGY CONGRESS:",
    es: "CONGRESO DE ARQUEOLOGÍA:"
  },
  "congressHero.title2": {
    en: "CHANGING ENVIRONMENT",
    es: "MEDIO AMBIENTE CAMBIANTE"
  },
  "congressHero.title3": {
    en: "IN THE PACIFIC",
    es: "EN EL PACÍFICO"
  },
  "congressHero.description": {
    en: "Exploring the dynamic relationship between archaeological heritage and environmental transformations across Pacific regions. Join leading researchers in Chile's wine country.",
    es: "Explorando la relación dinámica entre el patrimonio arqueológico y las transformaciones ambientales en las regiones del Pacífico. Únete a investigadores líderes en la región vitivinícola de Chile."
  },
  "congressHero.submitAbstract": {
    en: "Submit Your Abstract",
    es: "Envía tu Resumen"
  },
  "congressHero.registerNow": {
    en: "Register Now",
    es: "Regístrate Ahora"
  },
  "congressHero.callForPapers": {
    en: "Call for Papers",
    es: "Convocatoria de Artículos"
  },

  // Call for Papers
  "callForPapers.title": {
    en: "Call for Papers",
    es: "Convocatoria de Artículos"
  },
  "callForPapers.description": {
    en: "The First International Congress on Archaeology and Changing Environment in the Pacific invites researchers, scholars, and practitioners to submit their contributions exploring the dynamic relationship between archaeological heritage and environmental transformations across Pacific regions.",
    es: "El Primer Congreso Internacional sobre Arqueología y Medio Ambiente Cambiante en el Pacífico invita a investigadores, académicos y profesionales a enviar sus contribuciones explorando la relación dinámica entre el patrimonio arqueológico y las transformaciones ambientales en las regiones del Pacífico."
  },
  "callForPapers.importantDates": {
    en: "Important Dates",
    es: "Fechas Importantes"
  },
  "callForPapers.abstractDeadline": {
    en: "Abstract Submission Deadline",
    es: "Fecha Límite de Envío de Resúmenes"
  },
  "callForPapers.abstractDeadlineDate": {
    en: "February 2026",
    es: "Febrero 2026"
  },
  "callForPapers.abstractDeadlineDesc": {
    en: "Submit your 300-word abstract with preliminary findings",
    es: "Envía tu resumen de 300 palabras con hallazgos preliminares"
  },
  "callForPapers.acceptanceNotification": {
    en: "Acceptance Notification",
    es: "Notificación de Aceptación"
  },
  "callForPapers.acceptanceDate": {
    en: "April 2026",
    es: "Abril 2026"
  },
  "callForPapers.acceptanceDesc": {
    en: "Scientific committee will notify acceptance decisions",
    es: "El comité científico notificará las decisiones de aceptación"
  },
  "callForPapers.fullPaperSubmission": {
    en: "Full Paper Submission",
    es: "Envío de Artículo Completo"
  },
  "callForPapers.fullPaperDate": {
    en: "June 2026",
    es: "Junio 2026"
  },
  "callForPapers.fullPaperDesc": {
    en: "Complete manuscripts for publication consideration",
    es: "Manuscritos completos para consideración de publicación"
  },
  "callForPapers.awards": {
    en: "Awards & Recognition",
    es: "Premios y Reconocimientos"
  },
  "callForPapers.bestProfessional": {
    en: "Best Professional Paper",
    es: "Mejor Artículo Profesional"
  },
  "callForPapers.professionalDesc": {
    en: "Outstanding research contribution",
    es: "Contribución de investigación destacada"
  },
  "callForPapers.bestStudent": {
    en: "Best Student Paper",
    es: "Mejor Artículo de Estudiante"
  },
  "callForPapers.studentDesc": {
    en: "Excellence in student research",
    es: "Excelencia en investigación estudiantil"
  },
  "callForPapers.bestRetired": {
    en: "Best Retired Scholar Paper",
    es: "Mejor Artículo de Académico Retirado"
  },
  "callForPapers.retiredDesc": {
    en: "Lifetime achievement recognition",
    es: "Reconocimiento por trayectoria"
  },
  "callForPapers.readyToSubmit": {
    en: "Ready to Submit?",
    es: "¿Listo para Enviar?"
  },
  "callForPapers.submitDescription": {
    en: "Join leading researchers from around the Pacific in this groundbreaking congress. Submit your abstract and be part of shaping the future of Pacific archaeology.",
    es: "Únete a investigadores líderes de todo el Pacífico en este congreso innovador. Envía tu resumen y forma parte del futuro de la arqueología del Pacífico."
  },
  "callForPapers.submitAbstract": {
    en: "Submit Abstract",
    es: "Enviar Resumen"
  },
  "callForPapers.downloadGuidelines": {
    en: "Download Guidelines",
    es: "Descargar Directrices"
  },

  // Areas of Reflection
  "areas.title": {
    en: "Areas of Reflection",
    es: "Áreas de Reflexión"
  },
  "areas.description": {
    en: "Our congress welcomes diverse perspectives across multiple scales of archaeological inquiry, from local site studies to trans-Pacific comparative analyses.",
    es: "Nuestro congreso da la bienvenida a diversas perspectivas a través de múltiples escalas de investigación arqueológica, desde estudios de sitios locales hasta análisis comparativos trans-Pacífico."
  },
  "areas.regionalScale": {
    en: "Regional Scale",
    es: "Escala Regional"
  },
  "areas.temporalScale": {
    en: "Temporal Scale",
    es: "Escala Temporal"
  },
  "areas.socialScale": {
    en: "Social Scale",
    es: "Escala Social"
  },
  "areas.environmentalScale": {
    en: "Environmental Scale",
    es: "Escala Ambiental"
  },
  "areas.globalScale": {
    en: "Global Scale",
    es: "Escala Global"
  },
  "areas.conservationScale": {
    en: "Conservation Scale",
    es: "Escala de Conservación"
  },
  "areas.islands.title": {
    en: "Archaeology of Islands",
    es: "Arqueología de Islas"
  },
  "areas.islands.desc": {
    en: "Investigating island societies, maritime adaptations, and cultural evolution in Pacific archipelagos. Focus on settlement patterns, resource management, and inter-island connections.",
    es: "Investigando sociedades insulares, adaptaciones marítimas y evolución cultural en archipiélagos del Pacífico. Enfoque en patrones de asentamiento, gestión de recursos y conexiones entre islas."
  },
  "areas.cultural.title": {
    en: "Cultural Changes",
    es: "Cambios Culturales"
  },
  "areas.cultural.desc": {
    en: "Examining cultural transformations across different time periods, including pre-contact, colonial, and modern eras. Analysis of social structures, technological innovations, and belief systems.",
    es: "Examinando transformaciones culturales a través de diferentes períodos de tiempo, incluyendo eras precontacto, colonial y moderna. Análisis de estructuras sociales, innovaciones tecnológicas y sistemas de creencias."
  },
  "areas.diseases.title": {
    en: "Colonial Diseases & Impact",
    es: "Enfermedades Coloniales e Impacto"
  },
  "areas.diseases.desc": {
    en: "Bioarchaeological studies of disease patterns, demographic changes, and health impacts during colonial periods. Understanding population dynamics and cultural responses.",
    es: "Estudios bioarqueológicos de patrones de enfermedades, cambios demográficos e impactos en la salud durante períodos coloniales. Comprendiendo dinámicas poblacionales y respuestas culturales."
  },
  "areas.climate.title": {
    en: "Climate & Environmental Change",
    es: "Cambio Climático y Ambiental"
  },
  "areas.climate.desc": {
    en: "Studying past climate variations, sea-level changes, and environmental adaptations. Paleoenvironmental reconstruction and human-environment interactions.",
    es: "Estudiando variaciones climáticas pasadas, cambios del nivel del mar y adaptaciones ambientales. Reconstrucción paleoambiental e interacciones humano-ambiente."
  },
  "areas.transpacific.title": {
    en: "Trans-Pacific Connections",
    es: "Conexiones Trans-Pacífico"
  },
  "areas.transpacific.desc": {
    en: "Exploring long-distance trade networks, migration patterns, and cultural exchanges across the Pacific Ocean. Evidence for pre-Columbian contact and interaction.",
    es: "Explorando redes comerciales de larga distancia, patrones migratorios e intercambios culturales a través del Océano Pacífico. Evidencia de contacto e interacción precolombina."
  },
  "areas.preservation.title": {
    en: "Site Preservation & Heritage",
    es: "Preservación de Sitios y Patrimonio"
  },
  "areas.preservation.desc": {
    en: "Addressing contemporary challenges in archaeological site preservation, heritage management, and community engagement in the face of environmental threats.",
    es: "Abordando desafíos contemporáneos en la preservación de sitios arqueológicos, gestión del patrimonio y participación comunitaria ante amenazas ambientales."
  },
  "areas.multiScale.title": {
    en: "Multi-Scale Integration",
    es: "Integración Multi-Escala"
  },
  "areas.multiScale.desc": {
    en: "We especially encourage submissions that integrate multiple scales of analysis, combining local archaeological evidence with regional patterns and global contexts. Interdisciplinary approaches connecting archaeology with climatology, oceanography, and cultural anthropology are particularly welcome.",
    es: "Especialmente alentamos presentaciones que integren múltiples escalas de análisis, combinando evidencia arqueológica local con patrones regionales y contextos globales. Los enfoques interdisciplinarios que conectan la arqueología con la climatología, oceanografía y antropología cultural son particularmente bienvenidos."
  },

  // Registration Fees
  "registration.title": {
    en: "Registration Fees",
    es: "Tarifas de Registro"
  },
  "registration.description": {
    en: "Choose your registration category and secure your place at this groundbreaking congress. All fees include full access to sessions, materials, and networking events.",
    es: "Elige tu categoría de registro y asegura tu lugar en este congreso innovador. Todas las tarifas incluyen acceso completo a sesiones, materiales y eventos de networking."
  },
  "registration.generalPublic": {
    en: "General Public",
    es: "Público General"
  },
  "registration.generalPublic.desc": {
    en: "International participants and professionals",
    es: "Participantes internacionales y profesionales"
  },
  "registration.chilean": {
    en: "Chilean Participants",
    es: "Participantes Chilenos"
  },
  "registration.chilean.desc": {
    en: "Special rate for Chilean residents",
    es: "Tarifa especial para residentes chilenos"
  },
  "registration.chileanRate": {
    en: "Chilean Rate",
    es: "Tarifa Chilena"
  },
  "registration.students": {
    en: "Students",
    es: "Estudiantes"
  },
  "registration.students.desc": {
    en: "Valid student ID required",
    es: "Se requiere identificación de estudiante válida"
  },
  "registration.retired": {
    en: "Retired Participants",
    es: "Participantes Retirados"
  },
  "registration.retired.desc": {
    en: "Retired academics and professionals",
    es: "Académicos y profesionales retirados"
  },
  "registration.fullAccess": {
    en: "Full congress access",
    es: "Acceso completo al congreso"
  },
  "registration.welcomeReception": {
    en: "Welcome reception",
    es: "Recepción de bienvenida"
  },
  "registration.materials": {
    en: "Conference materials",
    es: "Materiales de conferencia"
  },
  "registration.coffeeBreaks": {
    en: "Coffee breaks",
    es: "Coffee breaks"
  },
  "registration.closingCeremony": {
    en: "Closing ceremony",
    es: "Ceremonia de clausura"
  },
  "registration.studentNetworking": {
    en: "Student networking session",
    es: "Sesión de networking estudiantil"
  },
  "registration.mentorship": {
    en: "Mentorship opportunities",
    es: "Oportunidades de mentoría"
  },
  "registration.seniorReception": {
    en: "Senior scholars reception",
    es: "Recepción para académicos senior"
  },
  "registration.legacyPresentation": {
    en: "Legacy presentation session",
    es: "Sesión de presentación de legado"
  },
  "registration.registerNow": {
    en: "Register Now",
    es: "Regístrate Ahora"
  },
  "registration.paymentInfo": {
    en: "Payment Information",
    es: "Información de Pago"
  },
  "registration.paymentMethods": {
    en: "Accepted Payment Methods",
    es: "Métodos de Pago Aceptados"
  },
  "registration.paymentMethods.desc": {
    en: "Credit cards, bank transfers, and PayPal",
    es: "Tarjetas de crédito, transferencias bancarias y PayPal"
  },
  "registration.earlyBird": {
    en: "Early Bird Discount",
    es: "Descuento por Reserva Anticipada"
  },
  "registration.earlyBird.desc": {
    en: "10% off for registrations before January 2026",
    es: "10% de descuento para registros antes de enero 2026"
  },
  "registration.groupDiscount": {
    en: "Group Discounts",
    es: "Descuentos Grupales"
  },
  "registration.groupDiscount.desc": {
    en: "5% off for groups of 5+ participants",
    es: "5% de descuento para grupos de 5+ participantes"
  },
  "registration.whatsIncluded": {
    en: "What's Included",
    es: "Qué Está Incluido"
  },
  "registration.scientificSessions": {
    en: "Access to all scientific sessions",
    es: "Acceso a todas las sesiones científicas"
  },
  "registration.ceremonies": {
    en: "Welcome and closing ceremonies",
    es: "Ceremonias de bienvenida y clausura"
  },
  "registration.materialsAbstracts": {
    en: "All conference materials and abstracts",
    es: "Todos los materiales y resúmenes de la conferencia"
  },
  "registration.networking": {
    en: "Coffee breaks and networking sessions",
    es: "Coffee breaks y sesiones de networking"
  },
  "registration.certificate": {
    en: "Certificate of participation",
    es: "Certificado de participación"
  },
  "registration.virtualPlatform": {
    en: "Access to virtual platform (post-congress)",
    es: "Acceso a plataforma virtual (post-congreso)"
  },

  // Venue & Location
  "venue.title": {
    en: "Venue & Location",
    es: "Sede y Ubicación"
  },
  "venue.description": {
    en: "Join us at the prestigious Hotel Santa Cruz in Chile's renowned Colchagua Valley, a perfect setting that combines academic excellence with cultural heritage.",
    es: "Únete a nosotros en el prestigioso Hotel Santa Cruz en el renombrado Valle de Colchagua de Chile, un escenario perfecto que combina excelencia académica con patrimonio cultural."
  },
  "venue.hotelName": {
    en: "Hotel Santa Cruz",
    es: "Hotel Santa Cruz"
  },
  "venue.address": {
    en: "Address",
    es: "Dirección"
  },
  "venue.addressText": {
    en: "Plaza de Armas s/n, Santa Cruz",
    es: "Plaza de Armas s/n, Santa Cruz"
  },
  "venue.addressText2": {
    en: "Colchagua Valley, Sixth Region of Chile",
    es: "Valle de Colchagua, Sexta Región de Chile"
  },
  "venue.facilities": {
    en: "World-Class Facilities",
    es: "Instalaciones de Clase Mundial"
  },
  "venue.facilities.desc": {
    en: "State-of-the-art conference rooms, high-speed internet, simultaneous translation capabilities, and audio-visual equipment",
    es: "Salas de conferencias de última generación, internet de alta velocidad, capacidades de traducción simultánea y equipo audiovisual"
  },
  "venue.accommodation": {
    en: "Accommodation",
    es: "Alojamiento"
  },
  "venue.accommodation.desc": {
    en: "Luxury rooms with valley views, spa services, and fine dining options. Special congress rates available for attendees.",
    es: "Habitaciones de lujo con vistas al valle, servicios de spa y opciones gastronómicas. Tarifas especiales del congreso disponibles para asistentes."
  },
  "venue.gettingThere": {
    en: "Getting There",
    es: "Cómo Llegar"
  },
  "venue.fromSantiago": {
    en: "From Santiago",
    es: "Desde Santiago"
  },
  "venue.fromSantiago.desc": {
    en: "2 hours drive via Ruta 5 Sur. Shuttle service available from Santiago airport.",
    es: "2 horas en auto por Ruta 5 Sur. Servicio de transporte disponible desde el aeropuerto de Santiago."
  },
  "venue.internationalFlights": {
    en: "International Flights",
    es: "Vuelos Internacionales"
  },
  "venue.internationalFlights.desc": {
    en: "Fly to Santiago (SCL), then ground transport to venue.",
    es: "Vuelo a Santiago (SCL), luego transporte terrestre a la sede."
  },
  "venue.colchaguaValley": {
    en: "Colchagua Valley",
    es: "Valle de Colchagua"
  },
  "venue.unescoBadge": {
    en: "A UNESCO World Heritage wine region",
    es: "Región vitivinícola Patrimonio Mundial de la UNESCO"
  },
  "venue.wineHeritage": {
    en: "Wine Heritage",
    es: "Patrimonio Vinícola"
  },
  "venue.wineHeritage.desc": {
    en: "World-renowned vineyards and wine tastings",
    es: "Viñedos de renombre mundial y degustaciones de vino"
  },
  "venue.scenicBeauty": {
    en: "Scenic Beauty",
    es: "Belleza Escénica"
  },
  "venue.scenicBeauty.desc": {
    en: "Andean foothills and rolling vineyard landscapes",
    es: "Estribaciones andinas y paisajes de viñedos ondulantes"
  },
  "venue.culturalImmersion": {
    en: "Cultural Immersion",
    es: "Inmersión Cultural"
  },
  "venue.culturalImmersion.desc": {
    en: "Beyond the academic sessions, immerse yourself in Chilean culture and heritage. The Colchagua Valley offers unique opportunities to explore local archaeology, colonial history, and indigenous traditions, making it an ideal setting for our Pacific congress.",
    es: "Más allá de las sesiones académicas, sumérgete en la cultura y el patrimonio chileno. El Valle de Colchagua ofrece oportunidades únicas para explorar la arqueología local, la historia colonial y las tradiciones indígenas, convirtiéndolo en un escenario ideal para nuestro congreso del Pacífico."
  },
  "venue.bookAccommodation": {
    en: "Book Accommodation",
    es: "Reservar Alojamiento"
  },
  "venue.downloadGuide": {
    en: "Download Travel Guide",
    es: "Descargar Guía de Viaje"
  },

  // Pacific Gallery
  "gallery.title": {
    en: "Pacific Archaeological Heritage",
    es: "Patrimonio Arqueológico del Pacífico"
  },
  "gallery.description": {
    en: "Discover the remarkable archaeological sites across the Pacific that showcase humanity's adaptation to island environments and changing climates through millennia.",
    es: "Descubre los notables sitios arqueológicos a través del Pacífico que muestran la adaptación de la humanidad a los entornos insulares y climas cambiantes a través de milenios."
  },
  "gallery.rapaNui.name": {
    en: "Rapa Nui (Easter Island)",
    es: "Rapa Nui (Isla de Pascua)"
  },
  "gallery.rapaNui.location": {
    en: "Chile",
    es: "Chile"
  },
  "gallery.rapaNui.desc": {
    en: "Iconic moai statues and ceremonial platforms representing Polynesian megalithic culture",
    es: "Icónicas estatuas moai y plataformas ceremoniales que representan la cultura megalítica polinesia"
  },
  "gallery.rapaNui.highlight1": {
    en: "Moai Statues",
    es: "Estatuas Moai"
  },
  "gallery.rapaNui.highlight2": {
    en: "Ceremonial Platforms",
    es: "Plataformas Ceremoniales"
  },
  "gallery.rapaNui.highlight3": {
    en: "Polynesian Heritage",
    es: "Patrimonio Polinesio"
  },
  "gallery.hawaii.name": {
    en: "Hawaiian Heiau",
    es: "Heiau Hawaiano"
  },
  "gallery.hawaii.location": {
    en: "Hawaii, USA",
    es: "Hawaii, EE.UU."
  },
  "gallery.hawaii.desc": {
    en: "Ancient temple complexes showcasing sophisticated Polynesian religious architecture",
    es: "Antiguos complejos de templos que muestran la sofisticada arquitectura religiosa polinesia"
  },
  "gallery.hawaii.highlight1": {
    en: "Temple Complexes",
    es: "Complejos de Templos"
  },
  "gallery.hawaii.highlight2": {
    en: "Sacred Spaces",
    es: "Espacios Sagrados"
  },
  "gallery.hawaii.highlight3": {
    en: "Stone Architecture",
    es: "Arquitectura de Piedra"
  },
  "gallery.tahiti.name": {
    en: "Tahitian Marae",
    es: "Marae Tahitiano"
  },
  "gallery.tahiti.location": {
    en: "French Polynesia",
    es: "Polinesia Francesa"
  },
  "gallery.tahiti.desc": {
    en: "Stone temple platforms revealing complex social and religious hierarchies",
    es: "Plataformas de templos de piedra que revelan complejas jerarquías sociales y religiosas"
  },
  "gallery.tahiti.highlight1": {
    en: "Stone Platforms",
    es: "Plataformas de Piedra"
  },
  "gallery.tahiti.highlight2": {
    en: "Religious Centers",
    es: "Centros Religiosos"
  },
  "gallery.tahiti.highlight3": {
    en: "Social Complexity",
    es: "Complejidad Social"
  },
  "gallery.keyFeatures": {
    en: "Key Features",
    es: "Características Clave"
  },
  "gallery.connecting.title": {
    en: "Connecting Pacific Cultures",
    es: "Conectando Culturas del Pacífico"
  },
  "gallery.connecting.desc": {
    en: "These iconic sites represent just a fraction of the rich archaeological heritage spanning the Pacific. Our congress will explore how environmental changes have shaped these cultures and how they, in turn, have adapted their environments across thousands of years.",
    es: "Estos sitios icónicos representan solo una fracción del rico patrimonio arqueológico que abarca el Pacífico. Nuestro congreso explorará cómo los cambios ambientales han moldeado estas culturas y cómo ellas, a su vez, han adaptado sus entornos a lo largo de miles de años."
  },
  "gallery.stats.sites": {
    en: "Archaeological Sites",
    es: "Sitios Arqueológicos"
  },
  "gallery.stats.islands": {
    en: "Pacific Islands",
    es: "Islas del Pacífico"
  },
  "gallery.stats.history": {
    en: "Years of History",
    es: "Años de Historia"
  },

  // Areas of Reflection Gallery
  "areasGallery.islands.title": {
    en: "Archaeology of Islands",
    es: "Arqueología de Islas"
  },
  "areasGallery.islands.desc": {
    en: "Exploring the unique archaeological record of Pacific islands and their environmental contexts.",
    es: "Explorando el registro arqueológico único de las islas del Pacífico y sus contextos ambientales."
  },
  "areasGallery.islands.scale": {
    en: "Regional Scale",
    es: "Escala Regional"
  },
  "areasGallery.islands.topic1": {
    en: "Island colonization patterns",
    es: "Patrones de colonización insular"
  },
  "areasGallery.islands.topic2": {
    en: "Maritime archaeology",
    es: "Arqueología marítima"
  },
  "areasGallery.islands.topic3": {
    en: "Settlement evolution",
    es: "Evolución de asentamientos"
  },
  "areasGallery.islands.topic4": {
    en: "Resource management strategies",
    es: "Estrategias de gestión de recursos"
  },
  "areasGallery.cultural.title": {
    en: "Cultural Changes",
    es: "Cambios Culturales"
  },
  "areasGallery.cultural.desc": {
    en: "Investigating how Pacific cultures adapted to environmental and social transformations.",
    es: "Investigando cómo las culturas del Pacífico se adaptaron a las transformaciones ambientales y sociales."
  },
  "areasGallery.cultural.scale": {
    en: "Cultural Scale",
    es: "Escala Cultural"
  },
  "areasGallery.cultural.topic1": {
    en: "Technological innovation",
    es: "Innovación tecnológica"
  },
  "areasGallery.cultural.topic2": {
    en: "Social organization changes",
    es: "Cambios en la organización social"
  },
  "areasGallery.cultural.topic3": {
    en: "Religious and ritual evolution",
    es: "Evolución religiosa y ritual"
  },
  "areasGallery.cultural.topic4": {
    en: "Trade network development",
    es: "Desarrollo de redes comerciales"
  },
  "areasGallery.diseases.title": {
    en: "Colonial Diseases",
    es: "Enfermedades Coloniales"
  },
  "areasGallery.diseases.desc": {
    en: "Examining the impact of introduced diseases on Pacific populations and their archaeological signatures.",
    es: "Examinando el impacto de las enfermedades introducidas en las poblaciones del Pacífico y sus firmas arqueológicas."
  },
  "areasGallery.diseases.scale": {
    en: "Temporal Scale",
    es: "Escala Temporal"
  },
  "areasGallery.diseases.topic1": {
    en: "Population decline indicators",
    es: "Indicadores de declive poblacional"
  },
  "areasGallery.diseases.topic2": {
    en: "Cemetery and burial changes",
    es: "Cambios en cementerios y entierros"
  },
  "areasGallery.diseases.topic3": {
    en: "Settlement abandonment",
    es: "Abandono de asentamientos"
  },
  "areasGallery.diseases.topic4": {
    en: "Health and nutrition markers",
    es: "Marcadores de salud y nutrición"
  },
  "areasGallery.climate.title": {
    en: "Climate and Environment",
    es: "Clima y Medio Ambiente"
  },
  "areasGallery.climate.desc": {
    en: "Understanding the relationship between climate change and archaeological evidence.",
    es: "Comprendiendo la relación entre el cambio climático y la evidencia arqueológica."
  },
  "areasGallery.climate.scale": {
    en: "Environmental Scale",
    es: "Escala Ambiental"
  },
  "areasGallery.climate.topic1": {
    en: "Sea level fluctuations",
    es: "Fluctuaciones del nivel del mar"
  },
  "areasGallery.climate.topic2": {
    en: "Agricultural adaptations",
    es: "Adaptaciones agrícolas"
  },
  "areasGallery.climate.topic3": {
    en: "Extreme weather events",
    es: "Eventos climáticos extremos"
  },
  "areasGallery.climate.topic4": {
    en: "Ecosystem transformations",
    es: "Transformaciones del ecosistema"
  },
  "areasGallery.coastal.title": {
    en: "Coastal Archaeology",
    es: "Arqueología Costera"
  },
  "areasGallery.coastal.desc": {
    en: "Investigating coastal sites and their vulnerability to environmental change.",
    es: "Investigando sitios costeros y su vulnerabilidad al cambio ambiental."
  },
  "areasGallery.coastal.scale": {
    en: "Spatial Scale",
    es: "Escala Espacial"
  },
  "areasGallery.coastal.topic1": {
    en: "Shoreline migration",
    es: "Migración de la línea costera"
  },
  "areasGallery.coastal.topic2": {
    en: "Marine resource exploitation",
    es: "Explotación de recursos marinos"
  },
  "areasGallery.coastal.topic3": {
    en: "Coastal fortifications",
    es: "Fortificaciones costeras"
  },
  "areasGallery.coastal.topic4": {
    en: "Harbor and port development",
    es: "Desarrollo de puertos y bahías"
  },
  "areasGallery.paleo.title": {
    en: "Paleoenvironmental Reconstruction",
    es: "Reconstrucción Paleoambiental"
  },
  "areasGallery.paleo.desc": {
    en: "Combining archaeological and environmental data to understand past landscapes.",
    es: "Combinando datos arqueológicos y ambientales para comprender paisajes pasados."
  },
  "areasGallery.paleo.scale": {
    en: "Methodological Scale",
    es: "Escala Metodológica"
  },
  "areasGallery.paleo.topic1": {
    en: "Palynological studies",
    es: "Estudios palinológicos"
  },
  "areasGallery.paleo.topic2": {
    en: "Sediment analysis",
    es: "Análisis de sedimentos"
  },
  "areasGallery.paleo.topic3": {
    en: "Carbon dating applications",
    es: "Aplicaciones de datación por carbono"
  },
  "areasGallery.paleo.topic4": {
    en: "GIS and spatial analysis",
    es: "SIG y análisis espacial"
  },
  "areasGallery.areasOf": {
    en: "Areas",
    es: "Áreas"
  },
  "areasGallery.ofReflection": {
    en: "Of Reflection",
    es: "De Reflexión"
  },
  "areasGallery.galleryDesc": {
    en: "Our congress explores multiple scales of analysis, from local site studies to regional environmental patterns, fostering interdisciplinary dialogue.",
    es: "Nuestro congreso explora múltiples escalas de análisis, desde estudios de sitios locales hasta patrones ambientales regionales, fomentando el diálogo interdisciplinario."
  },
  "areasGallery.keyTopics": {
    en: "Key Topics:",
    es: "Temas Clave:"
  },
  "areasGallery.interdisciplinary.title": {
    en: "Interdisciplinary Studies",
    es: "Estudios Interdisciplinarios"
  },
  "areasGallery.interdisciplinary.desc": {
    en: "We encourage submissions that bridge multiple areas of reflection and scales of analysis. The most innovative research often emerges at the intersection of archaeological evidence, environmental data, and cultural interpretation. Consider how your work contributes to our broader understanding of human-environment interactions in the Pacific region",
    es: "Alentamos presentaciones que conecten múltiples áreas de reflexión y escalas de análisis. La investigación más innovadora a menudo emerge en la intersección de evidencia arqueológica, datos ambientales e interpretación cultural. Considere cómo su trabajo contribuye a nuestra comprensión más amplia de las interacciones humano-ambiente en la región del Pacífico"
  },

  // Scientific Committee
  "committee.title": {
    en: "International Scientific Committee",
    es: "Comité Científico Internacional"
  },
  "committee.description": {
    en: "Our distinguished panel of experts represents the finest minds in Pacific archaeology, bringing together diverse perspectives from across the Pacific rim and beyond.",
    es: "Nuestro distinguido panel de expertos representa las mentes más brillantes en arqueología del Pacífico, reuniendo diversas perspectivas de todo el borde del Pacífico y más allá."
  },
  "committee.globalExpertise": {
    en: "Global Expertise",
    es: "Experiencia Global"
  },
  "committee.globalExpertise.desc": {
    en: "Representatives from leading institutions across the Pacific region, ensuring diverse perspectives and comprehensive review standards.",
    es: "Representantes de instituciones líderes en la región del Pacífico, asegurando perspectivas diversas y estándares de revisión exhaustivos."
  },
  "committee.rigorousReview": {
    en: "Rigorous Review",
    es: "Revisión Rigurosa"
  },
  "committee.rigorousReview.desc": {
    en: "Double-blind peer review process ensuring the highest academic standards and fair evaluation of all submissions.",
    es: "Proceso de revisión por pares doble ciego que garantiza los más altos estándares académicos y una evaluación justa de todas las presentaciones."
  },
  "committee.publicationSupport": {
    en: "Publication Support",
    es: "Apoyo a Publicación"
  },
  "committee.publicationSupport.desc": {
    en: "Selected papers will be considered for publication in leading archaeological journals and special congress proceedings.",
    es: "Los artículos seleccionados serán considerados para publicación en revistas arqueológicas líderes y actas especiales del congreso."
  },
  "committee.chair": {
    en: "Chair, International Scientific Committee",
    es: "Presidente, Comité Científico Internacional"
  },
  "committee.viceChair": {
    en: "Vice-Chair",
    es: "Vicepresidente"
  },
  "committee.member": {
    en: "Committee Member",
    es: "Miembro del Comité"
  },
  "committee.responsibilities": {
    en: "Committee Responsibilities",
    es: "Responsabilidades del Comité"
  },
  "committee.abstractReview": {
    en: "Abstract Review",
    es: "Revisión de Resúmenes"
  },
  "committee.abstractReview.desc": {
    en: "Evaluate submissions for scientific merit, relevance, and innovation",
    es: "Evaluar presentaciones por mérito científico, relevancia e innovación"
  },
  "committee.programDevelopment": {
    en: "Program Development",
    es: "Desarrollo del Programa"
  },
  "committee.programDevelopment.desc": {
    en: "Design thematic sessions and facilitate interdisciplinary dialogue",
    es: "Diseñar sesiones temáticas y facilitar el diálogo interdisciplinario"
  },
  "committee.qualityAssurance": {
    en: "Quality Assurance",
    es: "Aseguramiento de Calidad"
  },
  "committee.qualityAssurance.desc": {
    en: "Maintain high academic standards and promote best practices",
    es: "Mantener altos estándares académicos y promover mejores prácticas"
  },

  // Video Section
  "video.title": {
    en: "Meet the Organizing Team",
    es: "Conoce al Equipo Organizador"
  },
  "video.description": {
    en: "Hear directly from our international organizing committee about the vision, goals, and exciting opportunities at the Pacific Archaeology Congress.",
    es: "Escucha directamente de nuestro comité organizador internacional sobre la visión, objetivos y emocionantes oportunidades en el Congreso de Arqueología del Pacífico."
  },
  "video.welcomeMessage": {
    en: "Welcome Message",
    es: "Mensaje de Bienvenida"
  },
  "video.welcomeMessage.desc": {
    en: "In this exclusive video, our organizing committee shares insights about the congress themes, the significance of the Pacific region in archaeology, and what participants can expect from this groundbreaking event.",
    es: "En este video exclusivo, nuestro comité organizador comparte perspectivas sobre los temas del congreso, la importancia de la región del Pacífico en arqueología y qué pueden esperar los participantes de este evento innovador."
  },
  "video.meetCommittee": {
    en: "Meet the international organizing committee",
    es: "Conoce al comité organizador internacional"
  },
  "video.learnThemes": {
    en: "Learn about congress themes and objectives",
    es: "Aprende sobre los temas y objetivos del congreso"
  },
  "video.discoverOpportunities": {
    en: "Discover networking and collaboration opportunities",
    es: "Descubre oportunidades de networking y colaboración"
  },
  "video.watchVideo": {
    en: "Watch Welcome Video",
    es: "Ver Video de Bienvenida"
  },
  "video.whatYouLearn": {
    en: "What You'll Learn",
    es: "Lo Que Aprenderás"
  },
  "video.congressVision": {
    en: "Congress Vision",
    es: "Visión del Congreso"
  },
  "video.congressVision.desc": {
    en: "Our commitment to advancing Pacific archaeology research",
    es: "Nuestro compromiso con el avance de la investigación arqueológica del Pacífico"
  },
  "video.researchPriorities": {
    en: "Research Priorities",
    es: "Prioridades de Investigación"
  },
  "video.researchPriorities.desc": {
    en: "Key areas of focus for environmental archaeology",
    es: "Áreas clave de enfoque para la arqueología ambiental"
  },
  "video.collaborationGoals": {
    en: "Collaboration Goals",
    es: "Objetivos de Colaboración"
  },
  "video.collaborationGoals.desc": {
    en: "Building lasting international research partnerships",
    es: "Construyendo asociaciones de investigación internacional duraderas"
  },
  "video.congressIntro": {
    en: "Congress Introduction",
    es: "Introducción al Congreso"
  },
  "video.duration": {
    en: "Duration: 8 minutes",
    es: "Duración: 8 minutos"
  },
  "video.playVideo": {
    en: "Play Video",
    es: "Reproducir Video"
  },
  "video.teamExpertise": {
    en: "Team Expertise",
    es: "Experiencia del Equipo"
  },
  "video.teamExpertise.desc": {
    en: "50+ years combined experience",
    es: "50+ años de experiencia combinada"
  },
  "video.recognition": {
    en: "Recognition",
    es: "Reconocimiento"
  },
  "video.recognition.desc": {
    en: "International awards received",
    es: "Premios internacionales recibidos"
  },

  // Footer
  "footer.title": {
    en: "ArcheoVault",
    es: "ArcheoVault"
  },
  "footer.description": {
    en: "Bringing ancient civilizations to life through extraordinary archaeological discoveries and immersive experiences.",
    es: "Dando vida a civilizaciones antiguas a través de extraordinarios descubrimientos arqueológicos y experiencias inmersivas."
  },
  "footer.quickLinks": {
    en: "Quick Links",
    es: "Enlaces Rápidos"
  },
  "footer.aboutExhibition": {
    en: "About Exhibition",
    es: "Sobre la Exposición"
  },
  "footer.featuredArtifacts": {
    en: "Featured Artifacts",
    es: "Artefactos Destacados"
  },
  "footer.visitorInfo": {
    en: "Visitor Information",
    es: "Información para Visitantes"
  },
  "footer.virtualTour": {
    en: "Virtual Tour",
    es: "Tour Virtual"
  },
  "footer.visitUs": {
    en: "Visit Us",
    es: "Visítanos"
  },
  "footer.museum": {
    en: "Museum of Natural History",
    es: "Museo de Historia Natural"
  },
  "footer.address": {
    en: "1234 Heritage Avenue",
    es: "Avenida Patrimonio 1234"
  },
  "footer.phone": {
    en: "Phone: (555) 123-4567",
    es: "Teléfono: (555) 123-4567"
  },
  "footer.email": {
    en: "Email: info@archeovault.org",
    es: "Email: info@archeovault.org"
  },
  "footer.followUs": {
    en: "Follow Us",
    es: "Síguenos"
  },
  "footer.facebook": {
    en: "Facebook",
    es: "Facebook"
  },
  "footer.twitter": {
    en: "Twitter",
    es: "Twitter"
  },
  "footer.instagram": {
    en: "Instagram",
    es: "Instagram"
  },
  "footer.copyright": {
    en: "© 2024 ArcheoVault Exhibition. All rights reserved. | Created with archaeological passion.",
    es: "© 2024 Exposición ArcheoVault. Todos los derechos reservados. | Creado con pasión arqueológica."
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
