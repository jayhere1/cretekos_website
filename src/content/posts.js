// Blog content system for CreteKos — Greek olive oil brand exporting to India
// Categories, posts, and helper functions

export const categories = [
  { id: 'all', name: 'All' },
  {
    id: 'health',
    name: 'Health & Wellness',
    description:
      'Discover the science-backed health benefits of Greek extra virgin olive oil and how it complements traditional Indian wellness practices.',
  },
  {
    id: 'recipes',
    name: 'Indian Recipes',
    description:
      'Authentic Indian recipes reimagined with the rich, fruity notes of Cretan extra virgin olive oil.',
  },
  {
    id: 'heritage',
    name: 'Greek Heritage',
    description:
      'Stories from the ancient olive groves of Crete — 4,000 years of tradition in every bottle.',
  },
  {
    id: 'kitchen-tips',
    name: 'Indian Kitchen Tips',
    description:
      'Practical tips for integrating Greek EVOO into everyday Indian cooking, from tadka to tawa.',
  },
];

export const posts = [
  // ── Post 1: Health ──────────────────────────────────────────────────
  {
    slug: 'polyphenols-greek-olive-oil-indian-diets',
    title: 'Why Polyphenols in Greek Olive Oil Are a Superfood for Indian Diets',
    category: 'health',
    categoryLabel: 'Health & Wellness',
    excerpt:
      'Greek extra virgin olive oil is one of the richest natural sources of polyphenols — powerful antioxidants that combat inflammation, support heart health, and pair beautifully with the spice-forward flavours of Indian cuisine.',
    date: '2026-03-28',
    author: 'Dr. Meera Iyer',
    readTime: '6 min read',
    content: `
      <p>If you have ever wondered what makes Greek olive oil taste peppery at the back of your throat, the answer is polyphenols — a family of bioactive compounds that scientists now consider among the most potent antioxidants in the human diet. Cretan extra virgin olive oil, in particular, contains some of the highest polyphenol concentrations recorded anywhere in the Mediterranean, often exceeding 500 mg/kg. For Indian households already accustomed to turmeric, black pepper, and other anti-inflammatory staples, adding EVOO to the daily routine is a natural, synergistic upgrade.</p>

      <h3>What Polyphenols Actually Do</h3>
      <p>Polyphenols such as oleocanthal, hydroxytyrosol, and oleuropein work at the cellular level. Oleocanthal shares the same anti-inflammatory pathway as ibuprofen, inhibiting the COX-1 and COX-2 enzymes responsible for pain and swelling. Hydroxytyrosol is a free-radical scavenger that protects LDL cholesterol from oxidation — a critical step in the development of atherosclerosis. For a population where cardiovascular disease is the leading cause of mortality, these benefits are not academic; they are urgent. Studies from the European Food Safety Authority (EFSA) confirm that consuming at least 20 g of high-polyphenol olive oil per day contributes to the protection of blood lipids from oxidative stress.</p>

      <h3>Synergy with Indian Spices</h3>
      <p>Here is where things get exciting for the Indian kitchen. Curcumin, the active compound in turmeric, is famously poorly absorbed on its own. Piperine in black pepper improves absorption by up to 2,000%, and the healthy fats in olive oil further enhance bioavailability by enabling curcumin to dissolve into a lipid matrix the body can absorb. A simple drizzle of Cretan EVOO over a turmeric-laced dal or sabzi is not just flavour — it is a delivery mechanism. Similarly, the polyphenols in olive oil complement the quercetin in onions and the allicin in garlic, amplifying antioxidant capacity across the entire meal.</p>

      <h3>Practical Tips for Indian Households</h3>
      <p>You do not need to overhaul your diet. Start by replacing refined oils in cold preparations — salad dressings, raita drizzles, chutney finishes — with a high-quality Greek EVOO. Use it as a finishing oil on dals, khichdi, and steamed rice. For light sauteing below 180 degrees Celsius (the smoke point of good EVOO), it performs beautifully for tadka and quick stir-fries. The goal is consistency: two tablespoons a day, every day, and let the polyphenols do their quiet, powerful work.</p>
    `,
  },

  // ── Post 2: Recipes ─────────────────────────────────────────────────
  {
    slug: 'perfect-tadka-extra-virgin-olive-oil',
    title: 'The Perfect Tadka: Using Extra Virgin Olive Oil for Tempering Spices',
    category: 'recipes',
    categoryLabel: 'Indian Recipes',
    excerpt:
      'Tadka is the soul of Indian cooking — that sizzling moment when whole spices hit hot fat and release their essential oils. Here is how to make it work beautifully with Greek extra virgin olive oil.',
    date: '2026-03-21',
    author: 'Chef Arjun Menon',
    readTime: '5 min read',
    content: `
      <p>Every Indian cook knows the sound: mustard seeds crackling in hot oil, curry leaves releasing their fragrance, cumin seeds darkening to a deep amber. This is tadka (also called chaunk or baghar), and it is the flavour foundation of countless dishes from dal to sambar to upma. Traditionally made with ghee, coconut oil, or refined vegetable oils, tadka is a perfect candidate for Greek extra virgin olive oil — if you understand a few key principles.</p>

      <h3>Temperature Is Everything</h3>
      <p>The smoke point of high-quality EVOO sits around 190-210 degrees Celsius, which is more than sufficient for tadka. The secret is to heat the oil gently. Pour two tablespoons of CreteKos EVOO into a small pan over medium heat. Wait until the surface shimmers — roughly 30 seconds — then add your whole spices. Mustard seeds should pop within 5-8 seconds; if they take longer, your oil is not hot enough; if they pop instantly and burn, dial back the flame. The fruity, slightly peppery character of Cretan oil adds a new dimension that ghee alone cannot provide, especially with earthy spices like fenugreek and asafoetida.</p>

      <h3>A Classic Dal Tadka with EVOO</h3>
      <p>Cook one cup of toor dal until soft and mash lightly. In a separate small pan, heat three tablespoons of CreteKos EVOO over medium flame. Add one teaspoon of mustard seeds and wait for them to crackle. Follow with one teaspoon of cumin seeds, a pinch of asafoetida, two dried red chillies broken in half, and 8-10 fresh curry leaves. Stir for 15 seconds until the curry leaves are crisp and the cumin is golden. Add one finely chopped onion, sauteing until translucent, then one chopped tomato, half a teaspoon of turmeric, and salt to taste. Cook until the tomato breaks down, then pour this sizzling tadka directly over the cooked dal. Finish with a squeeze of lemon and a final drizzle of raw EVOO for brightness.</p>

      <h3>Why It Works</h3>
      <p>Spice compounds like cinnamaldehyde, eugenol, and cuminaldehyde are fat-soluble — they dissolve into oil far more readily than into water. When you temper spices in EVOO, you are creating a concentrated flavour extract that distributes evenly through the dish. The monounsaturated fats in olive oil are also more chemically stable than the polyunsaturated fats in sunflower or soybean oil, meaning fewer harmful aldehydes form during heating. The result is not only a more flavourful tadka but a healthier one. Once you taste dal finished with Cretan olive oil, the grassy-peppery notes layered over cumin and curry leaf, you will not want to go back.</p>
    `,
  },

  // ── Post 3: Heritage ────────────────────────────────────────────────
  {
    slug: '4000-years-cretan-olive-oil-history',
    title: '4,000 Years of Cretan Olive Oil: A History',
    category: 'heritage',
    categoryLabel: 'Greek Heritage',
    excerpt:
      'Long before the Parthenon was built, Cretan farmers were pressing olives into liquid gold. The island of Crete is home to some of the oldest olive trees on Earth — and a tradition that continues unbroken to this day.',
    date: '2026-03-14',
    author: 'Nikos Papadakis',
    readTime: '7 min read',
    content: `
      <p>On the sun-baked hillsides of western Crete, in the village of Vouves, there stands an olive tree whose gnarled trunk measures over 12 metres in circumference. Carbon dating and tree-ring analysis suggest it is between 3,000 and 5,000 years old — one of the oldest living trees on the planet. It still produces olives. This single tree embodies a truth about Crete: olive oil is not an industry here; it is an identity. The Minoans, Europe's first great civilisation, built their economy around it. Clay tablets from the palace of Knossos, inscribed in the Linear B script around 1450 BCE, record meticulous inventories of olive oil — quantities stored, distributed, offered to the gods. For the Minoans, olive oil was currency, medicine, cosmetic, and sacrament.</p>

      <h3>From Minoans to Modernity</h3>
      <p>When the Minoan civilisation fell, the olive groves endured. The Greeks of the Classical period considered olive oil a gift from Athena herself — the goddess who won patronage of Athens by striking her spear into rock and producing an olive tree. In Crete, the tradition was even older and deeper. Through centuries of Byzantine rule, Venetian occupation, and Ottoman control, Cretan families maintained their groves, passing knowledge from generation to generation. The terraced hillsides of the Lefka Ori mountains, the red-soiled valleys of Messara, and the rocky slopes of Sitia are all landscapes shaped by millennia of cultivation. Today, Crete produces roughly 35% of all Greek olive oil — and Greece is the third-largest olive oil producer in the world. Per capita, Cretans consume more olive oil than any other population on Earth: over 30 litres per person per year.</p>

      <h3>The Koroneiki Olive</h3>
      <p>The dominant cultivar on Crete is the Koroneiki, a small, resilient olive that yields an oil of extraordinary character. Koroneiki olives are high in oleic acid and polyphenols, producing an EVOO with a fruity nose, a complex mid-palate of green almond and artichoke, and a distinctive peppery finish. The island's unique terroir — hot, dry summers; mild, rainy winters; mineral-rich soil; and constant sea breezes — concentrates these flavours in ways that other growing regions struggle to replicate. Every bottle of CreteKos carries this terroir: the specific sunlight, soil, and centuries of knowledge baked into each harvest.</p>

      <h3>A Bridge Between Civilisations</h3>
      <p>It is no accident that both Greek and Indian civilisations have ancient, unbroken traditions of honouring food as medicine. The Greeks had Hippocrates; India had Charaka. Both cultures understood that what you eat shapes who you become. When a bottle of Cretan olive oil arrives at an Indian table, it carries 4,000 years of Mediterranean wisdom — and finds a home in a culture that has always believed the same. CreteKos is not just a product; it is a conversation between two of the world's oldest food traditions.</p>
    `,
  },

  // ── Post 4: Kitchen Tips ────────────────────────────────────────────
  {
    slug: '5-indian-dishes-better-with-greek-evoo',
    title: '5 Indian Dishes That Taste Better with Greek EVOO',
    category: 'kitchen-tips',
    categoryLabel: 'Indian Kitchen Tips',
    excerpt:
      'From creamy dal makhani to crispy dosa, these five everyday Indian dishes gain new depth and a health upgrade when you swap in Greek extra virgin olive oil.',
    date: '2026-03-07',
    author: 'Priya Sharma',
    readTime: '5 min read',
    content: `
      <p>Switching to a new cooking oil can feel daunting, especially in a cuisine as precise and tradition-rich as Indian cooking. The good news is that Greek extra virgin olive oil does not require you to change your recipes — it enhances them. The fruity, herbaceous notes of Cretan EVOO complement Indian spices in ways that neutral refined oils simply cannot. Here are five dishes where the swap makes the biggest difference.</p>

      <h3>1. Dal Tadka</h3>
      <p>The finishing tadka — that sizzle of cumin, mustard seeds, and curry leaves — is where EVOO truly shines. The oil carries spice flavours beautifully while adding a subtle peppery undertone that elevates humble yellow dal into something restaurant-worthy. Finish with a raw drizzle for extra depth.</p>

      <h3>2. Palak Paneer</h3>
      <p>Spinach and olive oil are a classic Mediterranean pairing, and they work just as well in an Indian context. Use EVOO to saute the onion-ginger-garlic base and to finish the dish. The grassy notes of the oil harmonise with the iron-rich earthiness of the spinach, and the healthy fats help your body absorb the fat-soluble vitamins A and K in the greens.</p>

      <h3>3. Poha</h3>
      <p>This Maharashtrian breakfast staple is typically made with peanut or sunflower oil. Try it with two tablespoons of EVOO instead. The flattened rice absorbs the oil's fruity flavour, and the crunch of peanuts and curry leaves stays exactly the same. Add a squeeze of lime at the end for a dish that tastes bright, clean, and unmistakably Indian.</p>

      <h3>4. Chana Masala</h3>
      <p>Chickpeas and olive oil are a pairing as old as the Mediterranean itself — think hummus. In a North Indian chana masala, EVOO adds body to the tomato-onion gravy and rounds out the heat of the garam masala. The key is to use it both for cooking the base and as a finishing drizzle after the dish comes off the heat.</p>

      <h3>5. Idli with Coconut Chutney</h3>
      <p>This might surprise you, but a light drizzle of EVOO over steamed idlis — alongside your usual coconut chutney and sambar — adds a luxurious richness without overpowering the delicate fermented flavour. Think of it as the South Indian equivalent of butter on toast. The olive oil's polyphenols also aid digestion, making this already-healthy breakfast even better for you.</p>
    `,
  },

  // ── Post 5: Health ──────────────────────────────────────────────────
  {
    slug: 'mediterranean-diet-meets-ayurveda',
    title: 'Mediterranean Diet Meets Ayurveda: The Shared Wisdom',
    category: 'health',
    categoryLabel: 'Health & Wellness',
    excerpt:
      'Two ancient wellness traditions, separated by thousands of kilometres but united by a common belief: that food is the first medicine. Here is what the Mediterranean diet and Ayurveda have in common.',
    date: '2026-02-28',
    author: 'Dr. Meera Iyer',
    readTime: '7 min read',
    content: `
      <p>In the 5th century BCE, Hippocrates wrote: "Let food be thy medicine and medicine be thy food." Around the same time, on the other side of the ancient world, the Ayurvedic text Charaka Samhita declared: "When diet is wrong, medicine is of no use; when diet is correct, medicine is of no need." These two traditions never exchanged a single manuscript, yet they arrived at strikingly similar conclusions about the relationship between food and health. Today, as modern science validates both systems, the convergence is more relevant than ever — and olive oil sits at the heart of it.</p>

      <h3>Shared Principles</h3>
      <p>Both the Mediterranean diet and Ayurveda emphasise whole, minimally processed foods. Both prize seasonal eating, believing that the body's needs shift with the calendar. Both treat cooking fats not as an afterthought but as a central pillar of nutrition — ghee in Ayurveda, olive oil in the Mediterranean. Both systems also share a deep respect for digestive fire: Ayurveda calls it <em>agni</em>; the Greeks spoke of <em>pepsis</em>, the body's innate ability to transform food into vitality. In both traditions, the quality of your cooking fat directly affects the strength of that fire.</p>

      <h3>Olive Oil Through an Ayurvedic Lens</h3>
      <p>Ayurveda classifies foods by their effect on the three doshas — Vata, Pitta, and Kapha. Olive oil, with its warm but not hot energy, its unctuous texture, and its light digestibility, is considered balancing for all three doshas when used in moderation. It pacifies Vata's dryness, does not aggravate Pitta's heat the way mustard oil can, and is light enough to avoid increasing Kapha. In Ayurvedic external therapy, olive oil has long been used for <em>abhyanga</em> (self-massage) and <em>nasya</em> (nasal oil application). Its internal use as a cooking medium is a natural extension of this tradition.</p>

      <h3>The Science Catches Up</h3>
      <p>The landmark PREDIMED study, published in the New England Journal of Medicine, followed over 7,000 participants and demonstrated that a Mediterranean diet supplemented with extra virgin olive oil reduced cardiovascular events by 30% compared to a low-fat diet. Parallel research in India has shown that Ayurvedic dietary principles — emphasis on whole grains, legumes, vegetables, healthy fats, and spices — produce measurably lower rates of metabolic syndrome. When you combine the two approaches — Indian spices and cooking techniques with Greek EVOO as your primary fat — you are not choosing between traditions. You are inheriting the best of both.</p>

      <h3>A Daily Practice</h3>
      <p>Start your morning with warm water, lemon, and a teaspoon of EVOO — a practice that both a Greek grandmother and an Ayurvedic practitioner would approve of. Use EVOO in your cooking throughout the day, and finish your evening meal with a simple salad dressed in olive oil, lemon, and a pinch of chaat masala. Small, consistent habits compound over time. Two tablespoons a day. Every day. The ancients knew it. The science confirms it. Your body will thank you.</p>
    `,
  },

  // ── Post 6: Recipes ─────────────────────────────────────────────────
  {
    slug: 'olive-oil-naan-herbed-raita-fusion-recipe',
    title: 'Olive Oil Naan & Herbed Raita: A Greek-Indian Fusion Recipe',
    category: 'recipes',
    categoryLabel: 'Indian Recipes',
    excerpt:
      'Soft, pillowy naan brushed with Cretan EVOO and served alongside a raita infused with oregano and dill — this recipe is where Athens meets Amritsar.',
    date: '2026-02-21',
    author: 'Chef Arjun Menon',
    readTime: '6 min read',
    content: `
      <p>Naan is one of the most beloved breads in Indian cuisine — soft, slightly charred, and impossibly satisfying when torn and dipped into a rich curry. Traditionally, it is brushed with melted butter or ghee straight off the tandoor. But what happens when you replace that butter with a generous brush of fruity Greek extra virgin olive oil? You get a naan that is lighter, more aromatic, and carries a subtle herbaceous note that pairs beautifully with a Mediterranean-inspired raita. This is fusion cooking at its most honest: two ancient food traditions meeting on a single plate.</p>

      <h3>Olive Oil Naan</h3>
      <p><strong>Ingredients:</strong> 2 cups all-purpose flour (maida), 1 teaspoon sugar, 1 teaspoon salt, 1/2 teaspoon baking powder, 1/4 teaspoon baking soda, 3 tablespoons CreteKos EVOO (plus more for brushing), 1/4 cup warm milk, 1/4 cup yoghurt, nigella seeds (kalonji) for topping. <strong>Method:</strong> Combine the dry ingredients, then mix in the EVOO, warm milk, and yoghurt to form a soft dough. Knead for 5-7 minutes until smooth and elastic. Cover and rest for two hours. Divide into 6 portions, roll each into an oval shape, sprinkle with nigella seeds, and press gently. Cook on a smoking-hot tawa or cast-iron skillet for 90 seconds per side, or until charred spots appear. Brush immediately with a generous amount of EVOO and a light sprinkle of flaky sea salt.</p>

      <h3>Greek-Indian Herbed Raita</h3>
      <p><strong>Ingredients:</strong> 1 cup thick Greek yoghurt (or hung curd), 1/2 cucumber — grated and squeezed dry, 1 tablespoon fresh dill — finely chopped, 1 tablespoon fresh mint — finely chopped, 1/2 teaspoon dried oregano, 1 small green chilli — minced, 1/2 teaspoon roasted cumin powder, salt to taste, 2 tablespoons CreteKos EVOO, a squeeze of lemon. <strong>Method:</strong> Whisk the yoghurt until smooth. Fold in the cucumber, herbs, chilli, cumin, and salt. Drizzle the EVOO over the top and finish with a squeeze of lemon. Let it rest in the refrigerator for 15 minutes before serving — this allows the oregano and dill to infuse the yoghurt.</p>

      <h3>The Fusion Philosophy</h3>
      <p>This pairing works because it respects both traditions without diluting either. The naan is unmistakably Indian — the nigella seeds, the charred bubbles, the soft chew. The raita borrows from tzatziki's playbook — cucumber, dill, good olive oil — while keeping its feet planted firmly in the Indian tradition of cooling yoghurt accompaniments. Serve alongside a slow-cooked lamb rogan josh or a simple chana masala, and you have a meal that feels both familiar and excitingly new. This is what CreteKos is about: not replacing Indian food culture, but enriching it with the best of what Crete has to offer.</p>
    `,
  },
];

// ── Helper Functions ──────────────────────────────────────────────────

/**
 * Find a single blog post by its URL slug.
 * @param {string} slug
 * @returns {object|null}
 */
export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Return all posts that belong to a given category.
 * @param {string} categoryId — one of 'health', 'recipes', 'heritage', 'kitchen-tips'
 * @returns {object[]}
 */
export function getPostsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return posts;
  return posts.filter((post) => post.category === categoryId);
}
