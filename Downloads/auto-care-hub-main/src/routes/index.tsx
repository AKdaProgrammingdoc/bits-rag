import { createFileRoute } from "@tanstack/react-router";
import {
  Bike, Wrench, Cog, Car, Disc, Settings2, Award, Star, Phone, MessageCircle,
  MapPin, Clock, ShieldCheck, Truck, BadgeCheck, Trophy, ArrowRight, ThumbsUp, Check,
  Facebook, Instagram, Youtube, QrCode, Users,
  BatteryCharging, AlertTriangle, PaintBucket, ShieldAlert, FileText, Droplets, SprayCan,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Embers } from "@/components/site/Embers";
import { Counter } from "@/components/site/Counter";
import { HoloBike } from "@/components/site/HoloBike";
import { Reveal } from "@/components/site/Reveal";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { useI18n } from "@/lib/i18n";
import awardImg from "@/assets/award.jpg";
import qrImg from "@/assets/qr-code.png";
import skLogo from "@/assets/sk-logo.png";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { t } = useI18n();

  const services = [
    { icon: Bike, name: "Motorcycle Repair", desc: "Full service and repair for all motorcycle brands including Honda, Bajaj, TVS, Hero, Yamaha, Suzuki, Aprilia." },
    { icon: Wrench, name: "General Service", desc: "Complete general servicing, oil changes, brake service and tune-ups for all scooters and bikes." },
    { icon: Cog, name: "Power Steering Repair", desc: "Expert diagnosis and repair of power steering systems for all car models." },
    { icon: Car, name: "Shock Absorber Service", desc: "Car shock absorber inspection, repair and replacement for smooth ride quality." },
    { icon: Settings2, name: "Suspension System", desc: "Complete suspension repair and overhaul for bikes and cars." },
    { icon: Disc, name: "Wheel Alignment", desc: "Professional wheel alignment for optimal performance, fuel efficiency and tire longevity. Ask for price." },
    { icon: BatteryCharging, name: "Batteries", desc: "Battery testing, jump-start, replacement and warranty service for all major brands." },
    { icon: AlertTriangle, name: "Breakdown Services", desc: "On-the-spot breakdown assistance and roadside support across Madurai — call us anytime." },
    { icon: PaintBucket, name: "Denting & Painting", desc: "Professional dent removal, body repair and high-quality paint finish for bikes and cars." },
    { icon: ShieldAlert, name: "Accidental Support", desc: "End-to-end accident repair and recovery support to get you back on the road quickly." },
    { icon: FileText, name: "Insurance & RTO Work", desc: "Hassle-free insurance claims, renewals and complete RTO documentation handled for you." },
    { icon: Droplets, name: "Water Wash", desc: "Thorough water wash, foam cleaning and detailing to keep your vehicle spotless." },
    { icon: SprayCan, name: "Lubes", desc: "Premium engine oils and lubricants from trusted brands, applied by certified technicians." },
  ];

  const trust = [
    { icon: BadgeCheck, title: t("trust_1_title"), desc: t("trust_1_desc") },
    { icon: Truck, title: t("trust_2_title"), desc: t("trust_2_desc") },
    { icon: Clock, title: t("trust_3_title"), desc: t("trust_3_desc") },
    { icon: ShieldCheck, title: t("trust_4_title"), desc: t("trust_4_desc") },
  ];

  return (
    <div id="home" className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <FloatingButtons />

      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <Embers count={35} />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40"
          style={{ background: "var(--gradient-radial-glow)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase">
                <Star size={14} fill="currentColor" /> {t("hero_badge")}
              </span>
            </Reveal>
            <Reveal delay={50}>
              <div className="mt-5 text-sm sm:text-base font-display font-bold tracking-widest uppercase text-primary/90">
                {t("shop_full_name")}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-3 text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[0.95] uppercase">
                {t("hero_title_1")} <span className="text-primary text-glow">{t("hero_title_2")}</span> {t("hero_title_3")}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                {t("hero_desc_1")} <span className="text-foreground font-semibold">{t("head_tech_name")}</span> {t("hero_desc_2")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="sheen-on-hover inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:shadow-glow active:translate-y-0.5 transition-all"
                >
                  {t("book_service")} <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/919843777729"
                  target="_blank" rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-primary text-primary font-bold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <MessageCircle size={18} /> {t("whatsapp_us")}
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { v: 494, s: "+", l: t("stat_reviews") },
                  { v: 4.7, s: "★", l: t("stat_rating") },
                  { v: 5, s: t("yrs_suffix"), l: t("stat_serving") },
                  { v: 0, s: t("stat_brands_value"), l: t("stat_brands_label"), noNum: true },
                ].map((stat, i) => (
                  <div key={i} className="stat-cube rounded-xl p-4 text-center">
                    <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                      {stat.noNum ? stat.s : <><Counter to={stat.v} />{stat.s}</>}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{stat.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HoloBike />
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative bg-primary text-primary-foreground py-3 overflow-hidden border-y-2 border-primary-glow/40">
        <div className="flex whitespace-nowrap animate-marquee font-display font-bold tracking-wider uppercase text-sm sm:text-base">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-6 px-6">
              {[
                "Motorcycles", "Two Wheelers", "Power Steering", "Shock Absorbers",
                "Suspension Systems", "Wheel Alignment", "All Brands",
                "Honda · Bajaj · TVS · Hero · Yamaha · Suzuki · Aprilia",
                "Pick-up & Drop Available", "Open 24 Hours",
              ].map((tx, i) => (
                <span key={i} className="flex items-center gap-6">
                  <span>{tx}</span>
                  <span className="opacity-70">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BEST SERVICE / #1 SECTION */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-50"
          style={{ background: "var(--gradient-radial-glow)" }}
        />
        <Embers count={20} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl animate-pulse-glow" />
              <div className="relative animate-medal w-32 h-32 rounded-full grid place-items-center bg-gradient-to-br from-primary-glow via-primary to-primary-foreground/20 border-4 border-primary-glow shadow-glow">
                <div className="absolute inset-2 rounded-full bg-background grid place-items-center">
                  <Trophy size={42} className="text-primary" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={50}>
            <div className="text-sm sm:text-base font-display font-bold tracking-widest uppercase text-primary/90 mb-3">
              {t("shop_full_name")}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-display font-bold tracking-widest uppercase text-xs sm:text-sm shadow-glow-sm">
              <Trophy size={14} /> {t("section1_pill")}
            </span>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase leading-[0.95]">
              {t("section1_h_1")} <br className="sm:hidden" />
              <span className="text-primary text-glow">{t("section1_h_2")}</span>
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
              {t("section1_desc")}
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Trophy, top: t("pill_top_1"), sub: t("pill_sub_1") },
              { icon: Star, top: t("pill_top_2"), sub: t("pill_sub_2") },
              { icon: Award, top: t("pill_top_3"), sub: t("pill_sub_3") },
            ].map((p, i) => (
              <Reveal key={i} delay={400 + i * 100}>
                <div className="group bg-surface border border-border hover:border-primary/60 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow-sm text-left">
                  <p.icon className="text-primary mb-2" size={26} />
                  <div className="font-display font-bold text-lg uppercase">{p.top}</div>
                  <div className="text-sm text-muted-foreground">{p.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <blockquote className="relative mt-14 max-w-3xl mx-auto p-8 rounded-2xl border-l-4 border-primary bg-surface/60 backdrop-blur text-left">
              <div className="absolute -top-4 left-6 text-6xl text-primary font-display leading-none">"</div>
              <p className="text-lg sm:text-xl font-display text-primary italic leading-snug">
                {t("quote_text")}
              </p>
              <footer className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{t("quote_author")}</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={800}>
            <a
              href="https://wa.me/919843777729"
              target="_blank" rel="noopener"
              className="sheen-on-hover mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold uppercase tracking-wide shadow-glow hover:scale-[1.03] active:translate-y-0.5 transition-all"
            >
              {t("book_best")} <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-20 md:py-28 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">{t("services_kicker")}</span>
              <h2 className="mt-2 text-4xl md:text-5xl font-display font-bold uppercase">{t("services_title")}</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t("services_sub")}</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY CHOOSE US */}
      <section id="about" className="relative py-20 md:py-28 overflow-hidden">
        <Embers count={15} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">{t("about_kicker")}</span>
              <h2 className="mt-2 text-4xl md:text-5xl font-display font-bold uppercase">{t("about_title")}</h2>
            </div>
          </Reveal>

          {/* AWARD HIGHLIGHT */}
          <Reveal>
            <div className="max-w-5xl mx-auto mb-10 grid md:grid-cols-2 gap-6 items-stretch bg-gradient-to-br from-surface to-surface-elevated border border-primary/40 rounded-3xl overflow-hidden shadow-elevated">
              <div className="relative h-64 md:h-auto md:min-h-[340px] overflow-hidden">
                <img src={awardImg} alt="SK Motors receiving Pride of Tamil Nadu Award" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/80 md:to-surface" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-glow-sm">
                  <Trophy size={14} /> {t("award_kicker")}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase leading-tight">
                  <span className="text-primary text-glow">{t("award_title")}</span>
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t("award_desc")}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">Pride of Tamil Nadu</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">2025</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-surface to-surface-elevated border border-primary/30 rounded-3xl p-8 md:p-10 mb-10 shadow-elevated relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center shrink-0 shadow-glow">
                  <Award size={48} className="text-primary-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-sm uppercase tracking-widest text-primary font-bold">{t("head_tech")}</div>
                  <h3 className="text-3xl font-display font-bold uppercase">{t("head_tech_name")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("head_tech_desc")}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trust.map((tr, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full bg-surface border border-border rounded-2xl p-6 hover:border-primary/60 hover:-translate-y-1 transition-all hover:shadow-glow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 grid place-items-center text-primary mb-4">
                    <tr.icon size={24} />
                  </div>
                  <h4 className="font-display font-bold text-lg uppercase">{tr.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1.5">{tr.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-20 md:py-28 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">{t("reviews_kicker")}</span>
              <h2 className="mt-2 text-4xl md:text-5xl font-display font-bold uppercase">{t("reviews_title")}</h2>
              <p className="mt-3 text-muted-foreground">{t("reviews_sub_a")} <span className="text-primary font-bold">4.7★</span></p>
            </div>
          </Reveal>
          <ReviewsCarousel />
        </div>
      </section>

      {/* WHAT USERS LIKED */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="relative rounded-2xl border border-primary/30 bg-surface/60 backdrop-blur p-8 md:p-12 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/40 grid place-items-center text-primary">
                  <ThumbsUp size={22} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-primary">
                  {t("liked_title")}
                </h2>
              </div>
              <ul className="space-y-4 text-base md:text-lg text-foreground/90">
                {[t("liked_1"), t("liked_2"), t("liked_3"), t("liked_4"), t("liked_5")].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground grid place-items-center">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHATSAPP CUSTOMER CLUB */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-glow)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border-2 border-whatsapp/40 bg-gradient-to-br from-surface to-surface-elevated p-8 md:p-12 text-center shadow-elevated relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-whatsapp/30 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-whatsapp/15 border border-whatsapp/40 text-whatsapp mb-5">
                  <Users size={30} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold uppercase">
                  {t("customer_club")}
                </h2>
                <p className="mt-3 max-w-xl mx-auto text-muted-foreground">{t("customer_club_desc")}</p>
                <a
                  href="https://whatsapp.com/channel/0029VaP7toUGehEEQf3sdI1z"
                  target="_blank" rel="noopener"
                  className="mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-whatsapp text-white font-display font-bold uppercase tracking-wide hover:scale-[1.03] transition-all shadow-elevated"
                >
                  <MessageCircle size={18} /> {t("join_channel")}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">{t("location_kicker")}</span>
              <h2 className="mt-2 text-4xl md:text-5xl font-display font-bold uppercase">{t("location_title")}</h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <Reveal>
              <div className="space-y-4 h-full flex flex-col justify-center">
                <Info icon={MapPin} label={t("addr_label")} value={t("addr_value")} />
                <Info icon={Clock} label={t("hours_label")} value={t("hours_value")} />
                <Info icon={Phone} label={t("phone_label")} value="+91 98437 77729" href="tel:+919843777729" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SK+Motors+Service+Centre+Vandiyur+Madurai"
                  target="_blank" rel="noopener"
                  className="mt-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:shadow-glow transition-all"
                >
                  <MapPin size={18} /> {t("get_directions")}
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl overflow-hidden border-2 border-border h-[360px] lg:h-full min-h-[300px]">
                <iframe
                  title="SK Motors location"
                  src="https://www.google.com/maps?q=SK+Motors+Service+Centre+Vandiyur+Madurai&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "var(--gradient-radial-glow)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">{t("contact_title")}</h2>
            <p className="mt-3 text-muted-foreground">{t("contact_sub")}</p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+919843777729"
                className="sheen-on-hover inline-flex items-center justify-center gap-2 px-6 py-5 rounded-2xl bg-primary text-primary-foreground font-display font-bold uppercase tracking-wide text-lg hover:shadow-glow active:translate-y-0.5 transition-all"
              >
                <Phone size={20} /> {t("call_btn")} +91 98437 77729
              </a>
              <a
                href="https://wa.me/919843777729"
                target="_blank" rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-6 py-5 rounded-2xl bg-whatsapp text-white font-display font-bold uppercase tracking-wide text-lg hover:scale-[1.02] transition-all"
              >
                <MessageCircle size={20} /> {t("whatsapp_us")}
              </a>
            </div>
          </Reveal>
          <p className="mt-4 text-sm text-muted-foreground">{t("pickup_note")}</p>
        </div>
      </section>

      {/* QR / SCAN TO CONNECT */}
      <section className="relative py-20 md:py-24 bg-surface/30 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-surface to-surface-elevated border border-primary/30 rounded-3xl p-6 md:p-10 shadow-elevated">
              <div className="relative mx-auto w-full max-w-xs aspect-square rounded-2xl overflow-hidden border-4 border-primary/40 shadow-glow bg-black">
                <img src={qrImg} alt="SK Motors QR Code" className="w-full h-full object-contain" />
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                  <QrCode size={14} /> {t("scan_qr")}
                </div>
                <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold uppercase leading-tight">
                  <span className="text-primary text-glow">{t("shop_full_name")}</span>
                </h2>
                <p className="mt-3 text-muted-foreground">{t("scan_qr_desc")}</p>
                <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">
                  <a href="tel:+919843777729" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide hover:shadow-glow transition-all">
                    <Phone size={16} /> +91 98437 77729
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={skLogo} alt="SK Motors logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40" />
              <span className="text-xl font-display font-bold">SK MOTORS</span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-widest text-primary/80 font-bold">
              {t("shop_full_name")}
            </p>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              {t("expert_repairs_short")}
            </p>

            <div className="mt-5">
              <div className="font-display font-bold uppercase text-xs tracking-widest mb-3">{t("follow_us")}</div>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/p/SKmotors-service-Madurai-100069128598431/" target="_blank" rel="noopener" aria-label="Facebook" className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/sk.motorsservicecentre" target="_blank" rel="noopener" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://m.youtube.com/@sk.motorsservicecentremadu430" target="_blank" rel="noopener" aria-label="YouTube" className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                  <Youtube size={18} />
                </a>
                <a href="https://whatsapp.com/channel/0029VaP7toUGehEEQf3sdI1z" target="_blank" rel="noopener" aria-label="WhatsApp Channel" className="w-10 h-10 grid place-items-center rounded-full border border-border hover:border-whatsapp hover:text-whatsapp transition-all">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="font-display font-bold uppercase text-sm tracking-widest mb-3">{t("quick_links")}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary">{t("nav_home")}</a></li>
              <li><a href="#services" className="hover:text-primary">{t("nav_services")}</a></li>
              <li><a href="#reviews" className="hover:text-primary">{t("nav_reviews")}</a></li>
              <li><a href="#contact" className="hover:text-primary">{t("nav_contact")}</a></li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold uppercase text-sm tracking-widest mb-3">{t("contact_label")}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("addr_value")}</li>
              <li><a href="tel:+919843777729" className="hover:text-primary">+91 98437 77729</a></li>
              <li>{t("hours_value")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          {t("rights")}
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon: Icon, name, desc }: { icon: any; name: string; desc: string }) {
  const { t } = useI18n();
  return (
    <div className="group sheen-on-hover relative h-full bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/70 hover:shadow-glow active:translate-y-0">
      <div className="w-14 h-14 rounded-xl bg-primary/15 grid place-items-center text-primary mb-4 transition-transform duration-500 group-hover:rotate-[360deg]">
        <Icon size={28} />
      </div>
      <h3 className="font-display font-bold text-xl uppercase tracking-wide">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <a
        href={`https://wa.me/919843777729?text=${encodeURIComponent(`Hi, I'd like a quote for ${name}.`)}`}
        target="_blank" rel="noopener"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-3 transition-all"
      >
        {t("get_quote_wa")} <ArrowRight size={14} />
      </a>
    </div>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all">
      <div className="w-11 h-11 rounded-xl bg-primary/15 grid place-items-center text-primary shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-semibold text-lg">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
