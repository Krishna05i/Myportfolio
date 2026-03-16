import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* CYBER SECURITY */}
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>CYBER SECURITY</h3>
              <h4>Protecting Systems & Networks</h4>

              <p>
                Passionate about cybersecurity and protecting systems from cyber threats.
                I focus on network security, vulnerability analysis, and ethical hacking
                techniques to identify and prevent potential security risks.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">C</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">React</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">CSS3</div>
                <div className="what-tags">Kali Linux</div>
                <div className="what-tags">Network Security</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* ETHICAL HACKING / SECURITY TOOLS */}

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>SECURITY TOOLS</h3>
              <h4>Threat Detection & Vulnerability Analysis</h4>

              <p>
                Experienced in using cybersecurity tools to analyze networks,
                detect vulnerabilities, and perform security testing. I use
                professional security tools to monitor network traffic and
                strengthen system defenses.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Wireshark</div>
                <div className="what-tags">Nmap</div>
                <div className="what-tags">Burp Suite</div>
                <div className="what-tags">Metasploit</div>
                <div className="what-tags">Network Security</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}