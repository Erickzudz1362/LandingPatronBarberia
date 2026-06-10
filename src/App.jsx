import { Children, cloneElement, useEffect } from 'react';
import brandLogo from '../assets/icono-web.png';
import heroImage from '../assets/official/hero.jpg';
import styleImage from '../assets/official/style.jpg';
import premiumImage from '../assets/official/premium.jpg';
import shopActionImage from '../assets/official/shop-action.jpg';
import shopInteriorImage from '../assets/official/shop-interior.jpg';
import slideImage from '../assets/official/slide-1.webp';
import appIconImage from '../assets/official/app-icon.png';

const webAppUrl = 'https://barberia-el-patron-opal.vercel.app/';
const mapsUrl = 'https://maps.app.goo.gl/Mbdp1fUKbBgX7m336';
const instagramUrl =
  'https://www.instagram.com/elpatronbol?utm_source=ig_web_button_share_sheet&igsh=cmwyYTg5aXdmOTh1';

const iconPaths = {
  spark: 'M12 2l1.9 5.2L19 9.1l-5.1 1.9L12 16l-1.9-5L5 9.1l5.1-1.9L12 2zM5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  user: 'M20 21a8 8 0 0 0-16 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  scissors: 'M4.5 6.5a2.5 2.5 0 1 0 0 .1L20 20M4.5 17.5a2.5 2.5 0 1 0 0-.1L20 4M14 14l6-6',
  percent: 'M19 5L5 19M7.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  shield: 'M12 22s7-3.5 7-10V5l-7-3-7 3v7c0 6.5 7 10 7 10zM9 12l2 2 4-5',
  calendar: 'M7 3v4M17 3v4M4 8h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1z',
  map: 'M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0zM12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  phone: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM10 18h4',
  qr: 'M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h2v2h-2v-2zM18 14h2v6h-4v-2h2v-4zM14 18h2v2h-2v-2z',
  check: 'M20 6L9 17l-5-5',
  plus: 'M12 5v14M5 12h14',
  instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM17.5 6.5h.01',
  download: 'M12 3v11M8 10l4 4 4-4M5 21h14',
  store: 'M6 8h12l1 13H5L6 8zM9 8a3 3 0 0 1 6 0',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3z',
  chair: 'M7 4h10v7H7V4zM6 13h12v4H6v-4zM8 17v4M16 17v4',
  bell: 'M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16l-2-2zM10 20h4',
};

const heroBadges = [
  { icon: 'clock', label: 'Reservas rápidas' },
  { icon: 'user', label: 'Barberos' },
  { icon: 'percent', label: 'Promos en la app' },
  { icon: 'globe', label: 'Todos los dispositivos' },
];

const benefits = [
  {
    icon: 'clock',
    title: 'Ahorra tiempo',
    text: 'Reserva desde tu celular sin llamadas ni vueltas.',
  },
  {
    icon: 'user',
    title: 'Elige tu barbero',
    text: 'Encuentra el servicio ideal y agenda con más claridad.',
  },
  {
    icon: 'percent',
    title: 'Promociones exclusivas',
    text: 'Los beneficios se mostrarán dentro de la app cuando estén disponibles.',
  },
  {
    icon: 'bell',
    title: 'Siempre al tanto',
    text: 'Consulta novedades, horarios y avisos desde un solo lugar.',
  },
];

const featureSlides = [
  {
    icon: 'scissors',
    title: 'Corte y barba',
    text: 'Servicios organizados para elegir rápido lo que necesitas.',
  },
  {
    icon: 'calendar',
    title: 'Reserva clara',
    text: 'Selecciona fecha, hora y servicio sin complicaciones.',
  },
  {
    icon: 'shield',
    title: 'Experiencia premium',
    text: 'Una interfaz moderna para una barbería con identidad fuerte.',
  },
  {
    icon: 'globe',
    title: 'Acceso inmediato',
    text: 'Entra desde celular, tablet o computadora con el enlace oficial.',
  },
];

const steps = [
  {
    number: '01',
    icon: 'scissors',
    title: 'Elige tu servicio',
    text: 'Corte, barba, afeitado o el servicio que necesites.',
  },
  {
    number: '02',
    icon: 'user',
    title: 'Selecciona barbero',
    text: 'Revisa opciones y elige con quién quieres atenderte.',
  },
  {
    number: '03',
    icon: 'calendar',
    title: 'Reserva y confirma',
    text: 'Agenda tu cita y llega con todo listo.',
  },
];

