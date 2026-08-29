// Mini Split Local Pros — Testimonials Pool
export function getTestimonialsPool(city, state, brand) {
  const loc = city ? `${city.name}` : `${state.name}`;

  return [
    { text: `My mini split stopped cooling in the middle of a heatwave. ${brand} sent a technician within two hours and had it fixed fast. Amazing service in ${loc}!`, author: "Michael T." },
    { text: `Highly professional and very reasonably priced. The technician explained exactly why my heat pump was making a loud noise and replaced the fan motor the same day.`, author: "Sarah J." },
    { text: `We hired ${brand} to install a 3-zone mini split system in our historic home in ${loc}. They did a flawless job, no mess, and the house is perfectly cool now.`, author: "David R." },
    { text: `I woke up to my indoor unit leaking water everywhere. I called ${brand} at 6 AM and they had someone out by 8 AM to clear the drain line. Life savers!`, author: "Jessica L." },
    { text: `Great experience from start to finish. The office staff was friendly, and the tech who came out to recharge our freon was polite and knowledgeable.`, author: "Robert M." },
    { text: `If you need ductless AC service in ${loc}, these are the guys to call. They deep cleaned our moldy smelling system and it smells fresh and blows ice cold now.`, author: "Amanda K." },
    { text: `Honest pricing with no hidden fees. I had another company quote me $1500 for a repair. ${brand} came out, found a loose wire, and fixed it for just the service fee.`, author: "James B." },
    { text: `Our commercial mini split in the server room failed on a Sunday. ${brand} responded immediately and saved thousands of dollars in equipment from overheating.`, author: "William S." },
    { text: `The technician was wearing booties and put down drop cloths before doing the deep clean on our living room unit. Very respectful of our home in ${loc}.`, author: "Jennifer C." },
    { text: `I love my new Mitsubishi mini split! The installation crew from ${brand} was top notch. They explained how to use the remote and the app perfectly.`, author: "Linda W." },
    { text: `Fast, efficient, and affordable. My system wasn't blowing hot air and they found the refrigerant leak, patched it, and recharged the system all in one afternoon.`, author: "Thomas H." },
    { text: `Best HVAC company Iâ€™ve used in ${loc}. They specialize in mini splits and it shows. The tech diagnosed a communication board failure in 5 minutes.`, author: "Richard P." },
    { text: `I called 3 different companies who couldn't figure out the error code flashing on my Daikin unit. The tech from ${brand} knew exactly what it meant right away.`, author: "Susan E." },
    { text: `We are so happy with the multi-zone installation. We finally have independent temperature control in the master bedroom and the living room!`, author: "Joseph F." },
    { text: `The maintenance plan is totally worth it. They come out twice a year to clean the filters and check the coils, and our system runs perfectly year-round in ${loc}.`, author: "Mary D." },
    { text: `I appreciate that they showed me exactly what was broken on the compressor before replacing it. Very transparent and trustworthy service.`, author: "Charles G." },
    { text: `Our heat pump went out during a freezing night. We called their 24/7 emergency line and a technician arrived at 2 AM to restore our heat. Incredible dedication.`, author: "Patricia N." },
    { text: `I was worried about the cost to replace my old system, but ${brand} offered great financing options and got the new system installed the very next day.`, author: "Matthew V." },
    { text: `The air quality in our house is so much better after they did a chemical deep clean of the indoor blower wheel. No more sneezing when the AC kicks on!`, author: "Elizabeth Y." },
    { text: `They relocated my outdoor condenser unit because I was building a deck. They handled the refrigerant lines and electrical perfectly. Very clean work in ${loc}.`, author: "Anthony Q." },
    { text: `We bought a fixer-upper without central air and ${brand} retrofitted the entire house with a 5-zone ductless system. Itâ€™s whisper quiet and highly efficient.`, author: "Barbara I." },
    { text: `I tried to clean the filters myself and accidentally broke a plastic tab. The technician came out, replaced the part, and showed me the correct way to do it.`, author: "Christopher U." },
    { text: `Every time I call them for service in ${loc}, they are prompt and professional. I wouldn't trust my ductless system to anyone else.`, author: "Lisa O." },
    { text: `They installed a mini split in our new garage gym. The tech helped us pick the perfect spot on the wall for maximum airflow. Great advice and execution.`, author: "Daniel Z." },
    { text: `My Pioneer system was vibrating and making a horrible rattling noise outside. The tech tightened the mounts and installed vibration pads. Super cheap and fast fix.`, author: "Nancy X." },
    { text: `I highly recommend ${brand} to anyone in ${loc}. From the dispatcher to the technician, everyone was polite, helpful, and extremely competent.`, author: "Paul K." },
    { text: `They fixed our office AC right before a big client meeting. The technician was discreet and got the job done without disrupting our workflow.`, author: "Karen M." },
    { text: `I was impressed by how much stock the technician had in his van. He had the exact control board my LG system needed so I didn't have to wait for parts.`, author: "Kevin T." },
    { text: `Five stars! They took the time to measure every room and do a proper load calculation before quoting the installation. The system size is perfect.`, author: "Betty W." },
    { text: `After a power surge fried my unit, ${brand} came out, wrote up a detailed report for my insurance company, and had the replacement installed the same week.`, author: "Brian A." }
  ];
}

