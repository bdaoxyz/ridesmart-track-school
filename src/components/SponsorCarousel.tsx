import ororLogo from "@/assets/sponsors/oror-logo.jpg";
import pirelliLogo from "@/assets/sponsors/pirelli-logo.png";
import senaLogo from "@/assets/sponsors/sena-logo.png";
import texasTraditionsBank from "@/assets/sponsors/texas-traditions-bank.png";
import bittingerLogo from "@/assets/sponsors/bittinger-logo.jpg";
import ctxMotoworks from "@/assets/sponsors/ctx-motoworks.png";
import riskRacing from "@/assets/sponsors/risk-racing.jpg";
import pitBull from "@/assets/sponsors/pit-bull.png";
import shopMotul from "@/assets/sponsors/shop-motul.png";
import apriliaLogo from "@/assets/sponsors/aprilia-logo.jpg";

const SponsorCarousel = () => {
  const sponsors = [
    { name: "OnRoad OffRoad", logo: ororLogo },
    { name: "Pirelli", logo: pirelliLogo },
    { name: "Sena", logo: senaLogo },
    { name: "Texas Traditions Bank", logo: texasTraditionsBank },
    { name: "Bittinger Motorsports", logo: bittingerLogo },
    { name: "CTX Motoworks", logo: ctxMotoworks },
    { name: "Risk Racing", logo: riskRacing },
    { name: "Pit Bull", logo: pitBull },
    { name: "Shop Motul", logo: shopMotul },
    { name: "Aprilia", logo: apriliaLogo },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative bg-white/90 backdrop-blur-sm border-t border-white/20 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider opacity-70">
            Proud Partners & Sponsors
          </h3>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left space-x-12 w-fit">
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 h-12 w-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain filter contrast-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCarousel;