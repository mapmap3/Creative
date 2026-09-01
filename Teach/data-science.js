const SCIENCE_DATA = [
  {
    id: 201,
    year: "460 BCE",
    sortYear: -460,
    title: "Hippocrates",
    summary: "Born c. 460 BCE, died c. 370 BCE. Known as the Father of Medicine, he established medicine as a discipline distinct from philosophy and superstition.",
    detail: "Hippocrates was born on the Greek island of Kos and practiced medicine during the Age of Pericles. He founded the Hippocratic School of Medicine, which revolutionized the understanding of disease by attributing illness to natural causes rather than divine punishment. His ethical legacy endures through the Hippocratic Oath, still referenced in medical practice today. The Hippocratic Corpus, a collection of texts attributed to him and his followers, laid the groundwork for clinical observation and systematic diagnosis.",
    category: "science"
  },
  {
    id: 202,
    year: "384 BCE",
    sortYear: -384,
    title: "Aristotle",
    summary: "Born 384 BCE, died 322 BCE. Greek philosopher and polymath whose systematic investigations in biology, physics, and logic shaped Western science for nearly two millennia.",
    detail: "Aristotle studied under Plato at the Academy in Athens and later tutored Alexander the Great. He founded the Lyceum, where he conducted pioneering research in zoology, classifying over 500 animal species through direct observation. His works on formal logic remained the definitive authority until the nineteenth century. Though many of his physical theories were eventually overturned, his emphasis on empirical observation and classification profoundly influenced the development of the scientific method.",
    category: "science"
  },
  {
    id: 203,
    year: "287 BCE",
    sortYear: -287,
    title: "Archimedes",
    summary: "Born c. 287 BCE, died 212 BCE. Ancient Greek mathematician and inventor who discovered the principles of buoyancy and the lever, and made foundational contributions to geometry.",
    detail: "Archimedes lived in Syracuse, Sicily, and is regarded as one of the greatest mathematicians of antiquity. He formulated the principle of buoyancy, famously exclaiming 'Eureka!' upon discovering it in his bath. His work on the geometry of spheres, cylinders, and parabolas anticipated integral calculus by nearly two thousand years. He also designed ingenious war machines to defend Syracuse against Roman siege, and the Archimedes screw for raising water remains in use today.",
    category: "science"
  },
  {
    id: 204,
    year: "276 BCE",
    sortYear: -276,
    title: "Eratosthenes",
    summary: "Born c. 276 BCE, died c. 194 BCE. Greek mathematician and geographer who made the first known calculation of the Earth's circumference with remarkable accuracy.",
    detail: "Eratosthenes served as chief librarian at the Library of Alexandria, one of the ancient world's greatest centers of learning. By measuring the angle of shadows at two different locations on the summer solstice, he calculated the Earth's circumference to within a few percent of the modern value. He also devised the Sieve of Eratosthenes, an efficient algorithm for finding prime numbers still taught in mathematics today. His contributions to geography included the first systematic use of parallels and meridians to map the known world.",
    category: "science"
  },
  {
    id: 205,
    year: "100 CE",
    sortYear: 100,
    title: "Ptolemy",
    summary: "Born c. 100 CE, died c. 170 CE. Greco-Egyptian astronomer whose geocentric model of the universe dominated Western and Islamic astronomy for over a thousand years.",
    detail: "Claudius Ptolemy worked in Alexandria, Egypt, during the Roman period. His masterwork, the Almagest, provided a comprehensive mathematical model of planetary motion based on epicycles and deferents within a geocentric framework. Though ultimately replaced by the heliocentric model, his system was remarkably accurate for predicting celestial positions. His Geography catalogued the coordinates of thousands of places across the known world and influenced cartography well into the Renaissance.",
    category: "science"
  },
  {
    id: 206,
    year: "965 CE",
    sortYear: 965,
    title: "Ibn al-Haytham",
    summary: "Born c. 965, died c. 1040. Arab physicist and mathematician often called the Father of Optics, who pioneered the experimental scientific method.",
    detail: "Ibn al-Haytham, known in the West as Alhazen, was born in Basra in present-day Iraq and spent much of his career in Cairo. His Book of Optics proved that vision results from light entering the eye rather than rays emanating from it, overturning theories held since antiquity. He emphasized controlled experimentation and systematic doubt, principles central to the modern scientific method. His work influenced later European scientists including Roger Bacon, Kepler, and Descartes.",
    category: "science"
  },
  {
    id: 207,
    year: "1473",
    sortYear: 1473,
    title: "Nicolaus Copernicus",
    summary: "Born 1473, died 1543. Polish astronomer who formulated the heliocentric model of the solar system, placing the Sun rather than the Earth at the center.",
    detail: "Copernicus studied at the University of Krakow and in Italy before returning to Poland, where he served as a canon of the Catholic Church. His seminal work, De Revolutionibus Orbium Coelestium, was published in 1543, the year of his death. The Copernican model challenged over a millennium of geocentric thought and ignited a scientific revolution. His work laid the foundation for the later discoveries of Kepler, Galileo, and Newton.",
    category: "science"
  },
  {
    id: 208,
    year: "1514",
    sortYear: 1514,
    title: "Andreas Vesalius",
    summary: "Born 1514, died 1564. Flemish anatomist who wrote De Humani Corporis Fabrica, the first comprehensive textbook of human anatomy based on dissection.",
    detail: "Vesalius studied medicine at the University of Paris and the University of Padua, where he became professor of surgery and anatomy at just twenty-three. His masterwork, De Humani Corporis Fabrica, published in 1543, corrected many errors in Galen's ancient anatomical descriptions through meticulous human dissection and stunning illustrations. The book's detailed woodcuts of the skeletal, muscular, and nervous systems set a new standard for anatomical illustration. Vesalius is considered the founder of modern human anatomy, and his insistence on direct observation over ancient authority paralleled Copernicus's revolution in astronomy the same year.",
    category: "science"
  },
  {
    id: 209,
    year: "1564",
    sortYear: 1564,
    title: "Galileo Galilei",
    summary: "Born 1564, died 1642. Italian astronomer and physicist often called the Father of Modern Science, who championed the heliocentric model and pioneered telescopic astronomy.",
    detail: "Galileo was born in Pisa and held academic positions in Padua and Florence. Using an improved telescope, he discovered the moons of Jupiter, the phases of Venus, and the craters of the Moon, providing strong evidence for the Copernican system. His experiments on motion and falling bodies laid the groundwork for Newtonian mechanics. His advocacy of heliocentrism led to conflict with the Catholic Church, resulting in his trial and house arrest for the final years of his life.",
    category: "science"
  },
  {
    id: 210,
    year: "1571",
    sortYear: 1571,
    title: "Johannes Kepler",
    summary: "Born 1571, died 1630. German astronomer who discovered the three laws of planetary motion, showing that planets travel in elliptical orbits around the Sun.",
    detail: "Kepler worked as an assistant to the Danish astronomer Tycho Brahe in Prague and inherited Brahe's meticulous observational data after his death. Using these records, he demonstrated that Mars follows an elliptical orbit, overturning the ancient assumption of perfect circular motion. His three laws of planetary motion provided the mathematical framework that Newton later used to formulate the law of universal gravitation. Kepler also made important contributions to optics and was one of the first to defend Galileo's telescopic discoveries.",
    category: "science"
  },
  {
    id: 211,
    year: "1627",
    sortYear: 1627,
    title: "Robert Boyle",
    summary: "Born 1627, died 1691. Anglo-Irish natural philosopher regarded as the first modern chemist, who formulated Boyle's Law relating gas pressure and volume.",
    detail: "Boyle was born into aristocracy at Lismore Castle in Ireland and studied across Europe before settling at Oxford. His landmark work, The Sceptical Chymist, challenged Aristotelian and alchemical theories of matter and advocated for a corpuscular philosophy of elements. Boyle's Law, published in 1662, established the inverse relationship between the pressure and volume of a gas at constant temperature. His insistence on rigorous experimentation and clear reporting of methods helped define the standards of modern scientific practice.",
    category: "science"
  },
  {
    id: 212,
    year: "1635",
    sortYear: 1635,
    title: "Robert Hooke",
    summary: "Born 1635, died 1703. English polymath who coined the term 'cell' in biology and made contributions to microscopy, physics, and architecture.",
    detail: "Hooke served as Curator of Experiments at the Royal Society and was one of the most versatile scientists of the seventeenth century. His book Micrographia, published in 1665, presented stunning illustrations of insects, plants, and other specimens viewed through a microscope, and introduced the biological term 'cell.' He formulated Hooke's Law of elasticity and contributed to debates on gravity and optics, sometimes clashing with Newton. After the Great Fire of London, he helped survey and redesign the city alongside Christopher Wren.",
    category: "science"
  },
  {
    id: 213,
    year: "1643",
    sortYear: 1643,
    title: "Isaac Newton",
    summary: "Born 1643, died 1727. English mathematician and physicist who formulated the laws of motion and universal gravitation, and co-invented calculus.",
    detail: "Newton was born in Lincolnshire, England, and studied at Trinity College, Cambridge. His Principia Mathematica, published in 1687, unified terrestrial and celestial mechanics under the law of universal gravitation and established the three laws of motion. He also made groundbreaking contributions to optics, demonstrating that white light is composed of a spectrum of colors. Newton served as president of the Royal Society and as Warden of the Royal Mint, and his work remains foundational to classical physics.",
    category: "science"
  },
  {
    id: 214,
    year: "1707",
    sortYear: 1707,
    title: "Carl Linnaeus",
    summary: "Born 1707, died 1778. Swedish botanist who devised the binomial nomenclature system for classifying and naming organisms still used in biology today.",
    detail: "Linnaeus studied medicine and botany at Uppsala University and later held the chair of medicine there. His Systema Naturae, first published in 1735, organized the natural world into a hierarchical taxonomy of kingdoms, classes, orders, genera, and species. The binomial naming system he introduced gave each organism a two-part Latin name, bringing order and consistency to biological classification. His work earned him the title Father of Modern Taxonomy, and his system remains the foundation of biological nomenclature.",
    category: "science"
  },
  {
    id: 215,
    year: "1731",
    sortYear: 1731,
    title: "Henry Cavendish",
    summary: "Born 1731, died 1810. English natural philosopher who discovered hydrogen, determined the composition of water, and measured the density of the Earth.",
    detail: "Cavendish was born into one of England's wealthiest aristocratic families and devoted his life to private scientific research. He identified hydrogen as a distinct element, calling it 'inflammable air,' and demonstrated that water is a compound of hydrogen and oxygen. His famous torsion balance experiment in 1798 measured the gravitational constant and allowed the first accurate calculation of the Earth's mass. Extremely reclusive, he left a vast body of unpublished electrical research that was only recognized decades after his death.",
    category: "science"
  },
  {
    id: 216,
    year: "1743",
    sortYear: 1743,
    title: "Antoine Lavoisier",
    summary: "Born 1743, died 1794. French chemist known as the Father of Modern Chemistry, who identified oxygen's role in combustion and helped systematize chemical nomenclature.",
    detail: "Lavoisier was born into a wealthy Parisian family and trained as a lawyer before turning to science. He disproved the phlogiston theory by demonstrating that combustion requires oxygen, and he established the law of conservation of mass in chemical reactions. Along with collaborators, he developed a systematic method for naming chemical substances that forms the basis of modern chemical nomenclature. He was executed by guillotine during the French Revolution's Reign of Terror, cutting short one of the most productive careers in the history of chemistry.",
    category: "science"
  },
  {
    id: 217,
    year: "1766",
    sortYear: 1766,
    title: "John Dalton",
    summary: "Born 1766, died 1844. English chemist and physicist who developed modern atomic theory and compiled the first table of relative atomic weights.",
    detail: "Dalton was born into a Quaker family in Cumberland, England, and was largely self-taught in the sciences. His atomic theory, published in 1808, proposed that all matter is composed of indivisible atoms of different elements, each with a characteristic weight. He formulated the law of multiple proportions and compiled the first table of atomic weights, bringing quantitative rigor to chemistry. Dalton also conducted pioneering research on color blindness, a condition he experienced firsthand and which was long known as Daltonism in his honor.",
    category: "science"
  },
  {
    id: 218,
    year: "1791",
    sortYear: 1791,
    title: "Michael Faraday",
    summary: "Born 1791, died 1867. English physicist and chemist who discovered electromagnetic induction, making possible the electric generator and transformer.",
    detail: "Faraday was born into poverty in London and received little formal education, beginning his scientific career as an assistant to Humphry Davy at the Royal Institution. He discovered the principle of electromagnetic induction in 1831, laying the foundation for electrical power generation and modern technology. His concept of lines of force and the electromagnetic field deeply influenced James Clerk Maxwell's later mathematical formulation of electromagnetism. Despite his limited mathematical training, Faraday is widely regarded as one of the most influential experimental scientists in history.",
    category: "science"
  },
  {
    id: 219,
    year: "1809",
    sortYear: 1809,
    title: "Charles Darwin",
    summary: "Born 1809, died 1882. English naturalist who proposed the theory of evolution by natural selection, transforming our understanding of life on Earth.",
    detail: "Darwin studied at the University of Cambridge before embarking on a five-year voyage aboard HMS Beagle, during which he collected specimens and observations from around the world. His study of finches in the Galapagos Islands and other evidence led him to develop the theory of natural selection. Published in 1859, On the Origin of Species provided a mechanism for evolution and sparked intense scientific and public debate. Darwin's work unified the biological sciences and remains the foundational framework of modern evolutionary biology.",
    category: "science"
  },
  {
    id: 220,
    year: "1822",
    sortYear: 1822,
    title: "Louis Pasteur",
    summary: "Born 1822, died 1895. French chemist and microbiologist who developed pasteurization and created vaccines for rabies and anthrax.",
    detail: "Pasteur trained as a chemist and made early contributions to crystallography before turning to microbiology. He disproved the theory of spontaneous generation through elegant experiments with swan-neck flasks, demonstrating that microorganisms cause fermentation and disease. His development of pasteurization saved the French wine and beer industries and made food and beverages significantly safer. He also created the first vaccines for rabies and anthrax, founding the Pasteur Institute in Paris, which remains a leading center for biomedical research.",
    category: "science"
  },
  {
    id: 221,
    year: "1822",
    sortYear: 1822,
    title: "Gregor Mendel",
    summary: "Born 1822, died 1884. Augustinian friar and scientist whose experiments with pea plants established the fundamental laws of genetic inheritance.",
    detail: "Mendel conducted his groundbreaking experiments in the garden of the Abbey of St. Thomas in Brno, in what is now the Czech Republic. By carefully cross-breeding pea plants and tracking traits across generations, he discovered the principles of dominant and recessive inheritance. His work, published in 1866, was largely ignored during his lifetime and only rediscovered around 1900 by Hugo de Vries, Carl Correns, and Erich von Tschermak. Today Mendel is recognized as the Father of Genetics, and his laws underpin all of modern hereditary science.",
    category: "science"
  },
  {
    id: 222,
    year: "1831",
    sortYear: 1831,
    title: "James Clerk Maxwell",
    summary: "Born 1831, died 1879. Scottish physicist who unified electricity, magnetism, and optics into a single theoretical framework through Maxwell's equations.",
    detail: "Maxwell studied at the University of Edinburgh and Cambridge and held professorships at both institutions. His four equations of electromagnetism, published in the 1860s, demonstrated that electric and magnetic fields propagate as waves at the speed of light, proving that light itself is an electromagnetic wave. This unification of electromagnetism and optics is considered one of the greatest achievements in theoretical physics. Maxwell also made significant contributions to statistical mechanics, thermodynamics, and the first color photograph.",
    category: "science"
  },
  {
    id: 223,
    year: "1847",
    sortYear: 1847,
    title: "Thomas Edison",
    summary: "Born 1847, died 1931. American inventor and businessman who developed the phonograph, the practical incandescent light bulb, and the first commercial electrical power system.",
    detail: "Edison grew up in Ohio and Michigan with very little formal education, becoming a telegraph operator as a teenager. He established one of the first industrial research laboratories at Menlo Park, New Jersey, where he and his team produced a stream of inventions that reshaped modern life. His development of a practical incandescent light bulb and the Pearl Street Station electrical distribution system in Manhattan launched the age of electric illumination. He held over one thousand patents and his approach to systematic, team-based invention helped define the modern research and development laboratory.",
    category: "science"
  },
  {
    id: 224,
    year: "1856",
    sortYear: 1856,
    title: "Nikola Tesla",
    summary: "Born 1856, died 1943. Serbian-American inventor and electrical engineer who developed the alternating current power system and made pioneering contributions to radio and wireless technology.",
    detail: "Tesla was born in Smiljan, in modern-day Croatia, and emigrated to the United States in 1884. He designed the polyphase alternating current system that became the standard for electrical power transmission worldwide, winning the War of Currents against Edison's direct current. His inventions include the Tesla coil, the induction motor, and early demonstrations of radio communication and remote control. Though he died in relative obscurity in a New York hotel room, his contributions to electrical engineering and his visionary ideas about wireless energy have earned him lasting recognition.",
    category: "science"
  },
  {
    id: 225,
    year: "1856",
    sortYear: 1856,
    title: "J.J. Thomson",
    summary: "Born 1856, died 1940. English physicist who discovered the electron in 1897, fundamentally changing the understanding of atomic structure.",
    detail: "Thomson studied at Owens College in Manchester and then at Trinity College, Cambridge, where he became Cavendish Professor of Physics at the age of twenty-eight. His cathode ray experiments demonstrated the existence of subatomic particles, which he called corpuscles and which are now known as electrons. His plum pudding model of the atom was an important step toward understanding atomic structure, even though it was later superseded by Rutherford's nuclear model. Seven of his research students, including Rutherford, went on to win Nobel Prizes, making his laboratory one of the most influential in history.",
    category: "science"
  },
  {
    id: 226,
    year: "1858",
    sortYear: 1858,
    title: "Max Planck",
    summary: "Born 1858, died 1947. German physicist who originated quantum theory by proposing that energy is emitted in discrete packets called quanta.",
    detail: "Planck studied at the University of Munich and the University of Berlin, where he later held a prestigious professorship. In 1900, he solved the problem of black-body radiation by proposing that energy is quantized, introducing Planck's constant, one of the fundamental constants of physics. This insight launched the quantum revolution, though Planck himself was initially reluctant to accept its radical implications. He received the Nobel Prize in Physics in 1918 and endured great personal tragedy during the two World Wars, including the execution of his son for involvement in a plot against Hitler.",
    category: "science"
  },
  {
    id: 227,
    year: "1867",
    sortYear: 1867,
    title: "Marie Curie",
    summary: "Born 1867, died 1934. Polish-French physicist and chemist who discovered polonium and radium and became the first person to win Nobel Prizes in two different sciences.",
    detail: "Born Maria Sklodowska in Warsaw, she moved to Paris to study at the Sorbonne, where she met and married Pierre Curie. Together they discovered the elements polonium and radium through painstaking work with pitchblende ore. She won the Nobel Prize in Physics in 1903 and the Nobel Prize in Chemistry in 1911, remaining the only person to have won Nobel Prizes in two different scientific disciplines. Her pioneering research on radioactivity laid the groundwork for nuclear physics and cancer treatment, though prolonged exposure to radiation contributed to her death from aplastic anemia.",
    category: "science"
  },
  {
    id: 228,
    year: "1871",
    sortYear: 1871,
    title: "Ernest Rutherford",
    summary: "Born 1871, died 1937. New Zealand-born British physicist who discovered the atomic nucleus and is regarded as the Father of Nuclear Physics.",
    detail: "Rutherford was born in rural New Zealand and won a scholarship to study at Cambridge under J.J. Thomson. His gold foil experiment in 1911 revealed that atoms have a small, dense, positively charged nucleus, overturning Thomson's plum pudding model. He achieved the first artificial nuclear transmutation by bombarding nitrogen with alpha particles, converting it into oxygen. He won the Nobel Prize in Chemistry in 1908 for his work on radioactive decay, and his laboratory at Cambridge trained an extraordinary number of future Nobel laureates.",
    category: "science"
  },
  {
    id: 229,
    year: "1878",
    sortYear: 1878,
    title: "Lise Meitner",
    summary: "Born 1878, died 1968. Austrian-Swedish physicist who provided the first theoretical explanation of nuclear fission.",
    detail: "Meitner studied physics at the University of Vienna and spent three decades working in Berlin alongside Otto Hahn, conducting groundbreaking research on radioactivity. After fleeing Nazi Germany in 1938 due to her Jewish heritage, she and her nephew Otto Frisch correctly interpreted Hahn's experimental results as nuclear fission, coining the term. Despite her essential theoretical contribution, she was excluded from the 1944 Nobel Prize in Chemistry awarded solely to Hahn, in what is often cited as one of the most glaring oversights in Nobel history. Element 109, meitnerium, was named in her honor.",
    category: "science"
  },
  {
    id: 230,
    year: "1879",
    sortYear: 1879,
    title: "Albert Einstein",
    summary: "Born 1879, died 1955. German-born theoretical physicist who developed the theories of special and general relativity and the mass-energy equivalence formula E=mc^2.",
    detail: "Einstein was born in Ulm, Germany, and worked as a patent clerk in Bern, Switzerland, while producing his revolutionary 1905 papers on special relativity, the photoelectric effect, and Brownian motion. His general theory of relativity, published in 1915, redefined gravity as the curvature of spacetime and was confirmed by the observation of light bending during a solar eclipse in 1919. He received the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect, which helped establish quantum mechanics. Fleeing Nazi Germany, he settled at the Institute for Advanced Study in Princeton, where he spent the rest of his life.",
    category: "science"
  },
  {
    id: 231,
    year: "1881",
    sortYear: 1881,
    title: "Alexander Fleming",
    summary: "Born 1881, died 1955. Scottish bacteriologist who discovered penicillin, the first widely used antibiotic, revolutionizing the treatment of bacterial infections.",
    detail: "Fleming studied medicine at St Mary's Hospital Medical School in London and served in the Royal Army Medical Corps during World War I, where he witnessed many soldiers die from infected wounds. In 1928, he noticed that a mold of the genus Penicillium had contaminated a petri dish and killed the surrounding bacteria, leading to the discovery of penicillin. Though Fleming identified the antibacterial substance, it was Howard Florey and Ernst Boris Chain who later developed it into a mass-produced drug. All three shared the Nobel Prize in Physiology or Medicine in 1945, and penicillin has since saved hundreds of millions of lives.",
    category: "science"
  },
  {
    id: 232,
    year: "1885",
    sortYear: 1885,
    title: "Niels Bohr",
    summary: "Born 1885, died 1962. Danish physicist who developed the Bohr model of the atom and made foundational contributions to quantum mechanics.",
    detail: "Bohr earned his doctorate at the University of Copenhagen and worked with Rutherford in Manchester before returning to Copenhagen, where he founded the Institute of Theoretical Physics. His 1913 model of the atom, with electrons orbiting the nucleus in quantized energy levels, successfully explained the hydrogen emission spectrum. He developed the principle of complementarity and the Copenhagen interpretation of quantum mechanics, engaging in famous debates with Einstein about the nature of reality. He won the Nobel Prize in Physics in 1922 and played a role in the development of atomic energy during and after World War II.",
    category: "science"
  },
  {
    id: 233,
    year: "1887",
    sortYear: 1887,
    title: "Erwin Schrodinger",
    summary: "Born 1887, died 1961. Austrian physicist who formulated the wave equation fundamental to quantum mechanics and proposed the famous Schrodinger's cat thought experiment.",
    detail: "Schrodinger studied at the University of Vienna and held academic positions across Europe. In 1926, he published his wave equation, which describes how the quantum state of a physical system changes over time and became a cornerstone of quantum mechanics. His 1935 thought experiment involving a cat in a superposition of alive and dead states vividly illustrated the paradoxes of quantum measurement. He shared the Nobel Prize in Physics in 1933 with Paul Dirac and later turned his attention to biology, publishing What Is Life?, a book that influenced the discovery of DNA's structure.",
    category: "science"
  },
  {
    id: 234,
    year: "1889",
    sortYear: 1889,
    title: "Edwin Hubble",
    summary: "Born 1889, died 1953. American astronomer who proved the existence of galaxies beyond the Milky Way and discovered that the universe is expanding.",
    detail: "Hubble studied law at Oxford as a Rhodes Scholar before turning to astronomy at the University of Chicago. Working at the Mount Wilson Observatory in California, he demonstrated in 1924 that the Andromeda nebula was a separate galaxy far beyond the Milky Way, vastly expanding the known size of the universe. In 1929, he formulated Hubble's Law, showing that galaxies are receding from each other at speeds proportional to their distance, providing the first observational evidence for the expanding universe. The Hubble Space Telescope, launched in 1990, was named in his honor.",
    category: "science"
  },
  {
    id: 235,
    year: "1901",
    sortYear: 1901,
    title: "Enrico Fermi",
    summary: "Born 1901, died 1954. Italian-American physicist who created the first controlled nuclear chain reaction and made major contributions to quantum theory and nuclear physics.",
    detail: "Fermi studied at the University of Pisa and held a professorship in Rome before emigrating to the United States in 1938 after receiving the Nobel Prize in Physics for his work on induced radioactivity. In December 1942, he achieved the first self-sustaining nuclear chain reaction at the University of Chicago, a critical milestone in the development of nuclear energy and weapons. He was a key member of the Manhattan Project and later opposed the development of the hydrogen bomb on moral grounds. Fermi's ability to excel in both theoretical and experimental physics was exceptionally rare, earning him the nickname 'the Pope' among colleagues.",
    category: "science"
  },
  {
    id: 236,
    year: "1901",
    sortYear: 1901,
    title: "Werner Heisenberg",
    summary: "Born 1901, died 1976. German physicist who formulated the uncertainty principle and was a key pioneer of quantum mechanics.",
    detail: "Heisenberg studied under Arnold Sommerfeld in Munich and Max Born in Gottingen. In 1925, he developed matrix mechanics, the first complete mathematical formulation of quantum mechanics. His uncertainty principle, published in 1927, established that certain pairs of physical properties, such as position and momentum, cannot both be precisely known simultaneously. He won the Nobel Prize in Physics in 1932 and controversially led Germany's nuclear research program during World War II, though the program failed to produce an atomic weapon.",
    category: "science"
  },
  {
    id: 237,
    year: "1902",
    sortYear: 1902,
    title: "Paul Dirac",
    summary: "Born 1902, died 1984. English theoretical physicist who predicted the existence of antimatter and made fundamental contributions to quantum mechanics and quantum electrodynamics.",
    detail: "Dirac studied engineering and mathematics at the University of Bristol before earning his doctorate at Cambridge. His Dirac equation, formulated in 1928, combined quantum mechanics with special relativity and predicted the existence of the positron, which was experimentally confirmed in 1932. He shared the Nobel Prize in Physics in 1933 with Schrodinger and later held the Lucasian Chair of Mathematics at Cambridge, the same position once held by Newton. Known for his extreme precision of language and economy of expression, he is considered one of the most significant theoretical physicists of the twentieth century.",
    category: "science"
  },
  {
    id: 238,
    year: "1902",
    sortYear: 1902,
    title: "Barbara McClintock",
    summary: "Born 1902, died 1992. American cytogeneticist who discovered transposable elements in maize, fundamentally changing the understanding of gene regulation.",
    detail: "McClintock studied botany at Cornell University and conducted her pioneering research on maize chromosomes at Cold Spring Harbor Laboratory. In the late 1940s, she discovered that certain genetic elements could move positions on a chromosome, a phenomenon she called transposition. Her findings were met with skepticism for decades because they contradicted the prevailing view that genes occupied fixed positions. She was vindicated when molecular biology confirmed transposable elements across all forms of life, and she received the Nobel Prize in Physiology or Medicine in 1983, one of the few individuals to win the prize unshared.",
    category: "science"
  },
  {
    id: 239,
    year: "1904",
    sortYear: 1904,
    title: "J. Robert Oppenheimer",
    summary: "Born 1904, died 1967. American theoretical physicist who directed the Manhattan Project and is often called the Father of the Atomic Bomb.",
    detail: "Oppenheimer studied at Harvard and completed his doctorate at the University of Gottingen before joining the faculty at the University of California, Berkeley. In 1942, he was appointed director of the Los Alamos Laboratory, where he led the scientific effort to develop the first nuclear weapons. After witnessing the Trinity test in July 1945, he famously recalled the Bhagavad Gita: 'Now I am become Death, the destroyer of worlds.' After the war, he chaired the Atomic Energy Commission's General Advisory Committee and opposed the hydrogen bomb, leading to a controversial security hearing in 1954 that revoked his security clearance.",
    category: "science"
  },
  {
    id: 240,
    year: "1907",
    sortYear: 1907,
    title: "Rachel Carson",
    summary: "Born 1907, died 1964. American marine biologist and author whose book Silent Spring launched the modern environmental movement.",
    detail: "Carson studied at Johns Hopkins University and worked for the U.S. Fish and Wildlife Service, where she became known for her eloquent writing about the sea. Her 1962 book Silent Spring documented the devastating environmental effects of pesticides, particularly DDT, on bird populations and ecosystems. The book sparked fierce opposition from the chemical industry but led directly to a nationwide ban on DDT and the creation of the U.S. Environmental Protection Agency. Carson is widely credited with awakening public consciousness about humanity's responsibility to the natural world.",
    category: "science"
  },
  {
    id: 241,
    year: "1910",
    sortYear: 1910,
    title: "Dorothy Hodgkin",
    summary: "Born 1910, died 1994. British chemist who used X-ray crystallography to determine the structures of penicillin, vitamin B12, and insulin.",
    detail: "Hodgkin studied chemistry at Oxford and Cambridge, where she pioneered the use of X-ray crystallography to determine the three-dimensional structures of complex biological molecules. She solved the structure of penicillin during World War II and later determined the structure of vitamin B12, for which she received the Nobel Prize in Chemistry in 1964. Her determination of insulin's structure, completed in 1969 after thirty-five years of work, was a monumental achievement in structural biology. She was only the third woman to win the Nobel Prize in Chemistry and remains a towering figure in crystallography.",
    category: "science"
  },
  {
    id: 242,
    year: "1912",
    sortYear: 1912,
    title: "Alan Turing",
    summary: "Born 1912, died 1954. British mathematician and computer scientist who formalized the concept of computation and played a pivotal role in breaking the Enigma code during World War II.",
    detail: "Turing studied at King's College, Cambridge, and at Princeton, where he developed the concept of the Turing machine, a theoretical device that formalized the notion of algorithmic computation. During World War II, he worked at Bletchley Park, where his cryptanalytic work on the German Enigma cipher is estimated to have shortened the war by several years. After the war, he contributed to the design of early computers and proposed the Turing test as a measure of machine intelligence. He was prosecuted for homosexuality in 1952 and died of cyanide poisoning in 1954; he received a posthumous royal pardon in 2013.",
    category: "science"
  },
  {
    id: 243,
    year: "1914",
    sortYear: 1914,
    title: "Jonas Salk",
    summary: "Born 1914, died 1995. American virologist who developed the first successful inactivated polio vaccine, preventing millions of cases of paralytic poliomyelitis.",
    detail: "Salk attended the City College of New York and New York University School of Medicine before joining the University of Pittsburgh, where he led the polio vaccine research effort. His inactivated polio vaccine was declared safe and effective in 1955 after one of the largest clinical trials in history, involving nearly two million children. He famously chose not to patent the vaccine, forgoing enormous personal profit so that it could be distributed as widely as possible. He later founded the Salk Institute for Biological Studies in La Jolla, California, which remains a leading center for biomedical research.",
    category: "science"
  },
  {
    id: 244,
    year: "1916",
    sortYear: 1916,
    title: "Watson & Crick",
    summary: "James Watson (born 1928) and Francis Crick (1916-2004) jointly discovered the double-helix structure of DNA in 1953, one of the most important scientific breakthroughs of the twentieth century.",
    detail: "Working at the Cavendish Laboratory in Cambridge, Watson and Crick combined insights from X-ray crystallography, Chargaff's base-pairing rules, and model building to determine that DNA consists of two helical strands wound around each other with complementary base pairs linking them. Their landmark paper, published in Nature in April 1953, immediately suggested a mechanism for genetic replication. The discovery earned them the Nobel Prize in Physiology or Medicine in 1962, shared with Maurice Wilkins, and it launched the era of molecular biology. Their work depended critically on X-ray data produced by Rosalind Franklin and Raymond Gosling at King's College London.",
    category: "science"
  },
  {
    id: 245,
    year: "1918",
    sortYear: 1918,
    title: "Richard Feynman",
    summary: "Born 1918, died 1988. American theoretical physicist who developed quantum electrodynamics and was renowned for his brilliant, unconventional approach to physics.",
    detail: "Feynman grew up in Queens, New York, and studied at MIT and Princeton before joining the Manhattan Project as a young physicist. He developed the path integral formulation of quantum mechanics and the Feynman diagrams that revolutionized the calculation of particle interactions, earning the Nobel Prize in Physics in 1965. His Feynman Lectures on Physics became legendary teaching texts, and his autobiographical books revealed a colorful personality that delighted in safecracking, bongo playing, and challenging authority. He also served on the Rogers Commission investigating the Challenger disaster, memorably demonstrating the O-ring failure with a glass of ice water.",
    category: "science"
  },
  {
    id: 246,
    year: "1920",
    sortYear: 1920,
    title: "Rosalind Franklin",
    summary: "Born 1920, died 1958. English chemist and X-ray crystallographer whose work was critical to determining the double-helix structure of DNA.",
    detail: "Franklin studied at Cambridge and conducted advanced X-ray diffraction research in Paris before joining King's College London. Her famous Photograph 51, an X-ray diffraction image of DNA taken in 1952, provided key evidence that DNA has a helical structure. Without her knowledge, her data was shown to James Watson and Francis Crick, who used it to build their model of the DNA double helix. Franklin died of ovarian cancer at the age of thirty-seven and did not share in the 1962 Nobel Prize awarded to Watson, Crick, and Maurice Wilkins; she is now widely recognized as having made an indispensable contribution to the discovery.",
    category: "science"
  },
  {
    id: 247,
    year: "1934",
    sortYear: 1934,
    title: "Carl Sagan",
    summary: "Born 1934, died 1996. American astronomer and science communicator whose television series Cosmos brought astronomy and science to a global audience.",
    detail: "Sagan studied at the University of Chicago and held positions at Harvard and Cornell, where he directed the Laboratory for Planetary Studies. His television series Cosmos: A Personal Voyage, first broadcast in 1980, became the most widely watched PBS series in history and inspired a generation of scientists. He contributed to NASA's planetary missions and was instrumental in the Pioneer and Voyager programs, including the Voyager Golden Record sent into interstellar space. His advocacy for scientific literacy and skepticism, along with bestselling books like The Demon-Haunted World, made him one of the most recognizable scientists of the twentieth century.",
    category: "science"
  },
  {
    id: 248,
    year: "1934",
    sortYear: 1934,
    title: "Jane Goodall",
    summary: "Born 1934. British primatologist and anthropologist whose decades-long study of wild chimpanzees in Tanzania transformed our understanding of primate behavior.",
    detail: "Goodall traveled to Tanzania in 1960 at the invitation of paleoanthropologist Louis Leakey, without a university degree, to study chimpanzees at Gombe Stream. Her observations that chimpanzees make and use tools overturned the long-held belief that tool use was uniquely human. She documented complex social behaviors including warfare, affection, and mourning among chimpanzee communities, reshaping the boundary between humans and other animals. Now in her nineties, she continues to advocate for conservation and animal welfare through the Jane Goodall Institute and her global Roots and Shoots youth program.",
    category: "science"
  },
  {
    id: 249,
    year: "1942",
    sortYear: 1942,
    title: "Stephen Hawking",
    summary: "Born 1942, died 2018. British theoretical physicist who made groundbreaking contributions to cosmology and black hole physics despite living with motor neuron disease for over fifty years.",
    detail: "Hawking studied at Oxford and Cambridge, where he was diagnosed with amyotrophic lateral sclerosis at the age of twenty-one and given two years to live. Defying his prognosis, he demonstrated that black holes emit radiation, now called Hawking radiation, bridging quantum mechanics and general relativity. His popular science book A Brief History of Time sold over ten million copies and made complex cosmological ideas accessible to a worldwide audience. He held the Lucasian Chair of Mathematics at Cambridge for thirty years and became an iconic symbol of the triumph of the human mind over physical limitation.",
    category: "science"
  },
  {
    id: 250,
    year: "1958",
    sortYear: 1958,
    title: "Neil deGrasse Tyson",
    summary: "Born 1958. American astrophysicist and science communicator who directs the Hayden Planetarium and is one of the most prominent public voices for science in the United States.",
    detail: "Tyson grew up in New York City and was inspired by a visit to the Hayden Planetarium as a child. He studied at Harvard, the University of Texas at Austin, and Columbia University before becoming the Frederick P. Rose Director of the Hayden Planetarium at the American Museum of Natural History. He hosted the television series Cosmos: A Spacetime Odyssey, a successor to Carl Sagan's original series, and has appeared widely in media to promote scientific literacy. His books, lectures, and social media presence have made him one of the most recognizable science communicators of his generation.",
    category: "science"
  }
];
