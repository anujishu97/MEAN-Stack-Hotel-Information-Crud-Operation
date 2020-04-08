const express = require('express');
const app = express();
const customerRoutes = express.Router();


//Require Customer Model in our routes model.

let Customer=require('../models/Customer');

//Defined add route

customerRoutes.route('/add').post(function(req,res){
    let customer=new Customer(req.body);
    customer.save()
    .then(game => {
        res.status(200).json({'adUnit': 'AdUnit in added successfully'});
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
});

//Defined get data.

customerRoutes.route('/').get(function(req,res){
    Customer.find(function(err,customers){
        if(err){
            console.log(err);
        }
        else{
            res.json(customers);
        }
    });
});

//Defined edit route
customerRoutes.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Customer.findById(id,function(err,customer){
        res.json(customer);
    });
});

//Defined update route

customerRoutes.route('/update/:id').post(function(req,res){
    Customer.findById(req.params.id,function(err,customer){
        if(!customer)
            return next(new Error('Could not load document'));
        else{
            customer.c_name=req.body.c_name;
            customer.c_emailid=req.body.c_emailid;
            customer.c_address=req.body.c_address;
            customer.occupation=req.body.occupation;
            customer.c_mobileno=req.body.c_mobileno;
            customer.numbers_of_adult=req.body.numbers_of_adult;
            customer.numbers_of_child=req.body.numbers_of_child;
            customer.room_no=req.body.room_no;

            customer.save().then(customer=>{
                res.json('Update Complete');
            })
            .catch(err=>{
                res.status(400).send("Unable to update the database");
            });
        }
    });
});

//Define delete or remove data
customerRoutes.route('/delete/:id').get(function(req,res){
    Customer.findByIdAndRemove({_id: req.params.id},function(err,customer){
        if(err)
            res.json(err);
        else
            res.json('Successfully Removed');
    });
});

module.exports=customerRoutes;