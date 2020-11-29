import React from "react";
import { Button } from "antd";
import Card from "../card";

// !!! FIXME: specify types
type Props = {
    data: any;
};

const User = (props: Props) => {
    const { avatarUrl, login, viewerIsFollowing, bio } = props.data as Partial<
        import("models").User
    >;
    return (
        <Card
            className="user"
            previewUrl={avatarUrl}
            titleHref={`/${login}`}
            title={login}
            description={bio}
            actions={
                <Button
                    className="user__action follow"
                    type={viewerIsFollowing ? "primary" : "default"}
                >
                    {viewerIsFollowing ? "unfollow" : "follow"}
                </Button>
            }
        />
    );
};

export default User;
