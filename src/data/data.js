import {americano, amore, capuccinovienesse, greekCappuccino, latte, latteMacchiato, doubleEspresso, espressoDelight, espressoFrappe, espressoLungo, fredoEspresso, vodkaEspresso, chocolatewave, macchiato, mugaccino, marocchino, tiramisuEspresso, dripCoffee, irishCoffee, meltingSnow, person1, person2, person3, person4, person5, person6, person7, person8, person9, person10} from '../assets'


export const data = [
  {
    id: 1,
    img: espressoLungo,
    name: 'Espresso Lungo',
    price: 12.0,
    water: 'hot water',
    ingredients:
      '1/4 oz (7 g) ground espresso coffee, pod or capsule. Hot water.  ',
    prepare:
      'You can follow the classic method, using your espresso machine as usual with a capsule, pod or ground coffee. You will have to make sure however, to extend the extraction to 35 seconds: this way, you will have about 30 ml (2 tbsp) of coffee in the cup.',
    description:
      'When it is slightly lengthened, espresso is a pleasure to be enjoyed slowly. Strong and passionate like a story, this coffee has a special way of unfolding in the cup, with an abundance of unique qualities.',
    category: 'hot',
  },

  {
    id: 2,
    img: macchiato,
    name: 'Macchiato',
    price: 10.0,
    water: 'hot water',
    ingredients: '1 tbsp plus 1 or 2 tsp (20-25 ml) espresso ',
    prepare:
      'Prepare the espresso in a small cup. Foam the milk in the pitcher, using your espresso machines steam wand. Pour the foam onto the espresso, filling the cup almost to the brim.',
    description:
      'This espresso gives into a delicate indulgence, making it the perfect choice to finish off a pleasant break or start out the day with an extra edge. The velvety foam is a short, exquisite prelude to the intense flavor of the coffee - the right balance between the power of espresso and the delicacy of milk',
    category: 'hot',
  },

  {
    id: 3,
    img: dripCoffee,
    name: 'Drip Coffee',
    price: 8.0,
    water: 'hot water',
    ingredients: '7-8 grams (about a tablespoon) of ground coffee ',
    prepare:
      'Warm up the coffee pot for a few minutes, filling it with hot water. Use 7-8 grams (about a tablespoon) of ground coffee. Add water and coffee to machine. Remove from heat and pour into thermal carafe (if you don’t brew directly into one) to keep the coffee warm and fragrant.',
    description:
      'Call it American coffee. Call it filter coffee. By any name, brewed, filtered coffee is by far the most popular preparation method throughout the U.S. and Northern Europe, alive with aroma and rich taste.  The method’s origins can be traced to early 20th-century Germany and the advent of paper filters.',
    category: 'hot',
  },
  {
    id: 4,
    img: amore,
    name: 'Amore',
    price: 18.0,
    water: 'hot water',
    ingredients:
      'Approx. 3 tbsp (45-50 ml) espresso. Approx. 3 tbsp (40 ml) amaretto liqueur. Fresh heavy cream. 2 coffee beans ',
    prepare:
      'Prepare two espresso in a cappuccino cup. Pour the liqueur into the glass and heat it with your espresso machine’s steam wand. Take care to not overheat it, as this would change its aromas. Add the espresso to the liqueur',
    description:
      'An encounter between a double espresso and the sweet personality of amaretto liqueur, including a dense layer of shaken cream. It is no coincidence that this hot, intense, aromatic drink, with a romantic soul, is called Amore.',
    category: 'cocktails',
  },
  {
    id: 5,
    img: irishCoffee,
    name: 'Irish Coffee',
    price: 15.0,
    water: 'hot water',
    ingredients:
      '2 shots illy espresso. Approx. 3 tbsp (40 ml) Irish whiskey. 1 tsp (5 g) cane sugar. Approx. 3 tbsp (40 ml) fresh heavy cream. 2 coffee beans. ',
    prepare:
      'Prepare two espresso into a cappuccino cup. Pour the whiskey and the cane sugar into a serving glass, heating it with the steam wand of your espresso machine. Add the coffee to the glass of warmed whiskey. Shake the cream, which should be very cold, in the mini shaker until it becomes quite thick.',
    description:
      'A classic born in Ireland and celebrated all over the world for its combination of coffee and Irish whiskey. A delicate layer of thick but not overly-whipped cream tempers the strength of this cocktail, and completes its perfection.',
    category: 'cocktails',
  },
  {
    id: 6,
    img: mugaccino,
    name: 'Mugaccino',
    price: 10.0,
    water: 'hot water',
    ingredients: '2 shots illy espresso. 2/3 cup (150 ml) fresh whole milk ',
    prepare:
      'Prepare two espresso into a cup or pour pitcher and then add to a coffee mug. Froth the milk in a steaming pitcher, using the steam wand of your espresso machine',
    description:
      " 'Less is more' doesn’t apply to the Mugaccino, a maxi-version of the caffelatte that likes to think big. Served in a coffee mug, this is a double espresso with as much foam as you like for a full cup of satisfaction.",
    category: 'hot',
  },
  {
    id: 7,
    img: latte,
    name: 'Latte',
    price: 10.0,
    water: 'hot water',
    ingredients: '2 shots illy espresso. 1 cup whole milk (240 ml) ',
    prepare:
      'Prepare 2 shots of espresso into a small cup or pour pitcher. Pour into a serving glass. Steam and froth the milk in a steaming pitcher, taking care not to let it foam too much as it needs to stay on the liquid side. Pour the milk. Top with a thin layer of froth',
    description:
      ' A coffeehouse favorite that blends deliciously with flavored syrups.',
    category: 'hot',
  },
  {
    id: 8,
    img: espressoFrappe,
    name: 'Espresso Frappe',
    price: 14.0,
    water: 'cold water',
    ingredients:
      '3 tbsp. (40-50 ml) espresso. 1 tbsp plus 1 tsp (20 ml) liquid sugar. 5-6 ice cubes ',
    prepare:
      'Chill the 2/3 cup (150 ml) glass. Prepare two espressos in a cappuccino cup. Put the ice cubes, liquid sugar and two espressos, which are added as the last ingredient, into the blender. Blend for 30 seconds, until it thickens into a frappe. Pour into the glass.',
    description:
      ' A delicious drink that conquers at first glance: an inviting, velvety iced foam prepared on the spot. This milk-free beverage is a light, soft version of the frappe made with just espresso, a few ice cubes and a little sugar',
    category: 'cold',
  },
  {
    id: 9,
    img: fredoEspresso,
    name: 'Fredo Espresso Shaken',
    price: 18.0,
    water: 'cold water',
    ingredients:
      '3 tbsp. (40-50 ml) espresso. 2 tsp (10 ml) liquid sugar. Ice cubes. ',
    prepare:
      'Chill the glass. Prepare two espressos in a cappuccino cup. Put the ice cubes, liquid sugar and two espressos, which are added as the last ingredient, into the Boston shaker. Shake vigorously and pour into the chilled glass, filtering the ice with a strainer.',
    description:
      ' This recipe is a cold and refreshing espresso drink, perfect from those warm summer days. Prepared in a shaker with sugar and a few ice cubes, the espresso acquires an irresistible soft cream. A delight to be sipped during a relaxing break.  Enjoy with a biscotti or two.',
    category: 'cold',
  },
  {
    id: 10,
    img: vodkaEspresso,
    name: 'Vodka Espresso',
    price: 18.0,
    water: 'hot water',
    ingredients:
      '25 ml of espresso. 10 ml of liquid sugar. 10 ml of coffee liqueur. 20 ml of white vodka. Ice cubes ',
    prepare:
      'Prepare the espresso in the cup. Add the liquid sugar, coffee liqueur, white vodka and, finally, the espresso. Cool by mixing the ingredients with the mixing spoon. Pour the mixture into the glass together with some ice cubes and serve.',
    description:
      ' Vodka in this cold cocktail meets espresso: the two discover they like each other a lot and together they willingly abandon themselves to the creaminess of the coffee liqueur, creating a perfect harmony of flavors.',
    category: 'cocktails',
  },
  {
    id: 11,
    img: doubleEspresso,
    name: 'Double Espresso',
    price: 10.0,
    water: 'hot water',
    ingredients: '40-50 ml espresso. ',
    prepare: 'Prepare two espresso in a cappuccino cup and serve.',
    description: 'Double Espresso ',
    category: 'hot',
  },
  {
    id: 12,
    img: espressoDelight,
    name: 'Espresso Delight',
    price: 18.0,
    water: 'hot water',
    ingredients:
      '1 TBSP plus 2 TSP (25 ml) of espresso. 2 TBSP (30 ml) of hot chocolate. Liquid sugar. 1 TBSP plus 1 TSP (20 ml) of coffee liqueur. Approx. 3 TBSP (40 ml) of heavy cream ',
    prepare:
      'Prepare the espresso in a small cup. Prepare the hot chocolate in the pitcher. Sweeten it with some liquid sugar to taste. Pour the hot chocolate, espresso, and liqueur into a glass. Shake the cream in a shaker. Gently rest the cream on the surface of the cocktail, making it run down the back of the mixing spoon, and serve.',
    description:
      'With its pure white decadence, the shaken cream hides under a delectable layer of chocolate and coffee, to which a touch of alcohol adds a cheeky touch. The taste of espresso is enhanced by the aromatic notes of liqueur that accompanies it. ',
    category: 'cocktails',
  },
  {
    id: 13,
    img: greekCappuccino,
    name: 'Greek Cappuccino',
    price: 12.0,
    water: 'cold water',
    ingredients:
      '1 shot illy espresso. 2 tsp liquid sugar (10 ml). 4 Tbsp skim milk (60 ml). 4-5 ice cubes. ',
    prepare:
      'Chill an 8 oz ( 240 ml) glass. Prepare the espresso into a small pour pitcher. Place the ice cubes, liquid sugar, skim milk and espresso in a blender. Blend for no more than 5 seconds and pour into the glass',
    description:
      'A shower of crushed ice makes this drink a lighter version of a traditional iced cappuccino. ',
    category: 'cold',
  },
  {
    id: 14,
    img: tiramisuEspresso,
    name: 'Tiramisu Espresso',
    price: 20.0,
    water: 'cold water',
    ingredients:
      '2 shots illy espresso. 1 scoop vanilla ice cream or gelato. 2 ladyfingers, crumbled. Unsweetened cocoa powder ',
    prepare:
      'Prepare 2 shots espresso into a small pour pitcher. Place ice cream or gelato, ladyfingers and espresso in a blender. Blend 20-30 seconds until thick, with a frappé texture. Pour into a decorative glass and top with a dusting of cocoa powder.',
    description:
      'A drinkable version of a favorite Italian dessert, perfect at the end of a meal or as a rich and tasty treat.',
    category: 'cold',
  },
  {
    id: 15,
    img: latteMacchiato,
    name: 'Latte Macchiato',
    price: 12.0,
    water: 'hot water',
    ingredients:
      '1 shot illy espresso. 1/3 cup plus 2 tsp whole milk (90 ml). ',
    prepare:
      'Prepare the espresso in a small cup or pour pitcher. Foam the milk in a steaming pitcher, and pour it into a decorative glass. Add the espresso to the glass',
    description:
      'A warm embrace between soft, foamy milk and the richness of espresso. ',
    category: 'hot',
  },
  {
    id: 16,
    img: capuccinovienesse,
    name: 'Cappuccino Vienesse',
    price: 14.0,
    water: 'hot water',
    ingredients:
      '1 shot illy Espresso. Fresh cold whole milk. 3 oz heavy cream (90 ml). Cocoa powder. cream topping ',
    prepare:
      'Prepare espresso directly into a cappuccino cup. Steam and froth the milk in a steaming pitcher using the steam wand of your espresso machine. Pour milk directly over coffee until it is about 1/2 inch (1.5 cm) from the top. Whip the heavy cream in a small bowl or mixing cup until it is thick. Top the coffee with whipped cream and dust lightly with cocoa powder.',
    description:
      'A traditional coffeehouse favorite marked by its generous whipped cream topping. ',
    category: 'hot',
  },
  {
    id: 17,
    img: marocchino,
    name: 'Marocchino',
    price: 16.0,
    water: 'hot water',
    ingredients:
      '1 shot illy espresso. 2-3 tsp (10-15 ml) hot chocolate. 1 scant oz (25 ml) fresh whole milk. Cocoa powder. ',
    prepare:
      'Prepare the hot chocolate in a small pitcher and pour it into the serving glass. Prepare the espresso directly into the same glass, adding it to the hot chocolate. Dust the mixture with a fine layer of cocoa powder. Gently pour the foam on top of the coffee/hot chocolate mixture.',
    description:
      'The Hot Marocchino is an inspired composition of deep colors, creamy consistencies and intense flavors. Serve it in a glass to reveal the full mouthwatering beauty of this specialty drink—chocolate on the bottom. ',
    category: 'hot',
  },
  {
    id: 18,
    img: meltingSnow,
    name: 'Melting Snow',
    price: 20.0,
    water: 'hot water',
    ingredients:
      '1 tbsp. plus 1 or 2 tsp (20-25 ml) espresso. 2 tsp (10 ml) liquid cane sugar. 4 tbsp. (60 ml) fresh whole milk. 2 tbsp (30 ml) skim milk.',
    prepare:
      'Prepare the Espresso in a small cup. In the frothing pitcher, combine the liquid sugar, whole milk and approx 1/16 oz (3 g) of cocoa powder; heat it with your espresso machines steam wand, being sure to keep it on the surface. Add the espresso to the heated mixture and combine. Decorate with a light dusting of cocoa powder, and serve.',
    description:
      'Together again, coffee, milk and cocoa enjoy themselves with new variations on the theme: here they create a hot, intense drink, sweetened by a touch of aromatic cane sugar and cooled with soft milk snow.',
    category: 'hot',
  },
  {
    id: 19,
    img: chocolatewave,
    name: 'Chocolate Wave',
    price: 18.0,
    water: 'hot water',
    ingredients:
      '1 shot illy Espresso. 1-1.5 tbsp hot chocolate (15-20 ml). 1 tbsp plus 1 tsp skim milk (20 ml).',
    prepare:
      'Prepare the hot chocolate in the pitcher and pour it into the glass. Prepare the Espresso directly into the same glass, adding it to the hot chocolate. Foam the cold milk in the pitcher with the milk frother. to finish, add the foam to the coffee and chocolate.',
    description:
      'An unusual contrast of temperatures in a delectable trio: coffee and chocolate make a show of their passion, while milk lends a cool foamy freshness as it crowns a warm, aromatic brew. ',
    category: 'hot',
  },
  {
    id: 20,
    img: americano,
    name: 'Americano',
    price: 5.0,
    water: 'hot water',
    ingredients: '1 tbsp. plus 2 tsp. (25 ml) espresso ',
    prepare:
      'Prepare the espresso in a small cup. Fill a cappuccino cup with hot water (about 190 F, or 90 C) and add as much of the espresso as you prefer. Serve',
    description:
      'Even the Italian espresso can be tempted by the American dream. When a bigger cup of coffee is in order, espresso teams up with boiling water, transforming into a drink to be enjoyed over time, and sipped at any time of day.',
    category: 'hot',
  },
]

