class Get{
    constructor() {
        this.baseUrl=`https://dev.emeli.in.ua/wp-json/wp/v2`;
    }
    getPosts(){
        return cy.request({
            method:`GET`,
            url: `${this.baseUrl}/posts/13572`,
            failOnStatusCode: false,
        })
    }
    checkGetPOST(post){
        expect()
    }
}