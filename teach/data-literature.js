const LITERATURE_DATA = [
  {
    id: 301,
    year: "c. 2100 BCE",
    sortYear: -2100,
    title: "Epic of Gilgamesh",
    summary: "An ancient Mesopotamian epic poem following King Gilgamesh of Uruk on his quest for immortality. One of the earliest surviving works of literature, composed in Sumerian and later Akkadian.",
    detail: "The Epic of Gilgamesh explores themes of friendship, mortality, and the human desire to transcend death. Its account of a great flood predates and parallels the biblical story of Noah. The poem profoundly influenced subsequent literary traditions across the ancient Near East. Rediscovered in the 19th century from cuneiform tablets, it reshaped our understanding of the origins of storytelling.",
    category: "literature"
  },
  {
    id: 302,
    year: "c. 750 BCE",
    sortYear: -750,
    title: "The Iliad",
    summary: "An ancient Greek epic poem attributed to Homer, depicting the final weeks of the Trojan War centered on the wrath of Achilles. A foundational text of Western literature composed in dactylic hexameter.",
    detail: "The Iliad established many conventions of epic poetry and profoundly shaped Greek culture, education, and identity. Its exploration of heroism, honor, grief, and the futility of war remains resonant across millennia. The poem's complex characterization, particularly of Achilles and Hector, set a standard for literary depth. It served as a cornerstone of classical education and influenced virtually every subsequent epic tradition.",
    category: "literature"
  },
  {
    id: 303,
    year: "c. 725 BCE",
    sortYear: -725,
    title: "The Odyssey",
    summary: "Homer's epic poem following Odysseus on his decade-long journey home to Ithaca after the Trojan War. A tale of cunning, perseverance, and the longing for homecoming.",
    detail: "The Odyssey is the archetypal journey narrative, establishing the template for quest stories throughout Western literature. Its episodic structure, featuring encounters with Cyclops, Sirens, and the underworld, became a model for adventure fiction. The poem also offers a rich portrait of ancient Greek domestic life through the steadfast Penelope. Its themes of identity, loyalty, and the tension between wandering and belonging continue to inspire writers worldwide.",
    category: "literature"
  },
  {
    id: 304,
    year: "c. 375 BCE",
    sortYear: -375,
    title: "The Republic",
    summary: "A Socratic dialogue by Plato exploring justice, the ideal state, and the nature of the philosopher-king. Written as a series of conversations led by Socrates with various Athenian intellectuals.",
    detail: "The Republic is one of the most influential works of philosophy ever written, laying groundwork for Western political theory and ethics. Its Allegory of the Cave remains one of the most widely taught philosophical concepts. Plato's vision of a just society governed by reason shaped centuries of political thought from Roman governance to Enlightenment ideals. The work also addresses education, art, and the nature of reality, making it a cornerstone of the liberal arts tradition.",
    category: "literature"
  },
  {
    id: 305,
    year: "19 BCE",
    sortYear: -19,
    title: "The Aeneid",
    summary: "A Latin epic poem by Virgil telling the story of Aeneas, a Trojan hero who travels to Italy and becomes an ancestor of the Romans. Commissioned to celebrate Rome's imperial destiny.",
    detail: "The Aeneid provided Rome with a national epic linking its origins to the legendary fall of Troy. Virgil synthesized Homeric tradition with Roman values of duty, piety, and civic responsibility. The poem's depiction of Aeneas's tormented love affair with Dido became one of literature's great tragic romances. Left unfinished at Virgil's death, it nonetheless became the central text of Latin literary education for centuries.",
    category: "literature"
  },
  {
    id: 306,
    year: "c. 850",
    sortYear: 850,
    title: "One Thousand and One Nights",
    summary: "A collection of Middle Eastern folk tales compiled over centuries, framed by the story of Scheherazade who tells nightly stories to delay her execution. Features tales of Aladdin, Sinbad, and Ali Baba.",
    detail: "One Thousand and One Nights is one of the most influential story collections in world literature, pioneering the frame narrative technique. Its tales blending fantasy, romance, and adventure introduced Western readers to a rich tradition of Arabic and Persian storytelling. The collection profoundly influenced European literature from the 18th century onward, shaping genres from fairy tales to magical realism. Its nested narrative structure remains a model for experimental fiction.",
    category: "literature"
  },
  {
    id: 307,
    year: "c. 1010",
    sortYear: 1010,
    title: "The Tale of Genji",
    summary: "Written by Murasaki Shikibu, a lady-in-waiting at the Japanese imperial court, this work follows the life and romantic adventures of Prince Genji. Widely considered the world's first novel.",
    detail: "The Tale of Genji pioneered psychological realism and interior characterization centuries before these techniques appeared in Western literature. Its nuanced portrayal of courtly life, transient beauty, and emotional complexity set the standard for Japanese aesthetics. The novel's exploration of mono no aware, the pathos of things, became a defining concept in Japanese culture. It remains a towering achievement that demonstrates the universality of literary art across civilizations.",
    category: "literature"
  },
  {
    id: 308,
    year: "c. 1320",
    sortYear: 1320,
    title: "The Divine Comedy",
    summary: "An epic poem by Dante Alighieri narrating the author's allegorical journey through Hell, Purgatory, and Paradise. Written in Italian tercets, it is a masterpiece of medieval literature and theology.",
    detail: "The Divine Comedy established Italian as a literary language and created a comprehensive vision of the medieval Christian afterlife that shaped Western imagination for centuries. Dante's vivid depictions of damnation and salvation drew on classical philosophy, Christian theology, and contemporary politics. The poem's intricate structure and symbolic density make it one of the most studied works in literary history. Its influence extends from Renaissance art to modern literature, with writers from T.S. Eliot to Jorge Luis Borges acknowledging their debt to Dante.",
    category: "literature"
  },
  {
    id: 309,
    year: "c. 1387",
    sortYear: 1387,
    title: "The Canterbury Tales",
    summary: "A collection of stories by Geoffrey Chaucer told by a group of pilgrims traveling to Canterbury Cathedral. Written in Middle English, it presents a vivid cross-section of medieval English society.",
    detail: "The Canterbury Tales helped establish English as a legitimate literary language at a time when French and Latin dominated written culture. Chaucer's diverse cast of characters, from a bawdy miller to a pious nun, created one of the earliest panoramic portraits of a society. The work pioneered the use of vernacular English in serious literature and influenced the development of English prose and poetry. Though left unfinished, it remains a foundational text of the English literary canon.",
    category: "literature"
  },
  {
    id: 310,
    year: "1603",
    sortYear: 1603,
    title: "Hamlet",
    summary: "A tragedy by William Shakespeare about Prince Hamlet of Denmark, who seeks to avenge his father's murder by his uncle Claudius. A profound exploration of indecision, madness, and mortality.",
    detail: "Hamlet is arguably the most famous play ever written, and its protagonist is literature's most analyzed character. Shakespeare's exploration of consciousness, grief, and the paralysis of overthinking created a new depth of psychological portraiture. The play's soliloquies, particularly 'To be, or not to be,' have become touchstones of Western culture. Its themes of political corruption, familial betrayal, and existential doubt continue to resonate with audiences and inspire adaptations worldwide.",
    category: "literature"
  },
  {
    id: 311,
    year: "1605",
    sortYear: 1605,
    title: "Don Quixote",
    summary: "A novel by Miguel de Cervantes about an aging gentleman who loses his sanity reading chivalric romances and sets out as a self-styled knight-errant. Often called the first modern novel.",
    detail: "Don Quixote invented the modern novel by blending realism with satire, creating a self-aware narrative that questions the nature of fiction itself. Cervantes's portrayal of the gap between idealism and reality established one of literature's most enduring themes. The novel's influence is immeasurable, shaping the development of prose fiction across Europe and the Americas. Its central characters, the dreaming Quixote and the pragmatic Sancho Panza, have become universal archetypes of human aspiration and common sense.",
    category: "literature"
  },
  {
    id: 312,
    year: "1667",
    sortYear: 1667,
    title: "Paradise Lost",
    summary: "An epic poem by John Milton retelling the biblical story of the Fall of Man, from Satan's rebellion to Adam and Eve's expulsion from Eden. Written in majestic blank verse.",
    detail: "Paradise Lost is the greatest epic poem in the English language, reimagining biblical narrative with the grandeur of classical epic. Milton's complex, charismatic portrayal of Satan as a tragic rebel became one of literature's most debated characterizations. The poem's exploration of free will, obedience, and the nature of evil influenced theology and philosophy as much as literature. Its language and imagery permeate English-language writing, from the Romantic poets to contemporary science fiction.",
    category: "literature"
  },
  {
    id: 313,
    year: "1719",
    sortYear: 1719,
    title: "Robinson Crusoe",
    summary: "A novel by Daniel Defoe about a castaway who spends 28 years on a remote tropical island, building a life through ingenuity and resourcefulness. Often credited as the first English novel.",
    detail: "Robinson Crusoe established the castaway survival narrative and became a foundational text of the English novel. Defoe's detailed realism and first-person narration created a new standard for prose fiction. The novel reflects Enlightenment ideals of individualism, self-reliance, and the conquest of nature, while also raising questions about colonialism and cultural encounter. It has been continuously adapted and reinterpreted for over three centuries.",
    category: "literature"
  },
  {
    id: 314,
    year: "1726",
    sortYear: 1726,
    title: "Gulliver's Travels",
    summary: "A satirical novel by Jonathan Swift following Lemuel Gulliver's voyages to fantastical lands including Lilliput and Brobdingnag. A biting critique of human nature, politics, and society.",
    detail: "Gulliver's Travels is one of the sharpest satires in the English language, using fantastic voyages to expose the absurdities of human institutions and behavior. Swift's escalating misanthropy across the four voyages builds to a devastating critique of humanity itself. The novel operates on multiple levels, delighting children with its adventure while offering adults a corrosive commentary on politics, science, and morality. It remains a masterwork of irony and a touchstone for satirical writing.",
    category: "literature"
  },
  {
    id: 315,
    year: "1813",
    sortYear: 1813,
    title: "Pride and Prejudice",
    summary: "A novel by Jane Austen following Elizabeth Bennet and Mr. Darcy as they overcome mutual misunderstandings and social obstacles to find love. A comedy of manners set in Regency-era England.",
    detail: "Pride and Prejudice perfected the novel of manners, combining sharp social observation with a deeply satisfying romantic narrative. Austen's wit, irony, and psychological insight created characters that feel remarkably modern despite their Regency setting. Elizabeth Bennet became one of literature's most beloved heroines, embodying intelligence, independence, and moral clarity. The novel's exploration of class, marriage, and personal growth continues to captivate readers and inspire countless adaptations.",
    category: "literature"
  },
  {
    id: 316,
    year: "1818",
    sortYear: 1818,
    title: "Frankenstein",
    summary: "A Gothic novel by Mary Shelley about Victor Frankenstein, a scientist who creates a sentient creature from dead tissue, only to be horrified by his creation. Subtitled 'The Modern Prometheus.'",
    detail: "Frankenstein is widely regarded as the first science fiction novel, raising questions about scientific responsibility and the ethics of creation that grow more relevant with each technological advance. Shelley, only 18 when she began writing it, created an enduring myth about the dangers of unchecked ambition. The novel's themes of alienation, the quest for acceptance, and the consequences of playing God have permeated popular culture. It remains a foundational text for discussions of technology, artificial life, and moral accountability.",
    category: "literature"
  },
  {
    id: 317,
    year: "1847",
    sortYear: 1847,
    title: "Jane Eyre",
    summary: "A novel by Charlotte Bronte following the orphaned Jane Eyre from her harsh childhood through her career as a governess and her passionate, complicated love for Mr. Rochester.",
    detail: "Jane Eyre revolutionized the English novel with its first-person narration by a plain, fiercely independent heroine who insists on her own dignity and equality. Bronte's blend of Gothic atmosphere, social criticism, and psychological depth created a new template for women's fiction. The novel's famous declaration, 'Reader, I married him,' remains one of literature's most iconic moments. Its exploration of class, gender, morality, and self-respect continues to resonate as a landmark of feminist literature.",
    category: "literature"
  },
  {
    id: 318,
    year: "1851",
    sortYear: 1851,
    title: "Moby-Dick",
    summary: "A novel by Herman Melville narrating Captain Ahab's obsessive quest to kill the white whale Moby Dick, told through the eyes of sailor Ishmael. An epic exploration of obsession and nature.",
    detail: "Moby-Dick was a commercial failure upon publication but is now considered one of the greatest American novels ever written. Melville's ambitious blend of adventure narrative, philosophical meditation, and encyclopedic detail on whaling created a uniquely American epic. The novel's themes of monomaniacal obsession, humanity's confrontation with nature, and the limits of knowledge give it a scope matched by few works of fiction. Its opening line, 'Call me Ishmael,' is among the most recognized in literature.",
    category: "literature"
  },
  {
    id: 319,
    year: "1859",
    sortYear: 1859,
    title: "A Tale of Two Cities",
    summary: "A historical novel by Charles Dickens set during the French Revolution, following characters caught between London and Paris. Famous for its themes of sacrifice, resurrection, and social justice.",
    detail: "A Tale of Two Cities is the best-selling novel of all time, with over 200 million copies sold. Dickens masterfully interweaves personal drama with the upheaval of the French Revolution, creating a sweeping narrative about justice and redemption. Sydney Carton's final sacrifice remains one of the most moving moments in English fiction. The novel's opening line, 'It was the best of times, it was the worst of times,' has become a universal expression for an era of contradiction.",
    category: "literature"
  },
  {
    id: 320,
    year: "1866",
    sortYear: 1866,
    title: "Crime and Punishment",
    summary: "A novel by Fyodor Dostoevsky about Raskolnikov, a destitute former student in St. Petersburg who murders a pawnbroker and struggles with guilt and moral reckoning. A psychological masterpiece.",
    detail: "Crime and Punishment pioneered the psychological novel, plunging readers into the tormented mind of a man who believes himself above moral law. Dostoevsky's relentless examination of guilt, redemption, and the limits of rational ideology created a new standard for literary depth. The novel challenged utilitarian philosophy and explored the spiritual consequences of nihilism. Its influence on existentialism, psychoanalysis, and the modern novel is profound and enduring.",
    category: "literature"
  },
  {
    id: 321,
    year: "1869",
    sortYear: 1869,
    title: "War and Peace",
    summary: "A novel by Leo Tolstoy chronicling five Russian aristocratic families during the Napoleonic Wars, blending intimate family drama with sweeping historical narrative. Often called the greatest novel ever written.",
    detail: "War and Peace redefined the scope of the novel, seamlessly integrating historical events, philosophical essays, and deeply personal stories across a vast canvas. Tolstoy's portrayal of Russian society during the Napoleonic invasion combined meticulous realism with profound reflections on fate, free will, and the forces that drive history. The novel's characters, particularly Natasha Rostova and Pierre Bezukhov, are among the most fully realized in all of literature. Its ambition and achievement remain the standard against which epic fiction is measured.",
    category: "literature"
  },
  {
    id: 322,
    year: "1877",
    sortYear: 1877,
    title: "Anna Karenina",
    summary: "A novel by Leo Tolstoy following the tragic affair between the married aristocrat Anna Karenina and Count Vronsky in imperial Russia. A panoramic study of love, family, and society.",
    detail: "Anna Karenina is often considered the greatest realist novel, praised by writers from Dostoevsky to Faulkner for its psychological insight and structural perfection. Tolstoy juxtaposes Anna's doomed passion with Levin's search for meaning, creating a dual narrative that explores every facet of Russian society. The novel's famous opening line, 'Happy families are all alike; every unhappy family is unhappy in its own way,' encapsulates its thematic reach. Its unflinching portrayal of a woman destroyed by social hypocrisy remains devastatingly powerful.",
    category: "literature"
  },
  {
    id: 323,
    year: "1880",
    sortYear: 1880,
    title: "The Brothers Karamazov",
    summary: "Fyodor Dostoevsky's final novel, following the three Karamazov brothers entangled in their father's murder. A philosophical drama exploring faith, doubt, morality, and free will.",
    detail: "The Brothers Karamazov is Dostoevsky's crowning achievement, weaving a gripping murder mystery with some of the most profound philosophical and theological debates in literature. The chapters on the Grand Inquisitor and the Elder Zosima represent literature's deepest engagement with questions of God, suffering, and human freedom. Each brother embodies a different response to existence, from Dmitri's passion to Ivan's intellect to Alyosha's faith. Sigmund Freud called it the most magnificent novel ever written.",
    category: "literature"
  },
  {
    id: 324,
    year: "1884",
    sortYear: 1884,
    title: "Adventures of Huckleberry Finn",
    summary: "A novel by Mark Twain following Huck Finn and the escaped slave Jim as they raft down the Mississippi River. A picaresque tale of freedom, friendship, and moral awakening in antebellum America.",
    detail: "Adventures of Huckleberry Finn is often called the Great American Novel for its revolutionary use of vernacular language and its unflinching confrontation with racism and hypocrisy. Twain's decision to have Huck choose loyalty to Jim over the social norms of slavery was a radical moral statement. Ernest Hemingway declared that all modern American literature comes from this one book. Its blend of humor, social criticism, and lyrical prose about the American landscape set the template for American fiction.",
    category: "literature"
  },
  {
    id: 325,
    year: "1890",
    sortYear: 1890,
    title: "The Picture of Dorian Gray",
    summary: "Oscar Wilde's only novel, about a beautiful young man whose portrait ages and decays while he remains youthful, indulging in a life of hedonism and moral corruption.",
    detail: "The Picture of Dorian Gray is a Gothic masterpiece that explores the relationship between beauty, art, and morality with Wilde's characteristic wit and philosophical depth. The novel scandalized Victorian society upon publication and was used as evidence against Wilde in his criminal trial. Its examination of the double life, the corruption beneath a beautiful surface, and the price of aestheticism without ethics remains provocative. The novel's central conceit has become one of literature's most enduring metaphors.",
    category: "literature"
  },
  {
    id: 326,
    year: "1899",
    sortYear: 1899,
    title: "Heart of Darkness",
    summary: "A novella by Joseph Conrad following Marlow's journey up the Congo River to find the enigmatic ivory trader Kurtz. A harrowing exploration of colonialism, human darkness, and moral ambiguity.",
    detail: "Heart of Darkness is one of the most debated works in the English canon, offering a searing critique of European imperialism while itself being criticized for its representation of Africa. Conrad's layered narrative technique and symbolic density influenced the development of literary modernism. Kurtz's dying words, 'The horror! The horror!' became a cultural shorthand for encountering the abyss of human nature. The novella inspired Francis Ford Coppola's Apocalypse Now and continues to provoke discussion about literature, race, and empire.",
    category: "literature"
  },
  {
    id: 327,
    year: "1913",
    sortYear: 1913,
    title: "In Search of Lost Time",
    summary: "A seven-volume novel by Marcel Proust, beginning with Swann's Way, exploring memory, time, art, and society through the narrator's recollections of his life in late 19th-century France.",
    detail: "In Search of Lost Time is widely regarded as the supreme achievement of 20th-century fiction, transforming the novel into an instrument for capturing the texture of consciousness and memory. Proust's famous madeleine episode established involuntary memory as a literary concept that influenced philosophy and psychology. The work's extraordinary length and intricacy create an immersive portrait of a vanishing aristocratic world. Its prose style, marked by labyrinthine sentences of breathtaking precision, redefined what the novel form could accomplish.",
    category: "literature"
  },
  {
    id: 328,
    year: "1922",
    sortYear: 1922,
    title: "Ulysses",
    summary: "A novel by James Joyce following Leopold Bloom through a single day in Dublin, June 16, 1904, paralleling Homer's Odyssey. A landmark of literary modernism and experimental prose.",
    detail: "Ulysses revolutionized the novel with its stream-of-consciousness technique, encyclopedic scope, and linguistic virtuosity. Joyce compressed the epic journey into the mundane events of an ordinary day, finding heroism and beauty in everyday life. Each chapter employs a different literary style, making the novel a compendium of English prose techniques. Banned for obscenity upon publication, it is now routinely placed at or near the top of lists of the greatest novels of the 20th century.",
    category: "literature"
  },
  {
    id: 329,
    year: "1925",
    sortYear: 1925,
    title: "The Great Gatsby",
    summary: "A novel by F. Scott Fitzgerald about the mysterious millionaire Jay Gatsby and his doomed pursuit of Daisy Buchanan in Jazz Age New York. A meditation on the American Dream and its corruption.",
    detail: "The Great Gatsby is the definitive novel of the Jazz Age and one of the great American novels, distilling the promise and disillusionment of the American Dream into a slim, perfectly constructed narrative. Fitzgerald's lyrical prose and symbolic imagery, particularly the green light at the end of Daisy's dock, have become iconic. The novel was only modestly successful during Fitzgerald's lifetime but was rediscovered after World War II and became a staple of American education. Its critique of wealth, class, and the impossibility of recapturing the past remains timeless.",
    category: "literature"
  },
  {
    id: 330,
    year: "1925",
    sortYear: 1925,
    title: "Mrs Dalloway",
    summary: "A novel by Virginia Woolf following Clarissa Dalloway through a single day in post-World War I London as she prepares for an evening party. A pioneering work of stream-of-consciousness fiction.",
    detail: "Mrs Dalloway perfected the stream-of-consciousness technique, weaving seamlessly between characters' inner lives to create a rich portrait of post-war London society. Woolf's innovative narrative method, moving fluidly through time and between minds, influenced generations of writers. The novel's parallel story of the shell-shocked veteran Septimus Warren Smith offers a devastating commentary on war's psychological toll. Its exploration of time, memory, identity, and the tension between social performance and inner life makes it a cornerstone of literary modernism.",
    category: "literature"
  },
  {
    id: 331,
    year: "1926",
    sortYear: 1926,
    title: "The Sun Also Rises",
    summary: "Ernest Hemingway's debut novel following a group of disillusioned American and British expatriates who travel from Paris to Pamplona for the running of the bulls. A defining work of the Lost Generation.",
    detail: "The Sun Also Rises established Hemingway's spare, understated prose style that would transform American fiction. The novel captured the aimlessness and disillusionment of the post-World War I generation with remarkable precision and restraint. Its depiction of expatriate life in 1920s Europe became the defining portrait of the Lost Generation. Hemingway's iceberg theory of writing, showing only the surface while implying depths beneath, made this novel a masterclass in literary economy.",
    category: "literature"
  },
  {
    id: 332,
    year: "1929",
    sortYear: 1929,
    title: "The Sound and the Fury",
    summary: "A novel by William Faulkner telling the decline of the Compson family in the American South through four distinct narrators, including the intellectually disabled Benjy. A tour de force of modernist fiction.",
    detail: "The Sound and the Fury pushed the boundaries of narrative technique further than almost any American novel, employing multiple unreliable narrators, fractured chronology, and stream of consciousness to devastating effect. Faulkner's portrait of a crumbling Southern aristocratic family became a microcosm for the decline of the Old South. The novel's difficulty and ambition established Faulkner as a titan of modernist literature and contributed to his Nobel Prize. Its influence on Southern literature and experimental fiction remains immense.",
    category: "literature"
  },
  {
    id: 333,
    year: "1932",
    sortYear: 1932,
    title: "Brave New World",
    summary: "A dystopian novel by Aldous Huxley depicting a future society engineered for stability through genetic manipulation, conditioning, and the pleasure drug soma. A chilling vision of totalitarianism through comfort.",
    detail: "Brave New World offered a counterpoint to Orwell's vision of authoritarian control, warning instead that humanity might be enslaved by its own desire for pleasure and convenience. Huxley's eerily prescient depictions of genetic engineering, mass consumerism, and the pharmaceutical management of happiness feel increasingly relevant. The novel challenged readers to consider whether freedom and truth are worth the price of suffering. It remains one of the essential dystopian novels, perpetually debated alongside 1984 as the more accurate prophecy.",
    category: "literature"
  },
  {
    id: 334,
    year: "1939",
    sortYear: 1939,
    title: "The Grapes of Wrath",
    summary: "A novel by John Steinbeck following the Joad family as they flee the Oklahoma Dust Bowl and migrate to California seeking work and dignity. A searing portrait of poverty and resilience during the Great Depression.",
    detail: "The Grapes of Wrath is one of the most powerful social protest novels ever written, exposing the exploitation of migrant workers with a combination of journalistic detail and biblical grandeur. Steinbeck's novel provoked national outrage and contributed to reforms in labor policy. It won both the Pulitzer Prize and was cited when Steinbeck received the Nobel Prize in Literature. The novel's alternating narrative structure, interweaving the Joads' story with panoramic chapters on the broader migration, was a bold structural innovation.",
    category: "literature"
  },
  {
    id: 335,
    year: "1942",
    sortYear: 1942,
    title: "The Stranger",
    summary: "A novel by Albert Camus about Meursault, an emotionally detached Frenchman in Algeria who commits a senseless murder and faces trial. A foundational text of existentialist and absurdist literature.",
    detail: "The Stranger distilled Camus's philosophy of the absurd into a spare, unsettling narrative that challenged conventional morality and meaning. Meursault's refusal to perform expected emotions, even at his mother's funeral, exposed the arbitrary social codes that govern human behavior. The novel's flat, almost journalistic prose style was revolutionary, stripping away literary ornamentation to confront the reader with existential nakedness. It became one of the most widely read and discussed novels of the 20th century and cemented Camus's reputation alongside his Nobel Prize.",
    category: "literature"
  },
  {
    id: 336,
    year: "1949",
    sortYear: 1949,
    title: "1984",
    summary: "A dystopian novel by George Orwell set in a totalitarian superstate ruled by Big Brother, where independent thought is a crime. A chilling exploration of surveillance, propaganda, and the destruction of truth.",
    detail: "1984 created the vocabulary of modern political discourse, introducing concepts like Big Brother, doublethink, Newspeak, and thoughtcrime into everyday language. Orwell's depiction of a regime that controls reality itself through the manipulation of language and history remains the definitive literary warning against totalitarianism. The novel's influence extends far beyond literature into political debate, technology criticism, and civil liberties discourse. Its relevance surges with every new development in government surveillance and media manipulation.",
    category: "literature"
  },
  {
    id: 337,
    year: "1951",
    sortYear: 1951,
    title: "The Catcher in the Rye",
    summary: "A novel by J.D. Salinger narrated by Holden Caulfield, a disaffected teenager recounting his experiences in New York City after being expelled from prep school. A defining portrait of adolescent alienation.",
    detail: "The Catcher in the Rye captured the voice of teenage disillusionment with an authenticity that made it both beloved and controversial. Holden Caulfield's contempt for 'phoniness' and his desperate desire to protect childhood innocence resonated with generations of young readers. The novel was frequently banned for its language and themes, which only increased its cultural impact. Salinger's masterful first-person narration influenced countless coming-of-age stories and established the alienated youth as a literary archetype.",
    category: "literature"
  },
  {
    id: 338,
    year: "1952",
    sortYear: 1952,
    title: "Invisible Man",
    summary: "A novel by Ralph Ellison about an unnamed African American man navigating racism and identity in mid-20th-century America. A landmark exploration of Black experience, invisibility, and selfhood.",
    detail: "Invisible Man is one of the most important American novels of the 20th century, using surrealism, symbolism, and jazz-influenced prose to depict the dehumanizing effects of racism. Ellison's unnamed narrator moves from the Jim Crow South to Harlem, encountering exploitation from both white and Black institutions. The novel's central metaphor of social invisibility remains one of literature's most powerful articulations of racial experience. It won the National Book Award in 1953 and continues to be essential reading on race in America.",
    category: "literature"
  },
  {
    id: 339,
    year: "1954",
    sortYear: 1954,
    title: "Lord of the Flies",
    summary: "A novel by William Golding about a group of British schoolboys stranded on an uninhabited island who descend into savagery. An allegorical exploration of civilization, power, and innate human evil.",
    detail: "Lord of the Flies challenged the optimistic tradition of island adventure stories by revealing the darkness beneath civilized behavior. Golding's allegory of boys reverting to tribalism and violence became a powerful parable about the fragility of social order. The novel introduced enduring symbols like the conch shell of democracy and the beast within. It is one of the most widely taught novels in English-language education and remains a provocative statement about human nature.",
    category: "literature"
  },
  {
    id: 340,
    year: "1955",
    sortYear: 1955,
    title: "Lolita",
    summary: "A novel by Vladimir Nabokov narrated by Humbert Humbert, a European intellectual obsessed with a twelve-year-old American girl he calls Lolita. A controversial masterpiece of unreliable narration.",
    detail: "Lolita is one of the most brilliantly written and morally challenging novels in the English language, using gorgeous prose to expose the self-deceptions of a predator. Nabokov's virtuosic command of English, remarkable for a non-native speaker, produced some of the most dazzling sentences in 20th-century fiction. The novel demands that readers resist the seductions of its narrator's rhetoric, making it a profound meditation on the power and danger of language. Initially rejected by American publishers, it became one of the century's most discussed and influential novels.",
    category: "literature"
  },
  {
    id: 341,
    year: "1957",
    sortYear: 1957,
    title: "On the Road",
    summary: "A novel by Jack Kerouac based on his cross-country travels with Neal Cassady and other Beat Generation figures. A freewheeling celebration of jazz, poetry, and the search for authentic experience.",
    detail: "On the Road became the manifesto of the Beat Generation, capturing the restless energy of postwar American youth seeking meaning outside mainstream culture. Kerouac's spontaneous prose style, inspired by jazz improvisation, broke with conventional literary form and influenced songwriters, poets, and novelists. The novel's celebration of freedom, movement, and nonconformity anticipated the counterculture of the 1960s. It remains a touchstone for anyone drawn to the romance of the open road and the rejection of conventional life.",
    category: "literature"
  },
  {
    id: 342,
    year: "1958",
    sortYear: 1958,
    title: "Things Fall Apart",
    summary: "A novel by Chinua Achebe depicting the life of Okonkwo, an Igbo leader in pre-colonial Nigeria, and the devastating impact of British colonialism on his community. The founding text of modern African literature.",
    detail: "Things Fall Apart revolutionized world literature by telling the story of colonialism from an African perspective, directly challenging the narratives of Conrad and other European writers. Achebe's clear, precise prose gave Western readers access to the complexity and richness of Igbo culture before its disruption by missionaries and colonial administrators. The novel has been translated into over 50 languages and is the most widely read African novel ever written. It established that African writers could command the global literary stage on their own terms.",
    category: "literature"
  },
  {
    id: 343,
    year: "1960",
    sortYear: 1960,
    title: "To Kill a Mockingbird",
    summary: "A novel by Harper Lee set in Depression-era Alabama, narrated by young Scout Finch as her father, lawyer Atticus Finch, defends a Black man falsely accused of rape. A beloved story of justice and moral courage.",
    detail: "To Kill a Mockingbird became an instant classic and one of the most widely read American novels, winning the Pulitzer Prize and shaping generations' understanding of racial injustice. Atticus Finch emerged as an iconic figure of moral integrity, inspiring countless people to pursue careers in law and social justice. Lee's warm, humorous child narrator made complex themes of racism, class, and courage accessible to young readers. The novel remains a cornerstone of American education and a powerful argument for empathy and moral courage.",
    category: "literature"
  },
  {
    id: 344,
    year: "1961",
    sortYear: 1961,
    title: "Catch-22",
    summary: "A satirical novel by Joseph Heller set among U.S. Army Air Corps bombardiers in World War II, centered on Captain Yossarian's desperate attempts to survive the insanity of war. A darkly comic anti-war masterpiece.",
    detail: "Catch-22 introduced its title into the English language as a term for any absurd, no-win situation, and its impact on both literature and popular culture has been enormous. Heller's nonlinear, repetitive narrative structure mirrored the absurdity and trauma of war itself. The novel's black humor and satirical treatment of bureaucracy, authority, and the military-industrial complex resonated powerfully during the Vietnam era. It redefined the war novel, replacing heroic narratives with a vision of war as institutional madness.",
    category: "literature"
  },
  {
    id: 345,
    year: "1967",
    sortYear: 1967,
    title: "One Hundred Years of Solitude",
    summary: "A novel by Gabriel Garcia Marquez chronicling seven generations of the Buendia family in the fictional Colombian town of Macondo. The masterpiece of magical realism.",
    detail: "One Hundred Years of Solitude redefined what the novel could do, blending the fantastical and the mundane so seamlessly that magical realism became a global literary movement. Garcia Marquez used the Buendia family saga as an allegory for the history of Latin America, capturing cycles of revolution, exploitation, and solitude. The novel's lush, hypnotic prose and circular structure created an immersive reading experience unlike anything before it. It was the central work cited when Garcia Marquez received the Nobel Prize in Literature in 1982.",
    category: "literature"
  },
  {
    id: 346,
    year: "1969",
    sortYear: 1969,
    title: "Slaughterhouse-Five",
    summary: "A novel by Kurt Vonnegut blending science fiction and autobiography to recount the firebombing of Dresden through Billy Pilgrim, a man who becomes 'unstuck in time.' An anti-war classic.",
    detail: "Slaughterhouse-Five drew on Vonnegut's own experience as a prisoner of war who survived the firebombing of Dresden to create one of the most original anti-war novels ever written. The novel's fragmented, time-jumping structure captured the disorienting effects of trauma with dark humor and compassion. Its famous refrain, 'So it goes,' following every mention of death, became a cultural touchstone for stoic acceptance of life's horrors. The novel's blend of science fiction and autobiography opened new possibilities for how war stories could be told.",
    category: "literature"
  },
  {
    id: 347,
    year: "1982",
    sortYear: 1982,
    title: "The Color Purple",
    summary: "An epistolary novel by Alice Walker following Celie, a poor Black woman in the rural American South who endures abuse and discovers self-worth through love and community. Winner of the Pulitzer Prize.",
    detail: "The Color Purple gave voice to Black women's experiences with a directness and emotional power that transformed American literature. Walker's use of Celie's vernacular dialect in her letters to God created an intimate, deeply moving narrative. The novel's themes of sisterhood, resilience, sexual identity, and spiritual awakening broke new ground in its unflinching portrayal of domestic abuse and its celebration of Black women's strength. It won both the Pulitzer Prize and the National Book Award and was adapted into a celebrated film and Broadway musical.",
    category: "literature"
  },
  {
    id: 348,
    year: "1985",
    sortYear: 1985,
    title: "The Handmaid's Tale",
    summary: "A dystopian novel by Margaret Atwood set in the theocratic Republic of Gilead, where women are subjugated and fertile women are forced into reproductive servitude. A chilling feminist warning.",
    detail: "The Handmaid's Tale drew on historical precedents to create a terrifyingly plausible dystopia where women's rights are stripped away under religious authoritarianism. Atwood's restrained, precise prose made the horror more effective by grounding it in the mundane details of daily oppression. The novel became a rallying symbol for feminist and reproductive rights movements, with its red-cloaked handmaids appearing at political protests worldwide. Its cultural relevance surged in the 21st century through a critically acclaimed television adaptation and its sequel, The Testaments.",
    category: "literature"
  },
  {
    id: 349,
    year: "1987",
    sortYear: 1987,
    title: "Beloved",
    summary: "A novel by Toni Morrison about Sethe, a formerly enslaved woman in post-Civil War Ohio haunted by the ghost of her dead daughter. A searing exploration of slavery's psychological legacy.",
    detail: "Beloved is widely considered Toni Morrison's masterpiece, confronting the trauma of slavery with a narrative power that earned her the Pulitzer Prize and contributed to her Nobel Prize in Literature. Morrison's use of fragmented narrative and supernatural elements captured the way trauma disrupts memory and identity. The novel insisted that the full horror of slavery, including the impossible choices it forced upon mothers, be acknowledged rather than forgotten. It was voted the best American novel of the past 25 years in a 2006 New York Times survey of prominent writers and critics.",
    category: "literature"
  },
  {
    id: 350,
    year: "1997",
    sortYear: 1997,
    title: "Harry Potter and the Philosopher's Stone",
    summary: "A fantasy novel by J.K. Rowling following Harry Potter, an orphaned boy who discovers he is a wizard and begins his education at Hogwarts School of Witchcraft and Wizardry. The start of a global phenomenon.",
    detail: "Harry Potter and the Philosopher's Stone launched the best-selling book series in history, with over 600 million copies sold worldwide across seven volumes. Rowling's richly imagined magical world and compelling coming-of-age narrative reignited a global passion for reading, particularly among young people. The series spawned a massive multimedia franchise and fundamentally changed children's publishing. Beyond its commercial impact, the story's themes of love, sacrifice, prejudice, and the choice between right and easy resonated across cultures and generations.",
    category: "literature"
  }
];
