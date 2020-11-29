/** @generated THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import * as Types from '../../models.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type ReposQueryVariables = Types.Exact<{
  login: Types.Scalars['String'];
  ownerAffiliations?: Types.Maybe<ReadonlyArray<Types.Maybe<Types.RepositoryAffiliation>>>;
  after?: Types.Maybe<Types.Scalars['String']>;
  before?: Types.Maybe<Types.Scalars['String']>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  last?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type ReposQuery = { readonly user?: Types.Maybe<{ readonly id: string, readonly repositories: { readonly totalCount: number, readonly pageInfo: { readonly endCursor?: Types.Maybe<string>, readonly startCursor?: Types.Maybe<string>, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean }, readonly nodes?: Types.Maybe<ReadonlyArray<Types.Maybe<{ readonly id: string, readonly name: string, readonly updatedAt: any, readonly viewerHasStarred: boolean, readonly primaryLanguage?: Types.Maybe<{ readonly color?: Types.Maybe<string>, readonly name: string }>, readonly owner: { readonly login: string } | { readonly login: string } }>>> } }> };

export type CredentialsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CredentialsQuery = { readonly viewer: { readonly id: string, readonly login: string } };

export type StarRepoMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  clientMutationId?: Types.Maybe<Types.Scalars['String']>;
}>;


export type StarRepoMutation = { readonly addStar?: Types.Maybe<{ readonly clientMutationId?: Types.Maybe<string> }> };

export type UnstarRepoMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  clientMutationId?: Types.Maybe<Types.Scalars['String']>;
}>;


export type UnstarRepoMutation = { readonly removeStar?: Types.Maybe<{ readonly clientMutationId?: Types.Maybe<string> }> };


export const ReposDocument = gql`
    query Repos($login: String!, $ownerAffiliations: [RepositoryAffiliation], $after: String, $before: String, $first: Int, $last: Int) {
  user(login: $login) {
    id
    repositories(ownerAffiliations: $ownerAffiliations, orderBy: {field: PUSHED_AT, direction: DESC}, after: $after, before: $before, first: $first, last: $last) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
      nodes {
        id
        name
        primaryLanguage {
          color
          name
        }
        owner {
          login
        }
        updatedAt
        viewerHasStarred
      }
    }
  }
}
    `;

/**
 * __useReposQuery__
 *
 * To run a query within a React component, call `useReposQuery` and pass it any options that fit your needs.
 * When your component renders, `useReposQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReposQuery({
 *   variables: {
 *      login: // value for 'login'
 *      ownerAffiliations: // value for 'ownerAffiliations'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useReposQuery(baseOptions?: Apollo.QueryHookOptions<ReposQuery, ReposQueryVariables>) {
        return Apollo.useQuery<ReposQuery, ReposQueryVariables>(ReposDocument, baseOptions);
      }
export function useReposLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReposQuery, ReposQueryVariables>) {
          return Apollo.useLazyQuery<ReposQuery, ReposQueryVariables>(ReposDocument, baseOptions);
        }
export type ReposQueryHookResult = ReturnType<typeof useReposQuery>;
export type ReposLazyQueryHookResult = ReturnType<typeof useReposLazyQuery>;
export type ReposQueryResult = Apollo.QueryResult<ReposQuery, ReposQueryVariables>;
export const CredentialsDocument = gql`
    query Credentials {
  viewer {
    id
    login
  }
}
    `;

/**
 * __useCredentialsQuery__
 *
 * To run a query within a React component, call `useCredentialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCredentialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCredentialsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCredentialsQuery(baseOptions?: Apollo.QueryHookOptions<CredentialsQuery, CredentialsQueryVariables>) {
        return Apollo.useQuery<CredentialsQuery, CredentialsQueryVariables>(CredentialsDocument, baseOptions);
      }
export function useCredentialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CredentialsQuery, CredentialsQueryVariables>) {
          return Apollo.useLazyQuery<CredentialsQuery, CredentialsQueryVariables>(CredentialsDocument, baseOptions);
        }
export type CredentialsQueryHookResult = ReturnType<typeof useCredentialsQuery>;
export type CredentialsLazyQueryHookResult = ReturnType<typeof useCredentialsLazyQuery>;
export type CredentialsQueryResult = Apollo.QueryResult<CredentialsQuery, CredentialsQueryVariables>;
export const StarRepoDocument = gql`
    mutation StarRepo($id: ID!, $clientMutationId: String) {
  addStar(input: {starrableId: $id, clientMutationId: $clientMutationId}) {
    clientMutationId
  }
}
    `;
export type StarRepoMutationFn = Apollo.MutationFunction<StarRepoMutation, StarRepoMutationVariables>;

/**
 * __useStarRepoMutation__
 *
 * To run a mutation, you first call `useStarRepoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStarRepoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [starRepoMutation, { data, loading, error }] = useStarRepoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      clientMutationId: // value for 'clientMutationId'
 *   },
 * });
 */
export function useStarRepoMutation(baseOptions?: Apollo.MutationHookOptions<StarRepoMutation, StarRepoMutationVariables>) {
        return Apollo.useMutation<StarRepoMutation, StarRepoMutationVariables>(StarRepoDocument, baseOptions);
      }
export type StarRepoMutationHookResult = ReturnType<typeof useStarRepoMutation>;
export type StarRepoMutationResult = Apollo.MutationResult<StarRepoMutation>;
export type StarRepoMutationOptions = Apollo.BaseMutationOptions<StarRepoMutation, StarRepoMutationVariables>;
export const UnstarRepoDocument = gql`
    mutation UnstarRepo($id: ID!, $clientMutationId: String) {
  removeStar(input: {starrableId: $id, clientMutationId: $clientMutationId}) {
    clientMutationId
  }
}
    `;
export type UnstarRepoMutationFn = Apollo.MutationFunction<UnstarRepoMutation, UnstarRepoMutationVariables>;

/**
 * __useUnstarRepoMutation__
 *
 * To run a mutation, you first call `useUnstarRepoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnstarRepoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unstarRepoMutation, { data, loading, error }] = useUnstarRepoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      clientMutationId: // value for 'clientMutationId'
 *   },
 * });
 */
export function useUnstarRepoMutation(baseOptions?: Apollo.MutationHookOptions<UnstarRepoMutation, UnstarRepoMutationVariables>) {
        return Apollo.useMutation<UnstarRepoMutation, UnstarRepoMutationVariables>(UnstarRepoDocument, baseOptions);
      }
export type UnstarRepoMutationHookResult = ReturnType<typeof useUnstarRepoMutation>;
export type UnstarRepoMutationResult = Apollo.MutationResult<UnstarRepoMutation>;
export type UnstarRepoMutationOptions = Apollo.BaseMutationOptions<UnstarRepoMutation, UnstarRepoMutationVariables>;