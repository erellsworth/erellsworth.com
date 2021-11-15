import { ContentInterface } from "./interfaces/content";
import { NuxtMeta } from "./interfaces/misc";

export const isNumeric = (n: unknown): boolean => {
    return !isNaN(parseFloat(n as string)) && isFinite(n as number);
}

export const getMeta = (content: ContentInterface): NuxtMeta[] => {

    const meta: NuxtMeta[] = [
        {
            hid: "og:title",
            name: "og:title",
            content: content.title,
        },
        {
            hid: "og:url",
            name: "og:url",
            content: `https://erellsworth.com/${content.slug}`,
        },
        {
            hid: "og:type",
            name: "og:type",
            content: "article",
        },
        {
            hid: "og:article:published_time",
            name: "og:article:published_time",
            content: content.createdAt,
        }
    ];

    if (content.thumbnail) {
        meta.push({
            hid: "og:image",
            name: "og:image",
            content: content.thumbnail,
        });
    }

    if (content.Taxonomies) {
        content.Taxonomies.forEach((tag) => {
            meta.push({
                hid: tag.id.toString(),
                name: "og:article:tag",
                content: tag.name,
            });
        });
    }


    Object.keys(content.seo).forEach((key) => {
        const tagContent = content.seo[key];
        meta.push({
            hid: key,
            name: key,
            content: tagContent,
        });
        meta.push({
            hid: `og:${key}`,
            name: `og:${key}`,
            content: tagContent,
        });
    });

    return meta;
}