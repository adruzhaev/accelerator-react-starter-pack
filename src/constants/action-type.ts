export const ActionType = {
  FETCH_FILTERED_GUITARS: 'guitars/fetchFilteredGuitarsList',
  FETCH_GUITAR_BY_ID: 'guitars/fetchGuitarById',
  FETCH_GUITARS_BY_NAME: 'guitars/fetchGuitarsListByName',
  SEND_REVIEW_TO_GUITAR: 'guitars/sendReviewToGuitar',
  SEND_COUPON_FOR_DISCOUNT: 'guitars/sendCouponForDiscount',
} as const;
