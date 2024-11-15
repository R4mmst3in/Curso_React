import { useState } from "react"


// children hace referencia al hijo del elemento que envuelve. En este caso los que va

export function TwitterFollowCard ({userName, children, initialIsFollowing}) {

  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
  const textButton = isFollowing ?
  'Siguiendo' :
  'Seguir'
  
  // const handleState = () => setIsFollowingstate(!isFollowing)
  
  // Si isFollowing es cierto tiene la clase de button y la clase de following. En caso contrario solo button
  const classNameButton = isFollowing ?
  'tw-followCard-button is-following' :
  'tw-followCard-button'

  const handleClick = () => {setIsFollowing(!isFollowing)}
  
    return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className= 'tw-followCard-avatar'
          alt="R4mmst3in"
          src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          className={classNameButton}
          onClick = {handleClick}>
          <span className='tw-followCard-text'>{textButton}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
