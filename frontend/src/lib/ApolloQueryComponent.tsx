import { QueryResult } from "@apollo/client";
import { ReactNode } from "react";

type Props<T> = {
    children: (result: T) => ReactNode;
    result: QueryResult<T>;
};
export const ApolloQueryComponent= <T,>({children,result: { loading, error, data }}: Props<T>) => {
    if (loading) {
        return <>Loading...</>;
    }
    if (error) {
        return <>{ JSON.stringify(error) } </>;
    }
    if (data) {
        return <>{ children(data) } </>;
    }
    return <></>;
};