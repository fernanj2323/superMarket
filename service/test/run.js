

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

//Assertion Style
chai.should();

var testCase = require('mocha').describe;


chai.use(chaiHttp);
const url= 'http://localhost:3000';



testCase('Testing Items : ',()=>{


    // testing get 
    testCase("GET /api/items/getItems", () =>{
        it("It should GET all the items", (done) =>{
            chai.request(url)
            .get('/api/items/getItems')
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('array');
      
            done();
            })
        })    
    })


    // testing wrong get
    testCase("GET /api/items/getItems", () =>{
        it("It should NOT GET all the items", (done) =>{
            chai.request(url)
            .get('/api/items/wrongAPI')
            .end((err, response) =>{
                response.should.have.status(404);
          
            done();
            })
        })    
    })
    

    
        // testing post 
        testCase("POST /api/items/postItem", () =>{
            it("It should POST the item", (done) =>{

                const item = {
                    title :"test title",
                    description: 'test description',
                    category: 'test categoryId',
                    quantity: 2
                }
                chai.request(url)
                .post('/api/items/postItem')
                .send(item)
                .end((err, response) =>{
                    response.should.have.status(200);
              
                done();
                })
            })    
        })
   

        // testing wrong post 
        testCase("POST /api/items/postItem", () =>{
            it("It should NOT POST the item", (done) =>{

                const item = {
                    title :"test title",
                    description: 'test description',
            
                    categoryId: 'test categoryId'
                }
                chai.request(url)
                .post('/api/items/wrongapi')
                .send(item)
                .end((err, response) =>{
                    response.should.have.status(404);
              
                done();
                })
            })    
        })
   


        //testing put 
        //5ebb6c866bb95c45ee22146e 
        testCase("PUT /api/items/putItem", () =>{
            it("It should PUT the item", (done) =>{

                const id = '5ebb6c866bb95c45ee22146e'
                const item = {
                    title :"test title updated",
                    description: 'test description updated',
                    category: 'test category updated',
                    quantity: 5
                }

                chai.request(url)
                .put('/api/items/putItem/'+ id)
                .send(item)
                .end((err, response) =>{
                    response.should.have.status(200);
              
                done();
                })
            })    
        })


       // wrong testing put 
        //5ebb6c866bb95c45ee22146e 
        testCase("PUT /api/items/putItem", () =>{
            it("It should NOT PUT the item", (done) =>{

               const id = '5ebb34b0e2d6343a70939274xxxxx'
                const item = {
                    title :"test title updated",
                    description: 'test description updated',
                    category: 'test category updated'
                }

                chai.request(url)
                .put('/api/items/putItem/'+ id)
                .send(item)
                .end((err, response) =>{
                    response.should.have.status(404);
              
                done();
                })
            })    
        })
   

})
