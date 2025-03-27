import React from 'react';
import { Typography, Collapse, Card } from 'antd';
import { Helmet } from 'react-helmet-async';
import './Hawkathon.css';
import hawkathonLogo from '../assets/hawkathon.jpeg';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const Hawkathon = ({ seo }) => {
  const faqs = [
    {
      question: "What is Hawkathon?",
      answer: "Hawkathon is ULM's premier hackathon event where students come together to build innovative solutions. It's a 3-day event focused on leveraging technology to create impactful projects."
    },
    {
      question: "When is the event?",
      answer: "The event takes place from April 11th to April 13th, 2025. Attendance is mandatory on April 11th (Day 1) and April 13th (Day 3), while April 12th is optional but recommended."
    },
    {
      question: "Who can participate?",
      answer: "Teams of 1-4 members can participate. Each team must include at least one freshman or sophomore member."
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a $10 registration fee per team. This must be paid within 3 days of signing up to confirm participation."
    },
    {
      question: "Can we use AI tools?",
      answer: "Yes, participants may utilize AI tools for code generation, but all code must be thoroughly reviewed, modified, and explained by the team. You should be able to explain any code in your project."
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, charger, and any other devices you need for development. Food and refreshments will be provided at the venue."
    },
    {
      question: "What's the prize pool?",
      answer: "The total prize pool is $1,500, which includes cash prizes and additional rewards. The exact distribution will be announced during the event."
    },
    {
      question: "Do I need to know programming to participate?",
      answer: "While basic programming knowledge is helpful, we welcome participants of all skill levels. The event is about learning and innovation, and we encourage diverse teams with different skill sets."
    },
    {
      question: "Can I start working on my project before the event?",
      answer: "No, all project work must be done during the event. You can brainstorm ideas beforehand, but no code or development work should be started before the official start time."
    },
    {
      question: "What if I don't have a team?",
      answer: "Don't worry! We have a team formation platform where you can find teammates. You can also attend as an individual, and we'll help you find a team during the event."
    },
    {
      question: "Is food provided during the event?",
      answer: "Yes, food will be available at the venue. We'll ensure there are options available throughout the event days."
    },
    {
      question: "What kind of projects can we build?",
      answer: "You can build any type of software project that aligns with our theme. This could include web applications, mobile apps, AI/ML solutions, or any other innovative tech solution."
    },
    {
      question: "How are projects judged?",
      answer: "Projects are evaluated based on innovation, technical complexity, alignment with the theme, functionality, design, and presentation quality. Judges will also consider the effective use of AI tools and the team's ability to explain their code."
    }
  ];

  return (
    <div className="hawkathon-container">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <div className="hawkathon-content">
        <div className="header-section">
          <div className="logo-container">
            <img src={hawkathonLogo} alt="Hawkathon Logo" className="hawkathon-logo" />
          </div>
          <Title level={1} className="main-title">Hawkathon 2025</Title>
        </div>

        {/* About Hawkathon */}
        <Card className="about-card">
          <Title level={2}>About Hawkathon</Title>
          <Paragraph className="about-text">
            Welcome to ULM's premier hackathon event! Hawkathon is a 3-day innovation challenge where students come together to transform ideas into reality. This year's theme focuses on leveraging AI to create solutions that matter. Whether you're a coding expert or just starting your tech journey, Hawkathon provides the perfect platform to learn, create, and innovate.
          </Paragraph>
          <Paragraph className="about-text">
            Join us for an exciting weekend of coding, collaboration, and creativity. Work alongside fellow innovators, receive mentorship from industry experts, and showcase your skills while competing for amazing prizes. Hawkathon is more than just a competition - it's an opportunity to push boundaries, learn new technologies, and make lasting connections in the tech community.
          </Paragraph>
        </Card>

        {/* Prize Pool */}
        <Card className="prize-pool-card">
          <Title level={2}>Prize Pool</Title>
          <div className="prize-grid">
            <div className="prize-item first-prize">
              <span className="material-icons prize-icon">emoji_events</span>
              <Title level={3}>First Place</Title>
              <Text className="prize-amount">$700</Text>
              <Text className="prize-extras">+ Special Recognition</Text>
            </div>
            <div className="prize-item second-prize">
              <span className="material-icons prize-icon">emoji_events</span>
              <Title level={3}>Second Place</Title>
              <Text className="prize-amount">$500</Text>
              <Text className="prize-extras">+ Tech Swag Pack</Text>
            </div>
            <div className="prize-item third-prize">
              <span className="material-icons prize-icon">emoji_events</span>
              <Title level={3}>Third Place</Title>
              <Text className="prize-amount">$300</Text>
              <Text className="prize-extras">+ Digital Certificates</Text>
            </div>
          </div>
          <div className="bonus-prizes">
            <Title level={4}>Additional Awards</Title>
            <ul>
              <li>Best UI/UX Design</li>
              <li>Most Innovative Use of AI</li>
              <li>People's Choice Award</li>
              <li>Best Freshman/Sophomore Team</li>
            </ul>
          </div>
        </Card>
        
        {/* Event Date */}
        <Card className="date-card">
          <Title level={3}>Event Date</Title>
          <Text className="date-text">April 11th - 13th</Text>
        </Card>

        {/* Schedule */}
        <Card className="schedule-card">
          <Title level={3}>Schedule</Title>
          <Text className="schedule-text">Will be added soon</Text>
        </Card>

        {/* Rules */}
        <Card className="rules-card">
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

          <Title level={4}>3. Team Composition</Title>
          <Paragraph>
            <ul>
              <li>Teams must consist of 1 to 4 registered participants</li>
              <li>Each team must include at least one freshman or sophomore member</li>
              <li>Team members must be currently enrolled students</li>
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

          <Title level={4}>6. Consequences of Violations</Title>
          <Paragraph>
            <ul>
              <li>Immediate disqualification for rule violations (e.g., plagiarism, non-original work)</li>
              <li>Violations will be assessed by the organizing team, with penalties decided through a team vote</li>
            </ul>
          </Paragraph>

          <Title level={4}>7. Code Explanation</Title>
          <Paragraph>
            <ul>
              <li>Organizers may request a code explanation at any time</li>
              <li>AI tools are allowed if the project remains original, and you can fully explain your code; inability to do so may lead to disqualification</li>
            </ul>
          </Paragraph>

          <Title level={4}>8. General Rules</Title>
          <Paragraph>
            <ul>
              <li><strong>Conduct:</strong> Maintain respectful, professional behavior. Zero tolerance for cheating, harassment, discrimination, or disruptive behavior</li>
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

          <Title level={4}>9. Additional Notes</Title>
          <Paragraph>
            <ul>
              <li>For rule clarifications or further questions, contact the organizers</li>
              <li>Organizers reserve the right to update these rules as necessary; any changes will be communicated promptly</li>
              <li>Participation in Hawkathon implies acceptance of these rules and the decisions of the organizers and judges</li>
            </ul>
          </Paragraph>
        </Card>

        {/* FAQs */}
        <Card className="faq-card">
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