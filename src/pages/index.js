import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa';
import {MdFreeBreakfast, MdLunchDining,MdLocalDrink,MdDinnerDining} from 'react-icons/md';
import Image from 'next/image';

import main_pic from "../../public/main_pic.jpg";
import push from "../../public/push.jpg";
import pull from "../../public/pull.jpg";
import legs from "../../public/legs.jpg";

import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Fitness&Flores</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10  dark:bg-gray-900 md:px-20 lg:px-40' >
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>JesusCreations</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill color={darkMode ? 'white':'black'} onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /></li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Jesus Flores</h2>
            <h3 className='text-2xl py-2 md-3xl dark:text-white'>Gym guy who likes to watch anime and code</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-lg mx-auto'>I like to go to the gym and lift heavy circles</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
           <a href='https://www.instagram.com/fitness_and_flores/?hl=en'>
            <AiFillInstagram/>
          </a> 
          
            <a href='https://www.tiktok.com/@jflores_55'>
              <FaTiktok/>
            </a> 

          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 w-60 h-80 mt-50 overflow-hidden md:h-100 md:w-100'>
            <Image src={main_pic} fill style={{objectFit:'cover'}} />
          </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-400'>Little bit about fitness me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Played high school football and participated in track and field all 4 years</p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Have been hitting the gym consistently for about one year and counting</p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Like to do research on the latest training, nutrition and supplement topics</p>

            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Below you will find my current training split, nutrition and supplements</p>

          </div>
          <h3 className='text-3xl py-1 dark:text-gray-400'>Training</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Speed: Like to slow down the ecentric and squeeze at the top of the cocentric to build that mind-muscle connection</p>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Sets: I do 3 sets of 15,12 and 12 reps. Might do a few more reps in the last set if I feel I have more left in me </p>


          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={push} width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Push</h3>

              <h4 className='py-4 text-teal-600'>Day where I train my triceps, chest and lateral delts</h4>
              <p className='text-gray-800 py-1'>Cross body Single Arm Cable Tricep Pushdown</p>
              <p className='text-gray-800 py-1'>High Cable Single Arm chest press</p>
              <p className='text-gray-800 py-1'>Cable Overhead Tricep Extension</p>
              <p className='text-gray-800 py-1'>Incline Chest Press Machine</p>
              <p className='text-gray-800 py-1'>Chest Press Machine</p>
              <p className='text-gray-800 py-1'>Cable Lateral Raises</p>
              <p className='text-gray-800 py-1'>Tricep Rope Pushdown</p>


            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              
              <Image className='mx-auto' src={pull}s width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Pull</h3>

              <h4 className='py-4 text-teal-600'>Day where I train my biceps, back and rear delts</h4>
              <p className='text-gray-800 py-1'>Single Dumbbell Preacher Curl</p>
              <p className='text-gray-800 py-1'>Seated Incline Bicep Curls</p>
              <p className='text-gray-800 py-1'>Assisted Pull-ups</p>
              <p className='text-gray-800 py-1'>Single Arm Row Machine</p>
              <p className='text-gray-800 py-1'>Dumbbell Hammer Curls</p>
              <p className='text-gray-800 py-1'>Single Arm Low Cable Rear Delt Fly</p>
              <p className='text-gray-800 py-1'>Standing Cable Lat Pulldown With Rope</p>

            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={legs} width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Legs</h3>

              <h4 className='py-4 text-teal-600'>Day where I train my quads, hamstrings and glutes</h4>
              <p className='text-gray-800 py-1'>Smith Machine Bulgarian Split Squat</p>
              <p className='text-gray-800 py-1'>Smith Machine Hip Thrust</p>
              <p className='text-gray-800 py-1'>Smith Machine Squat</p>
              <p className='text-gray-800 py-1'>Smith Machine Romanian DeadLifts</p>
              <p className='text-gray-800 py-1'>Leg Extensions</p>
              <p className='text-gray-800 py-1'>Seated Hamstring Curl</p>

            </div>
          </div>
        </section>

        <section>
            <h3 className='text-3xl py-1 dark:text-gray-400'>Diet</h3>
            <div className='text-center p-10'>
              <h3 className='text-3xl py-1 dark:text-gray-400'>Food and drinks I consume</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>I make sure to drink lots of water in the gym and throughout the day</p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Drinks: Water, black coffee, unsweetened tea, carbonated water, zero sugar soda</p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Snacks:  I Rarely snack, but when I do it is usually some kind of nuts</p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>I try to consume at least 100G of protein per day, as well as adequate Carbs and vegetables</p>

            </div>

            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                    <MdFreeBreakfast/>
                </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Meal 1</h3>

              <h4 className='py-4 text-teal-600'>Breakfast</h4>
              <p className='text-gray-800 py-1'>Cup of Egg whites</p>
              <p className='text-gray-800 py-1'>Peanut butter sandwich or bagel</p>
              <p className='text-gray-800 py-1'>Coffee</p>

            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                    <MdLunchDining/>
                </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Meal 2</h3>


              <h4 className='py-4 text-teal-600'>Lunch</h4>
              <p className='text-gray-800 py-1'>Some kind of lean protein</p>
              <p className='text-gray-800 py-1'>Carbs such as rice, tortillas or sweet potatoes. Sometimes mix and match</p>
              <p className='text-gray-800 py-1'>Vegetables from a mixed vegetables bag</p>
              <p className='text-gray-800 py-1'>Any kind of low/no sugar drink</p>

            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                    <MdLocalDrink/>
                </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Meal 3</h3>


              <h4 className='py-4 text-teal-600'>Protein shake/meal</h4>
              <p className='text-gray-800 py-1'>Scoop of protein powder or protein shake + protein bar</p>

            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                    <MdDinnerDining/>
                </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Meal 4</h3>


              <h4 className='py-4 text-teal-600'>Lunch</h4>
              <p className='text-gray-800 py-1'>Some kind of lean protein</p>
              <p className='text-gray-800 py-1'>Carbs such as rice, tortillas or sweet potatoes. Sometimes mix and match</p>
              <p className='text-gray-800 py-1'>Vegetables from a mixed vegetables bag</p>
              <p className='text-gray-800 py-1'>Any kind of low/no sugar drink</p>

            </div>

          </div>

        </section>

        <section>
            <h3 className='text-3xl py-1 dark:text-gray-400'>Supplements</h3>
            <div className='text-center p-10'>
              <h3 className='text-3xl py-1 dark:text-gray-400'>Supplements I take for the gym</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Creatine Monohydrate</p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Vitamin D</p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Omega Fish Oil</p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Magnesium</p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Also toying around with stim free pre</p>
            </div>
        </section>
      </main>
    </div>
  )
}
