export type BreedsState = {
    breeds: {
        current_page: number;
        data: [
            {
                breed: string;
                country?: string;
                origin?: string;
                coat?: string;
                pattern?: string;
            }
        ];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: [
            {
                url: string | null;
                label: string;
                active: boolean;
            }
        ];
        next_page_url: string;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
};
