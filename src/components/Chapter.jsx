import React from 'react'

const Chapter = () => {
  return (
    <div>

      <div className=' px-4 m-10 py-8 text-center font-bold rounded-xl  ' style={{
        WebkitBackdropFilter: 'blur(3px) saturate(180%)',
        backdropFilter: 'blur(3px) saturate(180%)',
        backgroundColor: 'rgba(40, 28, 17, 0.63)',

        border: '1px solid rgba(255, 255, 255, 0.125)'
      }}>
        <h3 className=' uppercase text-orange-500 font-bold text-xl'>Chapter 1</h3>
        <h1 className='my-5 font-extrabold dark: text-white text-4xl'>Arjuna Visada Yoga</h1>
        <p className='my-2  text-left dark:text-white text-paragraph leading-loose'>"The first chapter of the Bhagavad Gita
          "Arjuna Vishada Yoga"
          introduces the setup, the setting, the characters and the
          circumstances that led to the epic battle of Mahabharata, fought
          between the Pandavas and the Kauravas. It outlines the reasons
          that led to the revelation of the of Bhagavad Gita. As both armies
          stand ready for the battle, the mighty warrior Arjuna, on
          observing the warriors on both sides becomes increasingly sad and
          depressed due to the fear of losing his relatives and friends and
          the consequent sins attributed to killing his own relatives. So,
          he surrenders to Lord Krishna, seeking a solution. Thus, follows
          the wisdom of the Bhagavad Gita."</p>
      </div>
      <div className=' px-4 m-10 py-8 text-center flex flex-col rounded-xl gap-8' style={{
        WebkitBackdropFilter: 'blur(3px) saturate(180%)',
        backdropFilter: 'blur(3px) saturate(180%)',
        backgroundColor: 'rgba(40, 28, 17, 0.63)',

        border: '1px solid rgba(255, 255, 255, 0.125)'
      }}>
        <p className=' font-extrabold  dark: text-white text-4xl'>47 Verses</p>
        <div className='flex flex-col gap-1 w-full'>
          <div className='flex gap-8 justify-center items-center'>
            <h1 className=' text-orange-500 font-bold text-xl'>Verse 1</h1>
            <p className=' text-left  dark:text-white text-paragraph leading-loose'>Dhritarashtra said: O Sanjaya, assembled in the holy land of Kurukshetra and desiring to fight, what did my sons and the sons of Pandu do?</p>
          </div>
          <div className='flex gap-8 justify-center items-center'>
            <h1 className=' text-orange-500 font-bold text-xl'>Verse 1</h1>
            <p className=' text-left dark:text-white text-paragraph leading-loose'>Dhritarashtra said: O Sanjaya, assembled in the holy land of Kurukshetra and desiring to fight, what did my sons and the sons of Pandu do?</p>
          </div>
          <div className='flex gap-8 justify-center items-center'>
            <h1 className=' text-orange-500 font-bold text-xl'>Verse 1</h1>
            <p className=' text-left dark:text-white text-paragraph '>Dhritarashtra said: O Sanjaya, assembled in the holy land of Kurukshetra and desiring to fight, what did my sons and the sons of Pandu do?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chapter