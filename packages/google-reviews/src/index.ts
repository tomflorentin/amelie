export type GoogleReview = {
  id: string;
  name: string;
  quote: string;
  rating: number;
  publishedAt?: string;
  googleMapsUrl: string;
};

export function getStaticGoogleFiveStarReviews(
  reviews: ReadonlyArray<GoogleReview>,
): GoogleReview[] {
  return reviews.filter((review) => review.rating === 5);
}

export function mergeTestimonials<T extends { name: string; quote: string }>(
  hardCoded: T[],
  googleReviews: GoogleReview[],
): Array<T | GoogleReview> {
  return [...hardCoded, ...googleReviews];
}
