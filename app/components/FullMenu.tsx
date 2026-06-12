"use client";

import { useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  description?: string;
  note?: string;
};

type MenuCategory = {
  category: string;
  items: MenuItem[];
  subtext?: string;
};

const menuData: MenuCategory[] = [
  {
    category: "Small Appetite",
    items: [
      { name: "Soft-Shell Crab", price: "21", description: "Crisp fried crab with chilli lemon + garlic sauce, 4 pieces." },
      { name: "Crying Tiger", price: "21", description: "Grass-fed sirloin steak 200g with chilli tamarind sauce. Medium rare." },
      { name: "Salt & Pepper Squid", price: "19", description: "With sweet peanut chilli sauce and garlic mayo." },
      { name: "Grilled Pork", price: "17", description: "Marinated pork scotch with chilli tamarind sauce, 4 skewers." },
      { name: "Chicken Satay", price: "17", description: "Marinated grilled chicken thigh with peanut sauce, 4 skewers." },
      { name: "Fried Chicken with Bones", price: "17", description: "With fried shallot and sweet chilli sauce, 6 pieces." },
      { name: "Pork & Prawn Dim Sum", price: "16", description: "With caviar, sweet soya and chilli oil, 4 pieces." },
      { name: "Crispy Chicken", price: "16", description: "Battered boneless chicken 200g with honey-soy and peanut." },
      { name: "Fresh Roll Chicken", price: "14", description: "With beansprout, pineapple, cucumber and tangy peanut relish, 4 pieces." },
      { name: "Curry Puff", price: "14", description: "Minced chicken, kumara and onion with sweet chilli sauce, 4 pieces." },
      { name: "Spring Roll", price: "14", description: "Vermicelli, celery, cabbage and carrot with plum sauce, 4 pieces." },
    ],
  },
  {
    category: "To Share",
    items: [
      { name: "Deep-Fried Snapper", price: "44", description: "Crisp-fried deboned snapper 1kg with wok-fried market greens. Choice of sauce: chilli, tamarind, or garlic + pepper." },
      { name: "Grilled Steak Green Curry", price: "35", description: "Grass-fed sirloin with beans, basil, eggplant, bamboo and roti. Medium rare." },
      { name: "Slow Cooked Beef Cheek", price: "33", description: "Massaman curry with potatoes, onion, fried shallot and peanut." },
      { name: "Drunken Spicy Duck", price: "32", description: "Sautéed duck breast with basil, chilli, market greens and onion." },
      { name: "Pork Prik Khing", price: "30", description: "Pork belly sautéed with beans, carrot, red curry and smoked chilli jam." },
      { name: "Chicken Macadamia", price: "30", description: "Crispy chicken sautéed with house sweet chilli and market greens." },
      { name: "Chicken Mango Curry", price: "30", description: "Red curry sweetened with mango purée, onion, tomatoes and roti." },
      { name: "Spicy Basil", price: "28 / 30", description: "Fresh basil wok-fried with chilli, garlic and fried egg over rice.", note: "Choice: minced chicken, minced beef or pork bellies +$2." },
      { name: "Nua Rod Ded", price: "28", description: "Sizzling beef with house sweet chilli and market greens." },
      { name: "Sweet 'N' Sour Chicken", price: "28", description: "Crispy chicken sautéed with tomatoes, cucumber, pineapple and onions." },
      { name: "Kua Gling", price: "28 / 33", description: "Southern curry paste wok-fried with makrut leaf and chilli.", note: "Choice: minced chicken, minced beef or sirloin steak +$5." },
    ],
  },
  {
    category: "Salad",
    items: [
      { name: "Papaya Salad", price: "28", description: "Smashed with lemon, chilli, green beans, tomatoes and peanut.", note: "Add-on: crisp-fried soft shell crab +$10. Optional: Thai anchovy / Pala." },
      { name: "Steak Salad", price: "30", description: "Sirloin steak tossed with tangy kale salad, chilli jam, herbs and cucumber." },
      { name: "Steak Nam Tok", price: "30", description: "Sirloin steak tossed with tangy herbs salad, chilli and rice powder." },
      { name: "Larb Chicken", price: "28", description: "Minced chicken tossed with tangy herbs salad, chilli and rice powder." },
    ],
  },
  {
    category: "Curry / Wok / Noodles",
    subtext: "Protein: Tofu/Chicken/Beef $28 • Braised Beef/Prawns $30 • Duck $32 • Seafood $33",
    items: [
      { name: "Cashew Nut", price: "VAR", description: "Wok-fried with chilli jam, broccoli, carrot, shiitake mushroom and onions." },
      { name: "Praram", price: "VAR", description: "Sautéed broccoli, bok choy and green beans topped with peanut sauce." },
      { name: "Pad Thai", price: "VAR", description: "Rice noodle wok-fried with egg, chive, beansprout, tofu and peanut." },
      { name: "Pad Khee Mao", price: "VAR", description: "Fresh flat rice noodle wok-fried with basil, chilli, market greens and broccoli." },
      { name: "Pad See Eew", price: "VAR", description: "Fresh flat rice noodle wok-fried with egg, market greens and broccoli." },
      { name: "Pineapple Fried Rice", price: "VAR", description: "With curry powder, egg, cashew, broccoli, spring onion and onion." },
      { name: "Thai Fried Rice", price: "VAR", description: "With egg, broccoli, diced carrot, spring onion and onion." },
      { name: "Red Curry", price: "VAR", description: "With pumpkin, carrot, green beans, bok choy and broccoli." },
      { name: "Panang Curry", price: "VAR", description: "With pumpkin, bok choy, green beans, carrot and peanuts." },
      { name: "Tom Yum or Tom Kha Soup", price: "VAR", description: "Hot and sour soup with chilli jam, herbs, onions, shiitake mushroom and tomatoes." },
    ],
  },
  {
    category: "Sides & Sweet",
    items: [
      { name: "Wok-Fried Market Greens", price: "15" },
      { name: "Thai Omelette", price: "12.50" },
      { name: "Spicy Cashew + Herbs", price: "12.50" },
      { name: "Roti Flatbread (2pc)", price: "8" },
      { name: "Peanut Sauce", price: "7" },
      { name: "Sticky Rice", price: "5.50" },
      { name: "Jasmine Rice", price: "4.50" },
      { name: "Croffle", price: "16", description: "Ice cream, Nutella, banana, almond and Oreo." },
      { name: "Deep-Fried Ice Cream", price: "16", description: "With pandan drizzle and Oreo." },
      { name: "Sweetened Sticky Rice", price: "14", description: "With coconut ice cream and pandan drizzle." },
    ],
  },
];

export default function FullMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="full-menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="section-tag mb-4 block">Full Experience</span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary font-medium italic">
            The Menu
          </h2>
          <div className="h-px w-24 bg-accent mx-auto mt-6" />
        </div>

        {/* Tabs — wrap layout (no horizontal scroll, reliable on iOS) */}
        <div className="flex flex-wrap gap-2 mb-12 lg:mb-16 justify-start lg:justify-center">
          {menuData.map((cat, index) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveTab(index)}
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
              className={`px-5 py-2.5 text-[0.62rem] font-black uppercase tracking-widest border rounded-full cursor-pointer select-none active:scale-95 active:opacity-70 transition-colors duration-150 ${
                activeTab === index
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white border-[#EAEAEA] text-[#70685C]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {menuData[activeTab].subtext && (
            <div className="text-center mb-12">
              <p className="inline-block bg-[#F7F3EE] py-2 px-6 text-[0.7rem] font-black uppercase tracking-widest text-[#70685C]">
                {menuData[activeTab].subtext}
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {menuData[activeTab].items.map((item) => (
              <div key={item.name} className="border-b border-[#EAEAEA] pb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl text-[#111111] font-medium leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-[#111111] font-bold ml-4">
                    {item.price === "VAR" ? "—" : `$${item.price}`}
                  </span>
                </div>
                {item.description && (
                  <p className="text-[#70685C] text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
