import React, { useState, useEffect } from 'react';
import { Typography, Collapse, Card, Timeline } from 'antd';
import { Helmet } from 'react-helmet-async';
import './Hawkathon.css';
import hawkathonLogo from '../assets/hawkathon.jpeg';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const sections = [
  { id: 'about', name: 'About', icon: 'info' },
  { id: 'prize-pool', name: 'Prize Pool', icon: 'emoji_events' },
  { id: 'event-structure', name: 'Event Structure', icon: 'event' },
  { id: 'rules', name: 'Rules', icon: 'gavel' },
  { id: 'grading', name: 'Grading', icon: 'grade' },
  { id: 'faq', name: 'FAQ', icon: 'help' }
];

const Hawkathon = ({ seo }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close navigation after clicking a link
      setIsNavOpen(false);
    }
  };

  const faqs = [
    {
      question: "What is Hawkathon?",
      answer: "Hawkathon is ULM's premier hackathon event where students collaborate to build innovative AI-powered solutions. It's a 3-day event focused on creating impactful projects while learning and networking with fellow developers. The event features workshops, mentorship sessions, and exciting prizes for the best projects."
    },
    {
      question: "When and where is the event?",
      answer: "The event takes place from April 11th to April 13th, 2025. Day 1 and Day 2 will be held at Hemphill Hall, while Day 3 (presentations) will be at The Hangar Hall. Attendance is mandatory on Day 1 (April 11th) and Day 3 (April 13th), while Day 2 (April 12th) is optional but recommended for additional development time."
    },
    {
      question: "What are the team requirements?",
      answer: "Teams can consist of 1-4 members, and each team MUST include at least one freshman or sophomore member. If you don't have a team, don't worry! We have a team formation platform where you can find teammates, or we can help match you with others during the event."
    },
    {
      question: "What's the registration process and fee?",
      answer: "Registration requires a $10 fee per team (not per person). This fee must be paid within 3 days of signing up to confirm your participation. The fee is non-refundable. Registration is on a first-come, first-served basis as we have limited slots available."
    },
    {
      question: "What's the prize structure?",
      answer: "The total prize pool is $1,500, distributed as follows: First Place: $600 + Certificate, Second Place: $400 + Certificate, Third Place: $200 + Certificate. Additionally, Day 3 features special contests including a Typing Contest (prize: T-shirt) and Quiz Contest (prize: $25 Gift Card). All participants receive digital certificates."
    },
    {
      question: "What should I bring to the event?",
      answer: "Essential items include: Your laptop and charger, any additional devices needed for development, student ID, and any personal items you might need. Food and refreshments will be provided at the venue, but you're welcome to bring your own snacks."
    },
    {
      question: "Can we use AI tools in our project?",
      answer: "Yes, you can use AI tools (like code generation platforms) to assist in development. However, there are important guidelines: 1) You must thoroughly review and modify any AI-generated code, 2) You should be able to explain ALL code in your project, including AI-generated portions, 3) The overall project must be original and innovative, not just a wrapper around AI tools."
    },
    {
      question: "How are projects evaluated?",
      answer: "Projects are evaluated based on six main criteria: Presentation (10 points), User-Friendly UI (20 points), Impact on Community (20 points), Technical Design & Implementation (10 points), Features (20 points), and AI Integration (20 points). The top 4 teams will get to present their projects on Day 3."
    },
    {
      question: "What resources are provided?",
      answer: "We provide: Workspace with power outlets, Wi-Fi access (note: some websites may be blocked by ULM's firewall), food and refreshments, mentorship from industry experts, and technical workshops. Teams are responsible for their own development devices and finding alternative resources if needed."
    },
    {
      question: "Do I need prior coding experience?",
      answer: "While basic programming knowledge is helpful, we welcome participants of all skill levels. The event focuses on learning and innovation, and we encourage diverse teams with different skill sets. Mentors will be available to help guide you throughout the event."
    },
    {
      question: "What kind of projects can we build?",
      answer: "You can build any type of software project that leverages AI and aligns with our theme. This could include web applications, mobile apps, AI/ML solutions, automation tools, or any innovative tech solution. The key is to create something that solves a real problem and demonstrates creative use of AI."
    },
    {
      question: "What happens after registration?",
      answer: "After registration and fee payment, you'll receive: 1) A confirmation email with event details, 2) Access to our event communication channel, 3) Pre-event resources and guidelines, 4) Information about team formation if needed. Keep checking your email for important updates leading up to the event."
    }
  ];

  return (
    <div className="hawkathon-container">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      {/* Section Navigation */}
      <nav className={`section-nav ${isNavOpen ? '' : 'closed'}`}>
        <button 
          className="section-nav-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="material-icons">
            chevron_left
          </span>
        </button>
        <ul className="section-nav-list">
          {sections.map((section) => (
            <li key={section.id} className="section-nav-item">
              <a
                href={`#${section.id}`}
                className={`section-nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                <span className="material-icons section-nav-icon">{section.icon}</span>
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hawkathon-content">
        <div className="header-section">
          <div className="logo-container">
            <img src={hawkathonLogo} alt="Hawkathon Logo" className="hawkathon-logo" />
          </div>
          <Title level={1} className="main-title">Hawkathon 2025</Title>
        </div>

        {/* About Section */}
        <Card className="about-card" id="about">
          <Title level={2}>About Hawkathon</Title>
          <Paragraph className="about-text">
            Welcome to ULM's premier hackathon event! Hawkathon is a 3-day innovation challenge where students come together to transform ideas into reality. This year's theme focuses on leveraging AI to create solutions that matter. Whether you're a coding expert or just starting your tech journey, Hawkathon provides the perfect platform to learn, create, and innovate.
          </Paragraph>
          <Paragraph className="about-text">
            Join us for an exciting weekend of coding, collaboration, and creativity. Work alongside fellow innovators, receive mentorship from industry experts, and showcase your skills while competing for amazing prizes. Hawkathon is more than just a competition - it's an opportunity to push boundaries, learn new technologies, and make lasting connections in the tech community.
          </Paragraph>
        </Card>

        {/* Prize Pool Section */}
        <Card className="prize-pool-card" id="prize-pool">
          <Title level={2}>Prize Pool</Title>
          <div className="prize-grid">
            <div className="prize-item first-prize">
              <span className="material-icons prize-icon">emoji_events</span>
              <Title level={3}>First Place</Title>
              <Text className="prize-amount">$600</Text>
              <Text className="prize-extras">+ Physical Certificate</Text>
            </div>
            <div className="prize-item second-prize">
              <span className="material-icons prize-icon">emoji_events</span>
              <Title level={3}>Second Place</Title>
              <Text className="prize-amount">$400</Text>
              <Text className="prize-extras">+ Physical Certificate</Text>
            </div>
            <div className="prize-item third-prize">
              <span className="material-icons prize-icon">emoji_events</span>
              <Title level={3}>Third Place</Title>
              <Text className="prize-amount">$200</Text>
              <Text className="prize-extras">+ Physical Certificate</Text>
            </div>
          </div>
          <div className="bonus-prizes">
            <Title level={4}>Day 3 Special Contests</Title>
            <ul>
              <li>
                <span className="material-icons contest-icon">keyboard</span>
                <strong>Typing Contest</strong>
                <p>Prize: T-shirt</p>
              </li>
              <li>
                <span className="material-icons contest-icon">quiz</span>
                <strong>Quiz Contest</strong>
                <p>Prize: $25 Gift Card</p>
              </li>
            </ul>
            <Text className="participation-note">
              <span className="material-icons">verified</span>
              All participants will receive a digital certificate of participation
            </Text>
          </div>
        </Card>
        
        {/* Event Structure Section */}
        <Card className="schedule-card" id="event-structure">
          <Title level={2}>Event Structure</Title>
          <Collapse>
            <Panel header="Day 1 (April 11): Hacking & Mentorship" key="1">
              <Text strong>Venue: <a href="https://maps.app.goo.gl/RLSU2SuuhSeK679U9" target="_blank" rel="noopener noreferrer">Hemphill Hall</a></Text>
              <Timeline>
                <Timeline.Item>
                  <Text strong>10:00 AM – 10:30 AM: Check-In & Auditorium Gathering</Text>
                  <ul>
                    <li>Participant registration & seating</li>
                    <li>Brief event guidelines</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>10:30 AM – 11:00 AM: Welcome & Theme Announcement</Text>
                  <ul>
                    <li>Official event kickoff</li>
                    <li>Theme reveal & objectives</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>11:00 AM – 11:30 AM: Guest Speaker Session</Text>
                  <ul>
                    <li>Keynote speech (tech/innovation focus)</li>
                    <li>Q&A (if time permits)</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>11:30 AM – 11:50 AM: Project Demo Walkthrough</Text>
                  <ul>
                    <li>Facilitators demonstrate sample project</li>
                    <li>Clarify hackathon expectations</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>11:50 AM – 12:00 PM: ⚡ Speed Typing Competition</Text>
                  <ul>
                    <li>5-minute coding/typing challenge</li>
                    <li>Winner announced immediately</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>12:00 PM – 2:00 PM: Hackathon: Project Work</Text>
                  <ul>
                    <li>Team collaboration begins</li>
                    <li>Mentors available for support</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>2:00 PM – 2:30 PM: Lunch Break</Text>
                  <ul>
                    <li>Meal distribution</li>
                    <li>Informal networking</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>2:30 PM – 3:45 PM: Hackathon: Project Work</Text>
                  <ul>
                    <li>Finalize project features</li>
                    <li>Debugging/testing phase</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>3:45 PM – 4:00 PM: Code Submission & Wrap-Up</Text>
                  <ul>
                    <li>Submit projects via GitHub</li>
                    <li>Day 1 closing remarks</li>
                  </ul>
                </Timeline.Item>
              </Timeline>
            </Panel>

            <Panel header="Day 2 (April 12): Hacking & Mentorship" key="2">
              <Text strong>Venue: <a href="https://maps.app.goo.gl/RLSU2SuuhSeK679U9" target="_blank" rel="noopener noreferrer">Hemphill Hall</a></Text>
              <Text type="warning" style={{ marginTop: '1rem', display: 'block' }}>Note: This is an optional day with snacks provided (no full meals beyond lunch).</Text>
              <Timeline style={{ marginTop: '1rem' }}>
                <Timeline.Item>
                  <Text strong>10:00 AM – 10:30 AM: Check-In & Team Huddle</Text>
                  <ul>
                    <li>Check-In at Hemphill front door</li>
                    <li>Daily goals announcement</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>10:30 AM – 2:00 PM: Deep Work Session</Text>
                  <ul>
                    <li>Intensive project development</li>
                    <li>Mentor check-ins available</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>2:00 PM – 2:30 PM: Snacks Break</Text>
                  <ul>
                    <li>Snacks service</li>
                    <li>Casual networking</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>2:30 PM – 3:45 PM: Final Sprint</Text>
                  <ul>
                    <li>Last-minute refinements</li>
                    <li>Presentation preparations</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>3:45 PM – 4:00 PM: Project Submission</Text>
                  <ul>
                    <li>Submit project process via Google form</li>
                    <li>Code must be submitted via GitHub/GitLab</li>
                    <li>Closing announcements</li>
                  </ul>
                </Timeline.Item>
              </Timeline>
            </Panel>

            <Panel header="Day 3 (April 13): Final Day" key="3">
              <Text strong>Venue: <a href="https://maps.app.goo.gl/UPAMJD2ttcAA2eG48" target="_blank" rel="noopener noreferrer">Hangar Hall</a></Text>
              <Timeline style={{ marginTop: '1rem' }}>
                <Timeline.Item>
                  <Text strong>9:00 AM – 9:45 AM: Check-In</Text>
                  <ul>
                    <li>Participant Check-in at front door</li>
                    <li>Setup demo and presentation</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>9:45 AM – 10:00 AM: Morning Kickoff</Text>
                  <ul>
                    <li>Quick announcements & final reminders</li>
                    <li>Introduction of judges & mentors</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>10:00 AM – 12:30 PM: Project Display & Judging</Text>
                  <ul>
                    <li>Teams showcase their projects</li>
                    <li>Judges visit teams, ask questions, and evaluate projects</li>
                    <li>Each team gets a maximum of 8 minutes</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>12:30 PM – 1:30 PM: Break & Quiz Quest</Text>
                  <ul>
                    <li>Participants relax and have refreshments</li>
                    <li>Judges deliberate and score calculations take place</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>1:30 PM – 2:15 PM: Project Presentations</Text>
                  <ul>
                    <li>The top 4 teams present their projects</li>
                    <li>Each finalist gets 10 minutes</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>2:15 PM – 3:45 PM: Award Ceremony & Closing Remarks</Text>
                  <ul>
                    <li>Winners announced</li>
                    <li>Thank you to sponsors, mentors, and participants</li>
                    <li>Group photo & wrap-up</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <Text strong>3:45 PM – End: Clean-Up</Text>
                  <ul>
                    <li>Participants and organizers clean the venue</li>
                  </ul>
                </Timeline.Item>
              </Timeline>
            </Panel>
          </Collapse>
        </Card>

        {/* Rules Section */}
        <Card className="rules-card" id="rules">
          <Title level={2}>GDSC Hawkathon Rules</Title>
          
          <Title level={4}>1. Submission Requirements</Title>
          <Paragraph>
            <strong>Daily Progress Forms:</strong>
            <ul>
              <li>Day 1: Project summary, planned features, GitHub repo link (created at event start)</li>
              <li>Day 2: Updated GitHub link, implemented features, draft of final presentation slides</li>
            </ul>
          </Paragraph>

          <Title level={4}>2. Event Attendance</Title>
          <Paragraph>
            <ul>
              <li><strong>Compulsory Days:</strong> Attendance on April 11 and April 13 is mandatory for all participants</li>
              <li><strong>Optional Day:</strong> April 12 is optional, but participants are encouraged to attend for continued project development and access to venue resources, including snacks</li>
            </ul>
          </Paragraph>

          <Title level={4}>3. Presentation Opportunity</Title>
          <Paragraph>
            <ul>
              <li><strong>Top 4 Teams:</strong> Only the top 4 teams, as determined by the judges, will be given an opportunity to present their project for 8 minutes during the final presentation session</li>
            </ul>
          </Paragraph>

          <Title level={4}>4. Code Management</Title>
          <Paragraph>
            <ul>
              <li><strong>GitHub:</strong> Upload all code with clear commit messages; the repository must be public</li>
              <li><strong>Plagiarism:</strong> Code is manually reviewed for plagiarism; copying without attribution leads to immediate disqualification</li>
            </ul>
          </Paragraph>

          <Title level={4}>5. Project Originality</Title>
          <Paragraph>
            <ul>
              <li>Projects must be developed during the event—no pre-existing work allowed</li>
              <li>Simple wrappers of existing frameworks/libraries without innovation are disqualified</li>
              <li>Open-source contributions are permitted if components are identified, and original innovation is evident</li>
              <li>Participants may utilize AI tools (e.g., code generation platforms) to assist in development. However, any code generated by AI must be thoroughly reviewed, modified, and explained by the team</li>
            </ul>
          </Paragraph>

          <Title level={4}>6. Network/Technical Requirements</Title>
          <Paragraph>
            <ul>
              <li><strong>Alternate Resources:</strong> Participants should be aware that the ULM network blocks certain websites and databases through its firewall. Teams are responsible for finding and using alternative resources to access necessary tools or information</li>
            </ul>
          </Paragraph>

          <Title level={4}>7. Consequences of Violations</Title>
          <Paragraph>
            <ul>
              <li>Immediate disqualification for rule violations (e.g., plagiarism, non-original work)</li>
              <li>Violations will be assessed by the organizing team, with penalties decided through a team vote</li>
            </ul>
          </Paragraph>

          <Title level={4}>8. Code Explanation</Title>
          <Paragraph>
            <ul>
              <li>Organizers may request a code explanation at any time</li>
              <li>AI tools are allowed if the project remains original, and you can fully explain your code; inability to do so may lead to disqualification</li>
            </ul>
          </Paragraph>

          <Title level={4}>9. General Rules</Title>
          <Paragraph>
            <ul>
              <li><strong>Conduct:</strong> Maintain respectful, professional behavior. Zero tolerance for cheating, harassment, discrimination, or disruptive behavior</li>
              <li><strong>Team Composition:</strong> Teams must consist of 1 to 4 registered participants (teams must include at least one freshman or sophomore)</li>
              <li><strong>Intellectual Property:</strong> You retain ownership, but organizers may showcase your project for promotional purposes</li>
              <li><strong>Judging:</strong> Projects are evaluated on align with theme, innovation, functionality, design, and presentation. Judges' decisions are final</li>
              <li><strong>Time Management:</strong> All tasks and submissions must meet the deadlines; no extensions will be granted</li>
              <li><strong>Communication:</strong> Use designated channels to provide updates and ask questions; stay informed through official event communications</li>
              <li><strong>Technical Requirements:</strong> Participants are responsible for their own hardware and software; organizers are not liable for technical issues</li>
              <li><strong>Compliance:</strong> Follow all local laws, university policies, and event guidelines</li>
              <li><strong>Privacy:</strong> Respect the privacy of fellow participants; do not share personal information without consent</li>
              <li><strong>Event Updates:</strong> Regularly check official channels for any updates or changes to the rules</li>
            </ul>
          </Paragraph>

          <Title level={4}>10. Additional Notes</Title>
          <Paragraph>
            <ul>
              <li>For rule clarifications or further questions, contact the organizers</li>
              <li>Organizers reserve the right to update these rules as necessary; any changes will be communicated promptly</li>
              <li>Participation in Hawkathon implies acceptance of these rules and the decisions of the organizers and judges</li>
            </ul>
          </Paragraph>
        </Card>

        {/* Grading Section */}
        <Card className="rubric-card" id="grading">
          <Title level={2}>Grading Rubric</Title>
          <Collapse>
            <Panel header="Click to view detailed grading criteria" key="1">
              <div className="rubric-table">
                <table>
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Excellent</th>
                      <th>Good</th>
                      <th>Average</th>
                      <th>Poor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Presentation</strong>
                        <div className="points">10 Points</div>
                      </td>
                      <td>Clear, highly organized, and engaging presentation with excellent clarity, slide design, verbal delivery, and audience interaction.</td>
                      <td>Good clarity and design with minor issues; generally well-organized and clear delivery.</td>
                      <td>Basic presentation with noticeable issues in clarity, design, or delivery.</td>
                      <td>Lacks clarity, poorly designed slides, and ineffective or disorganized delivery.</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>User-Friendly UI</strong>
                        <div className="points">20 Points</div>
                      </td>
                      <td>Intuitive, visually appealing, and highly functional interface that enhances the user experience.</td>
                      <td>Generally user-friendly with a few minor usability issues.</td>
                      <td>Basic functionality: the interface works but is not very intuitive or engaging.</td>
                      <td>Confusing, cluttered, or non-functional UI that hinders usability.</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Impact on the Community</strong>
                        <div className="points">20 Points</div>
                      </td>
                      <td>Project offers significant, positive impact with clear, tangible benefits to the community.</td>
                      <td>Provides good impact with notable benefits, though some aspects could be stronger.</td>
                      <td>Some positive impact is evident but with limited scope or benefits.</td>
                      <td>Little or no discernible impact on the community.</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Technical Design, Implementation and Evaluation</strong>
                        <div className="points">10 Points</div>
                      </td>
                      <td>Implements industry-standard tools and design patterns; code is modular, efficient, and secure.</td>
                      <td>Adheres to best practices with generally clean, modular code and standard libraries.</td>
                      <td>Meets basic requirements but shows noticeable inconsistencies and limited explanation of design choices.</td>
                      <td>Uses ad-hoc methods with disorganized code, hindering reliability and maintainability.</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Features</strong>
                        <div className="points">20 Points</div>
                      </td>
                      <td>Offers robust and innovative features that effectively address the problem with creative, well-thought-out solutions.</td>
                      <td>Provides good features that address the problem, though some aspects may be less innovative or only partially effective.</td>
                      <td>Features are basic and solve the problem only partially or in a limited way.</td>
                      <td>Lacks effective features; the solution fails to adequately address the problem.</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>AI Integration</strong>
                        <div className="points">20 Points</div>
                      </td>
                      <td>Exceptional use of AI that significantly enhances functionality and overall project impact.</td>
                      <td>Good integration of AI that clearly benefits the project.</td>
                      <td>Basic integration of AI with limited impact on the overall project.</td>
                      <td>No significant AI integration or AI usage that does not add value to the project.</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-points">
                  <strong>Overall Main Points: 100</strong>
                </div>
              </div>
            </Panel>
          </Collapse>
        </Card>

        {/* FAQ Section */}
        <Card className="faq-card" id="faq">
          <Title level={2}>Frequently Asked Questions</Title>
          <Collapse>
            {faqs.map((faq, index) => (
              <Panel header={faq.question} key={index}>
                <p>{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </Card>
      </div>
    </div>
  );
};

export default Hawkathon; 