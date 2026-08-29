// Mini Split Local Pros â€” Why Choose Us Pool
export function getWhyChoosePool(city, state, brand) {
  const loc = city ? `${city.name}` : `${state.name}`;

  return [
    {
      p1: `When you choose ${brand} for your ductless HVAC needs in ${loc}, you're partnering with certified mini split specialists. Unlike general HVAC companies, our technicians train extensively on ductless technology. This specialized expertise allows us to accurately diagnose complex error codes, resolve obscure refrigerant leaks, and correctly calibrate multi-zone communication boards on the first visit.`,
      p2: `We understand that a failing AC or heat pump is a major disruption. That's why we stock our service vehicles with the most common sensors, control boards, and refrigerant types for Mitsubishi, Daikin, LG, and Fujitsu systems. Our goal is to provide same-day resolutions, transparent upfront pricing, and a completely stress-free experience from start to finish.`
    },
    {
      p1: `At ${brand}, we believe that quality service in ${loc} shouldn't come with hidden surprises. We provide clear, written estimates before any repair or installation begins. Our technicians use state-of-the-art diagnostic equipment to pinpoint the exact cause of your system's failure â€” whether it's a frozen indoor coil, a failing outdoor compressor, or a simple clogged condensate drain.`,
      p2: `We back every service call with an ironclad satisfaction guarantee and comprehensive warranties on all new parts and equipment. When you invite our team into your home, you can expect punctuality, respect, and a clean workspace. We always use drop cloths and wear shoe covers to protect your property.`
    },
    {
      p1: `What sets ${brand} apart in ${loc} is our 24/7 dedication to our customers. Mini split emergencies don't stick to business hours. If your heat pump fails during a winter freeze or your ductless AC stops cooling during a summer heatwave, our rapid-response emergency team is always ready to dispatch.`,
      p2: `We pride ourselves on doing the job right the first time. We don't just patch symptoms; we address the root cause of the system failure. If your unit is low on refrigerant, we use advanced electronic leak detectors to find and seal the leak before recharging the system, ensuring your investment is protected and operating at peak efficiency.`
    },
    {
      p1: `Mini split systems are highly sophisticated pieces of equipment that require specialized knowledge. In ${loc}, ${brand} is the recognized authority on ductless technology. Whether you need a simple annual cleaning of your blower wheel and filters, or a complex multi-zone installation for a historic home without ductwork, we have the experience to execute it flawlessly.`,
      p2: `We are committed to helping you maximize your energy savings and system lifespan. Our comprehensive preventative maintenance plans keep your indoor units mold-free and your outdoor condenser operating at maximum efficiency, saving you money on utility bills and preventing costly future breakdowns.`
    },
    {
      p1: `Residents of ${loc} consistently rate ${brand} five stars because we prioritize customer education alongside top-tier technical service. After every repair or installation, our technicians take the time to walk you through your system's remote control functions, app integration, and proper filter cleaning procedures.`,
      p2: `As a locally operated network of certified HVAC experts, we understand the specific climate demands of ${state.name}. We size and install heat pumps specifically rated for your local weather extremes, ensuring you stay comfortable indoors no matter what the temperature is outside.`
    },
    {
      p1: `Don't trust your expensive ductless system to a handyman or a general contractor. Improper installation or maintenance voids manufacturer warranties and can lead to dangerous electrical faults or rapid compressor failure. ${brand} provides licensed, insured, and warranty-compliant service across ${loc}.`,
      p2: `From residential single-room cooling solutions to commercial multi-zone VRF systems, our portfolio of successful projects is vast. We offer flexible financing options for new installations and focus on delivering the highest quality parts and labor available in the HVAC industry today.`
    }
  ];
}

