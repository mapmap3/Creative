const MATH_DATA = [
  {
    id: 251,
    year: "35000 BCE",
    sortYear: -35000,
    title: "Tally Marks and Counting Systems",
    summary: "Early humans developed tally marks to count and record quantities, as evidenced by notched bones found in Africa and Europe. These represent the earliest known mathematical activity.",
    detail: "The Lebombo bone, dated to approximately 35,000 BCE, contains 29 notch marks and is one of the oldest known mathematical artifacts. Tally systems allowed prehistoric humans to track quantities of animals, days, and trade goods. This foundational step transformed abstract quantity into recorded information, laying the groundwork for all subsequent mathematics. Similar tally bones have been found across multiple continents, suggesting counting arose independently in many cultures.",
    category: "math"
  },
  {
    id: 252,
    year: "3400 BCE",
    sortYear: -3400,
    title: "Egyptian and Sumerian Numerals",
    summary: "The Egyptians and Sumerians independently developed formal numeral systems for administration and trade. These were among the first systems to represent numbers with distinct written symbols.",
    detail: "Egyptian hieroglyphic numerals used a base-10 system with unique symbols for powers of ten, while the Sumerians developed a base-60 (sexagesimal) system that still influences how we measure time and angles. These numeral systems enabled record-keeping for taxation, construction, and astronomy. The Sumerian place-value concept was a major conceptual leap, allowing the same symbol to represent different values depending on its position. Both systems were essential to the administrative needs of the first large civilizations.",
    category: "math"
  },
  {
    id: 253,
    year: "3000 BCE",
    sortYear: -3000,
    title: "Basic Arithmetic Operations",
    summary: "Ancient Egyptians and Babylonians developed systematic methods for addition, subtraction, multiplication, and division. These operations formed the core toolkit for commerce and engineering.",
    detail: "Egyptian arithmetic relied on doubling and halving methods for multiplication, recorded in papyri such as the Rhind Mathematical Papyrus. Babylonians created extensive multiplication tables on clay tablets and could handle division as multiplication by reciprocals. These techniques enabled the planning of large-scale construction projects, irrigation systems, and astronomical observations. The formalization of arithmetic as repeatable procedures was a crucial step toward mathematics as a discipline rather than ad hoc problem-solving.",
    category: "math"
  },
  {
    id: 254,
    year: "2000 BCE",
    sortYear: -2000,
    title: "Egyptian Geometry",
    summary: "Ancient Egyptians developed practical geometric methods for land surveying, construction, and calculating areas and volumes. Their techniques enabled the building of the pyramids and management of Nile flood boundaries.",
    detail: "Egyptian geometry focused on applied problems: computing the area of fields after annual Nile floods, determining the volume of granaries, and establishing precise right angles for monumental architecture. The Rhind Papyrus and Moscow Papyrus contain problems for calculating areas of triangles, rectangles, and circles, as well as volumes of truncated pyramids. Their approximation of pi as roughly 3.16 was remarkably accurate for the era. Though not formalized as proofs, these empirical methods demonstrated deep spatial reasoning and directly influenced later Greek mathematics.",
    category: "math"
  },
  {
    id: 255,
    year: "1800 BCE",
    sortYear: -1800,
    title: "Quadratic Equations (Babylonian)",
    summary: "Babylonian mathematicians developed methods to solve quadratic equations, recorded on clay tablets such as YBC 6967. They used geometric and algebraic techniques centuries before formal algebra existed.",
    detail: "Babylonian scribes solved problems equivalent to modern quadratic equations using a method called 'completing the square,' expressing solutions in terms of geometric areas and lengths. Their tablets contain systematic procedures for dozens of problem types, including systems of simultaneous equations. These methods were purely algorithmic rather than based on proof, but they were effective and general. The Babylonian approach to quadratics predates the Greek treatment by over a millennium and represents one of the earliest examples of abstract mathematical reasoning.",
    category: "math"
  },
  {
    id: 256,
    year: "1650 BCE",
    sortYear: -1650,
    title: "Egyptian Fractions",
    summary: "The Rhind Mathematical Papyrus systematized the use of unit fractions, where all fractions are expressed as sums of distinct fractions with numerator one. This was the standard Egyptian approach to representing non-integer quantities.",
    detail: "Scribe Ahmes compiled the Rhind Papyrus around 1650 BCE, including extensive tables for decomposing fractions of the form 2/n into sums of unit fractions. This representation, while cumbersome by modern standards, was used consistently for over two thousand years in Egyptian mathematics. The decomposition problem itself proved to be deep, connecting to number theory questions that remain studied today, including the Erdos-Straus conjecture. Egyptian fractions also influenced Greek and medieval European mathematics and have modern applications in combinatorics and algorithm design.",
    category: "math"
  },
  {
    id: 257,
    year: "600 BCE",
    sortYear: -600,
    title: "Thales' Geometric Theorems",
    summary: "Thales of Miletus is credited with introducing deductive reasoning into geometry, including the theorem that a triangle inscribed in a semicircle has a right angle. He is often called the first true mathematician.",
    detail: "Thales brought the revolutionary idea that geometric facts could be established through logical argument rather than empirical measurement alone. He is attributed with several foundational results: that a circle is bisected by its diameter, that base angles of isosceles triangles are equal, and that vertical angles are equal. His approach marked the transition from practical geometry to theoretical mathematics. By insisting on proof, Thales established the methodology that would culminate in Euclid's systematic treatment of geometry two centuries later.",
    category: "math"
  },
  {
    id: 258,
    year: "530 BCE",
    sortYear: -530,
    title: "Pythagorean Theorem",
    summary: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides. While known empirically earlier, Pythagoras and his school provided the first known proof.",
    detail: "The relationship a-squared plus b-squared equals c-squared was known to Babylonian and Indian mathematicians long before Pythagoras, but the Pythagorean school elevated it to a proven theorem within a deductive framework. The discovery that the square root of two is irrational, arising directly from this theorem, profoundly shook Pythagorean philosophy and revealed that not all geometric magnitudes are commensurable. The theorem remains one of the most fundamental results in mathematics, underpinning Euclidean distance, trigonometry, and much of physics. Hundreds of distinct proofs have been discovered, including one by President James Garfield.",
    category: "math"
  },
  {
    id: 259,
    year: "450 BCE",
    sortYear: -450,
    title: "Zeno's Paradoxes",
    summary: "Zeno of Elea proposed several paradoxes about motion and infinity, including Achilles and the Tortoise, which challenged Greek understanding of space, time, and the continuum.",
    detail: "Zeno's paradoxes argued that motion is impossible if space and time are infinitely divisible, since an infinite number of steps must be completed in finite time. These arguments forced mathematicians to grapple with the nature of infinity and infinitesimals for over two millennia. The paradoxes were not fully resolved until the development of rigorous concepts of limits and convergent series in the 19th century. Zeno's work had lasting impact on the philosophy of mathematics and directly motivated key developments in analysis and set theory.",
    category: "math"
  },
  {
    id: 260,
    year: "300 BCE",
    sortYear: -300,
    title: "Euclidean Geometry",
    summary: "Euclid's Elements systematized all known geometry into a rigorous axiomatic framework built from five postulates. It remained the standard textbook for over two thousand years.",
    detail: "Written around 300 BCE in Alexandria, the Elements organized hundreds of propositions into thirteen books covering plane geometry, number theory, and solid geometry, all derived from a small set of axioms and postulates. Euclid's method of logical deduction from explicit assumptions became the model for mathematical rigor that persists to this day. The fifth postulate, concerning parallel lines, resisted proof from the others for centuries, ultimately leading to the discovery of non-Euclidean geometries. The Elements is the most influential mathematics textbook ever written, with over a thousand editions published since the invention of printing.",
    category: "math"
  },
  {
    id: 261,
    year: "300 BCE",
    sortYear: -299,
    title: "Number Theory Foundations",
    summary: "Euclid's Elements included foundational results in number theory, including the proof that there are infinitely many prime numbers and the Euclidean algorithm for finding greatest common divisors.",
    detail: "Books VII through IX of the Elements contain Euclid's treatment of number theory, including the fundamental theorem that every integer can be expressed as a product of primes (though the uniqueness proof came later). His proof of the infinitude of primes is a masterpiece of elegant reasoning by contradiction. The Euclidean algorithm for computing the greatest common divisor is one of the oldest algorithms still in practical use today. These results established number theory as a branch of mathematics and laid groundwork that Gauss, Euler, and modern cryptographers would build upon.",
    category: "math"
  },
  {
    id: 262,
    year: "250 BCE",
    sortYear: -250,
    title: "Pi Calculation (Archimedes)",
    summary: "Archimedes of Syracuse developed a rigorous method to approximate pi by inscribing and circumscribing regular polygons around a circle, bounding it between 3 10/71 and 3 1/7.",
    detail: "Archimedes' method of exhaustion used polygons with up to 96 sides to squeeze the value of pi between increasingly tight bounds, establishing it as between approximately 3.1408 and 3.1429. This was the first theoretically rigorous approach to computing pi, as opposed to empirical measurements. His technique foreshadowed integral calculus by two millennia and demonstrated the power of limit-like arguments. The quest to compute pi to ever more decimal places has continued for centuries and now serves as a benchmark for computational power, with trillions of digits computed by modern algorithms.",
    category: "math"
  },
  {
    id: 263,
    year: "250 BCE",
    sortYear: -249,
    title: "Archimedes' Methods",
    summary: "Archimedes developed the method of exhaustion for computing areas and volumes of curved figures, and discovered fundamental results about spheres, cylinders, and parabolas.",
    detail: "Archimedes proved that the area of a circle equals pi times the square of its radius, that the volume of a sphere is two-thirds the volume of its circumscribing cylinder, and computed the area under a parabolic segment. His lost work 'The Method' revealed that he used mechanical reasoning to discover results before proving them rigorously. These techniques anticipated integral calculus by roughly 1,900 years. Archimedes considered his sphere-cylinder result his greatest achievement and requested it be inscribed on his tombstone.",
    category: "math"
  },
  {
    id: 264,
    year: "200 BCE",
    sortYear: -200,
    title: "Conic Sections (Apollonius)",
    summary: "Apollonius of Perga systematically studied ellipses, parabolas, and hyperbolas in his treatise Conics, introducing the terminology still used today. His work defined these curves as sections of a cone.",
    detail: "Apollonius showed that all three types of conic sections could be obtained from a single double cone by varying the angle of the cutting plane. He introduced the terms parabola, ellipse, and hyperbola, derived from Greek words meaning 'equal to,' 'falling short,' and 'exceeding.' His work remained the definitive treatment for nearly two millennia, until Descartes recast conics in algebraic terms. Conic sections proved essential to astronomy when Kepler discovered that planetary orbits are ellipses, and they remain fundamental in optics, engineering, and orbital mechanics.",
    category: "math"
  },
  {
    id: 265,
    year: "150 BCE",
    sortYear: -150,
    title: "Trigonometry",
    summary: "Hipparchus of Nicaea developed the first systematic trigonometric tables, relating angles to chord lengths in circles. His work enabled precise astronomical calculations and navigation.",
    detail: "Hipparchus created a table of chords equivalent to a modern sine table, dividing the circle into 360 degrees following Babylonian convention. This allowed him to compute the positions of celestial bodies, the length of the year, and the precession of the equinoxes with unprecedented accuracy. Ptolemy later expanded this work in the Almagest, which remained the astronomical standard for over a millennium. Indian mathematicians subsequently introduced the sine and cosine functions in their modern form, and Islamic scholars further refined these into the full set of six trigonometric functions used today.",
    category: "math"
  },
  {
    id: 266,
    year: "250",
    sortYear: 250,
    title: "Diophantine Equations",
    summary: "Diophantus of Alexandria studied equations requiring integer or rational solutions, founding the branch of number theory that bears his name. His Arithmetica influenced mathematics for over a millennium.",
    detail: "Diophantus' Arithmetica contained 189 problems seeking rational number solutions to polynomial equations, introducing a form of algebraic notation that was advanced for its time. His work directly inspired Fermat, who famously scribbled his Last Theorem in the margin of a copy of Arithmetica. Diophantine equations remain central to number theory, with applications in cryptography, coding theory, and computer science. The question of whether integer solutions exist for arbitrary polynomial equations, generalized as Hilbert's tenth problem, was proven undecidable by Matiyasevich in 1970.",
    category: "math"
  },
  {
    id: 267,
    year: "500",
    sortYear: 500,
    title: "The Concept of Zero",
    summary: "Indian mathematicians, particularly Brahmagupta, formalized zero as both a placeholder and a number with its own arithmetic rules. This was one of the most consequential innovations in mathematical history.",
    detail: "While the Babylonians and Maya used zero as a placeholder, Brahmagupta in 628 CE was the first to treat zero as a number in its own right, defining rules for arithmetic operations involving zero. He described zero as the result of subtracting a number from itself and attempted to define division by zero. The concept traveled from India to the Islamic world and then to Europe, revolutionizing calculation and enabling the positional numeral system. Without zero, modern algebra, calculus, and computer science would be inconceivable, as it is fundamental to place-value notation and the binary system underlying all digital technology.",
    category: "math"
  },
  {
    id: 268,
    year: "628",
    sortYear: 628,
    title: "Negative Numbers (Brahmagupta)",
    summary: "Brahmagupta provided the first systematic rules for arithmetic with negative numbers, interpreting them as debts in contrast to positive numbers as fortunes.",
    detail: "In his work Brahmasphutasiddhanta, Brahmagupta laid out rules for adding, subtracting, and multiplying positive and negative numbers, as well as zero. He correctly stated that a negative times a negative yields a positive and that a negative times a positive yields a negative. European mathematicians resisted negative numbers for centuries afterward, with some dismissing them as 'absurd' as late as the 1700s. The full acceptance of negative numbers was essential to the development of algebra and the number line, and they are now fundamental to every branch of mathematics and science.",
    category: "math"
  },
  {
    id: 269,
    year: "820",
    sortYear: 820,
    title: "Algebra (al-Khwarizmi)",
    summary: "Muhammad ibn Musa al-Khwarizmi wrote Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala, systematizing the solving of linear and quadratic equations. The word 'algebra' derives from al-jabr in the title.",
    detail: "Al-Khwarizmi's treatise presented general methods for solving six standard types of equations using two operations: al-jabr (restoring, or moving a subtracted term to the other side) and al-muqabala (balancing, or canceling like terms). Unlike Diophantus, al-Khwarizmi aimed for completely general procedures applicable to entire classes of problems. His name, Latinized as 'Algoritmi,' gave us the word 'algorithm.' The work was translated into Latin in the 12th century and became a foundational textbook in European universities, launching algebra as a distinct mathematical discipline.",
    category: "math"
  },
  {
    id: 270,
    year: "976",
    sortYear: 976,
    title: "Hindu-Arabic Numeral System",
    summary: "The Hindu-Arabic numeral system, using digits 0 through 9 in a place-value decimal system, gradually spread from India through the Islamic world to Europe. It is the basis of virtually all modern numerical notation.",
    detail: "Originating in India and refined by Islamic mathematicians, this system's key innovations were a consistent set of ten digit symbols, positional notation where a digit's value depends on its place, and the use of zero as both placeholder and number. Fibonacci's Liber Abaci (1202) popularized these numerals in Europe, demonstrating their superiority over Roman numerals for calculation. The system made arithmetic accessible to merchants and scholars alike, enabling the commercial and scientific revolutions. Today it is used by virtually every culture worldwide, a testament to its efficiency and versatility.",
    category: "math"
  },
  {
    id: 271,
    year: "1070",
    sortYear: 1070,
    title: "Omar Khayyam's Cubic Solutions",
    summary: "Omar Khayyam developed geometric methods for solving cubic equations using the intersections of conic sections. He also contributed to the understanding of the parallel postulate and the binomial theorem.",
    detail: "Khayyam classified cubic equations into types and showed that each could be solved by finding the intersection of specific pairs of conics, such as a circle and a parabola. He recognized that cubics could have multiple roots and sought but could not find purely algebraic solutions. His work on the parallel postulate anticipated aspects of non-Euclidean geometry by centuries. Khayyam's contributions bridged ancient Greek and later European algebra, and his geometric approach to cubics remained the state of the art until Cardano published algebraic solutions in the 16th century.",
    category: "math"
  },
  {
    id: 272,
    year: "1202",
    sortYear: 1202,
    title: "Fibonacci Sequence",
    summary: "Leonardo of Pisa (Fibonacci) introduced the sequence 1, 1, 2, 3, 5, 8, 13... in his Liber Abaci, modeling the growth of a rabbit population. The sequence appears throughout nature and mathematics.",
    detail: "The Fibonacci sequence, where each number is the sum of the two preceding ones, was presented as the solution to a problem about rabbit breeding, but its significance extends far beyond that. The ratio of consecutive Fibonacci numbers converges to the golden ratio, approximately 1.618, which appears in architecture, art, and biological structures like the spiral arrangement of sunflower seeds and pinecone scales. In modern mathematics, the sequence connects to number theory, combinatorics, and algorithm analysis. Fibonacci's greater legacy from Liber Abaci was introducing Hindu-Arabic numerals to Western Europe, transforming European commerce and science.",
    category: "math"
  },
  {
    id: 273,
    year: "1425",
    sortYear: 1425,
    title: "Perspective Geometry",
    summary: "Filippo Brunelleschi and Leon Battista Alberti developed the mathematical principles of linear perspective, enabling realistic three-dimensional representation on flat surfaces.",
    detail: "Brunelleschi demonstrated perspective projection around 1413 through his famous panel painting experiment, and Alberti codified the mathematical rules in his 1435 treatise Della Pittura. The key insight was that parallel lines in three-dimensional space appear to converge to a vanishing point on the picture plane. This work gave rise to projective geometry, later formalized by Desargues and Pascal in the 17th century. Perspective geometry influenced not only Renaissance art and architecture but also the development of descriptive geometry, computer graphics, and the mathematics of projection used in engineering and cartography.",
    category: "math"
  },
  {
    id: 274,
    year: "1545",
    sortYear: 1545,
    title: "Cubic and Quartic Solutions (Cardano)",
    summary: "Gerolamo Cardano published general algebraic solutions for cubic and quartic equations in Ars Magna, one of the great milestones of Renaissance mathematics.",
    detail: "Building on work by del Ferro and Tartaglia, Cardano showed that cubic equations could be solved using radicals involving square and cube roots, including cases requiring complex numbers, which he called 'sophistic.' His student Ferrari extended the method to quartic equations. These solutions demonstrated that algebra could go beyond what geometric intuition suggested and forced mathematicians to confront complex numbers. The search for a quintic formula, ultimately proved impossible by Abel and Galois, would later drive the development of group theory and abstract algebra.",
    category: "math"
  },
  {
    id: 275,
    year: "1614",
    sortYear: 1614,
    title: "Logarithms (Napier)",
    summary: "John Napier invented logarithms as a computational tool to simplify multiplication and division into addition and subtraction. His invention revolutionized scientific calculation for centuries.",
    detail: "Napier spent twenty years developing his tables of logarithms, published in Mirifici Logarithmorum Canonis Descriptio. Henry Briggs subsequently introduced common (base-10) logarithms, making them more practical. Logarithms transformed astronomy, navigation, and engineering by reducing the labor of computation enormously, enabling Kepler's planetary calculations and much of the quantitative science that followed. The slide rule, based on logarithmic scales, remained the primary calculating tool for scientists and engineers until electronic calculators appeared in the 1970s. Logarithms also proved to be fundamental in information theory, thermodynamics, and the analysis of algorithms.",
    category: "math"
  },
  {
    id: 276,
    year: "1637",
    sortYear: 1637,
    title: "Coordinate Geometry (Descartes)",
    summary: "Rene Descartes unified algebra and geometry by introducing the coordinate system, allowing geometric shapes to be expressed as algebraic equations. This was published in La Geometrie.",
    detail: "Descartes' innovation was to assign numerical coordinates to every point in the plane, translating geometric problems into algebraic ones and vice versa. A circle became an equation, and solving an equation became finding a curve. Pierre de Fermat independently developed similar ideas around the same time. Analytic geometry made it possible to apply algebraic techniques to geometric problems that had resisted solution for centuries and was essential preparation for the invention of calculus. The Cartesian coordinate system is now so pervasive that it is difficult to imagine mathematics, physics, or computer graphics without it.",
    category: "math"
  },
  {
    id: 277,
    year: "1654",
    sortYear: 1654,
    title: "Probability Theory (Pascal and Fermat)",
    summary: "Blaise Pascal and Pierre de Fermat founded probability theory through their correspondence about gambling problems, particularly the 'problem of points.' Their work gave mathematical structure to uncertainty.",
    detail: "The problem that sparked their exchange was how to fairly divide stakes in an interrupted game of chance. Pascal and Fermat developed the concept of expected value and systematic methods for counting outcomes. Pascal's triangle, which he explored in this context, encoded binomial coefficients with deep combinatorial significance. Their work laid the foundation for the entire field of probability and statistics, which now underpins insurance, quality control, quantum mechanics, machine learning, and decision theory. Christiaan Huygens published the first textbook on probability shortly after, building directly on their correspondence.",
    category: "math"
  },
  {
    id: 278,
    year: "1665",
    sortYear: 1665,
    title: "Calculus (Newton and Leibniz)",
    summary: "Isaac Newton and Gottfried Wilhelm Leibniz independently invented calculus, providing systematic methods for computing rates of change and accumulated quantities. This is widely regarded as the most important advance in modern mathematics.",
    detail: "Newton developed his 'method of fluxions' during 1665-1666, motivated by problems in physics, while Leibniz developed his version independently around 1675, introducing the notation still used today. Calculus unified two ancient problems: finding tangent lines to curves (differentiation) and computing areas under curves (integration), revealing them as inverse operations through the fundamental theorem of calculus. The ensuing priority dispute between Newton and Leibniz was one of the most bitter in scientific history. Calculus made modern physics, engineering, and economics possible and remains the gateway to advanced mathematics.",
    category: "math"
  },
  {
    id: 279,
    year: "1736",
    sortYear: 1736,
    title: "Graph Theory (Euler)",
    summary: "Leonhard Euler solved the Konigsberg bridge problem, proving it was impossible to cross each of the city's seven bridges exactly once. This launched graph theory as a mathematical discipline.",
    detail: "Euler abstracted the physical problem into a network of nodes and edges, stripping away geographic detail to focus on connectivity. He proved that a path traversing every edge exactly once exists only if the graph has zero or two nodes with an odd number of edges. This was the first theorem of graph theory and one of the first results in topology. Graph theory is now fundamental to computer science, network analysis, social media algorithms, logistics, and circuit design. Euler's broader contributions to mathematics are unparalleled in volume and scope, spanning virtually every branch of the subject.",
    category: "math"
  },
  {
    id: 280,
    year: "1748",
    sortYear: 1748,
    title: "Euler's Identity",
    summary: "Leonhard Euler discovered the equation e to the power of i times pi plus one equals zero, connecting the five most fundamental constants in mathematics. It is often called the most beautiful equation in mathematics.",
    detail: "Euler's identity is a special case of his more general formula relating complex exponentials to trigonometric functions: e to the ix equals cos(x) plus i times sin(x). The identity unites arithmetic (0 and 1), algebra (i), geometry (pi), and analysis (e) in a single, concise equation. It arises naturally from the Taylor series expansions of the exponential and trigonometric functions. Beyond its aesthetic appeal, Euler's formula is indispensable in electrical engineering, quantum mechanics, signal processing, and anywhere complex numbers meet periodic phenomena.",
    category: "math"
  },
  {
    id: 281,
    year: "1799",
    sortYear: 1799,
    title: "Fundamental Theorem of Algebra",
    summary: "Carl Friedrich Gauss proved that every non-constant polynomial with complex coefficients has at least one complex root. This guarantees that polynomials of degree n have exactly n roots, counted with multiplicity.",
    detail: "Gauss provided the first rigorous proof in his doctoral dissertation, though earlier attempts by d'Alembert and Euler had come close. The theorem means that the complex numbers are algebraically closed: no equation requires venturing beyond them to find solutions. Gauss himself gave four different proofs over his lifetime, reflecting the theorem's deep connections to algebra, analysis, and topology. The fundamental theorem of algebra provides the theoretical guarantee behind polynomial factoring and is foundational to fields from control theory to quantum mechanics.",
    category: "math"
  },
  {
    id: 282,
    year: "1801",
    sortYear: 1801,
    title: "Modular Arithmetic (Gauss)",
    summary: "Gauss systematized modular arithmetic in his Disquisitiones Arithmeticae, introducing congruence notation and proving the law of quadratic reciprocity. This work transformed number theory into a rigorous discipline.",
    detail: "Gauss introduced the congruence symbol and developed the theory of arithmetic modulo an integer, including the Chinese Remainder Theorem in a general form and the structure of multiplicative groups modulo primes. His proof of quadratic reciprocity, which he called the 'golden theorem,' revealed deep symmetries in how numbers behave as squares modulo primes. Disquisitiones Arithmeticae is one of the most influential mathematics books ever written. Modular arithmetic is now the foundation of modern cryptography, including RSA encryption, and is essential throughout computer science and algebra.",
    category: "math"
  },
  {
    id: 283,
    year: "1822",
    sortYear: 1822,
    title: "Fourier Analysis",
    summary: "Joseph Fourier showed that periodic functions can be decomposed into sums of sines and cosines, introducing Fourier series in his study of heat conduction. This decomposition is fundamental to modern science and engineering.",
    detail: "Fourier's claim that any function could be represented as a trigonometric series was initially controversial and required later mathematicians to specify precise conditions for convergence. His work on the heat equation introduced techniques that became standard in partial differential equations and mathematical physics. Fourier analysis is ubiquitous in modern technology: audio and image compression (MP3, JPEG), signal processing, medical imaging (MRI and CT scans), quantum mechanics, and data analysis all rely on decomposing signals into frequency components. The Fourier transform is arguably the most widely used mathematical tool in applied science.",
    category: "math"
  },
  {
    id: 284,
    year: "1826",
    sortYear: 1826,
    title: "Non-Euclidean Geometry",
    summary: "Nikolai Lobachevsky and Janos Bolyai independently discovered consistent geometries where Euclid's parallel postulate does not hold. This shattered the 2,000-year assumption that Euclidean geometry was the only possible geometry.",
    detail: "Lobachevsky published his hyperbolic geometry in 1826, and Bolyai independently arrived at similar results by 1832. In hyperbolic geometry, through a point not on a given line, infinitely many parallels can be drawn. Gauss had privately reached the same conclusions but did not publish, fearing controversy. Bernhard Riemann later developed elliptic geometry, where no parallel lines exist. Non-Euclidean geometry proved essential to Einstein's general theory of relativity, which models gravity as the curvature of spacetime. The discovery also transformed the philosophy of mathematics, showing that axiom systems are human constructions rather than absolute truths.",
    category: "math"
  },
  {
    id: 285,
    year: "1832",
    sortYear: 1832,
    title: "Group Theory (Galois)",
    summary: "Evariste Galois developed group theory to prove that polynomial equations of degree five and higher cannot generally be solved by radicals. His work, written the night before his death in a duel, founded modern abstract algebra.",
    detail: "Galois connected the solvability of a polynomial equation to the structure of its associated group of symmetries, now called the Galois group. He showed that the symmetric group on five elements is not solvable, meaning no general formula using radicals exists for quintic equations. This was a profound result: it established that some mathematical problems have provably no solution of a given type. Group theory subsequently became the language of symmetry in all branches of mathematics and physics, from crystallography to particle physics. Galois' tragically brief life ended at age twenty, but his ideas reshaped all of algebra.",
    category: "math"
  },
  {
    id: 286,
    year: "1843",
    sortYear: 1843,
    title: "Quaternions (Hamilton)",
    summary: "William Rowan Hamilton discovered quaternions, a four-dimensional extension of complex numbers, while walking along a canal in Dublin. They provided the first example of a non-commutative algebra.",
    detail: "Hamilton had spent years trying to extend complex numbers to three dimensions before realizing that four dimensions were needed, at the cost of giving up commutativity of multiplication. He famously carved the defining equations into the stone of Brougham Bridge in a flash of insight. Quaternions provide an elegant and computationally efficient way to represent rotations in three-dimensional space, avoiding the gimbal lock problem that plagues Euler angles. They are now standard in computer graphics, video game engines, robotics, and spacecraft attitude control, and they opened the door to the broader study of algebras beyond the real and complex numbers.",
    category: "math"
  },
  {
    id: 287,
    year: "1854",
    sortYear: 1854,
    title: "Boolean Algebra",
    summary: "George Boole developed an algebraic system for logical reasoning, where variables take values of true or false and are combined with AND, OR, and NOT operations. This became the mathematical foundation of digital computing.",
    detail: "Boole's Laws of Thought formalized logic as algebra, showing that logical propositions could be manipulated using rules similar to ordinary algebra. His system reduces reasoning to calculation, enabling the mechanization of logical deduction. Claude Shannon's 1937 master's thesis showed that Boolean algebra could be implemented with electrical switching circuits, directly leading to the design of digital computers. Every modern processor, from smartphones to supercomputers, implements Boolean operations in hardware. Boolean algebra also underpins database query languages, search engines, and the formal verification of software and hardware systems.",
    category: "math"
  },
  {
    id: 288,
    year: "1854",
    sortYear: 1855,
    title: "Riemannian Geometry",
    summary: "Bernhard Riemann generalized geometry to curved spaces of any number of dimensions in his landmark habilitation lecture. His framework became the mathematical language of general relativity.",
    detail: "Riemann introduced the concept of a manifold equipped with a metric tensor that defines distances and curvature at every point, allowing geometry to vary smoothly from place to place. This generalized both Euclidean and non-Euclidean geometries into a single framework. Einstein used Riemannian geometry (via its Lorentzian variant) to formulate general relativity, where mass and energy curve spacetime. Riemannian geometry is now central to differential geometry, topology, and theoretical physics, including string theory. Riemann's lecture, delivered before an audience including Gauss, is considered one of the most consequential single presentations in the history of mathematics.",
    category: "math"
  },
  {
    id: 289,
    year: "1859",
    sortYear: 1859,
    title: "Riemann Hypothesis",
    summary: "Bernhard Riemann conjectured that all non-trivial zeros of the zeta function lie on the critical line with real part one-half. This remains the most important unsolved problem in mathematics.",
    detail: "Riemann introduced the zeta function as a tool for studying the distribution of prime numbers, showing deep connections between the zeros of this complex-valued function and the pattern of primes. His hypothesis, if true, would provide the best possible estimates for how primes are distributed among the integers. Trillions of zeros have been computed and all lie on the critical line, but no proof has been found. The Riemann hypothesis is one of the seven Millennium Prize Problems, carrying a one-million-dollar reward, and its resolution would have profound implications across number theory, cryptography, and mathematical physics.",
    category: "math"
  },
  {
    id: 290,
    year: "1874",
    sortYear: 1874,
    title: "Set Theory (Cantor)",
    summary: "Georg Cantor founded set theory and proved that infinite sets come in different sizes, showing that the real numbers are 'more infinite' than the natural numbers. This revolutionized the foundations of mathematics.",
    detail: "Cantor's diagonal argument demonstrated that no list can enumerate all real numbers, proving that the cardinality of the reals exceeds that of the naturals. He developed the arithmetic of infinite cardinal and ordinal numbers and showed that there is no largest infinity. His work was fiercely opposed by contemporaries like Kronecker but ultimately became the standard foundation for all of mathematics. Set theory provides the language in which virtually all modern mathematics is expressed and led directly to the study of mathematical logic, forcing, and the independence results that revealed fundamental limitations of axiomatic systems.",
    category: "math"
  },
  {
    id: 291,
    year: "1882",
    sortYear: 1882,
    title: "Proof of Pi's Transcendence",
    summary: "Ferdinand von Lindemann proved that pi is a transcendental number, meaning it is not the root of any polynomial with rational coefficients. This resolved the ancient problem of squaring the circle.",
    detail: "The Greeks had sought for centuries to construct a square with the same area as a given circle using only compass and straightedge. Lindemann's proof, building on Charles Hermite's 1873 proof that e is transcendental, showed this construction is impossible because pi satisfies no algebraic equation. The result demonstrated that transcendental numbers, far from being exotic curiosities, include some of the most fundamental constants in mathematics. Cantor had shown that transcendental numbers vastly outnumber algebraic ones, but explicit proofs of transcendence for specific constants remain difficult and are an active area of research.",
    category: "math"
  },
  {
    id: 292,
    year: "1895",
    sortYear: 1895,
    title: "Topology (Poincare)",
    summary: "Henri Poincare founded algebraic topology with his Analysis Situs, introducing fundamental groups and homology to study properties of shapes that are preserved under continuous deformation.",
    detail: "Poincare's key insight was that important geometric properties of a space do not depend on distances or angles but on deeper structural features that survive stretching and bending. He introduced the fundamental group, which captures the essential loop structure of a space, and Betti numbers, which count its higher-dimensional 'holes.' These tools allowed mathematicians to classify surfaces and higher-dimensional spaces in powerful new ways. Topology became one of the dominant branches of 20th-century mathematics, with applications in physics (gauge theory, condensed matter), data analysis (topological data analysis), and robotics (configuration spaces).",
    category: "math"
  },
  {
    id: 293,
    year: "1931",
    sortYear: 1931,
    title: "Godel's Incompleteness Theorems",
    summary: "Kurt Godel proved that any consistent formal system powerful enough to express basic arithmetic contains true statements that cannot be proven within the system. This set fundamental limits on mathematical knowledge.",
    detail: "Godel's first incompleteness theorem shattered the Hilbert program's dream of finding a complete and consistent set of axioms for all of mathematics. His second theorem showed that such a system cannot even prove its own consistency. The proof used an ingenious self-referential construction, encoding the statement 'this statement is unprovable' within the formal system itself. These results transformed mathematical logic and the philosophy of mathematics, demonstrating that mathematical truth transcends formal proof. Godel's work also influenced computer science, particularly the theory of computability and the limits of artificial intelligence.",
    category: "math"
  },
  {
    id: 294,
    year: "1936",
    sortYear: 1936,
    title: "Turing Machines",
    summary: "Alan Turing introduced an abstract model of computation, the Turing machine, and proved that some problems are fundamentally undecidable by any algorithm. This laid the theoretical foundation for computer science.",
    detail: "Turing defined a simple device that reads and writes symbols on an infinite tape according to a table of rules, yet can compute anything that any computer can compute. He proved that the halting problem, determining whether a given program will eventually stop, is undecidable, establishing fundamental limits on what computers can achieve. The Church-Turing thesis, stating that any effectively calculable function can be computed by a Turing machine, remains a cornerstone of computer science. Turing's work, along with his crucial codebreaking at Bletchley Park and his later work on artificial intelligence, makes him one of the most important scientists of the 20th century.",
    category: "math"
  },
  {
    id: 295,
    year: "1944",
    sortYear: 1944,
    title: "Game Theory (von Neumann and Morgenstern)",
    summary: "John von Neumann and Oskar Morgenstern published Theory of Games and Economic Behavior, establishing game theory as a mathematical framework for analyzing strategic interactions.",
    detail: "Von Neumann had proven the minimax theorem for zero-sum games in 1928, but the 1944 book with Morgenstern expanded the theory to encompass cooperative games, utility theory, and economic applications. John Nash later extended this with his equilibrium concept for non-cooperative games, proving that equilibria exist in all finite games. Game theory revolutionized economics, earning multiple Nobel Prizes, and now influences political science, evolutionary biology, military strategy, and auction design. It provides the mathematical language for analyzing any situation where the outcome for each participant depends on the choices of all others.",
    category: "math"
  },
  {
    id: 296,
    year: "1945",
    sortYear: 1945,
    title: "Category Theory",
    summary: "Samuel Eilenberg and Saunders Mac Lane introduced category theory as a framework for expressing mathematical structures and their relationships through objects, morphisms, and functors.",
    detail: "Category theory arose from algebraic topology but quickly proved useful as a unifying language for all of mathematics. A category consists of objects and arrows (morphisms) between them, with composition and identity. Functors map one category to another, and natural transformations relate functors. Often called 'the mathematics of mathematics,' category theory reveals deep structural similarities between seemingly unrelated areas. It has become essential in modern algebra, logic, and theoretical computer science, where it underpins type theory, functional programming languages like Haskell, and the semantics of programming languages.",
    category: "math"
  },
  {
    id: 297,
    year: "1948",
    sortYear: 1948,
    title: "Information Theory (Shannon)",
    summary: "Claude Shannon founded information theory with his paper A Mathematical Theory of Communication, defining information in terms of entropy and establishing the theoretical limits of data compression and transmission.",
    detail: "Shannon defined the bit as the fundamental unit of information and showed that the entropy of a source quantifies its irreducible information content. His noisy channel coding theorem proved that reliable communication is possible at any rate below the channel capacity, a result that seemed almost magical to engineers at the time. Information theory provided the mathematical foundation for digital communications, data compression (ZIP, MP3, JPEG), error-correcting codes, and cryptography. Shannon's work connects deeply to thermodynamics, statistical mechanics, and machine learning, where entropy and information-theoretic measures are ubiquitous.",
    category: "math"
  },
  {
    id: 298,
    year: "1963",
    sortYear: 1963,
    title: "Chaos Theory (Lorenz)",
    summary: "Edward Lorenz discovered that simple deterministic systems can exhibit unpredictable behavior due to extreme sensitivity to initial conditions, popularly known as the butterfly effect.",
    detail: "While running a simplified weather simulation, Lorenz found that rounding an initial value from six to three decimal places produced a completely different forecast. This demonstrated that deterministic systems can be practically unpredictable, not because of randomness, but because tiny measurement errors amplify exponentially. The Lorenz attractor, a fractal structure in the system's phase space, became an icon of chaos theory. Chaos theory has since influenced meteorology, ecology, engineering, economics, and medicine, revealing that apparent randomness in nature often arises from simple underlying rules operating in sensitive dynamical systems.",
    category: "math"
  },
  {
    id: 299,
    year: "1975",
    sortYear: 1975,
    title: "Fractals (Mandelbrot)",
    summary: "Benoit Mandelbrot coined the term 'fractal' and developed fractal geometry to describe rough, self-similar shapes found throughout nature. The Mandelbrot set became one of the most recognizable images in mathematics.",
    detail: "Mandelbrot showed that many natural forms, from coastlines and mountains to blood vessels and galaxy clusters, exhibit self-similarity at different scales and have fractional dimensions. Classical geometry, with its smooth lines and surfaces, was inadequate to describe these shapes. Fractal geometry provided the mathematical language for quantifying roughness and complexity in nature. The Mandelbrot set, generated by iterating a simple quadratic function over complex numbers, reveals infinite complexity at its boundary. Fractal geometry now has applications in computer graphics, antenna design, financial modeling, medical imaging, and the analysis of complex networks.",
    category: "math"
  },
  {
    id: 300,
    year: "1994",
    sortYear: 1994,
    title: "Proof of Fermat's Last Theorem (Wiles)",
    summary: "Andrew Wiles proved Fermat's Last Theorem, confirming that no three positive integers a, b, and c satisfy a^n + b^n = c^n for any integer n greater than 2. The proof resolved a 358-year-old conjecture.",
    detail: "Wiles worked in secret for seven years, ultimately proving the theorem by establishing the modularity theorem for semistable elliptic curves, confirming a key case of the Taniyama-Shimura-Weil conjecture. The proof connected number theory to the theory of elliptic curves and modular forms in profound ways. An initial gap in the proof, discovered during peer review, was fixed by Wiles with help from Richard Taylor. The proof is considered one of the greatest achievements in 20th-century mathematics, and the modularity approach has since been extended and applied to many other problems in number theory.",
    category: "math"
  }
];
