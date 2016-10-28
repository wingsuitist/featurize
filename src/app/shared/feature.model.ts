export class Feature {
  id: number;
  title: string;
  author: string;
  description: string;
  ratings: Array<any>;

  constructor(featureData) {
    this.id = featureData['id'];
    this.title = featureData['title'];
    this.author = featureData['author'];
    this.description = featureData['description'];
    this.ratings = featureData['ratings'];
  }

  getRating(): number {
    let ratingSum: number = 1;
    for (let rating of this.ratings) {
      ratingSum += parseInt(rating.rating);
    }
    return ratingSum;
  }
}
