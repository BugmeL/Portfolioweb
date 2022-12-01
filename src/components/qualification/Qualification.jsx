import React, { useState } from 'react';
import"./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState([]);
  
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      
      <div className="qualification__container container">
        <div className="qualification__tabs">
          
          <div className={toggleState === 1 
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"
          }
            onClick={() => toggleTab(1)}  
            >
            <i className="uil uil-graduation-cap qualification__icon">
              Education
            </i>{" "}
          
          </div>
          <div className={toggleState === 2 
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"
          }
          onClick={() => toggleTab(2)}  
          >
            <i className="uil uil-graduation-cap qualification__icon">
              Experience
            </i>{" "}
          </div>
        </div>
        
        <div className="qualification__sections">
          <div 
            className={
              toggleState === 1
            ? "qualification__content qualification__content-active"
          : "qualification__content qualification__content-active"
          }
        >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span
                  className="qualification__subtitle"
                >
                Russia - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></
                  i> 2021 - Present
                </div>
              </div>
              
              <div>
                <span className="qualification__rounder"></
                span>
                <span className="qualification__line "></span>
              </div>
            </div>
            
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></
                span>
                <span className="qualification__line "></span>
              </div>
            
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span
                  className="qualification__subtitle"
                >
                Google - Prussia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></
                  i> 2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Dev</h3>
                <span
                  className="qualification__subtitle"
                >
                Russia - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></
                  i> 2021 - Present
                </div>
              </div>
              
              <div>
                <span className="qualification__rounder"></
                span>
                <span className="qualification__line "></span>
              </div>
            </div>
            
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></
                span>
                <span className="qualification__line "></span>
              </div>
            
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span
                  className="qualification__subtitle"
                >
                Google - Prussia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></
                  i> 2017 - 2018
                </div>
              </div>
            </div>
            
          </div>
          <div className={toggleState === 2 ? 
          "qualification__content qualification__content-active"
          : "qualification__content" 
          }>
          
          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span
                  className="qualification__subtitle"
                >
                Microsft - Spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></
                  i> 2021 - Present
                </div>
              </div>
              
              <div>
                <span className="qualification__rounder"></
                span>
                <span className="qualification__line "></span>
              </div>
            </div>
            
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></
                span>
                <span className="qualification__line "></span>
              </div>
            
              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span
                  className="qualification__subtitle"
                >
                Apple - Poland
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></
                  i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span
                  className="qualification__subtitle"
                >
                Youtube - Australia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></
                  i> 2018 - 2020
                </div>
              </div>
              
              <div>
                <span className="qualification__rounder"></
                span>
                <span className="qualification__line "></span>
              </div>
            </div>
            
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Qualification