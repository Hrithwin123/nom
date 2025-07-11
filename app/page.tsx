'use client';
import { useState } from 'react';
import { Phone, InstagramIcon, ChevronRight, ChevronDown, ChevronUp} from 'lucide-react';

export default function Home() {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);





  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <div style={{backgroundPositionX : "240px"}} className="w-screen relative  h-[100dvh] overflow-x-hidden bg-[url('/hero.png')] bg-contain bg-no-repeat bg-center bg-black">
        <div className="absolute top-0 h-20 w-screen bg-black/75 flex items-center justify-evenly">
          <div className="bg-[url('/logo.webp')] h-full aspect-square bg-contain"></div>

          <div className="flex text-white gap-5 font-bold items-center justify-center mr-10 ml-10">
            <div>Home</div>
            <div>About Us</div>
            <div>Blog</div>
            <div>Contact us</div>
          </div>

          <div className="flex gap-3 items-center justify-evenly w-[40%]">
            <div className="text-[var(--dog-orange)] flex items-center justify-center gap-2">
              <Phone size={15} /> +91 99168 69595
            </div>

            <div className="text-white">
              <InstagramIcon size={20} />
            </div>

            <div className="w-[24%] font-bold h-12 border-1 border-[var(--dog-orange)] rounded-full text-[var(--dog-orange)] flex items-center justify-center">
              Sign in
            </div>

            <div className="w-[25%] font-bold h-12 border-1 border-[var(--dog-orange)] rounded-full bg-[var(--dog-orange)] text-black flex items-center justify-center">
              Contact Us
            </div>
          </div>
        </div>

        <div className="text-white absolute top-35 left-20 text-7xl">
          <div>Loved by <span className="text-[var(--dog-orange)]">Dogs</span>,</div>
          <div><span className="text-[var(--dog-orange)]" >Trusted</span> by</div>
          <div>Feeders</div>

          <div className="text-xl mt-5">Fresh, home-style meals for street and pet dogs in Bangalore —</div>
          <div className="text-xl">starting at just ₹30/kg.</div>

          <div className="text-xl mt-5">Cooked with care. Delivered with love. Devoured with joy.</div>

          <button className="mt-10 text-xl text-black w-40 h-15 rounded-2xl bg-white flex flex-row  items-center justify-center gap-1"><span>Start Now <ChevronRight className="inline mb-[2px]" size={25}/></span></button>
        </div>

      </div>

      <div className='h-[100dvh] w-screen bg-[var(--dog-orange)] flex'>
          <div className="text-[var(--dog-white)] text-xl h-full w-[90%] ml-[10%] flex flex-col items-center justify-center">
            <div className="h-25 w-25 bg-[url('/food.png')] bg-contain"></div>
            <div className="text-4xl font-bold">Our Mission</div>

            <div className="mt-3">To make sure no dog in Bangalore goes</div>
            <div>hungry — streetie or spoiled.</div>

            <div className="mt-3">We cook <span className='font-bold'>affordable and accessible</span></div>
            <div><span className='font-bold'>community dog food</span> so feeders, rescuers,</div>
            <div>and pet parents can nourish every wagging</div>
            <div>tail with ease.</div>


        </div>
        <div className="text-xl text-[var(--dog-white)] h-full w-[90%] mr-[10%] flex flex-col items-center justify-center ">
            <div className=" h-25 w-25 bg-[url('/eye.png')] bg-contain"></div>
            <div className="text-4xl font-bold">Our Vision</div>
            
            <div className="mt-3">A city where kindness fills every bowl and no</div>
            <div>stray is left behind.</div>

            <div className="mt-3">To create a kinder Bangalore where no dog is</div>
            <div>left behind — with fresh, affordable meals</div>
            <div>reaching every street and every tail.</div>


        </div>
      </div>

      <div className="bg-white h-[100dvh] w-screen flex flex-col items-center justify-center">
        <div className="text-5xl mt-20">Why Choose Nom Nom Tails ?</div>
        <div className="text-2xl mt-4">Because Every Tail Deserves a Wag!</div>

        <div className="flex w-[80%] mt-20 items-center justify-evenly mb-30">
          <div className="border-4 border-[#C9E2EF] border-dotted rounded-xl h-full w-40 flex flex-col items-center justify-evenly">
            <div className="aspect-square w-full bg-[url('/food2.png')] bg-contain "></div>
            <div className="text-2xl text-center">Made Fresh Daily</div>
          </div>
          <div className="border-4 border-[#C9E2EF] border-dotted rounded-xl h-full w-40">
            <div className="aspect-square w-full bg-[url('/hand.png')] bg-contain "></div>
            <div className="text-2xl text-center">Hygenic & Safe</div>
          </div>
          <div className="border-4 border-[#C9E2EF] border-dotted rounded-xl h-full w-40">
            <div className="aspect-square w-full bg-[url('/love.png')] bg-contain "></div>
            <div className="text-2xl text-center">By Animal Lovers</div>
          </div>
          <div className="border-4 border-[#C9E2EF] border-dotted rounded-xl h-full w-40">
            <div className="aspect-square w-full bg-[url('/money.png')] bg-contain "></div>
            <div className="text-2xl text-center">Affordable Nutrition</div>
          </div>
          <div className="border-4 border-[#C9E2EF] border-dotted rounded-xl h-full w-40">
            <div className="aspect-square w-full bg-[url('/delivery.png')]  bg-cover "></div>
            <div className="text-2xl text-center">Delivered Daily</div>
          </div>
        </div>

      </div>

      <div className="w-screen flex items-center justify-center flex-col">
        <div className="text-6xl font-bold">Discover Our</div>
        <div className="text-6xl font-bold text-[var(--dog-orange)] mt-2">Meal Plans</div>
        <div className="text-2xl font-bold mt-5">Tail-wagging food for every kind of feeder.</div>
        <div className='mt-3 text-xl'>Whether you're caring for one loyal pup or a whole streetie crew, our meals are freshly</div>
        <div className='text-xl'>cooked, budget-friendly, and delivered right to your doorstep.</div>
        
        <div className='flex w-[90%] gap-20 mt-10  justify-center'>
          <div className='flex flex-col'>
            <div className=' text-[var(--dog-orange)] text-6xl'>1</div>
            <hr className="mt-5 mb-5 text-black/10" />
            <div className='text-2xl'>Choose Your Bowl</div>
            <div className='font-bold mt-3'>🐔 Classic Chicken Bowl (Non-Veg)</div>
            <ul className='list-disc ml-6 mt-3'>
              <li>Everyday goodness for street and pet dogs alike.</li>
              <li>Chicken, Chicken Skin, Feet, Rice, Turmeric & Coconut Oil</li>
              <li>Balanced, belly-friendly, and full of tail-wagging nutrition.</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <div className=' text-[var(--dog-orange)] text-6xl'>2</div>
            <hr className="mt-5 mb-5 text-black/10" />
            <div className='text-2xl'>Pick Your Plan</div>
            <div className='font-bold mt-3'>🗓️ Weekly Subscription</div>
           
            <div className="mt-3">₹30/kg (Classic Chicken Bowl)</div>
            <div className='mt-3'>No one-time orders.</div>
            <div className='mt-3'>Only weekly subscriptions — we focus on consistent,</div>
            <div>reliable feeding that makes a real impact</div>
           
          </div>
          <div className='flex flex-col'>
            <div className=' text-[var(--dog-orange)] text-6xl'>3</div>
            <hr className="mt-5 mb-5 text-black/10" />
            <div className='text-2xl'>Get It Delivered</div>
            <div>We deliver around Sahakar Nagar and areas across North Bangalore.</div>          
            <div className="font-bold mt-3">📦 Delivery Charges:</div>
            <ul className='list-disc ml-6'>
              <li>₹30 for under 5 km</li>
              <li>₹60 for under 15 km</li>
            </ul>
            <div className='mt-3'>Just drop us a message to start feeding tails with love.</div>
          </div>
        </div>
        <button className='w-35 text-lg h-12 rounded-full bg-[var(--dog-orange)] mb-10 mt-10'>Start Now</button>
      </div>

      <div className='h-[100dvh] w-screen flex items-center justify-center'>
        <div className="w-[60%] h-full  flex flex-col justify-center items-center">
          <div>
            <div className='text-4xl'>Frequently Asked <span className="text-[var(--dog-orange)]">Questions</span></div>
            <div className="mt-3 text-lg font-bold">Got questions? We’ve got tail-wagging answers.</div>
            <div className="mt-3">Whether you're a first-time feeder or a long-time rescuer, we’re here to make</div>
            <div className=''>things easy, honest, and helpful — just like our food.</div>
          </div>

      <div className="max-w-xl mx-auto mt-10">
        <div className={`transition-all duration-300`}>
          <button className="w-full flex justify-between items-center px-4 py-3 font-semibold text-lg" onClick={() => {setOpen1(!open1)}}>
            What kind of food do you server ?
            <span className="text-xl transform transition-transform ml-47">{open1 ? <ChevronUp/> : <ChevronDown/>}</span>
          </button>
          {open1 && ( <div className="px-4 py-2 text-gray-600">Yes! We deliver across Bangalore, covering all major areas and even outskirts.</div>)}
        </div>
        <hr className="text-black/15" />
        <div className={`transition-all duration-300`}>
          <button className="w-full flex justify-between items-center px-4 py-3 font-semibold text-lg" onClick={() => setOpen2(!open2)}>
            Do you deliver to all parts of Bangalore?
            <span className="text-xl transform transition-transform ml-47">{open2 ? <ChevronUp/> : <ChevronDown/>}</span>
          </button>
          {open2 && ( <div className="px-4 py-2 text-gray-600">We’re based in Sahakar Nagar, but we do deliver to nearby areas and other parts of Bangalore depending on the order size and timing. Just message us — if we can reach you, we will!</div>)}
        </div>

        <hr className="text-black/15" />
        <div className={`transition-all duration-300`}>
          <button className="w-full flex justify-between items-center px-4 py-3 font-semibold text-lg" onClick={() => setOpen3(!open3)}>
            Can i subscribe or order daily ?
            <span className="text-xl transform transition-transform ml-47">{open3 ? <ChevronUp/> : <ChevronDown/>}</span>
          </button>
          {open3 && ( <div className="px-4 py-2 text-gray-600">Absolutely! We have a weekly subscription plan starting at just ₹30/kg for regular feeders, and you can set up daily deliveries so your doggo (or streetie squad) never misses a meal.</div>)}
        </div>
    </div>
    <div className="max-w-xl mx-auto mt-10">

    </div>
        </div>
        <div className="bg-[url('/sidedog.png')] h-[80%] w-[30%] mr-20 bg-cover bg-no-repeat bg-center rounded-xl"></div>
      </div>

    <div className="w-screen h-62 bg-[#2E1D14] flex items-center justify-evenly">

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
        <div className='flex items-center justify-center gap-5'><InstagramIcon className='text-white' size={35}/> <button className=" w-35 bg-white rounded-full h-10">Get in touch</button></div>
        <div className="text-white font-bold">Powered by Bloomi5</div>
      </div>


    </div>

    </div>
  );
}
