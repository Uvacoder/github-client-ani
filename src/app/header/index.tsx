import React from "react";
import { Layout, Input } from "antd";
import * as qs from "query-string";
import { Auth } from "features";
import ImgLogo from "./logo.png";
import "./index.scss";

const Header = () => {
    const { isAuth } = Auth.useAuth();
    // !!! FIXME: limit scope of query-params literals
    // TODO: (wrap in QueryParamProvider) - wrap app with header instead of only content?
    // const [search] = useQueryParam("q", StringParam);
    const search = (qs.parse(window.location.search).q as string) || "";

    return (
        <Layout.Header className="header">
            <div className="nav flex-grow">
                <a className="header__logo" href="/">
                    {/* FIXME: Временная иконка, поправить позже */}
                    <img className="header__logo" src={ImgLogo} alt="logo" width={48} height={48} />
                    {!isAuth && <span className="gc-app__title text-white m-4">GITHUB-CLIENT</span>}
                </a>
                {isAuth && (
                    <Input
                        className="header__search"
                        placeholder="Search..."
                        defaultValue={search}
                        onKeyDown={({ key, target }) => {
                            // @ts-ignore FIXME: specify types
                            if (key === "Enter" && target.value) {
                                // @ts-ignore FIXME: specify types
                                window.location.replace(`/search?q=${target.value}`);
                            }
                        }}
                    />
                )}
            </div>
            <Auth.User />
        </Layout.Header>
    );
};

export default Header;
