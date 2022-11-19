import React , {useState} from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
export default function Aboutus() {
    const [showLessOne , setShowLessOne] = useState(true)
    const [textOne , setTextOne] = useState("Read More")
    const [showingless, setshowingless] = useState(true);
    const [text , setText] = useState("Read More")
    const switchView=()=>{
      if(showingless==true){
        setshowingless(false)
        setText("Read Less")
      }
      if(showingless==false){
        setshowingless(true)
        setText("Read More")
      }
    }
    const switchViewOne=()=>{
      if(showLessOne==true){
        setShowLessOne(false)
        setTextOne("Read Less")
      }
      if(showLessOne==false){
        setShowLessOne(true)
        setTextOne("Read More")
      }
    }
    return (
      <div >
        
  
        <section class="text-gray-600 body-font overflow-hidden mt-20">
          <div class="container  mx-auto">
            <div class="flex flex-wrap -m-12">
              <div class="p-12 md:w-1/2 flex flex-col items-start">
                <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-black text-xs font-medium tracking-widest ">
                  AIRS
                </span>
                <h2 class="sm:text-xl text-xl title-font font-medium text-gray-900 mt-4 mb-4 bg-yellow-200 p-2 rounded-lg">
                  ABOUT US
                </h2>
                <div className="bg-gray-200 rounded-lg p-4">
                {showLessOne?(
                  <>
                  <p class="leading-relaxed mb-8  text-lg ">
                    Innovation, Imagination and Application is the motto of this
                    society. AIRS aims to teach and help students to understand
                    the seemingly incomprehensible software development and
                    electronic gadgets in the market today and also assists
                    students in developing their own projects. We propose, like
                    many top international universities as well as national
                    universities, the “Society of AIRS” to meet this demand . . . . . . . .
                    </p>
                    <a
                       onClick={switchViewOne}
                        class="text-black bg-yellow-200 p-2 rounded-md   inline-flex items-center mt-2 mx-2 cursor-pointer "
                      >
                        {textOne}
                        {
                          <AiOutlineArrowDown className="mx-1 "/>
                        }
                        <Image src="/airs.png" height={50} width={50} />
                        
                      </a>
                  </>
                ):(
                  <>
                  <p class="leading-relaxed mb-8  text-lg ">
                    Innovation, Imagination and Application is the motto of this
                    society. AIRS aims to teach and help students to understand
                    the seemingly incomprehensible software development and
                    electronic gadgets in the market today and also assists
                    students in developing their own projects. We propose, like
                    many top international universities as well as national
                    universities, the “Society of AIRS” to meet this demand. Our
                    School gives the students a through foundation in the basic
                    and intermediate principles of computer and electronics
                    engineering and provides them with hands-on-skills and
                    experience practical aspects. It has been said “Technology is
                    best when it brings people together and make the world much
                    better.”
                  </p>
                  <a
                       onClick={switchViewOne}
                        class="text-black bg-yellow-200 p-2 rounded-md   inline-flex items-center mt-2 mx-2 cursor-pointer"
                      >
                        {textOne}
                        {
                          <AiOutlineArrowUp className="mx-1 "/>
                          
                        }
                        <Image src="/airs.png" height={50} width={50}  />
                        
                      </a>
                  </>
                )}
                  
                </div>
                <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                  
                </div>
              </div>
  
              <div class="p-12 md:w-1/2 flex flex-col items-start">
                <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-black text-xs font-medium tracking-widest">
                  AIRS
                </span>
                <h2 class="sm:text-xl text-xl title-font font-medium text-gray-900 mt-4 mb-4 bg-blue-300 p-2 rounded-lg ">
                  OUR VISION
                </h2>
                <div className="bg-gray-200 rounded-lg p-2">
                  {showingless ? (
                    <>
                      <h6 class="leading-relaxed mb-8 text-lg ">
                        We AIRS are conducting various lectures, workshops and
                        mentorship programs to help students realize their
                        projects. The mission of the society is to expose students
                        to challenges and new technologies in the field of
                        electronics and thus to nurture and develop their skills
                        set in this arena.
                        <ul className="mt-2">
                          <li className="mt-2">
                            1- Aim at bringing out the  best in
                            students
                          </li>
                          <li className="mt-2">
                            2- The chief aim of the club is to bring the students
                            out of their rooms and to expose them to the
                            challenges awaiting them in the field of circuit
                            designing, hardware analysis and programming . . . . . . . .
                            
                          </li>
                        </ul>
                      </h6>
                      <a
                       onClick={switchView}
                        class="text-black bg-blue-300 p-2 rounded-md   inline-flex items-center mt-2 mx-2  cursor-pointer"
                      >
                        {text}
                        {
                          <AiOutlineArrowDown className="mx-1 "/>
                        }
                        <Image src="/airs.png" height={50} width={50}  />
                      </a>
                    </>
                  ) : (
                    <>
                      <h6 class="leading-relaxed mb-8 text-lg ">
                        We AIRS are conducting various lectures, workshops and
                        mentorship programs to help students realize their
                        projects. The mission of the society is to expose students
                        to challenges and new technologies in the field of
                        electronics and thus to nurture and develop their skills
                        set in this arena.
                        <ul className="mt-2">
                          <li className="mt-2">
                            1- Aim at bringing out the technological best in
                            students
                          </li>
                          <li className="mt-2">
                            2- The chief aim of the club is to bring the students
                            out of their rooms and to expose them to the
                            challenges awaiting them in the field of circuit
                            designing, hardware analysis and programming.
                          </li>
                          <li className="mt-2">
                            3- Aim at providing students with the basic knowledge
                            of electronics but also help them to use the basic
                            concepts to come up with something constructive and
                            useful for the society.
                          </li>
                          <li>
                            4- To conduct lecture series, workshops and also
                            assign projects to students.
                          </li>
                          <li className="mt-3">
                            5-Aim to find hidden talent and to utilize them for
                            teaching learning process.
                          </li>
                        </ul>
                      </h6>
                      <a
                       onClick={switchView}
                        class="text-black bg-blue-300 p-2 rounded-md   inline-flex items-center mt-2 mx-2 cursor-pointer"
                      >
                        {text}
                        {
                          <AiOutlineArrowUp className="mx-2 "/>
                        }
                        <Image src="/airs.png" height={50} width={50}  />
                      </a>
                    </>
                  )}
                </div>
                <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } 