import React, { useState } from "react"
import { Link } from "react-router"
import type { Route } from "./+types/home"
import imgHome from "../assets/adjour_livraison_form.png"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ADJOUR | Services Logistiques et Financiers" },
    {
      name: "description",
      content:
        "ADJOUR : expédiez vos colis, réservez vos vols et gérez vos finances avec la plateforme logistique et financière la plus fiable du Cameroun.",
    },
    {
      property: "og:title",
      content: "ADJOUR | Services Logistiques et Financiers",
    },
    {
      property: "og:description",
      content:
        "Tous vos services logistiques et financiers en un clic. La technologie au service de votre mobilité au Cameroun.",
    },
  ]
}

export const LocalShipping = (props:React.SVGProps<SVGSVGElement>) => (
<svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M5.688 19.115q-1.092 0-1.851-.762q-.76-.763-.76-1.853H1.692V6.615q0-.69.463-1.153Q2.617 5 3.308 5h13.23v3.615h2.308l3.462 4.654V16.5h-1.616q0 1.09-.764 1.853q-.764.762-1.856.762q-1.091 0-1.85-.762q-.76-.763-.76-1.853H8.308q0 1.096-.764 1.856q-.765.76-1.856.76Zm.004-1q.675 0 1.146-.47q.47-.47.47-1.145t-.47-1.145q-.47-.47-1.146-.47t-1.145.47q-.47.47-.47 1.145t.47 1.145q.47.47 1.145.47Zm12.385 0q.675 0 1.145-.47t.47-1.145t-.47-1.145q-.47-.47-1.145-.47t-1.145.47q-.47.47-.47 1.145t.47 1.145q.47.47 1.145.47ZM16.538 13.5h4.712l-2.942-3.885h-1.77V13.5Z" fill="currentColor"/>
</svg>
)

export const TrackChanges = (props:React.SVGProps<SVGSVGElement>) => (
<svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2h1v8.275q.45.275.725.713T14 12q0 .825-.588 1.413T12 14q-.825 0-1.413-.588T10 12q0-.575.275-1.025t.725-.7v-2.15q-1.3.35-2.15 1.413T8 12q0 1.65 1.175 2.825T12 16q1.65 0 2.825-1.175T16 12q0-.9-.363-1.663T14.65 9l1.425-1.425q.875.825 1.4 1.963T18 12q0 2.5-1.75 4.25T12 18q-2.5 0-4.25-1.75T6 12q0-2.25 1.425-3.913T11 6.075V4.05q-2.975.375-4.988 2.625T4 12q0 3.35 2.325 5.675T12 20q3.35 0 5.675-2.325T20 12q0-1.725-.675-3.225t-1.85-2.6L18.9 4.75q1.425 1.375 2.263 3.238T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" fill="currentColor"/>
</svg>
)

export const Search = (props:React.SVGProps<SVGSVGElement>) => (
<svg height="30" width="30" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M10 .188A9.812 9.812 0 0 0 .187 10A9.812 9.812 0 0 0 10 19.813c2.29 0 4.393-.811 6.063-2.125l.875.875a1.845 1.845 0 0 0 .343 2.156l4.594 4.625c.713.714 1.88.714 2.594 0l.875-.875a1.84 1.84 0 0 0 0-2.594l-4.625-4.594a1.824 1.824 0 0 0-2.157-.312l-.875-.875A9.812 9.812 0 0 0 10 .188zM10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zM4.937 7.469a5.446 5.446 0 0 0-.812 2.875a5.46 5.46 0 0 0 5.469 5.469a5.516 5.516 0 0 0 3.156-1a7.166 7.166 0 0 1-.75.03a7.045 7.045 0 0 1-7.063-7.062c0-.104-.005-.208 0-.312z" fill="currentColor"/>
</svg>
)

