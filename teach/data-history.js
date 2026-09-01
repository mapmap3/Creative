const HISTORY_DATA = [
  // === Cosmic/Earth Formation & Prehistoric (IDs 1-25) ===
  {
    id: 1,
    year: "13.8 Billion Years Ago",
    sortYear: -13800000000,
    title: "The Big Bang",
    summary: "The universe begins with an immense expansion from an extremely hot, dense state.",
    detail: "All matter, energy, space, and time originated from a singularity roughly 13.8 billion years ago. Within minutes, the lightest elements formed; over hundreds of millions of years, gravity pulled matter together into the first stars and galaxies. This event is the foundation of modern cosmology, supported by cosmic microwave background radiation and the observed expansion of the universe.",
    category: "history"
  },
  {
    id: 2,
    year: "4.6 Billion Years Ago",
    sortYear: -4600000000,
    title: "Formation of the Solar System",
    summary: "A cloud of gas and dust collapses to form the Sun and its orbiting planets.",
    detail: "A giant molecular cloud, possibly triggered by a nearby supernova, began to collapse under its own gravity. The central mass became the Sun, while the remaining disk of material accreted into planets, moons, and asteroids. Rocky inner planets like Earth formed closer to the Sun, while gas giants formed farther out. This process took roughly 10 to 20 million years.",
    category: "history"
  },
  {
    id: 3,
    year: "4.5 Billion Years Ago",
    sortYear: -4500000000,
    title: "Earth Forms",
    summary: "The young Earth takes shape as a molten ball of rock and metal.",
    detail: "Earth accreted from planetesimals and protoplanetary debris orbiting the young Sun. Intense heat from collisions and radioactive decay kept the planet largely molten, allowing heavier elements like iron to sink to the core. A massive collision with a Mars-sized body called Theia is believed to have ejected debris that formed the Moon. Over time, the surface cooled enough to form a solid crust.",
    category: "history"
  },
  {
    id: 4,
    year: "4.4 Billion Years Ago",
    sortYear: -4400000000,
    title: "First Oceans Form",
    summary: "Water vapor in the atmosphere condenses, and the first liquid oceans appear on Earth's surface.",
    detail: "As Earth's surface cooled below the boiling point of water, torrential rains lasting millions of years filled the first ocean basins. Evidence from ancient zircon crystals in Western Australia suggests liquid water existed as early as 4.4 billion years ago. These primordial oceans would become the cradle of life, providing the chemical environment for the first organic molecules to form.",
    category: "history"
  },
  {
    id: 5,
    year: "3.8 Billion Years Ago",
    sortYear: -3800000000,
    title: "First Life on Earth",
    summary: "The earliest known life forms, simple single-celled organisms, appear in Earth's oceans.",
    detail: "The oldest evidence of life comes from carbon isotope signatures and microfossils found in ancient rocks from Greenland and Western Australia. These first organisms were likely simple prokaryotes, similar to modern bacteria, that derived energy from chemical reactions rather than sunlight. Their emergence marks one of the most profound transitions in Earth's history, though the exact mechanism by which non-living chemistry became biology remains one of science's great open questions.",
    category: "history"
  },
  {
    id: 6,
    year: "2.4 Billion Years Ago",
    sortYear: -2400000000,
    title: "The Great Oxygenation Event",
    summary: "Cyanobacteria begin producing oxygen, dramatically transforming Earth's atmosphere.",
    detail: "Photosynthetic cyanobacteria evolved the ability to split water molecules and release oxygen as a byproduct. Over millions of years, free oxygen accumulated in the atmosphere, rusting dissolved iron in the oceans and creating the banded iron formations found today. This was catastrophic for most anaerobic life, causing a mass extinction sometimes called the Oxygen Catastrophe. However, it set the stage for aerobic organisms and eventually complex multicellular life.",
    category: "history"
  },
  {
    id: 7,
    year: "1.5 Billion Years Ago",
    sortYear: -1500000000,
    title: "First Eukaryotic Cells",
    summary: "Complex cells with internal structures like nuclei appear, a major leap in biological complexity.",
    detail: "Eukaryotic cells, distinguished by membrane-bound organelles including a nucleus, arose through a process called endosymbiosis. A larger cell engulfed a smaller bacterium, which eventually became the mitochondrion, the powerhouse of the cell. This partnership allowed for far greater energy production and complexity. Eukaryotes would go on to give rise to all plants, animals, fungi, and protists.",
    category: "history"
  },
  {
    id: 8,
    year: "541 Million Years Ago",
    sortYear: -541000000,
    title: "The Cambrian Explosion",
    summary: "A rapid diversification of animal life produces most major body plans seen today.",
    detail: "Over a geologically brief period of roughly 20 million years, nearly all major animal phyla appeared in the fossil record. Creatures like trilobites, anomalocarids, and the earliest chordates emerged in stunning variety. The causes remain debated but likely include rising oxygen levels, the evolution of eyes, and an ecological arms race between predators and prey. The Burgess Shale in Canada preserves some of the most spectacular fossils from this era.",
    category: "history"
  },
  {
    id: 9,
    year: "470 Million Years Ago",
    sortYear: -470000000,
    title: "First Land Plants",
    summary: "Plants colonize land for the first time, fundamentally altering Earth's surface and atmosphere.",
    detail: "Descended from green algae, the earliest land plants were simple, non-vascular organisms similar to modern liverworts and mosses. They colonized barren rock surfaces near water, gradually developing adaptations like waxy cuticles and stomata to prevent drying out. Over millions of years, plants would develop roots, stems, and leaves, transforming bare landscapes into green ecosystems and dramatically increasing atmospheric oxygen.",
    category: "history"
  },
  {
    id: 10,
    year: "375 Million Years Ago",
    sortYear: -375000000,
    title: "First Vertebrates Walk on Land",
    summary: "Fish with limb-like fins transition to life on land, becoming the first tetrapods.",
    detail: "Fossils like Tiktaalik, discovered in the Canadian Arctic, show the transition from lobe-finned fish to four-legged land animals. These creatures had both gills and primitive lungs, and their strong, jointed fins allowed them to prop themselves up and move across shallow mudflats. This transition opened an entirely new ecological frontier and laid the groundwork for all amphibians, reptiles, birds, and mammals, including humans.",
    category: "history"
  },
  {
    id: 11,
    year: "252 Million Years Ago",
    sortYear: -252000000,
    title: "The Great Dying (Permian Extinction)",
    summary: "The largest mass extinction in Earth's history wipes out roughly 96% of marine species and 70% of land vertebrates.",
    detail: "Massive volcanic eruptions in what is now Siberia released enormous quantities of carbon dioxide and toxic gases, triggering runaway global warming, ocean acidification, and oxygen depletion. Nearly all life on Earth was pushed to the brink. The recovery took millions of years and reshaped the trajectory of evolution. This catastrophe cleared ecological space for the rise of the archosaurs, the group that includes dinosaurs.",
    category: "history"
  },
  {
    id: 12,
    year: "230 Million Years Ago",
    sortYear: -230000000,
    title: "First Dinosaurs Appear",
    summary: "Small, bipedal reptiles in the Triassic period mark the beginning of the Age of Dinosaurs.",
    detail: "The earliest known dinosaurs, such as Eoraptor and Herrerasaurus, were relatively small predators that walked on two legs. They appeared in what is now South America during the mid-to-late Triassic period. At first, dinosaurs were minor players in ecosystems dominated by other reptiles. It was not until the end-Triassic extinction, around 201 million years ago, that dinosaurs rose to dominance and began their 135-million-year reign.",
    category: "history"
  },
  {
    id: 13,
    year: "200 Million Years Ago",
    sortYear: -200000000,
    title: "First Mammals Appear",
    summary: "Small, nocturnal creatures emerge alongside the dinosaurs as the first true mammals.",
    detail: "Early mammals like Morganucodon were tiny, shrew-like animals that likely hunted insects at night to avoid dinosaur predators. They were warm-blooded, had fur, and nursed their young with milk. For over 130 million years, mammals remained small and ecologically marginal while dinosaurs dominated. Their survival strategies during this long era of dinosaur dominance would prove crucial when an asteroid wiped out their giant rivals.",
    category: "history"
  },
  {
    id: 14,
    year: "66 Million Years Ago",
    sortYear: -66000000,
    title: "Asteroid Strikes, Dinosaurs Go Extinct",
    summary: "A massive asteroid impact near modern-day Mexico triggers a global catastrophe, ending the reign of the dinosaurs.",
    detail: "A roughly six-mile-wide asteroid struck the Yucatan Peninsula, creating the Chicxulub crater. The impact unleashed tsunamis, wildfires, and ejected debris that blocked sunlight for months, plunging Earth into an impact winter. About 75% of all species went extinct, including all non-avian dinosaurs. The survivors, including small mammals, birds, and reptiles, would diversify rapidly to fill the emptied ecological niches, eventually leading to the rise of primates and humans.",
    category: "history"
  },
  {
    id: 15,
    year: "6 Million Years Ago",
    sortYear: -6000000,
    title: "Human and Chimpanzee Lineages Split",
    summary: "The evolutionary lines leading to modern humans and chimpanzees diverge in Africa.",
    detail: "Genetic and fossil evidence indicates that the last common ancestor of humans and chimpanzees lived in Africa roughly 6 to 7 million years ago. Climate changes that transformed African forests into open grasslands may have driven this divergence. Early hominins began adapting to life on the ground, eventually developing bipedal walking. Fossils like Sahelanthropus tchadensis offer glimpses of these earliest human relatives.",
    category: "history"
  },
  {
    id: 16,
    year: "3.3 Million Years Ago",
    sortYear: -3300000,
    title: "Oldest Known Stone Tools",
    summary: "Hominins at Lomekwi in Kenya create the earliest known stone tools, predating the genus Homo.",
    detail: "Discovered in 2011 and announced in 2015, the Lomekwi tools from West Turkana, Kenya, are the oldest known stone artifacts, dating to approximately 3.3 million years ago. These crude but intentionally shaped stones were likely made by Australopithecus or Kenyanthropus. They predate the previous oldest tools from Gona, Ethiopia, by about 700,000 years. The ability to make tools marks a critical cognitive leap in human evolution.",
    category: "history"
  },
  {
    id: 17,
    year: "1.8 Million Years Ago",
    sortYear: -1800000,
    title: "Homo Erectus and the Control of Fire",
    summary: "Homo erectus becomes the first hominin to spread beyond Africa and to use fire regularly.",
    detail: "Homo erectus was a remarkably successful species that persisted for nearly 1.5 million years. Taller and more human-like than earlier hominins, they crafted sophisticated hand axes and were likely the first to control fire for warmth, cooking, and protection. Evidence of controlled fire use dates to at least 1 million years ago at Wonderwerk Cave in South Africa. Cooking food increased caloric intake and may have fueled the growth of larger brains.",
    category: "history"
  },
  {
    id: 18,
    year: "300,000 Years Ago",
    sortYear: -300000,
    title: "Homo Sapiens Emerge in Africa",
    summary: "Anatomically modern humans first appear in Africa, based on fossils found in Morocco.",
    detail: "Fossils discovered at Jebel Irhoud in Morocco, dated to roughly 300,000 years ago, represent the oldest known remains of Homo sapiens. These individuals had modern-looking faces but slightly elongated braincases. The findings suggest that our species did not evolve in a single location but across the African continent. Over tens of thousands of years, Homo sapiens developed increasingly complex tools, language, and social structures.",
    category: "history"
  },
  {
    id: 19,
    year: "70,000 Years Ago",
    sortYear: -70000,
    title: "Humans Migrate Out of Africa",
    summary: "Modern humans begin their great migration out of Africa, eventually populating every continent.",
    detail: "Genetic evidence suggests a major wave of human migration out of Africa occurred roughly 70,000 years ago, likely crossing the Red Sea at its narrowest point into the Arabian Peninsula. These migrants encountered and sometimes interbred with Neanderthals and Denisovans. Over thousands of years, they spread across Asia, reached Australia by about 65,000 years ago, and entered Europe by about 45,000 years ago. The Americas were populated much later, perhaps 15,000 to 20,000 years ago.",
    category: "history"
  },
  {
    id: 20,
    year: "40,000 Years Ago",
    sortYear: -40000,
    title: "Cave Paintings and Early Art",
    summary: "Humans create some of the earliest known art, including stunning cave paintings in Europe and Indonesia.",
    detail: "Cave paintings at sites like Chauvet in France and Sulawesi in Indonesia demonstrate a capacity for symbolic thinking and artistic expression. These artworks depict animals, human hands, and abstract symbols, rendered with sophisticated techniques including shading and perspective. The oldest known figurative painting, a pig on the wall of a cave in Sulawesi, dates to at least 45,500 years ago. This explosion of creativity is sometimes called the Upper Paleolithic Revolution.",
    category: "history"
  },
  {
    id: 21,
    year: "15,000 Years Ago",
    sortYear: -15000,
    title: "Humans Reach the Americas",
    summary: "People cross from Asia into North America, likely via a land bridge or coastal route, and begin populating the Western Hemisphere.",
    detail: "During the last Ice Age, lower sea levels exposed a land bridge called Beringia connecting Siberia to Alaska. Humans crossed this bridge or traveled along the Pacific coast in boats, reaching North America at least 15,000 years ago, with some evidence suggesting even earlier arrivals. These first Americans rapidly spread across both continents. Within a few thousand years, they developed diverse cultures adapted to environments from Arctic tundra to tropical rainforest.",
    category: "history"
  },
  {
    id: 22,
    year: "10,000 BCE",
    sortYear: -10000,
    title: "The Agricultural Revolution Begins",
    summary: "Humans in the Fertile Crescent begin cultivating crops and domesticating animals, transforming human civilization.",
    detail: "In the region of modern-day Iraq, Syria, and Turkey, people began deliberately planting wheat, barley, and other crops instead of relying solely on foraging. They also domesticated sheep, goats, and cattle. This Neolithic Revolution allowed for permanent settlements, food surpluses, population growth, and social stratification. Agriculture arose independently in several regions worldwide, including China, Mesoamerica, and the Andes, each developing unique crops and practices.",
    category: "history"
  },
  {
    id: 23,
    year: "7000 BCE",
    sortYear: -7000,
    title: "First Known Towns and Settlements",
    summary: "Permanent settlements like Catalhoyuk and Jericho grow into some of the world's earliest towns.",
    detail: "Catalhoyuk in modern-day Turkey, inhabited from roughly 7500 to 5700 BCE, housed thousands of people in densely packed mudbrick buildings entered through rooftops. Jericho in the Jordan Valley may be even older, with a stone tower dating to around 8000 BCE. These early settlements show evidence of trade, religious ritual, and specialized crafts. They represent a fundamental shift from nomadic life to organized community living.",
    category: "history"
  },
  {
    id: 24,
    year: "4000 BCE",
    sortYear: -4000,
    title: "The Wheel Is Invented",
    summary: "The wheel, first used for pottery making, is adapted for transportation in Mesopotamia.",
    detail: "The oldest known wheels date to around 3500 BCE in Mesopotamia and were initially used as potter's wheels. By about 3200 BCE, wheels were attached to carts and chariots, revolutionizing transportation and warfare. The wheeled cart allowed heavier loads to be moved over greater distances, facilitating trade and agriculture. Combined with the domestication of horses around the same period, wheeled vehicles transformed human mobility and commerce.",
    category: "history"
  },
  {
    id: 25,
    year: "3500 BCE",
    sortYear: -3500,
    title: "Bronze Age Begins",
    summary: "Humans discover how to alloy copper with tin, ushering in the Bronze Age and transforming tools and weapons.",
    detail: "The Bronze Age began in the Near East around 3500 BCE when metalworkers discovered that mixing copper with tin produced bronze, a harder and more durable metal. Bronze tools and weapons were superior to stone and pure copper equivalents. The demand for tin, which was relatively rare, drove long-distance trade networks spanning thousands of miles. Bronze metallurgy accelerated the development of complex societies, armies, and early empires.",
    category: "history"
  },

  // === Ancient Civilizations (IDs 26-50) ===
  {
    id: 26,
    year: "3400 BCE",
    sortYear: -3400,
    title: "Rise of Sumer",
    summary: "The Sumerians establish some of the world's first cities in southern Mesopotamia, including Uruk and Ur.",
    detail: "Sumer, in modern-day southern Iraq, saw the rise of city-states with populations in the tens of thousands. Uruk, one of the largest, featured monumental temples called ziggurats and a complex social hierarchy. The Sumerians developed irrigation systems to farm the arid land between the Tigris and Euphrates rivers. Their innovations in governance, religion, and technology laid the groundwork for subsequent Mesopotamian civilizations.",
    category: "history"
  },
  {
    id: 27,
    year: "3200 BCE",
    sortYear: -3200,
    title: "Invention of Writing",
    summary: "The Sumerians develop cuneiform, one of the earliest known writing systems, to track trade and administration.",
    detail: "Cuneiform began as simple pictographs pressed into clay tablets using a reed stylus. Over time, the symbols became more abstract and versatile, eventually representing sounds rather than just objects. Writing enabled record-keeping, legal codes, literature, and the transmission of knowledge across generations. The Egyptians independently developed hieroglyphics around the same period. Writing is often considered the dividing line between prehistory and history.",
    category: "history"
  },
  {
    id: 28,
    year: "2630 BCE",
    sortYear: -2630,
    title: "The Great Pyramids of Giza",
    summary: "Egypt's pharaohs commission the construction of the Great Pyramids, among the most iconic structures ever built.",
    detail: "The Great Pyramid, built for Pharaoh Khufu around 2560 BCE, stood roughly 481 feet tall and remained the tallest man-made structure for over 3,800 years. Constructed from an estimated 2.3 million limestone blocks, each weighing an average of 2.5 tons, the pyramid was built by skilled laborers over roughly 20 years. The Giza complex, including the pyramids of Khafre and Menkaure and the Great Sphinx, demonstrates the extraordinary organizational and engineering capabilities of ancient Egypt.",
    category: "history"
  },
  {
    id: 29,
    year: "1754 BCE",
    sortYear: -1754,
    title: "Code of Hammurabi",
    summary: "Babylonian King Hammurabi issues one of the earliest and most complete written legal codes.",
    detail: "Inscribed on a seven-foot-tall stone stele, Hammurabi's code contains 282 laws covering property, trade, family relations, and labor. It established the principle of graduated punishment based on social class and introduced the concept of the presumption of innocence. The code's famous principle of proportional justice, often simplified as 'an eye for an eye,' was actually more nuanced in practice. The stele, now in the Louvre, is one of the most important artifacts of ancient law.",
    category: "history"
  },
  {
    id: 30,
    year: "1200 BCE",
    sortYear: -1200,
    title: "Bronze Age Collapse",
    summary: "A mysterious wave of destruction topples multiple civilizations across the eastern Mediterranean within decades.",
    detail: "Around 1200 BCE, nearly every major civilization in the eastern Mediterranean suffered catastrophic decline. The Hittite Empire fell, Mycenaean Greece collapsed, and Egypt was severely weakened. The causes remain debated but likely include invasions by the enigmatic Sea Peoples, earthquakes, drought, disrupted trade routes, and internal rebellions. This collapse ushered in a centuries-long dark age but also cleared the way for new cultures, including the Phoenicians, Israelites, and classical Greeks.",
    category: "history"
  },
  {
    id: 31,
    year: "1000 BCE",
    sortYear: -1000,
    title: "Phoenicians Spread the Alphabet",
    summary: "Phoenician traders develop and spread an alphabetic writing system that becomes the ancestor of most modern alphabets.",
    detail: "The Phoenicians, seafaring traders based in modern-day Lebanon, refined earlier scripts into a 22-letter consonantal alphabet that was far simpler than cuneiform or hieroglyphics. Their extensive trade network spread this alphabet across the Mediterranean. The Greeks adopted and modified it, adding vowels. The Greek alphabet in turn gave rise to Latin, Cyrillic, and many other scripts. Nearly every alphabet used in Europe and the Middle East today descends from the Phoenician original.",
    category: "history"
  },
  {
    id: 32,
    year: "753 BCE",
    sortYear: -753,
    title: "Founding of Rome",
    summary: "According to legend, Romulus founds the city of Rome on the banks of the Tiber River.",
    detail: "Roman tradition held that Romulus and Remus, twin sons of the god Mars, were raised by a she-wolf and that Romulus founded Rome in 753 BCE after killing his brother. Archaeological evidence confirms that Latin settlements on the Palatine Hill date to roughly this period. Rome began as a small kingdom, became a republic in 509 BCE, and eventually grew into one of history's largest empires, profoundly shaping Western law, government, language, and culture.",
    category: "history"
  },
  {
    id: 33,
    year: "508 BCE",
    sortYear: -508,
    title: "Birth of Athenian Democracy",
    summary: "Athens introduces democratic reforms under Cleisthenes, establishing the world's first known democracy.",
    detail: "Cleisthenes reorganized the Athenian political structure around ten tribes based on geography rather than kinship, breaking the power of the old aristocratic families. Male citizens over 18 could vote directly on laws and policies in the Assembly. While limited by modern standards, as it excluded women, slaves, and foreigners, Athenian democracy pioneered concepts of citizen participation, public debate, and the rule of law that would profoundly influence the American Founders over two millennia later.",
    category: "history"
  },
  {
    id: 34,
    year: "490 BCE",
    sortYear: -490,
    title: "Battle of Marathon",
    summary: "A small Athenian force defeats the invading Persian army, preserving Greek independence and democratic ideals.",
    detail: "When the Persian Empire sent a massive invasion force across the Aegean Sea, Athens fielded roughly 10,000 hoplites against a Persian army perhaps twice as large at Marathon. The Greeks, under the general Miltiades, executed a daring double-envelopment strategy and routed the Persians. A runner, Pheidippides, is said to have raced the 26 miles to Athens to announce victory before collapsing, inspiring the modern marathon. The battle proved that citizen-soldiers could defeat a superpower.",
    category: "history"
  },
  {
    id: 35,
    year: "336 BCE",
    sortYear: -336,
    title: "Alexander the Great Begins His Conquests",
    summary: "Alexander of Macedon inherits his father's throne and embarks on a campaign that creates one of history's largest empires.",
    detail: "Ascending to the Macedonian throne at age 20 after his father Philip II's assassination, Alexander launched an audacious campaign against the Persian Empire. Over the next 13 years, he conquered territories from Egypt to India, never losing a battle. He founded over 20 cities, most named Alexandria, and spread Greek culture across a vast swath of the known world. His early death at 32 in Babylon fragmented his empire, but the Hellenistic culture he spread endured for centuries.",
    category: "history"
  },
  {
    id: 36,
    year: "264 BCE",
    sortYear: -264,
    title: "The Punic Wars Begin",
    summary: "Rome and Carthage clash in a series of wars for control of the western Mediterranean.",
    detail: "The three Punic Wars, fought between 264 and 146 BCE, pitted Rome against the powerful North African city-state of Carthage. The Second Punic War saw Hannibal famously cross the Alps with war elephants and devastate Italy for 15 years. Ultimately, Rome prevailed, and in 146 BCE, destroyed Carthage completely, reportedly salting the earth. The wars transformed Rome from a regional power into the dominant force in the Mediterranean world.",
    category: "history"
  },
  {
    id: 37,
    year: "221 BCE",
    sortYear: -221,
    title: "Qin Dynasty Unifies China",
    summary: "Qin Shi Huang becomes the first emperor to unite the warring states of China under one rule.",
    detail: "After conquering six rival kingdoms, Qin Shi Huang standardized weights, measures, currency, and the writing system across China. He began construction of early sections of the Great Wall and was buried with the famous Terracotta Army of over 8,000 life-sized clay soldiers. Though his dynasty lasted only 15 years, the political unification and bureaucratic systems he established shaped China for the next two millennia.",
    category: "history"
  },
  {
    id: 38,
    year: "44 BCE",
    sortYear: -44,
    title: "Assassination of Julius Caesar",
    summary: "Roman dictator Julius Caesar is stabbed to death by senators on the Ides of March, plunging Rome into civil war.",
    detail: "On March 15, 44 BCE, a group of senators led by Brutus and Cassius assassinated Caesar in the Theatre of Pompey, stabbing him 23 times. They feared his growing power threatened the Roman Republic. Instead of restoring the Republic, the assassination triggered a series of civil wars. Caesar's adopted heir Octavian eventually defeated all rivals and became Augustus, the first Roman Emperor, ending the Republic the assassins had sought to save.",
    category: "history"
  },
  {
    id: 39,
    year: "27 BCE",
    sortYear: -27,
    title: "Roman Empire Established",
    summary: "Octavian becomes Augustus, the first Roman Emperor, marking the beginning of the Roman Empire and the Pax Romana.",
    detail: "After defeating Mark Antony and Cleopatra at the Battle of Actium in 31 BCE, Octavian consolidated control over the Roman state. The Senate granted him the title Augustus in 27 BCE, and he skillfully maintained the appearance of republican government while holding absolute power. His reign inaugurated the Pax Romana, roughly two centuries of relative peace and stability during which Roman culture, engineering, and law flourished across three continents.",
    category: "history"
  },
  {
    id: 40,
    year: "4 BCE",
    sortYear: -4,
    title: "Birth of Jesus of Nazareth",
    summary: "Jesus is born in Roman Judea, an event that will give rise to Christianity, the world's largest religion.",
    detail: "Historians generally place the birth of Jesus between 6 and 4 BCE, during the reign of King Herod. Born in humble circumstances in Bethlehem, he grew up in Nazareth and began a public ministry around age 30 that lasted roughly three years. His teachings of love, forgiveness, and the coming Kingdom of God, along with his crucifixion and the belief in his resurrection, became the foundation of Christianity, which would profoundly shape Western civilization.",
    category: "history"
  },
  {
    id: 41,
    year: "33 CE",
    sortYear: 33,
    title: "Crucifixion of Jesus",
    summary: "Jesus of Nazareth is crucified by Roman authorities in Jerusalem, an event central to Christian faith.",
    detail: "After being arrested, tried before the Sanhedrin and the Roman governor Pontius Pilate, Jesus was sentenced to death by crucifixion, a common Roman execution method. His followers' belief in his resurrection three days later became the cornerstone of Christianity. Within decades, the apostle Paul and other missionaries spread the faith across the Roman Empire, transforming a small Jewish sect into a world religion that would eventually become the official religion of Rome itself.",
    category: "history"
  },
  {
    id: 42,
    year: "79 CE",
    sortYear: 79,
    title: "Eruption of Mount Vesuvius",
    summary: "The volcano Vesuvius erupts, burying the Roman cities of Pompeii and Herculaneum under ash and pumice.",
    detail: "On August 24, 79 CE, Mount Vesuvius erupted with devastating force, sending a column of volcanic debris more than 20 miles into the atmosphere. The cities of Pompeii and Herculaneum were buried under layers of volcanic ash and pumice, killing an estimated 2,000 people. The disaster preserved the cities in remarkable detail, providing modern archaeologists with an unparalleled snapshot of daily life in the Roman Empire, from homes and shops to graffiti and food.",
    category: "history"
  },
  {
    id: 43,
    year: "105 CE",
    sortYear: 105,
    title: "Paper Invented in China",
    summary: "Cai Lun, a Chinese court official, refines the process of papermaking, revolutionizing the recording and spread of knowledge.",
    detail: "While earlier forms of paper-like material existed, Cai Lun is credited with standardizing the papermaking process using bark, hemp, rags, and fishnets during the Han Dynasty. His method produced a lightweight, inexpensive writing surface far superior to bamboo strips or silk. Paper spread westward along the Silk Road, reaching the Islamic world by the 8th century and Europe by the 12th century, where it became essential to the eventual development of the printing press.",
    category: "history"
  },
  {
    id: 44,
    year: "313 CE",
    sortYear: 313,
    title: "Edict of Milan",
    summary: "Emperor Constantine legalizes Christianity throughout the Roman Empire, ending centuries of persecution.",
    detail: "Constantine and his co-emperor Licinius issued the Edict of Milan in 313 CE, granting religious tolerance throughout the empire and specifically ending the persecution of Christians. Constantine himself reportedly converted after a vision before the Battle of the Milvian Bridge in 312. He later convened the Council of Nicaea in 325 to address theological disputes. By 380 CE, Emperor Theodosius I made Christianity the official state religion of Rome.",
    category: "history"
  },
  {
    id: 45,
    year: "476 CE",
    sortYear: 476,
    title: "Fall of the Western Roman Empire",
    summary: "The last Roman emperor in the West is deposed, marking the traditional end of the Roman Empire and the beginning of the Middle Ages.",
    detail: "In September 476 CE, the Germanic chieftain Odoacer deposed the young emperor Romulus Augustulus, the last ruler of the Western Roman Empire. The fall was not a single dramatic event but the culmination of centuries of economic decline, military overextension, political instability, and pressure from migrating barbarian groups. The Eastern Roman Empire, or Byzantine Empire, continued for nearly another thousand years. The fall of Rome marked the transition to the medieval period in Western Europe.",
    category: "history"
  },
  {
    id: 46,
    year: "500 CE",
    sortYear: 500,
    title: "Mayan Civilization at Its Height",
    summary: "The Classic Maya period reaches its peak, with great cities, advanced writing, and sophisticated astronomy across Central America.",
    detail: "At its height between roughly 250 and 900 CE, the Maya civilization encompassed dozens of city-states across present-day southern Mexico, Guatemala, Belize, and Honduras. Cities like Tikal and Calakmul boasted towering pyramids, elaborate palaces, and populations in the tens of thousands. The Maya developed the most complete writing system in the pre-Columbian Americas, a remarkably accurate calendar, and advanced mathematics including the concept of zero. Their mysterious decline around 900 CE remains debated.",
    category: "history"
  },
  {
    id: 47,
    year: "570 CE",
    sortYear: 570,
    title: "Birth of Muhammad",
    summary: "The Prophet Muhammad is born in Mecca, Arabia. His teachings will found Islam, one of the world's great religions.",
    detail: "Muhammad ibn Abdullah was born around 570 CE in the trading city of Mecca. Orphaned as a child, he became a merchant and was known for his honesty and integrity. Around age 40, he began receiving revelations that he believed came from God through the angel Gabriel. These revelations, compiled as the Quran, formed the basis of Islam. His message of monotheism, social justice, and submission to God's will would eventually reach every continent.",
    category: "history"
  },
  {
    id: 48,
    year: "800 CE",
    sortYear: 800,
    title: "Charlemagne Crowned Emperor",
    summary: "Pope Leo III crowns Charlemagne Emperor of the Romans, reviving the concept of a western European empire.",
    detail: "On Christmas Day in 800 CE, Pope Leo III crowned Charlemagne, King of the Franks, as Emperor of the Romans in St. Peter's Basilica. Charlemagne had united much of Western Europe through military conquest and promoted education, arts, and the standardization of writing through the Carolingian Renaissance. His empire stretched from modern France across Germany into northern Italy. Though it fractured after his death, it established the template for the later Holy Roman Empire and the idea of European unity.",
    category: "history"
  },
  {
    id: 49,
    year: "1000 CE",
    sortYear: 1000,
    title: "Vikings Reach North America",
    summary: "Norse explorer Leif Erikson leads an expedition to North America, establishing a short-lived settlement at Vinland.",
    detail: "Around 1000 CE, Leif Erikson sailed from Greenland to the coast of North America, which he called Vinland. Archaeological evidence at L'Anse aux Meadows in Newfoundland, Canada, confirms Norse presence. The settlement included turf-walled structures and evidence of iron-working. Contact with indigenous peoples, whom the Norse called Skraelings, was often hostile. The Norse abandoned Vinland within a few years, and their voyages had no lasting impact on the Americas, predating Columbus by nearly 500 years.",
    category: "history"
  },
  {
    id: 50,
    year: "1095 CE",
    sortYear: 1095,
    title: "The Crusades Begin",
    summary: "Pope Urban II calls for a holy war to recapture Jerusalem, launching nearly two centuries of Crusades.",
    detail: "At the Council of Clermont in 1095, Pope Urban II urged Christian knights to march to the Holy Land and recapture Jerusalem from Muslim control. The First Crusade succeeded in taking Jerusalem in 1099, establishing several Crusader states. Over the next 200 years, multiple Crusades followed, with varying degrees of success. The Crusades had lasting consequences: they stimulated trade between Europe and the East, deepened Christian-Muslim tensions, and exposed Europe to new ideas, technologies, and goods.",
    category: "history"
  },

  // === Medieval to Age of Exploration (IDs 51-70) ===
  {
    id: 51,
    year: "1206",
    sortYear: 1206,
    title: "Genghis Khan Unites the Mongols",
    summary: "Temujin is proclaimed Genghis Khan, uniting the Mongol tribes and launching the largest contiguous land empire in history.",
    detail: "Born around 1162, Temujin overcame betrayal, captivity, and tribal warfare to unite the fractious Mongol clans. Proclaimed Genghis Khan in 1206, he built a disciplined, meritocratic army that swept across Central Asia, China, Persia, and Eastern Europe. His empire eventually stretched from Korea to Hungary. While his conquests caused immense destruction and millions of deaths, the resulting Pax Mongolica facilitated unprecedented trade and cultural exchange along the Silk Road.",
    category: "history"
  },
  {
    id: 52,
    year: "1215",
    sortYear: 1215,
    title: "Magna Carta Signed",
    summary: "English barons force King John to sign the Magna Carta, establishing the principle that even the king is subject to law.",
    detail: "Angry over excessive taxation and arbitrary rule, a group of rebellious English barons confronted King John at Runnymede and forced him to seal the Magna Carta on June 15, 1215. The document guaranteed rights such as habeas corpus, trial by jury, and protection from unlawful seizure of property. Though initially a practical peace treaty, it became a foundational document of constitutional law. The American Founders drew directly on its principles when crafting the Constitution and Bill of Rights.",
    category: "history"
  },
  {
    id: 53,
    year: "1347",
    sortYear: 1347,
    title: "The Black Death Reaches Europe",
    summary: "The bubonic plague devastates Europe, killing roughly one-third of the continent's population within five years.",
    detail: "Carried by fleas on rats aboard trading ships from Central Asia, the plague arrived in Sicily in 1347 and spread rapidly across Europe. Victims developed painful black swellings in the lymph nodes and most died within days. By 1352, an estimated 25 to 50 million Europeans had perished, roughly one-third to one-half of the population. The social upheaval that followed weakened feudalism, empowered surviving laborers, and fundamentally reshaped European society, economy, and culture.",
    category: "history"
  },
  {
    id: 54,
    year: "1440",
    sortYear: 1440,
    title: "Gutenberg's Printing Press",
    summary: "Johannes Gutenberg develops the movable-type printing press, revolutionizing the spread of information.",
    detail: "Around 1440 in Mainz, Germany, Gutenberg combined movable metal type, oil-based ink, and a wooden press adapted from wine and olive presses to create a system for mass-producing printed text. His Gutenberg Bible, printed around 1455, was the first major book produced with movable type in Europe. The printing press made books dramatically cheaper and more widely available, fueling literacy, the Protestant Reformation, the Scientific Revolution, and the eventual rise of mass media.",
    category: "history"
  },
  {
    id: 55,
    year: "1453",
    sortYear: 1453,
    title: "Fall of Constantinople",
    summary: "The Ottoman Turks capture Constantinople, ending the Byzantine Empire and reshaping European trade routes.",
    detail: "On May 29, 1453, Ottoman Sultan Mehmed II breached the massive walls of Constantinople using enormous cannons, ending over 1,000 years of Byzantine rule. The city was renamed Istanbul and became the capital of the Ottoman Empire. The fall sent shockwaves through Christendom and disrupted traditional trade routes between Europe and Asia. This disruption motivated European powers, particularly Spain and Portugal, to seek alternative sea routes to the East, spurring the Age of Exploration.",
    category: "history"
  },
  {
    id: 56,
    year: "1492",
    sortYear: 1492,
    title: "Columbus Reaches the Americas",
    summary: "Christopher Columbus, sailing for Spain, lands in the Bahamas, initiating sustained European contact with the Americas.",
    detail: "On October 12, 1492, Columbus and his crew aboard the Nina, Pinta, and Santa Maria made landfall in the Bahamas, which he named San Salvador. Believing he had reached Asia, Columbus made three more voyages to the Caribbean and Central America. His voyages initiated the Columbian Exchange, a massive transfer of plants, animals, diseases, and people between the Old and New Worlds. European diseases devastated indigenous populations, while European colonization transformed the Americas permanently.",
    category: "history"
  },
  {
    id: 57,
    year: "1517",
    sortYear: 1517,
    title: "Martin Luther and the Protestant Reformation",
    summary: "Martin Luther posts his 95 Theses, challenging the Catholic Church and sparking the Protestant Reformation.",
    detail: "On October 31, 1517, German monk Martin Luther reportedly nailed his 95 Theses to the door of the Castle Church in Wittenberg, criticizing the sale of indulgences and other Church practices. Thanks to Gutenberg's printing press, his ideas spread rapidly across Europe. Luther's insistence on scripture as the sole authority and salvation through faith alone led to a permanent split in Western Christianity. The Reformation produced Lutheranism, Calvinism, and other Protestant denominations, reshaping European politics and culture.",
    category: "history"
  },
  {
    id: 58,
    year: "1519",
    sortYear: 1519,
    title: "Magellan Begins First Circumnavigation",
    summary: "Ferdinand Magellan departs Spain on a voyage that will become the first circumnavigation of the globe.",
    detail: "Portuguese explorer Ferdinand Magellan, sailing under the Spanish flag, departed Seville with five ships and about 270 men in September 1519. He navigated through the strait at the tip of South America that now bears his name and crossed the vast Pacific Ocean. Magellan was killed in a skirmish in the Philippines in 1521, but one ship, the Victoria, commanded by Juan Sebastian Elcano, completed the journey back to Spain in September 1522 with only 18 surviving crew, proving the Earth was round and connected by sea.",
    category: "history"
  },
  {
    id: 59,
    year: "1532",
    sortYear: 1532,
    title: "Spanish Conquest of the Inca Empire",
    summary: "Francisco Pizarro captures the Inca emperor Atahualpa, beginning Spain's conquest of the largest empire in pre-Columbian America.",
    detail: "With fewer than 200 soldiers, Pizarro ambushed and captured the Inca emperor Atahualpa at Cajamarca in 1532. Despite receiving an enormous ransom of gold and silver, Pizarro had Atahualpa executed. European diseases, particularly smallpox, had already weakened the Inca Empire and killed much of its population. Combined with Spanish military technology and internal Inca divisions, the conquest was swift. Spain's plunder of Inca gold and silver flooded Europe with wealth and fueled further colonization.",
    category: "history"
  },
  {
    id: 60,
    year: "1543",
    sortYear: 1543,
    title: "Copernicus Publishes Heliocentric Theory",
    summary: "Nicolaus Copernicus proposes that the Earth orbits the Sun, challenging centuries of geocentric astronomy.",
    detail: "In his landmark work 'De Revolutionibus Orbium Coelestium,' published in 1543 shortly before his death, Copernicus argued that the Earth and other planets revolve around the Sun rather than everything orbiting Earth. This heliocentric model contradicted both the prevailing Ptolemaic system and Church doctrine. Though initially met with limited reaction, Copernicus' work inspired Galileo, Kepler, and Newton, launching the Scientific Revolution that fundamentally changed humanity's understanding of its place in the universe.",
    category: "history"
  },
  {
    id: 61,
    year: "1588",
    sortYear: 1588,
    title: "Defeat of the Spanish Armada",
    summary: "England defeats the mighty Spanish Armada, shifting the balance of naval power and opening the way for English colonization of North America.",
    detail: "King Philip II of Spain assembled a fleet of about 130 ships to invade England and depose the Protestant Queen Elizabeth I. English warships, smaller but more maneuverable, harassed the Armada in the English Channel. Fire ships scattered the fleet, and fierce storms finished the destruction as the Armada attempted to retreat around Scotland. Spain's defeat secured England's independence, established it as a major naval power, and crucially opened the door for English colonization of the Americas.",
    category: "history"
  },
  {
    id: 62,
    year: "1607",
    sortYear: 1607,
    title: "Jamestown Founded",
    summary: "English settlers establish Jamestown, Virginia, the first permanent English colony in North America.",
    detail: "On May 14, 1607, about 104 English colonists established Jamestown on the banks of the James River in Virginia. The colony nearly failed due to disease, starvation, and conflicts with the Powhatan Confederacy. Captain John Smith's leadership and trade with Native Americans kept the colony alive. The introduction of tobacco cultivation by John Rolfe in 1612 gave the colony an economic lifeline. Jamestown established precedents for English settlement in America, including the first representative assembly in 1619.",
    category: "history"
  },
  {
    id: 63,
    year: "1619",
    sortYear: 1619,
    title: "First Enslaved Africans Arrive in Virginia",
    summary: "A ship carrying approximately 20 enslaved Africans arrives at Point Comfort, Virginia, marking the beginning of slavery in English North America.",
    detail: "In August 1619, the English privateer White Lion arrived at Point Comfort (modern Hampton, Virginia) carrying roughly 20 Africans who had been captured from a Portuguese slave ship. These individuals were sold into servitude, beginning what would become the centuries-long institution of chattel slavery in America. Initially, the legal status of Africans in Virginia was ambiguous, but by the 1660s, colonial laws codified hereditary racial slavery. This system would shape American society, economy, and politics for centuries.",
    category: "history"
  },
  {
    id: 64,
    year: "1620",
    sortYear: 1620,
    title: "Mayflower and Plymouth Colony",
    summary: "The Pilgrims aboard the Mayflower establish Plymouth Colony in Massachusetts, seeking religious freedom.",
    detail: "In November 1620, 102 passengers aboard the Mayflower arrived at Plymouth, Massachusetts, after a 66-day voyage from England. Before disembarking, 41 men signed the Mayflower Compact, a pioneering agreement establishing self-governance by consent of the governed. The first winter killed nearly half the colonists. The Wampanoag people, particularly Squanto, taught the survivors to cultivate corn and catch fish. The harvest celebration of 1621 is remembered as the first Thanksgiving.",
    category: "history"
  },
  {
    id: 65,
    year: "1636",
    sortYear: 1636,
    title: "Harvard College Founded",
    summary: "The Massachusetts Bay Colony establishes Harvard College, the first institution of higher education in British North America.",
    detail: "Founded in 1636 in Cambridge, Massachusetts, Harvard was established primarily to train Puritan ministers. Named after its first major benefactor, John Harvard, who bequeathed his library and half his estate, it became the model for American higher education. Harvard's founding reflected the Puritan emphasis on literacy and learning. Over the centuries, it grew into one of the world's most prestigious universities, producing numerous U.S. presidents, Supreme Court justices, and other leaders.",
    category: "history"
  },
  {
    id: 66,
    year: "1648",
    sortYear: 1648,
    title: "Peace of Westphalia",
    summary: "The Peace of Westphalia ends the Thirty Years' War and establishes the modern system of sovereign nation-states.",
    detail: "The Treaties of Westphalia, signed in 1648, ended the devastating Thirty Years' War that had killed roughly eight million people across central Europe. The peace established the principle of state sovereignty, meaning each state had the right to govern its own territory without outside interference, including in matters of religion. This framework became the foundation of modern international relations and diplomacy. The concept of sovereign nation-states would later influence the American Founders' vision of an independent republic.",
    category: "history"
  },
  {
    id: 67,
    year: "1687",
    sortYear: 1687,
    title: "Newton Publishes Principia Mathematica",
    summary: "Isaac Newton publishes his laws of motion and universal gravitation, laying the foundation of modern physics.",
    detail: "In 1687, Isaac Newton published 'Philosophiae Naturalis Principia Mathematica,' one of the most influential scientific works ever written. It presented his three laws of motion and the law of universal gravitation, providing a mathematical framework that explained everything from falling apples to planetary orbits. Newton also independently invented calculus to develop his theories. The Principia established physics as a rigorous, mathematical science and remained the dominant framework until Einstein's relativity in the early 20th century.",
    category: "history"
  },
  {
    id: 68,
    year: "1689",
    sortYear: 1689,
    title: "English Bill of Rights",
    summary: "Parliament passes the English Bill of Rights, limiting royal power and establishing parliamentary supremacy.",
    detail: "Following the Glorious Revolution of 1688, which replaced King James II with William and Mary, Parliament passed the Bill of Rights in 1689. It established that the monarch could not suspend laws, levy taxes, or maintain a standing army without parliamentary consent. It also guaranteed free speech in Parliament, the right to petition, and protections against cruel and unusual punishment. These principles directly influenced the American Bill of Rights a century later.",
    category: "history"
  },
  {
    id: 69,
    year: "1692",
    sortYear: 1692,
    title: "Salem Witch Trials",
    summary: "Hysteria grips Salem, Massachusetts, as over 200 people are accused of witchcraft and 20 are executed.",
    detail: "In early 1692, a group of young girls in Salem Village, Massachusetts, began having fits and accused several local women of bewitching them. The accusations spiraled into mass hysteria as more than 200 people were accused of practicing witchcraft. Special courts convicted and hanged 19 people, and one man, Giles Corey, was pressed to death. The trials ended when Governor Phips dissolved the special courts in October 1692. The episode became a cautionary tale about the dangers of extremism, false accusations, and mob mentality.",
    category: "history"
  },
  {
    id: 70,
    year: "1735",
    sortYear: 1735,
    title: "Zenger Trial Establishes Press Freedom",
    summary: "The acquittal of John Peter Zenger establishes truth as a defense against libel, a landmark for freedom of the press.",
    detail: "In 1733, New York printer John Peter Zenger published articles in the New York Weekly Journal criticizing the colonial governor, William Cosby. Zenger was arrested and charged with seditious libel. His lawyer, Andrew Hamilton, argued that Zenger's statements were not libelous because they were true. The jury acquitted Zenger, establishing the principle that truth is a defense against libel charges. This case became a foundational precedent for press freedom and influenced the First Amendment fifty years later.",
    category: "history"
  },

  // === Colonial America & Revolution (IDs 71-100) ===
  {
    id: 71,
    year: "1754",
    sortYear: 1754,
    title: "French and Indian War Begins",
    summary: "Britain and France clash over control of North America, drawing in colonial militias and Native American allies.",
    detail: "The French and Indian War, the North American theater of the global Seven Years' War, erupted in 1754 over competing British and French claims in the Ohio River Valley. A young George Washington led one of the first engagements at Fort Necessity. After early setbacks, the British ultimately prevailed, and the 1763 Treaty of Paris gave Britain control of French Canada and all territory east of the Mississippi. The war's heavy costs led Britain to impose new taxes on the colonies, sowing the seeds of revolution.",
    category: "history"
  },
  {
    id: 72,
    year: "1763",
    sortYear: 1763,
    title: "Proclamation of 1763",
    summary: "Britain forbids colonial settlement west of the Appalachian Mountains, angering frontier settlers and land speculators.",
    detail: "Issued by King George III following the French and Indian War and Pontiac's Rebellion, the Proclamation of 1763 drew a line along the Appalachian Mountains and prohibited colonists from settling beyond it. The intent was to stabilize relations with Native Americans and reduce the cost of frontier defense. However, colonists who had fought in the war expecting access to western lands were furious. The proclamation was widely ignored and became one of the early grievances driving colonial resentment of British authority.",
    category: "history"
  },
  {
    id: 73,
    year: "1765",
    sortYear: 1765,
    title: "The Stamp Act",
    summary: "Britain imposes a direct tax on printed materials in the colonies, provoking widespread resistance and the cry 'No taxation without representation.'",
    detail: "The Stamp Act of 1765 required colonists to purchase special stamped paper for newspapers, legal documents, playing cards, and other printed materials. It was the first direct tax Britain levied on the colonies, as opposed to trade duties. Colonial outrage was immediate and fierce. Organizations like the Sons of Liberty formed to resist, and the Stamp Act Congress, representing nine colonies, petitioned Parliament for repeal. The act was repealed in 1766, but Parliament simultaneously passed the Declaratory Act asserting its right to tax the colonies.",
    category: "history"
  },
  {
    id: 74,
    year: "1770",
    sortYear: 1770,
    title: "Boston Massacre",
    summary: "British soldiers kill five colonists in a confrontation on the streets of Boston, inflaming anti-British sentiment.",
    detail: "On March 5, 1770, a tense confrontation between a crowd of colonists and British soldiers outside the Custom House escalated into violence. The soldiers fired into the crowd, killing five men, including Crispus Attucks, a man of African and Native American descent often considered the first casualty of the American Revolution. The incident was used as propaganda by patriots like Samuel Adams and Paul Revere. John Adams, despite his patriot sympathies, successfully defended the soldiers in court, upholding the rule of law.",
    category: "history"
  },
  {
    id: 75,
    year: "1773",
    sortYear: 1773,
    title: "Boston Tea Party",
    summary: "Colonists disguised as Mohawk Indians dump 342 chests of British tea into Boston Harbor to protest taxation without representation.",
    detail: "On the night of December 16, 1773, members of the Sons of Liberty, some disguised as Mohawk Indians, boarded three British ships in Boston Harbor and dumped 342 chests of East India Company tea into the water. The protest was directed at the Tea Act, which gave the East India Company a monopoly on tea sales in the colonies. Britain responded with the punitive Intolerable Acts, which closed Boston Harbor and stripped Massachusetts of self-governance, pushing the colonies closer to open revolt.",
    category: "history"
  },
  {
    id: 76,
    year: "1774",
    sortYear: 1774,
    title: "First Continental Congress",
    summary: "Delegates from twelve colonies meet in Philadelphia to coordinate a unified response to British policies.",
    detail: "In September 1774, 56 delegates from every colony except Georgia gathered at Carpenters' Hall in Philadelphia. They drafted a Declaration of Rights and Grievances, organized a boycott of British goods, and agreed to reconvene if their demands were not met. The Congress represented the first significant effort by the colonies to act collectively. Delegates included George Washington, John Adams, Samuel Adams, and Patrick Henry. The Congress did not seek independence but rather a restoration of colonial rights.",
    category: "history"
  },
  {
    id: 77,
    year: "1775",
    sortYear: 1775,
    title: "Battles of Lexington and Concord",
    summary: "The first shots of the American Revolution are fired as colonial militia confront British troops in Massachusetts.",
    detail: "On April 19, 1775, British troops marched from Boston to seize colonial military supplies at Concord. At Lexington, they encountered about 70 militiamen; someone fired the 'shot heard round the world,' and eight Americans were killed. At Concord's North Bridge, militia reinforcements drove the British back. On the return march to Boston, colonists fired from behind walls and trees, inflicting heavy casualties. These battles marked the beginning of the American Revolutionary War.",
    category: "history"
  },
  {
    id: 78,
    year: "1775",
    sortYear: 1775.5,
    title: "Battle of Bunker Hill",
    summary: "Colonial forces inflict heavy casualties on the British at Bunker Hill, proving that Americans can stand against professional soldiers.",
    detail: "On June 17, 1775, about 1,500 colonial troops fortified Breed's Hill overlooking Boston. British forces launched three frontal assaults, eventually taking the position but suffering over 1,000 casualties, roughly 40% of their attack force. The Americans, running low on ammunition and reportedly told 'Don't fire until you see the whites of their eyes,' killed or wounded many British officers. Though technically a British victory, the battle boosted American morale and demonstrated that colonial militia could stand against the world's most powerful army.",
    category: "history"
  },
  {
    id: 79,
    year: "1776",
    sortYear: 1776,
    title: "Declaration of Independence",
    summary: "The Continental Congress adopts the Declaration of Independence, proclaiming the colonies free from British rule.",
    detail: "On July 4, 1776, the Second Continental Congress adopted Thomas Jefferson's Declaration of Independence, formally severing ties with Great Britain. The document proclaimed that 'all men are created equal' and possess 'unalienable Rights' including 'Life, Liberty and the pursuit of Happiness.' It listed grievances against King George III to justify the break. Fifty-six delegates signed the document, risking their lives for treason. The Declaration became the founding statement of American democratic ideals, inspiring freedom movements worldwide.",
    category: "history"
  },
  {
    id: 80,
    year: "1776",
    sortYear: 1776.9,
    title: "Washington Crosses the Delaware",
    summary: "George Washington leads a daring Christmas-night crossing of the Delaware River, turning the tide of the Revolution.",
    detail: "On the night of December 25-26, 1776, George Washington led 2,400 troops across the ice-choked Delaware River to launch a surprise attack on Hessian forces at Trenton, New Jersey. The Americans captured nearly 1,000 prisoners with minimal casualties. The bold strike came after a series of demoralizing defeats that had nearly destroyed the Continental Army. The victory at Trenton, followed by another at Princeton, revived patriot morale and convinced many that the war could be won.",
    category: "history"
  },
  {
    id: 81,
    year: "1777",
    sortYear: 1777,
    title: "Battle of Saratoga",
    summary: "The American victory at Saratoga convinces France to enter the war as an ally, a turning point in the Revolution.",
    detail: "In September and October 1777, American forces under General Horatio Gates defeated British General John Burgoyne's army at Saratoga, New York. Burgoyne surrendered his entire force of about 6,000 men. The victory was the turning point of the war because it convinced France that the Americans could win. France formally recognized American independence and entered the war in 1778, providing crucial military aid, naval support, and financial assistance that would prove decisive.",
    category: "history"
  },
  {
    id: 82,
    year: "1778",
    sortYear: 1778,
    title: "France Allies with the United States",
    summary: "France signs treaties of alliance and commerce with the United States, transforming the Revolution into a global conflict.",
    detail: "In February 1778, France and the United States signed the Treaty of Alliance and the Treaty of Amity and Commerce. France recognized American independence and pledged military support against Britain. French aid proved indispensable: the Marquis de Lafayette served as a general in the Continental Army, France supplied weapons, ammunition, and uniforms, and the French navy would play a decisive role at Yorktown. Spain and the Netherlands also entered the war against Britain, stretching British forces thin across the globe.",
    category: "history"
  },
  {
    id: 83,
    year: "1781",
    sortYear: 1781,
    title: "Battle of Yorktown",
    summary: "American and French forces trap the British army at Yorktown, Virginia, effectively ending the Revolutionary War.",
    detail: "In October 1781, a combined American and French force of about 17,000 troops besieged British General Cornwallis's army of roughly 8,000 at Yorktown, Virginia. The French fleet under Admiral de Grasse blocked any British escape or reinforcement by sea. After weeks of bombardment, Cornwallis surrendered on October 19. As the British troops laid down their arms, their band reportedly played 'The World Turned Upside Down.' The defeat shattered Britain's will to continue the war and led to peace negotiations.",
    category: "history"
  },
  {
    id: 84,
    year: "1783",
    sortYear: 1783,
    title: "Treaty of Paris Ends the Revolution",
    summary: "Britain formally recognizes American independence in the Treaty of Paris, ending the Revolutionary War.",
    detail: "Signed on September 3, 1783, the Treaty of Paris recognized the United States as a sovereign nation with boundaries stretching from the Atlantic Ocean to the Mississippi River and from Canada to Florida. Benjamin Franklin, John Adams, and John Jay negotiated favorable terms for the new nation. Britain ceded vast western territories and granted fishing rights off Newfoundland. The treaty represented one of the most consequential diplomatic achievements in American history and established the United States on the world stage.",
    category: "history"
  },
  {
    id: 85,
    year: "1786",
    sortYear: 1786,
    title: "Shays' Rebellion",
    summary: "Indebted Massachusetts farmers revolt, exposing the weaknesses of the Articles of Confederation and spurring calls for a stronger federal government.",
    detail: "In late 1786, former Continental Army captain Daniel Shays led an armed uprising of indebted farmers in western Massachusetts. The rebels attempted to seize a federal arsenal in Springfield and shut down courts to prevent foreclosure on their farms. The national government under the Articles of Confederation proved powerless to respond, and Massachusetts had to fund its own militia to suppress the revolt. The rebellion alarmed leaders like George Washington and James Madison, strengthening the case for the Constitutional Convention.",
    category: "history"
  },
  {
    id: 86,
    year: "1787",
    sortYear: 1787,
    title: "Constitutional Convention",
    summary: "Delegates gather in Philadelphia to draft the United States Constitution, creating the framework for American government.",
    detail: "From May to September 1787, 55 delegates from 12 states met in secret at the Pennsylvania State House in Philadelphia. Led by convention president George Washington, with James Madison serving as the primary architect, they drafted a new Constitution replacing the weak Articles of Confederation. Key compromises included the Great Compromise on congressional representation and the Three-Fifths Compromise on counting enslaved people. The resulting document, signed on September 17, 1787, established the federal system of government that endures today.",
    category: "history"
  },
  {
    id: 87,
    year: "1788",
    sortYear: 1788,
    title: "Constitution Ratified",
    summary: "The required nine states ratify the Constitution, and it becomes the supreme law of the land.",
    detail: "The ratification process sparked fierce debate between Federalists, who supported the new Constitution, and Anti-Federalists, who feared a too-powerful central government. Alexander Hamilton, James Madison, and John Jay wrote the Federalist Papers to argue for ratification. New Hampshire became the ninth state to ratify on June 21, 1788, meeting the threshold for adoption. Virginia and New York followed shortly after. The Anti-Federalists' insistence on a bill of rights led to the first ten amendments.",
    category: "history"
  },
  {
    id: 88,
    year: "1789",
    sortYear: 1789,
    title: "George Washington Inaugurated",
    summary: "George Washington is inaugurated as the first President of the United States, setting precedents for all future presidents.",
    detail: "On April 30, 1789, George Washington took the oath of office on the balcony of Federal Hall in New York City, the temporary national capital. As the first president, virtually everything he did set a precedent: he established the Cabinet system, insisted on being addressed simply as 'Mr. President,' and, crucially, voluntarily stepped down after two terms. His restraint in exercising power and his peaceful transfer of authority established norms of democratic governance that have endured for over two centuries.",
    category: "history"
  },
  {
    id: 89,
    year: "1789",
    sortYear: 1789.5,
    title: "French Revolution Begins",
    summary: "The French Revolution erupts, inspired partly by the American Revolution, and reshapes European politics.",
    detail: "The storming of the Bastille on July 14, 1789, marked the beginning of the French Revolution, which overthrew the monarchy and proclaimed liberty, equality, and fraternity. The Revolution was influenced by Enlightenment ideas and the American example. It produced the Declaration of the Rights of Man, abolished feudalism, and eventually led to the rise of Napoleon. The upheaval divided American opinion: Jefferson sympathized with the revolutionaries while Hamilton and many Federalists were horrified by the violence.",
    category: "history"
  },
  {
    id: 90,
    year: "1791",
    sortYear: 1791,
    title: "Bill of Rights Ratified",
    summary: "The first ten amendments to the Constitution are ratified, guaranteeing fundamental rights and liberties.",
    detail: "Ratified on December 15, 1791, the Bill of Rights addressed Anti-Federalist concerns about the Constitution's lack of explicit protections for individual liberties. James Madison drafted the amendments, drawing on Virginia's Declaration of Rights and other state constitutions. The ten amendments protect freedoms of speech, religion, press, and assembly; the right to bear arms; protections against unreasonable searches and self-incrimination; the right to a speedy trial; and reserve unenumerated rights to the people and powers to the states.",
    category: "history"
  },
  {
    id: 91,
    year: "1793",
    sortYear: 1793,
    title: "Cotton Gin Invented",
    summary: "Eli Whitney's cotton gin revolutionizes cotton production but tragically entrenches the institution of slavery in the South.",
    detail: "In 1793, Eli Whitney invented the cotton gin, a machine that rapidly separated cotton fibers from their seeds. The device made cotton enormously profitable, and cotton production in the American South exploded from about 750,000 pounds in 1790 to 35 million pounds by 1800. This economic boom dramatically increased the demand for enslaved labor, deepening the South's dependence on slavery just as Northern states were beginning to abolish it. The cotton gin thus widened the sectional divide that would eventually lead to the Civil War.",
    category: "history"
  },
  {
    id: 92,
    year: "1797",
    sortYear: 1797,
    title: "First Peaceful Transfer of Power",
    summary: "George Washington steps down and John Adams assumes the presidency, establishing the tradition of peaceful power transfer.",
    detail: "In March 1797, George Washington voluntarily relinquished the presidency after two terms, a decision that stunned the world. King George III reportedly said it made Washington 'the greatest man in the world.' John Adams succeeded him after winning the 1796 election over Thomas Jefferson, marking the first peaceful transition of power under the new Constitution. Washington's farewell address warned against political factions and foreign entanglements, advice that would echo through American history.",
    category: "history"
  },
  {
    id: 93,
    year: "1800",
    sortYear: 1800,
    title: "Election of 1800 and Transfer of Power Between Parties",
    summary: "Thomas Jefferson defeats John Adams, marking the first peaceful transfer of power between opposing political parties.",
    detail: "The bitterly contested election of 1800 pitted Federalist President John Adams against Democratic-Republican Thomas Jefferson. The campaign featured personal attacks and dire warnings from both sides. When Jefferson won, Adams accepted the result and peacefully left office, establishing a crucial precedent. Jefferson called it 'the Revolution of 1800' because it proved that power could transfer between ideological opponents through ballots rather than bullets. The peaceful transfer between rival parties remains a cornerstone of American democracy.",
    category: "history"
  },
  {
    id: 94,
    year: "1803",
    sortYear: 1803,
    title: "Marbury v. Madison",
    summary: "The Supreme Court establishes the principle of judicial review, asserting its power to declare laws unconstitutional.",
    detail: "Chief Justice John Marshall's unanimous ruling in Marbury v. Madison established that the Supreme Court has the authority to review acts of Congress and declare them unconstitutional. While the immediate case involved a minor judicial appointment dispute, the principle of judicial review fundamentally shaped American governance. It made the Supreme Court a co-equal branch of government and the ultimate arbiter of constitutional questions. Marshall's decision is widely regarded as the most important in the Court's history.",
    category: "history"
  },
  {
    id: 95,
    year: "1803",
    sortYear: 1803.5,
    title: "Louisiana Purchase",
    summary: "President Jefferson purchases the Louisiana Territory from France, doubling the size of the United States.",
    detail: "In 1803, President Thomas Jefferson purchased approximately 828,000 square miles of territory from Napoleon's France for $15 million, roughly four cents per acre. The acquisition doubled the nation's size, stretching from the Mississippi River to the Rocky Mountains. Jefferson, a strict constructionist, wrestled with the constitutionality of the purchase but ultimately prioritized the opportunity. The territory would eventually be carved into all or part of 15 states and give the young nation access to the Mississippi River and the port of New Orleans.",
    category: "history"
  },
  {
    id: 96,
    year: "1804",
    sortYear: 1804,
    title: "Lewis and Clark Expedition Begins",
    summary: "Meriwether Lewis and William Clark lead the Corps of Discovery on a two-year journey to explore the American West.",
    detail: "Commissioned by President Jefferson, Lewis and Clark departed from Camp Dubois, Illinois, in May 1804 with about 45 men. Their mission was to explore the Louisiana Purchase, find a practical route to the Pacific Ocean, and document the land, plants, animals, and indigenous peoples they encountered. Sacagawea, a Lemhi Shoshone woman, served as a crucial interpreter and guide. The expedition reached the Pacific in November 1805 and returned to St. Louis in September 1806, having traveled roughly 8,000 miles and vastly expanded American knowledge of the West.",
    category: "history"
  },
  {
    id: 97,
    year: "1807",
    sortYear: 1807,
    title: "Slave Trade Abolished",
    summary: "The United States bans the importation of enslaved people, though domestic slavery and the internal slave trade continue.",
    detail: "On March 2, 1807, President Jefferson signed legislation prohibiting the importation of enslaved people into the United States, effective January 1, 1808, the earliest date permitted by the Constitution. Britain passed a similar law the same month. While the act did not abolish slavery itself, it curtailed the Atlantic slave trade to America. However, the domestic slave trade flourished, and an estimated one million enslaved people were forcibly moved from the Upper South to the Deep South between 1790 and 1860.",
    category: "history"
  },
  {
    id: 98,
    year: "1812",
    sortYear: 1812,
    title: "War of 1812",
    summary: "The United States goes to war with Britain over maritime rights, trade restrictions, and British support for Native resistance.",
    detail: "The War of 1812 was triggered by British impressment of American sailors, trade restrictions during the Napoleonic Wars, and British support for Native American resistance to westward expansion. The British burned Washington, D.C., in 1814, including the White House. Francis Scott Key wrote 'The Star-Spangled Banner' during the British bombardment of Fort McHenry in Baltimore. Andrew Jackson's decisive victory at the Battle of New Orleans in January 1815, fought before news of the peace treaty arrived, made him a national hero.",
    category: "history"
  },
  {
    id: 99,
    year: "1820",
    sortYear: 1820,
    title: "Missouri Compromise",
    summary: "Congress admits Missouri as a slave state and Maine as a free state, drawing a line across the western territories to manage the slavery issue.",
    detail: "When Missouri applied for statehood as a slave state, it threatened to upset the balance between free and slave states in the Senate. The compromise, crafted largely by Henry Clay, admitted Missouri as a slave state and Maine as a free state, maintaining the balance. It also drew a line at 36 degrees 30 minutes north latitude across the Louisiana Territory: slavery would be permitted south of the line and prohibited north of it. The compromise postponed but did not resolve the growing sectional crisis over slavery.",
    category: "history"
  },
  {
    id: 100,
    year: "1823",
    sortYear: 1823,
    title: "Monroe Doctrine",
    summary: "President Monroe declares the Western Hemisphere closed to further European colonization, asserting American influence in the region.",
    detail: "In his December 1823 annual message to Congress, President James Monroe articulated what became known as the Monroe Doctrine. He declared that the Americas were no longer open to European colonization and that any European attempt to extend influence in the hemisphere would be considered a hostile act. In return, the U.S. pledged not to interfere in European affairs. Though initially unenforceable, the doctrine became a cornerstone of American foreign policy and was invoked by presidents throughout the 19th and 20th centuries.",
    category: "history"
  },

  // === Early Republic to Civil War (IDs 101-130) ===
  {
    id: 101,
    year: "1830",
    sortYear: 1830,
    title: "Indian Removal Act",
    summary: "President Andrew Jackson signs the Indian Removal Act, authorizing the forced relocation of Native Americans from their homelands.",
    detail: "The Indian Removal Act of 1830 authorized the president to negotiate treaties forcing Native American nations to relocate west of the Mississippi River. Though framed as voluntary, the removals were coerced and often brutal. The Cherokee, Creek, Chickasaw, Choctaw, and Seminole nations were among those displaced. The Cherokee removal of 1838-1839, known as the Trail of Tears, killed an estimated 4,000 of the 15,000 Cherokee who were marched to present-day Oklahoma in the dead of winter.",
    category: "history"
  },
  {
    id: 102,
    year: "1831",
    sortYear: 1831,
    title: "Nat Turner's Rebellion",
    summary: "Enslaved preacher Nat Turner leads the deadliest slave revolt in U.S. history in Southampton County, Virginia.",
    detail: "In August 1831, Nat Turner, an enslaved man who believed he was divinely chosen, led a rebellion in Southampton County, Virginia. Over two days, Turner and his followers killed about 55 white people before being suppressed by militia and federal troops. Turner eluded capture for over two months before being caught, tried, and executed. The rebellion terrified the slaveholding South, leading to harsher slave codes and restrictions on free Black people. It intensified the national debate over slavery.",
    category: "history"
  },
  {
    id: 103,
    year: "1836",
    sortYear: 1836,
    title: "Battle of the Alamo",
    summary: "A small force of Texan defenders is overrun by the Mexican army at the Alamo, rallying support for Texas independence.",
    detail: "In February 1836, about 200 Texan defenders, including Davy Crockett and Jim Bowie, fortified the Alamo, a former Spanish mission in San Antonio. Mexican General Santa Anna besieged the compound for 13 days before launching a final assault on March 6, killing nearly all the defenders. 'Remember the Alamo!' became a rallying cry, and Sam Houston's Texan forces defeated Santa Anna at the Battle of San Jacinto six weeks later, securing Texas independence. Texas was annexed by the United States in 1845.",
    category: "history"
  },
  {
    id: 104,
    year: "1838",
    sortYear: 1838,
    title: "Trail of Tears",
    summary: "The Cherokee Nation is forcibly marched from their homeland to Indian Territory, with thousands dying along the way.",
    detail: "Despite a Supreme Court ruling in Worcester v. Georgia (1832) that recognized Cherokee sovereignty, President Andrew Jackson refused to enforce the decision. In 1838, federal troops rounded up about 15,000 Cherokee and forced them to march roughly 1,000 miles to present-day Oklahoma. The journey, conducted through harsh winter conditions with inadequate food, shelter, and clothing, killed an estimated 4,000 people. The Trail of Tears remains one of the most shameful episodes in American history.",
    category: "history"
  },
  {
    id: 105,
    year: "1845",
    sortYear: 1845,
    title: "Manifest Destiny and Annexation of Texas",
    summary: "The United States annexes Texas and embraces the ideology of Manifest Destiny, the belief that American expansion across the continent is inevitable and divinely ordained.",
    detail: "Journalist John O'Sullivan coined the phrase 'Manifest Destiny' in 1845, capturing the widespread belief that Americans were destined to expand from the Atlantic to the Pacific. Texas, an independent republic since 1836, was admitted as the 28th state in December 1845, despite Mexican objections. The annexation contributed directly to the Mexican-American War. The ideology of Manifest Destiny fueled westward expansion but also dispossession of Native Americans and the expansion of slavery into new territories.",
    category: "history"
  },
  {
    id: 106,
    year: "1846",
    sortYear: 1846,
    title: "Mexican-American War Begins",
    summary: "War erupts between the United States and Mexico, ultimately resulting in massive territorial gains for the U.S.",
    detail: "Disputes over the Texas border and President James K. Polk's desire for California led to war with Mexico in 1846. American forces captured Mexico City in September 1847. The Treaty of Guadalupe Hidalgo in 1848 ceded roughly 525,000 square miles to the United States, including present-day California, Nevada, Utah, Arizona, and parts of Colorado, Wyoming, and New Mexico. The war reignited the slavery debate, as Northern and Southern politicians clashed over whether slavery should be permitted in the new territories.",
    category: "history"
  },
  {
    id: 107,
    year: "1848",
    sortYear: 1848,
    title: "Seneca Falls Convention",
    summary: "The first women's rights convention is held in Seneca Falls, New York, launching the organized women's suffrage movement.",
    detail: "Organized by Elizabeth Cady Stanton and Lucretia Mott, the Seneca Falls Convention convened on July 19-20, 1848, with about 300 attendees. Stanton drafted the Declaration of Sentiments, modeled on the Declaration of Independence, declaring that 'all men and women are created equal.' The convention passed resolutions calling for women's property rights, educational opportunities, and, most controversially, the right to vote. It took 72 more years, but the Seneca Falls Convention launched the movement that achieved women's suffrage in 1920.",
    category: "history"
  },
  {
    id: 108,
    year: "1848",
    sortYear: 1848.5,
    title: "California Gold Rush",
    summary: "The discovery of gold at Sutter's Mill triggers a massive westward migration, transforming California and the nation.",
    detail: "On January 24, 1848, James Marshall discovered gold at Sutter's Mill in Coloma, California. News spread quickly, and by 1849, roughly 300,000 people from across the United States and the world had flooded into California. San Francisco grew from a tiny settlement to a bustling city almost overnight. The Gold Rush accelerated California's statehood in 1850, generated enormous wealth, and dramatically increased westward migration. It also devastated Native Californian populations through violence, disease, and displacement.",
    category: "history"
  },
  {
    id: 109,
    year: "1850",
    sortYear: 1850,
    title: "Compromise of 1850",
    summary: "Congress passes a series of measures attempting to settle the slavery debate, including the Fugitive Slave Act.",
    detail: "Henry Clay's Compromise of 1850 admitted California as a free state, organized the remaining Mexican Cession territories under popular sovereignty, abolished the slave trade in Washington, D.C., and enacted a strict new Fugitive Slave Act. The Fugitive Slave Act required Northerners to assist in capturing runaway slaves and denied accused fugitives a jury trial. Rather than settling the slavery issue, the compromise inflamed passions on both sides, particularly in the North, where the Fugitive Slave Act provoked outrage and increased support for abolition.",
    category: "history"
  },
  {
    id: 110,
    year: "1852",
    sortYear: 1852,
    title: "Uncle Tom's Cabin Published",
    summary: "Harriet Beecher Stowe's novel dramatizes the brutality of slavery, galvanizing Northern anti-slavery sentiment.",
    detail: "Published in 1852, Uncle Tom's Cabin sold 300,000 copies in its first year and eventually became the best-selling novel of the 19th century. Stowe's vivid portrayal of slavery's cruelties humanized enslaved people for many white Northern readers and turned public opinion against the institution. The book infuriated Southerners, who dismissed it as propaganda. When Abraham Lincoln reportedly met Stowe during the Civil War, he allegedly said, 'So you're the little woman who wrote the book that made this great war.'",
    category: "history"
  },
  {
    id: 111,
    year: "1857",
    sortYear: 1857,
    title: "Dred Scott Decision",
    summary: "The Supreme Court rules that enslaved people are not citizens and have no right to sue, intensifying the national crisis over slavery.",
    detail: "In Dred Scott v. Sandford, Chief Justice Roger Taney ruled that Dred Scott, an enslaved man who had lived in free territories, had no standing to sue because African Americans, whether free or enslaved, were not citizens under the Constitution. The Court also declared the Missouri Compromise unconstitutional, asserting that Congress could not prohibit slavery in the territories. The decision outraged Northerners, energized the Republican Party, and pushed the nation closer to civil war. Abraham Lincoln called it a perversion of the Constitution.",
    category: "history"
  },
  {
    id: 112,
    year: "1859",
    sortYear: 1859,
    title: "John Brown's Raid on Harpers Ferry",
    summary: "Abolitionist John Brown leads a failed raid on a federal armory, hoping to spark a slave uprising and hasten the end of slavery.",
    detail: "On October 16, 1859, John Brown and 21 followers attacked the federal armory at Harpers Ferry, Virginia, intending to seize weapons and arm enslaved people for a rebellion. The raid was quickly suppressed by U.S. Marines under Colonel Robert E. Lee, and Brown was captured, tried, and hanged. While many Northerners condemned his methods, others hailed him as a martyr. Brown's raid terrified the South and deepened the sectional divide. His execution became a rallying point for abolitionists as the nation hurtled toward war.",
    category: "history"
  },
  {
    id: 113,
    year: "1860",
    sortYear: 1860,
    title: "Abraham Lincoln Elected President",
    summary: "Abraham Lincoln wins the presidency on an anti-slavery-expansion platform, triggering Southern secession.",
    detail: "In the four-way election of 1860, Republican Abraham Lincoln won with less than 40% of the popular vote. He did not appear on the ballot in most Southern states. Lincoln opposed the expansion of slavery into new territories, though he initially pledged not to interfere with it where it already existed. His election was intolerable to many Southerners. Within weeks, South Carolina voted to secede, followed by six more states before Lincoln took office. The stage was set for the nation's greatest crisis.",
    category: "history"
  },
  {
    id: 114,
    year: "1861",
    sortYear: 1861,
    title: "Attack on Fort Sumter",
    summary: "Confederate forces bombard Fort Sumter in Charleston Harbor, beginning the American Civil War.",
    detail: "On April 12, 1861, Confederate batteries opened fire on the federal garrison at Fort Sumter in Charleston, South Carolina, after President Lincoln refused to evacuate the fort. The bombardment lasted 34 hours before Major Robert Anderson surrendered. Remarkably, no one on either side was killed during the battle. The attack galvanized the North and prompted Lincoln to call for 75,000 volunteers, which in turn pushed four more Southern states, including Virginia, to join the Confederacy. The Civil War had begun.",
    category: "history"
  },
  {
    id: 115,
    year: "1862",
    sortYear: 1862,
    title: "Battle of Antietam",
    summary: "The bloodiest single day in American history, Antietam gives Lincoln the victory he needs to issue the Emancipation Proclamation.",
    detail: "On September 17, 1862, Union and Confederate forces clashed at Antietam Creek near Sharpsburg, Maryland. In a single day of fighting, roughly 23,000 soldiers were killed, wounded, or missing, making it the bloodiest day in American history. Though tactically inconclusive, General Lee's retreat gave the Union a strategic victory. Lincoln used the moment to announce the Emancipation Proclamation, transforming the war from a fight to preserve the Union into a war to end slavery.",
    category: "history"
  },
  {
    id: 116,
    year: "1863",
    sortYear: 1863,
    title: "Emancipation Proclamation",
    summary: "President Lincoln declares all enslaved people in Confederate states to be free, redefining the purpose of the Civil War.",
    detail: "Effective January 1, 1863, the Emancipation Proclamation declared 'forever free' all enslaved persons in states in rebellion against the United States. It did not free enslaved people in border states loyal to the Union, as Lincoln feared losing their support. Nevertheless, the Proclamation transformed the war into a fight for human freedom, discouraged European nations from recognizing the Confederacy, and authorized the enlistment of Black soldiers. By war's end, nearly 200,000 African Americans had served in the Union Army and Navy.",
    category: "history"
  },
  {
    id: 117,
    year: "1863",
    sortYear: 1863.5,
    title: "Battle of Gettysburg",
    summary: "The Union victory at Gettysburg marks the turning point of the Civil War and the high-water mark of the Confederacy.",
    detail: "From July 1-3, 1863, Union and Confederate armies fought the war's largest battle at Gettysburg, Pennsylvania. On the third day, General Lee launched the disastrous Pickett's Charge, sending 12,500 men across open ground into withering Union fire. The charge failed catastrophically, and Lee retreated to Virginia. Combined casualties exceeded 50,000. Four months later, Lincoln delivered the Gettysburg Address at the dedication of the battlefield cemetery, redefining the war as a struggle for the principle that 'all men are created equal.'",
    category: "history"
  },
  {
    id: 118,
    year: "1865",
    sortYear: 1865,
    title: "Civil War Ends: Lee Surrenders at Appomattox",
    summary: "General Robert E. Lee surrenders to Ulysses S. Grant at Appomattox Court House, effectively ending the Civil War.",
    detail: "On April 9, 1865, General Lee surrendered the Army of Northern Virginia to General Grant at the McLean House in Appomattox Court House, Virginia. Grant offered generous terms: Confederate soldiers could return home with their horses and personal property, and officers could keep their sidearms. Lee told his men to go home and be good citizens. The remaining Confederate forces surrendered over the following weeks. The war had killed an estimated 620,000 to 750,000 soldiers, roughly 2% of the national population.",
    category: "history"
  },
  {
    id: 119,
    year: "1865",
    sortYear: 1865.3,
    title: "Assassination of Abraham Lincoln",
    summary: "President Lincoln is shot by John Wilkes Booth at Ford's Theatre, just five days after Lee's surrender.",
    detail: "On the evening of April 14, 1865, actor and Confederate sympathizer John Wilkes Booth shot President Lincoln at Ford's Theatre in Washington, D.C. Lincoln died the following morning. The assassination was part of a broader conspiracy to simultaneously kill Vice President Andrew Johnson and Secretary of State William Seward. Only Booth succeeded. Lincoln's death robbed the nation of a leader uniquely suited to guide Reconstruction and heal wartime wounds. Andrew Johnson, who lacked Lincoln's political skill and moral authority, struggled to manage the transition.",
    category: "history"
  },
  {
    id: 120,
    year: "1865",
    sortYear: 1865.7,
    title: "13th Amendment Abolishes Slavery",
    summary: "The 13th Amendment to the Constitution formally abolishes slavery throughout the United States.",
    detail: "Ratified on December 6, 1865, the 13th Amendment declared that 'neither slavery nor involuntary servitude, except as a punishment for crime, shall exist within the United States.' It was the first of three Reconstruction Amendments designed to guarantee the rights of formerly enslaved people. Lincoln had pushed for the amendment's passage before his death, considering the Emancipation Proclamation a wartime measure that might not survive legal challenge. The amendment permanently ended the institution that had defined American life for nearly 250 years.",
    category: "history"
  },
  {
    id: 121,
    year: "1868",
    sortYear: 1868,
    title: "14th Amendment: Equal Protection",
    summary: "The 14th Amendment grants citizenship to all persons born in the United States and guarantees equal protection under the law.",
    detail: "Ratified on July 9, 1868, the 14th Amendment overturned the Dred Scott decision by declaring all persons born or naturalized in the United States to be citizens. Its Equal Protection Clause prohibits states from denying any person 'equal protection of the laws,' and its Due Process Clause has been used to apply the Bill of Rights to state governments. The amendment became the basis for landmark civil rights decisions throughout the 20th and 21st centuries, including Brown v. Board of Education and Obergefell v. Hodges.",
    category: "history"
  },
  {
    id: 122,
    year: "1870",
    sortYear: 1870,
    title: "15th Amendment: Right to Vote",
    summary: "The 15th Amendment prohibits denying the right to vote based on race, color, or previous servitude.",
    detail: "Ratified on February 3, 1870, the 15th Amendment declared that the right to vote 'shall not be denied or abridged by the United States or by any state on account of race, color, or previous condition of servitude.' During Reconstruction, Black men voted in large numbers and were elected to local, state, and federal offices. However, after Reconstruction ended in 1877, Southern states systematically undermined the amendment through poll taxes, literacy tests, grandfather clauses, and violent intimidation. Full enforcement did not come until the Voting Rights Act of 1965.",
    category: "history"
  },
  {
    id: 123,
    year: "1865",
    sortYear: 1865.5,
    title: "Reconstruction Begins",
    summary: "The era of Reconstruction attempts to rebuild the South and integrate formerly enslaved people into American civic life.",
    detail: "Reconstruction, lasting roughly from 1865 to 1877, was the turbulent period following the Civil War during which the federal government attempted to reintegrate the former Confederate states and establish rights for newly freed Black Americans. During this era, the 13th, 14th, and 15th Amendments were ratified, and Black men voted and held public office for the first time. However, resistance from white Southerners, violence from groups like the Ku Klux Klan, and waning Northern commitment ultimately undermined these gains.",
    category: "history"
  },
  {
    id: 124,
    year: "1877",
    sortYear: 1877,
    title: "End of Reconstruction",
    summary: "The Compromise of 1877 ends Reconstruction, withdrawing federal troops from the South and ushering in the Jim Crow era.",
    detail: "The disputed 1876 presidential election between Republican Rutherford B. Hayes and Democrat Samuel Tilden was resolved by an informal compromise: Hayes would become president in exchange for withdrawing federal troops from the South. Without federal enforcement, Southern states systematically stripped Black citizens of their rights through Jim Crow laws, poll taxes, literacy tests, and racial terrorism. The promises of Reconstruction were abandoned for nearly a century, until the Civil Rights Movement of the 1950s and 1960s.",
    category: "history"
  },
  {
    id: 125,
    year: "1862",
    sortYear: 1862.5,
    title: "Homestead Act",
    summary: "The Homestead Act offers 160 acres of public land to settlers willing to farm it, accelerating westward expansion.",
    detail: "Signed by President Lincoln on May 20, 1862, the Homestead Act offered 160 acres of public land to any citizen or intended citizen who paid a small filing fee and agreed to live on and improve the land for five years. By 1900, roughly 600,000 claims had been filed. The act drew millions of settlers westward, including many immigrants, and transformed the Great Plains. However, it also dispossessed Native Americans of their remaining lands and sometimes benefited speculators more than small farmers.",
    category: "history"
  },
  {
    id: 126,
    year: "1863",
    sortYear: 1863.2,
    title: "Gettysburg Address",
    summary: "President Lincoln delivers a brief but immortal speech rededicating the nation to the principle that all men are created equal.",
    detail: "On November 19, 1863, President Lincoln spoke for roughly two minutes at the dedication of the Soldiers' National Cemetery at Gettysburg. In just 272 words, he reframed the Civil War as a test of whether a nation 'conceived in Liberty, and dedicated to the proposition that all men are created equal' could endure. The speech, beginning 'Four score and seven years ago,' is considered one of the greatest speeches in American history and helped define the war's meaning for future generations.",
    category: "history"
  },
  {
    id: 127,
    year: "1869",
    sortYear: 1869,
    title: "Transcontinental Railroad Completed",
    summary: "The first transcontinental railroad is completed at Promontory Summit, Utah, connecting East and West by rail.",
    detail: "On May 10, 1869, the Central Pacific Railroad, building eastward from Sacramento, and the Union Pacific Railroad, building westward from Omaha, met at Promontory Summit, Utah. A golden spike was driven to mark the completion. The railroad reduced cross-country travel from months to about a week, accelerated settlement of the West, and unified the national economy. Chinese and Irish immigrant laborers performed much of the grueling and dangerous construction work, often under exploitative conditions.",
    category: "history"
  },
  {
    id: 128,
    year: "1876",
    sortYear: 1876,
    title: "Battle of Little Bighorn",
    summary: "Lakota, Northern Cheyenne, and Arapaho warriors defeat Lieutenant Colonel Custer's forces at the Battle of Little Bighorn.",
    detail: "On June 25, 1876, Lieutenant Colonel George Armstrong Custer led about 210 soldiers of the 7th Cavalry against a large encampment of Lakota, Northern Cheyenne, and Arapaho warriors at the Little Bighorn River in Montana Territory. Custer's forces were completely overwhelmed and annihilated. Leaders Sitting Bull and Crazy Horse inspired the coalition. The victory was the most significant Native American military triumph against the U.S. Army, but it prompted a massive military response that ultimately ended resistance on the northern Plains.",
    category: "history"
  },
  {
    id: 129,
    year: "1879",
    sortYear: 1879,
    title: "Edison Invents the Practical Light Bulb",
    summary: "Thomas Edison demonstrates a practical incandescent light bulb, ushering in the age of electric illumination.",
    detail: "On October 21, 1879, Thomas Edison and his team at Menlo Park, New Jersey, successfully tested an incandescent light bulb that burned for over 13 hours using a carbonized bamboo filament. While others had created incandescent lights before, Edison's innovation was developing a practical, long-lasting bulb alongside the electrical distribution system needed to power it. By 1882, he had built the first commercial power station on Pearl Street in Manhattan, launching the electrification of American life.",
    category: "history"
  },
  {
    id: 130,
    year: "1886",
    sortYear: 1886,
    title: "Statue of Liberty Dedicated",
    summary: "France's gift to the United States, the Statue of Liberty, is dedicated in New York Harbor as a symbol of freedom and democracy.",
    detail: "On October 28, 1886, President Grover Cleveland dedicated the Statue of Liberty on Bedloe's Island in New York Harbor. Designed by French sculptor Frederic Auguste Bartholdi and engineered by Gustave Eiffel, the copper statue stands 151 feet tall atop an 89-foot pedestal. A gift from France commemorating the Franco-American alliance during the Revolution, Lady Liberty quickly became the iconic welcome for millions of immigrants arriving by ship. The poem 'The New Colossus' by Emma Lazarus, with its famous line 'Give me your tired, your poor,' was added to the pedestal in 1903.",
    category: "history"
  },

  // === Gilded Age to WWI (IDs 131-150) ===
  {
    id: 131,
    year: "1890",
    sortYear: 1890,
    title: "Wounded Knee Massacre",
    summary: "U.S. soldiers massacre roughly 300 Lakota men, women, and children at Wounded Knee Creek, effectively ending the Indian Wars.",
    detail: "On December 29, 1890, the U.S. 7th Cavalry attempted to disarm a band of Lakota at Wounded Knee Creek on the Pine Ridge Reservation in South Dakota. A shot was fired during the disarmament, and soldiers opened fire with rifles and Hotchkiss guns, killing an estimated 250 to 300 Lakota, including women and children. The massacre is considered the last major armed conflict between the U.S. military and Native Americans and marked the tragic end of Native resistance to westward expansion.",
    category: "history"
  },
  {
    id: 132,
    year: "1892",
    sortYear: 1892,
    title: "Ellis Island Opens",
    summary: "Ellis Island begins processing immigrants, becoming the gateway for over 12 million newcomers to America.",
    detail: "On January 1, 1892, Ellis Island opened as the nation's primary immigration processing center in New York Harbor. Over the next 62 years, roughly 12 million immigrants passed through its doors, mostly from Southern and Eastern Europe. Inspectors conducted medical and legal examinations, turning away about 2% of arrivals. For the vast majority, Ellis Island represented the threshold of a new life. Today, an estimated 40% of Americans can trace their ancestry to someone who entered through Ellis Island.",
    category: "history"
  },
  {
    id: 133,
    year: "1896",
    sortYear: 1896,
    title: "Plessy v. Ferguson",
    summary: "The Supreme Court rules that racial segregation is constitutional under the 'separate but equal' doctrine.",
    detail: "In Plessy v. Ferguson, the Supreme Court upheld a Louisiana law requiring separate railroad cars for Black and white passengers, ruling 7-1 that segregation did not violate the 14th Amendment as long as facilities were 'equal.' Justice John Marshall Harlan's lone dissent argued that 'our Constitution is color-blind.' The decision provided legal cover for Jim Crow segregation across the South for the next 58 years. It was not overturned until Brown v. Board of Education in 1954.",
    category: "history"
  },
  {
    id: 134,
    year: "1898",
    sortYear: 1898,
    title: "Spanish-American War",
    summary: "The United States defeats Spain and acquires overseas territories, emerging as a world power.",
    detail: "After the mysterious sinking of the USS Maine in Havana Harbor and sensationalized newspaper coverage, the United States declared war on Spain in April 1898. The conflict lasted just four months. Theodore Roosevelt led the Rough Riders in the charge up San Juan Hill in Cuba, and Admiral Dewey destroyed the Spanish fleet in Manila Bay. The Treaty of Paris gave the United States control of Puerto Rico, Guam, and the Philippines, marking America's emergence as an imperial power on the world stage.",
    category: "history"
  },
  {
    id: 135,
    year: "1901",
    sortYear: 1901,
    title: "Theodore Roosevelt Becomes President",
    summary: "Following President McKinley's assassination, Theodore Roosevelt becomes the youngest president and ushers in the Progressive Era.",
    detail: "When President William McKinley was shot by an anarchist at the Pan-American Exposition in Buffalo, New York, on September 6, 1901, Vice President Theodore Roosevelt assumed the presidency at age 42, the youngest person to hold the office. Roosevelt became a transformative president, busting monopolies, establishing national parks, championing consumer protections like the Pure Food and Drug Act, and projecting American power abroad through the construction of the Panama Canal and the Great White Fleet.",
    category: "history"
  },
  {
    id: 136,
    year: "1903",
    sortYear: 1903,
    title: "Wright Brothers' First Flight",
    summary: "Orville and Wilbur Wright achieve the first powered, controlled airplane flight at Kitty Hawk, North Carolina.",
    detail: "On December 17, 1903, Orville Wright piloted the Wright Flyer for 12 seconds, covering 120 feet at Kitty Hawk, North Carolina. The brothers made four flights that day, with the longest lasting 59 seconds and covering 852 feet. Self-taught engineers from Dayton, Ohio, they had solved the problem of controlled flight through systematic experimentation with wing shapes, a wind tunnel, and a lightweight engine of their own design. Their achievement launched the age of aviation, which would transform warfare, commerce, and travel within decades.",
    category: "history"
  },
  {
    id: 137,
    year: "1906",
    sortYear: 1906,
    title: "San Francisco Earthquake",
    summary: "A devastating earthquake and fire destroy much of San Francisco, killing over 3,000 people and leaving half the city homeless.",
    detail: "On April 18, 1906, a magnitude 7.9 earthquake struck San Francisco along the San Andreas Fault. The quake itself caused massive destruction, but the fires that raged for three days afterward were even more devastating, destroying over 80% of the city. More than 3,000 people died and over 225,000 were left homeless. The disaster spurred advances in earthquake science and building codes. San Francisco rebuilt rapidly, and the catastrophe demonstrated both the vulnerability and resilience of American cities.",
    category: "history"
  },
  {
    id: 138,
    year: "1908",
    sortYear: 1908,
    title: "Ford's Model T",
    summary: "Henry Ford introduces the Model T, making automobiles affordable for ordinary Americans and revolutionizing transportation.",
    detail: "When Henry Ford introduced the Model T in 1908, priced at $850, he aimed to build a car that average Americans could afford. By implementing the moving assembly line in 1913, Ford dramatically reduced production time and costs, eventually dropping the price to under $300. By 1927, over 15 million Model Ts had been sold. The Model T transformed American society, spurring the growth of suburbs, the construction of roads and highways, and the development of an entire automobile-centered culture.",
    category: "history"
  },
  {
    id: 139,
    year: "1912",
    sortYear: 1912,
    title: "Sinking of the Titanic",
    summary: "The RMS Titanic, touted as unsinkable, strikes an iceberg and sinks on its maiden voyage, killing over 1,500 people.",
    detail: "On April 14-15, 1912, the RMS Titanic, the largest and most luxurious ship afloat, struck an iceberg in the North Atlantic on her maiden voyage from Southampton to New York. Of the approximately 2,224 people aboard, more than 1,500 died, partly because the ship carried lifeboats for only about half its passengers. The disaster exposed class inequalities, as survival rates were much higher for first-class passengers. It led to major reforms in maritime safety, including requirements for sufficient lifeboats and 24-hour radio watch.",
    category: "history"
  },
  {
    id: 140,
    year: "1913",
    sortYear: 1913,
    title: "Federal Reserve System Established",
    summary: "Congress creates the Federal Reserve System, establishing the central banking system of the United States.",
    detail: "The Federal Reserve Act of 1913, signed by President Woodrow Wilson, created the Federal Reserve System to provide a more stable monetary and financial system. The 'Fed' was designed to serve as a lender of last resort, regulate banks, and manage the money supply. Its creation was a response to a series of financial panics, particularly the Panic of 1907. The Federal Reserve would become one of the most powerful economic institutions in the world, wielding enormous influence over interest rates, inflation, and employment.",
    category: "history"
  },
  {
    id: 141,
    year: "1914",
    sortYear: 1914,
    title: "World War I Begins",
    summary: "The assassination of Archduke Franz Ferdinand triggers a chain of alliances and declarations of war, plunging Europe into the Great War.",
    detail: "On June 28, 1914, Gavrilo Princip, a Bosnian Serb nationalist, assassinated Archduke Franz Ferdinand of Austria-Hungary in Sarajevo. The killing triggered a cascade of alliance obligations that drew the major European powers into war within weeks. The conflict eventually involved over 30 nations and introduced trench warfare, poison gas, tanks, and aircraft. The United States initially remained neutral under President Wilson's policy of non-intervention, but the war's global scope would eventually draw America in.",
    category: "history"
  },
  {
    id: 142,
    year: "1917",
    sortYear: 1917,
    title: "United States Enters World War I",
    summary: "The U.S. declares war on Germany after unrestricted submarine warfare and the Zimmermann Telegram, tipping the balance of the conflict.",
    detail: "After years of neutrality, the United States entered World War I on April 6, 1917. Germany's resumption of unrestricted submarine warfare, which sank American ships, and the Zimmermann Telegram, in which Germany proposed a military alliance with Mexico against the U.S., pushed Congress to declare war. Over two million American soldiers, called 'doughboys,' were deployed to France. Their arrival provided the fresh manpower the Allies desperately needed, and American forces played a decisive role in the war's final offensives.",
    category: "history"
  },
  {
    id: 143,
    year: "1918",
    sortYear: 1918,
    title: "World War I Ends",
    summary: "An armistice ends World War I on November 11, 1918, after four years of devastating conflict that killed millions.",
    detail: "World War I ended at 11:00 a.m. on November 11, 1918, the eleventh hour of the eleventh day of the eleventh month. The war had killed roughly 17 million people and wounded 20 million more. The Treaty of Versailles imposed harsh penalties on Germany, including massive reparations, territorial losses, and military restrictions. President Wilson championed the League of Nations, but the U.S. Senate refused to ratify the treaty. November 11 is now commemorated as Veterans Day in the United States.",
    category: "history"
  },
  {
    id: 144,
    year: "1918",
    sortYear: 1918.5,
    title: "Spanish Flu Pandemic",
    summary: "The 1918 influenza pandemic infects roughly a third of the world's population and kills an estimated 50 million people.",
    detail: "The Spanish Flu pandemic of 1918-1919 was the deadliest pandemic in modern history. Despite its name, the virus likely originated in the United States or Europe, not Spain. It infected an estimated 500 million people worldwide and killed between 20 and 50 million, with some estimates reaching 100 million. The virus was unusually lethal to healthy young adults. In the United States alone, roughly 675,000 people died. The pandemic overwhelmed hospitals, closed schools and businesses, and demonstrated the devastating potential of infectious disease.",
    category: "history"
  },
  {
    id: 145,
    year: "1919",
    sortYear: 1919,
    title: "18th Amendment: Prohibition Begins",
    summary: "The 18th Amendment bans the manufacture, sale, and transportation of alcohol, launching the Prohibition era.",
    detail: "Ratified on January 16, 1919, and effective January 17, 1920, the 18th Amendment prohibited the production, sale, and transport of 'intoxicating liquors.' The Volstead Act provided for enforcement. Prohibition was championed by the temperance movement, which blamed alcohol for poverty, domestic violence, and social decay. However, the ban proved nearly impossible to enforce. Speakeasies flourished, bootleggers like Al Capone built criminal empires, and public disillusionment grew. Prohibition was repealed by the 21st Amendment in 1933.",
    category: "history"
  },
  {
    id: 146,
    year: "1920",
    sortYear: 1920,
    title: "19th Amendment: Women's Suffrage",
    summary: "The 19th Amendment grants women the right to vote, culminating decades of activism.",
    detail: "Ratified on August 18, 1920, the 19th Amendment declared that the right to vote 'shall not be denied or abridged by the United States or by any State on account of sex.' The amendment was the culmination of a 72-year movement that began at the Seneca Falls Convention in 1848. Leaders like Susan B. Anthony, Elizabeth Cady Stanton, Alice Paul, and Ida B. Wells fought tirelessly for suffrage through protests, hunger strikes, and political lobbying. The amendment doubled the eligible electorate overnight.",
    category: "history"
  },
  {
    id: 147,
    year: "1920",
    sortYear: 1920.5,
    title: "Harlem Renaissance Begins",
    summary: "A flowering of African American art, literature, and music transforms Harlem and shapes American culture.",
    detail: "The Harlem Renaissance, spanning roughly the 1920s and 1930s, was an intellectual and cultural revival centered in the Harlem neighborhood of New York City. Writers like Langston Hughes and Zora Neale Hurston, musicians like Duke Ellington and Louis Armstrong, and artists like Aaron Douglas created works that celebrated Black identity, challenged racial stereotypes, and enriched American culture. The movement gave voice to a new generation of African Americans who demanded recognition and equality.",
    category: "history"
  },
  {
    id: 148,
    year: "1927",
    sortYear: 1927,
    title: "Lindbergh Crosses the Atlantic",
    summary: "Charles Lindbergh completes the first solo nonstop transatlantic flight, becoming an international hero.",
    detail: "On May 20-21, 1927, Charles Lindbergh flew his single-engine monoplane, the Spirit of St. Louis, from Long Island, New York, to Paris, France, in 33.5 hours. The 3,600-mile flight made the 25-year-old airmail pilot an instant global celebrity and won him the $25,000 Orteig Prize. Lindbergh's achievement captured the imagination of the world and demonstrated aviation's potential for long-distance travel. It spurred investment in commercial aviation and helped make air travel a part of modern life.",
    category: "history"
  },
  {
    id: 149,
    year: "1928",
    sortYear: 1928,
    title: "Discovery of Penicillin",
    summary: "Alexander Fleming discovers penicillin, leading to the development of antibiotics that will save millions of lives.",
    detail: "In September 1928, Scottish bacteriologist Alexander Fleming noticed that a mold called Penicillium notatum had contaminated a petri dish of Staphylococcus bacteria and killed the bacteria surrounding it. Fleming identified the antibacterial substance as penicillin but lacked the resources to develop it further. In the early 1940s, Howard Florey and Ernst Boris Chain refined mass production of the drug. Penicillin was widely available by 1945 and revolutionized medicine, saving countless lives from bacterial infections that had previously been fatal.",
    category: "history"
  },
  {
    id: 150,
    year: "1929",
    sortYear: 1929,
    title: "Stock Market Crash",
    summary: "The stock market crashes on Black Tuesday, triggering the Great Depression, the worst economic downturn in American history.",
    detail: "On October 29, 1929, known as Black Tuesday, stock prices on the New York Stock Exchange collapsed catastrophically after days of panic selling. The Dow Jones Industrial Average lost roughly 25% of its value in two days. The crash wiped out millions of investors and shattered public confidence in the economy. While not the sole cause of the Great Depression, it triggered a chain reaction of bank failures, business closures, and mass unemployment that would devastate the American and global economy for over a decade.",
    category: "history"
  },

  // === Roaring 20s to WWII (IDs 151-170) ===
  {
    id: 151,
    year: "1930",
    sortYear: 1930,
    title: "The Great Depression Deepens",
    summary: "Unemployment soars and breadlines stretch for blocks as the worst economic crisis in American history takes hold.",
    detail: "By 1930, the full weight of the Great Depression was settling over the nation. Banks failed by the thousands, wiping out savings. Unemployment eventually peaked at roughly 25% by 1933, with some cities seeing rates above 50%. Families lost homes and farms. Shantytowns called Hoovervilles, named mockingly for President Hoover, sprang up across the country. The Dust Bowl compounded the misery as severe drought and poor farming practices turned Great Plains topsoil into choking dust storms that displaced hundreds of thousands.",
    category: "history"
  },
  {
    id: 152,
    year: "1933",
    sortYear: 1933,
    title: "FDR and the New Deal",
    summary: "President Franklin Roosevelt launches the New Deal, a sweeping set of programs to provide relief, recovery, and reform.",
    detail: "Inaugurated on March 4, 1933, Franklin Roosevelt told the nation that 'the only thing we have to fear is fear itself.' He launched the New Deal, creating agencies like the Civilian Conservation Corps, the Works Progress Administration, and the Tennessee Valley Authority to put millions to work. The Social Security Act of 1935 established a safety net for the elderly and unemployed. The New Deal did not end the Depression entirely, but it fundamentally transformed the role of the federal government in American life and provided hope during the darkest hours.",
    category: "history"
  },
  {
    id: 153,
    year: "1933",
    sortYear: 1933.5,
    title: "21st Amendment Repeals Prohibition",
    summary: "The 21st Amendment repeals the 18th Amendment, ending Prohibition after 13 years.",
    detail: "Ratified on December 5, 1933, the 21st Amendment repealed the 18th Amendment, making it the only constitutional amendment to repeal a previous one. Prohibition had failed to eliminate drinking and had instead fueled organized crime, overwhelmed courts and prisons, and cost the government billions in lost tax revenue. President Roosevelt had campaigned on repeal, and the 21st Amendment was ratified in record time. The repeal restored the legal alcohol industry, though states retained the power to regulate alcohol within their borders.",
    category: "history"
  },
  {
    id: 154,
    year: "1935",
    sortYear: 1935,
    title: "Social Security Act",
    summary: "President Roosevelt signs the Social Security Act, creating the cornerstone of America's social safety net.",
    detail: "Signed on August 14, 1935, the Social Security Act established a system of old-age pensions, unemployment insurance, and welfare benefits for dependent mothers and children, the disabled, and the blind. It was a landmark in American social policy, fundamentally altering the relationship between citizens and their government. The program was initially limited, excluding domestic workers and farmworkers, who were disproportionately Black. Over the decades, Social Security has been expanded and remains the most popular and enduring legacy of the New Deal.",
    category: "history"
  },
  {
    id: 155,
    year: "1937",
    sortYear: 1937,
    title: "Hindenburg Disaster",
    summary: "The German airship Hindenburg bursts into flames while landing in New Jersey, ending the era of rigid airship travel.",
    detail: "On May 6, 1937, the German zeppelin Hindenburg caught fire while attempting to dock at Naval Air Station Lakehurst in New Jersey. The hydrogen-filled airship was consumed by flames in just 34 seconds, killing 35 of the 97 people aboard and one ground crew member. Radio reporter Herbert Morrison's anguished broadcast, 'Oh, the humanity!' became one of the most famous moments in broadcasting history. The disaster effectively ended the commercial use of rigid airships, though the cause of the fire is still debated.",
    category: "history"
  },
  {
    id: 156,
    year: "1939",
    sortYear: 1939,
    title: "World War II Begins in Europe",
    summary: "Germany invades Poland, triggering declarations of war from Britain and France and beginning World War II.",
    detail: "On September 1, 1939, Nazi Germany invaded Poland, employing the devastating blitzkrieg strategy of coordinated air and ground attacks. Britain and France declared war on Germany two days later. The war would eventually engulf nearly the entire world and become the deadliest conflict in human history. The United States initially maintained neutrality, though President Roosevelt increasingly supported the Allies through programs like Lend-Lease, which provided military supplies to Britain and later the Soviet Union.",
    category: "history"
  },
  {
    id: 157,
    year: "1941",
    sortYear: 1941,
    title: "Attack on Pearl Harbor",
    summary: "Japan launches a surprise attack on the U.S. naval base at Pearl Harbor, Hawaii, drawing America into World War II.",
    detail: "On the morning of December 7, 1941, Japanese aircraft launched a devastating surprise attack on the American naval base at Pearl Harbor, Hawaii. The assault sank or damaged eight battleships, destroyed nearly 200 aircraft, and killed 2,403 Americans. President Roosevelt called it 'a date which will live in infamy.' Congress declared war on Japan the following day, and Germany and Italy declared war on the United States three days later. Pearl Harbor united a previously divided nation and propelled America fully into World War II.",
    category: "history"
  },
  {
    id: 158,
    year: "1942",
    sortYear: 1942,
    title: "Japanese-American Internment",
    summary: "President Roosevelt orders the forced relocation of over 120,000 Japanese Americans to internment camps.",
    detail: "On February 19, 1942, President Roosevelt signed Executive Order 9066, authorizing the forced removal of over 120,000 Japanese Americans, two-thirds of whom were U.S. citizens, from the West Coast to inland internment camps. Families lost homes, businesses, and possessions. The Supreme Court upheld the internment in Korematsu v. United States (1944), a decision later repudiated. In 1988, President Reagan signed the Civil Liberties Act, formally apologizing and providing $20,000 in reparations to each surviving internee.",
    category: "history"
  },
  {
    id: 159,
    year: "1942",
    sortYear: 1942.5,
    title: "Battle of Midway",
    summary: "The U.S. Navy decisively defeats the Japanese fleet at Midway, turning the tide of the Pacific War.",
    detail: "From June 4-7, 1942, the U.S. Navy intercepted and defeated a Japanese fleet near Midway Atoll in the central Pacific. American codebreakers had decrypted Japanese plans, enabling Admiral Chester Nimitz to position his outnumbered fleet to ambush the attackers. American dive bombers sank four Japanese aircraft carriers in a matter of minutes, the same carriers that had attacked Pearl Harbor. Midway is considered the turning point of the Pacific War, permanently shifting naval superiority to the United States.",
    category: "history"
  },
  {
    id: 160,
    year: "1944",
    sortYear: 1944,
    title: "D-Day: Allied Invasion of Normandy",
    summary: "Allied forces storm the beaches of Normandy, France, in the largest amphibious invasion in history, beginning the liberation of Western Europe.",
    detail: "On June 6, 1944, more than 156,000 American, British, and Canadian troops landed on five beaches along a 50-mile stretch of the heavily fortified Normandy coast. The operation, commanded by General Dwight D. Eisenhower, involved over 5,000 ships and 13,000 aircraft. Despite fierce German resistance, especially at Omaha Beach, the Allies secured a foothold. Over 4,400 Allied soldiers died on D-Day. The successful invasion opened a Western Front, and Paris was liberated within three months.",
    category: "history"
  },
  {
    id: 161,
    year: "1944",
    sortYear: 1944.5,
    title: "GI Bill Signed into Law",
    summary: "The GI Bill provides education, housing, and employment benefits to returning veterans, transforming American society.",
    detail: "Signed by President Roosevelt on June 22, 1944, the Servicemen's Readjustment Act, known as the GI Bill, provided returning World War II veterans with funding for college education, low-cost home mortgages, and unemployment insurance. Nearly eight million veterans used the education benefits, dramatically expanding college attendance and creating a more educated workforce. The housing benefits fueled suburban growth. The GI Bill is credited with building the American middle class, though Black veterans often faced discrimination in accessing its benefits.",
    category: "history"
  },
  {
    id: 162,
    year: "1945",
    sortYear: 1945,
    title: "Atomic Bombs Dropped on Japan",
    summary: "The United States drops atomic bombs on Hiroshima and Nagasaki, bringing World War II to a swift and devastating end.",
    detail: "On August 6, 1945, the B-29 bomber Enola Gay dropped an atomic bomb on Hiroshima, Japan, killing an estimated 80,000 people instantly, with tens of thousands more dying from radiation in the following months. Three days later, a second bomb was dropped on Nagasaki, killing roughly 40,000 immediately. Japan surrendered on August 15. The bombings ended the deadliest conflict in history but ushered in the nuclear age, raising profound moral questions about the use of weapons of mass destruction that persist today.",
    category: "history"
  },
  {
    id: 163,
    year: "1945",
    sortYear: 1945.3,
    title: "United Nations Founded",
    summary: "Fifty nations sign the United Nations Charter in San Francisco, creating an international body to promote peace and cooperation.",
    detail: "On June 26, 1945, representatives of 50 nations signed the United Nations Charter in San Francisco, establishing an international organization dedicated to maintaining peace, developing friendly relations among nations, and promoting social progress. The UN built on the failures of the League of Nations, which the United States had never joined. The UN General Assembly, Security Council, and specialized agencies have since addressed conflicts, human rights, public health, and humanitarian crises worldwide, though the organization's effectiveness remains debated.",
    category: "history"
  },
  {
    id: 164,
    year: "1945",
    sortYear: 1945.6,
    title: "Nuremberg Trials Begin",
    summary: "Nazi leaders face an international tribunal for war crimes and crimes against humanity, establishing precedents for international law.",
    detail: "Beginning in November 1945, an International Military Tribunal in Nuremberg, Germany, tried 22 major Nazi leaders for crimes including waging aggressive war, war crimes, and crimes against humanity, a newly defined category. The trials revealed the full horror of the Holocaust, in which the Nazis systematically murdered six million Jews and millions of others. Twelve defendants were sentenced to death. The Nuremberg Trials established the principle that individuals, even heads of state, can be held accountable under international law for atrocities.",
    category: "history"
  },
  {
    id: 165,
    year: "1947",
    sortYear: 1947,
    title: "Jackie Robinson Breaks Baseball's Color Barrier",
    summary: "Jackie Robinson takes the field for the Brooklyn Dodgers, becoming the first Black player in Major League Baseball in the modern era.",
    detail: "On April 15, 1947, Jackie Robinson stepped onto Ebbets Field as the first baseman for the Brooklyn Dodgers, breaking baseball's color line that had stood since the 1880s. He endured vicious racist abuse from fans, opponents, and even some teammates, but responded with extraordinary skill and composure, winning the inaugural Rookie of the Year award. Robinson's integration of baseball preceded the broader civil rights movement and demonstrated that racial barriers were both unjust and unnecessary. His number 42 was retired across all of Major League Baseball in 1997.",
    category: "history"
  },
  {
    id: 166,
    year: "1947",
    sortYear: 1947.5,
    title: "Marshall Plan Announced",
    summary: "Secretary of State George Marshall proposes a massive aid program to rebuild war-torn Europe and contain the spread of communism.",
    detail: "In a commencement speech at Harvard on June 5, 1947, Secretary of State George C. Marshall outlined a plan for European economic recovery. Over the next four years, the United States provided roughly $13 billion (about $170 billion in today's dollars) in aid to 16 Western European nations. The Marshall Plan rebuilt shattered economies, stabilized democratic governments, and created markets for American exports. It was also a cornerstone of the Cold War strategy to prevent the spread of Soviet communism in Western Europe.",
    category: "history"
  },
  {
    id: 167,
    year: "1948",
    sortYear: 1948,
    title: "Berlin Blockade and Airlift",
    summary: "The Soviet Union blockades West Berlin, and the U.S. and allies respond with a massive airlift that sustains the city for nearly a year.",
    detail: "In June 1948, the Soviet Union blocked all road, rail, and canal access to the Western-controlled sectors of Berlin, which lay deep within Soviet-occupied East Germany. Rather than abandon the city or risk war by forcing a ground convoy through, the United States and Britain organized a massive airlift. For nearly 11 months, planes landed in West Berlin every few minutes, delivering over 2.3 million tons of food, fuel, and supplies. The Soviets lifted the blockade in May 1949. The airlift demonstrated Western resolve and became a defining early Cold War moment.",
    category: "history"
  },
  {
    id: 168,
    year: "1948",
    sortYear: 1948.5,
    title: "State of Israel Established",
    summary: "The State of Israel is proclaimed, followed immediately by war with neighboring Arab states, reshaping the Middle East.",
    detail: "On May 14, 1948, David Ben-Gurion proclaimed the establishment of the State of Israel, fulfilling the Zionist movement's goal of a Jewish homeland. The United States, under President Truman, was the first country to recognize the new state, just 11 minutes after its declaration. Five Arab nations immediately invaded, beginning the first Arab-Israeli War. Israel survived and expanded its territory. The creation of Israel displaced roughly 700,000 Palestinians, creating a refugee crisis and a conflict that remains unresolved.",
    category: "history"
  },
  {
    id: 169,
    year: "1950",
    sortYear: 1950,
    title: "Korean War Begins",
    summary: "North Korean forces invade South Korea, and the United States leads a UN coalition to defend the South in the first major Cold War conflict.",
    detail: "On June 25, 1950, North Korean troops crossed the 38th parallel and invaded South Korea. President Truman committed American forces under a United Nations mandate. General Douglas MacArthur's daring amphibious landing at Inchon reversed the war, but Chinese intervention in late 1950 pushed the front back to the 38th parallel. The war settled into a bloody stalemate and ended with an armistice on July 27, 1953, roughly where it began. Over 36,000 Americans died. Korea remains divided, and the armistice, not a peace treaty, is technically still in effect.",
    category: "history"
  },
  {
    id: 170,
    year: "1954",
    sortYear: 1954,
    title: "Brown v. Board of Education",
    summary: "The Supreme Court unanimously rules that racial segregation in public schools is unconstitutional, overturning Plessy v. Ferguson.",
    detail: "On May 17, 1954, Chief Justice Earl Warren delivered the unanimous opinion in Brown v. Board of Education of Topeka, declaring that 'separate educational facilities are inherently unequal.' The ruling overturned the 'separate but equal' doctrine established by Plessy v. Ferguson in 1896. The case was argued by Thurgood Marshall, who would later become the first Black Supreme Court justice. While implementation was slow and fiercely resisted, particularly in the Deep South, Brown v. Board was a watershed moment in the fight for civil rights.",
    category: "history"
  },

  // === Cold War to Civil Rights (IDs 171-190) ===
  {
    id: 171,
    year: "1955",
    sortYear: 1955,
    title: "Rosa Parks and the Montgomery Bus Boycott",
    summary: "Rosa Parks refuses to give up her bus seat to a white passenger, sparking a year-long boycott that becomes a landmark of the Civil Rights Movement.",
    detail: "On December 1, 1955, Rosa Parks, a seamstress and NAACP secretary, was arrested in Montgomery, Alabama, for refusing to yield her bus seat to a white passenger. Her arrest galvanized the Black community, and a young pastor named Martin Luther King Jr. helped organize a boycott of the city's buses that lasted 381 days. The boycott ended when the Supreme Court ruled bus segregation unconstitutional. The Montgomery Bus Boycott demonstrated the power of nonviolent protest and launched the modern Civil Rights Movement.",
    category: "history"
  },
  {
    id: 172,
    year: "1957",
    sortYear: 1957,
    title: "Sputnik Launches the Space Race",
    summary: "The Soviet Union launches Sputnik, the first artificial satellite, shocking the United States and igniting the Space Race.",
    detail: "On October 4, 1957, the Soviet Union launched Sputnik 1, a 184-pound satellite, into orbit around the Earth. The achievement stunned Americans, who feared Soviet technological superiority and the military implications of rockets that could reach orbit. Congress responded by creating NASA in 1958 and passing the National Defense Education Act to boost science and math education. The Sputnik crisis launched the Space Race, a defining competition of the Cold War that would culminate in the Apollo Moon landing 12 years later.",
    category: "history"
  },
  {
    id: 173,
    year: "1957",
    sortYear: 1957.5,
    title: "Little Rock Nine",
    summary: "Nine Black students integrate Central High School in Little Rock, Arkansas, under federal military protection.",
    detail: "In September 1957, nine Black students attempted to integrate Central High School in Little Rock, Arkansas, under the Brown v. Board of Education ruling. Arkansas Governor Orval Faubus deployed the National Guard to block their entry. President Eisenhower responded by federalizing the National Guard and sending the 101st Airborne Division to escort the students into school. The confrontation between state and federal authority was broadcast on national television, exposing the violent resistance to desegregation and demonstrating that the federal government would enforce the Supreme Court's ruling.",
    category: "history"
  },
  {
    id: 174,
    year: "1961",
    sortYear: 1961,
    title: "Bay of Pigs Invasion",
    summary: "A CIA-backed invasion of Cuba by exiles fails disastrously, embarrassing the Kennedy administration and strengthening Fidel Castro.",
    detail: "On April 17, 1961, roughly 1,400 Cuban exiles trained and armed by the CIA landed at the Bay of Pigs on Cuba's southern coast, aiming to overthrow Fidel Castro's communist government. The invasion was a catastrophic failure. The exiles were quickly overwhelmed by Cuban forces, and promised American air support was withheld. Over 1,100 invaders were captured. The debacle embarrassed President Kennedy, strengthened Castro's grip on power, pushed Cuba closer to the Soviet Union, and contributed to the Cuban Missile Crisis the following year.",
    category: "history"
  },
  {
    id: 175,
    year: "1962",
    sortYear: 1962,
    title: "Cuban Missile Crisis",
    summary: "The discovery of Soviet nuclear missiles in Cuba brings the world to the brink of nuclear war during a tense 13-day standoff.",
    detail: "In October 1962, American reconnaissance aircraft photographed Soviet nuclear missile installations under construction in Cuba, just 90 miles from Florida. President Kennedy imposed a naval blockade and demanded the missiles' removal. For 13 days, the world teetered on the brink of nuclear war as Kennedy and Soviet Premier Khrushchev exchanged increasingly tense communications. The crisis was resolved when the Soviets agreed to remove the missiles in exchange for a U.S. pledge not to invade Cuba and the secret removal of American missiles from Turkey.",
    category: "history"
  },
  {
    id: 176,
    year: "1963",
    sortYear: 1963,
    title: "March on Washington and 'I Have a Dream'",
    summary: "Over 250,000 people march on Washington, D.C., for civil rights, where Martin Luther King Jr. delivers his iconic 'I Have a Dream' speech.",
    detail: "On August 28, 1963, more than 250,000 people gathered at the Lincoln Memorial in Washington, D.C., for the March on Washington for Jobs and Freedom. The event culminated in Martin Luther King Jr.'s soaring 'I Have a Dream' speech, in which he envisioned a nation where people would 'not be judged by the color of their skin but by the content of their character.' The march was the largest political demonstration in American history at the time and built momentum for the Civil Rights Act of 1964.",
    category: "history"
  },
  {
    id: 177,
    year: "1963",
    sortYear: 1963.9,
    title: "Assassination of President Kennedy",
    summary: "President John F. Kennedy is assassinated in Dallas, Texas, shocking the nation and the world.",
    detail: "On November 22, 1963, President John F. Kennedy was shot and killed while riding in a motorcade through Dealey Plaza in Dallas, Texas. Lee Harvey Oswald was arrested for the assassination but was himself killed two days later by Jack Ruby on live television. Vice President Lyndon B. Johnson was sworn in as president aboard Air Force One. The Warren Commission concluded Oswald acted alone, but conspiracy theories have persisted. Kennedy's death traumatized the nation and became a defining moment of the 1960s.",
    category: "history"
  },
  {
    id: 178,
    year: "1964",
    sortYear: 1964,
    title: "Civil Rights Act of 1964",
    summary: "President Johnson signs the Civil Rights Act, outlawing discrimination based on race, color, religion, sex, or national origin.",
    detail: "Signed on July 2, 1964, the Civil Rights Act was the most sweeping civil rights legislation since Reconstruction. It prohibited discrimination in public accommodations, employment, and federally funded programs. President Lyndon Johnson, a master legislator, used the emotional aftermath of Kennedy's assassination and his own political skill to overcome a 54-day Senate filibuster. Title VII established the Equal Employment Opportunity Commission to enforce workplace anti-discrimination provisions. The act transformed American law and society, though the struggle for true equality continued.",
    category: "history"
  },
  {
    id: 179,
    year: "1965",
    sortYear: 1965,
    title: "Voting Rights Act of 1965",
    summary: "President Johnson signs the Voting Rights Act, banning discriminatory voting practices that had disenfranchised Black Americans for decades.",
    detail: "Signed on August 6, 1965, the Voting Rights Act outlawed literacy tests and other discriminatory voter registration practices. It authorized federal oversight of elections in jurisdictions with histories of discrimination. The act was a direct response to the violent suppression of voting rights marches in Selma, Alabama, including 'Bloody Sunday,' when state troopers attacked peaceful marchers on the Edmund Pettus Bridge. The law's impact was immediate and dramatic: Black voter registration in the South surged, and Black political representation increased significantly.",
    category: "history"
  },
  {
    id: 180,
    year: "1965",
    sortYear: 1965.5,
    title: "U.S. Escalation in Vietnam",
    summary: "President Johnson dramatically escalates the American military commitment in Vietnam, deploying ground troops and beginning sustained bombing.",
    detail: "Following the Gulf of Tonkin Resolution in August 1964, which gave President Johnson broad authority to use military force, the United States began a sustained bombing campaign against North Vietnam in March 1965 and deployed the first combat troops the same month. American troop levels escalated from 23,000 advisors in 1964 to over 500,000 combat troops by 1968. The war would become the longest and most divisive conflict in American history up to that point, deeply polarizing the nation.",
    category: "history"
  },
  {
    id: 181,
    year: "1968",
    sortYear: 1968,
    title: "Assassination of Martin Luther King Jr.",
    summary: "Civil rights leader Martin Luther King Jr. is assassinated in Memphis, Tennessee, sparking grief and riots across the nation.",
    detail: "On April 4, 1968, Martin Luther King Jr. was shot and killed while standing on the balcony of the Lorraine Motel in Memphis, Tennessee. He was in Memphis to support striking sanitation workers. James Earl Ray was convicted of the murder. King's assassination triggered riots in over 100 cities and deepened the sense of crisis in a year already marked by the Tet Offensive in Vietnam and growing social upheaval. His death robbed the Civil Rights Movement of its most eloquent voice but cemented his legacy as one of America's greatest leaders.",
    category: "history"
  },
  {
    id: 182,
    year: "1968",
    sortYear: 1968.5,
    title: "Assassination of Robert F. Kennedy",
    summary: "Senator Robert F. Kennedy is assassinated moments after winning the California primary, deepening the turmoil of 1968.",
    detail: "On June 5, 1968, Senator Robert F. Kennedy was shot by Sirhan Sirhan at the Ambassador Hotel in Los Angeles, moments after declaring victory in the California Democratic presidential primary. He died the following day. Kennedy had been a leading candidate for the Democratic nomination, campaigning on a platform of ending the Vietnam War and addressing poverty and racial injustice. His death, coming just two months after Martin Luther King Jr.'s assassination, compounded the nation's sense of crisis and despair in one of America's most tumultuous years.",
    category: "history"
  },
  {
    id: 183,
    year: "1969",
    sortYear: 1969,
    title: "Moon Landing",
    summary: "Apollo 11 astronaut Neil Armstrong becomes the first person to walk on the Moon, fulfilling President Kennedy's bold challenge.",
    detail: "On July 20, 1969, astronaut Neil Armstrong stepped onto the lunar surface and declared, 'That's one small step for man, one giant leap for mankind.' He was joined by Buzz Aldrin, while Michael Collins orbited above in the command module. An estimated 600 million people worldwide watched on television. The mission fulfilled President Kennedy's 1961 pledge to land a man on the Moon before the decade's end. The Apollo program remains one of humanity's greatest technological achievements and a defining moment of American ingenuity and determination.",
    category: "history"
  },
  {
    id: 184,
    year: "1969",
    sortYear: 1969.5,
    title: "Woodstock Music Festival",
    summary: "Nearly half a million people gather on a farm in upstate New York for Woodstock, the defining music festival of the counterculture era.",
    detail: "From August 15-18, 1969, roughly 400,000 young people descended on Max Yasgur's dairy farm near Bethel, New York, for the Woodstock Music and Art Fair. Despite rain, mud, and inadequate facilities, the festival became a peaceful celebration of music, community, and counterculture values. Performances by Jimi Hendrix, Janis Joplin, The Who, and many others became legendary. Woodstock symbolized the idealism and communal spirit of the 1960s, even as the era's optimism was already giving way to disillusionment.",
    category: "history"
  },
  {
    id: 185,
    year: "1972",
    sortYear: 1972,
    title: "Watergate Break-In",
    summary: "Burglars connected to President Nixon's re-election campaign are caught breaking into Democratic Party headquarters, triggering a constitutional crisis.",
    detail: "On June 17, 1972, five men were arrested for breaking into the Democratic National Committee headquarters at the Watergate complex in Washington, D.C. Investigations by journalists Bob Woodward and Carl Bernstein of The Washington Post, aided by the anonymous source 'Deep Throat,' gradually revealed a vast network of political spying, sabotage, and cover-ups reaching into the White House. The Watergate scandal consumed Nixon's presidency, led to multiple convictions of his aides, and ultimately forced his resignation.",
    category: "history"
  },
  {
    id: 186,
    year: "1973",
    sortYear: 1973,
    title: "Roe v. Wade",
    summary: "The Supreme Court rules that the Constitution protects a woman's right to an abortion, sparking decades of political and legal battles.",
    detail: "On January 22, 1973, the Supreme Court ruled 7-2 in Roe v. Wade that the Constitution's implied right to privacy encompasses a woman's decision to terminate a pregnancy. The ruling struck down state laws banning abortion and established a trimester framework for when states could regulate the procedure. The decision immediately became one of the most controversial in Court history, galvanizing both the pro-choice and pro-life movements. Roe v. Wade was overturned in 2022 by the Dobbs v. Jackson Women's Health Organization decision.",
    category: "history"
  },
  {
    id: 187,
    year: "1974",
    sortYear: 1974,
    title: "Nixon Resigns the Presidency",
    summary: "Facing certain impeachment and removal over the Watergate scandal, President Richard Nixon becomes the first president to resign.",
    detail: "On August 9, 1974, Richard Nixon resigned the presidency, the only president to do so. Facing impeachment by the House of Representatives for obstruction of justice, abuse of power, and contempt of Congress related to the Watergate cover-up, Nixon chose to resign rather than face a Senate trial. Vice President Gerald Ford assumed the presidency and one month later controversially pardoned Nixon, a decision that may have cost Ford the 1976 election. Watergate profoundly shook public trust in government and the presidency.",
    category: "history"
  },
  {
    id: 188,
    year: "1975",
    sortYear: 1975,
    title: "Fall of Saigon: Vietnam War Ends",
    summary: "North Vietnamese forces capture Saigon, ending the Vietnam War and reunifying Vietnam under communist rule.",
    detail: "On April 30, 1975, North Vietnamese troops entered Saigon as the last Americans and South Vietnamese allies were evacuated by helicopter from the U.S. Embassy roof, a scene that became an iconic image of American defeat. The Vietnam War had cost over 58,000 American lives and an estimated 2 to 3 million Vietnamese lives. The war divided the nation, shattered faith in government institutions, and left deep psychological wounds. The Vietnam Veterans Memorial in Washington, D.C., completed in 1982, honors those who served.",
    category: "history"
  },
  {
    id: 189,
    year: "1979",
    sortYear: 1979,
    title: "Iran Hostage Crisis",
    summary: "Iranian revolutionaries seize the U.S. Embassy in Tehran, holding 52 American hostages for 444 days.",
    detail: "On November 4, 1979, Iranian students stormed the U.S. Embassy in Tehran and took 66 Americans hostage, later releasing some and holding 52. The crisis was rooted in Iranian anger over decades of U.S. support for the Shah, whom the revolution had just overthrown. A rescue attempt in April 1980 ended in disaster in the Iranian desert. The hostages were held for 444 days, released on January 20, 1981, moments after Ronald Reagan's inauguration. The crisis humiliated the Carter administration and reshaped U.S.-Middle East relations.",
    category: "history"
  },
  {
    id: 190,
    year: "1981",
    sortYear: 1981,
    title: "Reagan Inaugurated, Conservative Revolution Begins",
    summary: "Ronald Reagan becomes president, ushering in a conservative era emphasizing tax cuts, deregulation, and military buildup.",
    detail: "Ronald Reagan was inaugurated on January 20, 1981, declaring that 'government is not the solution to our problem; government is the problem.' His presidency marked a major ideological shift in American politics. Reagan championed supply-side economics with large tax cuts, reduced federal regulations, and dramatically increased military spending, including the Strategic Defense Initiative. His confrontational stance toward the Soviet Union and personal rapport with Soviet leader Mikhail Gorbachev would contribute to the eventual end of the Cold War.",
    category: "history"
  },

  // === Modern Era 1980-2026 (IDs 191-200) ===
  {
    id: 191,
    year: "1981",
    sortYear: 1981.5,
    title: "AIDS Epidemic Identified",
    summary: "Doctors identify the first cases of what will become known as AIDS, beginning a devastating global health crisis.",
    detail: "In June 1981, the CDC reported clusters of a rare pneumonia and skin cancer among young gay men in Los Angeles and New York. The disease, later named Acquired Immune Deficiency Syndrome (AIDS), caused by the Human Immunodeficiency Virus (HIV), would kill over 700,000 Americans and tens of millions worldwide. The epidemic initially met with government inaction and social stigma. Activist groups like ACT UP demanded research funding and treatment access. The development of antiretroviral therapy in the 1990s transformed HIV from a death sentence into a manageable condition.",
    category: "history"
  },
  {
    id: 192,
    year: "1989",
    sortYear: 1989,
    title: "Fall of the Berlin Wall",
    summary: "The Berlin Wall falls as East Germany opens its borders, symbolizing the end of the Cold War and the triumph of democracy in Eastern Europe.",
    detail: "On November 9, 1989, the East German government announced that citizens could cross the border freely. Thousands of East and West Berliners converged on the Wall, celebrating, embracing, and chipping away at the concrete barrier that had divided the city for 28 years. The fall of the Wall was the most dramatic moment in a wave of peaceful revolutions that swept communist regimes from power across Eastern Europe. Germany was reunified on October 3, 1990. The Cold War, which had defined global politics for over four decades, was effectively over.",
    category: "history"
  },
  {
    id: 193,
    year: "1991",
    sortYear: 1991,
    title: "Dissolution of the Soviet Union",
    summary: "The Soviet Union dissolves, ending the Cold War and leaving the United States as the world's sole superpower.",
    detail: "On December 25, 1991, Soviet President Mikhail Gorbachev resigned and the Soviet flag was lowered over the Kremlin for the last time. The Union of Soviet Socialist Republics, which had been one of the world's two superpowers for nearly half a century, ceased to exist. Fifteen independent nations emerged from the former Soviet republics. The dissolution ended the Cold War and left the United States as the world's sole superpower, ushering in what some called a 'unipolar moment' in international relations.",
    category: "history"
  },
  {
    id: 194,
    year: "2001",
    sortYear: 2001,
    title: "September 11 Attacks",
    summary: "Terrorists hijack four airliners and attack the World Trade Center and Pentagon, killing nearly 3,000 people and transforming American life.",
    detail: "On the morning of September 11, 2001, 19 al-Qaeda terrorists hijacked four commercial airliners. Two planes struck the Twin Towers of the World Trade Center in New York City, causing both to collapse. A third hit the Pentagon. A fourth, United Flight 93, crashed in a Pennsylvania field after passengers fought the hijackers. Nearly 3,000 people died, making it the deadliest terrorist attack in history. The attacks launched the War on Terror, including the invasion of Afghanistan, created the Department of Homeland Security, and fundamentally changed American security, foreign policy, and daily life.",
    category: "history"
  },
  {
    id: 195,
    year: "2003",
    sortYear: 2003,
    title: "Invasion of Iraq",
    summary: "The United States invades Iraq, toppling Saddam Hussein but igniting a prolonged and costly conflict.",
    detail: "On March 20, 2003, the United States led a coalition invasion of Iraq, asserting that Saddam Hussein possessed weapons of mass destruction and posed an imminent threat. Baghdad fell within three weeks, and Hussein was captured in December 2003 and later executed. However, no weapons of mass destruction were found, and the occupation sparked a violent insurgency. The Iraq War lasted until 2011, costing over 4,400 American lives and hundreds of thousands of Iraqi lives. It remains one of the most controversial foreign policy decisions in American history.",
    category: "history"
  },
  {
    id: 196,
    year: "2008",
    sortYear: 2008,
    title: "Great Recession and Obama Elected",
    summary: "The worst financial crisis since the Great Depression strikes, and Barack Obama is elected as the first African American president.",
    detail: "In 2008, the collapse of the housing bubble and failure of major financial institutions like Lehman Brothers triggered a global financial crisis. The stock market plummeted, millions lost their homes to foreclosure, and unemployment soared. Congress passed a $700 billion bank bailout. Amid the turmoil, Senator Barack Obama of Illinois was elected the 44th president, becoming the first African American to hold the office. His victory on November 4, 2008, was a historic milestone, drawing tears from civil rights veterans who had lived through segregation.",
    category: "history"
  },
  {
    id: 197,
    year: "2015",
    sortYear: 2015,
    title: "Obergefell v. Hodges: Marriage Equality",
    summary: "The Supreme Court rules that same-sex couples have a constitutional right to marry, legalizing marriage equality nationwide.",
    detail: "On June 26, 2015, the Supreme Court ruled 5-4 in Obergefell v. Hodges that the 14th Amendment guarantees same-sex couples the right to marry. Justice Anthony Kennedy wrote that 'the right to marry is a fundamental right inherent in the liberty of the person,' and that denying this right to same-sex couples 'demeans' them. The decision capped a remarkable shift in American public opinion and legal landscape. When Jim Obergefell sued to be recognized as the surviving spouse of his late husband, he helped secure a right that polls showed a majority of Americans already supported.",
    category: "history"
  },
  {
    id: 198,
    year: "2020",
    sortYear: 2020,
    title: "COVID-19 Pandemic",
    summary: "The COVID-19 pandemic sweeps the globe, killing over a million Americans and transforming daily life.",
    detail: "In early 2020, a novel coronavirus, SARS-CoV-2, spread rapidly from China across the world. The United States became the hardest-hit nation in terms of total cases and deaths. Lockdowns, school closures, and mask mandates upended daily life. The economic impact was severe, with millions losing jobs. The pandemic disproportionately affected communities of color and frontline workers. The unprecedented rapid development of effective vaccines, authorized in December 2020, marked a triumph of science, though vaccine distribution and public trust posed ongoing challenges. Over one million Americans died from COVID-19.",
    category: "history"
  },
  {
    id: 199,
    year: "2021",
    sortYear: 2021,
    title: "January 6 Capitol Attack",
    summary: "A mob of supporters of outgoing President Trump storms the U.S. Capitol in an attempt to overturn the 2020 presidential election results.",
    detail: "On January 6, 2021, thousands of supporters of President Donald Trump gathered in Washington, D.C., for a rally contesting the 2020 election results. A large group then stormed the U.S. Capitol, breaching security, vandalizing offices, and interrupting the congressional certification of Joe Biden's electoral victory. Five people died in connection with the events, and over 140 police officers were injured. Congress reconvened that night and certified Biden's victory. The attack led to Trump's second impeachment and hundreds of criminal prosecutions, and it raised urgent questions about the resilience of American democracy.",
    category: "history"
  },
  {
    id: 200,
    year: "2022",
    sortYear: 2022,
    title: "Dobbs v. Jackson: Roe v. Wade Overturned",
    summary: "The Supreme Court overturns Roe v. Wade, eliminating the federal constitutional right to abortion and returning the issue to the states.",
    detail: "On June 24, 2022, the Supreme Court ruled 6-3 in Dobbs v. Jackson Women's Health Organization that the Constitution does not confer a right to abortion, overturning Roe v. Wade after nearly 50 years. The decision, authored by Justice Samuel Alito, held that Roe was 'egregiously wrong from the start.' The ruling triggered a patchwork of state laws: some states immediately banned or severely restricted abortion while others moved to protect access. The decision reshaped American politics, galvanizing voters on both sides and becoming a dominant issue in subsequent elections.",
    category: "history"
  }
];
