import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How can I pay for my appointment?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.'
    },
    {
      question: 'What can I expect at my first consultation?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.'
    },
    {
      question: 'What are your opening hours?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.'
    },
    {
      question: 'Do I need a referral?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.'
    },
    {
      question: 'Is the cost of the appointment covered by private health insurance?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.'
    }
  ];

  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ's</h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className={`flex items-center focus:outline-none ${activeItem === index ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">{faq.question}</h1>
                {activeItem === index ? (
                  <svg className="flex-shrink-0 w-6 h-6 ml-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"></path>
                  </svg>
                ) : (
                  <svg className="flex-shrink-0 w-6 h-6 ml-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"></path>
                  </svg>
                )}
              </button>

              {activeItem === index && (
                <div className="flex mt-4 ml-8">
                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}

              <hr className="my-8 border-gray-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .active {
          background-color: #f0f4f8;
          border-left: 4px solid #2563eb;
        }
        
        @media (max-width: 767px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          h1 {
            font-size: 1.5rem;
          }
          h1,
          p {
            margin-left: 0;
          }
          .flex {
            flex-direction: column;
          }
          .mx-4 {
            margin-left: 0;
          }
          .mt-4 {
            margin-top: 1rem;
          }
          .ml-8 {
            margin-left: 2rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