export const Apartment = (props:React.SVGProps<SVGSVGElement>) => (
<svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M3 21V7h4V3h10v8h4v10h-8v-4h-2v4H3Zm2-2h2v-2H5v2Zm0-4h2v-2H5v2Zm0-4h2V9H5v2Zm4 4h2v-2H9v2Zm0-4h2V9H9v2Zm0-4h2V5H9v2Zm4 8h2v-2h-2v2Zm0-4h2V9h-2v2Zm0-4h2V5h-2v2Zm4 12h2v-2h-2v2Zm0-4h2v-2h-2v2Z" fill="currentColor"/>
</svg>
)
 


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <div className="bg-background">
      <div className="px-4 sm:px-margin-desktop">
        <div className="text-on-surface font-body-lg">
          {/* Top Navigation Bar */}
          <header className="glass-nav border-outline-variant fixed top-0 right-0 left-0 z-50 border-b bg-white/60 backdrop-blur-sm">
            <div className="px-margin-desktop max-w-max-width mx-auto flex h-20 w-full items-center justify-between px-4">
              {/* Brand Logo */}
              <Link
                to="/"
                className="text-headline-md font-headline-md font-bold text-primary"
              >
                ADJOUR
              </Link>
              {/* Mobile menu button */}
              <button
                className="md:hidden ml-4 rounded-lg p-2 text-on-surface-variant hover:bg-primary/5"
                aria-label="Open menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
              {/* Navigation Links */}
              <nav className="hidden items-center gap-8 md:flex">
                <Link
                  className="font-label-caps text-label-caps border-b-2 border-primary pb-1 font-bold text-primary"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-on-surface-variant font-label-caps text-label-caps transition-colors hover:text-primary"
                  to="/vehicles"
                >
                  Location
                </Link>
                <a
                  className="text-on-surface-variant font-label-caps text-label-caps transition-colors hover:text-primary"
                  href="#"
                >
                  Support
                </a>
                <Link
                  className="text-on-surface-variant font-label-caps text-label-caps transition-colors hover:text-primary"
                  to="/portal"
                >
                  Dashboard
                </Link>
              </nav>
              {/* Mobile navigation (dropdown) */}
              <nav
                className={`md:hidden absolute top-full left-0 right-0 z-40 mt-2 w-full bg-white shadow-lg border-t border-outline-variant transition-transform ${
                  menuOpen ? "block" : "hidden"
                }`}
                aria-hidden={!menuOpen}
              >
                <div className="px-margin-desktop max-w-max-width mx-auto flex flex-col gap-2 py-4">
                  <Link to="/" className="py-2 font-bold text-primary">
                    Home
                  </Link>
                  <Link to="/vehicles" className="py-2 text-on-surface-variant">
                    Location
                  </Link>
                  <a className="py-2 text-on-surface-variant" href="#">
                    Support
                  </a>
                  <Link to="/portal" className="py-2 text-on-surface-variant">
                    Dashboard
                  </Link>
                </div>
              </nav>
              {/* Actions */}
              <div className="flex items-center gap-4">
                <Link
                  to="/auth"
                  className="font-body-sm text-body-sm px-4 py-2 text-primary transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                >
                  Sign In
                </Link>
                <button className="bg-secondary-container text-on-secondary-container rounded-lg px-6 py-2 font-bold shadow-sm transition-all hover:brightness-110 active:scale-95">
                  Create Account
                </button>
              </div>
            </div>
          </header>
          <main className="pt-24">
            {/* Hero Section */}
            <section className="bg-surface-container-low relative overflow-hidden py-10 lg:py-10">
              
              <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 place-items-center items-center gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 ml-20">
                <div className="w-full max-w-md mx-auto -mt-57">
                  <span className="bg-primary-container/10 font-label-caps text-label-caps inline-block rounded-full px-3  text-primary">
                    LOGISTIQUE &amp; FINANCE AU CAMEROUN
                  </span>
                  <h1 className="font-headline-lg font-bold text-headline-lg text-primary lg:text-[56px] lg:leading-[64px]">
                    Tous&nbsp;vos&nbsp;services<br/> en un clic
                  </h1>
                  <p className="text-on-surface-variant font-body-lg text-body-lg max-w-lg">
                    Expédiez vos colis, réservez vos vols et gérez vos finances
                    avec la plateforme la plus fiable. La technologie au service
                    de votre mobilité.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                    <Link
                      to="/shipments/new"
                      className="text-on-primary flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold shadow-lg transition-transform hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <LocalShipping className="material-symbols-outlined">local_shipping</LocalShipping>
                      Expédier un colis
                    </Link>
                    <Link
                      to="/"
                      className="flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    >
                      <TrackChanges className="material-symbols-outlined">track_changes</TrackChanges>
                      Suivre un colis
                    </Link>
                  </div>
                </div>
                <div className="hidden h-full w-full lg:block">
                  <div className="animate-float aspect-square w-100 overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      className="h-full w-full object-cover"
                      alt="Illustration numérique moderne et professionnelle présentant un réseau logistique fluide à travers le Cameroun, avec avions cargo, camions de livraison bleu profond et flux de données lumineux reliant les grandes villes."
                      src={imgHome}
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Quick Tracking Bar */}
            <section className="px-margin-desktop relative z-20 -mt-62">
              <div className="border-outline-variant mx-auto max-w-4xl rounded-2xl border bg-white p-4 shadow-xl md:p-6">
                <div className="flex flex-col items-stretch gap-4 md:flex-row">
                  <div className="relative flex-1">
                    <Search className="material-symbols-outlined text-outline absolute top-1/2 left-4 -translate-y-1/2">
                      search
                    </Search>
                    <input
                      className="border-outline-variant font-body-lg text-body-lg w-full rounded-xl border py-4 pr-4 pl-12 transition-all outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Entrez votre numéro de suivi (ex: ADJ-88293-CM)"
                      type="text"
                      aria-label="Numéro de suivi"
                    />
                  </div>
                  <button className="bg-tertiary hover:bg-tertiary-container rounded-xl px-8 py-3 font-bold text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-tertiary/30">
                    Suivre maintenant
                  </button>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 text-center md:text-left">
                  Suivez vos expéditions nationales et internationales en temps
                  réel.
                </p>
              </div>
            </section>
            {/* Services Bento Grid */}
            <section className="max-w-max-width px-margin-desktop mx-auto py-24">
              <div className="mb-16 text-center">
                <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                  Nos Services Premium
                </h2>
                <p className="text-on-surface-variant font-body-lg text-body-lg mx-auto max-w-2xl">
                  Une suite complète de solutions logistiques et financières
                  adaptées aux besoins des particuliers et des entreprises.
                </p>
              </div>
              <div className="gap-gutter-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* Shipping Card */}
                <div className="bg-surface card-shadow hover-lift border-outline-variant flex flex-col items-start gap-6 rounded-2xl border p-8 min-h-[260px]">
                  <div className="bg-primary-container/10 flex h-16 w-16 items-center justify-center rounded-xl text-primary">
                    <LocalShipping className="material-symbols-outlined text-[32px]">
                      local_shipping
                    </LocalShipping>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      Shipping
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Expédition de colis sécurisée, locale et internationale
                      avec suivi de bout en bout.
                    </p>
                  </div>
                  <Link
                    className="mt-auto inline-flex items-center gap-1 font-bold text-primary transition-all hover:gap-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    to="/shipments/new"
                  >
                    En savoir plus
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                {/* Rentals Card */}
                <div className="bg-surface card-shadow hover-lift border-outline-variant flex flex-col items-start gap-6 rounded-2xl border p-8 min-h-[260px]">
                  <div className="bg-tertiary-container/10 text-tertiary-container flex h-16 w-16 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[32px]">
                      apartment
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      Rentals
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Solutions de location de véhicules et d'espaces de
                      stockage pour vos opérations logistiques.
                    </p>
                  </div>
                  <Link
                    className="mt-auto inline-flex items-center gap-1 font-bold text-primary transition-all hover:gap-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    to="/vehicles"
                  >
                    En savoir plus
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </section>
            {/* How It Works */}
            <section className="bg-inverse-surface text-inverse-on-surface py-24">
              <div className="max-w-max-width px-margin-desktop mx-auto">
                <div className="mb-16 flex flex-col items-end justify-between gap-8 lg:flex-row">
                  <div className="max-w-xl">
                    <h2 className="font-headline-lg text-headline-lg mb-4 text-white">
                      Comment ça marche ?
                    </h2>
                    <p className="font-body-lg text-body-lg opacity-80">
                      Notre processus est conçu pour simplifier vos opérations
                      quotidiennes en quatre étapes simples.
                    </p>
                  </div>
                  <button className="rounded-lg bg-white px-8 py-3 font-bold text-primary transition-colors hover:bg-white/90">
                    Commencer maintenant
                  </button>
                </div>
                  <div className="gap-gutter-md relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Connector Line (Desktop Only) */}
                    <div className="absolute top-12 left-8 right-8 mx-auto hidden lg:block h-0.5 bg-outline z-0 opacity-30" aria-hidden="true"></div>
                  {/* Step 1 */}
                  <div className="relative z-10 space-y-4">
                    <div className="border-inverse-surface flex h-12 w-12 items-center justify-center rounded-full border-4 bg-primary font-bold text-white">
                      1
                    </div>
                    <h4 className="font-headline-sm text-headline-sm">
                      Choisissez un service
                    </h4>
                    <p className="font-body-sm text-body-sm opacity-70">
                      Sélectionnez parmi la logistique, les voyages ou les
                      finances selon vos besoins actuels.
                    </p>
                  </div>
                  {/* Step 2 */}
                  <div className="relative z-10 space-y-4">
                    <div className="border-inverse-surface flex h-12 w-12 items-center justify-center rounded-full border-4 bg-primary font-bold text-white">
                      2
                    </div>
                    <h4 className="font-headline-sm text-headline-sm">
                      Entrez les détails
                    </h4>
                    <p className="font-body-sm text-body-sm opacity-70">
                      Complétez les informations requises de manière simple via
                      notre interface intuitive.
                    </p>
                  </div>
                  {/* Step 3 */}
                  <div className="relative z-10 space-y-4">
                    <div className="border-inverse-surface flex h-12 w-12 items-center justify-center rounded-full border-4 bg-primary font-bold text-white">
                      3
                    </div>
                    <h4 className="font-headline-sm text-headline-sm">
                      Effectuez le paiement
                    </h4>
                    <p className="font-body-sm text-body-sm opacity-70">
                      Payez en toute sécurité via Mobile Money, carte bancaire
                      ou compte ADJOUR.
                    </p>
                  </div>
                  {/* Step 4 */}
                  <div className="relative z-10 space-y-4">
                    <div className="bg-success border-inverse-surface flex h-12 w-12 items-center justify-center rounded-full border-4 font-bold text-white">
                      4
                    </div>
                    <h4 className="font-headline-sm text-headline-sm">
                      Suivez en direct
                    </h4>
                    <p className="font-body-sm text-body-sm opacity-70">
                      Recevez des notifications en temps réel et suivez
                      l'avancement de votre demande.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Stats Banner */}
            <section className="bg-surface border-outline-variant border-y py-16">
              <div className="max-w-max-width px-margin-desktop gap-gutter-md mx-auto grid grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="text-headline-lg font-headline-lg text-primary">
                    50k+
                  </div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    Colis livrés
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-headline-lg font-headline-lg text-primary">
                    120+
                  </div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    Partenaires globaux
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-headline-lg font-headline-lg text-primary">
                    24/7
                  </div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    Support client
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-headline-lg font-headline-lg text-primary">
                    99.9%
                  </div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    Fiabilité système
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* Footer */}
          <footer className="bg-surface-container-low border-outline-variant border-t pt-20 pb-12">
            <div className="gap-gutter-md px-margin-desktop max-w-max-width mx-auto grid grid-cols-2 py-12 md:grid-cols-4">
              {/* Brand Column */}
              <div className="col-span-2 space-y-6 md:col-span-1">
                <Link
                  to="/"
                  className="text-headline-sm font-headline-sm font-bold text-primary"
                >
                  ADJOUR
                </Link>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Propulser l'économie camerounaise grâce à une logistique
                  intelligente et des services financiers accessibles.
                </p>
                <div className="flex gap-4">
                  <a
                    className="bg-outline-variant/30 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      public
                    </span>
                  </a>
                  <a
                    className="bg-outline-variant/30 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      send
                    </span>
                  </a>
                </div>
              </div>
              {/* Links Column 1 */}
              <div className="space-y-4">
                <h5 className="font-label-caps text-label-caps text-on-surface font-bold">
                  Services
                </h5>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                      to="/shipments/new"
                    >
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <a
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                      href="#"
                    >
                      Travel
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                      href="#"
                    >
                      Money Transfer
                    </a>
                  </li>
                  <li>
                    <Link
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                      to="/vehicles"
                    >
                      Rentals
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Links Column 2 */}
              <div className="space-y-4">
                <h5 className="font-label-caps text-label-caps text-on-surface font-bold">
                  Entreprise
                </h5>
                <ul className="space-y-2">
                  <li>
                    <a
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                      href="#"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              {/* Newsletter Column */}
              <div className="col-span-2 space-y-4 md:col-span-1">
                <h5 className="font-label-caps text-label-caps text-on-surface font-bold">
                  Newsletter
                </h5>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Inscrivez-vous pour recevoir nos dernières offres.
                </p>
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    className="border-outline-variant text-body-sm w-full rounded-lg border bg-white px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="Email"
                    type="email"
                    aria-label="Email newsletter"
                  />
                  <button
                    className="rounded-lg bg-primary p-2 text-white hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    type="submit"
                  >
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="max-w-max-width px-margin-desktop border-outline-variant mx-auto mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">
                © 2026 ADJOUR Platform. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary"
                  href="#"
                >
                  Conditions d'utilisation
                </a>
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary"
                  href="#"
                >
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </footer>
          {/* FAB for Support */}
          <button
            type="button"
            aria-label="Besoin d'aide"
            className="bg-secondary-container text-on-secondary-container group fixed right-8 bottom-8 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary/40"
          >
            <span className="material-symbols-outlined text-[28px]" aria-hidden="true">support_agent</span>
            <span
              role="tooltip"
              className="bg-on-surface text-surface pointer-events-none absolute right-full mr-4 rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100"
            >
              Besoin d'aide ?
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
