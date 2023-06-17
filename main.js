const segmentTitles = ["News Feed", "Upcoming Events", "Jobs"];

const subSegmentTitles = [
  [
    "Industry News",
    "Technology Updates",
    "Lifestyle Trends",
    "Entertainment News",
    "Health and Wellness Updates",
    "Financial News",
    "Sports Highlights",
  ],
  [
    "Conferences and Summits",
    "Workshops on Training Program",
    "Webminars and Online Events",
    "Product Launches",
    "Networking Events",
    "Cultural and Art Exhibitions",
    "Charity Events",
  ],
  [
    "Technical Jobs",
    "Marketing and Advertising Jobs",
    "Creative Design Jobs",
    "Content Creation Jobs",
    "Business and Finance Jobs",
    "Health and Wellness Jobs",
    "Education and Training Jobs",
  ],
];

function setSegment(val) {
  // Activating the Top link in Navigation bar
  const elements = document.getElementsByName("seg-link");
  elements.forEach((element) => element.classList.remove("active"));
  console.log(elements);
  elements[val].classList.add("active");

  // Setting the Segment Title
  document.getElementById("segment-title").innerHTML = segmentTitles[val];

  // Setting the Sub segments menu
  const menu = document.getElementById("sub-segment-menu");
  menu.innerHTML = null;
  const titles = subSegmentTitles[val];

  titles.forEach((title, index) => {
    const item = document.createElement("li");
    item.classList.add("nav-item", "nav-link");
    item.innerText = title;
    item.setAttribute("id", index);
    item.setAttribute("name", "sub-seg-link");
    item.addEventListener("click", () => setSubSegment(val, index));
    menu.appendChild(item);
  });

  setSubSegment(val, 0);
}

function setSubSegment(segId, subSegId) {
  // Activating the Underline for Sub Segment
  const elements = document.getElementsByName("sub-seg-link");
  elements.forEach((element) => element.classList.remove("active"));
  elements[subSegId].classList.add("active");

  const blogsSection = document.getElementById("blogs-section");
  blogsSection.innerHTML = "";

  blogs.forEach((blog) => {
    if (blog.segId === segId && blog.subSegId == subSegId) {
      //Tite
      const blogTitle = document.createElement("h6");
      blogTitle.classList.add("blog-title");
      blogTitle.innerText = blog.title;

      //Description
      const blogDescription = document.createElement("p");
      blogDescription.classList.add("blog-description");
      blogDescription.innerText = blog.description;

      //Image
      const blogImage = document.createElement("img");
      blogImage.classList.add("blog-image");
      blogImage.setAttribute("src", blog.imageLink);
      blogImage.setAttribute("alt", "image");

      //Text Div
      const blogTextDiv = document.createElement("div");
      blogTextDiv.classList.add("m-2");
      blogTextDiv.append(blogTitle, blogDescription);

      //Total Blog Element
      const blogElement = document.createElement("div");
      blogElement.classList.add("col-md-12", "col-lg-6", "p-2", "my-blog");
      blogElement.append(blogTextDiv, blogImage);

      blogsSection.appendChild(blogElement);
    }
  });
}

function changeMode() {
  const body = document.body;
  const icon = document.getElementById("mode-icon");
  const mode = body.getAttribute("data-bs-theme");

  if (mode == "light") {
    body.setAttribute("data-bs-theme", "dark");
    icon.classList.remove("bi-moon-stars-fill");
    icon.classList.add("bi-sun-fill");
  } else {
    body.setAttribute("data-bs-theme", "light");
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-stars-fill");
  }
}

