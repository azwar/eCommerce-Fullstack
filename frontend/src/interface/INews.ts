export interface INews {
    title: string,
    pubDate: number,
    category: string,
    subCategory: string,
    link: string,
    linkImage: string,
    author: string,
    newsProvider: INewsProvider,
    content: string,
    sumary?: string,
    readCount?: number,
    encryptedId: string,
    imageExist: boolean,
    contentExist: boolean
}

export interface INewsProvider {
    id?: number,
    name: string,
    domain: string,
    imageIcon?: null,
    listCategory?: string[]
}