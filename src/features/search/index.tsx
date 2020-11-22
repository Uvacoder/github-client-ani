import React from "react";
import Results from "./results";
import Filters from "./filters";

// FIXME: split later by features with common cluster?

/**
 * @feature Поиск по репозиториям, пользователям
 * @remark Для использования подфич, обертка <Search/> не нужна
 */
const Search = ({ children }: PropsWithChildren) => <div className="search">{children}</div>;

Search.Results = Results;
Search.Filters = Filters;

export default Search;