const installOptions = [
  {
    icon: 'globe',
    title: 'Todos los dispositivos',
    text: 'Disponible ahora para iPhone, Android, tablet y computadora.',
    href: webAppUrl,
    active: true,
  },
  {
    icon: 'download',
    title: 'Android',
    text: 'Próximamente como descarga directa o Play Store.',
  },
  {
    icon: 'store',
    title: 'App Store',
    text: 'Próximamente para usuarios de iPhone.',
  },
];

const installGuides = [
  {
    title: 'iPhone',
    text: 'Abre el enlace en Safari, toca Compartir y elige Agregar a pantalla de inicio.',
  },
  {
    title: 'Android',
    text: 'Abre el enlace en Chrome, toca el menú y selecciona Instalar app o Agregar a pantalla principal.',
  },
  {
    title: 'Computadora o tablet',
    text: 'Entra desde el navegador y usa la experiencia de El Patrón sin instalar nada adicional.',
  },
];

const appExclusives = [
  {
    label: 'Dentro de la app',
    title: 'Promos exclusivas',
    text: 'Cuando existan beneficios, aparecerán primero dentro de la experiencia digital.',
  },
  {
    label: 'Para clientes',
    title: 'Novedades y avisos',
    text: 'Enterate de campañas, horarios y próximos lanzamientos desde la app.',
  },
  {
    label: 'Acceso rápido',
    title: 'Reserva directa',
    text: 'Un camino simple para volver a El Patrón cuando quieras verte bien.',
  },
];

const barbers = [
  { name: 'Jairo', role: 'Cortes clásicos' },
  { name: 'Manuel', role: 'Barba y perfilado' },
  { name: 'Alfonso', role: 'Fade y diseño' },
  { name: 'Kevin', role: 'Estilo premium' },
  { name: 'Diego', role: 'Detalle y precisión' },
];

const galleryImages = [
  { src: shopActionImage, title: 'Atención real en El Patrón' },
  { src: shopInteriorImage, title: 'Ambiente de barbería premium' },
  { src: premiumImage, title: 'Identidad El Patrón' },
];

const faqItems = [
  {
    question: '¿Ya está disponible en Play Store?',
    answer:
      'Todavía no. Android queda como próximo canal oficial; por ahora puedes entrar desde todos los dispositivos con el enlace oficial.',
  },
  {
    question: '¿Funciona en iPhone?',
    answer: 'Sí. Entra desde Safari y, si quieres, agrégala a tu pantalla de inicio.',
  },
  {
    question: '¿Hay promociones publicadas aquí?',
    answer: 'No publicamos promociones inventadas. Las promociones reales aparecerán dentro de la app cuando estén activas.',
  },
  {
    question: '¿La página está pensada para celular?',
    answer: 'Sí. El diseño está priorizado para móvil, porque la mayoría de clientes entrará desde su teléfono.',
  },
];

function Icon({ name, size = 22 }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={iconPaths[name]} />
    </svg>
  );
}

