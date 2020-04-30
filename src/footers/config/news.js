import { articles_url, _api_key, category, country_code } from "./restConfig"

export async function getArticles() {

    try {
        let articles = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&language=en&apiKey=a9417e9c323e4e84aa9ef9f3b09b913d`)
        let result = await articles.json()
        articles = null
        return result.articles
    }
    catch (error) { throw error }
}

export async function getBusinessArticles() {

    try {
        let articles = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&language=en&apiKey=a9417e9c323e4e84aa9ef9f3b09b913d`)
        let result = await articles.json()
        articles = null
        return result.articles
    }
    catch (error) { throw error }
}

export async function getTechArticles() {

    try {
        let articles = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&language=en&apiKey=a9417e9c323e4e84aa9ef9f3b09b913d`)
        let result = await articles.json()
        articles = null
        return result.articles
    }
    catch (error) { throw error }
}