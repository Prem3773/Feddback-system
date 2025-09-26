import React from 'react'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='flex' > 
        <StudentFeedbackDashboard/>
        <Sidebar/>
    </div>
  )
}

export default Home