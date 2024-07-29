import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const AboutPage = () => {
    const { language } = useContext(ThemeContext);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center px-4 mt-6 md:px-8'>
            <div className='text-lg md:text-xl text-white leading-relaxed mb-8' style={{
                WebkitBackdropFilter: 'blur(3px) saturate(180%)',
                backdropFilter: 'blur(3px) saturate(180%)',
                backgroundColor: 'rgba(40, 28, 17, 0.63)',
                border: '1px solid rgba(255, 255, 255, 0.125)',
                padding: '20px',
                borderRadius: '10px',
                maxWidth: '800px'
            }}>
                {language === 'en' ? (
                    <>
                        <p className='mb-4'>
                            The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a sacred text of the Hindu religion and is considered one of the most important spiritual classics. The Gita consists of a conversation between Prince Arjuna and the god Krishna, who serves as his charioteer. This conversation takes place on the battlefield of Kurukshetra just before the start of a great war.
                        </p>
                        <p className='mb-4'>
                            In this profound dialogue, Krishna imparts spiritual wisdom and guidance to the distraught Arjuna, who is confused and morally troubled about fighting in the battle. Krishna teaches Arjuna about various paths to spiritual realization, including the paths of devotion (bhakti), action (karma), and knowledge (jnana).
                        </p>
                        <p className='mb-4'>
                            The Bhagavad Gita addresses the concepts of dharma (duty/righteousness) and yoga (the path to realization and self-discovery). It emphasizes the importance of doing one's duty and the pursuit of righteousness without attachment to the results. This core teaching is encapsulated in the famous verse:
                        </p>
                        <blockquote className='italic mb-4'>
                            "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction." (Bhagavad Gita 2.47)
                        </blockquote>
                        <p className='mb-4'>
                            The Gita also explores the nature of reality, the self, and the universe, offering insights into the nature of God, the eternal soul (atman), and the material world (prakriti). It is divided into 18 chapters, each dealing with different aspects of life, duty, and spirituality.
                        </p>
                        <p className='mb-4'>
                            Over the centuries, the Bhagavad Gita has inspired countless philosophers, leaders, and spiritual seekers around the world. Its teachings have had a profound impact on many notable figures, including Mahatma Gandhi, who considered it his spiritual reference book. The Gita continues to be a source of wisdom and guidance for millions of people, offering timeless teachings that address the fundamental questions of human existence.
                        </p>
                        <p className='mb-4'>
                            Whether read as a spiritual guide, a philosophical treatise, or a literary classic, the Bhagavad Gita remains a vital and relevant text that speaks to the deepest aspects of human life and spirituality.
                        </p>
                    </>
                ) : (
                    <>
                        <p className='mb-4'>
                            भगवद गीता, जिसे अक्सर गीता कहा जाता है, भारतीय महाकाव्य महाभारत का एक 700-श्लोक हिंदू ग्रंथ है। यह हिंदू धर्म का एक पवित्र ग्रंथ है और इसे सबसे महत्वपूर्ण आध्यात्मिक क्लासिक्स में से एक माना जाता है। गीता में राजकुमार अर्जुन और भगवान कृष्ण के बीच एक वार्तालाप है, जो उनके सारथी के रूप में कार्य करते हैं। यह वार्तालाप कुरुक्षेत्र के युद्धक्षेत्र पर महान युद्ध के शुरू होने से ठीक पहले होता है।
                        </p>
                        <p className='mb-4'>
                            इस गहन संवाद में, कृष्ण व्यथित अर्जुन को आध्यात्मिक ज्ञान और मार्गदर्शन प्रदान करते हैं, जो युद्ध में लड़ने के बारे में भ्रमित और नैतिक रूप से परेशान है। कृष्ण अर्जुन को भक्ति (भक्ति), कर्म (कर्म) और ज्ञान (ज्ञान) के मार्ग सहित आध्यात्मिक आत्म-साक्षात्कार के विभिन्न मार्गों के बारे में सिखाते हैं।
                        </p>
                        <p className='mb-4'>
                            भगवद गीता धर्म (कर्तव्य/धर्म) और योग (आत्म-साक्षात्कार और आत्म-खोज का मार्ग) की अवधारणाओं को संबोधित करती है। यह बिना किसी परिणाम के लगाव के धर्म और न्याय का पालन करने के महत्व पर जोर देती है। इस मुख्य शिक्षण को प्रसिद्ध श्लोक में संक्षेपित किया गया है:
                        </p>
                        <blockquote className='italic mb-4'>
                            "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।" (भगवद गीता 2.47)
                        </blockquote>
                        <p className='mb-4'>
                            गीता वास्तविकता, आत्मा और ब्रह्मांड की प्रकृति का भी पता लगाती है, भगवान, शाश्वत आत्मा (आत्मा) और भौतिक संसार (प्रकृति) की प्रकृति के बारे में अंतर्दृष्टि प्रदान करती है। इसे 18 अध्यायों में विभाजित किया गया है, जिनमें से प्रत्येक जीवन, कर्तव्य और आध्यात्मिकता के विभिन्न पहलुओं से संबंधित है।
                        </p>
                        <p className='mb-4'>
                            सदियों से, भगवद गीता ने दुनिया भर के अनगिनत दार्शनिकों, नेताओं और आध्यात्मिक साधकों को प्रेरित किया है। इसकी शिक्षाओं का कई प्रसिद्ध हस्तियों पर गहरा प्रभाव पड़ा है, जिनमें महात्मा गांधी भी शामिल हैं, जिन्होंने इसे अपनी आध्यात्मिक संदर्भ पुस्तक माना। गीता लाखों लोगों के लिए ज्ञान और मार्गदर्शन का स्रोत बनी हुई है, जो मानव अस्तित्व के मौलिक प्रश्नों को संबोधित करने वाली कालातीत शिक्षाओं की पेशकश करती है।
                        </p>
                        <p className='mb-4'>
                            चाहे इसे आध्यात्मिक मार्गदर्शक के रूप में पढ़ा जाए, एक दार्शनिक ग्रंथ के रूप में, या एक साहित्यिक क्लासिक के रूप में, भगवद गीता एक महत्वपूर्ण और प्रासंगिक ग्रंथ बनी हुई है जो मानव जीवन और आध्यात्मिकता के सबसे गहरे पहलुओं से बात करती है।
                        </p>
                    </>
                )}
            </div>
            <Link to='/' className='text-white font-bold text-lg md:text-xl'>
                Go back to Home
            </Link>
        </div>
    );
}

export default AboutPage;
