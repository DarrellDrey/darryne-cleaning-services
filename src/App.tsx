import { useState, type FormEvent } from 'react'
import { ArrowDown, ArrowRight, Check, CheckCircle2, ChevronDown, Clock3, Droplets, Home, Mail, MapPin, Menu, Phone, Sparkles, SprayCan, Wind, X } from 'lucide-react'

const services = [
  { number: '01', title: 'Huishoudelijke schoonmaak', text: 'Een fris en verzorgd thuis, met aandacht voor de ruimtes die voor u belangrijk zijn.', icon: Home },
  { number: '02', title: 'Kantoorschoonmaak', text: 'Een prettige, representatieve werkplek voor medewerkers en bezoekers.', icon: SprayCan },
  { number: '03', title: 'Ramen wassen en glasbewassing', text: 'Heldere ramen en schone glaspartijen, binnen en buiten.', icon: Droplets },
  { number: '04', title: 'Opleveringsschoonmaak na verbouwingen', text: 'Bouwstof en resten weg, zodat de ruimte klaar is voor een frisse start.', icon: Sparkles },
  { number: '05', title: 'Gebouw- en gevelreiniging', text: 'Reiniging op maat, inclusief hoogbouw wanneer passend uitgerust en gekwalificeerd.', icon: Wind },
]

