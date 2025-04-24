type Page = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close';
    details?: {
        createdAt: Date,
        updatedAt: Date,
    }
}