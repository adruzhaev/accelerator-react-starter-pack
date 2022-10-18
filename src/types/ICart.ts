import { IGuitar } from './IGuitars';

export interface ICartItem {
    guitar: IGuitar
    quantity: number
}

export interface ICart {
    items: Array<ICartItem>
    coupon: string
}