const steps = [
  { n: '01', title: 'Vertel ons wat u nodig heeft', text: 'Vul het formulier in met uw wensen en de locatie.' },
  { n: '02', title: 'We nemen contact met u op', text: 'We bespreken de details en eventuele vragen.' },
  { n: '03', title: 'Ontvang uw vrijblijvende offerte', text: 'U ontvangt een voorstel dat past bij uw situatie.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
    event.currentTarget.reset()
  }

  const closeMenu = () => setMenuOpen(false)

  return <>
    <a className="skip-link" href="#inhoud">Ga naar de inhoud</a>
    <header className="header">
      <div className="nav-wrap">
        <a className="brand" href="#home" aria-label="Darryne Cleaning Services, naar home" onClick={closeMenu}>
          <span className="brand-mark"><span /><span /><span /></span>
          <span className="brand-name">Darryne <b>Cleaning Services</b></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Hoofdnavigatie">
          <a href="#diensten" onClick={closeMenu}>Diensten</a><a href="#over-ons" onClick={closeMenu}>Over ons</a><a href="#werkgebied" onClick={closeMenu}>Werkgebied</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#offerte" onClick={closeMenu}>Offerte aanvragen <ArrowRight size={16} /></a>
        </nav>
      </div>
    </header>

    <main id="inhoud">
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Schoonmaak met aandacht <span className="eyebrow-dot" /> Leiderdorp &amp; omgeving</div>
          <h1>Professionele schoonmaak,<br /><em>tot in de details.</em></h1>
          <p className="hero-text">Een frisse, verzorgde ruimte begint bij aandacht. Darryne Cleaning Services helpt particulieren en bedrijven in Leiderdorp en omgeving met schoonmaak die past bij uw wensen.</p>
          <div className="hero-actions"><a className="button button-dark" href="#offerte">Vraag een vrijblijvende offerte aan <ArrowRight size={17} /></a><a className="text-link" href="#diensten">Ontdek onze diensten <ArrowDown size={15} /></a></div>
          <div className="hero-note"><span className="note-icon"><Check size={15} /></span> Persoonlijk contact <i /> Zorgvuldig werk <i /> Heldere afspraken</div>
        </div>
        <div className="hero-visual" role="img" aria-label="Schoonmaker aan het werk in een lichte woning">
          <div className="hero-image" />
          <div className="image-caption"><span className="caption-mark"><Sparkles size={17} /></span><span><b>Aandacht voor elk detail</b><small>Voor een ruimte die goed voelt</small></span></div>
          <span className="hero-index">01 <i /> 05</span>
        </div>
        <div className="hero-bottom"><span>Betrouwbare schoonmaak in uw buurt</span><a href="#diensten" aria-label="Scroll naar diensten"><ArrowDown size={18} /></a><span>Leiderdorp, Zuid-Holland</span></div>
      </section>

      <section className="services section-pad" id="diensten">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Wat we voor u doen</div><h2>Een schone ruimte.<br /><em>Een goed gevoel.</em></h2></div><p>Van een opgeruimd thuis tot glasheldere ramen: wij stemmen onze schoonmaak af op uw ruimte, planning en wensen.</p></div>
        <div className="service-grid">{services.map(({ number, title, text, icon: Icon }) => <a className="service-card" href="#offerte" key={number}><div className="service-top"><span className="service-number">{number}</span><span className="service-icon"><Icon size={20} strokeWidth={1.6} /></span></div><h3>{title}</h3><p>{text}</p><span className="card-arrow" aria-label="Vraag informatie aan"><ArrowRight size={17} /></span></a>)}</div>
        <div className="services-foot"><span><span className="green-dot" /> Schoonmaak op maat, afgestemd op uw situatie</span><a href="#offerte">Bespreek uw wensen <ArrowRight size={15} /></a></div>
      </section>

      <section className="why" id="over-ons">
        <div className="why-photo"><div className="why-image" /><div className="photo-label"><span className="label-top">Darryne Cleaning Services</span><span>Fris. Zorgvuldig. Persoonlijk.</span></div></div>
        <div className="why-content"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Waarom Darryne</div><h2>Fijn thuiskomen.<br /><em>Prettig werken.</em></h2><p className="why-lead">Een schone omgeving maakt verschil. Daarom luisteren we eerst naar wat u nodig heeft en werken we met zorg aan een resultaat dat bij u past.</p>
          <div className="benefits"><div className="benefit"><span><Check size={16} /></span><div><b>Persoonlijke aandacht</b><p>Uw wensen en ruimte staan centraal.</p></div></div><div className="benefit"><span><Check size={16} /></span><div><b>Duidelijke afspraken</b><p>Vooraf helder over de opdracht en planning.</p></div></div><div className="benefit"><span><Check size={16} /></span><div><b>Met zorg uitgevoerd</b><p>Oog voor detail, van begin tot afronding.</p></div></div></div>
          <a href="#offerte" className="button button-light">Bespreek uw schoonmaakwensen <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="process section-pad" id="werkwijze"><div className="process-heading"><div className="eyebrow"><span className="eyebrow-line" /> Zo werkt het</div><h2>In drie stappen<br /><em>naar een offerte.</em></h2><p>Een schoonmaakaanvraag hoeft niet ingewikkeld te zijn. Vertel ons wat u zoekt; we denken graag met u mee.</p></div>
        <div className="steps">{steps.map((step, i) => <article className="step" key={step.n}><span className="step-no">{step.n}</span>{i < steps.length - 1 && <span className="step-connector" />}<h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </section>

      <section className="area" id="werkgebied"><div className="area-map" aria-hidden="true"><div className="map-rings" /><MapPin className="map-pin" size={29} fill="currentColor" /><span className="map-label">Leiderdorp</span><span className="map-town town-one">Leiden</span><span className="map-town town-two">Oegstgeest</span><span className="map-town town-three">Zoeterwoude</span><span className="map-town town-four">Voorschoten</span></div>
        <div className="area-copy"><div className="eyebrow"><span className="eyebrow-line" /> Dichtbij en vertrouwd</div><h2>Uw buurt,<br /><em>onze basis.</em></h2><p>Vanuit Leiderdorp verzorgen we schoonmaak in de omgeving. Woont of werkt u in de buurt? Neem contact op om de mogelijkheden te bespreken.</p><div className="town-list"><span><MapPin size={15} /> Leiderdorp</span><span><MapPin size={15} /> Leiden</span><span><MapPin size={15} /> Oegstgeest</span><span><MapPin size={15} /> Zoeterwoude</span><span><MapPin size={15} /> Voorschoten</span><span><MapPin size={15} /> Omgeving</span></div><a href="#offerte" className="area-link">Vraag naar uw locatie <ArrowRight size={15} /></a></div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-intro"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Neem contact op</div><h2>Een frisse start<br /><em>begint hier.</em></h2><p>Vertel ons waar u naar op zoek bent. We nemen contact met u op om uw wensen te bespreken.</p><div className="contact-details"><a href="mailto:[e-mailadres invullen]"><span><Mail size={18} /></span><div><small>E-mail</small><b>[e-mailadres invullen]</b></div></a><a href="tel:[telefoonnummer invullen]"><span><Phone size={18} /></span><div><small>Telefoon</small><b>[telefoonnummer invullen]</b></div></a><div><span><MapPin size={18} /></span><div><small>Gevestigd in</small><b>Leiderdorp, Nederland</b></div></div></div><div className="contact-hours"><Clock3 size={15} /> Reactietijd en openingstijden op aanvraag</div></div>
        <div className="form-panel" id="offerte"><div className="form-heading"><span>Vrijblijvende offerte</span><span className="form-step">01 <i /> 01</span></div><h3>Waarmee kunnen we u helpen?</h3><p>Vul uw gegevens in. We bespreken uw aanvraag persoonlijk.</p>
          {submitted && <div className="form-feedback" role="status"><CheckCircle2 size={19} /><span><b>Bedankt voor uw aanvraag.</b><br />Uw gegevens zijn gecontroleerd en dit formulier is klaar voor verzending. Er is nog geen bericht naar Darryne Cleaning Services verstuurd; de verzendservice is nog niet aangesloten.</span></div>}
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row"><label>Uw naam<input name="name" autoComplete="name" required placeholder="Voor- en achternaam" /></label><label>E-mailadres<input name="email" type="email" autoComplete="email" required placeholder="naam@voorbeeld.nl" /></label></div>
            <div className="form-row"><label>Telefoonnummer <span className="optional">optioneel</span><input name="phone" type="tel" autoComplete="tel" placeholder="06 12345678" /></label><label>Type schoonmaak<span className="select-wrap"><select name="service" required defaultValue=""><option value="" disabled>Kies een dienst</option>{services.map((s) => <option key={s.number}>{s.title}</option>)}</select><ChevronDown size={15} /></span></label></div>
            <label>Bericht<textarea name="message" required rows={4} placeholder="Vertel ons iets over de ruimte, locatie en uw wensen..." /></label>
            <label className="consent"><input type="checkbox" required /><span>Ik geef toestemming om contact met mij op te nemen over deze aanvraag.</span></label>
            <button className="button button-dark submit-button" type="submit">Controleer en verstuur aanvraag <ArrowRight size={17} /></button>
            <p className="privacy-note">Uw gegevens worden alleen gebruikt om op uw aanvraag te reageren.</p>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#home"><span className="brand-mark"><span /><span /><span /></span><span className="brand-name">Darryne <b>Cleaning Services</b></span></a><p>Professionele schoonmaak,<br />met aandacht voor de details.</p><a href="#offerte" className="footer-cta">Vraag een vrijblijvende offerte aan <ArrowRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Darryne Cleaning Services</span><span>Leiderdorp, Nederland</span><a href="#home">Terug naar boven ↑</a></div></footer>
  </>
}

export default App
