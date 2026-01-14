"use client"

import { useQuery } from "@apollo/client/react"
import {gql} from '@apollo/client'

export default function Page() {
    const {loading, error, data} = useQuery(gql `
        query  {
        hello
        getArticles {
           title}}
        `)

        console.log({loading, error, data})
    return <div>GraphQL</div>
}