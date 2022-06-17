import { SidebarMenuCard } from "@/interface/sidebar.model";
import classNames from "@/utils/class";
import '@styles/components/sidebarCard.scss'

interface SidebarMenuCardViewProps {
    card: SidebarMenuCard;
    isOpen: boolean;
  }

export default function SidebarCard({card, isOpen}: SidebarMenuCardViewProps) {
    return (
      <div className='SidebarMenuCardView'>
        <img className='profile' src={card.photoUrl} width="100%"/>
        <div className={classNames("profileInfo", isOpen ? "" : "collapsed")}>
          <div className='name'>{card.displayName}</div>
          <div className='title'>{card.title}</div>
          <div className='url'>
            <a href={card.url}> Ir al perfil </a>
          </div>
        </div>
      </div>
    )
  }