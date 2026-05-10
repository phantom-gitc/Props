import React from 'react'
import '../styles/ProfileCard.css'

const ProfileCard = ({
  name,
  age,
  role,
  image,
  color,
  isOnline,
  onViewProfile,
  children,
}) => {
  const statusText = isOnline ? 'Online' : 'Offline'
  const statusClass = isOnline ? 'status online' : 'status offline'

  return (
    <article className="profile-card" style={{ borderColor: color }}>
      <div
        className="profile-card__header"
        style={{ backgroundColor: `${color}22` }}
      >
        <img src={image} alt={`${name} avatar`} className="profile-card__avatar" />
      </div>

      <div className="profile-card__body">
        <h2 className="profile-card__name">{name}</h2>
        <p className="profile-card__role">{role}</p>
        <p className="profile-card__age">Age: {age}</p>
        <p className={statusClass}>{statusText}</p>
        <div className="profile-card__badge">{children}</div>
        <button
          type="button"
          className="profile-card__button"
          onClick={() => onViewProfile(name)}
        >
          View Profile
        </button>
      </div>
    </article>
  )
}

export default ProfileCard