function BarberPole() {
  return (
    <div className="barber-pole" aria-hidden="true">
      <span />
    </div>
  );
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function Cta({ href, children, variant = 'primary' }) {
  return (
    <a
      className={`cta ${variant}`}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      <Icon name={variant === 'primary' ? 'download' : 'globe'} size={19} />
      <span>{children}</span>
    </a>
  );
}

function Carousel({ children, className = '' }) {
  const items = Children.toArray(children);

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-track">
        <div className="carousel-group">
          {items.map((child, index) => cloneElement(child, { key: `first-${index}` }))}
        </div>
        <div className="carousel-group" aria-hidden="true">
          {items.map((child, index) => cloneElement(child, { key: `second-${index}` }))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  useRevealOnScroll();

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Barbería El Patrón">
          <img src={brandLogo} alt="Barbería El Patrón" />
          <div>
            <span>Barbería</span>
            <strong>El Patrón</strong>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#beneficios">Beneficios</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#barberos">Barberos</a>
          <a href="#promociones">Promociones</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>

        <a className="nav-download" href="#descargar">Descargar</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img className="hero-bg" src={heroImage} alt="" aria-hidden="true" />
          <div className="hero-overlay" />
          <BarberPole />

          <div className="hero-inner">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Tu estilo empieza aquí</p>
              <h1>
                Reserva tu <span>corte o barba</span> en segundos
              </h1>
              <p className="hero-lead">La experiencia El Patrón, ahora en tu celular.</p>
              <p className="hero-text">
                Revisa servicios, elige barbero, consulta novedades y agenda tu cita desde cualquier dispositivo.
              </p>

              <div className="hero-actions">
                <Cta href="#descargar">Descargar app</Cta>
                <Cta href={webAppUrl} variant="outline">Entrar ahora</Cta>
              </div>

              <div className="hero-badges">
                {heroBadges.map((item) => (
                  <span key={item.label}>
                    <Icon name={item.icon} size={18} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-phone-wrap" data-reveal>
              <article className="phone-frame" aria-label="Vista previa de la app">
                <div className="phone-speaker" />
                <div className="phone-screen">
                  <div className="phone-top">
                    <span />
                    <Icon name="spark" size={18} />
                  </div>
                  <div className="screen-head">
                    <strong>¡Hola, Patrón!</strong>
                    <p>¿Qué te hacemos hoy?</p>
                  </div>
                  <div className="promo-panel">
                    <img src={styleImage} alt="Vista de la app de Barbería El Patrón" />
                  </div>
                  <div className="section-row">
                    <strong>Barberos</strong>
                    <span>Ver todos</span>
                  </div>
                  <div className="barber-cards">
                    {barbers.slice(0, 3).map((barber) => (
                      <div className="barber-card" key={barber.name}>
                        <img src={brandLogo} alt="" />
                        <strong>{barber.name}</strong>
                        <small>{barber.role}</small>
                        <em>Disponible</em>
                      </div>
                    ))}
                  </div>
                  <div className="service-grid">
                    <span>Corte</span>
                    <span>Barba</span>
                    <span>Afeitado</span>
                  </div>
                  <div className="bottom-tabs">
                    <span>Inicio</span>
                    <span>Reservas</span>
                    <span>Barberos</span>
                    <span>Perfil</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="benefits-section" id="beneficios">
          <div className="section-heading centered" data-reveal>
            <p className="eyebrow">Beneficios de la app</p>
            <h2>Más rápido, más claro, más El Patrón.</h2>
          </div>

          <Carousel className="benefit-carousel">
            {benefits.map((item) => (
              <article className="glass-card benefit-card" key={item.title}>
                <Icon name={item.icon} size={34} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </Carousel>
        </section>

        <section className="features-section">
          <div className="section-heading centered" data-reveal>
            <p className="eyebrow">Todo en una sola experiencia</p>
          </div>

          <Carousel className="feature-carousel">
            {featureSlides.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <Icon name={feature.icon} size={34} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </Carousel>
        </section>

        <section className="split-section" id="como-funciona">
          <article className="contact-panel glass-card" id="ubicacion" data-reveal>
            <div>
              <p className="eyebrow">Ubicación y contacto</p>
              <h2>Encuéntranos y vive la experiencia</h2>
              <p>Visita Barbería El Patrón, revisa nuestra ubicación y síguenos para conocer novedades.</p>
            </div>
            <div className="contact-actions">
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                <Icon name="map" />
                Ver ubicación
                <span>›</span>
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <Icon name="instagram" />
                Instagram
                <span>›</span>
              </a>
              <a href={webAppUrl} target="_blank" rel="noreferrer">
                <Icon name="globe" />
                Entrar a la app
                <span>›</span>
              </a>
            </div>
          </article>

          <figure className="venue-panel" data-reveal>
            <img src={shopActionImage} alt="Clientes en Barbería El Patrón" />
          </figure>

          <article className="steps-panel glass-card" data-reveal>
            <p className="eyebrow">Cómo funciona</p>
            <h2>Reserva en 3 simples pasos</h2>
            <div className="step-list">
              {steps.map((step) => (
                <div className="step-row" key={step.number}>
                  <strong>{step.number}</strong>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  <Icon name={step.icon} />
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="gallery-section" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Así se vive El Patrón</p>
            <h2>Un espacio real para corte, barba y detalle.</h2>
          </div>
          <Carousel className="gallery-carousel">
            {galleryImages.map((image) => (
              <figure key={image.title}>
                <img src={image.src} alt={image.title} />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
          </Carousel>
        </section>

        <section className="download-section" id="descargar" data-reveal>
          <img className="download-bg" src={slideImage} alt="" aria-hidden="true" />
          <div className="download-copy">
            <p className="eyebrow">Descarga</p>
            <h2>Descarga o entra desde cualquier dispositivo. Así de fácil.</h2>
            <p>
              Usa el acceso oficial desde celular, tablet o computadora. Android y App Store quedan como próximos canales oficiales.
            </p>
            <div className="install-buttons">
              {installOptions.map((option) =>
                option.active ? (
                  <a href={option.href} target="_blank" rel="noreferrer" key={option.title}>
                    <Icon name={option.icon} />
                    <span>
                      <strong>{option.title}</strong>
                      <small>{option.text}</small>
                    </span>
                  </a>
                ) : (
                  <span key={option.title}>
                    <Icon name={option.icon} />
                    <span>
                      <strong>{option.title}</strong>
                      <small>{option.text}</small>
                    </span>
                  </span>
                )
              )}
            </div>
          </div>

          <div className="install-guide">
            {installGuides.map((guide, index) => (
              <article key={guide.title}>
                <strong>0{index + 1}</strong>
                <h3>{guide.title}</h3>
                <p>{guide.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="promo-barber-section">
          <div className="promo-panel-large glass-card" id="promociones" data-reveal>
            <div className="panel-head">
              <div>
                <p className="eyebrow">Exclusivo dentro de la app</p>
                <h2>Promociones y novedades aparecerán dentro de la app</h2>
              </div>
              <a href={webAppUrl} target="_blank" rel="noreferrer">Entrar a la app</a>
            </div>
            <Carousel className="promo-carousel">
              {appExclusives.map((promo) => (
                <article className="promo-card" key={promo.title}>
                  <img src={appIconImage} alt="" />
                  <div>
                    <span>{promo.label}</span>
                    <h3>{promo.title}</h3>
                    <p>{promo.text}</p>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>

          <div className="barbers-panel glass-card" id="barberos" data-reveal>
            <div className="panel-head">
              <div>
                <p className="eyebrow">Barberos</p>
              </div>
              <span>Ver todos</span>
            </div>
            <Carousel className="barber-carousel">
              {barbers.map((barber) => (
                <article key={barber.name}>
                  <img src={brandLogo} alt="" />
                  <h3>{barber.name}</h3>
                  <p>{barber.role}</p>
                </article>
              ))}
            </Carousel>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Todo claro antes de reservar.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item" key={item.question} data-reveal>
                <summary>
                  {item.question}
                  <Icon name="plus" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={brandLogo} alt="Barbería El Patrón" />
            <div>
              <strong>Barbería El Patrón</strong>
              <p>Fine barber shop. Reserva más fácil, novedades visibles y una experiencia moderna para clientes que quieren verse bien.</p>
            </div>
          </div>
          <a className="footer-main-cta" href={webAppUrl} target="_blank" rel="noreferrer">
            <Icon name="download" />
            Descargar app
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <strong>Navegación</strong>
            <a href="#beneficios">Beneficios</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#barberos">Barberos</a>
            <a href="#promociones">Promociones</a>
          </div>
          <div className="footer-column">
            <strong>App</strong>
            <a href="#descargar">Android</a>
            <a href="#descargar">App Store</a>
            <a href={webAppUrl} target="_blank" rel="noreferrer">Todos los dispositivos</a>
          </div>
          <div className="footer-column">
            <strong>Ubicación</strong>
            <a href={mapsUrl} target="_blank" rel="noreferrer">Ver en mapa</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a href="#ubicacion">Contacto</a>
          </div>
          <div className="footer-column">
            <strong>Horario</strong>
            <span>Lun - Sáb: 10:00 - 21:00</span>
            <span>Domingo: sujeto a disponibilidad</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Barbería El Patrón</span>
          <span>Hecho para móvil, tablet y computadora</span>
        </div>
      </footer>
    </div>
  );
}
