import React from "react";

function Help() {
  let list = [
    {
      image: "https://www.kindmeal.my/images/join_normal.png",
      title: "General Help",
    },
    {
      image: "https://www.kindmeal.my/images/join_shop.png",
      title: "Merchant Help",
    },
    {
      image: "https://www.kindmeal.my/images/icon-megaphone.png",
      title: "Advertising",
    },
    {
      image: "https://www.kindmeal.my/images/about_us.png",
      title: "About KindMeal",
    },
    {
      image: "https://www.kindmeal.my/images/about_hero.png",
      title: "Superhero Guide",
    },
    {
      image: "https://www.kindmeal.my/images/contact.png",
      title: "Contact Us",
    },
  ];
  return (
    <div className="Help " style={{minWidth:"80rem"}}>
      <div className="my-2 d-flex flex-row justify-content-center">
        <div>
          {list.map((item) => (
            <div
              key={item.title}
              className="p-3 my-4 d-flex flex-column justify-content-center"
              style={{
                boxShadow: "0 0 .2rem gray",
                borderRadius: ".7rem",
                width: "13rem",
              }}
            >
              <img
                className="m-2"
                src={item.image}
                alt={item.title}
                style={{ height: "8rem", width: "10rem" }}
              />
              <p
                className="text-center pt-2"
                style={{ color: "#666666", fontSize: "1.2rem" }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{ boxShadow: "0 0 .3rem gray", width: "60rem" }}
          className="m-4  p-5"
        >
          <h1>The World's 1st Meat-Free Lifestyle Platform</h1>

          <h4 className="m-0 mt-4">How It All Began</h4>
          <p>
            Founded by Andy Koh in 2008, <a>PetFinder.my</a> has been working
            hard with nationwide animal shelters, rescuers, and pet lovers to
            improve Malaysia's animal welfare. Much of our focus was centered
            upon pets — specifically, dogs and cats (alright, we have rabbits,
            hamsters, birds, fishes, turtles and chickens too).
          </p>
          <p>
            However, there exists a very real burden for all people involved in
            animal welfare: the challenging demand of their time, effort and
            money. It is no easy task being a rescuer, and only a tiny fraction
            of animal lovers are able to be actively involved in such onerous
            tasks. How do we widen the circle of people in animal welfare, and
            make it so attractive and simple that anyone can participate?
          </p>
          <p>
            Thus, the concept of KindMeal was born. A platform for anyone,
            irregardless of age, gender or financial status, to save lives
            anywhere, anytime. Without requiring any effort, time or money. In
            fact, they can even SAVE money. Sounds too good to be true, eh?
            Don't worry, this is not a pyramid scheme.
          </p>
          <div className="my-5">
            <center>
              <img src="https://www.kindmeal.my/images/about-1.jpg" alt="" />
            </center>
          </div>

          <h4 className="m-0 mt-4">Saving Lives With Delicious Meals</h4>
          <p>
            How does eating food help save animal lives? Isn't food consumption
            just for saving our own lives?
          </p>
          <p>
            Actually, the concept is really simple. Unless you are a vegetarian
            or vegan (which we salute you for), most of us are taking the lives
            of animals every single day. These animals — be it chickens, cows,
            lambs, ducks, pigs or fishes, are equally precious lives, and
            deserve our kindness and compassion as much as our beloved pets.
          </p>
          <p>
            They experience joy, pain, hunger, love and sadness similar to us.
            Just because we are not able to communicate well with them, make
            them fetch a ball or keep them as pets in our homes, we tend to
            neglect their well-being and shift our focus to the so-called
            delicious taste of their meat.
          </p>
          <p>
            We understand that it may not be easy to become a full vegetarian,
            but we strongly believe that it is feasible and achievable for all
            of us to reduce meat consumption, be it for compassion, health or
            environmental reasons. If we eat a couple of meat-free meals a week,
            it effectively means that we would be consistently saving the lives
            of many animals each month which would otherwise have ended up in
            our bellies.
          </p>
          <p>
            We have been accustomed to delicacies and cuisines made of meat, but
            it need not remain so. There exists a wide variety of meat-free food
            that are delicious and nutritious, and more often than not, cost
            less than similar meals with meat.
          </p>
          <p>So, how do we get started?</p>

          <h4 className="m-0 mt-4">The KindMeal Vision</h4>
          <p>
            To promote this concept, our team worked round the clock for months
            and months (we forgot what the sun looks like) to introduce a unique
            and exciting platform to promote meat-free dining.
          </p>
          <p>
            It is not sufficient to just tell people the benefits of meat-free
            dining. We have to give them good, practical reasons for trying it
            out, and it has to be simple, effective, and of course, enjoyable.
          </p>
          <p>
            KindMeal attempts this by closely working with restaurants and cafes
            to offer attractive meat-free deals and cozy dining environments.
            Everyone loves good food and great bargains!
          </p>
          <p>
            The restaurants need not be strictly vegetarian, as long as the
            deals and food they promote on KindMeal are meat-free. We want food
            lovers to be able to enjoy meat-free meals conveniently, including
            at their existing favorite restaurants.
          </p>
          <p>
            Our platform offers a structured, effective way for restaurants to
            promote themselves, with a proper showcase of their shop, menu,
            deals and outlets. Getting and using deal coupons are extremely
            simple, it only takes ONE single click — no online payment, advance
            planning, coupon printing or reservation required. Even your pet can
            do it. Eating is all about spontaneity, right?
          </p>
          <p>
            The KindWords and KindMoment features are carefully crafted to
            encourage viral promotion of restaurants and the meat-free dining
            experience, creatively leveraging on social media to strengthen the
            cause. Consumers can DOUBLE their deal discounts by sharing it on
            social media, and camwhore with the delicious food to show their
            friends (Malaysians LOVE taking photos of their food, perhaps even
            more than eating it).
          </p>
          <p>
            Ultimately, it is a cycle of supply and demand. The more food lovers
            that try out such meals, the more encouraged restaurants are in
            introducing creative meat-free menu items, which would in turn
            attract more people into compassionate dining.
          </p>
          <p>
            This will not happen overnight, but we have to start somewhere and
            help it materialize.
          </p>
          <div className="my-5">
            <center style={{ borderRadius: "1rem" }}>
              <img src="https://www.kindmeal.my/images/about-2.jpg" alt="" />
            </center>
          </div>
          <h4 className="m-0 mt-4">Of Factory Farming & Global Warming</h4>
          <p>
            60 billion farm animals are slaughtered each year for our pleasure.
            Factoring in marine lives, it reaches a whopping 2 TRILLION each
            year.
          </p>
          <p>
            Most of us are aware of the issues brought forth by such widespread
            consumption. Inhumane farm conditions where animals live perpetually
            in dirty, packed and tortorous environments before being carelessly
            slaughtered. Animals are force-fed to introduce more fats in them,
            pre-emptively given antibiotics to keep them alive, incapacitated to
            prevent them from accidentally harming each other in overpacked
            environments — these are but a few examples of their voiceless
            sufferings, unfortunate lives that are bred to be killed, to satisfy
            the whims and fancies of us civilized humans.
          </p>
          <p>
            We are experiencing global food shortage because so much of the
            agriculture land is used for planting animal feed. If such lands
            were used for feeding humans, bypassing the animal food chain, it
            would be so much more efficient, with lower food prices and much
            less blood on our hands.
          </p>
          <p>
            Did you know that the biggest contributor of global warming is the
            gas emitted by cows? Yes, they fart. A lot. A single cow releases as
            much greenhouse gases as a car driving 12,000km per year. Now
            multiply that by 1,500,000,000 cows.
          </p>
          <p>
            There is a wealth of resources and literature out there on why we
            should reduce meat consumption, so we won't delve into it in detail.
            But you get the drift.
          </p>
          <h4 className="m-0 mt-4">Join Our Compassionate Dining Revolution</h4>
          <p>
            Join Our Compassionate Dining Revolution We hope you are as excited
            as us to try out the delicious meat-free food here, while saving
            precious lives, health, environment and money. You play a critical
            role in improving the lives of humans and animals in our society,
            and all we request of you is — to try out the yummylicious food.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
