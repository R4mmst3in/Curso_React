import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'R4mmst3in',
    name: 'Pedro Javier Martin Peña',
    isFollowing: true,
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false,
  },
  {
    userName: 'elonmusk3in',
    name: 'Elon Musk',
    isFollowing: false,
  },
  {
    userName: 'linustorvalds',
    name: 'Linus Torvalds',
    isFollowing: true,
  },
  {
    userName: 'ibai',
    name: 'Puto Gordo',
    isFollowing: true,
  }
]

export function App() {

  return (
    <section className="App">
      {
        users.map (user => {
          const {  userName, name, isFollowing } = user
          return (<TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}>
            {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
