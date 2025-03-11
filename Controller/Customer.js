const { Customer } = require("../Models/Customer");
const multer = require("multer");
const fs = require("fs");
const path = require("path");



const AddCustomer = async (req, res) => {
  

  const { Name, Contact,Items,TotalAmount,SoldBy,BranchName } = req.body;

  try {

    const customer = await Customer.create({
        Name, Contact,Items,TotalAmount,SoldBy,BranchName
    }).then((result) => {
      res.status(200).json(result);
      return result;
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const GetAllcustomer = async (req, res) => {
  try {
    const branch = await Customer.findAll().then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const GetAllcustomerByPage = async (req, res) => {
  const PageNo = Number.parseInt(req.query.page)
    const sizeNo = Number.parseInt(req.query.size)

    let page = 0

    if(!Number.isNaN(PageNo) && PageNo > 0){
        page =PageNo
    }

    let size =5
    if(!Number.isNaN(sizeNo) && sizeNo > 0 && sizeNo < 500){
        size = sizeNo
    }

  try {
    const branch = await Customer.findAndCountAll({
      order: [["createdAt", "DESC"]],
     // This replaces the reverse() method
        limit:size,
        offset:page *size
    }).then((result) => {
      res.status(200).json(result.rows);
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const GetSinglecustomer = async(req,res)=>{
  const BranchId = req.params.id
  
  try {

    const Getone = await Customer.findOne({where: {id:BranchId}}).then(result =>{
      res.status(200).json({result})
    })
  } catch (error) {
    res.status(400).json({error:error.message})
  }

}



const DeleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    
    const branch = await Customer.destroy({
      where: { id },
      cascade: true,
    }).then((result) => {
      res.status(200).json({ message: "Record deleted successfully" });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    AddCustomer,
    GetAllcustomer ,
    GetSinglecustomer,
    DeleteRecord ,
    GetAllcustomerByPage
};
