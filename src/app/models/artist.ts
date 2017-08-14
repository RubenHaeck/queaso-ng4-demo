import { Followers } from './followers';
import { Image } from './image';

export class Artist {
    public followers: Followers;
    public genres: Array<string>;
    public href: string;
    public id: string;
    public images: Array<Image>;
    public name: string;
    public popularity: number;
    public type: string;
    public uri: string;
}