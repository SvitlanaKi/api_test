import Get from "../../support/page_object/get";

describe (`get test`,()=>{
   it (`check status`,()=>{
       const postId = 13572;
       Get.getPostsId(postId).then((response)=>{
           cy.log(JSON.stringify(response.body));
           expect(response.status).to.equal(200);
           expect(response.body).to.not.be.undefined;
           const post = response.body;
           Get.verifyPostDetails(post)
       })
   })
})