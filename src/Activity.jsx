import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react'
import { keyframes } from '@emotion/react';

const goldShine = keyframes`
  0% { background-position-x: 200%; }
  100% { background-position-x: -200%; }
`;

const activities = {
  Hackathons: [
    { name: "HackPrinceton", description: "", date: "2024-11-09", endDate: "2024-11-11", status: "UPCOMING", location: "Princeton, New Jersey", image: "/activityLogos/princetonLogo.png?height=50&width=50" },
    { name: "HackHarvard", description: "", date: "2024-10-11", endDate: "2024-10-13", status: "COMPLETED", location: "Cambridge, Massachusetts", image: "/activityLogos/harvardLogo.png?height=50&width=50", highlight: "Hackathon Winner" },
    { name: "YHacks", description: "Yale", date: "2024-10-04", endDate: "2024-10-06", status: "COMPLETED", location: "New Haven, Connecticut", image: "/activityLogos/yaleLogo.png" },
    { name: "HackGT", description: "Georgia Tech", date: "2024-09-27", endDate: "2024-09-29", status: "Flight Canceled Due to Hurricane Helene", location: "Atlanta, Georgia", image: "/activityLogos/georgiatechLogo.png?height=50&width=50" },
    { name: "PennApps XXV", description: "UPenn", date: "2024-09-20", endDate: "2024-09-22", status: "COMPLETED", location: "Philadelphia, Pennsylvania", image: "/activityLogos/upennLogo.png?height=50&width=50" },
    { name: "UC Berkeley AI Hackathon", description: "", date: "2024-06-22", endDate: "2024-06-23", status: "COMPLETED", location: "Berkeley, California", image: "/activityLogos/berkeleyLogo.png?height=50&width=50" },
    { name: "AstroHacks", description: "High School Hackathon", date: "2024-04-13", endDate: "2024-04-13", status: "COMPLETED", location: "Irvine, California", image: "/activityLogos/astrohacksLogo.jpeg?height=50&width=50" },
  ],
  Quant_Trading: [
    { name: "Jane Street \"Odd Events\"", description: "", date: "2024-11-13", endDate: "2024-11-13", status: "COMPLETED", location: "UCLA, California", image: "/activityLogos/janestreetLogo.png?height=50&width=50" },
    { name: "Point72 Academy National Case Competition", description: "", date: "2024-10-02", endDate: "2024-10-14", status: "COMPLETED", location: "Remote / New York", image: "/activityLogos/point72Logo.png?height=50&width=50" },
    { name: "YHacks Estimathone", description: "Yale's Hackathon", date: "2024-10-05", endDate: "2024-10-05", status: "COMPLETED", location: "New Haven, Connecticut", image: "/activityLogos/yaleLogo.png" },
    { name: "Jane Street Estimathon", description: "", date: "2024-07-24", endDate: "2024-07-24", status: "COMPLETED", location: "New York, New York", image: "/activityLogos/janestreetLogo.png?height=50&width=50" },
  ],
  Organizations: [
    { name: "Goldman Sachs", description: "Insights Program", date: "2025-01-01", endDate: "", status: "LIVE", location: "", image: "/activityLogos/GoldmanSachsLogo.png?height=50&width=50", highlight: "" },
    { name: "Amazon AWS", description: "AI & ML AI Programming with Python Nanodegree - Winter Cohort", date: "", endDate: "", status: "LIVE", location: "", image: "/activityLogos/awsLogo.jpg?height=50&width=50", highlight: "Scholarship Recipient" },
    { name: "CodePath", description: "Technical Interview Course Prep - Fall Cohort", date: "", endDate: "", status: "LIVE", location: "", image: "/activityLogos/codepathLogo.jpeg?height=50&width=50", highlight: "Accepted Fellow" },
    { name: "Color Stack", description: "Black and Latinx students in Computing", date: "", endDate: "", status: "", location: "", image: "/activityLogos/colorstackLogo.jpeg?height=50&width=50" },
    { name: "SHPE", description: "Society of Hispanic Professional Engineers", date: "", endDate: "", status: "", location: "", image: "/activityLogos/shpeLogo.png?height=50&width=50" },
    { name: "ALPFA", description: "Association of Latino Professionals For America", date: "", endDate: "", status: "", location: "", image: "/activityLogos/alpfaLogo.jpg?height=50&width=50" },
    { name: "FIRST Alumni", description: "Competed in FIRST Tech Challenge", date: "", endDate: "", status: "", location: "", image: "/activityLogos/firstLogo.jpeg?height=50&width=50" },
    { name: "NAF Alumni", description: "Academy of Engineering and Academy of Information Science (Computer Science)", date: "", endDate: "", status: "", location: "", image: "/activityLogos/nafLogo.jpeg?height=50&width=50" },
    { name: "SkillsUSA Alumni", description: "Cpmpeted in Engineering Technology/Design", date: "", endDate: "", status: "", location: "", image: "/activityLogos/skillsusaLogo.png?height=50&width=50" },
    { name: "USC Third Space Youth Institute Alumni", description: "Participant of LACOE Summer 2023 Cohert. Learned the ACE-IT Skillset.", date: "", endDate: "", status: "", location: "", image: "/activityLogos/uscThirdSpace.jpg?height=50&width=50" },
  ],
  Conferences: [
    { name: "SHPE National Convention", description: "", date: "2024-10-30", endDate: "2024-11-04", status: "UPCOMING", location: "Anaheim, California", image: "/activityLogos/shpeLogo.png?height=50&width=50", highlight: "Accepted Fellow" },
    { name: "Zoomtopia 2024", description: "", date: "2024-10-09", endDate: "2024-10-09", status: "COMPLETED", location: "Remote", image: "/activityLogos/zoomLogo.png?height=50&width=50" },
    { name: "CodePath Emerging Engineers Summit", description: "", date: "2024-10-01", endDate: "2024-10-03", status: "COMPLETED", location: "Remote", image: "/activityLogos/codepathLogo.jpeg?height=50&width=50" },
    { name: "GitHub Universe '24", description: "", date: "2024-09-29", endDate: "2024-09-30", status: "COMPLETED", location: "Remote", image: "/activityLogos/githubLogo.png?height=50&width=50" },
    { name: "Snap Partner Summit 2024", description: "", date: "2024-09-17", endDate: "2024-09-17", status: "COMPLETED", location: "Remote", image: "/activityLogos/snapchatLogo.png?height=50&width=50" },
    { name: "ColorStack's Fall '24 Career Fair", description: "", date: "2024-08-22", endDate: "2024-08-23", status: "COMPLETED", location: "Remote", image: "/activityLogos/colorstackLogo.jpeg?height=50&width=50" },
    { name: "Roblox Building Blox", description: "Beyond The Code!", date: "2024-08-15", endDate: "2024-08-15", status: "COMPLETED", location: "Remote", image: "/activityLogos/robloxLogo.jpg?height=50&width=50" },
    { name: "NASA Beyond STEM", description: "Exploring Diverse Internship Paths at NASA", date: "2024-08-08", endDate: "2024-08-08", status: "COMPLETED", location: "Remote", image: "/activityLogos/nasaLogo.png?height=50&width=50" },
    { name: "NASA Internship Experience", description: "Insights from Interns and Mentors", date: "2024-07-26", endDate: "2024-07-26", status: "COMPLETED", location: "Remote", image: "/activityLogos/nasaLogo.png?height=50&width=50" },
  ],
  USC: [
    { name: "HUMANS LAB, The University of Southern California Information Sciences Institute", description: "Undergraduate Research Intern", date: "", endDate: "", status: "LIVE", location: "Information Sciences Institute", image: "/activityLogos/uscisiLogo.jpg?height=50&width=50" },
    { name: "USC Viterbi Engineering", description: "Career & Internship Fair - Fall 2024", date: "2024-10-02", endDate: "2024-10-02", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
    { name: "USC LeetCode Jam Night", description: "", date: "2024-09-18", endDate: "2024-09-18", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
    { name: "USC Fall Career Fair 2024", description: "", date: "2024-09-12", endDate: "2024-09-12", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
    { name: "USC Entrepreneurship Expo", description: "", date: "2024-09-05", endDate: "2024-09-05", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
    { name: "USC Viterbi Fair", description: "", date: "2024-09-05", endDate: "2024-09-05", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
    { name: "USC Career Carnival", description: "", date: "2024-09-04", endDate: "2024-09-04", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
    { name: "USC Involvement Fair", description: "", date: "2024-08-29", endDate: "2024-08-29", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
  ],
}

const updateActivityStatus = (activity) => {
  if (!activity.status || activity.status === "Flight Canceled Due to Hurricane Helene" || activity.status === "LIVE") return activity;

  const now = new Date()
  const startDate = new Date(activity.date)
  const endDate = new Date(activity.endDate)

  if (now < startDate) {
    return { ...activity, status: "UPCOMING" }
  } else if (now >= startDate && now <= endDate) {
    return { ...activity, status: "LIVE" }
  } else {
    return { ...activity, status: "COMPLETED" }
  }
}

const HighlightedActivity = ({ activity }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 relative group transition-all duration-300 hover:shadow-2xl hover:scale-105">
    {activity.name === "HackHarvard" ? (
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
    ) : (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
    )}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-shine"></div>
    {activity.name === "HackHarvard" && (
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-25"
        style={{
          animation: 'goldShine 2s infinite linear',
          backgroundSize: '200% 100%',
          backgroundPositionX: '100%',
        }}
      ></div>
    )}
    <div className="relative z-10">
      <div className="flex items-center">
        <img src={activity.image} alt={`${activity.name} Logo`} className="w-16 h-16 mr-4 rounded transition-transform duration-300 group-hover:scale-110" />
        <div>
          <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">{activity.name}</h4>
          {activity.highlight && (
            <p className="text-yellow-400 text-sm font-semibold mt-1">{activity.highlight}</p>
          )}
          <p className="text-gray-300 mb-2">{activity.description}</p>
          {activity.status && (
            <p className={`text-sm font-medium ${
              activity.status === 'Scholarship Recipient' || activity.status === 'Accepted Fellow' ? 'text-yellow-400':
              activity.status === 'UPCOMING' ? 'text-blue-400' :
              activity.status === 'LIVE' ? 'text-green-400' :
              activity.status === 'COMPLETED' ? 'text-green-400' :
              activity.status === 'Flight Canceled Due to Hurricane Helene' ? 'text-red-400' :
              'text-gray-400'
            }`}>
              {activity.status === 'LIVE' ? 'LIVE' : activity.status}
            </p>
          )}
          {activity.date && (
            <p className="text-gray-400 text-sm mt-1">
              {new Date(activity.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              {activity.endDate && activity.endDate !== activity.date && ` - ${new Date(activity.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`}
            </p>
          )}
          {activity.location && (
            <div className="flex items-center text-sm text-gray-400 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{activity.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default function MyActivity() {
  const [selectedTopic, setSelectedTopic] = useState('Hackathons')
  const [showAll, setShowAll] = useState(false)
  const [updatedActivities, setUpdatedActivities] = useState(activities)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes goldShine {
        0% { background-position-x: 200%; }
        100% { background-position-x: -200%; }
      }
      @keyframes shine {
        0% { background-position-x: -200%; }
        100% { background-position-x: 200%; }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() =>   {
    const updateAllActivities = () => {
      const updated = Object.keys(activities).reduce((acc, topic) => {
        acc[topic] = activities[topic].map(updateActivityStatus)
        return acc
      }, {})
      setUpdatedActivities(updated)
    }

    updateAllActivities()
    const intervalId = setInterval(updateAllActivities, 60000) // Update every minute

    return () => clearInterval(intervalId)
  }, [])

  const displayedActivities = showAll ? updatedActivities[selectedTopic] : updatedActivities[selectedTopic]?.slice(0, 4)

  const highlightedActivities = [
    updatedActivities.Hackathons?.find(a => a.name === "HackHarvard"), 
    updatedActivities.USC?.[0],  
    updatedActivities.Organizations?.[0],
    updatedActivities.Organizations?.[1],
  ].filter(Boolean)

  return (
    <section className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">My Activity</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold  mb-6 text-center">Featured Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlightedActivities.map((activity, index) => (
              <HighlightedActivity key={index} activity={activity} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(activities).map((topic) => (
            <button
              key={topic}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTopic === topic
                  ? 'bg-white text-gray-900'
                  : 'bg-gray-800  text-white hover:bg-gray-700'
              }`}
              onClick={() => {
                setSelectedTopic(topic)
                setShowAll(false)
              }}
            >
              {topic}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedActivities?.map((activity, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <img src={activity.image} alt={activity.name} className="w-12 h-12 mr-4 rounded transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors duration-300">{activity.name}</h3>
                    {activity.description && (
                      <p className="text-sm text-gray-400">{activity.description}</p>
                    )}
                  </div>
                </div>
                {activity.date && (
                  <p className="text-blue-400 mb-2">
                    {new Date(activity.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    {activity.endDate && activity.endDate !== activity.date && ` - ${new Date(activity.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`}
                  </p>
                )}
                {activity.status && (
                  <p className={`text-sm font-medium mb-2 ${
                    activity.status === 'COMPLETED' ? 'text-green-400' :
                    activity.status === 'UPCOMING' ? 'text-blue-400' :
                    activity.status === 'LIVE' ? 'text-green-400' :
                    activity.status === 'Flight Canceled Due to Hurricane Helene' ? 'text-red-400' :
                    activity.status === 'Scholarship Recipient' ? 'text-yellow-400' :
                    activity.status === 'Accepted Fellow' ? 'text-yellow-400' :
                    'text-gray-400'
                  }`}>
                    {activity.status === 'LIVE' ? 'LIVE' : activity.status}
                  </p>
                )}
                {activity.location && (
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{activity.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {updatedActivities[selectedTopic]?.length > 4 && (
          <div className="text-center mt-12">
            <button
              className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors flex items-center mx-auto"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  See More
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}