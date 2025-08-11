type Props = {
    title?: string,
    description?: string,
    tags?: string
}

function useSEO({ title = "RecipesApp", description = "", tags = "" }: Props) {
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement
    const metaTags = document.querySelector('meta[name="keywords"]') as HTMLMetaElement

    if (metaDescription) {
        metaDescription['content'] = description
    }
    if (metaTags) {
        metaTags.content = tags
    }

    document.title = title

}

export default useSEO