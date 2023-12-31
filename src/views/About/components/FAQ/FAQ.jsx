import React from 'react'
import "./FAQ.css"
import FAQItem from './components/FAQItem'
const FAQ = () => {
    const faqData = [
        {id:1,
         title:"How it works",
         faqs:[
             {id:1,question:"How do I download the app",answer:"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."},
             {id:2,question:"Can I find a nearby Scoots", answer:"Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information."},
             {id:3,question:"Do I need a license to ride",answer:"Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."},
         ]},
         {
             id:2,
             title:"Safe driving",
             faqs:[
                 {id:1, question:"Should I wear a helmet",answer:"Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."},
                 {id:2, question:"How about the rules & regulations",answer:"Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."},
                 {id:3, question:"What if I damage my Scoot",answer:"Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."},
             ]
         }
    ]
  return (
    <div className="faq-parent-section">
        <div className="faq-header">
            <h1 className="faq-header header-font">FAQs</h1>
        </div>
        <div className="faq-content">
            {faqData.map(item=>(
                <div className="faq-section" key={item.id}>
                    <div className="faq-column">
                        <h3 className="header-font">{item.title}</h3>
                    </div>
                    <div className="faq-column">
                        <ul className="faq-list">
                            {item.faqs.map(faqitem=>
                                <FAQItem faqitem={faqitem} key={faqitem.id}/>
            )}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FAQ