export const reviewsData = [
  {
    id: 30,
    img: person1,
    name: 'Noe Peck',
    review:
      ' I really like the atmosphere, good coffee, and nice interior. This is a good place to study or chill with friends. The drinks were all tasty and worthwhile. If you’re up for a fresh place with beautiful architecture then this is a must to visit.',
  },
  {
    id: 31,
    img: person2,
    name: 'Violeta Wiggins',
    review:
      ' They offered the best coffee and showed the best attitude to its costumers. Internet connection is very fast and is unlimited as well. This place is indeed perfect for studying and chilling out. It was very quiet and air-conditioned. I just want to keep coming back to this place. Thank you!',
  },
  {
    id: 32,
    img: person3,
    name: 'Nicola Horner',
    review:
      ' Will go again.I only popped in to get take-away cappuccinos, but I was struck by how friendly the service was. The cappuccinos were wonderful too! And very well priced.',
  },
  {
    id: 33,
    img: person4,
    name: 'Maxwell Pearson',
    review:
      ' I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying. If you like your coffee shops, then this is a must-visit! We will be back again!',
  },
  {
    id: 34,
    img: person5,
    name: 'Kiara Jensen',
    review:
      ' This coffee shop is my favorite place to hang and do my works. I really like this place because it has a good ambiance and not too crowded as well. The coffee and pastries that they had were so delicious.',
  },
  {
    id: 35,
    img: person6,
    name: 'Lena Greener',
    review:
      ' The barista was so friendly and pleasant to talk with. One thing that I got fascinated by this place. They had the most affordable and delicious coffee in town.',
  },
  {
    id: 36,
    img: person7,
    name: 'Jacob Gregory',
    review:
      ' If you’re looking for a place where to relax or whatever, this coffee shop would be the best. They have the best coffee available and even some fresh baked goods as well. The ambiance of this shop was so relaxing, and the staffs are highly capable.',
  },
  {
    id: 37,
    img: person8,
    name: 'Arianna Noble',
    review:
      'I could not ask for more because everything that I needed was provided. Well done, guys! Keep making great coffee!',
  },
  {
    id: 38,
    img: person9,
    name: 'Lara Andrade',
    review:
      'This place is very different and well organized according to other places. The coffee is amazing, music of your choice. The owner is very sweet… Ever the best place. The cost is fair for everything and the atmosphere is good.',
  },
  {
    id: 39,
    img: person10,
    name: 'Steven Becker',
    review:
      'A unique coffee shop. No loud noises which will help you a lot to concentrate on what you do. They do have a variety of drinks you can select from. Trust me! You will never be disappointed for sure! A memorable place to relax.',
  },
]