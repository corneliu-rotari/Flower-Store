export class BasketDto {
  basket_id: number;
  user_id?: number;
  flower_id?: number;
  quantity: number;
  constructor(
    user_id: number,
    flower_id: number,
    quantity: number,
    basket_id?: number,
  ) {
    if (basket_id) this.basket_id = basket_id;
    this.user_id = user_id;
    this.flower_id = flower_id;
    this.quantity = quantity;
  }
}
