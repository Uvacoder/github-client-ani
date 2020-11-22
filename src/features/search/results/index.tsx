import React from "react";
import { Skeleton, Empty } from "antd";
import { Repo, User } from "shared/components";
import { SearchType } from "models";
import { useSearchQueryParam, useSearchTypeParam } from "../params";
import { useSearchQuery, RepoFieldsFragment, UserFieldsFragment } from "./queries.gen";
import "./index.scss";

/**
 * @feature Результаты поиска
 */
const SearchResults = () => {
    const { searchQuery } = useSearchQueryParam();
    const { searchTypeEnum } = useSearchTypeParam();
    const { data, loading } = useSearchQuery({
        variables: {
            type: searchTypeEnum,
            query: searchQuery,
        },
    });

    const isEmpty = !loading && (!data || data.search.edges?.length === 0);

    return (
        <div className="search-results">
            <h2 className="search-results__toolbar">
                Results by <b>{searchQuery}</b> search:
            </h2>
            <div className="search-results__list">
                {loading && (
                    <>
                        <Skeleton active />
                        <Skeleton active />
                        <Skeleton active />
                    </>
                )}
                {/* FIXME: as wrapper? */}
                {/* FIXME: Пока что фильтруем Организации, т.к. под них нужна отдельная страница и логика */}
                {data?.search.edges
                    // @ts-ignore FIXME: specify types
                    ?.filter((edge) => edge?.node?.__typename !== "Organization")
                    .map((edge) => {
                        // !!! FIXME: specify types
                        // FIXME: simplify
                        if (searchTypeEnum === SearchType.Repository) {
                            const data = edge?.node as RepoFieldsFragment;
                            return (
                                <ResultItem key={data.id}>
                                    <Repo {...data} />
                                </ResultItem>
                            );
                        }
                        if (searchTypeEnum === SearchType.User) {
                            const data = edge?.node as UserFieldsFragment;
                            return (
                                <ResultItem key={data.id}>
                                    <User {...data} />
                                </ResultItem>
                            );
                        }
                        return null;
                    })}
                {isEmpty && <Empty className="p-8" description="No results found" />}
            </div>
        </div>
    );
};

const ResultItem = ({ children }: PropsWithChildren) => (
    <div className="search-results__item mb-6">{children}</div>
);

export default SearchResults;
