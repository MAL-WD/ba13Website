import { useState } from 'react'
import reactLogo from './assets/react.svg'
import about from './assets/b13-decor.jpg'
import decor from './assets/henry-co-3coKbdfnAFg-unsplash.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Companies from './components/Companies'
import roof from './assets/roof.svg'
import wall from './assets/wall.svg'
import home from './assets/home.svg'
import expret from './assets/portrait-man-having-great-time.jpg'
import work1 from "./assets/work-1.jpg"
import work3 from "./assets/work-3.jpg"
import work4 from "./assets/work4.jpg"
import work5 from "./assets/work-5.jpeg"
import work6 from "./assets/work-6.jpg"
import work2 from "./assets/work-2.jpeg"
import repair from "./assets/home-repair-svgrepo-com.svg"
import course from "./assets/online-education-elearning-training-video-course-laptop-svgrepo-com.svg"
import person from "./assets/business-person-to-guide-right-hand-svgrepo-com.svg"
import checkmark from "./assets/checkmark.svg"
import CheckMark from './components/Checkmark'
import logo from "./assets/logo.jpeg"
import facebook from "./assets/facebook-network-communication-internet-interaction-svgrepo-com.svg"
import tiktok from "./assets/tiktok-svgrepo-com (1).svg"
import instagram from "./assets/instagram-1-svgrepo-com.svg"
import phone from "./assets/phone-flip-svgrepo-com.svg"
import mail from "./assets/mail-alt-3-svgrepo-com.svg"
import tlamcen from "./assets/tlamcen.jpg"
import british from "./assets/british.jpg"
import frensh from "./assets/frensh.jpg"
import turkey from "./assets/turkish.jpg"
import american from "./assets/american.jpg"
import taghit from "./assets/taghit.jpg"
import emailjs from "@emailjs/browser"
function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit =(e)=>{
    e.preventDefault()
    const templateId="template_7rb3djp"
    const serviceId="service_idk2jug"
    const publicKey ="9oWEko-MxZe0b7vQ8"
    const  templateParams={
      from_name:name,
      from_email:email,
      to_name:'hassan',
      message:message,
    }
    emailjs.send(serviceId, templateId, templateParams,publicKey).then(
      (response) => {
        console.log('SUCCESS!',response, response.status, response.text);
        setName('')
        setEmail('')
        setMessage('')
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );

  }
  const observer= new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")

        }
    })
})
const hiddenElements=document.querySelectorAll(".hiddenS")
hiddenElements.forEach((e)=>{
    observer.observe(e)
})
  return (
    <>
      <main className='relative h-[200vh] w-[100vw] max-sm:w-[110vw]'>

      <Header/>
      <section id='Home' className="landing z-0 relative grid justify-center items-center h-[100vh] w-[98%] mt-[2vh] rounded-[2rem]">
        <div className="landing-content text-center *:mx-auto">
        <h1 className='font-[750] fs-h1   text-[4.5rem] text-blue-zodiac  max-w-[1100px]'>جدد منزلك بأناقة:خدمات الديكور, التصميم والطلاء باحتلاافية</h1> 
        <p className='max-w-[800px] font-bold text-black mt-6 text-xl fs-p fs   '>في شركتنا، نجعل منازل أحلامكم حقيقة. نقدم خدمات الديكور والطلاء بأعلى معايير الجودة والاحترافية، لنضفي لمسة جمالية وفنية على كل زاوية من زوايا منزلكم. دعوا فريقنا من الخبراء يحول مساحتكم إلى واحة من الأناقة والراحة."</p>
        <span className='absolute bg-white/55 max-sm:hidden rounded-full backdrop-blur-3xl px-3 py-2 right-10 bottom-10 font-bold text-lg'>+2130674677338</span>

        <button className='bg-blue-700 block mt-8 w-fit mx-auto text-white px-8 py-3 rounded-full'><a href="#Contact">اطلب الان </a></button>
        </div>
      </section>
      <Companies/>
      <section id='About' className="about-us  w-[98%] rounded-3xl text-black py-16 bg-white-citrine">
        <div className="container text-center">
          <h2 className='fs-h2 mt-4 text-black mb-10 heading font-bold'>من نحن؟</h2>
          <p className='font-semibold text-black text-lg'>نحن شركة رائدة في مجال خدمات الديكور وطلاء المنازل، نسعى لتحويل رؤى عملائنا إلى واقع ملموس من خلال تصاميم مبتكرة وحلول طلاء احترافية. بفضل فريقنا المتخصص وشغفنا بالتفاصيل، نقدم تجربة متميزة تضمن لكم مساحات معيشية تعكس ذوقكم الخاص وأسلوب حياتكم. نلتزم بأعلى معايير الجودة والتميز لضمان رضاكم الكامل</p>
          <img className='w-full mt-20 rounded-2xl' src={decor} alt="" />
          <h3 className=' text-center  text-5xl py-10 pb-6 font-bold'> هدفنا</h3>
          <p className='text-black font-medium text-xl text-right'>هدفنا هو تقديم خدمات ديكور وطلاء عالية الجودة تساهم في تحسين جودة الحياة وإضفاء الجمال والأناقة على المنازل. نسعى لتحقيق ذلك من خلال الالتزام بالابتكار والجودة والتفاني في العمل، لنمنح عملاءنا مساحات تعكس شخصياتهم وأحلامهم. نؤمن بأن كل تفصيل مهم، ونسعى لجعل كل مشروع تجربة فريدة ومميزة تلبي توقعات عملائنا وتفوقها.</p>
        </div>
      </section>
      <section id='Services' className="services mt-5 w-[98%] rounded-3xl text-black py-24  ">
        <div className="container text-center">
          <h2 className='fs-h2 mt-4 text-black mb-10 heading font-bold rw'>خدماتنا</h2>
          <div className="grid grid-3  gap-8 justify-between max-md:justify-center items-center" style={{gridTemplateColumns:"repeat(auto-fit, minmax('250px', '1fr'))"}}>
            <div className="service shadow-xl p-5 rounded-[2rem] hover:bg-[#0B409C]/80 hover:text-white hover:shadow-[#0B409C]/40">
              <img className='w-14 h-14  mx-auto' src={roof} alt="" />
              <h3 className='font-bold text-2xl my-3'>جيبس اسقف</h3>
              <p className='text-lg'>نقدم خدمات تركيب وتشكيل جيبس الأسقف بأعلى معايير الجودة والدقة، لنضفي على أسقف منازلكم لمسة من الفخامة والأناقة. يستخدم فريقنا مواد متينة وتقنيات حديثة لضمان تشطيب مثالي يدوم طويلاً.</p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] text-black hover:bg-[#0B409C]/80 hover:text-white hover:shadow-[#0B409C]/40">
              <img className='w-14 h-14  mx-auto' src={wall} alt="" />
              <h3 className='font-bold text-2xl my-3'>ديكور الجدران</h3>
              <p className='text-lg'>نحن متخصصون في تصميم وتنفيذ ديكور  الجدران الذي يحول المساحات العادية إلى قطع فنية مميزة. سواء كنت تفضل التصاميم الكلاسيكية أو العصرية، نضمن لك نتائج تلبي ذوقك وتضفي على منزلك لمسة جمالية فريدة.</p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] hover:bg-[#0B409C]/80 hover:text-white hover:shadow-[#0B409C]/40 ">
              <img className='w-14 h-14  mx-auto' src={home} alt="" />
              <h3 className='font-bold text-2xl my-3'>تصميم منازل</h3>
              <p className='text-lg'>
نوفر حلول تصميم متكاملة للمنازل تجمع بين الجمال والوظيفية. يعمل فريقنا معكم لتحويل رؤيتكم إلى واقع ملموس، مع التركيز على التفاصيل الدقيقة التي تجعل كل مساحة تعبر عن شخصيتكم واحتياجاتكم.</p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] hover:bg-[#0B409C]/80 hover:text-white hover:shadow-[#0B409C]/40 ">
              <img className='w-14 h-14  mx-auto' src={repair} alt="" />
              <h3 className='font-bold text-2xl my-3'>طلاء فني</h3>
              <p className='text-lg'>
              نقدم خدمات طلاء متخصصة تتضمن رسم رسومات فنية وإبداعية على الجدران، لنضفي على منزلكم طابعاً فريداً وجذاباً يعكس ذوقكم وشخصيتكم.
              </p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] hover:bg-[#0B409C]/80 hover:text-white hover:shadow-[#0B409C]/40 ">
              <img className='w-14 h-14  mx-auto' src={course} alt="" />
              <h3 className='font-bold text-2xl my-3'> كورسات تدريبية</h3>
              <p className='text-lg'>
              نوفر كورسات تدريبية متخصصة في مجالات الديكور والطلاء، مصممة لتزويدكم بالمعرفة والمهارات اللازمة لتحقيق أفضل النتائج في مشاريعكم الخاصة.</p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] hover:bg-[#0B409C]/80 hover:text-white hover:shadow-[#0B409C]/40 ">
              <img className='w-14 h-14  mx-auto' src={person} alt="" />
              <h3 className='font-bold text-2xl my-3'>نصح وإرشاد </h3>
              <p className='text-lg'>
              نقدم خدمات نصح وإرشاد احترافية حيث يمكنكم الاستفادة من آراء خبرائنا وتوجيهاتهم بدون الحاجة إلى تنفيذ العمل، مما يساعدكم على اتخاذ قرارات مستنيرة لتحسين مساحاتكم.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Team mt-5 w-[98%] rounded-3xl text-white py-16 bg-blue-zodiac ">
        <div className="container text-center">
          <h2 className='fs-h2 mt-4  mb-10 heading font-bold rw'>أساليب تصميماتنا</h2>
          <p className='text-lg'>
          في شركتنا، نفخر بتقديم مجموعة متنوعة من أساليب التصميم لتناسب جميع الأذواق والرغبات. من بين هذه الأساليب:
          </p>

          {/* <p >يفخر فريقنا بتقديم خدمات متميزة في مجال الديكور وطلاء المنازل، مستندين إلى خبرة تمتد  لما يقارب 8 إلى 10 سنوات . يتكون فريقنا من خبراء متخصصين وشغوفين بمجالهم، يعملون بجد واجتهاد لضمان تحقيق أعلى مستويات الجودة والرضا لعملائنا. بفضل معرفتهم العميقة وتقنياتهم المتطورة، يمكنكم الوثوق بأن كل مشروع سيتم إنجازه بدقة واحترافية، ليلبي تطلعاتكم ويضفي جمالًا ووظائفية على منازلكم.</p> */}
          <div className="grid mt-16 grid-4 gap-6 justify-between max-md:justify-center items-center">
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={taghit} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>التصميم الصحراوي</h3>
              <p className='mt-2'> يتميز بألوانه الدافئة والأرضية، مع استخدام المواد الطبيعية والتفاصيل البسيطة التي تعكس جمال البيئة الصحراوية</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={turkey} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'> التصميم التركي</h3>
              <p className='mt-2'> يعكس أناقة التراث التركي الغني، مع التركيز على الزخارف المعقدة والألوان الزاهية والأثاث الفخم والمريح</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={frensh} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>التصميم الفرنسي </h3>
              <p className='mt-2'> يتميز بالرقية والبساطة مع لمسات من الفخامة، باستخدام الألوان الهادئة والأثاث الأنيق الذي يعكس الجمال الكلاسيكي الفرنسي</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={tlamcen} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>التصميم التلمساني </h3>
              <p className='mt-2'> مستوحى من الثقافة التلمسانية الأصيلة، يجمع بين    والزخارف الهندسية، مع استخدام الألوان الدافئة والمواد الطبيعية</p>
            </div>
            
            
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={british} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'> التصميم البريطاني</h3>
              <p className='mt-2'> يجمع بين الكلاسيكية والفخامة، مع استخدام الألوان الغنية والمواد عالية الجودة، إضافة إلى التفاصيل المعمارية الدقيقة والأثاث التقليدي</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={american} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'> التصميم الأمريكي الحديث</h3>
              <p className='mt-2'> يتميز بالأناقة والبساطة، مع التركيز على المساحات المفتوحة والخطوط النظيفة، واستخدام الألوان المحايدة والأثاث العصري لخلق بيئة مريحة وعملية</p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio mt-5 w-[98%] rounded-3xl text-black py-16 bg-blue-light">
        <div className="container text-center">
          <h2 className='fs-h2 mt-4  mb-10 heading font-bold rw'>اعمالنا</h2>
          <p className='text-lg'>
            نفخر بعرض مجموعة من أعمالنا المتميزة في مجال الديكور وطلاء المنازل، والتي تعكس التزامنا بالجودة والابتكار.
          </p>

          {/* <p >يفخر فريقنا بتقديم خدمات متميزة في مجال الديكور وطلاء المنازل، مستندين إلى خبرة تمتد  لما يقارب 8 إلى 10 سنوات . يتكون فريقنا من خبراء متخصصين وشغوفين بمجالهم، يعملون بجد واجتهاد لضمان تحقيق أعلى مستويات الجودة والرضا لعملائنا. بفضل معرفتهم العميقة وتقنياتهم المتطورة، يمكنكم الوثوق بأن كل مشروع سيتم إنجازه بدقة واحترافية، ليلبي تطلعاتكم ويضفي جمالًا ووظائفية على منازلكم.</p> */}
          <div className="grid mt-16 grid-3 gap-6 justify-between max-md:justify-center items-center">
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={work1} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'> سقف احترافي</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={work2} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'> حائط مزخرف</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={work3} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'> ديكور احترافي</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={work4} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'> تصميم احترافي</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={work5} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'>اضواء احترافية</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={work6} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'>تصميم احترافي</h3>
            </div>
            
          </div>
        </div>
      </section>
      <section className="testimonials  mt-5 w-[98%] rounded-3xl text-black py-16 bg-gold">
        <div className="container text-center">
          <h2 className='fs-h2 mt-4  mb-10 heading font-bold rw'>بعض اراء عملائنا</h2>
          <p className='text-lg'>
          نحن فخورون بثقة عملائنا وتقديرهم لجهودنا، وهذه بعض آرائهم عن خدماتنا          </p>

          {/* <p >يفخر فريقنا بتقديم خدمات متميزة في مجال الديكور وطلاء المنازل، مستندين إلى خبرة تمتد  لما يقارب 8 إلى 10 سنوات . يتكون فريقنا من خبراء متخصصين وشغوفين بمجالهم، يعملون بجد واجتهاد لضمان تحقيق أعلى مستويات الجودة والرضا لعملائنا. بفضل معرفتهم العميقة وتقنياتهم المتطورة، يمكنكم الوثوق بأن كل مشروع سيتم إنجازه بدقة واحترافية، ليلبي تطلعاتكم ويضفي جمالًا ووظائفية على منازلكم.</p> */}
          <div className="grid mt-16 grid-3 justify-center gap-6  ">
            <div className="say shadow-lg pb-10 p-4 min-h-20 rounded-3xl bg-white text-black ">
              <div className="profile flex items-center gap-4 flex-row-reverse">
              <img className='w-14 aspect-square rounded-full' src={person} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl top-5  '>خالد محمد </h3>

              </div>
              <p className='mt-6 flex justify-center h-fit items-center font-medium text-lg'>"تحول منزلنا بفضل فريقكم الرائع! الدقة والاحترافية كانت واضحة في كل تفصيلة."</p>
            </div>
            <div className="say shadow-lg pb-10 p-4 min-h-20 rounded-3xl bg-white text-black ">
              <div className="profile flex items-center gap-4 flex-row-reverse">
              <img className='w-14 aspect-square rounded-full' src={person} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl top-5  '>يوسف ابراهيم </h3>

              </div>
              <p className='mt-6 flex justify-center h-fit items-center font-medium text-lg'>"لم أكن أتوقع هذا المستوى من الجودة والإبداع. شكراً لجعل منزلي مكاناً أجمل!"</p>
            </div>
            <div className="say shadow-lg p-4 min-h-20 rounded-3xl bg-white text-black ">
              <div className="profile flex items-center gap-4 flex-row-reverse">
              <img className='w-14 aspect-square rounded-full' src={person} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl top-5  '>ناصر عبدالرحمان </h3>

              </div>
              <p className='mt-6 flex justify-center h-fit items-center font-medium text-lg'>كورساتكم التدريبية كانت مفيدة جداً وساعدتني في تنفيذ أفكاري بنفسي.</p>            </div>
            <div className="say shadow-lg pb-10 p-4 min-h-20 rounded-3xl bg-white text-black ">
              <div className="profile flex items-center gap-4 flex-row-reverse">
              <img className='w-14 aspect-square rounded-full' src={person} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl top-5  '>عمر عبدالله </h3>

              </div>
              <p className='mt-6 flex justify-center h-fit items-center font-medium text-lg'>استفدنا كثيراً من نصائحكم وإرشاداتكم. كانت توجيهاتكم دقيقة وساعدتنا في اتخاذ قرارات أفضل.</p>
            </div>
            <div className="say shadow-lg pb-10 p-4 min-h-20 rounded-3xl bg-white text-black ">
              <div className="profile flex items-center gap-4 flex-row-reverse">
              <img className='w-14 aspect-square rounded-full' src={person} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl top-5  '>عبدالكريم علي </h3>

              </div>
              <p className='mt-6 flex justify-center h-fit items-center font-medium text-lg'>خدمات جيبس الأسقف التي قدمتموها كانت أكثر من رائعة. النتيجة النهائية كانت مذهلة.</p>
            </div>
            <div className="say shadow-lg pb-10 p-4 min-h-20 rounded-3xl bg-white text-black ">
              <div className="profile flex items-center gap-4 flex-row-reverse">
              <img className='w-14 aspect-square rounded-full' src={person} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl top-5  '>محمد حسن</h3>

              </div>
              <p className='mt-6 flex justify-center h-fit items-center font-medium text-lg'>التعاون معكم كان تجربة رائعة من البداية إلى النهاية. شكراً لجعل رؤيتنا حقيقة.</p>
            </div>
            
            
          </div>
        </div>
      </section>
      <section id='Pricing' className="pricing mt-5 w-[98%] rounded-3xl text-black py-16 bg-white ">
        <div className="container text-center">
          <h2 className='fs-h2 mt-4  mb-10 heading font-bold rw'>اسعارنا</h2>
          <p className='text-lg'>
          نحن ملتزمون بتقديم خدمات عالية الجودة بأسعار تنافسية وشفافة. تفضلوا بمراجعة تفاصيل أسعار خدماتنا         </p>

          {/* <p >يفخر فريقنا بتقديم خدمات متميزة في مجال الديكور وطلاء المنازل، مستندين إلى خبرة تمتد  لما يقارب 8 إلى 10 سنوات . يتكون فريقنا من خبراء متخصصين وشغوفين بمجالهم، يعملون بجد واجتهاد لضمان تحقيق أعلى مستويات الجودة والرضا لعملائنا. بفضل معرفتهم العميقة وتقنياتهم المتطورة، يمكنكم الوثوق بأن كل مشروع سيتم إنجازه بدقة واحترافية، ليلبي تطلعاتكم ويضفي جمالًا ووظائفية على منازلكم.</p> */}
          <div className="grid mt-16 grid-3 justify-center gap-6  ">
            <div className="service border pb-10  text-right p-5 min-h-20 rounded-3xl bg-white text-black ">
              <div className="type ml-auto flex items-center border w-fit gap-4 p-2 rounded-full px-4">
              <h3 className='font-semibold  top-5  '> شخصي</h3>

              </div>
              <p className='price mt-6 flex justify-center h-fit items-center font-bold text-5xl '>150 Dzd/M</p>
              <div className="features">
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"0f0f0f"}/>
                  <p className='text-lg font-semibold'>جيبس اسقف</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"0f0f0f"}/>
                  <p className='text-lg font-semibold'> تركيب وتسوية حائط</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"0f0f0f"}/>
                  <p className='text-lg font-semibold'> جودة جيدة</p>
                </div>
                
              </div>
            </div>
            <div className="service  border -translate-y-4 border-gold pb-10  text-right p-5 min-h-20 rounded-3xl bg-white-citrine text-black ">
              <div className="type ml-auto flex items-center border border-gold w-fit gap-4 p-2 rounded-full px-4">
              <h3 className='font-semibold  top-5  '> شخصي محترف</h3>

              </div>
              <p className='price mt-6 flex justify-center h-fit items-center font-bold text-5xl '>300 Dzd/M</p>
              <div className="features">
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(240,214,55)"}/>
                  <p className='text-lg font-semibold'>جيبس اسقف مزخرف</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(240,214,55)"}/>
                  <p className='text-lg font-semibold'> تركيب وتسوية جدران</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(240,214,55)"}/>
                  <p className='text-lg font-semibold'> تصميم ديكور المنزل</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(240,214,55)"}/>
                  <p className='text-lg font-semibold'> تركيب اضواء المنزل</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(240,214,55)"}/>
                  <p className='text-lg font-semibold'> رسم رسومات</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(240,214,55)"}/>
                  <p className='text-lg font-semibold'> جودة عالية</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(240,214,55)"}/>
                  <p className='text-lg font-semibold'> ارشاد والنصح </p>
                </div>
                
              </div>
            </div>
            <div className="service border pb-10 border-blue-zodiac  text-right p-5 min-h-20 rounded-3xl bg-blue-light text-black ">
              <div className="type ml-auto flex items-center border border-blue-zodiac w-fit gap-4 p-2 rounded-full px-4">
              <h3 className='font-semibold  top-5  '> شركة</h3>

              </div>
              <p className='price mt-6 flex justify-center h-fit items-center font-bold text-5xl '>مخصص</p>
              <div className="features">
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(18,44,79)"}/>
                  <p className='text-lg font-semibold'>جيبس اسقف احترافي</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(18,44,79)"}/>
                  <p className='text-lg font-semibold'> تركيب وتسوية جدران واضواء</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(18,44,79)"}/>
                  <p className='text-lg font-semibold'> تصميم ديكور فني وخاص</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(18,44,79)"}/>
                  <p className='text-lg font-semibold'> تصاميم وزخارف حضارتية  </p>
                </div>
                
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(18,44,79)"}/>
                  <p className='text-lg font-semibold'> جودة فائقة الدقة</p>
                </div>
                <div className="feature mt-5 flex items-center gap-3 flex-row-reverse">
                  {/* <img src={checkmark} alt="" /> */}
                  <CheckMark fill={"rgb(18,44,79)"}/>
                  <p className='text-lg font-semibold'> ارشاد والنصح </p>
                </div>
                
              </div>
            </div>
           
            
            
            
            
            
          </div>
        </div>
      </section>
      <footer id='Contact' className="contact mt-5 w-[98%] text-right rounded-3xl text-white py-16 bg-blue-zodiac ">
        <div className="container text-center">
        <h2 className='fs-h2 mt-4  mb-10 heading font-bold rw'>ماذا تتنظر</h2>
        <p className='text-lg'>نحن هنا لمساعدتك في تحقيق رؤيتك وتحويل مساحتك إلى مكان يعكس ذوقك وشخصيتك. لا تتردد في التواصل معنا للحصول على استشارة مجانية أو لمعرفة المزيد عن خدماتنا وأسعارنا</p>
        <form onSubmit={handleSubmit} action="" className='grid max-w-[500px] mx-auto gap-4 my-8 '>
          <input className='p-4 rounded-xl backdrop-blur-lg placeholder:text-blue-zodiac text-blue-zodiac' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='hassi'/>
          <input className='p-4 rounded-xl backdrop-blur-lg placeholder:text-blue-zodiac text-blue-zodiac' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='example@gmail.com' />
          <textarea className='p-4 resize-none rounded-xl backdrop-blur-lg placeholder:text-blue-zodiac text-blue-zodiac' value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='وصف طلبية'/>
          <button type='submit' className='bg-gold py-4 text-lg rounded-full font-bold'>اطلب الان</button>
          </form>
        
        <div className="contact mt-12 max-md:mt-32 grid  items-center grid-row-reverse grid-2 max-md:justify-center md:text-center">
            <div className="col max-md:text-center max-md:justify-center flex ">
              <div className="logo max-md:mx-auto">
                <img src={logo} className='w-24 rounded-full max-md:mx-auto' alt="" />
                <h3 className='text-xl mt-4'>تابعنا في مواقع التواصل الاجتماعي</h3>
                <div className="flex max-md:text-center max-md:justify-center mt-4 gap-4">
                  <a href=""><img className='w-10 h-10' src={facebook} alt="" /></a>
                  <a href=""><img className='w-10 h-10' src={tiktok} alt="" /></a>
                  <a href=""><img className='w-10 h-10' src={instagram} alt="" /></a>
                </div>
              </div>
            </div>
            {/* <div className="col">
                <h3 className='text-3xl font-semibold mt-4'> خدماتنا</h3>
                <div className="services mt-4">
                  <p className='my-2 mt-4'>جيبس اسقف</p>
                  <p className='my-2'> ديكور الجدران</p>
                  <p className='my-2'> تصميم المنازل</p>
                  <p className='my-2'> طلاء فني </p>
                  <p className='my-2'> كورسات تدريبية</p>
                  <p className='my-2'> نصح وارشاد </p>
                </div>

            </div> */}
            <div className="col max-md:mt-3 max-md:text-center text-right">
                <h3 className='text-3xl font-semibold  mt-4'> اتصل بنا</h3>
                <div className="services mt-4">
                  <div className='my-2 mt-4 justify-end max-md:justify-center items-center flex gap-4'>+2130674677338<img className='w-8 h-8' src={phone} alt="" /> </div>
                  <div className='my-2 mt-4 justify-end max-md:justify-center items-center flex gap-4'>hassangobab401@gmail.com<img className='w-8 h-8' src={mail} alt="" /> </div>
                  
                </div>

            </div>
        </div>
        </div>
      </footer>
      </main>
    </>
  )
}

export default App
