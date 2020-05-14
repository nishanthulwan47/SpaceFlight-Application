export interface NewSpaceflight {
    title: string;
    news_site: string;
    news_site_long: string;
    url: string;
    featured_image: string;
    id: BigInteger;
    date_published: BigInteger;
    date_added: BigInteger;
    published_date: BigInteger;
    events: string[];
    ll: string[];
    categories: string[];
    tags: string[];
    launches: string[];
}
