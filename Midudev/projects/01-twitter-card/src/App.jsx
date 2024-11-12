import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const format = (userName) => `@${userName}`;

  const r4mmst3in = { isFollowing: true, userName: 'r4mmst3in' }
  const midudev = { isFollowing: false, userName: 'midudev' }

  return (
    <section className="App">
      <TwitterFollowCard {...r4mmst3in}>
      Pedro Javier Martin Peña
      </TwitterFollowCard>

      <TwitterFollowCard {...midudev}>
      Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard
      userName="elonmusk"
      isFollowing={false}>
      Elon Musk
      </TwitterFollowCard>
    
      <TwitterFollowCard 
      userName="linustorvalds" 
      isFollowing>
      Linus Torvalds
      </TwitterFollowCard>
    </section>
  )
}
