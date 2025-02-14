import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const UserAvatar: React.FC = () => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>

    )
}
