import React from "react";
import { Layout, Input } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
import * as qs from "query-string";
import { Auth } from "features";
import { ReactComponent as IcLogo } from "./logo.svg";
import "./index.scss";

const Header = () => {
    const { isAuth } = Auth.useAuth();
    // !!! FIXME: limit scope of query-params literals
    const [search, setSearch] = useQueryParam("q", StringParam);
    const [type] = useQueryParam("type", StringParam);
    const [s] = useQueryParam("s", StringParam);
    const [o] = useQueryParam("o", StringParam);
    const location = useLocation();
    const history = useHistory();

    return (
        <Layout.Header className="header">
            <div className="nav flex flex-grow items-center">
                <Link className="header__logo flex items-center" to="/">
                    <IcLogo />
                    {!isAuth && <span className="gc-app__title text-white m-4">GITHUB-CLIENT</span>}
                </Link>
                {isAuth && (
                    <Input
                        className="header__search"
                        placeholder="Search..."
                        defaultValue={location.pathname === "/search" ? search ?? "" : ""}
                        onKeyDown={({ key, currentTarget }) => {
                            if (key === "Enter" && currentTarget.value) {
                                if (location.pathname === "/search")
                                    setSearch(currentTarget.value, "replace");
                                else
                                    history.push(
                                        `/search?${qs.stringify({
                                            q: currentTarget.value,
                                            type,
                                            s,
                                            o,
                                        })}`,
                                    );
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
