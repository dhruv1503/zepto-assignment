import { FC } from "react"
import ListItem, { ListItemProps } from "../ListItem/ListItem"
interface TooltipProps {
    isOpen : boolean,
    data: Array<ListItemProps>
}

export const Tooltip : FC<TooltipProps> = ({isOpen, data}) => {
    return <div>{data ? data.map((item) => (<ListItem  key={item.id} id={item.id} name={item.name} email={item.email} image={item.email}/>)) : <></>}</div>
}