const blogs = [
  {
    title: "Breaking News: Google Announces Groundbreaking Innovation",
    description:
      "In a monumental moment that has sent shockwaves through the tech industry, Google has just unveiled a groundbreaking innovation that promises to redefine.",
    segId: 0,
    subSegId: 0,
    imageLink:
      "https://www.focusdailynews.com/wp-content/uploads/2019/06/2019-06-14_GoogleDataCenterGroundbreaking_McWhorter0012edit.jpg",
  },
  {
    title: "Interview with Sustainable Energy Thought Leader: John Anderson",
    description:
      "Discover the visionary insights of John Anderson, a distinguished thought leader in the realm of sustainable energy, in this exclusive interview.",
    segId: 0,
    subSegId: 0,
    imageLink:
      "https://openblog.life.church/wp-content/uploads/2018/08/gls-blog.jpg",
  },
  {
    title: "Exploring the Impact of Artificial Intelligence on Healthcare",
    description:
      "AI is revolutionizing healthcare by analyzing patient data, enhancing medical imaging interpretation, and providing instant medical advice.",
    segId: 0,
    subSegId: 0,
    imageLink:
      "https://www.intellectyx.com/wp-content/uploads/2019/07/artificial-Intelligence-in-healthcare-industry.jpg",
  },
  {
    title: "The Latest Trends Shaping the Future of Renewable Energy",
    description:
      "Discover the cutting-edge trends driving the future of renewable energy. From advancements in solar and wind power to energy storage innovations.",
    segId: 0,
    subSegId: 0,
    imageLink:
      "https://tse2.mm.bing.net/th?id=OIP.Ho503WTqzoAXzRxXm9Z4eAHaE8&pid=Api&P=0&h=180",
  },
  {
    title: "Top 10 Tech Gadgets to Watch Out for in 2023",
    description:
      "Get ahead of the tech curve with our list of the top 10 must-have gadgets to look out for in 2023, explore the latest advancements.",
    segId: 0,
    subSegId: 1,
    imageLink:
      "https://allstudyguide.com/wp-content/uploads/2021/04/tech-gadgets-1.jpg",
  },
  {
    title: "Demystifying Blockchain: Applications and Implications",
    description:
      "Unlock the potential of blockchain technology. Learn about its real-world applications and the transformative implications it holds for industries.",
    segId: 0,
    subSegId: 1,
    imageLink: "https://miro.medium.com/max/1200/1*zXgPGB749l2yDvPoJAeR5w.png",
  },
  {
    title:
      "Artificial Intelligence in Everyday Life: How It's Transforming Industries",
    description:
      "Discover how artificial intelligence is reshaping industries and impacting our daily lives. From personalized recommendations to smart assistants.",
    segId: 0,
    subSegId: 1,
    imageLink:
      "https://cdn.teksun.com/uploads/2021/06/05000314/Everyday-Impacts-of-Artificial-Intelligence-Primary-image.jpg",
  },
  {
    title: "The Rise of Augmented Reality: Revolutionising User Experiences",
    description:
      "Experience a new reality with augmented reality (AR). Delve into how AR is revolutionizing user experiences in gaming, retail, education.",
    segId: 0,
    subSegId: 1,
    imageLink: "https://paradoxlabs.com/wp-content/uploads/2018/02/AR-blog.jpg",
  },
  {
    title: "Embracing Minimalism: Living with Less and Finding Joy",
    description:
      "Discover the power of minimalism in finding happiness and contentment. Explore the benefits of living with less, decluttering your life.",
    segId: 0,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/8/250/200",
  },
  {
    title: "The Rise of Plant-Based Diets: Health Benefits and Sustainability",
    description:
      "Explore the growing popularity of plant-based diets and their positive impact on health and the environment. Learn about the health benefits, lifestyle.",
    segId: 0,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/9/250/200",
  },
  {
    title: "Digital Detox: Finding Balance in a Hyperconnected World",
    description:
      "Discover the importance of taking a digital detox to restore balance in a world dominated by technology. Learn practical tips for disconnecting screens.",
    segId: 0,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/10/250/200",
  },
  {
    title: "Incorporating Mindfulness into Daily Life: Practices and Benefits",
    description:
      "Learn how to cultivate mindfulness and integrate it into your daily routines for enhanced well-being and mental clarity. Discover mindfulness techniques.",
    segId: 0,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/11/250/200",
  },
  {
    title: "Exploring the Evolution of Gaming: From Consoles to Cloud Gaming",
    description:
      "Embark on a journey through the evolution of gaming, from traditional consoles to the rise of cloud gaming.",
    segId: 0,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/12/250/200",
  },
  {
    title: "Discovering New Music: Emerging Artists and Genre Trends",
    description:
      "Immerse yourself in the world of new music and emerging artists. Stay up-to-date with the latest genre trends, explore unique sounds.",
    segId: 0,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/13/250/200",
  },
  {
    title: "The Impact of Streaming Services on the Entertainment Industry",
    description:
      "Delve into how streaming services have revolutionized the entertainment industry. Explore the shift from traditional television.",
    segId: 0,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/14/250/200",
  },
  {
    title: "Hollywood's Biggest Blockbusters: Must-Watch Movies of the Year",
    description:
      "Get ready for cinematic thrills and epic storytelling. Discover the most anticipated blockbuster movies of the year, from action-packed adventures.",
    segId: 0,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/15/250/200",
  },
  {
    title:
      "Navigating the World of Fitness: Latest Trends and Effective Workouts",
    description:
      "Stay ahead of the fitness game with the latest trends and discover effective workout routines. Explore new exercise.",
    segId: 0,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/16/250/200",
  },
  {
    title: "Understanding Mental Health: Breaking Stigmas and Seeking Support",
    description:
      "Gain insights into mental health, challenge stigmas, and learn about the importance of seeking support.",
    segId: 0,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/17/250/200",
  },
  {
    title: "The Power of Holistic Healing: Exploring Alternative Therapies",
    description:
      "Discover the potential of holistic healing and explore alternative therapies. Learn about practices like acupuncture.",
    segId: 0,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/18/250/200",
  },
  {
    title: "Nutrition Spotlight: Superfoods and Their Health Benefits",
    description:
      "Dive into the world of superfoods and their incredible health benefits. Explore nutrient-packed ingredients.",
    segId: 0,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/19/250/200",
  },
  {
    title:
      "Investment Strategies for Beginners: Building a Strong Financial Future",
    description:
      "Learn essential investment strategies to kickstart your journey towards a strong financial future. Discover the basics of investing.",
    segId: 0,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/20/250/200",
  },
  {
    title: "Cryptocurrency 101: Understanding Bitcoin and Altcoins",
    description:
      "Enter the world of cryptocurrencies and gain a fundamental understanding of Bitcoin, altcoins, and blockchain technology.",
    segId: 0,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/21/250/200",
  },
  {
    title: "Personal Finance Tips: Budgeting, Saving, and Building Wealth",
    description:
      "Take control of your personal finances with essential tips for budgeting, saving money, and building long-term wealth.",
    segId: 0,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/22/250/200",
  },
  {
    title: "The Impact of Global Economic Events on Stock Markets",
    description:
      "Explore how global economic events influence stock markets and investment decisions. Gain insights into market volatility factors.",
    segId: 0,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/23/250/200",
  },
  {
    title: "Redefining Greatness: Examining the Legacy of [Sports Legend]",
    description:
      "Dive into the extraordinary legacy of [Sports Legend] and explore their impact on their respective sport. Discover their achievements.",
    segId: 0,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/24/250/200",
  },
  {
    title: "The Rise of ESports: Competitive Gaming and Its Growing Popularity",
    description:
      "Uncover the world of competitive gaming and the explosive rise of eSports. Explore the tournaments, professional players, phenomenon.",
    segId: 0,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/25/250/200",
  },
  {
    title:
      "Exploring Unconventional Sports: Unique Activities Taking the World by Storm",
    description:
      "Dive into the world of unconventional sports and discover unique activities that are gaining popularity worldwide. From sports to niche competitions.",
    segId: 0,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/26/250/200",
  },
  {
    title: "Thrilling Moments in [Sport]: Unforgettable Plays and Performances",
    description:
      "Relive the excitement of unforgettable moments in [Sport]. From jaw-dropping plays to remarkable performances.",
    segId: 0,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/27/250/200",
  },
  {
    title: "Top Technology Conferences You Should Attend in 2023",
    description:
      "Discover the most anticipated technology conferences happening in 2023. Explore the leading events in the technology industry.",
    segId: 1,
    subSegId: 0,
    imageLink: "https://picsum.photos/id/28/250/200",
  },
  {
    title: "Key Takeaways from AI Summit 2023: Insights and Highlights",
    description:
      "Uncover the valuable insights and highlights from the AI Summit 2023 that brought together industry experts and thought of AI.",
    segId: 1,
    subSegId: 0,
    imageLink: "https://picsum.photos/id/29/250/200",
  },
  {
    title:
      "Preparing for Tech Conference 2023: Must-Have Tips for Maximizing Your Experience",
    description:
      "Get ready to make the most of your Tech Conference 2023 experience with essential tips and strategies. Learn how to plan your schedule.",
    segId: 1,
    subSegId: 0,
    imageLink: "https://picsum.photos/id/30/250/200",
  },
  {
    title: "Leading Experts and Speakers to Watch at Data Science Summit 2023",
    description:
      "Discover the influential experts and speakers who will be sharing their insights and expertise at the upcoming Data Science Summit 2023.",
    segId: 1,
    subSegId: 0,
    imageLink: "https://picsum.photos/id/31/250/200",
  },
  {
    title: "Mastering Coding: Essential Workshops for Skill Development",
    description:
      "Enhance your expertise in coding through essential workshops designed for skill development. Learn from industry professionals.",
    segId: 1,
    subSegId: 1,
    imageLink: "https://picsum.photos/id/32/250/200",
  },
  {
    title:
      "Unlocking Your Creative Potential: Inspiring Workshops for Artists and Designers",
    description:
      "Discover inspiring workshops curated to unlock your creative potential as an artist or designer. Immerse yourself in innovative techniques.",
    segId: 1,
    subSegId: 1,
    imageLink: "https://picsum.photos/id/33/250/200",
  },
  {
    title:
      "Exploring Photography Best Practices: Training Programs for Professional Growth",
    description:
      "Immerse yourself in training programs tailored to photography professionals seeking professional growth. Discover the latest industry.",
    segId: 1,
    subSegId: 1,
    imageLink: "https://picsum.photos/id/34/250/200",
  },
  {
    title:
      "From Novice to Expert: Hands-On Workshops to Upgrade Your Public Speaking Game",
    description:
      "Take your public speaking game to the next level with immersive, hands-on workshops. Whether you're a novice or intermediate.",
    segId: 1,
    subSegId: 1,
    imageLink: "https://picsum.photos/id/35/250/200",
  },
  {
    title:
      "Live Q&A with John Smith: Join the Conversation on Artificial Intelligence",
    description:
      "Don't miss the opportunity to engage in a live Q&A session with renowned industry expert John Smith. Join the conversation.",
    segId: 1,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/36/250/200",
  },
  {
    title:
      "Exploring the Future of Remote Work: Online Event Highlights and Insights",
    description:
      "Get exclusive access to online event highlights and insights focused on the future of remote work. Discover the latest trends, best practices.",
    segId: 1,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/37/250/200",
  },
  {
    title:
      "Digital Marketing Strategies: Webinars to Boost Your Online Presence",
    description:
      "Join our webinars focused on digital marketing strategies to enhance your online presence. Learn from industry experts.",
    segId: 1,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/38/250/200",
  },
  {
    title:
      "Interactive Webinars: Engaging and Educational Events You Can't Miss",
    description:
      "Experience engaging and educational webinars that offer valuable insights and interactive sessions. Stay informed about advancements.",
    segId: 1,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/39/250/200",
  },
  {
    title: "Behind the Scenes of Acme Corporation's Latest Product Innovation",
    description:
      "Take an exclusive look behind the scenes of Acme Corporation's latest product innovation.team that brought this groundbreaking product to life.",
    segId: 1,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/40/250/200",
  },
  {
    title: "Unveiling Product chatbot: Features, Benefits, and What to Expect",
    description:
      "Get ready for the grand unveiling of Product chatbot. Explore its cutting-edge features, understand the benefits it offers.",
    segId: 1,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/41/250/200",
  },
  {
    title:
      "Innovative Solutions: Product Launches that are Disrupting the Tech Industry",
    description:
      "Discover the game-changing product launches that are revolutionizing the tech industry. These innovative solutions are pushing the boundaries.",
    segId: 1,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/42/250/200",
  },
  {
    title: "First Impressions: Hands-On Reviews of Recently Launched Products",
    description:
      "Get an in-depth analysis and first-hand impressions of recently launched products. Our experts have taken these products for a spin, providing honest.",
    segId: 1,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/43/250/200",
  },
  {
    title:
      "Building Connections: Networking Tips for Introverts and Extroverts",
    description:
      "Discover effective networking tips tailored for both introverts and extroverts. Learn how to leverage your strengths.",
    segId: 1,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/44/250/200",
  },
  {
    title:
      "Speed Networking: Strategies for Making Meaningful Connections in Minutes",
    description:
      "Master the art of speed networking with proven strategies to make meaningful connections in a short amount of time.",
    segId: 1,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/45/250/200",
  },
  {
    title: "The Power of Networking: Success Stories and Lessons Learned",
    description:
      "Explore inspiring success stories and learn valuable lessons from the power of networking. Discover how networking.",
    segId: 1,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/46/250/200",
  },
  {
    title:
      "Networking Dos and Don'ts: Navigating Social and Professional Gatherings",
    description:
      "Learn the essential dos and don'ts of networking to make the most out of social and professional gatherings. Discover effective strategies,tips.",
    segId: 1,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/47/250/200",
  },
  {
    title:
      "Exploring Abstract Expressionism: Immersive Exhibitions You Should Visit",
    description:
      "Immerse yourself in the world of Abstract Expressionism through captivating exhibitions. vivid colors of this.",
    segId: 1,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/48/250/200",
  },
  {
    title:
      "Celebrating Cultural Diversity: Must-See Exhibitions of African Art",
    description:
      "Embark on a journey celebrating the rich cultural diversity of African art. Explore thought-provoking exhibitions that highlight, heritage.",
    segId: 1,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/49/250/200",
  },
  {
    title:
      "Interactive Art Installations: Engaging and Thought-Provoking Exhibitions",
    description:
      "Step into the world of interactive art installations that captivate your senses and provoke thought. Explore immersive exhibitions audience.",
    segId: 1,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/50/250/200",
  },
  {
    title: "Spotlight on Emerging Artists: Exhibitions Showcasing New Talent",
    description:
      "Discover the exciting world of emerging artists through engaging exhibitions that showcase new talent. Experience the and innovative.",
    segId: 1,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/51/250/200",
  },
  {
    title:
      "Giving Back: Inspiring Stories from the Annual Hope for All Charity Gala",
    description:
      "Experience the power of giving back through inspiring stories from the annual Hope for All Charity Gala. Discover difference.",
    segId: 1,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/52/250/200",
  },
  {
    title: "Charity Auctions: Unique Opportunities to Support Worthy Causes",
    description:
      "Explore unique opportunities to support worthy causes through charity auctions. Discover how these special events together philanthropists.",
    segId: 1,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/53/250/200",
  },
  {
    title:
      "Volunteer Spotlight: Sharing the Impact of the Annual Community Care Initiative",
    description:
      "Shine a spotlight on the incredible impact of the annual Community Care Initiative through inspiring volunteer stories.",
    segId: 1,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/54/250/200",
  },
  {
    title: "The Power of Philanthropy: Charity Events that Change Lives",
    description:
      "Experience the transformative power of philanthropy through charity events that are changing lives. Explore the inspiring together.",
    segId: 1,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/55/250/200",
  },
  {
    title: "Top In-Demand Tech Jobs in 2023: Skills and Opportunities",
    description:
      "Explore the top in-demand tech jobs in 2023 and discover the skills and opportunities associated with each role industry.",
    segId: 2,
    subSegId: 0,
    imageLink: "https://picsum.photos/id/56/250/200",
  },
  {
    title: "Navigating the Tech Job Market: Tips for Landing Your Dream Role",
    description:
      "Gain valuable insights and practical tips for navigating the competitive tech job market. optimize and effectively.",
    segId: 2,
    subSegId: 0,
    imageLink: "https://picsum.photos/id/57/250/200",
  },
  {
    title: "Interviewing for Tech Jobs: Common Questions and How to Ace Them",
    description:
      "Prepare yourself for tech job interviews by familiarizing yourself with common interview questions , From technical assessments.",
    segId: 2,
    subSegId: 0,
    imageLink: "https://picsum.photos/id/58/250/200",
  },
  {
    title:
      "Remote Tech Jobs: Finding and Thriving in a Virtual Work Environment",
    description:
      "Discover the opportunities and challenges of remote tech jobs in a virtual work environment. Learn effective strategies productivity.",
    segId: 2,
    subSegId: 0,
    imageLink: "https://picsum.photos/id/59/250/200",
  },
  {
    title:
      "Essential Skills for Modern Marketers: Thriving in the Digital Landscape",
    description:
      "Discover the essential skills required for modern marketers to succeed in the ever-changing digital landscape.",
    segId: 2,
    subSegId: 1,
    imageLink: "https://picsum.photos/id/60/250/200",
  },
  {
    title:
      "Breaking into the Marketing Industry: Entry-Level Jobs and Career Growth",
    description:
      "Get insights into breaking into the dynamic marketing industry and kickstart your career journey. Explore entry-level.",
    segId: 2,
    subSegId: 1,
    imageLink: "https://picsum.photos/id/61/250/200",
  },
  {
    title:
      "Creative Campaigns that Inspire: Showcasing Successful Marketing and Advertising Strategies",
    description:
      "Explore successful strategies, innovative approaches, and compelling storytelling techniques behind these campaigns. ",
    segId: 2,
    subSegId: 1,
    imageLink: "https://picsum.photos/id/62/250/200",
  },
  {
    title: "Inside the Minds of Marketing Experts: Interviews and Insights",
    description:
      "Learn from the experiences, strategies, and perspectives of seasoned marketing professionals. uncover the secrets to their success.",
    segId: 2,
    subSegId: 1,
    imageLink: "https://picsum.photos/id/63/250/200",
  },
  {
    title:
      "Unleashing Creativity: Careers in Graphic Design, UI/UX, and Visual Arts",
    description:
      "Discover the skills, tools, and techniques required to excel in these creative fields. Unleash your creativity.",
    segId: 2,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/64/250/200",
  },
  {
    title:
      "Designing Memorable User Experiences: The Role of Designers in Digital Products",
    description:
      "Learn about user-centric design principles, usability testing, and the impact of design on user satisfaction.",
    segId: 2,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/65/250/200",
  },
  {
    title: "The Art of Branding: Creating Compelling Visual Identities",
    description:
      "Uncover the art and science of branding through the creation of compelling visual identities. Explore the strategic elements development.",
    segId: 2,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/66/250/200",
  },
  {
    title:
      "From Concept to Creation: Behind-the-Scenes of Innovative Design Projects",
    description:
      "Gain insights into ideation, prototyping, within design teams. Explore how designers bring ideas to life and transform concepts .",
    segId: 2,
    subSegId: 2,
    imageLink: "https://picsum.photos/id/67/250/200",
  },
  {
    title: "Crafting Compelling Stories: Careers in Writing and Journalism",
    description:
      "Explore the exciting world of writing and journalism careers, where compelling stories come to life including content creation.",
    segId: 2,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/68/250/200",
  },
  {
    title: "Freelance Writing: Tips for Building a Successful Writing Business",
    description:
      "Embark on a freelance writing journey and discover the keys to building a successful writing business and insights.",
    segId: 2,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/69/250/200",
  },
  {
    title:
      "Content Marketing Strategies: Creating Engaging and Valuable Content",
    description:
      "Discover effective strategies for content creation, distribution, and measurement. leveraging different.",
    segId: 2,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/70/250/200",
  },
  {
    title: "Copywriting Techniques: Mastering the Art of Persuasive Writing",
    description:
      "Dive into the world of copywriting and master the art of persuasive writing. Learn effective techniques for crafting compelling headlines, engaging copy.",
    segId: 2,
    subSegId: 3,
    imageLink: "https://picsum.photos/id/71/250/200",
  },
  {
    title:
      "Navigating the Corporate World: Career Paths in Business and Finance",
    description:
      "Gain insights into different roles, such as finance, marketing, operations, and management, and chart your path to success.",
    segId: 2,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/72/250/200",
  },
  {
    title:
      "Financial Planning: Building a Solid Foundation for Personal and Professional Growth",
    description:
      "Discover strategies for budgeting, saving, investing, and managing debt. Gain insights into building wealth, achieving financial independence.",
    segId: 2,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/73/250/200",
  },
  {
    title:
      "Unlocking Success in Sales and Business Development: Strategies and Insights",
    description:
      "Explore the world of sales and business development and unlock the strategies and insights needed for success. Learn effective techniques.",
    segId: 2,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/74/250/200",
  },
  {
    title:
      "Inside the Boardroom: Executive Leadership and High-Level Management Roles",
    description:
      "Take a glimpse inside the boardroom and explore the world of executive leadership and high-level management roles.",
    segId: 2,
    subSegId: 4,
    imageLink: "https://picsum.photos/id/75/250/200",
  },
  {
    title:
      "Careers in the Health and Wellness Industry: Making an Impact on Wellbeing",
    description:
      "Discover rewarding career opportunities in the health and wellness industry and make a positive impact on people",
    segId: 2,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/76/250/200",
  },
  {
    title: "Holistic Health: Exploring Alternative Medicine and Therapies",
    description:
      "Delve into the world of holistic health and explore alternative medicine, herbal medicine, yoga, and mindfulness.",
    segId: 2,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/77/250/200",
  },
  {
    title:
      "Health Coaching: Empowering Individuals to Achieve Optimal Wellness",
    description:
      "Learn about the transformative role of health coaching in empowering individuals to achieve optimal wellness. Explore the skills, techniques, and methodologies.",
    segId: 2,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/78/250/200",
  },
  {
    title:
      "The Future of Healthcare: Technology, Innovation, and Job Opportunities",
    description:
      "Learn about advancements such as telemedicine, wearable devices, AI-driven diagnostics, and personalized medicine. Discover emerging job opportunities.",
    segId: 2,
    subSegId: 5,
    imageLink: "https://picsum.photos/id/79/250/200",
  },
  {
    title: "Passionate Educators: Careers in Teaching and Academic Leadership",
    description:
      "Discover the fulfilling careers in teaching and academic leadership that make a difference in students' lives. Explore various educational roles.",
    segId: 2,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/80/250/200",
  },
  {
    title:
      "Professional Training and Development: Building Skills for Career Advancement",
    description:
      "Unlock your potential for career advancement by investing in professional training and development. Discover the various avenues available",
    segId: 2,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/81/250/200",
  },
  {
    title:
      "The Rise of Online Education: Exploring Remote Teaching and E-Learning Opportunities",
    description:
      "Delve into the world of online education and discover the opportunities and challenges of remote teaching and e-learning. Explore innovative teaching.",
    segId: 2,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/82/250/200",
  },
  {
    title: "Special Education: Empowering Students with Diverse Learning Needs",
    description:
      "Learn about the important field of special education and how it empowers students with diverse learning needs. Explore inclusive teaching strategies.",
    segId: 2,
    subSegId: 6,
    imageLink: "https://picsum.photos/id/83/250/200",
  },
];
