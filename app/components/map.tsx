interface MapProps {
  address: string;
}

export function SimpleMap({ address }: MapProps) {
  // On encode l'adresse pour l'URL Google Maps
const mapUrl = `https://google.com${encodeURIComponent(address)}&t=&z=13&ie=UTF-8&iwloc=&output=embed`;

  return (
    <div className="w-124 aspect-video rounded-xl border bg-muted overflow-hidden shadow-sm">
      <iframe
        title="Google Maps"
        src={mapUrl}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
