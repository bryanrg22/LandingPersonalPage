import React, { useState } from 'react'
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react'

const activities = {
    Hackathons: [
      { name: "Cal Hacks 11.0", description: "", date: "OCT 18 - OCT 20, 2024", status: "UPCOMING", location: "The Metreon San Francisco, California", image: "/activityLogos/berkeleyLogo.png?height=50&width=50" },
      { name: "HackHarvard", description: "", date: "OCT 11 - OCT 13, 2024", status: "UPCOMING", location: "Cambridge, Massachusetts", image: "/activityLogos/harvardLogo.png?height=50&width=50" },
      { name: "YHacks", description: "Yale", date: "OCT 4 - OCT 6, 2024", status: "UPCOMING", location: "New Haven, Connecticut", image: "/activityLogos/yaleLogo.png" },
      { name: "HackGT", description: "Georgia Tech", date: "SEPT 27 - SEPT 29, 2024", status: "Flight Canceled Due to Hurricane Helene", location: "Atlanta, Georgia", image: "/activityLogos/georgiatechLogo.png?height=50&width=50" },
      { name: "PennApps XXV", description: "UPenn", date: "SEPT 20 - SEPT 22, 2024", status: "COMPLETED", location: "Philadelphia, Pennsylvania", image: "/activityLogos/upennLogo.png?height=50&width=50" },
      { name: "UC Berkeley AI Hackathon", description: "", date: "JUN 22 - JUN 23, 2024", status: "COMPLETED", location: "Berkeley, California", image: "/activityLogos/berkeleyLogo.png?height=50&width=50" },
      { name: "AstroHacks", description: "High Shool Hackathon", date: "APR 13, 2024", status: "COMPLETED", location: "Irvine, California", image: "/activityLogos/astrohacksLogo.jpeg?height=50&width=50" },
    ],
    Organizations: [
      { name: "CodePath", description: "Technical Interview Course Prep - Fall Cohort", date: "", status: "", location: "", image: "/activityLogos/codepathLogo.jpeg?height=50&width=50" },
      { name: "Color Stack", description: "Black and Latinx students in Computing", date: "", status: "", location: "", image: "/activityLogos/colorstackLogo.jpeg?height=50&width=50" },
      { name: "SHPE", description: "Society of Hispanic Professional Engineers", date: "", status: "", location: "", image: "/activityLogos/shpeLogo.png?height=50&width=50" },
      { name: "ALPFA", description: "Association of Latino Professionals For America", date: "", status: "", location: "", image: "/activityLogos/alpfaLogo.jpg?height=50&width=50" },
      { name: "FIRST Alumni", description: "Competed in FIRST Tech Challenge", date: "", status: "", location: "", image: "/activityLogos/firstLogo.jpeg?height=50&width=50" },
      { name: "NAF Alumni", description: "Academy of Engineering and Academy of Information Science (Computer Science)", date: "", status: "", location: "", image: "/activityLogos/nafLogo.jpeg?height=50&width=50" },
      { name: "SkillsUSA Alumni", description: "Cpmpeted in Engineering Technology/Design", date: "", status: "", location: "", image: "/activityLogos/skillsusaLogo.png?height=50&width=50" },
    ],
    Conferences: [
      { name: "SHPE National Convention", description: "", date: "OCT 30 - NOV 4", status: "UPCOMING", location: "Anaheim, California", image: "/activityLogos/shpeLogo.png?height=50&width=50" },
      { name: "Zoomtopia 2024", description: "", date: "OCT 9, 2024", status: "UPCOMING", location: "Remote", image: "/activityLogos/zoomLogo.png?height=50&width=50" },
      { name: "CodePath Emerging Engineers Summit", description: "", date: "OCT 1 - OCT 3", status: "LIVE", location: "Remote", image: "/activityLogos/codepathLogo.jpeg?height=50&width=50" },
      { name: "GitHub Universe '24", description: "", date: "SEPT 29 - SEPT 30, 2024", status: "COMPLETED", location: "Remote", image: "/activityLogos/githubLogo.png?height=50&width=50" },
      { name: "Snap Partner Summit 2024", description: "", date: "SEPT 17, 2024", status: "COMPLETED", location: "Remote", image: "/activityLogos/snapchatLogo.png?height=50&width=50" },
      { name: "ColorStack's Fall '24 Career Fair", description: "", date: "AUG 22 - AUG 23, 2024", status: "COMPLETED", location: "Remote", image: "/activityLogos/colorstackLogo.jpeg?height=50&width=50" },
      { name: "Roblox Building Blox", description: "Beyond The Code!", date: "AUG 15, 2024", status: "COMPLETED", location: "Remote", image: "/activityLogos/robloxLogo.jpg?height=50&width=50" },
      { name: "NASA Beyond STEM", description: "Exploring Diverse Internship Paths at NASA", date: "AUG 8, 2024", status: "COMPLETED", location: "Remote", image: "/activityLogos/nasaLogo.png?height=50&width=50" },
      { name: "NASA Internship Experience", description: "Insights from Interns and Mentors", date: "JUL 26, 2024", status: "COMPLETED", location: "Remote", image: "/activityLogos/nasaLogo.png?height=50&width=50" },
    ],
    USC: [
      { name: "USC Viterbi Engineering", description: "Career & Internship Fair - Fall 2024", date: "OCT 2, 2024", status: "UPCOMING", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
      { name: "USC LeetCode Jam Night", description: "", date: "SEPT 18, 2024", status: "UPCOMING", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
      { name: "USC Fall Career Fair 2024", description: "", date: "SEPT 12, 2024", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
      { name: "USC Entrepreneurship Expo", description: "", date: "SEPT 5, 2024", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
      { name: "USC Viterbi Fair", description: "", date: "SEPT 5, 2024", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
      { name: "USC Career Carnival", description: "", date: "SEPT 4, 2024", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
      { name: "USC Involvement Fair", description: "", date: "AUG 29, 2024", status: "COMPLETED", location: "USC Campus", image: "/activityLogos/uscLogo.png?height=50&width=50" },
    ],
  }

export default function MyActivity() {
  const [selectedTopic, setSelectedTopic] = useState('Hackathons')
  const [showAll, setShowAll] = useState(false)

  const displayedActivities = showAll ? activities[selectedTopic] : activities[selectedTopic].slice(0, 4)

  return (
    <section className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">My Activity</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(activities).map((topic) => (
            <button
              key={topic}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTopic === topic
                  ? 'bg-white text-gray-900'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
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
          {displayedActivities.map((activity, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img src={activity.image} alt={activity.name} className="w-12 h-12 mr-4 rounded" />
                  <div>
                    <h3 className="text-xl font-semibold">{activity.name}</h3>
                    {activity.description && (
                      <p className="text-sm text-gray-400">{activity.description}</p>
                    )}
                  </div>
                </div>
                {activity.date && <p className="text-blue-400 mb-2">{activity.date}</p>}
                {activity.status && (
                  <p className={`text-sm font-medium mb-2 ${
                    activity.status === 'COMPLETED' ? 'text-green-400' :
                    activity.status === 'UPCOMING' ? 'text-yellow-400' :
                    activity.status === 'LIVE' ? 'text-red-400' :
                    activity.status === 'Flight Canceled Due to Hurricane Helene' ? 'text-red-400' :
                    'text-gray-400'
                  }`}>
                    {activity.status}
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
        {activities[selectedTopic].length > 4 && (
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