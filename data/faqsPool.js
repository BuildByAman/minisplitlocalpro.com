// Mini Split Local Pros â€” FAQ Pool
export function getFaqsPool(city, state, brand, phone) {
  const loc = city ? `${city.name}, ${state.abbr}` : state.name;
  const locFull = city ? `${city.name}, ${state.name}` : state.name;

  return [
    {
      q: `How much does mini split repair cost in ${loc}?`,
      a: `Mini split repair costs in ${loc} typically range from $150â€“$650 depending on the issue. Common repairs like refrigerant recharge run $200â€“$400, while compressor replacement can be $600â€“$1,200. ${brand} provides upfront estimates before any work begins. Call ${phone} for a free quote.`
    },
    {
      q: `How long does mini split installation take in ${locFull}?`,
      a: `A standard single-zone mini split installation in ${locFull} takes 4â€“8 hours. Multi-zone systems may take 1â€“2 days depending on complexity. Our certified technicians work efficiently to minimize disruption to your home or business.`
    },
    {
      q: `Why is my mini split not cooling in ${loc}?`,
      a: `Common reasons a mini split won't cool in ${loc} include low refrigerant (leak), dirty air filters or coils, a faulty compressor, or incorrect temperature settings. ${brand} technicians will diagnose the exact issue and fix it same day.`
    },
    {
      q: `Do you offer same day mini split service in ${loc}?`,
      a: `Yes! ${brand} offers same day mini split repair and emergency service in ${loc}. Call ${phone} and our local HVAC technicians will respond quickly to get your system running again.`
    },
    {
      q: `What brands of mini splits do you service in ${locFull}?`,
      a: `We service all major mini split brands in ${locFull} including Mitsubishi, Daikin, LG, Fujitsu, Samsung, Gree, Pioneer, Mr. Cool, Bosch, Carrier, and more. Our certified technicians are trained on all brands and models.`
    },
    {
      q: `How often should I have my mini split cleaned in ${loc}?`,
      a: `We recommend mini split cleaning every 6â€“12 months in ${loc}. If you run your system heavily or have pets/allergies, quarterly cleanings are ideal. Regular cleaning improves efficiency, air quality, and extends system life by 3â€“5 years.`
    },
    {
      q: `Is mini split repair covered by warranty in ${loc}?`,
      a: `Most mini split manufacturers offer 5â€“12 year warranties on parts. However, warranty claims require certified technician service records. ${brand} technicians in ${loc} provide warranty-compliant service and documentation.`
    },
    {
      q: `Why is my mini split making a loud noise in ${loc}?`,
      a: `Loud or unusual noises from your mini split in ${loc} can indicate a dirty fan, loose parts, refrigerant issue, or compressor problem. Don't ignore strange sounds â€” call ${phone} for a same day diagnostic inspection.`
    },
    {
      q: `Can mini splits work in cold weather in ${state.name}?`,
      a: `Yes! Modern heat pump mini splits work efficiently down to -13Â°F (-25Â°C). However, extremely cold winters in ${state.name} can reduce efficiency. If your mini split struggles in cold weather, we can inspect the defrost cycle and refrigerant charge.`
    },
    {
      q: `How much does a new mini split cost installed in ${loc}?`,
      a: `New mini split installation in ${loc} typically costs $1,500â€“$4,000 for a single-zone system and $3,000â€“$8,000+ for multi-zone systems, including equipment and labor. ${brand} provides free installation estimates â€” call ${phone} today.`
    },
    {
      q: `Do you offer emergency mini split repair in ${loc}?`,
      a: `Yes, ${brand} provides 24/7 emergency mini split repair in ${loc}. Whether your AC fails during a heatwave or your heat pump stops working overnight, our technicians respond fast to restore comfort to your home or business.`
    },
    {
      q: `How do I know if my mini split needs refrigerant in ${loc}?`,
      a: `Signs your mini split needs refrigerant in ${loc} include: warm air blowing, ice on the refrigerant lines, hissing sounds, or higher electricity bills. Low refrigerant means a leak â€” our technicians find and fix the leak then recharge the system.`
    },
    {
      q: `Why is my mini split leaking water inside my home in ${loc}?`,
      a: `Water leaking from the indoor unit is usually caused by a clogged condensate drain line or a dirty air filter causing the coil to freeze. Our technicians in ${loc} can quickly clear the drain and stop the leak to prevent water damage.`
    },
    {
      q: `Do you install multi-zone mini split systems in ${loc}?`,
      a: `Absolutely! ${brand} specializes in multi-zone mini split installations in ${loc}. We can connect up to 5 indoor air handlers to a single outdoor compressor, allowing customized temperature control in every room.`
    },
    {
      q: `Are mini splits more efficient than central air in ${state.name}?`,
      a: `Yes, mini splits are generally 20-30% more efficient than traditional central air systems in ${state.name} because they don't lose energy through ductwork. They also feature variable-speed compressors that save electricity.`
    },
    {
      q: `How long do ductless mini splits last in ${loc}?`,
      a: `With proper maintenance, a high-quality mini split system in ${loc} can last 15 to 20 years. Regular cleaning and annual tune-ups from ${brand} are the best way to maximize your system's lifespan.`
    },
    {
      q: `Why is my mini split blinking a light in ${loc}?`,
      a: `A blinking or flashing light on your indoor unit is an error code. It can indicate communication issues, sensor failures, or refrigerant problems. Give us a call at ${phone} and we'll dispatch a technician in ${loc} to decode and fix the issue.`
    },
    {
      q: `Do I need a permit to install a mini split in ${loc}?`,
      a: `Most cities in ${state.name} require an electrical or mechanical permit for installing a new mini split system. ${brand} handles all necessary permitting and ensures the installation meets local building codes in ${loc}.`
    },
    {
      q: `Can I install a mini split myself in ${loc}?`,
      a: `While DIY kits exist, it's highly recommended to use a certified HVAC technician. Improper installation voids the manufacturer warranty, risks refrigerant leaks, and can cause electrical hazards. Our professionals in ${loc} guarantee a safe, warranty-compliant installation.`
    },
    {
      q: `Why does my mini split smell bad when I turn it on in ${loc}?`,
      a: `A musty or moldy smell from your mini split in ${loc} means mold, mildew, or bacteria is growing on the indoor coil or blower wheel. ${brand} provides deep cleaning services to eliminate odors and restore healthy indoor air quality.`
    },
    {
      q: `Do mini splits increase home value in ${state.name}?`,
      a: `Yes! Adding a ductless mini split system increases property value and appeal in ${state.name}, especially for older homes without existing ductwork, sunrooms, or home additions. Itâ€™s an energy-efficient upgrade buyers love.`
    },
    {
      q: `What is a mini split heat pump and how does it work?`,
      a: `A mini split heat pump provides both cooling and heating. In summer, it extracts heat from your home and moves it outside. In winter, it reverses the process, extracting heat from the outdoor air in ${loc} and bringing it inside.`
    },
    {
      q: `How much does it cost to run a mini split per month in ${loc}?`,
      a: `Because mini splits are highly efficient, most homeowners in ${loc} see a reduction in their energy bills. On average, running a single-zone unit costs $20â€“$50 per month, depending on usage and local electricity rates in ${state.name}.`
    },
    {
      q: `Do you service commercial mini split systems in ${loc}?`,
      a: `Yes, ${brand} provides comprehensive commercial mini split services in ${loc}. We repair and maintain systems for offices, restaurants, server rooms, and retail spaces to keep your business running comfortably without interruption.`
    },
    {
      q: `Can a mini split heat an entire house in ${state.name}?`,
      a: `Yes, a properly sized multi-zone mini split system can easily heat and cool an entire house in ${state.name}. Our technicians will calculate your home's square footage and layout to recommend the perfect multi-zone configuration.`
    }
  ];
}

