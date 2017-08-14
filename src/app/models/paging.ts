import { Artist } from './artist';

export class Paging {
    public href: string;
    public items: Array<Artist>;
    public limit: number;
    public next: string;
    public offset: number;
    public previous: string;
    public total: number;

    constructor(){ }
}
