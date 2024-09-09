class Get {
    constructor() {
        this.baseUrl = `https://dev.emeli.in.ua/wp-json/wp/v2`;
    }

    getPostsId(postId) {
        return cy.request({
            method: `GET`,
            url: `${this.baseUrl}/posts/${postId}`,
            failOnStatusCode: false,
        })
    }

    verifyPostDetails(post) {
        expect(post).to.not.be.undefined;
        expect(post.id).to.equal(13572);
        expect(post.date).to.equal('2024-09-04T18:00:26');
        expect(post.date_gmt).to.equal('2024-09-04T18:00:26');
    }

}
export default new Get();