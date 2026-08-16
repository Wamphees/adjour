import { Link } from "react-router"
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ADJOUR | Services Logistiques et Financiers" },
    {
      name: "description",
      content:
        "ADJOUR : expédiez vos colis, réservez vos vols et gérez vos finances avec la plateforme logistique et financière la plus fiable du Cameroun.",
    },
    { property: "og:title", content: "ADJOUR | Services Logistiques et Financiers" },
    {
      property: "og:description",
      content:
        "Tous vos services logistiques et financiers en un clic. La technologie au service de votre mobilité au Cameroun.",
    },
  ];
}

export default function Home() {
  return (

    <div>
      <div>
            <div className="bg-background text-on-surface font-body-lg">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-outline-variant">
        <div className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-20">
          {/* Brand Logo */}
          <Link to="/" className="text-headline-md font-headline-md font-bold text-primary">
            ADJOUR
          </Link>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="text-primary border-b-2 border-primary font-bold pb-1 font-label-caps text-label-caps"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps"
              to="/vehicles"
            >
              Location
            </Link>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps"
              href="#"
            >
              Support
            </a>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps"
              to="/portal"
            >
              Dashboard
            </Link>
          </nav>
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/auth" className="px-4 py-2 text-primary font-body-sm text-body-sm hover:opacity-80 transition-opacity">
              Sign In
            </Link>
            <button className="px-6 py-2 bg-secondary-container text-on-secondary-container font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-sm">
              Create Account
            </button>
          </div>
        </div>
      </header>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface-container-low py-20 lg:py-32">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {/* Abstract Background Pattern using CSS Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[100%] rounded-full bg-primary-container blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] rounded-full bg-secondary-container blur-[100px]"></div>
          </div>
          <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter-md items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-container/10 text-primary font-label-caps text-label-caps">
                LOGISTIQUE &amp; FINANCE AU CAMEROUN
              </span>
              <h1 className="font-headline-lg text-headline-lg lg:text-[56px] lg:leading-[64px] text-primary">
                Tous vos services en un clic
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-lg">
                Expédiez vos colis, réservez vos vols et gérez vos finances avec la plateforme la plus fiable. La
                technologie au service de votre mobilité.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/shipments/new"
                  className="px-8 py-4 bg-primary text-on-primary font-bold rounded-xl shadow-lg hover:brightness-110 hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">local_shipping</span>Expédier un colis
                </Link>
                <Link
                  to="/"
                  className="px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">track_changes</span>Suivre un colis
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img
                  className="w-full h-full object-cover"
                  alt="Illustration numérique moderne et professionnelle présentant un réseau logistique fluide à travers le Cameroun, avec avions cargo, camions de livraison bleu profond et flux de données lumineux reliant les grandes villes."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvr5AaJA8hZb_LWQbWzcdVQmktB7BmJQm6NEq0RXrtEob0QNuFFwFYnraP5bgYCZ7vheHXPeuKcDb4d9A1q9AbTOR0xkOqvinaphWEzdbqumpEXamgtre1foTVAIJuAvq4iXwuD59jSAfNww21Qe2BrYcfksOIleOzVKmujK8dl8P4BOMrKSnu0OmB-M0bdK0honX_c01zzJeb9c6F4efVBfZS8MtK4-WBRRR9UyajByPEEFEQZtpp"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Quick Tracking Bar */}
        <section className="relative z-20 -mt-10 px-margin-desktop">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-outline-variant">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                  search
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-lg text-body-lg outline-none"
                  placeholder="Entrez votre numéro de suivi (ex: ADJ-88293-CM)"
                  type="text"
                />
              </div>
              <button className="px-10 py-4 bg-tertiary text-white font-bold rounded-xl hover:bg-tertiary-container transition-colors shadow-sm">
                Suivre maintenant
              </button>
            </div>
            <p className="mt-3 text-center md:text-left font-body-sm text-body-sm text-on-surface-variant">
              Suivez vos expéditions nationales et internationales en temps réel.
            </p>
          </div>
        </section>
        {/* Services Bento Grid */}
        <section className="py-24 max-w-max-width mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Nos Services Premium</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto">
              Une suite complète de solutions logistiques et financières adaptées aux besoins des particuliers et des
              entreprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-md">
            {/* Shipping Card */}
            <div className="bg-surface card-shadow p-8 rounded-2xl hover-lift border border-outline-variant flex flex-col items-start gap-6">
              <div className="w-16 h-16 bg-primary-container/10 text-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">local_shipping</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Shipping</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Expédition de colis sécurisée, locale et internationale avec suivi de bout en bout.
                </p>
              </div>
              <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" to="/shipments/new">
                En savoir plus <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Flights Card */}
            <div className="bg-surface card-shadow p-8 rounded-2xl hover-lift border border-outline-variant flex flex-col items-start gap-6">
              <div className="w-16 h-16 bg-secondary-container/10 text-secondary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">flight</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Travel</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Réservation de billets d'avion aux meilleurs tarifs pour vos déplacements pro ou perso.
                </p>
              </div>
              <a className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                En savoir plus <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            {/* Money Transfer Card */}
            <div className="bg-surface card-shadow p-8 rounded-2xl hover-lift border border-outline-variant flex flex-col items-start gap-6">
              <div className="w-16 h-16 bg-success/10 text-success rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">payments</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Money</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Transferts d'argent rapides et sécurisés pour soutenir vos proches ou payer vos factures.
                </p>
              </div>
              <a className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                En savoir plus <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            {/* Rentals Card */}
            <div className="bg-surface card-shadow p-8 rounded-2xl hover-lift border border-outline-variant flex flex-col items-start gap-6">
              <div className="w-16 h-16 bg-tertiary-container/10 text-tertiary-container rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">apartment</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Rentals</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Solutions de location de véhicules et d'espaces de stockage pour vos opérations logistiques.
                </p>
              </div>
              <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" to="/vehicles">
                En savoir plus <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
        {/* How It Works */}
        <section className="bg-inverse-surface py-24 text-inverse-on-surface">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline-lg text-headline-lg mb-4 text-white">Comment ça marche ?</h2>
                <p className="font-body-lg text-body-lg opacity-80">
                  Notre processus est conçu pour simplifier vos opérations quotidiennes en quatre étapes simples.
                </p>
              </div>
              <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors">
                Commencer maintenant
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-md relative">
              {/* Connector Line (Desktop Only) */}
              <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-outline opacity-30 z-0"></div>
              {/* Step 1 */}
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white border-4 border-inverse-surface">
                  1
                </div>
                <h4 className="font-headline-sm text-headline-sm">Choisissez un service</h4>
                <p className="font-body-sm text-body-sm opacity-70">
                  Sélectionnez parmi la logistique, les voyages ou les finances selon vos besoins actuels.
                </p>
              </div>
              {/* Step 2 */}
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white border-4 border-inverse-surface">
                  2
                </div>
                <h4 className="font-headline-sm text-headline-sm">Entrez les détails</h4>
                <p className="font-body-sm text-body-sm opacity-70">
                  Complétez les informations requises de manière simple via notre interface intuitive.
                </p>
              </div>
              {/* Step 3 */}
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white border-4 border-inverse-surface">
                  3
                </div>
                <h4 className="font-headline-sm text-headline-sm">Effectuez le paiement</h4>
                <p className="font-body-sm text-body-sm opacity-70">
                  Payez en toute sécurité via Mobile Money, carte bancaire ou compte ADJOUR.
                </p>
              </div>
              {/* Step 4 */}
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center font-bold text-white border-4 border-inverse-surface">
                  4
                </div>
                <h4 className="font-headline-sm text-headline-sm">Suivez en direct</h4>
                <p className="font-body-sm text-body-sm opacity-70">
                  Recevez des notifications en temps réel et suivez l'avancement de votre demande.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Banner */}
        <section className="py-16 bg-surface border-y border-outline-variant">
          <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-gutter-md">
            <div className="text-center">
              <div className="text-headline-lg font-headline-lg text-primary">50k+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Colis livrés</div>
            </div>
            <div className="text-center">
              <div className="text-headline-lg font-headline-lg text-primary">120+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Partenaires globaux</div>
            </div>
            <div className="text-center">
              <div className="text-headline-lg font-headline-lg text-primary">24/7</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Support client</div>
            </div>
            <div className="text-center">
              <div className="text-headline-lg font-headline-lg text-primary">99.9%</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Fiabilité système</div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter-md px-margin-desktop py-12 max-w-max-width mx-auto">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <Link to="/" className="text-headline-sm font-headline-sm font-bold text-primary">
              ADJOUR
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Propulser l'économie camerounaise grâce à une logistique intelligente et des services financiers
              accessibles.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </a>
            </div>
          </div>
          {/* Links Column 1 */}
          <div className="space-y-4">
            <h5 className="font-label-caps text-label-caps text-on-surface font-bold">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" to="/shipments/new">
                  Shipping
                </Link>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">
                  Travel
                </a>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">
                  Money Transfer
                </a>
              </li>
              <li>
                <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" to="/vehicles">
                  Rentals
                </Link>
              </li>
            </ul>
          </div>
          {/* Links Column 2 */}
          <div className="space-y-4">
            <h5 className="font-label-caps text-label-caps text-on-surface font-bold">Entreprise</h5>
            <ul className="space-y-2">
              <li>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h5 className="font-label-caps text-label-caps text-on-surface font-bold">Newsletter</h5>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Inscrivez-vous pour recevoir nos dernières offres.
            </p>
            <form className="flex gap-2">
              <input
                className="flex-1 px-4 py-2 rounded-lg border border-outline-variant bg-white focus:outline-none focus:border-primary text-body-sm"
                placeholder="Email"
                type="email"
              />
              <button className="p-2 bg-primary text-white rounded-lg hover:brightness-110" type="submit">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-desktop border-t border-outline-variant mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">
            © 2026 ADJOUR Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">
              Conditions d'utilisation
            </a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </footer>
      {/* FAB for Support */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <span className="material-symbols-outlined text-[28px]">support_agent</span>
        <span className="absolute right-full mr-4 bg-on-surface text-surface px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Besoin d'aide ?
        </span>
      </button>
    </div>
      </div>
    </div>
    


  );
}
    //<div className="flex min-h-svh p-6">
    //   <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
    //     <div>
    //       <h1 className="font-medium">Project ready!</h1>
    //       <p>You may now add components and start building.</p>
    //       <p>We&apos;ve already added the button component for you.</p>
    //       <Button className="mt-2">Button</Button>
    //     </div>
    //   </div>
    // </div>
// import { createFileRoute, Link } from "@tanstack/react-router";
// import {createFi}
