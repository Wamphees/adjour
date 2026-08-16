import React, { useState } from "react"
import { Link } from "react-router"
import type { Route } from "./+types/home"

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="">
      <div className="">
        <div className="text-on-surface font-body-lg bg-background">
          {/* Top Navigation Bar */}
          <header className="glass-nav border-outline-variant fixed top-0 right-0 left-0 z-50 border-b bg-white/60 backdrop-blur-sm">
            <div className="px-margin-desktop max-w-max-width mx-auto flex h-20 w-full items-center justify-between">
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
            <section className="bg-surface-container-low relative overflow-hidden py-20 lg:py-32">
              <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
                {/* Abstract Background Pattern using CSS Gradients */}
                <div className="bg-primary-container absolute top-[-10%] right-[-10%] h-[100%] w-[50%] rounded-full blur-[120px]"></div>
                <div className="bg-secondary-container absolute bottom-[-10%] left-[-10%] h-[80%] w-[40%] rounded-full blur-[100px]"></div>
              </div>
              <div className="max-w-max-width px-margin-desktop gap-gutter-md relative z-10 mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className="space-y-6 text-center lg:text-left">
                  <span className="bg-primary-container/10 font-label-caps text-label-caps inline-block rounded-full px-3 py-1 text-primary">
                    LOGISTIQUE &amp; FINANCE AU CAMEROUN
                  </span>
                  <h1 className="font-headline-lg text-headline-lg text-primary lg:text-[56px] lg:leading-[64px]">
                    Tous vos services en un clic
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
                      <span className="material-symbols-outlined">local_shipping</span>
                      Expédier un colis
                    </Link>
                    <Link
                      to="/"
                      className="flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    >
                      <span className="material-symbols-outlined">track_changes</span>
                      Suivre un colis
                    </Link>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="animate-float aspect-square w-full overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      className="h-full w-full object-cover"
                      alt="Illustration numérique moderne et professionnelle présentant un réseau logistique fluide à travers le Cameroun, avec avions cargo, camions de livraison bleu profond et flux de données lumineux reliant les grandes villes."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvr5AaJA8hZb_LWQbWzcdVQmktB7BmJQm6NEq0RXrtEob0QNuFFwFYnraP5bgYCZ7vheHXPeuKcDb4d9A1q9AbTOR0xkOqvinaphWEzdbqumpEXamgtre1foTVAIJuAvq4iXwuD59jSAfNww21Qe2BrYcfksOIleOzVKmujK8dl8P4BOMrKSnu0OmB-M0bdK0honX_c01zzJeb9c6F4efVBfZS8MtK4-WBRRR9UyajByPEEFEQZtpp"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Quick Tracking Bar */}
            <section className="px-margin-desktop relative z-20 -mt-12">
              <div className="border-outline-variant mx-auto max-w-4xl rounded-2xl border bg-white p-4 shadow-xl md:p-6">
                <div className="flex flex-col items-stretch gap-4 md:flex-row">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined text-outline absolute top-1/2 left-4 -translate-y-1/2">
                      search
                    </span>
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
                    <span className="material-symbols-outlined text-[32px]">
                      local_shipping
                    </span>
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
                {/* Flights Card */}
                <div className="bg-surface card-shadow hover-lift border-outline-variant flex flex-col items-start gap-6 rounded-2xl border p-8 min-h-[260px]">
                  <div className="bg-secondary-container/10 flex h-16 w-16 items-center justify-center rounded-xl text-secondary">
                    <span className="material-symbols-outlined text-[32px]">
                      flight
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      Travel
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Réservation de billets d'avion aux meilleurs tarifs pour
                      vos déplacements pro ou perso.
                    </p>
                  </div>
                  <a
                    className="mt-auto inline-flex items-center gap-1 font-bold text-primary transition-all hover:gap-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    href="#"
                  >
                    En savoir plus
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
                {/* Money Transfer Card */}
                <div className="bg-surface card-shadow hover-lift border-outline-variant flex flex-col items-start gap-6 rounded-2xl border p-8 min-h-[260px]">
                  <div className="bg-success/10 text-success flex h-16 w-16 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[32px]">
                      payments
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      Money
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Transferts d'argent rapides et sécurisés pour soutenir vos
                      proches ou payer vos factures.
                    </p>
                  </div>
                  <a
                    className="mt-auto inline-flex items-center gap-1 font-bold text-primary transition-all hover:gap-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    href="#"
                  >
                    En savoir plus
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
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
