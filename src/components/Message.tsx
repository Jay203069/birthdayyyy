import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Jii !!,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Happiest Birthday Shrutiii !!
          You're the Bestesttttt Besttt Personn i ever mettt every moment with u is a gift for meee!
          No one makes me laugh like u do  And one understands me the way u do. 
          You have the kindest heart and the brightest smile Always stay the same beautiful soul u are .
          Mein itni dhur se aapko koi gift toh nahi de sakta isliye hein online gift card banaya for u hope so aapko pasand aaye.
          Bs itna kehna chahta ki tu khush reh , hamesa muskurati rahe 
          kabhi kisi baat ka dard mehsoos na ho aur agar kabhi ho bhi gaya toh yaad rkhna main hoon tere saath hamesa
          no matter where life take us,I always got  your back you're truly one in million girl shrutii !
          Thanks for crazyyyy laughs and latee night talkssss
          I hope uhh stay forever with me and give me lot happiness. Stay tuned and connceted forever 
          The Bestest Bond I Have Made Ever!!
          In my eyes no other girl is perfect as uu My Princess.
         </p>
        <p className="text-lg text-pink-600 font-semibold">
          Once again Happiest birthday to a lady who exudes grace and elegance  !!
        </p>
      </motion.div>
    </div>
  );
};

export default Message;