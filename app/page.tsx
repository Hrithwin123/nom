'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Phone, Instagram, ChevronRight, ChevronDown, ChevronUp} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return [ref, isInView] as const;
}

export default function Home() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [missionRef, missionInView] = useScrollAnimation();
  const [whyChooseRef, whyChooseInView] = useScrollAnimation();
  const [mealPlansRef, mealPlansInView] = useScrollAnimation();
  const [faqRef, faqInView] = useScrollAnimation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <div style={{backgroundPositionX : "240px"}} className="w-full relative h-[100dvh] bg-[url('/hero.png')] bg-contain bg-no-repeat bg-center bg-black">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-0 h-20 w-full bg-black/75 flex items-center justify-evenly"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[url('/logo.webp')] h-full aspect-square bg-contain"
          />

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex text-white gap-5 font-bold items-center justify-center mr-10 ml-10"
          >
            <div>Home</div>
            <div>About Us</div>
            <div>Contact us</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-3 items-center justify-evenly w-[40%]"
          >
            <div className="text-[var(--dog-orange)] flex items-center justify-center gap-2">
              <Phone size={15} /> +91 99168 69595
            </div>

            <div className="text-white">
              <Instagram size={20} />
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[24%] font-bold h-12 border-1 border-[var(--dog-orange)] rounded-full text-[var(--dog-orange)] flex items-center justify-center cursor-pointer"
            >
              Sign in
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[25%] font-bold h-12 border-1 border-[var(--dog-orange)] rounded-full bg-[var(--dog-orange)] text-black flex items-center justify-center cursor-pointer"
            >
              Contact Us
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white absolute top-35 left-20 text-7xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Loved by <span className="text-[var(--dog-orange)]">Dogs</span>,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <span className="text-[var(--dog-orange)]">Trusted</span> by
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            Feeders
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="text-xl mt-5"
          >
            Fresh, home-style meals for street and pet dogs in Bangalore —
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="text-xl"
          >
            starting at just ₹30/kg.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.3 }}
            className="text-xl mt-5"
          >
            Cooked with care. Delivered with love. Devoured with joy.
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
            whileHover={{ scale: 1.05, backgroundColor: "#f8f9fa" }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 text-xl text-black w-40 h-15 rounded-2xl bg-white flex flex-row items-center justify-center gap-1"
          >
            <span>Start Now <ChevronRight className="inline mb-[2px]" size={25}/></span>
          </motion.button>
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <motion.div 
        ref={missionRef}
        initial="initial"
        animate={missionInView ? "animate" : "initial"}
        className='h-[100dvh] w-full bg-[var(--dog-orange)] flex'
      >
        <motion.div 
          variants={slideInLeft}
          className="text-[var(--dog-white)] text-xl h-full w-[90%] ml-[10%] flex flex-col items-center justify-center"
        >
          <motion.div 
            variants={scaleIn}
            className="h-25 w-25 bg-[url('/food.png')] bg-contain"
          />
          <motion.div 
            variants={fadeInUp}
            className="text-4xl font-bold"
          >
            Our Mission
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-3"
          >
            To make sure no dog in Bangalore goes
          </motion.div>
          <motion.div 
            variants={fadeInUp}
          >
            hungry — streetie or spoiled.
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-3"
          >
            We cook <span className='font-bold'>affordable and accessible</span>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
          >
            <span className='font-bold'>community dog food</span> so feeders, rescuers,
          </motion.div>
          <motion.div 
            variants={fadeInUp}
          >
            and pet parents can nourish every wagging
          </motion.div>
          <motion.div 
            variants={fadeInUp}
          >
            tail with ease.
          </motion.div>
        </motion.div>

        <motion.div 
          variants={slideInRight}
          className="text-xl text-[var(--dog-white)] h-full w-[90%] mr-[10%] flex flex-col items-center justify-center"
        >
          <motion.div 
            variants={scaleIn}
            className="h-25 w-25 bg-[url('/eye.png')] bg-contain"
          />
          <motion.div 
            variants={fadeInUp}
            className="text-4xl font-bold"
          >
            Our Vision
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-3"
          >
            A city where kindness fills every bowl and no
          </motion.div>
          <motion.div 
            variants={fadeInUp}
          >
            stray is left behind.
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-3"
          >
            To create a kinder Bangalore where no dog is
          </motion.div>
          <motion.div 
            variants={fadeInUp}
          >
            left behind — with fresh, affordable meals
          </motion.div>
          <motion.div 
            variants={fadeInUp}
          >
            reaching every street and every tail.
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Why Choose Section */}
      <motion.div 
        ref={whyChooseRef}
        initial="initial"
        animate={whyChooseInView ? "animate" : "initial"}
        className="bg-white h-[100dvh] w-full flex flex-col items-center justify-center"
      >
        <motion.div 
          variants={fadeInUp}
          className="text-5xl mt-20"
        >
          Why Choose Nom Nom Tails ?
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          className="text-2xl mt-4"
        >
          Because Every Tail Deserves a Wag!
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="flex w-[80%] mt-20 items-center justify-evenly mb-30"
        >
          {[
            { img: '/food2.png', text: 'Made Fresh Daily', cover: false },
            { img: '/hand.png', text: 'Hygenic & Safe', cover: false },
            { img: '/love.png', text: 'By Animal Lovers', cover: false },
            { img: '/money.png', text: 'Affordable Nutrition', cover: false },
            { img: '/delivery.png', text: 'Delivered Daily', cover: true }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="border-4 border-[#C9E2EF] border-dotted rounded-xl h-full w-40 flex flex-col items-center justify-evenly cursor-pointer"
            >
              <div 
                className="aspect-square w-full"
                style={{ 
                  backgroundImage: `url('${item.img}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: item.cover ? 'cover' : 'contain'
                }}
              ></div>
              <div className="text-2xl text-center">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Meal Plans Section */}
      <motion.div 
        ref={mealPlansRef}
        initial="initial"
        animate={mealPlansInView ? "animate" : "initial"}
        className="w-full flex items-center justify-center flex-col"
      >
        <motion.div 
          variants={fadeInUp}
          className="text-6xl font-bold"
        >
          Discover Our
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          className="text-6xl font-bold text-[var(--dog-orange)] mt-2"
        >
          Meal Plans
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          className="text-2xl font-bold mt-5"
        >
          Tail-wagging food for every kind of feeder.
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          className='mt-3 text-xl'
        >
          Whether you're caring for one loyal pup or a whole streetie crew, our meals are freshly
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          className='text-xl'
        >
          cooked, budget-friendly, and delivered right to your doorstep.
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          className='flex w-[90%] gap-20 mt-10 justify-center'
        >
          {[
            {
              number: '1',
              title: 'Choose Your Bowl',
              content: (
                <>
                  <div className='font-bold mt-3'>🐔 Classic Chicken Bowl (Non-Veg)</div>
                  <ul className='list-disc ml-6 mt-3'>
                    <li>Everyday goodness for street and pet dogs alike.</li>
                    <li>Chicken, Chicken Skin, Feet, Rice, Turmeric & Coconut Oil</li>
                    <li>Balanced, belly-friendly, and full of tail-wagging nutrition.</li>
                  </ul>
                </>
              )
            },
            {
              number: '2',
              title: 'Pick Your Plan',
              content: (
                <>
                  <div className='font-bold mt-3'>🗓️ Weekly Subscription</div>
                  <div className="mt-3">₹30/kg (Classic Chicken Bowl)</div>
                  <div className='mt-3'>No one-time orders.</div>
                  <div className='mt-3'>Only weekly subscriptions — we focus on consistent,</div>
                  <div>reliable feeding that makes a real impact</div>
                </>
              )
            },
            {
              number: '3',
              title: 'Get It Delivered',
              content: (
                <>
                  <div>We deliver around Sahakar Nagar and areas across North Bangalore.</div>
                  <div className="font-bold mt-3">📦 Delivery Charges:</div>
                  <ul className='list-disc ml-6'>
                    <li>₹30 for under 5 km</li>
                    <li>₹60 for under 15 km</li>
                  </ul>
                  <div className='mt-3'>Just drop us a message to start feeding tails with love.</div>
                </>
              )
            }
          ].map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className='flex flex-col'
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={mealPlansInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
                className='text-[var(--dog-orange)] text-6xl'
              >
                {step.number}
              </motion.div>
              <hr className="mt-5 mb-5 text-black/10" />
              <div className='text-2xl'>{step.title}</div>
              {step.content}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.button 
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='w-35 text-lg h-12 rounded-full bg-[var(--dog-orange)] mb-10 mt-10'
        >
          Start Now
        </motion.button>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        ref={faqRef}
        initial="initial"
        animate={faqInView ? "animate" : "initial"}
        className='h-[100dvh] w-full flex items-center justify-center'
      >
        <motion.div 
          variants={slideInLeft}
          className="w-[60%] h-full flex flex-col justify-center items-center"
        >
          <div>
            <motion.div 
              variants={fadeInUp}
              className='text-4xl'
            >
              Frequently Asked <span className="text-[var(--dog-orange)]">Questions</span>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="mt-3 text-lg font-bold"
            >
              Got questions? We've got tail-wagging answers.
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="mt-3"
            >
              Whether you're a first-time feeder or a long-time rescuer, we're here to make
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className=''
            >
              things easy, honest, and helpful — just like our food.
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="max-w-xl mx-auto mt-10"
          >
            {[
              {
                question: "What kind of food do you serve?",
                answer: "Yes! We deliver across Bangalore, covering all major areas and even outskirts.",
                isOpen: open1,
                toggle: () => setOpen1(!open1)
              },
              {
                question: "Do you deliver to all parts of Bangalore?",
                answer: "We're based in Sahakar Nagar, but we do deliver to nearby areas and other parts of Bangalore depending on the order size and timing. Just message us — if we can reach you, we will!",
                isOpen: open2,
                toggle: () => setOpen2(!open2)
              },
              {
                question: "Can I subscribe or order daily?",
                answer: "Absolutely! We have a weekly subscription plan starting at just ₹30/kg for regular feeders, and you can set up daily deliveries so your doggo (or streetie squad) never misses a meal.",
                isOpen: open3,
                toggle: () => setOpen3(!open3)
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`transition-all duration-300`}
              >
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                  className="w-full flex justify-between items-center px-4 py-3 font-semibold text-lg" 
                  onClick={faq.toggle}
                >
                  {faq.question}
                  <motion.span 
                    animate={{ rotate: faq.isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl transform transition-transform ml-47"
                  >
                    {faq.isOpen ? <ChevronUp/> : <ChevronDown/>}
                  </motion.span>
                </motion.button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: faq.isOpen ? "auto" : 0, 
                    opacity: faq.isOpen ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-2 text-gray-600">{faq.answer}</div>
                </motion.div>
                <hr className="text-black/15" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={slideInRight}
          className="bg-[url('/sidedog.png')] h-[80%] w-[30%] mr-20 bg-cover bg-no-repeat bg-center rounded-xl"
        />
      </motion.div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-62 bg-[#2E1D14] flex items-center justify-evenly"
      >
        <div className="flex flex-col items-center justify-center h-full aspect-square">
          <div className="bg-[url('/logo.webp')] h-[80%] aspect aspect-square bg-contain"></div>
          <div className="text-[#BAB3A4]">Copyright © Nom Nom Tails</div>
        </div>

        <div className="flex items-center justify-center gap-4 text-white mr-35">
          <div>Home</div>
          <div>About us</div>
          <div>Products</div>
          <div>Services</div>
          <div>Privacy Policy</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div className='flex items-center justify-center gap-5'>
            <Instagram className='text-white' size={35}/>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-35 bg-white rounded-full h-10"
            >
              Get in touch
            </motion.button>
          </div>
          <div className="text-white font-bold">Powered by Bloomi5</div>
        </div>
      </motion.div>
    </div>
  );
}