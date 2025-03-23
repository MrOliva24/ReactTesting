import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'React',
    name: 'React a reaction',
    isFollowing: true
  },
  {
    userName: 'YouTube',
    name: 'John Youtube',
    isFollowing: false
  },
  {
    userName: 'Twitch',
    name: 'Streaming n Dreaming',
    isFollowing: true
  },
  {
    userName: 'PyTorch',
    name: 'The torch library',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}