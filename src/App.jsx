import React from 'react'
import ProfileCard from './components/ProfileCard'
import { users } from './data/users'
import './styles/App.css'

const App = () => {
  const handleViewProfile = (name) => {
    alert(`Viewing profile for ${name}`)
  }

  return (
    <div className="app-container">
      <h1>Profile Card App</h1>
      <p className="app-description">
        This app shows how props flow from the parent component to a reusable
        child component. Each card receives user data, a color, status, and a
        click handler.
      </p>

      <div className="cards-grid">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            age={user.age}
            role={user.role}
            image={user.image}
            color={user.color}
            isOnline={user.isOnline}
            onViewProfile={handleViewProfile}
          >
            Top Performer 🏆
          </ProfileCard>
        ))}
      </div>
    </div>
  )
}

export default App