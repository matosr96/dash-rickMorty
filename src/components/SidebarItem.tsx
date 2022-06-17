import { SidebarMenuItem } from "@/interface/sidebar.model";
import classNames from "@/utils/class";
import '@styles/components/sidebarItem.scss'

interface SidebarMenuItemViewProps {
    item: SidebarMenuItem;
    isOpen: boolean;
  }

export default function SidebarMenuItemView({
    item,
    isOpen,
  }: SidebarMenuItemViewProps) {
    return (
      <div className="SidebarMenuItemView">
        <a href={item.url}>
          <div className={classNames("ItemContent", isOpen ? "" : "collapsed")}>
            <div className="icon">
              <item.icon size="32" />
            </div>
            <span className="label">{item.label}</span>
          </div>
        </a>
        {!isOpen ? <div className="tooltip">{item.label}</div> : ""}
      </div>
    );
  }