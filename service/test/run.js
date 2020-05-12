// let chai = require ("chai");
// let chaiHttp = require("chai-http");
// let server = require("../index");

// //assertion style 
// chai.should();

// chai.use(chaiHttp);


let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

//Assertion Style
chai.should();

var testCase = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;

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
    

    
        // testing put
        testCase("POST /api/items/postItem", () =>{
            it("It should POST the item", (done) =>{

                const item = {
                    title :"test title",
                    description: 'test description',
                    imagePath: 'test image path',
                    categoryId: 'test categoryId'
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
   


})




testCase('Testing Categoriess : ',()=>{


    // testing get 
    testCase("GET /api/items/getCategories", () =>{
        it("It should GET all the categories", (done) =>{
            chai.request(url)
            .get('/api/category/getCategories')
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('array');
      
            done();
            })
        })    
    })


    // testing wrong get
    testCase("GET /api/items/getItems", () =>{
        it("It should NOT GET all the categories", (done) =>{
            chai.request(url)
            .get('/api/category/wrongAPI')
            .end((err, response) =>{
                response.should.have.status(404);
          
            done();
            })
        })    
    })
    

    
        // testing put
        testCase("POST /api/items/postItem", () =>{
            it("It should POST the category", (done) =>{

                const item = {
                    title :"test title",
                    description: 'test description',
         
                }
                chai.request(url)
                .post('/api/category/postCategory')
                .send(item)
                .end((err, response) =>{
                    response.should.have.status(200);
              
                done();
                })
            })    
        })
   


})
